/* ==========================================================================
   content/kennis/sigenergy/mysigen-app.js - mySigen-app en Sigen Cloud
   Samenvatting in eigen woorden. Paginanummers verwijzen naar de positie in
   de pdf (1 = eerste pagina), niet naar het gedrukte paginanummer.
   ========================================================================== */

KENNIS.addProduct({
  id: 'sigenergy-mysigen-app',
  merk: 'sigenergy',
  slug: 'mysigen-app',
  naam: 'mySigen-app en Sigen Cloud',
  rol: 'app',
  toepassingen: ['thuisbatterij', 'laadpaal'],
  korteOmschrijving: 'De mySigen-app laat de eigenaar de energiestroom van zijn huis in realtime zien en bevat een AI-modus voor slimme planning. Sigen Cloud is het platform voor installateurs voor bewaking, alarmen, parameters op afstand en het beheer van klanten en collega\'s.',

  varianten: null,

  documenten: [
    { id: 'br', titel: 'Brochure - Thuis Energieoplossing', soort: 'Brochure', paginas: 23 },
    { id: 'fl', titel: 'Sigenergy mySigen App flyer', soort: 'Flyer', paginas: 2 },
    { id: 'ig3f', titel: 'Installatiegids voor SigenStor Home - Driefasensysteem A1_NL', soort: 'Installatiegids', paginas: 44 },
    { id: 'gh3f', titel: 'Gebruikershandleiding voor SigenStor Home - Driefasensysteem A1_NL', soort: 'Gebruikershandleiding', paginas: 37 },
    { id: 'igtp2', titel: 'Installatiegids voor Sigen Hybrid (3.0-12.0) TP2-serie_NL', soort: 'Installatiegids', paginas: 20 },
    { id: 'evac', titel: 'Installatiegids voor Sigen EV AC Charger_NL', soort: 'Installatiegids', paginas: 22 },
    { id: 'ghdc', titel: 'Gebruikershandleiding voor Sigen EV DC Charging Module_NL', soort: 'Gebruikershandleiding', paginas: 34 },
    { id: 'igdc', titel: 'Installatiegids voor Sigen EV DC Charging Module_NL', soort: 'Installatiegids', paginas: 41 },
    { id: 'alarm', titel: 'Lijst van alarmeringen_NL (bij de Sigen Hybrid TP2-serie)', soort: 'Alarmlijst', paginas: 23 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `Sigenergy heeft twee digitale onderdelen die je in de handleidingen steeds door elkaar ziet:

- De **mySigen-app** voor Android en iOS. De eigenaar gebruikt hem om zijn systeem te volgen en te bedienen, en de installateur gebruikt hem om een nieuw systeem aan te maken.
- **Sigen Cloud**, in de brochure omschreven als een platform voor het beheer van de levenscyclus van apparaten en voor zakelijke beslissingen. Dat is vooral het gereedschap voor installateurs en hun bedrijf.

Beide werken met gegevens die het systeem via internet naar Sigenergy stuurt. De omvormer heeft dus een verbinding nodig: netwerkkabel (**FE**), wifi (**WLAN**) of 4G via de Sigen CommMod. FE en WLAN worden aanbevolen. De app werkt op **Android 6.0 of hoger** en **iOS 12.0 of hoger**.

!!! kern Waarom een elektricien dit moet kennen
Een nieuw systeem is pas klaar als je het in de app hebt aangemaakt. Zonder die stap kan de eigenaar niets zien en de installateur niets op afstand doen. En veel storingsmeldingen verwijzen je naar de app.
!!!

De gidsen verwijzen naar drie aparte app-handleidingen: de "mySigen App Creating New Systems Guide", de "mySigen APP Installer Manual" en de "mySigen App User Manual". Die zitten niet in dit overzicht. Wat hier staat komt uit de brochure, de flyer en losse hoofdstukken van de gidsen.`
    },
    {
      id: 'voor-de-gebruiker',
      kop: 'Voor de eindgebruiker',
      tekst: `### Zien wat er gebeurt

Op het startscherm volgt de gebruiker de energiestroom in realtime. De gegevens worden elke 10 seconden ververst. Het **Sankey-diagram** toont de stromen als banden waarvan de dikte de hoeveelheid aangeeft. Zo zie je op systeemniveau waar elke watt vandaan komt en naartoe gaat. Op laadniveau zie je welke bron achter een verbruiker zit, bijvoorbeeld de wasdroger, de boiler, de oven, de warmtepomp of de airco: zonne-energie, het net of de batterij. Een aparte weergave toont de samenstelling van de energie in de batterij.

### De AI-modus

De **Sigen AI-modus** maakt een planningsstrategie die rekening houdt met het weer, de PV-voorspelling, het verbruikspatroon en het **dynamisch tarief** (een stroomprijs die per uur verschilt) van de komende 24 uur. De flyer toont prijs en laadtoestand van de accu (SOC, *state of charge*) voor de komende 24 uur naast een terugblik op de afgelopen 24 uur, met uitleg van de strategie in gewone taal. De brochure noemt ook een **Sigen AI-assistent** die op GPT werkt en vragen beantwoordt. Wat de AI precies beslist en met welke regels, staat niet in deze documenten.

### Instellen en bedienen

- **Werkmodi:** de gebruikershandleiding beschrijft onder andere de modus voor eigenverbruik en de tijdgestuurde modus. Bij de tijdgestuurde modus stel je zelf in de app de laad- en ontlaadperiodes in.
- **Reserve back-up:** heeft het systeem een Gateway, dan stel je in de app een SOC in waaronder de accu niet verder ontlaadt zolang het net er is. Bij netuitval is die reserve beschikbaar als noodstroom.
- **Planning:** de flyer noemt het plannen van verbruikers op basis van de batterij-SOC en het voorrang geven aan overtollige zonne-energie. Hoe dat in de app werkt, staat niet in de documenten.
- **Aan en uit:** in de app kan het apparaat via de knop Instellingen worden in- of uitgeschakeld.
- **Slim huis:** volgens de flyer kun je Shelly-apparaten (een merk voor slimme huisapparatuur) via Bluetooth toevoegen.

De flyer noemt verder een ontwikkelaarsportaal met API's en een **VPP-sandbox** (VPP: *virtual power plant*, veel kleine systemen samen aangestuurd), plus een leercentrum en hulpvideo's op YouTube.`
    },
    {
      id: 'voor-de-installateur',
      kop: 'Voor de installateur (Sigen Cloud)',
      tekst: `De brochure beschrijft Sigen Cloud met zeven onderdelen: bedrijfsvoering, efficiënt onderhoud, systeembewaking, apparaatbewaking, klantendienst, organisatiebeheer en services met toegevoegde waarde. Welke functie onder welk onderdeel valt, is in de tekst van de brochure niet altijd af te lezen. De functies zelf zijn duidelijk:

### Bewaken

- Realtime systeemgegevens met een interval van 10 seconden en energiegrafieken per systeem.
- Systeemrapporten om te zoeken en te downloaden.
- Bedrijfsstatus op **celniveau**, over meerdere lagen van de batterij.
- Beheer van Sigen-apparaten en van apparaten van derden, ingedeeld per categorie.

### Beheren en onderhouden

- **Alarmbeheer:** alarmen van de systemen die je beheert.
- **Parameters op afstand** controleren en instellen, ook in batch voor meerdere systemen. Een commando dat niet lukt wordt automatisch opnieuw geprobeerd.
- Opzoeken van de **garantieperiode** van een apparaat.
- Beheer van systeemeigendom en van groepen systemen, en beheer op basis van systeemstatus.

### Het bedrijf zelf

- **Ledenbeheer** binnen de organisatie, bedrijfsinformatie en hiërarchisch beheer van een installateursbedrijf.
- Een interactief dashboard (BI, *business intelligence*) en een dashboard met installatiepunten.
- Een centrum om **punten** in te wisselen. De brochure legt niet uit hoe je die verdient.
- Integratie van een **VPP van derden** en een open **northbound-integratie** (een koppeling waarmee andere software gegevens kan ophalen). Details staan niet in de brochure.

### Storing melden

De alarmlijst verwijst bij bijna elke storing naar de app: dien op de pagina **Support en dan troubleshooting** een storingsrapport in als het advies niet helpt.

!!! info Wat de bronnen niet geven
Er staat geen inlogadres, geen beschrijving van schermen en geen lijst van rechten per gebruikersrol in Sigen Cloud. Alleen de brochurepagina met de functies is beschikbaar.
!!!`
    },
    {
      id: 'inbedrijfstelling-met-de-app',
      kop: 'Inbedrijfstelling met de app',
      tekst: `De installatiegidsen van SigenStor Home, de Hybrid-serie, de laadpaal en de DC-lader hebben elk een kort hoofdstuk over het aanmaken van een nieuw systeem. De volgorde is overal ongeveer gelijk:

1. **Account voor de installateur.** Ga naar de website van Sigenergy, kies Partner en dan Nu registreren, en maak je account aan.
2. **App installeren.** Download de mySigen-app en start daarmee het aanmaken van een nieuw systeem voor het apparaat.
3. **Apparaat aanzetten en indicator controleren.** Bij de laadpaal geldt: zodra de indicator groen wordt (constant of knipperend), maak je het nieuwe systeem aan in de app. Bij de omvormer laat een led zien of de verbinding er is: uit is niet verbonden, knipperen is verbonden met de lokale app, constant aan is verbonden via FE of WLAN of via 4G. Knipperen kan ook betekenen dat er onvoldoende 4G-verkeer is voor de CommMod.
4. **Nieuw systeem aanmaken.** Scan het SN-label op het meegeleverde papierwerk of, als dat kwijt is, op de zijkant van de omvormer. Volg de aanwijzingen op het scherm of de "mySigen App Creating New Systems Guide".
5. **Eigenaar laten activeren.** Zeg de eigenaar dat hij binnen 24 uur de e-mail van "sigencloud" moet openen en zijn account moet activeren. De gebruikershandleiding van de DC-lader beschrijft dit vanuit de eigenaar: hij krijgt de e-mail, stelt zijn eerste wachtwoord in, activeert het account en meldt zich aan in de app.

### Andere apparaten toevoegen

Een **Sigen EV DC Charging Module** die aan een bestaande installatie wordt toegevoegd, wordt volgens de installatiegids automatisch herkend en toegevoegd, zonder handmatige stappen.

### Daarna nog in de app instellen

- De **planning** voor de droge contacten van de omvormer, en het opnieuw activeren van de planningsparameters. De gids neemt RCR als voorbeeld.
- De parameters van de **NS-beveiliging** (netbeveiliging, de gids legt dit begrip niet uit).
- Werkmodus en reserve-SOC, zoals in de vorige sectie.
- Licentie voor het uitbreiden van de DC-lader van 12 naar 25 kW. De gids verwijst voor koop en activatie naar de "mySigen APP Installer Manual" en de "mySigen App User Manual".

!!! kern Wat de gidsen niet uitleggen
De schermen en foutmeldingen bij het aanmaken van een systeem staan niet in de gidsen zelf. Ze verwijzen naar de app-handleidingen. Haal die op bij Sigenergy voordat je het voor een klant doet.
!!!`
    }
  ],

  handleidingRefs: [
    { doc: 'br', hoofdstuk: 'mySigen-app (Weet waar elke watt vandaan komt en waar deze naartoe gaat)', paginas: '20', onderwerp: 'Realtime bewaking, Sigen AI-modus en het energie Sankey-diagram' },
    { doc: 'br', hoofdstuk: 'Visualiseer elke energiestraal', paginas: '5', onderwerp: 'AI-modus en de Sigen AI-assistent (GPT) in de mySigen-app' },
    { doc: 'br', hoofdstuk: 'Sigen Cloud', paginas: '21', onderwerp: 'Platform voor installateurs: bewaking, alarmbeheer, parameters op afstand, organisatiebeheer' },
    { doc: 'br', hoofdstuk: 'Sigenergy-thuisenergieoplossingen (overzicht: App en cloud)', paginas: '4', onderwerp: 'Waar app en cloud in het aanbod passen' },
    { doc: 'fl', hoofdstuk: 'mySigen-app: Alles binnen handbereik / Slimme energie, slimmere besparingen', paginas: '1-2', onderwerp: 'Ontwikkelaarsportaal, AI-modus, Shelly, Sankey, planning en Sigen Mall' },
    { doc: 'ig3f', hoofdstuk: '9 Download en zet een nieuw systeem voor de mySigen-app op', paginas: '41-42', onderwerp: 'Account aanmaken, app downloaden, systeem aanmaken en de e-mail van sigencloud' },
    { doc: 'ig3f', hoofdstuk: '5.5.3 Netplanning en 5.5.4 NS-bescherming Signaalkabelverbinding', paginas: '32-34', onderwerp: 'Planning en NS-beveiliging na het aanmaken van het systeem in de app instellen' },
    { doc: 'ig3f', hoofdstuk: '1.1 Inleiding netwerken', paginas: '2-5', onderwerp: 'Communicatie via FE, WLAN of 4G en ondersteunde Android- en iOS-versies' },
    { doc: 'igtp2', hoofdstuk: '8 Downloaden en opstarten van de mySigen-app', paginas: '18-19', onderwerp: 'Led-status van de verbinding en het aanmaken van een nieuw systeem' },
    { doc: 'gh3f', hoofdstuk: '5.1 Werkmodus, 5.3 mySigen-app zoekopdracht en 6.2 Aanzetten/uitschakelen van apparatuur', paginas: '25-32', onderwerp: 'Werkmodi, reserve back-up en het in- en uitschakelen via de app' },
    { doc: 'evac', hoofdstuk: '6 Aanmaken en inschakelen nieuw systeem', paginas: '20-21', onderwerp: 'Systeem aanmaken in de app zodra de indicator van de laadpaal groen is' },
    { doc: 'ghdc', hoofdstuk: '5.2 mySigen App downloaden en aanmelden en 5.5 Andere instellingen van mySigen App', paginas: '20 en 32', onderwerp: 'Aanmelden, account activeren en verwijzing naar de App User Manual' },
    { doc: 'igdc', hoofdstuk: '7 Een nieuw systeem creëren', paginas: '36-37', onderwerp: 'Nieuw systeem, en de DC-lader automatisch toevoegen aan een bestaande installatie' },
    { doc: 'alarm', hoofdstuk: 'Lijst van alarmeringen', paginas: '2-23', onderwerp: 'Storingsrapport indienen via Support en troubleshooting in de app' }
  ],

  cursusLinks: ['m10l01', 'm10l03', 'm10l04'],
  zieOok: ['sigenergy-power-sensor', 'sigenergy-sigenstor-home', 'sigenergy-hybrid-omvormer', 'sigenergy-ev-ac-lader', 'sigenergy-ev-dc-module']
});
