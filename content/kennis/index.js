/* ==========================================================================
   content/kennis/index.js - kennisbank: toepassingen, merken en producten
   Drie bouwstenen die elk hun eigen bestanden hebben en elkaar via id's kennen:

   TOEPASSING  wat je wilt doen (thuisbatterij, laadpaal). Kapstok voor beginners:
               hoe werkt het, welke onderdelen (rollen) heb je nodig.
   MERK        wie maakt het (Sigenergy). Uitleg over het merk en zijn ecosysteem.
   PRODUCT     een productfamilie van een merk, met een samenvatting van de handleiding
               en verwijzingen naar hoofdstuk en pagina. Hoort bij een merk en kan
               bij meerdere toepassingen horen.

   De koppelingen worden hier afgeleid, nooit dubbel bijgehouden:
     product.merk           -> het merk
     product.toepassingen   -> de toepassingen; de toepassing toont zijn producten
                               vanzelf, gegroepeerd per rol
   Nieuw merk of product toevoegen = een bestand in content/kennis/<merk>/ en een
   script-tag in index.html. Schema onderaan dit bestand.

   Rollen (omvormer, batterij, gateway, ...) zijn de gemeenschappelijke taal tussen
   merken: zo kan een toepassing "de omvormer" uitleggen en daaronder de omvormers
   van alle merken tonen.
   ========================================================================== */

window.KENNIS = {

  toepassingen: [],
  merken: [],
  producten: [],

  /* Gemeenschappelijke rollen. Volgorde = volgorde op toepassingspagina's. */
  rollen: [
    { id: 'systeem',  naam: 'Compleet systeem',    uitleg: 'Een kant-en-klare combinatie van meerdere onderdelen onder een naam.' },
    { id: 'omvormer', naam: 'Omvormer',            uitleg: 'Zet gelijkspanning van zonnepanelen en batterij om in wisselspanning voor het huis en het net.' },
    { id: 'batterij', naam: 'Batterij',            uitleg: 'Slaat energie op. Vaak in modules met een eigen batterijcontroller.' },
    { id: 'gateway',  naam: 'Gateway',             uitleg: 'Schakelt tussen net, zon, batterij en generator en zorgt voor noodstroom en bewaking.' },
    { id: 'lader',    naam: 'Laadpaal en lader',   uitleg: 'Laadt een elektrische auto, AC of DC, met of zonder terugleveren aan het huis.' },
    { id: 'sensor',   naam: 'Meting en sensoren',  uitleg: 'Meet stroom en vermogen, zodat het systeem weet wat het huis verbruikt of teruglevert.' },
    { id: 'app',      naam: 'App en cloud',        uitleg: 'Bewaking, instellingen en beheer op afstand.' }
  ],

  addToepassing: function (t) { this.toepassingen.push(t); },
  addMerk: function (m) { this.merken.push(m); },
  addProduct: function (p) { this.producten.push(p); },

  /* ------------------------------ opzoeken ------------------------------ */

  toepassing: function (id) { return this.toepassingen.find(function (t) { return t.id === id; }); },
  toepassingBijSlug: function (s) { return this.toepassingen.find(function (t) { return t.slug === s; }); },
  merk: function (id) { return this.merken.find(function (m) { return m.id === id; }); },
  merkBijSlug: function (s) { return this.merken.find(function (m) { return m.slug === s; }); },
  product: function (id) { return this.producten.find(function (p) { return p.id === id; }); },
  productBijSlug: function (merkId, s) {
    return this.producten.find(function (p) { return p.merk === merkId && p.slug === s; });
  },
  rol: function (id) { return this.rollen.find(function (r) { return r.id === id; }); },

  /* ---------------------------- afgeleide links ---------------------------- */

  productenVanMerk: function (merkId) {
    return this.producten.filter(function (p) { return p.merk === merkId; });
  },

  productenVoorToepassing: function (toepassingId) {
    return this.producten.filter(function (p) { return (p.toepassingen || []).indexOf(toepassingId) >= 0; });
  },

  /* Producten van een toepassing, gegroepeerd per rol, in de volgorde van KENNIS.rollen. */
  groepenVoorToepassing: function (toepassingId) {
    var prods = this.productenVoorToepassing(toepassingId);
    return this.rollen.map(function (r) {
      return { rol: r, producten: prods.filter(function (p) { return p.rol === r.id; }) };
    }).filter(function (g) { return g.producten.length; });
  },

  merkenVoorToepassing: function (toepassingId) {
    var ids = {};
    this.productenVoorToepassing(toepassingId).forEach(function (p) { ids[p.merk] = true; });
    return this.merken.filter(function (m) { return ids[m.id]; });
  },

  toepassingenVanMerk: function (merkId) {
    var ids = {};
    this.productenVanMerk(merkId).forEach(function (p) { (p.toepassingen || []).forEach(function (t) { ids[t] = true; }); });
    return this.toepassingen.filter(function (t) { return ids[t.id]; });
  },

  /* Loopt over alle entiteiten; gooit een fout bij een kapotte koppeling (ook in het bouwscript). */
  controleer: function () {
    var K = this, fouten = [];
    this.producten.forEach(function (p) {
      if (!K.merk(p.merk)) fouten.push('product ' + p.id + ': onbekend merk ' + p.merk);
      if (!K.rol(p.rol)) fouten.push('product ' + p.id + ': onbekende rol ' + p.rol);
      (p.toepassingen || []).forEach(function (t) { if (!K.toepassing(t)) fouten.push('product ' + p.id + ': onbekende toepassing ' + t); });
      (p.zieOok || []).forEach(function (o) { if (!K.product(o)) fouten.push('product ' + p.id + ': onbekend zie-ook ' + o); });
      (p.cursusLinks || []).forEach(function (l) { if (!CURSUS.les(l)) fouten.push('product ' + p.id + ': onbekende les ' + l); });
      var docs = {};
      (p.documenten || []).forEach(function (d) { docs[d.id] = true; });
      (p.handleidingRefs || []).forEach(function (r) { if (!docs[r.doc]) fouten.push('product ' + p.id + ': verwijzing naar onbekend document ' + r.doc); });
    });
    this.toepassingen.forEach(function (t) {
      (t.cursusLinks || []).forEach(function (l) { if (!CURSUS.les(l)) fouten.push('toepassing ' + t.id + ': onbekende les ' + l); });
    });
    var slugs = {};
    this.producten.forEach(function (p) {
      var s = p.merk + '/' + p.slug;
      if (slugs[s]) fouten.push('dubbele productslug ' + s);
      slugs[s] = true;
    });
    return fouten;
  }
};

/* --------------------------------------------------------------------------
   Datamodel (documentatie; de bestanden in content/kennis/ volgen dit)

   KENNIS.addToepassing({
     id: 'thuisbatterij', slug: 'thuisbatterij',
     naam: 'Thuisbatterij',
     intro: 'Een of twee zinnen voor kaarten en metadata.',
     secties: [ { id: 'hoe-werkt-het', kop: 'Hoe werkt het', tekst: '...markdown...' } ],
     onderdelen: [ { rol: 'omvormer', uitleg: 'Wat deze rol in deze toepassing doet.' } ],
     cursusLinks: ['m10l01']            // lessen uit de cursus die hierbij horen
   });

   KENNIS.addMerk({
     id: 'sigenergy', slug: 'sigenergy', naam: 'Sigenergy',
     herkomst: 'Shanghai, China', website: 'https://www.sigenergy.com',
     intro: 'Een of twee zinnen.',
     secties: [ { id, kop, tekst } ],   // over het merk, ecosysteem, hoe onderdelen samenwerken
     begrippen: [ { term: 'EMS', uitleg: '...' } ],
     overigeProducten: [ { naam, rol, omschrijving } ]   // producten zonder eigen pagina
   });

   KENNIS.addProduct({
     id: 'sigenergy-gateway', merk: 'sigenergy', slug: 'gateway',
     naam: 'Sigen Gateway (Home en HomePro)',
     rol: 'gateway',
     toepassingen: ['thuisbatterij'],
     korteOmschrijving: 'Een of twee zinnen.',
     varianten: { kop: ['Model', 'Fasen', 'Vermogen'], rijen: [ ['Home SP 12K', '1', '12 kW'] ] },
     documenten: [ { id: 'ig', titel: 'Installatiegids voor Sigen Gateway HomePro SP', soort: 'Installatiegids', paginas: 20 } ],
     secties: [ { id: 'wat-is-het', kop: 'Wat is het', tekst: '...markdown...' } ],
     handleidingRefs: [ { doc: 'ig', hoofdstuk: '5 Elektrische aansluiting', paginas: '18-24', onderwerp: 'Aansluiten van net, batterij en generator' } ],
     cursusLinks: ['m03l04'],
     zieOok: ['sigenergy-hybrid']
   });
   -------------------------------------------------------------------------- */
