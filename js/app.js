/* ==========================================================================
   app.js - router, bediening en opstart
   ========================================================================== */

(function () {

  var app = document.getElementById('app');

  /* ------------------------------- router ------------------------------- */

  function route() {
    sluitNavMenu();
    var hash = location.hash.replace(/^#/, '') || '/';

    /* Ankers binnen een lespagina (#kop-id) niet als route behandelen. */
    if (hash && hash.charAt(0) !== '/') {
      var doel = document.getElementById(hash);
      if (doel) { doel.scrollIntoView({ behavior: 'smooth' }); return; }
      hash = '/';
    }

    var delen = hash.split('/').filter(Boolean);
    var pagina = delen[0] || 'dash';

    if (pagina === 'module' && delen[1]) {
      app.innerHTML = Views.modulePagina(delen[1]);
      markeerNav('dash');
    } else if (pagina === 'les' && delen[1]) {
      app.innerHTML = Views.lesPagina(delen[1]);
      Store.bezoek(delen[1]);
      koppelLesKnoppen(delen[1]);
      markeerNav('dash');
    } else if (pagina === 'naslag') {
      app.innerHTML = Views.naslag();
      markeerNav('naslag');
    } else {
      app.innerHTML = Views.dashboard();
      markeerNav('dash');
    }
    window.scrollTo({ top: 0 });
  }

  function markeerNav(naam) {
    document.querySelectorAll('.topnav a').forEach(function (a) {
      a.classList.toggle('on', a.dataset.route === naam);
    });
  }

  /* --------------------------- lespagina-acties --------------------------- */

  function koppelLesKnoppen(lesId) {
    var knop = document.getElementById('btnKlaar');
    if (knop) {
      knop.addEventListener('click', function () {
        var nu = !Store.isKlaar(lesId);
        Store.zetKlaar(lesId, nu);
        knop.classList.toggle('done-state', nu);
        knop.textContent = nu ? '✓ Afgerond' : '✓ Markeer als afgerond';
        if (nu) {
          melding('Les afgerond. Voortgang opgeslagen.');
          var buren = CURSUS.buren(lesId);
          if (buren.volgende) {
            setTimeout(function () { location.hash = '#/les/' + buren.volgende.les.id; }, 600);
          }
        }
      });
    }

    document.querySelectorAll('[data-vinkje]').forEach(function (input) {
      input.addEventListener('change', function () {
        Store.zetVinkje(lesId, parseInt(input.dataset.vinkje, 10), input.checked);
      });
    });

    /* Zij-navigatie naar koppen: soepel scrollen zonder de route te wijzigen. */
    document.querySelectorAll('[data-anker]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var doel = document.getElementById(a.dataset.anker);
        if (doel) doel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* --------------------------- mobiel navmenu --------------------------- */

  var navToggle = document.getElementById('navToggle');
  var topnav = document.getElementById('topnav');

  navToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = topnav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.textContent = open ? '✕' : '☰';
  });
  document.addEventListener('click', function () { sluitNavMenu(); });
  topnav.addEventListener('click', function (e) {
    e.stopPropagation();
    if (e.target.closest('a')) sluitNavMenu();
  });

  function sluitNavMenu() {
    topnav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.textContent = '☰';
  }

  /* -------------------------------- menu -------------------------------- */

  var menuPanel = document.getElementById('menuPanel');
  var menuBtn = document.getElementById('menuBtn');

  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menuPanel.hidden = !menuPanel.hidden;
  });
  document.addEventListener('click', function () { menuPanel.hidden = true; });
  menuPanel.addEventListener('click', function (e) { e.stopPropagation(); });

  document.getElementById('themeToggle').addEventListener('click', function () {
    var nieuw = Store.thema() === 'werkplaats' ? 'studio' : 'werkplaats';
    Store.zetThema(nieuw);
    melding(nieuw === 'studio' ? 'Licht thema' : 'Donker thema');
  });

  document.getElementById('btnExport').addEventListener('click', function () {
    menuPanel.hidden = true;
    var naam = Store.exporteer();
    melding('Opgeslagen als ' + naam + ' in je downloadmap.');
  });

  var fileInput = document.getElementById('fileInput');
  document.getElementById('btnImport').addEventListener('click', function () {
    menuPanel.hidden = true;
    fileInput.click();
  });
  fileInput.addEventListener('change', function () {
    if (!fileInput.files.length) return;
    Store.importeer(fileInput.files[0], function (fout, aantal) {
      if (fout) { melding('Importeren mislukt: ' + fout.message); return; }
      melding(aantal + ' lessen ingelezen.');
      route();
    });
    fileInput.value = '';
  });

  document.getElementById('btnReset').addEventListener('click', function () {
    menuPanel.hidden = true;
    if (confirm('Alle voortgang wissen? Dit kan niet ongedaan worden gemaakt.\n\n' +
                'Tip: exporteer eerst je voortgang als back-up.')) {
      Store.wis();
      melding('Voortgang gewist.');
      route();
    }
  });

  /* ------------------------------- toetsen ------------------------------- */

  document.addEventListener('keydown', function (e) {
    if (e.target.matches('input, textarea, select')) return;
    if (!location.hash.startsWith('#/les/')) return;
    var id = location.hash.replace('#/les/', '');
    var buren = CURSUS.buren(id);
    if (e.key === 'ArrowRight' && buren.volgende) location.hash = '#/les/' + buren.volgende.les.id;
    if (e.key === 'ArrowLeft' && buren.vorige) location.hash = '#/les/' + buren.vorige.les.id;
  });

  /* ------------------------------- melding ------------------------------- */

  var toastTimer;
  function melding(tekst) {
    var oud = document.querySelector('.toast');
    if (oud) oud.remove();
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = tekst;
    document.body.appendChild(t);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.remove(); }, 2600);
  }

  /* ------------------------------------ pwa ------------------------------------ */

  /* Service workers registreren niet op file:// - dat is een browserbeperking,
     geen bug. Dubbelklikken op index.html blijft daardoor altijd werken; de
     offline-cache en installatie zijn alleen actief als de site via http(s) draait. */
  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('service-worker.js').catch(function (e) {
        console.warn('Service worker kon niet worden geregistreerd.', e);
      });
    });
  }

  var installBtn = document.getElementById('installBtn');
  var uitgesteldPrompt = null;

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    uitgesteldPrompt = e;
    installBtn.hidden = false;
  });

  installBtn.addEventListener('click', function () {
    if (!uitgesteldPrompt) return;
    installBtn.hidden = true;
    uitgesteldPrompt.prompt();
    uitgesteldPrompt.userChoice.then(function (keuze) {
      melding(keuze.outcome === 'accepted' ? 'App wordt geïnstalleerd.' : 'Installatie geannuleerd.');
      uitgesteldPrompt = null;
    });
  });

  window.addEventListener('appinstalled', function () {
    installBtn.hidden = true;
    melding('Cursus geïnstalleerd als app.');
  });

  /* ------------------------------- opstart ------------------------------- */

  window.addEventListener('hashchange', route);

  if (!window.CURSUS || !CURSUS.modules.length) {
    app.innerHTML = '<div class="callout gevaar"><h4>Geen inhoud geladen</h4>' +
      '<p>De contentbestanden zijn niet gevonden. Controleer of de map <code>content</code> ' +
      'naast <code>index.html</code> staat.</p></div>';
  } else {
    document.documentElement.dataset.theme = Store.thema();
    route();
  }
})();
