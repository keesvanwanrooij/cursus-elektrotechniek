/* ==========================================================================
   markdown.js - mini-renderer voor de subset uit docs/02-ARCHITECTUUR.md
   Geen library, geen innerHTML met ongefilterde invoer: alles wordt eerst
   geëscaped en daarna pas als opmaak opgebouwd.
   ========================================================================== */

window.MD = (function () {

  function escape(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function slug(s) {
    return s.toLowerCase()
      .replace(/[àáâä]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i')
      .replace(/[òóôö]/g, 'o').replace(/[ùúûü]/g, 'u').replace(/ç/g, 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 48);
  }

  /* Inline-opmaak. Invoer is al geëscaped. */
  function inline(s) {
    return s
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }

  function cell(s) { return inline(escape(s.trim())); }

  /* Rendert markdown naar { html, koppen }. */
  function render(tekst) {
    var regels = String(tekst || '').replace(/\r\n/g, '\n').split('\n');
    var uit = [];
    var koppen = [];
    var i = 0;

    function isTabelRegel(r) { return /^\s*\|/.test(r); }
    function isLijstRegel(r) { return /^\s*[-*]\s+/.test(r); }
    function isNummerRegel(r) { return /^\s*\d+\.\s+/.test(r); }

    while (i < regels.length) {
      var regel = regels[i];
      var kaal = regel.trim();

      /* --- lege regel --- */
      if (kaal === '') { i++; continue; }

      /* --- callout: !!! type Titel ... !!! --- */
      var cal = kaal.match(/^!!!\s*(gevaar|kern|info)\s*(.*)$/);
      if (cal) {
        var soort = cal[1];
        var titel = cal[2] || (soort === 'gevaar' ? 'Let op' : soort === 'kern' ? 'Kernpunt' : 'Toelichting');
        var body = [];
        i++;
        while (i < regels.length && regels[i].trim() !== '!!!') { body.push(regels[i]); i++; }
        i++; // sluitende !!!
        uit.push('<div class="callout ' + soort + '"><h4>' + inline(escape(titel)) + '</h4>' +
                 alineas(body) + '</div>');
        continue;
      }

      /* --- verdieping: ?? Vraag ... ?? --- */
      var det = kaal.match(/^\?\?\s*(.*)$/);
      if (det && kaal !== '??') {
        var vraag = det[1] || 'Meer uitleg';
        var dbody = [];
        i++;
        while (i < regels.length && regels[i].trim() !== '??') { dbody.push(regels[i]); i++; }
        i++;
        uit.push('<details><summary>' + inline(escape(vraag)) + '</summary>' + alineas(dbody) + '</details>');
        continue;
      }

      /* --- koppen --- */
      var kop = kaal.match(/^(#{2,3})\s+(.*)$/);
      if (kop) {
        var niveau = kop[1].length;
        var kt = kop[2].trim();
        var id = slug(kt);
        if (niveau === 2) koppen.push({ id: id, tekst: kt });
        uit.push('<h' + niveau + ' id="' + id + '">' + inline(escape(kt)) + '</h' + niveau + '>');
        i++; continue;
      }

      /* --- tabel --- */
      if (isTabelRegel(regel)) {
        var trs = [];
        while (i < regels.length && isTabelRegel(regels[i])) { trs.push(regels[i]); i++; }
        uit.push(tabel(trs));
        continue;
      }

      /* --- ongenummerde lijst --- */
      if (isLijstRegel(regel)) {
        var items = [];
        while (i < regels.length && isLijstRegel(regels[i])) {
          items.push('<li>' + inline(escape(regels[i].replace(/^\s*[-*]\s+/, ''))) + '</li>');
          i++;
        }
        uit.push('<ul>' + items.join('') + '</ul>');
        continue;
      }

      /* --- genummerde lijst --- */
      if (isNummerRegel(regel)) {
        var nitems = [];
        while (i < regels.length && isNummerRegel(regels[i])) {
          nitems.push('<li>' + inline(escape(regels[i].replace(/^\s*\d+\.\s+/, ''))) + '</li>');
          i++;
        }
        uit.push('<ol>' + nitems.join('') + '</ol>');
        continue;
      }

      /* --- citaat --- */
      if (/^>\s?/.test(kaal)) {
        var qr = [];
        while (i < regels.length && /^\s*>\s?/.test(regels[i])) {
          qr.push(regels[i].replace(/^\s*>\s?/, '')); i++;
        }
        uit.push('<blockquote>' + inline(escape(qr.join(' '))) + '</blockquote>');
        continue;
      }

      /* --- alinea --- */
      var p = [];
      while (i < regels.length) {
        var r = regels[i];
        if (r.trim() === '' || /^(#{2,3}\s|!!!|\?\?)/.test(r.trim()) ||
            isTabelRegel(r) || isLijstRegel(r) || isNummerRegel(r) || /^\s*>/.test(r)) break;
        p.push(r.trim()); i++;
      }
      if (p.length) uit.push('<p>' + inline(escape(p.join(' '))) + '</p>');
    }

    return { html: uit.join('\n'), koppen: koppen };
  }

  /* Rendert een blok regels als alinea's (voor binnen callouts en details). */
  function alineas(regels) {
    var blokken = [];
    var huidig = [];
    regels.forEach(function (r) {
      if (r.trim() === '') { if (huidig.length) { blokken.push(huidig); huidig = []; } }
      else huidig.push(r.trim());
    });
    if (huidig.length) blokken.push(huidig);
    if (!blokken.length) return '';
    return blokken.map(function (b) {
      if (/^\s*[-*]\s+/.test(b[0])) {
        return '<ul>' + b.map(function (r) {
          return '<li>' + inline(escape(r.replace(/^\s*[-*]\s+/, ''))) + '</li>';
        }).join('') + '</ul>';
      }
      if (/^\s*\d+\.\s+/.test(b[0])) {
        return '<ol>' + b.map(function (r) {
          return '<li>' + inline(escape(r.replace(/^\s*\d+\.\s+/, ''))) + '</li>';
        }).join('') + '</ol>';
      }
      return '<p>' + inline(escape(b.join(' '))) + '</p>';
    }).join('');
  }

  /* Bouwt een tabel uit regels die met | beginnen. */
  function tabel(regels) {
    var rijen = regels.map(function (r) {
      return r.trim().replace(/^\|/, '').replace(/\|$/, '').split('|');
    });
    var kop = rijen[0];
    var start = 1;
    // scheidingsregel |---|---| overslaan
    if (rijen[1] && rijen[1].every(function (c) { return /^\s*:?-{2,}:?\s*$/.test(c); })) start = 2;
    var html = '<table><thead><tr>' +
      kop.map(function (c) { return '<th>' + cell(c) + '</th>'; }).join('') +
      '</tr></thead><tbody>';
    for (var r = start; r < rijen.length; r++) {
      html += '<tr>' + rijen[r].map(function (c) { return '<td>' + cell(c) + '</td>'; }).join('') + '</tr>';
    }
    return html + '</tbody></table>';
  }

  return { render: render, escape: escape, slug: slug };
})();
