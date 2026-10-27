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
  intro: 'Enphase maakt zonne-energiesystemen waarin elk zonnepaneel een eigen micro-omvormer heeft, met daarbij thuisbatterijen, een systeemcontroller voor noodstroom, laadpalen en apps. Alles werkt aan de wisselstroomkant. Hier zie je welk onderdeel wat doet, hoe het verschilt van Sigenergy en in welke handleiding je moet zijn.',

  secties: [
    {
      id: 'over-het-merk',
      kop: 'Over Enphase',
      tekst: `Enphase Energy is een Amerikaans bedrijf. Op de gegevensbladen staat als fabrikant Enphase Energy Inc. in Fremont (Californie) en als importeur voor Europa Enphase Energy NL B.V. in 's-Hertogenbosch. Batterij en System Controller zijn volgens de documenten in China gemonteerd.

Het merk is begonnen met **micro-omvormers**: kleine omvormers die onder elk zonnepaneel hangen. Daaromheen is een compleet thuisenergiesysteem gegroeid, het **Enphase Energy System**: micro-omvormers, de IQ Gateway als brein, IQ Batteries, de IQ System Controller voor noodstroom, laadpalen en de Enphase App.

Wat je in alle documenten terugziet:

- **Alleen gecertificeerde installateurs.** De installatiegidsen zeggen dat alleen door Enphase gecertificeerde of gekwalificeerde installateurs mogen installeren en storingen zoeken. Zonder de trainingen van Enphase University blokkeert de Installer App de inbedrijfstelling van een systeem met System Controller (TEB-00349 pagina 9). Ook de troubleshootinggids (pagina 4) eist certificering.
- **Internet hoort erbij.** Batterij en System Controller zijn bedoeld om met internet te werken. Zonder verbinding kan de garantie in gevaar komen. Wi-Fi of Ethernet is de hoofdverbinding, een mobiel modem alleen reserve.
- **Alles via de apps.** De installateur stelt in bedrijf met de Enphase Installer App en bewaakt via het Enphase Installer Portal. De klant gebruikt de Enphase App.

!!! kern Website en gegevensblad zijn verkoopdocumenten
De website en de gegevensbladen laten zien wat het merk kan. Wat in jouw situatie mag en past, staat in de installatiegids van het onderdeel dat je plaatst en in de technische instructies (TEB).
!!!`
    },
    {
      id: 'productoverzicht',
      kop: 'Globaal productoverzicht',
      tekst: `Voor een beginner is het aanbod een woud van IQ-namen. Deze tabellen zetten de families op een rij en laten zien waar ze in verschillen. Waar iets alleen van de website komt, staat dat erbij.

### Micro-omvormers (rol: omvormer)

| Familie | Wat het is | Verschil |
|---|---|---|
| **M Series** | Oudere generatie micro-omvormers | Werkt niet op dezelfde gateway als de IQ Battery 5P. Bij een System Controller houd je de oude gateway en behandel je de M Series als vreemde omvormer (TEB-00366) |
| **IQ7** | Vorige IQ-generatie, onder meer IQ7, IQ7A, IQ7+ en IQ7X (bestelcodes in planningsgids pagina 17) | Werkt met IQ Battery 5P en System Controller. IQ7 en IQ8 niet samen op een gateway. Off-grid mag PV maximaal 150 % van het batterijvermogen per fase zijn, anders PV-afschakeling |
| **IQ8** | Huidige generatie, onder meer IQ8MC, IQ8AC en IQ8HC (330, 366 en 384 W volgens het gegevensblad) | Werkt met IQ Battery 5P en System Controller, ook in back-up. Off-grid tot 200 % PV ten opzichte van het batterijvermogen per fase zonder PV-afschakeling (TEB-00366) |
| **IQ9 (IQ9N)** | Nieuwste generatie, IQ9N-A-INT met 427 VA (gegevensblad) | Volgens de website gebouwd met galliumnitride (GaN): koeler en efficienter. Volgens het gegevensblad compatibel met bestaande IQ7- en IQ8-systemen |

### Batterijen (rol: batterij)

| Familie | Wat het is | Verschil |
|---|---|---|
| **AC Battery** | Eerste generatie | Communiceert via powerline of Zigbee; niet te combineren met de 5P with FlexPhase (planningsgids pagina 4) |
| **IQ Battery 3T en 10T** | Tweede generatie. Volgens de website "het meest betaalbare energiesysteem" | Zelfde communicatieprobleem: niet samen met de 5P with FlexPhase. Capaciteit en vermogen staan niet in de documenten in de kennisbank |
| **IQ Battery 5P** (IQBATTERY-5P-1P-INT) | 5,0 kWh met zes micro-omvormers, alleen eenfasig | Volgens de website "het krachtigste energiesysteem". Een per 20 A-groep (veiligheidsinstructies) |
| **IQ Battery 5P with FlexPhase** (IQBATTERY-5P-3P-INT) | 5,0 kWh met zes IQ8T-BAT, 1-fase of 3-fase met een jumperblok | Bedrade besturing (CTRL), volgens de website nu met PowerMatch: alleen de micro-omvormers die nodig zijn, worden ingeschakeld |
| **IQ Battery G5** | Genoemd als nieuwe generatie | Niet gevonden op enphase.com/nl-nl en niet in de documenten van de kennisbank. Controleer of hij in Nederland verkocht wordt voordat je erop rekent |

### Schakelen, meten en communiceren (rol: gateway en sensor)

| Product | Wat het is | Verschil |
|---|---|---|
| **IQ Gateway** (Standard en Metered) | Het brein: praat via de stroomkabels (PLC) met de micro-omvormers, bedraad met de batterijen en via internet met de cloud | Metered heeft aansluitingen voor CT-meters. Een standalone Gateway Metered bewaakt tot 300 micro-omvormers (planningsgids pagina 5) |
| **Stroomtransformatoren (CT's)** | Meten productie en verbruik | CT-100-SPLIT-ROW tot 16 mm2, CT-100-SPLIT tot 50 mm2, CT-400-SPLIT-INT tot 150 mm2 kabel. Driefasig zijn vier extra CT's nodig |
| **IQ Relay** (1P en 3P) | Netbeveiliging en scheidingsinrichting voor netgekoppelde systemen | Niet in alle landen verplicht. In de System Controller zit deze functie al |
| **Communications Kit 2 INT** | Laat een losse IQ Gateway Metered met de IQ Battery 5P praten over de CTRL-kabel, via USB | Alleen nodig zonder IQ Combiner of System Controller |
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

De producten met een eigen pagina in de kennisbank staan hieronder bij Producten. De rest vind je onder Andere producten.`
    },
    {
      id: 'architectuur',
      kop: 'Hoe de onderdelen samenwerken',
      tekst: `### Alles AC-gekoppeld

In een Enphase-systeem gebeurt de omzetting van gelijk- naar wisselspanning **zo dicht mogelijk bij de bron**:

- Onder **elk zonnepaneel** zit een micro-omvormer. Van het dak komt dus al 230 V wisselspanning, via de IQ Cable, op een gewone groep met automaat (de planningsgids noemt meestal 20 A B-kar. voor de 2,5 mm2 IQ Cable, met niet meer dan 16 A aan micro-omvormers per groep).
- In **elke batterij** zitten zes micro-omvormers. Ook de batterij hangt dus op een AC-groep.
- **Gateway** en **CT's** meten wat er gebeurt en sturen alles aan.

De gelijkspanning blijft beperkt tot het stukje kabel tussen paneel en micro-omvormer (18 tot 60 V volgens de gegevensbladen van IQ8 en IQ9N). Er is geen hoogspannings-DC-string naar binnen.

### Drie opbouwen

1. **Alleen zon**: micro-omvormers en een IQ Gateway.
2. **Zon met batterij, netgekoppeld**: daarbij IQ Battery 5P, Communications Kit 2 en IQ Relay, of alles in een IQ Combiner 2. Bij netuitval valt alles uit.
3. **Zon met batterij en back-up**: de IQ System Controller 3 INT neemt de rol van gateway, relais en CT's over en schakelt bij netuitval om naar eilandbedrijf.

Een bestaand systeem met een **stringomvormer van een ander merk** kun je uitbreiden met een IQ Battery: netgekoppeld via de gateway, met back-up via een contactor op de System Controller (TEB-00366).

### Twee manieren van praten

- **Micro-omvormers** praten met de gateway via de stroomkabels zelf (powerline, PLC). Storingen op het net, zoals van dimmers of stekkerdozen, kunnen die communicatie verstoren (troubleshootinggids pagina 13 tot 17).
- **IQ Battery 5P** praat via een eigen **bedrade besturingskabel** (CTRL-bus) met afsluitweerstanden aan de uiteinden. Oudere batterijen gebruikten PLC of Zigbee en zijn daarom niet te combineren.`
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
Bij Sigenergy zoek je veel in een omvormer met een display en een foutcode. Bij Enphase zit de kennis in de gateway en de apps: zonder telefoon met Installer App en een Enphase-account kom je niet ver. Een defect wordt vaak opgelost door een micro-omvormer of printplaat te vervangen, niet door een hele omvormer.
!!!

Een uitzondering: de **IQ Bidirectional EV Charger** noemt zichzelf DC-gekoppeld. Daarmee bedoelt het gegevensblad dat de omzetting in de lader zit en niet in de auto, zodat de netcode op het aansluitpunt vastligt.`
    },
    {
      id: 'handleidingen',
      kop: 'Welke handleiding bij welke vraag',
      tekst: `Enphase gebruikt vaste codes in de documentnummers. Als je die kent, weet je wat je in handen hebt.

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

De gidsen bestaan in versies. Controleer het versienummer op de voorkant; de veiligheidsinstructies van de batterij en de installatiechecklist zijn meertalig, zoek het Nederlandse deel. De gebruikershandleiding met back-up en de troubleshootinggids zijn alleen in het Engels in de kennisbank.`
    },
    {
      id: 'veiligheid',
      kop: 'Algemene veiligheidsregels van Enphase',
      tekst: `De veiligheidshoofdstukken van batterij, System Controller en gebruikershandleiding volgen dezelfde opzet met drie niveaus: **GEVAAR**, **WAARSCHUWING** en **OPMERKING**. De basisregels:

- **Alleen gekwalificeerde elektriciens** installeren, zoeken storingen en vervangen onderdelen. Niet zelf repareren of openen: dan vervalt de garantie.
- **Niet alleen werken.** Er moet iemand binnen gehoorsafstand zijn.
- **Eerst de PV-voeding eraf** en de DC-schakelaars van de batterijen uit, voordat je installeert of onderhoud doet.
- **Meerdere bronnen.** In een systeem met System Controller kunnen net, batterijen en zonnepanelen elk spanning leveren. Meet elke bron.
- **System Shutdown Switch** buiten: samen met de PV- en batterijautomaten koppelt die alle panelen en batterijen los van het huis. Daarna kan er nog ongeveer 20 V DC op de AC-draden naar PV en batterijen staan; dat is bedoeld voor het opstarten op zonlicht.
- **Brand**: DC-schakelaars en automaten uit als het veilig kan, brandweer, ruimte verlaten. Blussen met poeder A, B, C, CO2 of alcoholbestendig schuim.
- **Overstroming**: hoog monteren, uit het water blijven, na contact met water eerst inspectie.
- **Batterij**: elektrolyt is giftig en ontvlambaar; opslag in slaapstand, maximaal 30 % lading en twee maanden.
- **Niet voor levensondersteunende of medische apparatuur** als noodstroombron.

!!! gevaar Wat deze documenten niet zeggen
De Enphase-documenten noemen de Nederlandse werkwijze van NEN 3140 (de vijf stappen) niet. Met een batterij en System Controller kan een deel van het huis onder spanning staan terwijl het net weg is. Algemene vakkennis: micro-omvormers leveren pas spanning als ze een net of eiland zien, maar in eilandbedrijf is dat eiland er juist. Pas daarom altijd zelf de vijf stappen toe. Zie de lessen in module 1 en les 10.2.
!!!`
    },
    {
      id: 'storingen',
      kop: 'Storingen en meldingen',
      tekst: `Enphase geeft in de documenten van de kennisbank **geen foutcodelijst** zoals Sigenergy. Storingen lees je af aan LED's en in de apps.

### LED's

- **IQ Battery 5P**: een LED met kleuren en knipperpatronen. Rood twee keer betekent een foutstatus en Enphase Support. Zie de batterijpagina.
- **IQ System Controller**: twee LED's, een voor het net en een voor de batterijen. Rood op beide wijst vaak op een SSD die uit staat. Let op: de QIG en de gebruikershandleiding verwisselen LED 1 en LED 2.
- **IQ Gateway**: zes LED's en knoppen. De netwerk-LED is groen met internet, rood met alleen lokaal netwerk. De communicatie- en productie-LED's zijn bij zonsopkomst en -ondergang vaak rood en 's nachts uit: dat is normaal.

### Wat de troubleshootinggids (ING-00061) behandelt

1. **Voorbereiding**: multimeter, kruiskop, T20 Torx en de Installer App; gatewaytype herkennen; AP-modus aanzetten; softwareversie controleren.
2. **Gateway verbinden** met Wi-Fi via Installer App of Enphase App.
3. **Powerline-ruis**: herkenbaar aan productie 's nachts of afgeplatte grafieken. Oplossingen: een powerline-filter, de gateway op een andere groep, ferrietringen of een eigen groep vanaf de hoofdverdeler.
4. **Meterproblemen**: verbruik dat de productie spiegelt of negatief verbruik wijst op verkeerd geplaatste CT's of fasen. Op adressen met batterijen moet de verbruiksmeter op "Load with Solar" staan. De polariteit kun je in het Installer Portal omdraaien.
5. **Installer Portal**: grafieken, apparaten, meldingen (eventnamen zoals ACVOOR en ACFOOR), live status, productie op afstand uitzetten (de batterijen laden en ontladen dan ook niet), gateway herstarten, vervanging aanvragen.

### Altijd eerst

- Melding "not reporting" in de app: 15 tot 20 minuten wachten, het systeem herstelt bedrade communicatie meestal zelf.
- Automaten in de kast controleren.
- Daarna Enphase Support, met de LED-kleuren bij de hand.`
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
    { term: 'FlexPhase', uitleg: 'Dezelfde batterij werkt eenfasig of driefasig, gekozen met een jumperblok op de AC-klemmen.' },
    { term: 'Eilandbedrijf (off-grid, back-up)', uitleg: 'Het huis draait los van het net op batterij en zon, nadat de System Controller het net heeft losgekoppeld.' },
    { term: 'ATS', uitleg: 'Automatic Transfer Switch: de automatische omschakelaar tussen net en noodstroom in de System Controller.' },
    { term: 'DER', uitleg: 'Decentrale energiebron. In de System Controller de PV- en batterijaansluitingen met hun relais.' },
    { term: 'PV-afschakeling (PV shedding)', uitleg: 'Een deel van de zonnepanelen via een contactor loskoppelen als het systeem off-grid gaat, zodat de batterij niet wordt overbelast.' },
    { term: 'SSD', uitleg: 'System Shutdown Switch: de vergrendelbare noodschakelaar buiten die PV en batterijen van het huis loskoppelt.' },
    { term: 'MOR', uitleg: 'Manual override: handmatige opheffing in de System Controller, het huis draait dan alleen op het net.' },
    { term: 'SoC', uitleg: 'State of charge: de laadtoestand van de batterij in procenten.' },
    { term: 'Reservecapaciteit', uitleg: 'Het deel van de batterij dat de klant in de app vasthoudt voor stroomuitval.' },
    { term: 'PEL', uitleg: 'Power export limit: een grens aan wat er naar het net mag worden teruggeleverd.' },
    { term: 'AP-modus', uitleg: 'Toegangspuntmodus: de IQ Gateway zendt een eigen Wi-Fi-netwerk uit waarmee je telefoon verbinding maakt voor de inbedrijfstelling.' },
    { term: 'V2H en V2G', uitleg: 'Een auto die via een bidirectionele lader energie teruggeeft aan het huis (V2H) of het net (V2G).' }
  ],

  overigeProducten: [
    { naam: 'IQ7 micro-omvormers', rol: 'omvormer', omschrijving: 'Vorige generatie. Werkt met IQ Battery 5P en System Controller, maar niet samen met IQ8 op dezelfde gateway. Off-grid maximaal 150 % PV ten opzichte van het batterijvermogen per fase.' },
    { naam: 'M Series micro-omvormers', rol: 'omvormer', omschrijving: 'Oudere generatie met een eigen gateway. Bij een System Controller behandeld als omvormer van een ander merk, via een contactor en een PLC-filter.' },
    { naam: 'IQ Battery 3T en 10T', rol: 'batterij', omschrijving: 'Tweede batterijgeneratie, volgens de website het meest betaalbare systeem. Communiceert via PLC of Zigbee en is daardoor niet te combineren met de IQ Battery 5P with FlexPhase.' },
    { naam: 'IQ Combiner 2 EU 3P', rol: 'gateway', omschrijving: 'Voorbedrade kast met IQ Gateway Metered, twee IQ Relays, Communications Kit 2, automaten en aardlekschakelaar, voor netgekoppelde systemen zonder noodstroom.' },
    { naam: 'Communications Kit 2 INT', rol: 'gateway', omschrijving: 'Koppelt een losse IQ Gateway Metered via USB aan de CTRL-bus van de IQ Battery 5P.' },
    { naam: 'IQ Relay (1P en 3P)', rol: 'gateway', omschrijving: 'Netbeveiliging en scheidingsinrichting in netgekoppelde systemen; in de System Controller ingebouwd.' },
    { naam: 'IQ Energy Router en Router+', rol: 'gateway', omschrijving: 'Volgens de website: koppelt laadpalen van andere merken en (SG Ready) warmtepompen of een elektrische boiler aan het Enphase-systeem voor slim schakelen op tarief en zon.' },
    { naam: 'IQ Bidirectional EV Charger', rol: 'lader', omschrijving: 'Bidirectionele DC-lader met CCS-stekker, tot 11 kW driefasig, voor laden, V2H, V2G en Dark Start met een System Controller. Alleen een voorlopig Engelstalig gegevensblad in de kennisbank.' },
    { naam: 'Enphase App en Installer App', rol: 'app', omschrijving: 'De Enphase App voor de bewoner (bewaken en profielen), de Installer App voor de inbedrijfstelling en het Installer Portal voor beheer op afstand.' }
  ]
});
