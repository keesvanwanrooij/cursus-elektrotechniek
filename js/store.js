/* ==========================================================================
   store.js - voortgang bewaren, exporteren en importeren
   Bron van waarheid: localStorage. Zie docs/02-ARCHITECTUUR.md
   ========================================================================== */

window.Store = (function () {

  var SLEUTEL = 'cursus-elektro-voortgang';
  var data = laad();

  function leeg() {
    return {
      versie: 1,
      gestart: new Date().toISOString(),
      laatsteLes: null,
      lessen: {},
      instellingen: { thema: 'werkplaats' }
    };
  }

  function laad() {
    try {
      var ruw = localStorage.getItem(SLEUTEL);
      if (!ruw) return leeg();
      var d = JSON.parse(ruw);
      if (!d || typeof d !== 'object') return leeg();
      d.lessen = d.lessen || {};
      d.instellingen = d.instellingen || { thema: 'werkplaats' };
      return d;
    } catch (e) {
      console.warn('Voortgang kon niet worden gelezen, opnieuw begonnen.', e);
      return leeg();
    }
  }

  function bewaar() {
    try {
      localStorage.setItem(SLEUTEL, JSON.stringify(data));
    } catch (e) {
      alert('Voortgang kon niet worden opgeslagen. Sta opslag toe voor lokale bestanden, ' +
            'of exporteer je voortgang handmatig.');
    }
  }

  /* ------------------------------ lessen ------------------------------ */

  function les(id) {
    return data.lessen[id] || { klaar: false, datum: null, vinkjes: [] };
  }

  function isKlaar(id) { return !!(data.lessen[id] && data.lessen[id].klaar); }

  function zetKlaar(id, klaar) {
    var l = data.lessen[id] || { klaar: false, datum: null, vinkjes: [] };
    l.klaar = klaar;
    l.datum = klaar ? new Date().toISOString() : null;
    data.lessen[id] = l;
    if (klaar) data.laatsteLes = id;
    bewaar();
  }

  function zetVinkje(id, index, aan) {
    var l = data.lessen[id] || { klaar: false, datum: null, vinkjes: [] };
    l.vinkjes = l.vinkjes || [];
    l.vinkjes[index] = aan;
    data.lessen[id] = l;
    bewaar();
  }

  function bezoek(id) {
    if (data.laatsteLes !== id) { data.laatsteLes = id; bewaar(); }
  }

  /* ---------------------------- instellingen ---------------------------- */

  function thema() { return data.instellingen.thema || 'werkplaats'; }

  function zetThema(naam) {
    data.instellingen.thema = naam;
    document.documentElement.dataset.theme = naam;
    bewaar();
  }

  /* ------------------------------ statistiek ------------------------------ */

  function statistiek() {
    var modules = window.CURSUS.modules;
    var totaal = 0, klaar = 0, minuten = 0, videos = 0, modulesKlaar = 0;
    modules.forEach(function (m) {
      var mKlaar = 0;
      m.lessen.forEach(function (l) {
        totaal++;
        if (isKlaar(l.id)) {
          klaar++; mKlaar++;
          minuten += (l.duur || 0);
          videos += (l.videos || []).filter(function (v) { return v.yt; }).length;
        }
      });
      if (m.lessen.length && mKlaar === m.lessen.length) modulesKlaar++;
    });
    return {
      totaal: totaal, klaar: klaar, minuten: minuten, videos: videos,
      modulesKlaar: modulesKlaar, modules: modules.length,
      procent: totaal ? Math.round(klaar / totaal * 100) : 0
    };
  }

  function moduleVoortgang(m) {
    var klaar = m.lessen.filter(function (l) { return isKlaar(l.id); }).length;
    return { klaar: klaar, totaal: m.lessen.length,
             procent: m.lessen.length ? Math.round(klaar / m.lessen.length * 100) : 0 };
  }

  /* Eerste niet-afgeronde les, of de laatst bezochte. */
  function volgendeLes() {
    var alle = window.CURSUS.alleLessen();
    if (data.laatsteLes) {
      var huidig = alle.find(function (x) { return x.les.id === data.laatsteLes; });
      if (huidig && !isKlaar(huidig.les.id)) return huidig;
    }
    var eerste = alle.find(function (x) { return !isKlaar(x.les.id); });
    return eerste || alle[0];
  }

  /* ------------------------- export en import ------------------------- */

  function exporteer() {
    var naam = 'voortgang-' + new Date().toISOString().slice(0, 10) + '.json';
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = naam;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    return naam;
  }

  function importeer(bestand, klaarFn) {
    var lezer = new FileReader();
    lezer.onload = function () {
      try {
        var d = JSON.parse(lezer.result);
        if (!d || typeof d !== 'object' || !d.lessen) throw new Error('geen geldig voortgangsbestand');
        data = d;
        data.lessen = data.lessen || {};
        data.instellingen = data.instellingen || { thema: 'werkplaats' };
        bewaar();
        document.documentElement.dataset.theme = thema();
        klaarFn(null, Object.keys(data.lessen).length);
      } catch (e) {
        klaarFn(e);
      }
    };
    lezer.onerror = function () { klaarFn(new Error('bestand kon niet worden gelezen')); };
    lezer.readAsText(bestand);
  }

  function wis() {
    data = leeg();
    bewaar();
  }

  return {
    les: les, isKlaar: isKlaar, zetKlaar: zetKlaar, zetVinkje: zetVinkje, bezoek: bezoek,
    thema: thema, zetThema: zetThema,
    statistiek: statistiek, moduleVoortgang: moduleVoortgang, volgendeLes: volgendeLes,
    exporteer: exporteer, importeer: importeer, wis: wis
  };
})();
