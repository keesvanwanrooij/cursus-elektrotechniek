/* ==========================================================================
   views.js - rendert dashboard, modulepagina, lespagina en naslag
   ========================================================================== */

window.Views = (function () {

  var E = MD.escape;

  /* Windows rendert vlag-emoji als letters ("GB", "NL") in plaats van een vlaggetje.
     Daarom kleine SVG-vlaggen die op elk platform hetzelfde ogen. */
  var VLAGGEN = {
    nl: '<svg class="vlag" viewBox="0 0 3 2" aria-label="Nederlands"><rect width="3" height="2" fill="#21468B"/><rect width="3" height="1.333" fill="#FFFFFF"/><rect width="3" height="0.667" fill="#AE1C28"/></svg>',
    en: '<svg class="vlag" viewBox="0 0 60 30" aria-label="Engels"><rect width="60" height="30" fill="#00247d"/><path d="M0,0 60,30 M60,0 0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 60,30 M60,0 0,30" stroke="#cf142b" stroke-width="2"/><path d="M30,0 30,30 M0,15 60,15" stroke="#fff" stroke-width="10"/><path d="M30,0 30,30 M0,15 60,15" stroke="#cf142b" stroke-width="6"/></svg>',
    de: '<svg class="vlag" viewBox="0 0 3 2" aria-label="Duits"><rect width="3" height="2" fill="#FFCE00"/><rect width="3" height="1.333" fill="#DD0000"/><rect width="3" height="0.667" fill="#000000"/></svg>'
  };
  function vlag(taal) { return VLAGGEN[taal] || VLAGGEN.nl; }

  function niveauChip(n) {
    return '<span class="chip mut">' + E(n) + '</span>';
  }

  function uren(min) {
    var u = Math.floor(min / 60), m = min % 60;
    return (u ? u + 'u ' : '') + m + 'm';
  }

  /* ============================== DASHBOARD ============================== */

  function dashboard() {
    var st = Store.statistiek();
    var volgende = Store.volgendeLes();
    var deel1 = CURSUS.modules.filter(function (m) { return m.deel !== 2; });
    var deel2 = CURSUS.modules.filter(function (m) { return m.deel === 2; });

    var hero;
    if (volgende) {
      var isStart = st.klaar === 0;
      hero =
        '<div class="hero">' +
          '<div>' +
            '<div class="eyebrow">' + (isStart ? 'Begin hier' : 'Verder waar je gebleven was') + '</div>' +
            '<h2>Module ' + volgende.module.nr + ' · Les ' + E(volgende.les.nr) + ' - ' + E(volgende.les.titel) + '</h2>' +
            '<p>' + E(volgende.les.leerdoel || volgende.module.intro) + '</p>' +
            '<div class="acts">' +
              '<a class="btn" href="' + Seo.path('les', volgende.les.id) + '">▶ ' + (isStart ? 'Start de cursus' : 'Verder leren') + '</a>' +
              '<a class="btn ghost" href="' + Seo.path('module', volgende.module.id) + '">Moduleoverzicht</a>' +
            '</div>' +
          '</div>' +
          '<div class="ring" style="--p:' + st.procent + '"><div><b>' + st.procent + '%</b><span>Voltooid</span></div></div>' +
        '</div>';
    } else {
      hero = '<div class="hero"><div><h2>Cursus geladen</h2><p>Nog geen lessen gevonden.</p></div></div>';
    }

    var intro =
      '<header class="pagehead">' +
        '<h1>' + E(Seo.H1) + '</h1>' +
        '<p>' + E(Seo.INTRO) + '</p>' +
      '</header>';

    return intro + hero +
      '<div class="stats">' +
        '<div class="stat"><b>' + st.klaar + ' / ' + st.totaal + '</b><span>Lessen afgerond</span></div>' +
        '<div class="stat"><b>' + uren(st.minuten) + '</b><span>Studietijd gedaan</span></div>' +
        '<div class="stat"><b>' + st.videos + '</b><span>Video\'s bekeken</span></div>' +
        '<div class="stat"><b>' + st.modulesKlaar + ' / ' + st.modules + '</b><span>Modules klaar</span></div>' +
      '</div>' +
      '<div class="sect-h"><h2>Deel I - Fundament</h2>' +
        '<span>in volgorde doorlopen · ' + deel1.length + ' modules</span></div>' +
      '<div class="modgrid">' + deel1.map(moduleKaart).join('') + '</div>' +
      '<div class="sect-h"><h2>Deel II - Specialisaties</h2>' +
        '<span>na het fundament, in de volgorde die je werk vraagt</span></div>' +
      '<div class="modgrid">' + deel2.map(moduleKaart).join('') + '</div>' +
      faqBlok();
  }

  /* Veelgestelde vragen: zichtbare tekst voor bezoekers, dezelfde vragen staan als FAQPage in de JSON-LD. */
  function faqBlok() {
    return '<section class="faq"><div class="sect-h"><h2>Veelgestelde vragen over de cursus elektrotechniek</h2></div>' +
      Seo.FAQ.map(function (f) {
        return '<details><summary>' + E(f.q) + '</summary><p>' + E(f.a) + '</p></details>';
      }).join('') + '</section>';
  }

  function moduleKaart(m) {
    var v = Store.moduleVoortgang(m);
    var status = v.procent === 100 ? '<span class="chip ok">Afgerond</span>'
               : v.procent > 0 ? '<span class="chip">Bezig · ' + v.procent + '%</span>'
               : m.kritiek ? '<span class="chip danger">Begin hier</span>'
               : '<span class="chip mut">Nog niet gestart</span>';
    var videos = m.lessen.reduce(function (s, l) { return s + (l.videos || []).length; }, 0);
    return '<a class="modcard" href="' + Seo.path('module', m.id) + '">' +
      '<div class="num">Module ' + (m.nr < 10 ? '0' : '') + m.nr + status + '</div>' +
      '<h3>' + E(m.titel) + '</h3>' +
      '<p>' + E(m.intro) + '</p>' +
      '<div class="bar"><i style="width:' + v.procent + '%"></i></div>' +
      '<div class="meta"><span>' + m.lessen.length + ' lessen</span><span>' + videos + ' video\'s</span>' +
      '<span>±' + m.studietijd + ' uur</span></div></a>';
  }

  /* ============================= MODULEPAGINA ============================= */

  function modulePagina(id) {
    var m = CURSUS.module(id);
    if (!m) return '<p>Module niet gevonden.</p>';
    var v = Store.moduleVoortgang(m);
    var videos = m.lessen.reduce(function (s, l) { return s + (l.videos || []).length; }, 0);

    return '<div class="crumbs"><a href="' + Seo.path('dash') + '">Mijn cursus</a> › Module ' + m.nr + '</div>' +
      '<div class="modhead"><div>' +
        (m.kritiek ? '<span class="chip danger">Verplicht vóór praktijkwerk</span>' : niveauChip(m.niveau)) +
        '<h1>Module ' + m.nr + ' - ' + E(m.titel) + '</h1>' +
        '<p>' + E(m.ondertitel ? m.ondertitel + ' ' : '') + E(m.intro) + '</p>' +
        '<div class="meta" style="gap:20px">' +
          '<span>📚 ' + m.lessen.length + ' lessen</span>' +
          '<span>🎬 ' + videos + ' video\'s</span>' +
          '<span>⏱ ±' + m.studietijd + ' uur</span>' +
          '<span>📊 ' + E(m.niveau) + '</span>' +
          '<span>✓ ' + v.klaar + ' van ' + v.totaal + ' afgerond</span>' +
        '</div>' +
      '</div>' +
      '<div class="goalbox"><h4>Na deze module kun je</h4><ul>' +
        m.leerdoelen.map(function (d) { return '<li>' + E(d) + '</li>'; }).join('') +
      '</ul></div></div>' +
      '<div class="lessons">' + m.lessen.map(function (l) { return lesRij(m, l); }).join('') + '</div>';
  }

  function lesRij(m, l) {
    var klaar = Store.isKlaar(l.id);
    var volgende = Store.volgendeLes();
    var isNu = !klaar && volgende && volgende.les.id === l.id;
    var vids = (l.videos || []).length;
    var soort = l.type === 'opdracht' ? '🔧 Opdracht' : '📖 Tekst';
    return '<a class="lrow ' + (klaar ? 'done' : isNu ? 'now' : '') + '" href="' + Seo.path('les', l.id) + '">' +
      '<div class="tick">' + (klaar ? '✓' : isNu ? '▶' : '') + '</div>' +
      '<div class="txt"><b>' + E(l.nr) + ' · ' + E(l.titel) + '</b>' +
      '<span>' + E(l.leerdoel || '') + '</span></div>' +
      '<div class="kind">' + soort + (vids ? ' · 🎬 ' + vids : '') + ' · ' + l.duur + ' min</div></a>';
  }

  /* ============================== LESPAGINA ============================== */

  function lesPagina(id) {
    var x = CURSUS.les(id);
    if (!x) return '<p>Les niet gevonden.</p>';
    var m = x.module, l = x.les;
    var gerenderd = MD.render(l.tekst || '');
    var buren = CURSUS.buren(id);
    var klaar = Store.isKlaar(id);
    var opgeslagen = Store.les(id);

    /* zijbalk */
    var zij = '<aside class="sidebar"><h5>Module ' + m.nr + '</h5>' +
      '<div class="modname"><a href="' + Seo.path('module', m.id) + '" style="text-decoration:none">' + E(m.titel) + '</a></div>' +
      '<nav class="snav">' + m.lessen.map(function (o) {
        return '<a href="' + Seo.path('les', o.id) + '" class="' + (Store.isKlaar(o.id) ? 'done ' : '') +
          (o.id === id ? 'on' : '') + '"><span class="dot"></span><span class="snavtxt">' +
          E(o.nr) + ' ' + E(o.titel) + '</span></a>';
      }).join('') + '</nav>';
    if (gerenderd.koppen.length) {
      zij += '<hr><h5>Op deze pagina</h5><nav class="snav">' +
        gerenderd.koppen.map(function (k) {
          return '<a href="' + Seo.anchor('les', id, k.id) + '" data-anker="' + k.id + '"><span class="snavtxt">' +
            E(k.tekst) + '</span></a>';
        }).join('') + '</nav>';
    }
    zij += '</aside>';

    /* video's */
    var videoHtml = (l.videos || []).map(function (v) {
      if (v.yt) {
        return '<div class="video"><iframe loading="lazy" allowfullscreen ' +
          'referrerpolicy="strict-origin-when-cross-origin" ' +
          'allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture" ' +
          'src="https://www.youtube-nocookie.com/embed/' + E(v.yt) + '" ' +
          'title="' + E(v.titel) + '"></iframe></div>' +
          '<div class="videocap"><span>' + vlag(v.taal) + ' <b>' + E(v.titel) + '</b></span>' +
          '<span>' + (v.duur ? E(v.duur) + ' · ' : '') +
          '<a href="https://www.youtube.com/watch?v=' + E(v.yt) + '" target="_blank" rel="noopener">openen op YouTube ↗</a>' +
          '</span></div>';
      }
      return '<a class="videosearch" target="_blank" rel="noopener" ' +
        'href="https://www.youtube.com/results?search_query=' + encodeURIComponent(v.zoek) + '">' +
        '<span class="ic">🔎</span><span><b>' + vlag(v.taal) + ' ' + E(v.titel) + '</b>' +
        '<span>Nog geen vaste video gekozen - dit opent een YouTube-zoekopdracht op ' +
        '“' + E(v.zoek) + '”</span></span></a>';
    }).join('');

    /* checklist */
    var checklist = '';
    if (l.checklist && l.checklist.length) {
      checklist = '<div class="checklist"><h4>Voordat je verdergaat</h4>' +
        l.checklist.map(function (c, i) {
          return '<label><input type="checkbox" data-vinkje="' + i + '"' +
            (opgeslagen.vinkjes && opgeslagen.vinkjes[i] ? ' checked' : '') + '> ' + E(c) + '</label>';
        }).join('') + '</div>';
    }

    var artikel = '<article class="article">' +
      '<div class="crumbs"><a href="' + Seo.path('dash') + '">Mijn cursus</a> › <a href="' + Seo.path('module', m.id) + '">Module ' + m.nr + '</a> › Les ' + E(l.nr) + '</div>' +
      '<h1>' + E(l.titel) + '</h1>' +
      '<div class="lessmeta"><span>⏱ ' + l.duur + ' min</span>' +
      ((l.videos || []).length ? '<span>🎬 ' + l.videos.length + ' video\'s</span>' : '') +
      '<span>📊 ' + E(m.niveau) + '</span>' +
      (m.kritiek ? '<span class="chip danger">Veiligheidskritisch</span>' : '') + '</div>' +
      (l.leerdoel ? '<div class="callout kern"><h4>Leerdoel van deze les</h4><p>' + E(l.leerdoel) + '</p></div>' : '') +
      gerenderd.html +
      (videoHtml ? '<h2 id="videos">Video\'s bij deze les</h2>' + videoHtml : '') +
      checklist +
      '<div class="footnav">' +
        (buren.vorige ? '<a class="btn ghost sm" href="' + Seo.path('les', buren.vorige.les.id) + '">← ' + E(buren.vorige.les.nr) + ' ' + E(buren.vorige.les.titel) + '</a>' : '<span></span>') +
        '<div class="right">' +
          '<button class="btn' + (klaar ? ' done-state' : '') + '" id="btnKlaar">' +
            (klaar ? '✓ Afgerond' : '✓ Markeer als afgerond') + '</button>' +
          (buren.volgende ? '<a class="btn ghost sm" href="' + Seo.path('les', buren.volgende.les.id) + '">' + E(buren.volgende.les.nr) + ' ' + E(buren.volgende.les.titel) + ' →</a>' : '') +
        '</div>' +
      '</div>' +
      (l.bronnen && l.bronnen.length ? '<div class="src">bron: ' + E(l.bronnen.join(' · ')) + '</div>' : '') +
      '</article>';

    return '<div class="lesson-layout">' + zij + artikel + '</div>';
  }

  /* ================================ NASLAG ================================ */

  function naslag() {
    return '<div class="crumbs"><a href="' + Seo.path('dash') + '">Mijn cursus</a> › Naslag</div>' +
      '<div class="sect-h"><h1>Naslag elektrotechniek</h1><span>formules, tabellen en spiekbriefjes voor op de werkvloer</span></div>' +
      '<div class="naslaggrid">' +
        window.NASLAG.map(function (k) {
          return '<div class="naslagcard"><h3>' + E(k.icoon || '') + ' ' + E(k.titel) + '</h3>' +
            MD.render(k.inhoud).html + '</div>';
        }).join('') +
      '</div>';
  }

  return { dashboard: dashboard, modulePagina: modulePagina, lesPagina: lesPagina, naslag: naslag };
})();
