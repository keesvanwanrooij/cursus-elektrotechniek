/* ==========================================================================
   app.js - router, bediening en opstart
   ========================================================================== */

(function () {

  var app = document.getElementById('app');

  /* ----------------------------- routing-modus ----------------------------- */

  /* Via http(s): schone URL's (/les/waarom-elektriciteit-doodt/), goed vindbaar voor zoekmachines.
     Via file://: hash-routes (#/les/m01l03), want een dubbelklik kent geen paden. */
  if (location.protocol.indexOf('http') === 0) {
    var basisMeta = document.querySelector('meta[name="site-base"]');
    /* Homepage zonder meta: basis is de map zelf. Offline-fallback op een diepe URL: alles voor /les/, /module/ of /naslag/. */
    var basis = basisMeta ? basisMeta.content
      : location.pathname.replace(/index\.html$/, '').replace(/^(.*?\/)(?:les|module|naslag)\/.*$/, '$1');
    if (basis.slice(-1) !== '/') basis += '/';
    Seo.configureer({ path: true, base: basis, origin: location.origin });
  }

  /* Interne navigatie: pushState in pad-modus, hash in file://-modus. */
  function ga(page, id) {
    var href = Seo.path(page, id);
    if (Seo.cfg.path) { history.pushState(null, '', href); route(); }
    else location.hash = href;
  }

  function huidigeRoute() {
    return Seo.cfg.path ? Seo.parsePad(location.pathname) : Seo.parseHash(location.hash);
  }

  /* ------------------------------- router ------------------------------- */

  function route() {
    sluitNavMenu();

    if (Seo.cfg.path) {
      /* Oude hash-links (#/les/m01l03) worden omgezet naar de schone URL. */
      if (/^#\//.test(location.hash)) {
        var oud = Seo.parseHash(location.hash);
        history.replaceState(null, '', Seo.path(oud.page, oud.id));
      }
    } else {
      /* Ankers binnen een lespagina (#kop-id) zijn geen route. */
      var hash = location.hash.replace(/^#/, '') || '/';
      if (hash && hash.charAt(0) !== '/') {
        var doel = document.getElementById(hash);
        if (doel) { doel.scrollIntoView({ behavior: 'smooth' }); return; }
      }
    }

    var r = huidigeRoute();

    if (r.page === 'module') {
      app.innerHTML = Views.modulePagina(r.id);
      markeerNav('dash');
    } else if (r.page === 'les') {
      app.innerHTML = Views.lesPagina(r.id);
      Store.bezoek(r.id);
      koppelLesKnoppen(r.id);
      markeerNav('dash');
    } else if (r.page === 'naslag') {
      app.innerHTML = Views.naslag();
      markeerNav('naslag');
    } else {
      app.innerHTML = Views.dashboard();
      markeerNav('dash');
    }

    Seo.pasToe(r.page, r.id);

    var anker = Seo.cfg.path && location.hash.length > 1 ? document.getElementById(location.hash.slice(1)) : null;
    if (anker) anker.scrollIntoView(); else window.scrollTo({ top: 0 });
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
          /* Module of hele cursus afgerond: even stilstaan en een uitnodiging tonen, niet doorschakelen. */
          if (toonMijlpaal(lesId)) return;
          var buren = CURSUS.buren(lesId);
          if (buren.volgende) {
            setTimeout(function () { ga('les', buren.volgende.les.id); }, 600);
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

  /* Donatie-uitnodiging op een gevoelig moment: als je iets hebt afgerond. Nooit willekeurig. */
  function toonMijlpaal(lesId) {
    var x = CURSUS.les(lesId);
    var alles = CURSUS.alleLessen().every(function (o) { return Store.isKlaar(o.les.id); });
    if (!alles && Store.moduleVoortgang(x.module).procent !== 100) return false;
    var html = Views.steunBlok('mijlpaal', alles ? 'Je hebt de hele cursus afgerond!' : 'Module ' + x.module.nr + ' afgerond!');
    if (!html) return false;
    var oud = document.querySelector('.steun');
    if (oud) oud.outerHTML = html;
    else { var nav = document.querySelector('.footnav'); if (nav) nav.insertAdjacentHTML('afterend', html); }
    return true;
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest || !e.target.closest('[data-steun-uit]')) return;
    Store.zetInstelling('donatieUit', true);
    document.querySelectorAll('.steun').forEach(function (el) { el.remove(); });
    melding('Goed, ik vraag het niet meer.');
  });

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
    var r = huidigeRoute();
    if (r.page !== 'les') return;
    var buren = CURSUS.buren(r.id);
    if (e.key === 'ArrowRight' && buren.volgende) ga('les', buren.volgende.les.id);
    if (e.key === 'ArrowLeft' && buren.vorige) ga('les', buren.vorige.les.id);
  });

  /* Links naar andere pagina's van de site: geen volledige herlaad, wel een nieuwe URL. */
  document.addEventListener('click', function (e) {
    if (!Seo.cfg.path || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.target || a.hasAttribute('download')) return;
    var u = new URL(a.href, location.href);
    if (u.origin !== location.origin || u.pathname.indexOf(Seo.cfg.base) !== 0) return;
    if (u.pathname === location.pathname && u.hash) return;
    var p = Seo.parsePad(u.pathname);
    if (p.page === 'dash' && u.pathname.replace(/index\.html$/, '') !== Seo.cfg.base) return;
    e.preventDefault();
    history.pushState(null, '', u.pathname + u.hash);
    route();
  }, true);

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
      navigator.serviceWorker.register(Seo.cfg.path ? Seo.cfg.base + 'service-worker.js' : 'service-worker.js').catch(function (e) {
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

  window.addEventListener(Seo.cfg.path ? 'popstate' : 'hashchange', route);

  /* Footer opnieuw opbouwen in de gekozen modus (hash-links via file://, schone URL's via http). */
  document.getElementById('sitefoot').innerHTML = Views.footer();

  /* Merklink en menu wijzen naar de juiste URL's in de gekozen modus. */
  document.querySelectorAll('.brand, [data-route="dash"]').forEach(function (a) { a.setAttribute('href', Seo.path('dash')); });
  document.querySelectorAll('[data-route="naslag"]').forEach(function (a) { a.setAttribute('href', Seo.path('naslag')); });

  if (!window.CURSUS || !CURSUS.modules.length) {
    app.innerHTML = '<div class="callout gevaar"><h4>Geen inhoud geladen</h4>' +
      '<p>De contentbestanden zijn niet gevonden. Controleer of de map <code>content</code> ' +
      'naast <code>index.html</code> staat.</p></div>';
  } else {
    document.documentElement.dataset.theme = Store.thema();
    route();
  }
})();
