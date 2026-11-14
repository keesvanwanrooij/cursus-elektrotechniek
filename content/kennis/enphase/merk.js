/* ==========================================================================
   content/kennis/enphase/merk.js - merkpagina Enphase
   Samenvatting in eigen woorden van de Enphase-documenten in de kennisbank,
   aangevuld met de website enphase.com/nl-nl (geraadpleegd oktober 2026) voor
   producten zonder handleiding. Paginanummers = positie in de pdf.
   ========================================================================== */

KENNIS.addMerk({
  id: 'enphase',
  slug: 'enphase',
  naam: 'Enphase',
  herkomst: 'Verenigde Staten (Fremont, Californie)',
  website: 'https://enphase.com/nl-nl',
  intro: 'Enphase maakt zonne-energiesystemen waarin elk zonnepaneel een eigen micro-omvormer heeft. Daarbij horen thuisbatterijen, een systeemcontroller voor noodstroom, laadpalen en apps, allemaal aan de wisselstroomkant. Hier zie je wat elk onderdeel doet, waar het anders is dan Sigenergy en welke handleiding je nodig hebt.',

  secties: [
    {
      id: 'over-het-merk',
      kop: 'Over Enphase',
      tekst: `Enphase Energy is een Amerikaans bedrijf. Op de gegevensbladen staat Enphase Energy Inc. in Fremont (Californie) als fabrikant en Enphase Energy NL B.V. in 's-Hertogenbosch als importeur voor Europa. Batterij en System Controller zijn volgens de documenten in China gemonteerd.

Het merk is begonnen met **micro-omvormers**: kleine omvormers die onder elk zonnepaneel hangen. Daaromheen is het **Enphase Energy System** gegroeid: micro-omvormers, de IQ Gateway als brein, IQ Batteries, de IQ System Controller voor noodstroom, laadpalen en de Enphase App.

Dit zie je in alle documenten terug.

- Alleen door Enphase gecertificeerde of gekwalificeerde installateurs mogen installeren en storingen zoeken. Zonder de trainingen van Enphase University blokkeert de Installer App de inbedrijfstelling van een systeem met System Controller (TEB-00349 pagina 9). Ook de troubleshootinggids (pagina 4) eist certificering.
- Internet hoort erbij. Batterij en System Controller zijn bedoeld voor een systeem met internet. Zonder verbinding kan de garantie in gevaar komen. Wi-Fi of Ethernet is de hoofdverbinding, een mobiel modem alleen reserve.
- Alles gaat via de apps. De installateur stelt in bedrijf met de Enphase Installer App en bewaakt via het Enphase Installer Portal. De klant gebruikt de Enphase App.

!!! kern Website en gegevensblad zijn om te verkopen
Die laten zien wat het merk kan. Maar wat in jouw situatie mag en past, staat in de installatiegids van het onderdeel dat je plaatst en in de technische instructies (TEB).
!!!`
    },
    {
      id: 'productoverzicht',
      kop: 'Globaal productoverzicht',
      tekst: `Al die IQ-namen lopen snel door elkaar. Hieronder staan de families op een rij, met waar ze in verschillen. Komt iets alleen van de website, dan staat dat erbij.

### Micro-omvormers (rol: omvormer)

| Familie | Wat het is | Verschil |
|---|---|---|
| **M Series** | Oudere generatie micro-omvormers | Werkt niet op dezelfde gateway als de IQ Battery 5P. Bij een System Controller houd je de oude gateway en behandel je de M Series als vreemde omvormer (TEB-00366) |
| **IQ7** | Vorige IQ-generatie, onder meer IQ7, IQ7A, IQ7+ en IQ7X (bestelcodes in planningsgids pagina 17) | Werkt met IQ Battery 5P en System Controller. IQ7 en IQ8 niet samen op een gateway. Off-grid mag PV maximaal 150 % van het batterijvermogen per fase zijn, anders is PV-afschakeling nodig |
| **IQ8** | Huidige generatie, onder meer IQ8MC, IQ8AC en IQ8HC (330, 366 en 384 W volgens het gegevensblad) | Werkt met IQ Battery 5P en System Controller, ook in back-up. Off-grid tot 200 % PV ten opzichte van het batterijvermogen per fase zonder PV-afschakeling (TEB-00366) |
| **IQ9 (IQ9N)** | Nieuwste generatie, IQ9N-A-INT met 427 VA (gegevensblad) | Volgens de website gebouwd met galliumnitride (GaN), dus koeler en efficienter. Volgens het gegevensblad compatibel met bestaande IQ7- en IQ8-systemen |

### Batterijen (rol: batterij)

| Familie | Wat het is | Verschil |
|---|---|---|
| **AC Battery** | Eerste generatie | Communiceert via powerline of Zigbee en is daarom niet te combineren met de 5P with FlexPhase (planningsgids pagina 4) |
| **IQ Battery 3T en 10T** | Tweede generatie. Volgens de website "het meest betaalbare energiesysteem" | Zelfde communicatieprobleem: niet samen met de 5P with FlexPhase. Capaciteit en vermogen staan niet in de documenten in de kennisbank |
| **IQ Battery 5P** (IQBATTERY-5P-1P-INT) | 5,0 kWh met zes micro-omvormers, alleen eenfasig | Volgens de website "het krachtigste energiesysteem". Een per 20 A-groep (veiligheidsinstructies) |
| **IQ Battery 5P with FlexPhase** (IQBATTERY-5P-3P-INT) | 5,0 kWh met zes IQ8T-BAT, 1-fase of 3-fase met een jumperblok | Bedrade besturing (CTRL). Volgens de website nu met PowerMatch, zodat alleen de micro-omvormers aangaan die nodig zijn |
| **IQ Battery G5** | Genoemd als nieuwe generatie | Niet gevonden op enphase.com/nl-nl en niet in de documenten van de kennisbank. Check eerst of hij in Nederland verkocht wordt |

### Schakelen, meten en communiceren (rol: gateway en sensor)

| Product | Wat het is | Verschil |
|---|---|---|
| **IQ Gateway** (Standard en Metered) | Het brein. Praat via de stroomkabels (PLC) met de micro-omvormers, bedraad met de batterijen en via internet met de cloud | Metered heeft aansluitingen voor CT-meters. Een standalone Gateway Metered bewaakt tot 300 micro-omvormers (planningsgids pagina 5) |
| **Stroomtransformatoren (CT's)** | Meten productie en verbruik | CT-100-SPLIT-ROW tot 16 mm2, CT-100-SPLIT tot 50 mm2, CT-400-SPLIT-INT tot 150 mm2 kabel. Driefasig zijn vier extra CT's nodig |
| **IQ Relay** (1P en 3P) | Netbeveiliging en scheidingsinrichting voor netgekoppelde systemen | Niet in alle landen verplicht. In de System Controller zit deze functie al |
| **Communications Kit 2 INT** | Laat een losse IQ Gateway Metered via USB met de IQ Battery 5P praten over de CTRL-kabel | Alleen nodig zonder IQ Combiner of System Controller |
| **IQ Combiner 2 EU 3P** | Voorbedrade kast met IQ Gateway Metered, twee IQ Relays, Communications Kit 2, automaten en aardlekschakelaar | Netgekoppeld systeem in een kast. Geen noodstroom |
| **IQ System Controller 3 INT** | Kast met omschakelaar, ingebouwde gateway, CT's en relaisfunctie, tot 80 A | Het enige onderdeel voor noodstroom en eilandbedrijf. Met System Shutdown Switch en mobiel modem |
| **IQ Energy Router (en Router+)** | Volgens de website: koppelt laadpalen (ABL, Alfen, go-e, Keba, Wallbox) en warmtepompen (onder meer SG Ready) aan het systeem | Router: tot twee laders. Router+: ook een warmtepomp of elektrische boiler. Geen handleiding in de kennisbank |

### Laden (rol: lader)

| Product | Wat het is | Verschil |
|---|---|---|
| **IQ EV Charger 2** | AC-laadpaal, 1- of 3-fase, 6 tot 32 A, Type 2-stopcontact of vaste kabel | Gewoon AC-laden, slim gestuurd op zon, verbruik en tarief. Zie de eigen pagina |
| **IQ Bidirectional EV Charger** | DC-lader die ook kan terugleveren, CCS-stekker, tot 11 kW driefasig of 7,4 kW eenfasig (voorlopig gegevensblad DSH-00921) | Laden en ontladen naar huis (V2H) en net (V2G). Met een System Controller kan de auto een spanningsloos huis opstarten (Dark Start). Specificaties en modi kunnen per land verschillen |

### Software (rol: app)

| Product | Voor wie | Waarvoor |
|---|---|---|
| **Enphase App** | Bewoner | Bewaken, reservecapaciteit en profielen kiezen, laden vanaf het net plannen, back-upgeschiedenis. Ook in de browser via enlighten.enphaseenergy.com |
| **Enphase Installer App** | Installateur op locatie | Inbedrijfstelling: verbinden met de gateway (AP-modus), netprofiel, faseconfiguratie, vermogensklasse van de batterij, hulpcontacten, metercontrole |
| **Enphase Installer Portal** | Installateur op afstand | Alle systemen bewaken, grafieken en meldingen, CT-polariteit omdraaien, productie uitzetten, gateway herstarten, vervanging aanvragen |

Producten met een eigen pagina staan hieronder bij Producten, de rest onder Andere producten.`
    },
    {
      id: 'architectuur',
      kop: 'Hoe de onderdelen samenwerken',
      tekst: `### Alles AC-gekoppeld

Enphase zet gelijkspanning **zo dicht mogelijk bij de bron** om.

- Onder **elk zonnepaneel** zit een micro-omvormer. Van het dak komt dus al 230 V wisselspanning, via de IQ Cable, op een gewone groep met automaat. De planningsgids noemt meestal 20 A B-kar. voor de 2,5 mm2 IQ Cable, met niet meer dan 16 A aan micro-omvormers per groep.
- In **elke batterij** zitten zes micro-omvormers, dus ook de batterij hangt op een AC-groep.
- **Gateway** en **CT's** meten wat er gebeurt en sturen alles aan.

De gelijkspanning blijft op het stukje kabel tussen paneel en micro-omvormer (18 tot 60 V volgens de gegevensbladen van IQ8 en IQ9N), dus er loopt geen DC-string met hoge spanning naar binnen.

### Drie opbouwen

1. **Alleen zon**: micro-omvormers en een IQ Gateway.
2. **Zon met batterij, netgekoppeld**: daar komen IQ Battery 5P, Communications Kit 2 en IQ Relay bij, of alles in een IQ Combiner 2. Valt het net uit, dan valt alles uit.
3. **Zon met batterij en back-up**: de IQ System Controller 3 INT neemt de rol van gateway, relais en CT's over en schakelt bij netuitval om naar eilandbedrijf.

Een bestaand systeem met een **stringomvormer van een ander merk** kun je uitbreiden met een IQ Battery: netgekoppeld via de gateway, met back-up via een contactor op de System Controller (TEB-00366).

### Twee manieren van praten

De **micro-omvormers** praten met de gateway over de stroomkabels zelf (powerline, PLC). Storing op het net van bijvoorbeeld dimmers of stekkerdozen kan dat verstoren (troubleshootinggids pagina 13 tot 17).

De **IQ Battery 5P** praat via een eigen **bedrade besturingskabel** (CTRL-bus) met afsluitweerstanden aan de uiteinden. Oudere batterijen gebruikten PLC of Zigbee en zijn daarom niet te combineren.`
    },
    {
      id: 'anders-dan-sigenergy',
      kop: 'Waar Enphase anders werkt dan Sigenergy',
      tekst: `| Onderwerp | Sigenergy | Enphase |
|---|---|---|
| Koppeling | **DC-gekoppeld**: PV en batterij aan een gezamenlijke DC-bus in een hybride omvormer | **AC-gekoppeld**: elk paneel en elke batterij heeft eigen micro-omvormers |
| Omvormer | Een centrale omvormer (Energy Controller of Hybrid) | Tientallen micro-omvormers, een per paneel, plus zes in elke batterij |
| DC op het dak | Strings van honderden volts naar de omvormer | Alleen lage DC per paneel (tot 60 V) |
| Batterij uitbreiden | Modules achter een controller | Nog een complete batterijkast op een AC-groep |
| Brein | De omvormer met EMS | De IQ Gateway (los of in de System Controller) |
| Noodstroom | Sigen Gateway | IQ System Controller 3 INT |
| Noodschakelaar | Niet als vast onderdeel beschreven | System Shutdown Switch buiten, verplicht bij de System Controller |
| Storingen | Uitgebreide foutcodelijst | Vooral LED-kleuren, app-meldingen en Enphase Support |
| Bestaande PV van een ander merk | Niet beschreven in de Sigenergy-documenten | Uitdrukkelijk ondersteund via contactor en hulpcontact |

!!! info Wat dat voor jou betekent
Bij Sigenergy zoek je in een omvormer met display en foutcode. Bij Enphase zit de kennis in de gateway en de apps, dus zonder telefoon met Installer App en Enphase-account kom je niet ver. Bij een defect vervang je vaak een micro-omvormer of printplaat en niet een hele omvormer.
!!!

Een uitzondering is de **IQ Bidirectional EV Charger**, die zichzelf DC-gekoppeld noemt. Het gegevensblad bedoelt daarmee dat de omzetting in de lader zit en niet in de auto, zodat de netcode op het aansluitpunt vastligt.`
    },
    {
      id: 'handleidingen',
      kop: 'Welke handleiding bij welke vraag',
      tekst: `Aan de code in het documentnummer zie je wat je in handen hebt.

| Code | Soort | Waarvoor |
|---|---|---|
| **QIG** (140-...) | Snelle of beknopte installatiegids | Montage, bedrading, inbedrijfstelling, LED's, veiligheid. Je belangrijkste document op de bouw |
| **DSH** | Gegevensblad | Specificaties, bestelcodes, compatibiliteit |
| **TEB** | Technische instructies | Ontwerp en bijzondere situaties: planningsgids (TEB-00292), beste praktijken (TEB-00349), stringomvormer en PV-afschakeling (TEB-00366) |
| **IOM** | Installatie- en bedieningshandleiding | Uitgebreide handleiding, onder meer van micro-omvormers |
| **USG** | Gebruikershandleiding | Voor de bewoner: profielen, app, LED's, wat te doen bij uitval |
| **ING** | Troubleshootinggids | Storingen zoeken met Installer App en Installer Portal |
| Checklist (141-...) | Controlelijst | Invullen en fotograferen bij de inbedrijfstelling |

### Snel zoeken

| Vraag | Document |
|---|---|
| Hoeveel batterijen per groep, welke automaat? | QIG batterij hoofdstuk 7.1, planningsgids hoofdstuk 5 |
| Hoe sluit ik de besturingskabel aan? | QIG batterij 7.7 en 7.8, QIG System Controller pagina 17 tot 19 |
| Welk bedradingsschema voor back-up? | QIG System Controller bijlage A |
| Te veel zonnepanelen voor de batterij off-grid? | TEB-00366 hoofdstuk 4, QIG System Controller pagina 22 |
| Inbedrijfstelling loopt vast? | TEB-00349 |
| Verbruik spiegelt productie, rare meetwaarden? | Troubleshootinggids hoofdstuk 4 |
| Micro-omvormers melden niet? | Troubleshootinggids hoofdstuk 3 |

Kijk even naar het versienummer op de voorkant, want de gidsen bestaan in versies. De veiligheidsinstructies van de batterij en de installatiechecklist zijn meertalig: zoek het Nederlandse deel. De gebruikershandleiding met back-up en de troubleshootinggids staan helaas alleen in het Engels in de kennisbank.`
    },
    {
      id: 'veiligheid',
      kop: 'Algemene veiligheidsregels van Enphase',
      tekst: `De veiligheidshoofdstukken van batterij, System Controller en gebruikershandleiding werken met dezelfde drie niveaus: **GEVAAR**, **WAARSCHUWING** en **OPMERKING**.

- Alleen **gekwalificeerde elektriciens** installeren, zoeken storingen en vervangen onderdelen. Niet zelf repareren of openmaken, want dan vervalt de garantie.
- Werk **niet alleen**: er moet iemand binnen gehoorsafstand zijn.
- Haal **eerst de PV-voeding eraf** en zet de DC-schakelaars van de batterijen uit, voordat je installeert of onderhoud doet.
- Met System Controller kunnen net, batterijen en zonnepanelen elk spanning leveren, dus meet **elke bron**.
- De **System Shutdown Switch** buiten koppelt samen met de PV- en batterijautomaten alle panelen en batterijen los van het huis. Daarna kan er nog ongeveer 20 V DC op de AC-draden naar PV en batterijen staan, bedoeld voor het opstarten op zonlicht.
- Bij **brand**: DC-schakelaars en automaten uit als het veilig kan, brandweer, ruimte verlaten. Blussen met poeder A, B, C, CO2 of alcoholbestendig schuim.
- Bij **overstroming**: hoog monteren, uit het water blijven en na contact met water eerst een inspectie.
- De **batterij**: elektrolyt is giftig en ontvlambaar. Opslag in slaapstand, maximaal 30 % lading en twee maanden.
- Niet als noodstroombron voor **levensondersteunende of medische apparatuur**.

!!! gevaar Wat deze documenten niet zeggen
De Enphase-documenten noemen de Nederlandse werkwijze van NEN 3140 (de vijf stappen) niet. Maar met een batterij en System Controller kan een deel van het huis onder spanning staan terwijl het net weg is. Algemene vakkennis: micro-omvormers leveren pas spanning als ze een net of eiland zien, maar in eilandbedrijf is dat eiland er juist. Pas de vijf stappen dus altijd zelf toe. Zie de lessen in module 1 en les 10.2.
!!!`
    },
    {
      id: 'storingen',
      kop: 'Storingen en meldingen',
      tekst: `De documenten in de kennisbank geven **geen foutcodelijst** zoals bij Sigenergy. Je leest storingen af aan de LED's en in de apps.

### LED's

- **IQ Battery 5P**: een LED met kleuren en knipperpatronen. Twee keer rood betekent een foutstatus en dan is Enphase Support nodig. Zie de batterijpagina.
- **IQ System Controller**: twee LED's, een voor het net en een voor de batterijen. Rood op allebei wijst vaak op een SSD die uit staat. Let op: de QIG en de gebruikershandleiding verwisselen LED 1 en LED 2.
- **IQ Gateway**: vier LED's en knoppen. De netwerk-LED is groen met internet en rood met alleen lokaal netwerk. Bij zonsopkomst en -ondergang zijn de communicatie- en productie-LED's vaak rood en 's nachts uit. Dat is gewoon normaal.

### Wat de troubleshootinggids (ING-00061) behandelt

1. **Voorbereiding**: multimeter, kruiskop, T20 Torx en de Installer App. Gatewaytype herkennen, AP-modus aanzetten en softwareversie controleren.
2. **Gateway verbinden** met Wi-Fi via Installer App of Enphase App.
3. **Powerline-ruis**: herken je aan productie 's nachts of afgeplatte grafieken. Oplossingen zijn een powerline-filter, de gateway op een andere groep, ferrietringen of een eigen groep vanaf de hoofdverdeler.
4. **Meterproblemen**: verbruik dat de productie spiegelt of negatief verbruik wijst op verkeerd geplaatste CT's of fasen. Op adressen met batterijen moet de verbruiksmeter op "Load with Solar" staan. De polariteit kun je in het Installer Portal omdraaien.
5. **Installer Portal**: grafieken, apparaten, meldingen (eventnamen zoals ACVOOR en ACFOOR), live status, productie op afstand uitzetten (de batterijen laden en ontladen dan ook niet), gateway herstarten, vervanging aanvragen.

### Altijd eerst

- Bij "not reporting" in de app wacht je 15 tot 20 minuten, want bedrade communicatie herstelt meestal vanzelf.
- Controleer de automaten in de kast.
- Pas daarna Enphase Support, met de LED-kleuren bij de hand.`
    }
  ],

  begrippen: [
    { term: 'AC-gekoppeld', uitleg: 'Batterij en zonnepanelen sluiten elk aan de wisselstroomkant aan, met eigen omvormers, in plaats van samen op een gelijkspanningsbus.' },
    { term: 'Micro-omvormer', uitleg: 'Kleine omvormer onder een zonnepaneel (of in de batterij) die gelijkspanning direct omzet in 230 V wisselspanning.' },
    { term: 'IQ Gateway', uitleg: 'Het brein van het systeem. Praat met micro-omvormers, batterijen en de cloud en meet met CT-meters.' },
    { term: 'CT', uitleg: 'Stroomtransformator: een klemmeter om een kabel die productie of verbruik meet.' },
    { term: 'PLC', uitleg: 'Powerline-communicatie: gegevens over de stroomkabels zelf, gebruikt tussen gateway en micro-omvormers.' },
    { term: 'CTRL-bus', uitleg: 'De bedrade besturingskabel tussen IQ Battery 5P en gateway of System Controller, met een afsluitweerstand op beide uiteinden.' },
    { term: 'Afvoerdraad', uitleg: 'De blanke draad bij de afscherming van de CTRL-kabel. Per kabelstuk maar aan een kant aansluiten.' },
    { term: 'FlexPhase', uitleg: 'Dezelfde batterij werkt eenfasig of driefasig, te kiezen met een jumperblok op de AC-klemmen.' },
    { term: 'Eilandbedrijf (off-grid, back-up)', uitleg: 'Het huis draait los van het net op batterij en zon, nadat de System Controller het net heeft losgekoppeld.' },
    { term: 'ATS', uitleg: 'Automatic Transfer Switch: de automatische omschakelaar tussen net en noodstroom in de System Controller.' },
    { term: 'DER', uitleg: 'Decentrale energiebron. In de System Controller zijn dat de PV- en batterijaansluitingen met hun relais.' },
    { term: 'PV-afschakeling (PV shedding)', uitleg: 'Een deel van de zonnepanelen via een contactor loskoppelen als het systeem off-grid gaat, zodat de batterij niet wordt overbelast.' },
    { term: 'SSD', uitleg: 'System Shutdown Switch: de vergrendelbare noodschakelaar buiten die PV en batterijen van het huis loskoppelt.' },
    { term: 'MOR', uitleg: 'Manual override: handmatige opheffing in de System Controller. Het huis draait dan alleen op het net.' },
    { term: 'SoC', uitleg: 'State of charge: de laadtoestand van de batterij in procenten.' },
    { term: 'Reservecapaciteit', uitleg: 'Het deel van de batterij dat de klant in de app vasthoudt voor stroomuitval.' },
    { term: 'PEL', uitleg: 'Power export limit: een grens aan wat er naar het net mag worden teruggeleverd.' },
    { term: 'AP-modus', uitleg: 'Toegangspuntmodus: de IQ Gateway zendt een eigen Wi-Fi-netwerk uit, waar je telefoon mee verbindt voor de inbedrijfstelling.' },
    { term: 'V2H en V2G', uitleg: 'Een auto die via een bidirectionele lader energie teruggeeft aan het huis (V2H) of het net (V2G).' }
  ],

  overigeProducten: [
    { naam: 'IQ7 micro-omvormers', rol: 'omvormer', omschrijving: 'Vorige generatie. Werkt met IQ Battery 5P en System Controller, maar niet samen met IQ8 op dezelfde gateway. Off-grid maximaal 150 % PV ten opzichte van het batterijvermogen per fase.' },
    { naam: 'M Series micro-omvormers', rol: 'omvormer', omschrijving: 'Oudere generatie met een eigen gateway. Bij een System Controller behandel je hem als omvormer van een ander merk, via een contactor en een PLC-filter.' },
    { naam: 'IQ Battery 3T en 10T', rol: 'batterij', omschrijving: 'Tweede batterijgeneratie, volgens de website het meest betaalbare systeem. Communiceert via PLC of Zigbee en is daarom niet te combineren met de IQ Battery 5P with FlexPhase.' },
    { naam: 'IQ Combiner 2 EU 3P', rol: 'gateway', omschrijving: 'Voorbedrade kast met IQ Gateway Metered, twee IQ Relays, Communications Kit 2, automaten en aardlekschakelaar, voor netgekoppelde systemen zonder noodstroom.' },
    { naam: 'Communications Kit 2 INT', rol: 'gateway', omschrijving: 'Koppelt een losse IQ Gateway Metered via USB aan de CTRL-bus van de IQ Battery 5P.' },
    { naam: 'IQ Relay (1P en 3P)', rol: 'gateway', omschrijving: 'Netbeveiliging en scheidingsinrichting in netgekoppelde systemen. In de System Controller zit hij al ingebouwd.' },
    { naam: 'IQ Energy Router en Router+', rol: 'gateway', omschrijving: 'Volgens de website: koppelt laadpalen van andere merken en (SG Ready) warmtepompen of een elektrische boiler aan het Enphase-systeem, zodat ze slim schakelen op tarief en zon.' },
    { naam: 'IQ Bidirectional EV Charger', rol: 'lader', omschrijving: 'Bidirectionele DC-lader met CCS-stekker, tot 11 kW driefasig, voor laden, V2H, V2G en Dark Start met een System Controller. Alleen een voorlopig Engelstalig gegevensblad in de kennisbank.' },
    { naam: 'Enphase App en Installer App', rol: 'app', omschrijving: 'De Enphase App is voor de bewoner (bewaken en profielen), de Installer App voor de inbedrijfstelling en het Installer Portal voor beheer op afstand.' }
  ]
});
