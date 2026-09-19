/* ==========================================================================
   content/index.js - cursusmetadata en modulenregister
   Modulebestanden (m01.js … m12.js) roepen CURSUS.addModule() aan.
   ========================================================================== */

window.CURSUS = {

  titel: 'Elektrotechniek - Praktijkcursus',
  ondertitel: 'Van beginner tot beginnend vakbekwaam',
  modules: [],

  addModule: function (m) {
    /* Leesbare URL-slugs (zoekwoorden in het pad). Uniek per soort, bij dubbelen komt het lesnummer erbij. */
    var self = this;
    m.slug = this.uniekeSlug('module', this.slugify(m.titel), m.nr);
    m.lessen.forEach(function (l) {
      l.slug = self.uniekeSlug('les', self.slugify(l.titel), String(l.nr).replace(/\./g, '-'));
    });
    this.modules.push(m);
    this.modules.sort(function (a, b) { return a.nr - b.nr; });
  },

  _slugs: {},

  slugify: function (t) {
    return String(t).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/['\u2019]/g, '').replace(/&/g, ' en ')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  },

  uniekeSlug: function (soort, slug, suffix) {
    var sleutel = soort + ':' + slug;
    if (this._slugs[sleutel]) slug = slug + '-' + suffix;
    this._slugs[soort + ':' + slug] = true;
    return slug;
  },

  moduleBijSlug: function (slug) {
    return this.modules.find(function (m) { return m.slug === slug; });
  },

  lesBijSlug: function (slug) {
    return this.alleLessen().find(function (x) { return x.les.slug === slug; });
  },

  /* Eén platte lijst van alle lessen, met hun module erbij. */
  alleLessen: function () {
    var uit = [];
    this.modules.forEach(function (m) {
      m.lessen.forEach(function (l) { uit.push({ module: m, les: l }); });
    });
    return uit;
  },

  module: function (id) {
    return this.modules.find(function (m) { return m.id === id; });
  },

  les: function (id) {
    return this.alleLessen().find(function (x) { return x.les.id === id; });
  },

  /* Vorige en volgende les over modulegrenzen heen. */
  buren: function (lesId) {
    var alle = this.alleLessen();
    var i = alle.findIndex(function (x) { return x.les.id === lesId; });
    return { vorige: i > 0 ? alle[i - 1] : null,
             volgende: i >= 0 && i < alle.length - 1 ? alle[i + 1] : null };
  },

  totaleStudietijd: function () {
    return this.modules.reduce(function (s, m) { return s + (m.studietijd || 0); }, 0);
  }
};
