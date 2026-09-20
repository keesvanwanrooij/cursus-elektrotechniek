/* ==========================================================================
   kennisviews.js - pagina's voor toepassingen, merken en producten
   Bouwt de HTML uit de gegevens in content/kennis/ (zie KENNIS). Wordt in de
   browser en door tools/build-seo.js gebruikt, dus altijd dezelfde uitvoer.
   ========================================================================== */

window.KennisViews = (function () {

  var E = MD.escape;

  /* -------------------------------- hulp -------------------------------- */

  function href(page, id) { return Seo.path(page, id); }

  function kroon(delen) {
    return '<div class="crumbs">' + delen.map(function (d) {
      return d.href ? '<a href="' + d.href + '">' + E(d.tekst) + '</a>' : E(d.tekst);
    }).join(' › ') + '</div>';
  }

  function rolNaam(id) { var r = KENNIS.rol(id); return r ? r.naam : id; }

  function secties(lijst) {
    return (lijst || []).map(function (s) {
      return '<h2 id="' + E(s.id) + '">' + E(s.kop) + '</h2>' + MD.render(s.tekst).html;
    }).join('');
  }

  function tabel(t) {
    if (!t || !t.kop || !t.rijen || !t.rijen.length) return '';
    return '<table><thead><tr>' + t.kop.map(function (k) { return '<th>' + E(k) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      t.rijen.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + E(c) + '</td>'; }).join('') + '</tr>'; }).join('') +
      '</tbody></table>';
  }

  function zijbalk(kop, titelHtml, lijst, ankers) {
    var h = '<aside class="sidebar"><h5>' + E(kop) + '</h5><div class="modname">' + titelHtml + '</div>';
    if (lijst && lijst.length) {
      h += '<nav class="snav">' + lijst.map(function (l) {
        return '<a href="' + l.href + '"' + (l.actief ? ' class="on"' : '') + '><span class="dot"></span><span class="snavtxt">' + E(l.tekst) + '</span></a>';
      }).join('') + '</nav>';
    }
    if (ankers && ankers.length) {
      h += '<hr><h5>Op deze pagina</h5><nav class="snav">' + ankers.map(function (a) {
        return '<a href="' + a.href + '" data-anker="' + E(a.id) + '"><span class="snavtxt">' + E(a.tekst) + '</span></a>';
      }).join('') + '</nav>';
    }
    return h + '</aside>';
  }

  function ankersVan(lijst, hrefBasis) {
    return lijst.map(function (s) { return { id: s.id, tekst: s.kop, href: hrefBasis + '#' + s.id }; });
  }

  function basis(page, id) { return Seo.cfg.path ? Seo.path(page, id) : ''; }

  /* Kaart voor een product, toepassing of merk. */
  function kaart(url, label, titel, tekst, meta, chip) {
    return '<a class="modcard" href="' + url + '"><div class="num">' + E(label) + (chip ? ' <span class="chip mut">' + E(chip) + '</span>' : '') + '</div>' +
      '<h3>' + E(titel) + '</h3><p>' + E(tekst || '') + '</p>' + (meta ? '<div class="meta">' + meta + '</div>' : '') + '</a>';
  }

  function productKaart(p, metMerk) {
    var m = KENNIS.merk(p.merk);
    return kaart(href('product', p.id), metMerk ? m.naam : rolNaam(p.rol), p.naam, p.korteOmschrijving,
      p.varianten && p.varianten.rijen ? '<span>' + p.varianten.rijen.length + ' modellen</span>' : '', metMerk ? rolNaam(p.rol) : '');
  }

  function cursusLinks(ids) {
    var lessen = (ids || []).map(function (id) { return CURSUS.les(id); }).filter(Boolean);
    if (!lessen.length) return '';
    return '<h2 id="cursus">Leer de basis in de cursus</h2><p>Deze lessen leggen uit waar dit onderwerp op is gebouwd:</p><ul>' +
      lessen.map(function (x) {
        return '<li><a href="' + href('les', x.les.id) + '">Les ' + E(x.les.nr) + ': ' + E(x.les.titel) + '</a></li>';
      }).join('') + '</ul>';
  }

  var UITLEG_SAMENVATTING = 'Dit is een samenvatting in eigen woorden om je snel wegwijs te maken. De handleiding van de fabrikant blijft leidend, ' +
    'zeker voor veiligheid en voor het aansluiten. Onderaan staat per onderwerp in welk document en op welke pagina je moet zijn. ' +
    'De pdf\'s zelf staan niet op deze site: vraag ze op bij de fabrikant of je leverancier.';

  /* ================================ OVERZICHTEN ================================ */

  function toepassingenOverzicht() {
    return kroon([{ tekst: 'Mijn cursus', href: href('dash') }, { tekst: 'Toepassingen' }]) +
      '<header class="pagehead"><h1>Toepassingen: wat wil je installeren?</h1>' +
      '<p>Begin bij wat de klant wil, niet bij het merk. Elke toepassing legt uit hoe het werkt, welke onderdelen je nodig hebt en welke merken en producten daarvoor bestaan.</p></header>' +
      '<div class="modgrid">' + KENNIS.toepassingen.map(function (t) {
        var n = KENNIS.productenVoorToepassing(t.id).length, mk = KENNIS.merkenVoorToepassing(t.id).length;
        return kaart(href('toepassing', t.id), 'Toepassing', t.naam, t.intro,
          '<span>' + n + ' producten</span><span>' + mk + (mk === 1 ? ' merk' : ' merken') + '</span>');
      }).join('') + '</div>';
  }

  function merkenOverzicht() {
    return kroon([{ tekst: 'Mijn cursus', href: href('dash') }, { tekst: 'Merken' }]) +
      '<header class="pagehead"><h1>Merken en producten</h1>' +
      '<p>Per merk een uitleg van het ecosysteem en per product een samenvatting van de handleiding, met verwijzingen naar hoofdstuk en pagina.</p></header>' +
      '<div class="modgrid">' + KENNIS.merken.map(function (m) {
        var n = KENNIS.productenVanMerk(m.id).length;
        return kaart(href('merk', m.id), m.herkomst || 'Merk', m.naam, m.intro, '<span>' + n + ' producten met samenvatting</span>');
      }).join('') + '</div>';
  }

  /* ================================ TOEPASSING ================================ */

  function toepassingPagina(id) {
    var t = KENNIS.toepassing(id);
    if (!t) return '<p>Toepassing niet gevonden.</p>';
    var b = basis('toepassing', id);
    var groepen = KENNIS.groepenVoorToepassing(id);
    var merken = KENNIS.merkenVoorToepassing(id);

    /* Onderdelen in de volgorde van de toepassing, aangevuld met rollen die producten hebben. */
    var rollen = (t.onderdelen || []).map(function (o) { return o.rol; });
    groepen.forEach(function (g) { if (rollen.indexOf(g.rol.id) < 0) rollen.push(g.rol.id); });

    var onderdelenHtml = rollen.map(function (rid) {
      var rol = KENNIS.rol(rid), uitleg = (t.onderdelen || []).filter(function (o) { return o.rol === rid; })[0];
      var prods = KENNIS.productenVoorToepassing(id).filter(function (p) { return p.rol === rid; });
      return '<h3>' + E(rol ? rol.naam : rid) + '</h3>' +
        '<p>' + E(uitleg ? uitleg.uitleg : (rol ? rol.uitleg : '')) + '</p>' +
        (prods.length
          ? '<div class="modgrid">' + prods.map(function (p) { return productKaart(p, true); }).join('') + '</div>'
          : '<p class="leeg">Nog geen product van dit type in de kennisbank.</p>');
    }).join('');

    var kopjes = (t.secties || []).map(function (s) { return { id: s.id, kop: s.kop }; });
    kopjes.push({ id: 'onderdelen', kop: 'Onderdelen en producten' });
    if ((t.cursusLinks || []).length) kopjes.push({ id: 'cursus', kop: 'Leer de basis in de cursus' });

    var lijst = KENNIS.toepassingen.map(function (x) {
      return { href: href('toepassing', x.id), tekst: x.naam, actief: x.id === id };
    });

    return '<div class="lesson-layout">' +
      zijbalk('Toepassingen', '<a href="' + href('toepassingen') + '" style="text-decoration:none">Alle toepassingen</a>', lijst, ankersVan(kopjes, b)) +
      '<article class="article">' +
        kroon([{ tekst: 'Mijn cursus', href: href('dash') }, { tekst: 'Toepassingen', href: href('toepassingen') }, { tekst: t.naam }]) +
        '<h1>' + E(t.naam) + '</h1>' +
        '<div class="lessmeta"><span>' + KENNIS.productenVoorToepassing(id).length + ' producten</span><span>' +
          merken.map(function (m) { return '<a href="' + href('merk', m.id) + '">' + E(m.naam) + '</a>'; }).join(', ') + '</span></div>' +
        '<p class="lead">' + E(t.intro) + '</p>' +
        secties(t.secties) +
        '<h2 id="onderdelen">Onderdelen en producten</h2>' +
        '<p>Elk onderdeel heeft een rol in het systeem. Onder elke rol staan de producten die in de kennisbank zijn uitgewerkt, met een samenvatting van de handleiding.</p>' +
        onderdelenHtml +
        cursusLinks(t.cursusLinks) +
      '</article></div>';
  }

  /* ================================== MERK ================================== */

  function merkPagina(id) {
    var m = KENNIS.merk(id);
    if (!m) return '<p>Merk niet gevonden.</p>';
    var b = basis('merk', id);
    var prods = KENNIS.productenVanMerk(id);
    var toep = KENNIS.toepassingenVanMerk(id);

    var rollenMetProduct = KENNIS.rollen.filter(function (r) { return prods.some(function (p) { return p.rol === r.id; }); });
    var productenHtml = rollenMetProduct.map(function (r) {
      return '<h3>' + E(r.naam) + '</h3><div class="modgrid">' +
        prods.filter(function (p) { return p.rol === r.id; }).map(function (p) { return productKaart(p, false); }).join('') + '</div>';
    }).join('');

    var overig = (m.overigeProducten || []).length
      ? '<h2 id="overige-producten">Andere producten van ' + E(m.naam) + '</h2><p>Hiervoor is nog geen handleiding in de kennisbank verwerkt.</p><ul>' +
        m.overigeProducten.map(function (o) { return '<li><strong>' + E(o.naam) + '</strong> (' + E(rolNaam(o.rol)) + '): ' + E(o.omschrijving) + '</li>'; }).join('') + '</ul>'
      : '';

    var begrippen = (m.begrippen || []).length
      ? '<h2 id="begrippen">Begrippenlijst</h2><dl class="begrippen">' +
        m.begrippen.map(function (x) { return '<dt>' + E(x.term) + '</dt><dd>' + E(x.uitleg) + '</dd>'; }).join('') + '</dl>'
      : '';

    var toepHtml = toep.length
      ? '<h2 id="toepassingen">Toepassingen met ' + E(m.naam) + '</h2><ul>' +
        toep.map(function (t) { return '<li><a href="' + href('toepassing', t.id) + '">' + E(t.naam) + '</a>: ' + E(t.intro) + '</li>'; }).join('') + '</ul>'
      : '';

    var kopjes = (m.secties || []).map(function (s) { return { id: s.id, kop: s.kop }; });
    kopjes.push({ id: 'producten', kop: 'Producten' });
    if (overig) kopjes.push({ id: 'overige-producten', kop: 'Andere producten' });
    if (begrippen) kopjes.push({ id: 'begrippen', kop: 'Begrippenlijst' });
    if (toepHtml) kopjes.push({ id: 'toepassingen', kop: 'Toepassingen' });

    var lijst = prods.map(function (p) { return { href: href('product', p.id), tekst: p.naam }; });

    return '<div class="lesson-layout">' +
      zijbalk('Merk', E(m.naam), lijst, ankersVan(kopjes, b)) +
      '<article class="article">' +
        kroon([{ tekst: 'Mijn cursus', href: href('dash') }, { tekst: 'Merken', href: href('merken') }, { tekst: m.naam }]) +
        '<h1>' + E(m.naam) + ': merk, producten en handleidingen</h1>' +
        '<div class="lessmeta">' + (m.herkomst ? '<span>' + E(m.herkomst) + '</span>' : '') +
          (m.website ? '<span><a href="' + E(m.website) + '" target="_blank" rel="noopener">Officiële website ↗</a></span>' : '') +
          '<span>' + prods.length + ' producten met samenvatting</span></div>' +
        '<p class="lead">' + E(m.intro) + '</p>' +
        secties(m.secties) +
        '<h2 id="producten">Producten van ' + E(m.naam) + '</h2>' + productenHtml +
        overig + begrippen + toepHtml +
      '</article></div>';
  }

  /* ================================= PRODUCT ================================= */

  function verwijzingen(p) {
    var docs = {};
    (p.documenten || []).forEach(function (d) { docs[d.id] = d; });
    var refs = p.handleidingRefs || [];
    if (!refs.length) return '';
    var rijen = refs.map(function (r) {
      var d = docs[r.doc] || { titel: r.doc, soort: '' };
      return '<tr><td>' + E(d.soort || d.titel) + '</td><td>' + E(r.hoofdstuk) + '</td><td>p. ' + E(r.paginas) + '</td><td>' + E(r.onderwerp) + '</td></tr>';
    }).join('');
    var lijst = (p.documenten || []).map(function (d) {
      return '<li><strong>' + E(d.titel) + '</strong> (' + E(d.soort) + (d.paginas ? ', ' + d.paginas + ' pagina\'s' : '') + ')</li>';
    }).join('');
    return '<h2 id="handleiding">Waar in de handleiding</h2>' +
      '<p>Paginanummers verwijzen naar de pagina in de pdf (de eerste pagina is 1), niet naar het gedrukte paginanummer in het document.</p>' +
      '<table><thead><tr><th>Document</th><th>Hoofdstuk</th><th>Pagina</th><th>Waarover</th></tr></thead><tbody>' + rijen + '</tbody></table>' +
      (lijst ? '<h3>Documenten die hierbij horen</h3><ul>' + lijst + '</ul>' : '');
  }

  function productPagina(id) {
    var p = KENNIS.product(id);
    if (!p) return '<p>Product niet gevonden.</p>';
    var m = KENNIS.merk(p.merk), b = basis('product', id);

    /* Varianttabel direct na de sectie 'varianten', anders na 'plek-in-systeem'. */
    var ss = p.secties || [];
    var tabelHtml = p.varianten && p.varianten.rijen && p.varianten.rijen.length
      ? '<h3 id="modellen">Modellen op een rij</h3>' + tabel(p.varianten) : '';
    var invoegNa = ss.some(function (s) { return s.id === 'varianten'; }) ? 'varianten' : 'plek-in-systeem';
    var inhoud = ss.map(function (s) {
      return '<h2 id="' + E(s.id) + '">' + E(s.kop) + '</h2>' + MD.render(s.tekst).html + (s.id === invoegNa ? tabelHtml : '');
    }).join('');
    if (!ss.some(function (s) { return s.id === invoegNa; })) inhoud += tabelHtml;

    var kopjes = ss.map(function (s) { return { id: s.id, kop: s.kop }; });
    if ((p.handleidingRefs || []).length) kopjes.push({ id: 'handleiding', kop: 'Waar in de handleiding' });
    if ((p.zieOok || []).length) kopjes.push({ id: 'zie-ook', kop: 'Zie ook' });
    if ((p.cursusLinks || []).length) kopjes.push({ id: 'cursus', kop: 'Leer de basis in de cursus' });

    var lijst = KENNIS.productenVanMerk(m.id).map(function (x) {
      return { href: href('product', x.id), tekst: x.naam, actief: x.id === id };
    });

    var zie = (p.zieOok || []).map(function (o) { return KENNIS.product(o); }).filter(Boolean);
    var toepChips = (p.toepassingen || []).map(function (tid) {
      var t = KENNIS.toepassing(tid);
      return t ? '<a class="chip" href="' + href('toepassing', t.id) + '">' + E(t.naam) + '</a>' : '';
    }).join(' ');

    return '<div class="lesson-layout">' +
      zijbalk(m.naam, '<a href="' + href('merk', m.id) + '" style="text-decoration:none">Alle ' + E(m.naam) + ' producten</a>', lijst, ankersVan(kopjes, b)) +
      '<article class="article">' +
        kroon([{ tekst: 'Mijn cursus', href: href('dash') }, { tekst: 'Merken', href: href('merken') },
               { tekst: m.naam, href: href('merk', m.id) }, { tekst: p.naam }]) +
        '<h1>' + E(p.naam) + '</h1>' +
        '<div class="lessmeta"><span class="chip mut">' + E(rolNaam(p.rol)) + '</span><span>' + E(m.naam) + '</span>' + toepChips + '</div>' +
        '<p class="lead">' + E(p.korteOmschrijving) + '</p>' +
        '<div class="callout info"><h4>Samenvatting, geen vervanging</h4><p>' + E(UITLEG_SAMENVATTING) + '</p></div>' +
        inhoud +
        verwijzingen(p) +
        (zie.length ? '<h2 id="zie-ook">Zie ook</h2><div class="modgrid">' + zie.map(function (z) { return productKaart(z, false); }).join('') + '</div>' : '') +
        cursusLinks(p.cursusLinks) +
      '</article></div>';
  }

  /* Blok op het dashboard: ingang naar de kennisbank. */
  function dashboardBlok() {
    if (!window.KENNIS || !KENNIS.toepassingen.length) return '';
    return '<div class="sect-h"><h2>Kennisbank voor de praktijk</h2><span>toepassingen, merken en producten</span></div>' +
      '<div class="modgrid">' +
        kaart(href('toepassingen'), 'Toepassingen', 'Wat wil je installeren?',
          'Thuisbatterij en laadpaal: hoe het werkt, welke onderdelen je nodig hebt en welke merken en producten er zijn.',
          KENNIS.toepassingen.map(function (t) { return '<span>' + E(t.naam) + '</span>'; }).join('')) +
        kaart(href('merken'), 'Merken', 'Merken en handleidingen samengevat',
          'Per merk een uitleg van het ecosysteem en per product een samenvatting van de handleiding met verwijzingen naar hoofdstuk en pagina.',
          KENNIS.merken.map(function (m) { return '<span>' + E(m.naam) + '</span>'; }).join('')) +
      '</div>';
  }

  return {
    toepassingenOverzicht: toepassingenOverzicht, merkenOverzicht: merkenOverzicht,
    toepassingPagina: toepassingPagina, merkPagina: merkPagina, productPagina: productPagina,
    dashboardBlok: dashboardBlok
  };
})();
