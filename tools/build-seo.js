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

var SITE = args.site || 'https://keesvanwanrooij.nl';
var BASE = args.base || '/cursus-elektrotechniek/';
var OUT = path.resolve(args.out || ROOT);
/* Google Search Console: verificatie via HTML-tag, alleen op de homepage van de URL-prefix property. */
var GOOGLE_VERIFICATIE = 'Xix5E2WkjMEBGf1mt4B_nutdCvRRq8GmWnGjFAxBCes';
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
laad('content/kennis/index.js');
/* alle kennisbestanden (merken, producten, toepassingen), gesorteerd zodat de volgorde vast ligt */
function kennisBestanden(map) {
  var uit = [];
  fs.readdirSync(path.join(ROOT, map), { withFileTypes: true }).sort(function (a, b) { return a.name < b.name ? -1 : 1; }).forEach(function (e) {
    var rel = map + '/' + e.name;
    if (e.isDirectory()) uit = uit.concat(kennisBestanden(rel));
    else if (/\.js$/.test(e.name) && rel !== 'content/kennis/index.js') uit.push(rel);
  });
  return uit;
}
var KENNIS_BESTANDEN = kennisBestanden('content/kennis');
KENNIS_BESTANDEN.forEach(laad);
laad('js/seo.js');
laad('js/views.js');
laad('js/kennisviews.js');

var CURSUS = ctx.CURSUS, Seo = ctx.Seo, Views = ctx.Views, KENNIS = ctx.KENNIS, KennisViews = ctx.KennisViews;
Seo.configureer({ path: true, base: BASE, origin: SITE });

var kennisFouten = KENNIS.controleer();
if (kennisFouten.length) throw new Error('Kennisbank heeft kapotte koppelingen:\n - ' + kennisFouten.join('\n - '));

/* ------------------------------------ hulp ------------------------------------ */

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* JSON in een script-tag: elke < wordt een unicode-escape, zodat een sluittag in de tekst nooit voortijdig sluit. */
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
  if (page === 'dash') r.push('<meta name="google-site-verification" content="' + GOOGLE_VERIFICATIE + '">');
  if (sub) r.push('<meta name="site-base" content="' + esc(BASE) + '">');
  r.push('<script type="application/ld+json" id="jsonld">' + jsonVeilig(m.jsonld) + '</script>');
  return r.join('\n');
}

function mainBlok(page, id) {
  if (page === 'module') return Views.modulePagina(id);
  if (page === 'les') return Views.lesPagina(id);
  if (page === 'naslag') return Views.naslag();
  if (page === 'toepassingen') return KennisViews.toepassingenOverzicht();
  if (page === 'toepassing') return KennisViews.toepassingPagina(id);
  if (page === 'merken') return KennisViews.merkenOverzicht();
  if (page === 'merk') return KennisViews.merkPagina(id);
  if (page === 'product') return KennisViews.productPagina(id);
  return Views.dashboard();
}

var TEMPLATE = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
var RE_HEAD = /<!-- seo:head:start -->[\s\S]*?<!-- seo:head:end -->/;
var RE_FOOT = /<!-- seo:foot:start -->[\s\S]*?<!-- seo:foot:end -->/;
var RE_KENNIS = /<!-- kennis:start -->[\s\S]*?<!-- kennis:end -->/;
var RE_MAIN = /<!-- seo:main:start -->[\s\S]*?<!-- seo:main:end -->/;
if (!RE_KENNIS.test(TEMPLATE) || !RE_HEAD.test(TEMPLATE) || !RE_MAIN.test(TEMPLATE) || !RE_FOOT.test(TEMPLATE)) throw new Error('markers ontbreken in index.html');

function pagina(page, id, sub) {
  var html = TEMPLATE
    .replace(RE_HEAD, function () { return '<!-- seo:head:start -->\n' + headBlok(page, id, sub) + '\n<!-- seo:head:end -->'; })
    .replace(RE_MAIN, function () { return '<!-- seo:main:start -->' + mainBlok(page, id) + '<!-- seo:main:end -->'; })
    .replace(RE_KENNIS, function () {
      return '<!-- kennis:start -->\n' + KENNIS_BESTANDEN.map(function (f) { return '<script src="' + f + '"></script>'; }).join('\n') + '\n<!-- kennis:end -->';
    })
    .replace(RE_FOOT, function () { return '<!-- seo:foot:start -->' + Views.footer() + '<!-- seo:foot:end -->'; });
  if (sub) {
    /* Diepere pagina's: alle relatieve verwijzingen worden absoluut vanaf de site-basis. */
    html = html
      .replace(/(href|src)="(css|js|content|icons)\//g, function (_, a, d) { return a + '="' + BASE + d + '/'; })
      .replace(/href="manifest\.json"/, 'href="' + BASE + 'manifest.json"')
      .replace(/<a class="brand" href="#\/"/, '<a class="brand" href="' + BASE + '"')
      .replace(/<a href="#\/" data-route="dash"/, '<a href="' + BASE + '" data-route="dash"')
      .replace(/<a href="#\/naslag" data-route="naslag"/, '<a href="' + BASE + 'naslag/" data-route="naslag"')
      .replace(/<a href="#\/toepassingen" data-route="toepassingen"/, '<a href="' + BASE + 'toepassingen/" data-route="toepassingen"')
      .replace(/<a href="#\/merken" data-route="merken"/, '<a href="' + BASE + 'merken/" data-route="merken"');
  }
  return html;
}

/* -------------------------------------- bouwen -------------------------------------- */

['les', 'module', 'naslag', 'toepassingen', 'merken'].forEach(function (d) {
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
(function () {
  var sw = fs.readFileSync(path.join(ROOT, 'service-worker.js'), 'utf8');
  var blok = '/* kennis:start */\n' + ['content/kennis/index.js'].concat(KENNIS_BESTANDEN).map(function (f) { return "  './" + f + "',"; }).join('\n') + '\n  /* kennis:end */';
  var nieuw = sw.replace(/\/\* kennis:start \*\/[\s\S]*?\/\* kennis:end \*\//, function () { return blok; });
  schrijf('service-worker.js', nieuw);
})();
schrijf('naslag/index.html', pagina('naslag', null, true));

var urls = [{ loc: Seo.absoluut('dash') }, { loc: Seo.absoluut('naslag') }];

CURSUS.modules.forEach(function (m) {
  schrijf(Seo.rel('module', m.id) + 'index.html', pagina('module', m.id, true));
  urls.push({ loc: Seo.absoluut('module', m.id) });
});

schrijf('toepassingen/index.html', pagina('toepassingen', null, true));
urls.push({ loc: Seo.absoluut('toepassingen') });
KENNIS.toepassingen.forEach(function (t) {
  schrijf(Seo.rel('toepassing', t.id) + 'index.html', pagina('toepassing', t.id, true));
  urls.push({ loc: Seo.absoluut('toepassing', t.id) });
});
schrijf('merken/index.html', pagina('merken', null, true));
urls.push({ loc: Seo.absoluut('merken') });
KENNIS.merken.forEach(function (m) {
  schrijf(Seo.rel('merk', m.id) + 'index.html', pagina('merk', m.id, true));
  urls.push({ loc: Seo.absoluut('merk', m.id) });
});
KENNIS.producten.forEach(function (p) {
  schrijf(Seo.rel('product', p.id) + 'index.html', pagina('product', p.id, true));
  urls.push({ loc: Seo.absoluut('product', p.id) });
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

/* robots.txt: iedereen welkom, ook de bekende AI-crawlers (bewust expliciet gemaakt). */
var AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'CCBot'];
schrijf('robots.txt',
  'User-agent: *\nAllow: /\n\n' +
  AI_BOTS.map(function (b) { return 'User-agent: ' + b + '\nAllow: /\n'; }).join('\n') +
  '\nSitemap: ' + SITE + BASE + 'sitemap.xml\n');

/* ------------------------- llms.txt en llms-full.txt ------------------------- */

var HOME = SITE + BASE;

/* Onze eigen opmaak (!!! callouts, ?? verdiepingen) omzetten naar gewone markdown. */
function platteMarkdown(tekst) {
  var uit = [], blok = null;
  String(tekst).split('\n').forEach(function (regel) {
    var k = regel.trim();
    var c = k.match(/^!!!\s*(gevaar|kern|info)\s*(.*)$/);
    var d = k.match(/^\?\?\s+(.*)$/);
    if (!blok && c) { blok = '!!!'; uit.push('> **' + (c[2] || (c[1] === 'gevaar' ? 'Let op' : 'Kernpunt')) + '**'); return; }
    if (!blok && d) { blok = '??'; uit.push('> **' + d[1] + '**'); return; }
    if (blok && k === blok) { blok = null; return; }
    if (blok) { uit.push(k === '' ? '>' : '> ' + regel); return; }
    /* koppen een niveau lager, zodat ze onder de leskop blijven vallen */
    uit.push(regel.replace(/^(#{2,3}) /, function (_, h) { return h + '# '; }));
  });
  return uit.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

var lijstModules = CURSUS.modules.map(function (m) {
  return '## Module ' + m.nr + ': ' + m.titel + '\n\n' +
    m.lessen.map(function (l) {
      return '- [' + l.nr + ' ' + l.titel + '](' + Seo.absoluut('les', l.id) + '): ' + l.leerdoel;
    }).join('\n');
}).join('\n\n');


/* Kennisbank: toepassingen, merken en producten voor llms.txt en llms-full.txt. */
function kennisLijst() {
  return '## Kennisbank: toepassingen\n\n' +
    KENNIS.toepassingen.map(function (t) {
      return '- [' + t.naam + '](' + Seo.absoluut('toepassing', t.id) + '): ' + t.intro;
    }).join('\n') + '\n\n' +
    '## Kennisbank: merken en producten\n\n' +
    KENNIS.merken.map(function (m) {
      return '- [' + m.naam + '](' + Seo.absoluut('merk', m.id) + '): ' + m.intro + '\n' +
        KENNIS.productenVanMerk(m.id).map(function (p) {
          return '  - [' + p.naam + '](' + Seo.absoluut('product', p.id) + '): ' + p.korteOmschrijving;
        }).join('\n');
    }).join('\n') + '\n\n';
}

function kennisVolledig() {
  function secties(lijst) {
    return (lijst || []).map(function (x) {
      return '#### ' + x.kop + '\n\n' + platteMarkdown(x.tekst).replace(/^(#{2,4}) /gm, function (_, h) { return h + '# '; });
    }).join('\n\n');
  }
  return '\n\n## Kennisbank\n\n' +
    KENNIS.toepassingen.map(function (t) {
      return '### Toepassing: ' + t.naam + '\n\nURL: ' + Seo.absoluut('toepassing', t.id) + '\n\n' + t.intro + '\n\n' + secties(t.secties);
    }).join('\n\n') + '\n\n' +
    KENNIS.merken.map(function (m) {
      return '### Merk: ' + m.naam + '\n\nURL: ' + Seo.absoluut('merk', m.id) + '\n\n' + m.intro + '\n\n' + secties(m.secties) + '\n\n' +
        KENNIS.productenVanMerk(m.id).map(function (p) {
          return '### Product: ' + p.naam + '\n\nURL: ' + Seo.absoluut('product', p.id) + '\n\n' + p.korteOmschrijving + '\n\n' + secties(p.secties);
        }).join('\n\n');
    }).join('\n\n') + '\n';
}

schrijf('llms.txt',
  '# Cursus Elektrotechniek\n\n' +
  '> Gratis online basiscursus elektrotechniek voor beginners, in het Nederlands. Zelfstudie in 12 modules en ' +
  aantalLessen + ' lessen (ongeveer ' + Seo.uren() + ' uur), van veilig werken volgens NEN 3140 en de wet van Ohm ' +
  'tot de groepenkast, meten, storingzoeken, warmtepompen, zonnepanelen en laadpalen.\n\n' +
  'Deze cursus is bedoeld voor aankomend elektriciens, zij-instromers en doe-het-zelvers die elektrotechniek willen leren. ' +
  'De teksten zijn onderwijskundig en verwijzen naar NEN 1010 en NEN 3140 zonder de normtekst te vervangen. ' +
  'De cursus geeft geen diploma en geen VOP- of VP-aanwijzing. Inhoud en broncode zijn vrij te gebruiken onder de GPLv3-licentie.\n\n' +
  '- Startpagina: ' + HOME + '\n' +
  '- Taal: Nederlands\n' +
  '- Auteur: Kees van Wanrooij\n\n' +
  lijstModules + '\n\n' +
  '## Naslag\n\n' +
  '- [Naslag elektrotechniek](' + Seo.absoluut('naslag') + '): formules, stroom bij 230 V, aderkleuren, kabeldoorsnedes, aardlektypes, IP-codes, badkamerzones en meten.\n\n' +
  kennisLijst() +
  '## Optioneel\n\n' +
  '- [Volledige cursustekst in een bestand](' + HOME + 'llms-full.txt): alle lessen als doorlopende markdown\n' +
  '- [Sitemap](' + HOME + 'sitemap.xml)\n' +
  '- [Broncode op GitHub](https://github.com/keesvanwanrooij/cursus-elektrotechniek)\n');

schrijf('llms-full.txt',
  '# Cursus Elektrotechniek: volledige tekst\n\n' +
  '> Gratis online basiscursus elektrotechniek voor beginners in het Nederlands. Bron: ' + HOME + '\n' +
  '> Licentie: GPLv3. Deze cursus geeft geen erkend diploma en geen NEN 3140-aanwijzing.\n\n' +
  CURSUS.modules.map(function (m) {
    return '## Module ' + m.nr + ': ' + m.titel + '\n\n' +
      'URL: ' + Seo.absoluut('module', m.id) + '\n\n' +
      m.intro + '\n\n' + (m.inleiding || []).join('\n\n') + '\n\n' +
      '**Na deze module kun je:**\n\n' + m.leerdoelen.map(function (d) { return '- ' + d; }).join('\n') + '\n\n' +
      m.lessen.map(function (l) {
        return '### Les ' + l.nr + ': ' + l.titel + '\n\n' +
          'URL: ' + Seo.absoluut('les', l.id) + '\n\n' +
          '**Leerdoel:** ' + l.leerdoel + '\n\n' +
          platteMarkdown(l.tekst).replace(/^(#{3,4}) /gm, function (_, h) { return h + '# '; }) + '\n\n' +
          (l.checklist && l.checklist.length ? '**Controleer jezelf:**\n\n' + l.checklist.map(function (c) { return '- ' + c; }).join('\n') + '\n' : '');
      }).join('\n');
  }).join('\n') +
  '\n## Naslag elektrotechniek\n\nURL: ' + Seo.absoluut('naslag') + '\n\n' +
  ctx.NASLAG.map(function (k) { return '### ' + k.titel + '\n\n' + k.inhoud.trim() + '\n'; }).join('\n') +
  kennisVolledig());

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

console.log('Klaar: ' + (urls.length + 1) + ' pagina\'s, sitemap met ' + urls.length + ' URL\'s (' + SITE + BASE + ')');

/* Controle: is de donatiepagina bereikbaar? Alleen een melding, de instelling blijft handmatig
   (CURSUS.donatie.actief in content/index.js), zodat er nooit een dode knop online komt. */
(async function () {
  var url = CURSUS.donatie && CURSUS.donatie.url;
  if (!url) return;
  try {
    var r = await fetch(url, { method: 'HEAD', redirect: 'manual' });
    var live = r.status === 200;
    if (live && !CURSUS.donatie.actief) console.log('\n>>> De donatiepagina is LIVE (' + url + '). Zet CURSUS.donatie.actief op true in content/index.js en bouw opnieuw.');
    else if (!live && CURSUS.donatie.actief) console.log('\n>>> WAARSCHUWING: donatie staat aan, maar ' + url + ' geeft status ' + r.status + ' (nog niet live). Zet actief op false.');
    else console.log('Donatie: ' + (live ? 'live en aan' : 'pagina nog niet live, knoppen staan uit') + '.');
  } catch (e) {
    console.log('Donatie: kon ' + url + ' niet controleren (' + e.message + ').');
  }
})();
