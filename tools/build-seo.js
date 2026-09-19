#!/usr/bin/env node
/* ==========================================================================
   build-seo.js - voorrenderen voor zoekmachines
   Draait de echte app-code (content, views, seo) in Node en schrijft:
     - index.html            (homepage: meta-tags, JSON-LD en voorgerenderde inhoud)
     - les/<slug>/index.html, module/<slug>/index.html, naslag/index.html
     - sitemap.xml, robots.txt, 404.html
   Zoekmachines krijgen zo echte HTML per URL. In de browser neemt app.js over.

   Gebruik:   node tools/build-seo.js
   Test:      node tools/build-seo.js --out=<map> --base=/cursus-elektrotechniek/
   Opnieuw draaien na elke wijziging aan content/, js/views.js of js/seo.js.
   ========================================================================== */

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.resolve(__dirname, '..');
var args = {};
process.argv.slice(2).forEach(function (a) {
  var m = a.match(/^--([^=]+)=(.*)$/);
  if (m) args[m[1]] = m[2];
});

var SITE = args.site || 'https://keesvanwanrooij.github.io';
var BASE = args.base || '/cursus-elektrotechniek/';
var OUT = path.resolve(args.out || ROOT);
var DATUM = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);

/* ------------------------- app-code laden in een sandbox ------------------------- */

var ctx = {
  console: console,
  localStorage: { getItem: function () { return null; }, setItem: function () {} },
  document: { documentElement: { dataset: {} } }
};
ctx.window = ctx;
vm.createContext(ctx);

function laad(bestand) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, bestand), 'utf8'), ctx, { filename: bestand });
}

laad('js/markdown.js');
laad('js/store.js');
laad('content/index.js');
fs.readdirSync(path.join(ROOT, 'content')).filter(function (f) { return /^m\d+\.js$/.test(f); }).sort()
  .forEach(function (f) { laad('content/' + f); });
laad('content/naslag.js');
laad('js/seo.js');
laad('js/views.js');

var CURSUS = ctx.CURSUS, Seo = ctx.Seo, Views = ctx.Views;
Seo.configureer({ path: true, base: BASE, origin: SITE });

/* ------------------------------------ hulp ------------------------------------ */

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* JSON in een <script>: < wordt < zodat </script> nooit voortijdig sluit. */
function jsonVeilig(obj) {
  return JSON.stringify(obj).replace(/</g, String.fromCharCode(92) + 'u003c');
}

function schrijf(rel, inhoud) {
  var doel = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(doel), { recursive: true });
  fs.writeFileSync(doel, inhoud, 'utf8');
}

function headBlok(page, id, sub) {
  var m = Seo.meta(page, id);
  var img = m.image;
  var r = [
    '<title>' + esc(m.title) + '</title>',
    '<meta name="description" content="' + esc(m.description) + '">',
    '<link rel="canonical" href="' + esc(m.canonical) + '">',
    '<meta name="robots" content="index, follow, max-image-preview:large">',
    '<meta name="author" content="Kees van Wanrooij">',
    '<meta property="og:locale" content="nl_NL">',
    '<meta property="og:site_name" content="Cursus Elektrotechniek">',
    '<meta property="og:type" content="' + m.ogType + '">',
    '<meta property="og:title" content="' + esc(m.title) + '">',
    '<meta property="og:description" content="' + esc(m.description) + '">',
    '<meta property="og:url" content="' + esc(m.canonical) + '">',
    '<meta property="og:image" content="' + esc(img) + '">',
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta property="og:image:alt" content="Gratis cursus elektrotechniek voor beginners">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + esc(m.title) + '">',
    '<meta name="twitter:description" content="' + esc(m.description) + '">',
    '<meta name="twitter:image" content="' + esc(img) + '">'
  ];
  if (sub) r.push('<meta name="site-base" content="' + esc(BASE) + '">');
  r.push('<script type="application/ld+json" id="jsonld">' + jsonVeilig(m.jsonld) + '</script>');
  return r.join('\n');
}

function mainBlok(page, id) {
  if (page === 'module') return Views.modulePagina(id);
  if (page === 'les') return Views.lesPagina(id);
  if (page === 'naslag') return Views.naslag();
  return Views.dashboard();
}

var TEMPLATE = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
var RE_HEAD = /<!-- seo:head:start -->[\s\S]*?<!-- seo:head:end -->/;
var RE_MAIN = /<!-- seo:main:start -->[\s\S]*?<!-- seo:main:end -->/;
if (!RE_HEAD.test(TEMPLATE) || !RE_MAIN.test(TEMPLATE)) throw new Error('markers ontbreken in index.html');

function pagina(page, id, sub) {
  var html = TEMPLATE
    .replace(RE_HEAD, function () { return '<!-- seo:head:start -->\n' + headBlok(page, id, sub) + '\n<!-- seo:head:end -->'; })
    .replace(RE_MAIN, function () { return '<!-- seo:main:start -->' + mainBlok(page, id) + '<!-- seo:main:end -->'; });
  if (sub) {
    /* Diepere pagina's: alle relatieve verwijzingen worden absoluut vanaf de site-basis. */
    html = html
      .replace(/(href|src)="(css|js|content|icons)\//g, function (_, a, d) { return a + '="' + BASE + d + '/'; })
      .replace(/href="manifest\.json"/, 'href="' + BASE + 'manifest.json"')
      .replace(/<a class="brand" href="#\/"/, '<a class="brand" href="' + BASE + '"')
      .replace(/<a href="#\/" data-route="dash"/, '<a href="' + BASE + '" data-route="dash"')
      .replace(/<a href="#\/naslag" data-route="naslag"/, '<a href="' + BASE + 'naslag/" data-route="naslag"');
  }
  return html;
}

/* -------------------------------------- bouwen -------------------------------------- */

['les', 'module', 'naslag'].forEach(function (d) {
  fs.rmSync(path.join(OUT, d), { recursive: true, force: true });
});

if (OUT !== ROOT) {
  /* Testmodus: kopieer de app naast de gegenereerde pagina's zodat de site draait. */
  ['css', 'js', 'content', 'icons'].forEach(function (d) {
    fs.cpSync(path.join(ROOT, d), path.join(OUT, d), { recursive: true });
  });
  ['manifest.json', 'service-worker.js', 'og-image.png'].forEach(function (f) {
    if (fs.existsSync(path.join(ROOT, f))) fs.copyFileSync(path.join(ROOT, f), path.join(OUT, f));
  });
}

schrijf('index.html', pagina('dash', null, false));
schrijf('naslag/index.html', pagina('naslag', null, true));

var urls = [{ loc: Seo.absoluut('dash') }, { loc: Seo.absoluut('naslag') }];

CURSUS.modules.forEach(function (m) {
  schrijf(Seo.rel('module', m.id) + 'index.html', pagina('module', m.id, true));
  urls.push({ loc: Seo.absoluut('module', m.id) });
});

var aantalLessen = 0;
CURSUS.alleLessen().forEach(function (x) {
  schrijf(Seo.rel('les', x.les.id) + 'index.html', pagina('les', x.les.id, true));
  urls.push({ loc: Seo.absoluut('les', x.les.id) });
  aantalLessen++;
});

schrijf('sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(function (u) {
    return '  <url><loc>' + esc(u.loc) + '</loc><lastmod>' + DATUM + '</lastmod></url>';
  }).join('\n') + '\n</urlset>\n');

schrijf('robots.txt',
  'User-agent: *\nAllow: /\n\nSitemap: ' + SITE + BASE + 'sitemap.xml\n');

/* 404: nuttige pagina met links, bewust niet geindexeerd. */
schrijf('404.html',
  '<!doctype html>\n<html lang="nl" data-theme="werkplaats">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
  '<title>Pagina niet gevonden | Cursus Elektrotechniek</title>\n' +
  '<meta name="robots" content="noindex">\n' +
  '<link rel="stylesheet" href="' + BASE + 'css/theme.css">\n' +
  '<link rel="icon" href="' + BASE + 'icons/favicon-32.png" sizes="32x32">\n</head>\n<body>\n' +
  '<main class="wrap"><div class="pagehead"><h1>Pagina niet gevonden</h1>' +
  '<p>Deze pagina bestaat niet (meer). Ga terug naar de gratis cursus elektrotechniek of bekijk de modules.</p></div>\n' +
  '<p><a class="btn" href="' + BASE + '">Naar de cursus</a> ' +
  '<a class="btn ghost" href="' + BASE + 'naslag/">Naslag</a></p>\n' +
  '<div class="modgrid" style="margin-top:24px">' +
  CURSUS.modules.map(function (m) {
    return '<a class="modcard" href="' + BASE + Seo.rel('module', m.id) + '"><h3>Module ' + m.nr + ': ' + esc(m.titel) + '</h3></a>';
  }).join('') +
  '</div></main>\n</body>\n</html>\n');

console.log('Klaar: ' + (1 + 1 + CURSUS.modules.length + aantalLessen) + ' pagina\'s, sitemap met ' + urls.length + ' URL\'s (' + SITE + BASE + ')');
