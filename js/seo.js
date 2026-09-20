/* ==========================================================================
   seo.js - URL's, paginatitels, meta-tags en gestructureerde data (JSON-LD)
   Wordt gedeeld door de browser (app.js) en het bouwscript (tools/build-seo.js),
   zodat een voorgerenderde pagina en de app exact dezelfde metadata hebben.
   ========================================================================== */

window.Seo = (function () {

  /* path: schone URL's (http/https). Zonder path: hash-routes, nodig voor file://. */
  var cfg = { path: false, base: '/', origin: '' };

  var NAAM = 'Cursus Elektrotechniek';
  var AUTEUR = { '@type': 'Person', name: 'Kees van Wanrooij', url: 'https://github.com/keesvanwanrooij' };

  var H1 = 'Gratis cursus elektrotechniek voor beginners';
  var INTRO = 'Een gratis online basiscursus elektrotechniek voor zelfstudie, in het Nederlands. ' +
    'Leer stap voor stap veilig werken, de wet van Ohm, de groepenkast, meten en storingzoeken. ' +
    'Twaalf modules met video\'s, in je eigen tempo, ook offline te volgen.';

  var KEYWORDS = ['cursus elektrotechniek', 'elektrotechniek voor beginners', 'gratis cursus elektrotechniek',
    'zelfstudie elektrotechniek', 'basiscursus elektrotechniek', 'gratis online cursus elektrotechniek',
    'NEN 3140', 'groepenkast', 'elektricien'];

  var DESC_HOME = 'Gratis online basiscursus elektrotechniek voor beginners: 12 modules, 62 lessen en video\'s in het Nederlands. Zelfstudie in je eigen tempo, ook offline.';
  var DESC_NASLAG = 'Naslag elektrotechniek voor beginners en elektriciens: formules, stroom bij 230 V, kabeldoorsnedes, aardlektypes, IP-codes en badkamerzones. Gratis.';

  var FAQ = [
    { q: 'Is deze cursus elektrotechniek echt gratis?',
      a: 'Ja. De cursus is volledig gratis, zonder account, zonder betaalmuur en zonder tracking. De broncode is open source onder de GPLv3-licentie.' },
    { q: 'Voor wie is deze cursus elektrotechniek voor beginners?',
      a: 'Voor aankomend elektriciens, zij-instromers en doe-het-zelvers die het vak serieus willen begrijpen. Je hebt geen voorkennis nodig, de cursus start bij veiligheid en de basis van elektriciteit.' },
    { q: 'Hoe lang duurt de zelfstudie elektrotechniek?',
      a: 'De hele leerlijn is ongeveer 72 uur studietijd verdeeld over 12 modules en 62 lessen. Jij bepaalt het tempo, je voortgang wordt automatisch bijgehouden.' },
    { q: 'Krijg ik een diploma of een NEN 3140-aanwijzing?',
      a: 'Nee. Deze cursus geeft begrip, geen erkend diploma. Voor zelfstandig werken aan installaties is in Nederland doorgaans een VOP- of VP-aanwijzing van een werkgever nodig.' },
    { q: 'Kan ik de cursus offline volgen?',
      a: 'Ja. Installeer de cursus als app op je telefoon of computer, dan werken de teksten en de navigatie ook zonder internet. Alleen de video\'s hebben een verbinding nodig.' },
    { q: 'Welke onderwerpen komen aan bod?',
      a: 'Veilig werken en NEN 3140, de wet van Ohm en vermogen, de Nederlandse woninginstallatie en groepenkast, kabels en verbindingen, schakelingen, meten en testen, storingzoeken, en specialisaties zoals warmtepompen, airco, zonnepanelen, laadpalen en domotica.' }
  ];

  function configureer(c) { for (var k in c) cfg[k] = c[k]; }

  /* ---------------------------- URL's en routes ---------------------------- */

  /* Relatief pad binnen de site, zonder base. */
  function rel(page, id) {
    if (page === 'module') { var m = CURSUS.module(id); return m ? 'module/' + m.slug + '/' : ''; }
    if (page === 'les') { var x = CURSUS.les(id); return x ? 'les/' + x.les.slug + '/' : ''; }
    if (page === 'naslag') return 'naslag/';
    if (!window.KENNIS) return '';
    if (page === 'toepassingen') return 'toepassingen/';
    if (page === 'toepassing') { var t = KENNIS.toepassing(id); return t ? 'toepassingen/' + t.slug + '/' : ''; }
    if (page === 'merken') return 'merken/';
    if (page === 'merk') { var mk = KENNIS.merk(id); return mk ? 'merken/' + mk.slug + '/' : ''; }
    if (page === 'product') {
      var pr = KENNIS.product(id), pm = pr && KENNIS.merk(pr.merk);
      return pr && pm ? 'merken/' + pm.slug + '/' + pr.slug + '/' : '';
    }
    return '';
  }

  /* De href voor een interne link, afhankelijk van de modus. */
  function path(page, id) {
    if (cfg.path) return cfg.base + rel(page, id);
    if (page === 'dash') return '#/';
    if (page === 'naslag') return '#/naslag';
    if (page === 'toepassingen') return '#/toepassingen';
    if (page === 'merken') return '#/merken';
    return '#/' + page + '/' + id;
  }

  /* Koplink binnen een lespagina. */
  function anchor(page, id, kop) {
    return (cfg.path ? path(page, id) : '') + '#' + kop;
  }

  function absoluut(page, id) { return cfg.origin + cfg.base + rel(page, id); }

  /* Van een URL-pad naar { page, id }. */
  function parsePad(pathname) {
    var p = pathname;
    if (p.indexOf(cfg.base) === 0) p = p.slice(cfg.base.length);
    p = p.replace(/^\/+/, '').replace(/index\.html$/, '');
    var d = p.split('/').filter(Boolean);
    if (d[0] === 'module' && d[1]) { var m = CURSUS.moduleBijSlug(d[1]); if (m) return { page: 'module', id: m.id }; }
    if (d[0] === 'les' && d[1]) { var x = CURSUS.lesBijSlug(d[1]); if (x) return { page: 'les', id: x.les.id }; }
    if (d[0] === 'naslag') return { page: 'naslag' };
    if (window.KENNIS) {
      if (d[0] === 'toepassingen') {
        if (!d[1]) return { page: 'toepassingen' };
        var t = KENNIS.toepassingBijSlug(d[1]); if (t) return { page: 'toepassing', id: t.id };
      }
      if (d[0] === 'merken') {
        if (!d[1]) return { page: 'merken' };
        var mk = KENNIS.merkBijSlug(d[1]);
        if (mk && !d[2]) return { page: 'merk', id: mk.id };
        var pr = mk && KENNIS.productBijSlug(mk.id, d[2]); if (pr) return { page: 'product', id: pr.id };
      }
    }
    return { page: 'dash' };
  }

  function parseHash(hash) {
    var d = String(hash || '').replace(/^#/, '').split('/').filter(Boolean);
    if (d[0] === 'module' && d[1] && CURSUS.module(d[1])) return { page: 'module', id: d[1] };
    if (d[0] === 'les' && d[1] && CURSUS.les(d[1])) return { page: 'les', id: d[1] };
    if (d[0] === 'naslag') return { page: 'naslag' };
    if (window.KENNIS) {
      if (d[0] === 'toepassingen') return { page: 'toepassingen' };
      if (d[0] === 'merken') return { page: 'merken' };
      if (d[0] === 'toepassing' && d[1] && KENNIS.toepassing(d[1])) return { page: 'toepassing', id: d[1] };
      if (d[0] === 'merk' && d[1] && KENNIS.merk(d[1])) return { page: 'merk', id: d[1] };
      if (d[0] === 'product' && d[1] && KENNIS.product(d[1])) return { page: 'product', id: d[1] };
    }
    return { page: 'dash' };
  }

  /* ------------------------------ metadata ------------------------------ */

  function kort(s, max) {
    s = String(s).replace(/\s+/g, ' ').trim();
    if (s.length <= max) return s;
    var c = s.slice(0, max - 1);
    return c.slice(0, c.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '…';
  }

  function uren() {
    return CURSUS.modules.reduce(function (n, m) { return n + (m.studietijd || 0); }, 0);
  }

  function courseHome() {
    return {
      '@type': 'Course',
      '@id': cfg.origin + cfg.base + '#cursus',
      name: 'Cursus Elektrotechniek voor beginners',
      description: DESC_HOME,
      url: absoluut('dash'),
      inLanguage: 'nl',
      isAccessibleForFree: true,
      educationalLevel: 'Beginner',
      keywords: KEYWORDS.join(', '),
      audience: { '@type': 'EducationalAudience', educationalRole: 'student', audienceType: 'Beginnende elektriciens, zij-instromers en doe-het-zelvers' },
      about: [{ '@type': 'Thing', name: 'Elektrotechniek' }, { '@type': 'Thing', name: 'Elektrische installaties' }, { '@type': 'Thing', name: 'NEN 3140' }],
      timeRequired: 'PT' + uren() + 'H',
      provider: AUTEUR,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', category: 'Free', availability: 'https://schema.org/InStock' },
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT' + uren() + 'H' },
      teaches: CURSUS.modules.map(function (m) { return m.titel; }),
      hasPart: CURSUS.modules.map(function (m) {
        return { '@type': 'Course', name: m.titel, description: m.intro, url: absoluut('module', m.id) };
      })
    };
  }

  function broodkruimel(items) {
    return {
      '@type': 'BreadcrumbList',
      itemListElement: items.map(function (it, i) {
        return { '@type': 'ListItem', position: i + 1, name: it.naam, item: it.url };
      })
    };
  }

  /* Alles wat een pagina nodig heeft in <head>. */
  function meta(page, id) {
    var titel, desc, type = 'website', graph = [], canon = absoluut(page, id);

    if (page === 'module') {
      var m = CURSUS.module(id);
      titel = 'Module ' + m.nr + ': ' + m.titel + ' | Cursus elektrotechniek';
      desc = kort(m.intro, 158);
      graph = [
        {
          '@type': 'Course', name: m.titel, description: m.intro, url: canon, inLanguage: 'nl',
          isAccessibleForFree: true, educationalLevel: m.niveau, timeRequired: 'PT' + m.studietijd + 'H',
          provider: AUTEUR, isPartOf: { '@id': cfg.origin + cfg.base + '#cursus' },
          hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online' },
          hasPart: m.lessen.map(function (l) {
            return { '@type': 'LearningResource', name: l.titel, url: absoluut('les', l.id) };
          })
        },
        broodkruimel([
          { naam: 'Cursus elektrotechniek', url: absoluut('dash') },
          { naam: 'Module ' + m.nr + ': ' + m.titel, url: canon }
        ])
      ];
    } else if (page === 'les') {
      var x = CURSUS.les(id), l = x.les, mod = x.module;
      titel = l.titel + ' | Cursus elektrotechniek';
      desc = l.leerdoel || '';
      if (desc.length < 115) desc += ' Gratis les uit de cursus elektrotechniek voor beginners.';
      desc = kort(desc, 158);
      type = 'article';
      graph = [
        {
          '@type': 'LearningResource', name: l.titel, description: l.leerdoel, url: canon, inLanguage: 'nl',
          isAccessibleForFree: true, learningResourceType: 'Les', educationalLevel: mod.niveau,
          timeRequired: 'PT' + l.duur + 'M', teaches: l.leerdoel, author: AUTEUR,
          license: 'https://www.gnu.org/licenses/gpl-3.0.html',
          isPartOf: { '@type': 'Course', name: mod.titel, url: absoluut('module', mod.id) }
        },
        broodkruimel([
          { naam: 'Cursus elektrotechniek', url: absoluut('dash') },
          { naam: 'Module ' + mod.nr + ': ' + mod.titel, url: absoluut('module', mod.id) },
          { naam: l.titel, url: canon }
        ])
      ];
    } else if (page === 'toepassingen') {
      var tn = KENNIS.toepassingen.map(function (t) { return t.naam.toLowerCase(); });
      titel = 'Toepassingen: ' + tn.join(' en ') + ' | Cursus elektrotechniek';
      desc = kort('Beginnersgids voor ' + tn.join(' en ') + ': hoe het werkt, welke onderdelen je nodig hebt en welke merken en producten er zijn.', 158);
      graph = [broodkruimel([{ naam: 'Cursus elektrotechniek', url: absoluut('dash') }, { naam: 'Toepassingen', url: canon }])];
    } else if (page === 'toepassing') {
      var ta = KENNIS.toepassing(id);
      titel = ta.seoTitel || (ta.naam + ': uitleg voor beginners, onderdelen en merken');
      desc = kort(ta.seoBeschrijving || ta.intro, 158);
      type = 'article';
      graph = [
        { '@type': 'Article', headline: ta.naam, description: ta.intro, url: canon, inLanguage: 'nl', author: AUTEUR,
          license: 'https://www.gnu.org/licenses/gpl-3.0.html', isPartOf: { '@id': cfg.origin + cfg.base + '#cursus' } },
        broodkruimel([{ naam: 'Cursus elektrotechniek', url: absoluut('dash') }, { naam: 'Toepassingen', url: absoluut('toepassingen') }, { naam: ta.naam, url: canon }])
      ];
    } else if (page === 'merken') {
      titel = 'Merken en producten voor installateurs | Cursus elektrotechniek';
      desc = kort('Overzicht van merken (' + KENNIS.merken.map(function (m) { return m.naam; }).join(', ') + ') met uitleg en per product een samenvatting van de handleiding.', 158);
      graph = [broodkruimel([{ naam: 'Cursus elektrotechniek', url: absoluut('dash') }, { naam: 'Merken', url: canon }])];
    } else if (page === 'merk') {
      var mm = KENNIS.merk(id);
      titel = mm.naam + ': merk, producten en handleidingen uitgelegd';
      desc = kort(mm.intro, 158);
      type = 'article';
      graph = [
        { '@type': 'Article', headline: mm.naam + ': merk en producten', description: mm.intro, url: canon, inLanguage: 'nl', author: AUTEUR,
          about: { '@type': 'Brand', name: mm.naam, url: mm.website }, license: 'https://www.gnu.org/licenses/gpl-3.0.html' },
        broodkruimel([{ naam: 'Cursus elektrotechniek', url: absoluut('dash') }, { naam: 'Merken', url: absoluut('merken') }, { naam: mm.naam, url: canon }])
      ];
    } else if (page === 'product') {
      var pp = KENNIS.product(id), pmk = KENNIS.merk(pp.merk);
      titel = pp.naam + ': uitleg en handleiding samengevat';
      desc = kort(pp.korteOmschrijving, 158);
      type = 'article';
      graph = [
        { '@type': 'TechArticle', headline: pp.naam + ': uitleg en handleiding samengevat', description: pp.korteOmschrijving, url: canon,
          inLanguage: 'nl', author: AUTEUR, license: 'https://www.gnu.org/licenses/gpl-3.0.html',
          about: { '@type': 'Product', name: pp.naam, brand: { '@type': 'Brand', name: pmk.naam } },
          isPartOf: { '@type': 'WebPage', url: absoluut('merk', pmk.id), name: pmk.naam } },
        broodkruimel([{ naam: 'Cursus elektrotechniek', url: absoluut('dash') }, { naam: 'Merken', url: absoluut('merken') },
          { naam: pmk.naam, url: absoluut('merk', pmk.id) }, { naam: pp.naam, url: canon }])
      ];
    } else if (page === 'naslag') {
      titel = 'Naslag elektrotechniek: formules, tabellen en spiekbriefjes';
      desc = DESC_NASLAG;
      graph = [broodkruimel([
        { naam: 'Cursus elektrotechniek', url: absoluut('dash') },
        { naam: 'Naslag elektrotechniek', url: canon }
      ])];
    } else {
      titel = H1 + ' | Zelfstudie';
      desc = DESC_HOME;
      graph = [
        courseHome(),
        {
          '@type': 'WebSite', name: NAAM, url: absoluut('dash'), inLanguage: 'nl',
          description: DESC_HOME, publisher: AUTEUR
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQ.map(function (f) {
            return { '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } };
          })
        }
      ];
    }

    return {
      title: titel, description: desc, canonical: canon, ogType: type,
      image: cfg.origin + cfg.base + 'og-image.png',
      jsonld: { '@context': 'https://schema.org', '@graph': graph }
    };
  }

  /* Past de metadata van het document aan bij navigatie binnen de app. */
  function pasToe(page, id) {
    var mt = meta(page, id);
    document.title = mt.title;
    if (!cfg.path) return;
    function zet(sel, attr, waarde, maak) {
      var el = document.querySelector(sel);
      if (!el && maak) { el = maak(); document.head.appendChild(el); }
      if (el) el.setAttribute(attr, waarde);
    }
    function metaTag(naam, waarde, eigenschap) {
      zet('meta[' + (eigenschap || 'name') + '="' + naam + '"]', 'content', waarde, function () {
        var e = document.createElement('meta'); e.setAttribute(eigenschap || 'name', naam); return e;
      });
    }
    metaTag('description', mt.description);
    metaTag('og:title', mt.title, 'property');
    metaTag('og:description', mt.description, 'property');
    metaTag('og:url', mt.canonical, 'property');
    metaTag('og:type', mt.ogType, 'property');
    metaTag('twitter:title', mt.title);
    metaTag('twitter:description', mt.description);
    zet('link[rel="canonical"]', 'href', mt.canonical, function () {
      var e = document.createElement('link'); e.rel = 'canonical'; return e;
    });
    var ld = document.getElementById('jsonld');
    if (ld) ld.textContent = JSON.stringify(mt.jsonld);
  }

  return {
    cfg: cfg, configureer: configureer, H1: H1, KEYWORDS: KEYWORDS, INTRO: INTRO, FAQ: FAQ, NAAM: NAAM,
    path: path, rel: rel, anchor: anchor, absoluut: absoluut,
    parsePad: parsePad, parseHash: parseHash, meta: meta, pasToe: pasToe, uren: uren
  };
})();
