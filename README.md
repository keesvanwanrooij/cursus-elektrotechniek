# ⚡ Cursus Elektrotechniek: gratis online cursus voor beginners

[![Sponsor](https://img.shields.io/badge/sponsor-%E2%9D%A4-db61a2?style=flat-square&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/keesvanwanrooij)
[![License: GPL v3](https://img.shields.io/badge/licentie-GPL%20v3-blue?style=flat-square&logo=gnu&logoColor=white)](LICENSE)
[![PWA](https://img.shields.io/badge/installeerbaar-PWA-8a2be2?style=flat-square)](https://keesvanwanrooij.github.io/cursus-elektrotechniek/)

**Een gratis online basiscursus elektrotechniek voor beginners, in het Nederlands.**
Zelfstudie in je eigen tempo voor aankomend elektriciens, zij-instromers en
doe-het-zelvers die het vak serieus willen begrijpen, of iedereen die
nieuwsgierig is naar hoe de eigen meterkast werkt.

**[→ Start de gratis cursus elektrotechniek](https://keesvanwanrooij.github.io/cursus-elektrotechniek/)**

Geen account, geen betaalmuur, geen tracking. Werkt in de browser en is
offline te installeren als app op telefoon en laptop.

Direct naar: [veilig werken en NEN 3140](https://keesvanwanrooij.github.io/cursus-elektrotechniek/module/veiligheid-en-nen-3140/) ·
[grondbeginselen elektriciteit](https://keesvanwanrooij.github.io/cursus-elektrotechniek/module/grondbeginselen-elektriciteit/) ·
[de groepenkast](https://keesvanwanrooij.github.io/cursus-elektrotechniek/module/groepenkast-ontwerp-en-montage/) ·
[meten en testen](https://keesvanwanrooij.github.io/cursus-elektrotechniek/module/meten-testen-en-verifieren/) ·
[naslag met formules en tabellen](https://keesvanwanrooij.github.io/cursus-elektrotechniek/naslag/)

---

## Wat je leert

Een gecombineerde leerlijn van 12 modules en 62 lessen, opgebouwd van
absolute basis tot praktijkklaar: van "waarom is 230 V dodelijk" tot het
zelfstandig ontwerpen van een groepenkast en het systematisch oplossen van
storingen.

**Deel I, het fundament, in volgorde:**

1. Veiligheid & NEN 3140
2. Grondbeginselen elektriciteit
3. De Nederlandse woninginstallatie
4. Kabel, draad en verbindingen
5. Schakelingen en aansluitpunten
6. Groepenkast: ontwerp en montage
7. Meten, testen en verifiëren
8. Storingzoeken en oplevering

**Deel II, specialisaties, naar interesse:**

9. Warmtepomp, airco en cv-ketel
10. Zonnepanelen en laadpalen
11. Domotica en slimme installaties
12. Gereedschap, kwaliteit en ondernemen

Elke les heeft een concreet leerdoel, uitleg met normverwijzingen en
rekenvoorbeelden, ingesloten video's in het Nederlands en Engels, en een
checklist om te toetsen of de stof beklijft. Er is een aparte **naslagsectie**
met formules, tabellen en spiekbriefjes, bedoeld om op je telefoon open te
hebben op de werkvloer.

### Kennisbank: toepassingen, merken en producten

Naast de cursus is er een kennisbank die uitlegt hoe een installatie in elkaar zit en
welke producten daarbij horen. Begin bij een [toepassing](https://keesvanwanrooij.github.io/cursus-elektrotechniek/toepassingen/)
(thuisbatterij, laadpaal), of bij een [merk](https://keesvanwanrooij.github.io/cursus-elektrotechniek/merken/)
(nu Sigenergy) met per product een uitleg in gewone taal en verwijzingen naar het
juiste hoofdstuk en de juiste pagina in de originele handleiding. De handleidingen
zelf staan hier niet: de kennisbank is een wegwijzer, de fabrikant blijft de bron.

## Hoe het werkt

- **In de browser:** open de link hierboven, of dubbelklik lokaal op
  `index.html`. Geen installatie, geen server nodig.
- **Als app:** op Android verschijnt bij een bezoek een installatieknop.
  Eenmaal geïnstalleerd werkt de tekst en navigatie ook zonder internet;
  alleen video's hebben een verbinding nodig.
- **Voortgang** wordt automatisch bijgehouden in je browser, met een
  export- en importknop als back-up naar een JSON-bestand.
- **Licht en donker thema**, om te wisselen bovenin.

## Zelf hosten of aanpassen

De hele cursus is één statische site: vanilla HTML, CSS en JavaScript, geen
dependencies en geen build-stap nodig om te draaien. Clone de repo en open `index.html`, of fork
hem en pas de lesinhoud aan in `content/`. Zie de codecommentaar en
bestandsopbouw voor de details. Verspreid je een aangepaste versie, dan geldt
de copyleft-verplichting uit de licentiesectie hieronder.

```bash
git clone https://github.com/keesvanwanrooij/cursus-elektrotechniek.git
```

De site is voorgerenderd voor zoekmachines: elke les en module heeft een eigen
schone URL met echte HTML. Na een wijziging in `content/`, `js/views.js` of
`js/seo.js` bouw je die pagina's opnieuw (Node.js nodig, geen dependencies):

```bash
node tools/build-seo.js
```

Draai je de cursus op een eigen domein, gebruik dan
`node tools/build-seo.js --site=https://jouwdomein.nl --base=/`.

## Belangrijk

Deze cursus is zelfstudie en levert **geen erkend diploma en geen
NEN 3140-aanwijzing**. Voor zelfstandig werken aan elektrische installaties
is in Nederland doorgaans een VOP- of VP-aanwijzing van een werkgever nodig.
Gebruik deze cursus om te begrijpen wat je doet, niet als vervanging van een
echte opleiding of een ervaren elektricien naast je.

## Licentie

Vrijgegeven onder de [GNU General Public License v3.0](LICENSE).

Iedereen, ook bedrijven, mag deze code en cursus gebruiken, kopiëren en
aanpassen. De voorwaarde is copyleft: verspreid je een versie (aangepast of
niet, ook als onderdeel van een groter product), dan moet die verspreide
versie **ook onder de GPLv3 staan**, met de broncode erbij. Dat maakt
gesloten, commerciële toe-eigening zonder de broncode terug te geven
onmogelijk.

Zelf gebruiken, leren, of intern aanpassen mag altijd, zonder enige
verplichting.

---

<div align="center">

### 💛 Steun dit project

Deze cursus is gratis en blijft dat. Vond je hem nuttig?

[![Sponsor mij op GitHub](https://img.shields.io/badge/Sponsor_mij_op_GitHub-%E2%9D%A4-db61a2?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/keesvanwanrooij)

Elke bijdrage gaat rechtstreeks naar tijd voor meer gratis modules en cursussen.

</div>
