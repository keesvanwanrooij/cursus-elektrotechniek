/* ==========================================================================
   content/kennis/goodwe/merk.js
   Merkpagina GoodWe. Bronnen: de handleidingen en datasheets in
   project/handleidingen/GoodWe/ en, voor producten zonder handleiding in de
   map, de website nl.goodwe.com (geraadpleegd oktober 2026).
   Paginanummers verwijzen naar de positie in de pdf (1 = eerste pagina).
   ========================================================================== */

KENNIS.addMerk({
  id: 'goodwe',
  slug: 'goodwe',
  naam: 'GoodWe',
  herkomst: 'Suzhou, China',
  website: 'https://nl.goodwe.com',
  intro: 'GoodWe maakt omvormers voor zonnepanelen, hybride omvormers, thuisbatterijen (Lynx), complete opslagsystemen (ESA), laadpalen en de app SEMS+. Hier zie je welke productfamilie wat doet, hoe ze verschillen en welke handleiding je bij welke vraag pakt.',

  secties: [
    {
      id: 'over-het-merk',
      kop: 'Over GoodWe',
      tekst: `GoodWe Technologies is gevestigd in Suzhou, China (contactgegevens in alle handleidingen). Het merk is breed: van een omvormer voor een paar panelen tot opslagsystemen voor bedrijven. Voor een woning zijn er vier soorten producten:

1. **Omvormers voor zonnepanelen zonder batterij** (stringomvormers en een micro-omvormer).
2. **Hybride en AC-gekoppelde omvormers** waar een batterij aan kan, met losse **Lynx**-batterijen.
3. **ESA-systemen**: omvormer en batterij als een voorbedraad geheel, van stekkerbatterij tot 30 kW.
4. **Toebehoren**: meters, communicatiemodules, laadpalen en de apps.

!!! kern Een merk met veel generaties
GoodWe heeft veel series naast elkaar en vernieuwt ze regelmatig (G2, G3, PLUS+). Ook de apps zijn gewisseld: oudere documenten noemen SolarGo, PV Master en SEMS Portal, nieuwere alleen SEMS+. Kijk bij een bestaande installatie dus altijd eerst naar het typeplaatje en de datum van de handleiding.
!!!`
    },
    {
      id: 'productoverzicht',
      kop: 'Globaal productoverzicht',
      tekst: `De producten met een handleiding in de kennisbank zijn **vet**. De rest staat op de website van GoodWe (nl.goodwe.com, productoverzicht); daarvan noemen we alleen wat daar staat.

### ESA: omvormer en batterij als een geheel

| Reeks | Fase | Vermogen en opslag | Batterij | Waar je hem aan herkent |
|---|---|---|---|---|
| **ESA-Athena** | 1 | 0,8 kW, 1,92 tot 9,6 kWh | 1,92 kWh-modules onder 60 V | Stekkerbatterij, kastjes gestapeld, omvormer met eerste batterij bovenop |
| **ESA Athena S3** | 1 | 0,8 of 3 kW, 3 tot 15 kWh | 3 kWh-modules onder 60 V | Losse omvormer bovenop, stekker of vaste aansluiting |
| **ESA 3-10 kW** | 1 | 3 tot 10 kW, 5 tot 108 kWh | Lynx D G2, hoogspanning rond 380 V | Gestapelde systeemkast, omvormertype EHA |
| **ESA 5-30 kW** | 3 | 5 tot 30 kW, 5 tot 108 kWh | Lynx D G2, 700 tot 950 V | Als de 3-10 kW, maar 3-fase, omvormertype ETA |
| **ESA 5 kW / 10,8 kWh (oud)** | 1 | 5 kW, 5,4 tot 10,8 kWh | SECU-A, 48 V | Omvormer met schakelkast (BoS) aan de muur, hoge batterijkast eronder |

Van de ESA 3-10 kW en 5-30 kW bestaan ook **AC-gekoppelde** uitvoeringen (eigen datasheets in de map): hun datasheets noemen geen zonnepaneelingang (de omvormer heet daar bijvoorbeeld GW3K-BHA) en ze zijn bedoeld om naast een bestaande PV-installatie te werken.

### Lynx: losse batterijen

| Reeks | Spanning | Capaciteit | Bron |
|---|---|---|---|
| **Lynx D G2** | Hoogspanning (350 tot 550 V bij 1-fase, 700 tot 950 V bij 3-fase) | Modules van 5,1, 6,0, 8,3 en 9,0 kWh, tot 12 parallel | Datasheet; geschikt voor ESA, ET G2 en ET30 |
| Lynx D | Hoogspanning | 5 tot 40 kWh | Website |
| Lynx Home F PLUS+ | Hoogspanning | 6,6 tot 16,4 kWh | Website |
| Lynx Home U | Laagspanning | 5,4 tot 32,4 kWh | Website |
| Lynx U G3 | Laagspanning | 5 kWh | Website |

**Hoogspanning** (honderden volts) hoort bij omvormers als ET, EH en de nieuwe ESA. **Laagspanning** (rond 48 V) hoort bij omvormers als ES en de oude ESA. Welke batterij precies bij welke omvormer mag, staat in de handleiding van de omvormer.

### Losse omvormers voor woningen (volgens de website)

| Soort | Reeks | Fase | Vermogen | Wat het is |
|---|---|---|---|---|
| Micro-omvormer | MIS | 1 | 800 W | Een omvormer per paneel of twee panelen |
| Stringomvormer | XS G3 | 1 | 0,7 tot 3 kW | Kleine netgekoppelde omvormer, 1 MPPT |
| Stringomvormer | DNS, DNS G3, DNS G4 | 1 | 3 tot 6 kW | Netgekoppeld, 2 MPPT |
| Stringomvormer | SDT G2, SDT G2 PLUS+, SDT G3 | 3 | 4 tot 20 kW | Netgekoppeld, 2 MPPT |
| Hybride | EH en EH PLUS+ | 1 | 3,6 tot 6 kW | Panelen en hoogspanningsbatterij, 2 MPPT |
| Hybride | ES, ES G2 | 1 | 3,6 tot 6 kW | Panelen en laagspanningsbatterij |
| Hybride | EM | 1 | 3 tot 5 kW | Hybride met batterijlader |
| Hybride | ET PLUS+ | 3 | 5 tot 10 kW | Panelen en hoogspanningsbatterij, 2 MPPT |
| Hybride | ET G2 | 3 | 12 tot 15 kW | Hoogspanningsbatterij, 3 MPPT |
| AC-gekoppeld | BH | 1 | 3 tot 6 kW | Batterij-omvormer naast een bestaande PV-omvormer, hoogspanning |
| AC-gekoppeld | SBP, SBP G2 | 1 | 3,6 tot 6 kW | Idem, laagspanning |
| AC-gekoppeld | BT | 3 | 5 tot 10 kW | Idem, 3-fase |

Een **stringomvormer** zet alleen zonnestroom om. Een **hybride** omvormer doet dat en laadt ook een batterij. Een **AC-gekoppelde** omvormer laadt alleen een batterij en hangt aan de wisselspanningskant naast een bestaande PV-omvormer. Daarom kies je hem bij het achteraf toevoegen van een batterij.

### Toebehoren

- **Meters:** GMK110 (1-fase), GMK330 en GM330 (3-fase) en andere, volgens de website. De ESA- en Athena S3-handleidingen noemen GMK110, GMK330 en GMK360 als bedrade meters.
- **Communicatie:** WiFi/LAN Kit-20 (dongle op de omvormer), 4G Kit, Ezlink3000 en de energiecontroller SEC1000S.
- **Energiebeheer:** EzManager3000 (een HEMS-gateway voor dynamische tarieven) en HomeKit, volgens de website.
- **Laadpaal:** HCA en HCA G2, AC, 7, 11 of 22 kW, volgens de website. Er zit geen handleiding van in de map.

### Apps en portaal

| Naam | Voor wie | Waarvoor |
|---|---|---|
| **SEMS+** | Installateur en eigenaar | De huidige app en webomgeving: inbedrijfstelling, bewaking en instellingen. De Athena, S3 en nieuwe ESA gebruiken hem |
| **SolarGo** | Installateur | Lokale app om een omvormer in te stellen, alarmen te lezen en de meter te testen. Gebruikt bij de oude ESA en in de storingsgids |
| **SEMS Portal** | Installateur en eigenaar | Het oudere bewakingsportaal (semsportal.com), nog genoemd in de storingsgids |
| **PV Master** | Installateur | Oudere instelapp, alleen nog genoemd in de storingsgids |

Volgens de website is SEMS+ zowel app als webportaal, voor installateur en eigenaar, en kunnen bestaande accounts erop inloggen. Of SEMS Portal en SolarGo helemaal verdwijnen, staat er niet.`
    },
    {
      id: 'samenhang',
      kop: 'Hoe de onderdelen samenwerken',
      tekst: `Er zijn drie manieren om met GoodWe een thuisbatterij te bouwen. Herken de route en je weet welke handleiding je nodig hebt.

### Route 1: een ESA-systeem
Omvormer en batterij komen als voorbedraad geheel. Je stapelt de modules, sluit panelen, net en noodstroomgroep aan en zet een meter op de hoofdaansluiting. Alles staat in één handleiding per reeks. Dit is de route van de ESA 3-10 kW, ESA 5-30 kW en, in klein formaat, de Athena en S3.

### Route 2: hybride omvormer met Lynx-batterij
Je kiest een hybride omvormer (EH, ET, ES) op fase, vermogen en aantal panelen en hangt er een passende Lynx-batterij aan. De omvormer, de batterij en de meter hebben elk een eigen handleiding.

### Route 3: batterij achteraf
Heeft de klant al zonnepanelen met een gewone omvormer, dan voeg je een **AC-gekoppelde** batterij-omvormer (BH, SBP, BT) of een AC-gekoppelde ESA toe. De bestaande PV-omvormer blijft gewoon werken.

### Wat er altijd bij hoort
- Een **meter** op de netaansluiting met een stroomtang (CT) of een slimme-meterkoppeling, zodat het systeem weet wat het huis afneemt of teruglevert.
- Een **communicatiemodule** (wifi, LAN of 4G) voor de app.
- De **app** voor de netcode, de werkmodus en de batterijinstellingen.

!!! info Typenummers lezen
Een typenummer als GW5K-ETA-G20 of GW3K-EMA-G10 begint met het vermogen (5K is 5 kW). Daarna komt de serie, en de G met een getal lijkt de generatie aan te duiden. Bij batterijen staat de capaciteit voorop: GW5.1-BAT-D-G20 is een module van 5,1 kWh. LVD in GW3.0-BAT-LVD-G10 hoort bij de laagspanningsmodules van de Athena-reeksen. De handleidingen leggen dit schema zelf niet uit; dit is afgeleid uit de typenummers.
!!!`
    },
    {
      id: 'handleidingen',
      kop: 'Welke handleiding bij welke vraag',
      tekst: `GoodWe zet bijna alles per reeks in één **User Manual**: veiligheid, installatie, bedrading, inbedrijfstelling, storingen en specificaties. Daarnaast zijn er korte en algemene documenten.

| Document | Waarvoor |
|---|---|
| **User Manual** (EN) of **Gebruikershandleiding** (NL) | Alles voor de installateur, honderden pagina's bij de grote ESA, 76 bij de Athena |
| **Quick Installation Guide** (POLY) | Twee pagina's in veel talen, ook Nederlands; vooral tekeningen |
| **Datasheet** | Specificaties en kenmerken, soms ook AC-gekoppelde varianten |
| **Battery Enclosure Installation Manual** | Alleen bij de oude ESA: de batterijkast |
| **ESS Troubleshooting Guide** (NL) | Algemene storingsgids voor hybride en AC-gekoppelde omvormers, met foutcodes |
| **Meter detection function** (NL) | Eén pagina over het controleren van de stroomtang in SolarGo |
| **Explore Battery Safety of Lynx D** (NL) | Toelichting op de veiligheid van de Lynx D-batterij (voorlichtend) |

Twee tips. De paginanummers in de kennisbank zijn pdf-pagina's; het gedrukte nummer ligt meestal een tot drie lager. En de Nederlandse vertaling is soms ouder dan de Engelse: bij de Athena is de Nederlandse versie V1.1 en de Engelse V1.3. Bij twijfel gaat de nieuwste versie voor.`
    },
    {
      id: 'veiligheid',
      kop: 'Algemene veiligheidsregels van GoodWe',
      tekst: `De handleidingen herhalen steeds dezelfde basis. Die vormt de veiligheidsbasis voor elk GoodWe-product.

- **Alleen gekwalificeerd personeel.** Installeren en onderhouden alleen door opgeleide vakmensen die de lokale regels kennen. Schade door werken buiten de handleiding valt niet onder de garantie.
- **Spanningsloos werken.** Werken onder spanning is verboden. Schakel alle bronnen af: net, panelen en batterij. Het label noemt **5 minuten** wachten na het uitschakelen (Athena p. 14, oude ESA p. 5). De oude ESA-handleiding vraagt om met een meter voor 1000 V AC en DC te controleren dat alles spanningsloos is (p. 6).
- **Panelen geven spanning bij licht.** Dat staat met zoveel woorden in de oude ESA-handleiding (p. 6). Zie ook les m10l02.
- **Isolatie.** De PV-ingang mag niet geaard worden; de isolatieweerstand moet minstens de maximale ingangsspanning gedeeld door 30 mA zijn (Athena p. 11).
- **Polariteit.** Omgekeerd aansluiten van panelen of batterij beschadigt het apparaat en valt buiten de garantie.
- **Meegeleverde connectoren gebruiken.** Andere MC4-merken vallen buiten de verantwoordelijkheid van GoodWe; de storingsgids noemt niet-passende PV-connectoren als oorzaak van ingebrande klemmen (Storingsgids p. 20).
- **Toestemming van het net.** Voor netkoppeling vraagt GoodWe toestemming van het lokale net. Netbeveiligingen alleen wijzigen met toestemming van de netbeheerder.
- **Batterijbrand.** Geen ABC-poederblusser. Over water zijn de documenten het niet eens: de Athena noemt CO2, Novec 1230 of FM-200, de S3 CO2 of water, en de labels zeggen niet met water blussen. Volg het label en laat het aan de brandweer over.

### De Lynx D volgens GoodWe

Het voorlichtingsdocument over de Lynx D noemt onder meer een overdrukventiel met een ademend membraan, isolatieschuim tussen batterijdeel en elektronica, 13 temperatuursensoren per pakket, een ventilator voor gelijkmatige temperatuur, een BMS dat bij een fout de interne stroom onderbreekt, en LFP-cellen (lithium-ijzerfosfaat). Het is een verkoopdocument, geen installatievoorschrift.`
    },
    {
      id: 'meter-en-storingen',
      kop: 'Meter en storingen',
      tekst: `### De meter controleren

Bijna alle GoodWe-opslagsystemen sturen op een meter op de netaansluiting. Zit de stroomtang (CT) verkeerd om, dan denkt het systeem dat het huis teruglevert terwijl het afneemt, en andersom. De storingsgids noemt dat als eerste oorzaak bij **vreemd laden of ontladen van de batterij** (Storingsgids p. 20).

Het document "Meter detection function" beschrijft de controle in vier stappen:

1. Open SolarGo, verbind met de omvormer en ga naar de instellingen.
2. Start de **Meter Detectie**.
3. De app zegt of de stroomtang goed of omgekeerd zit.
4. Draai zo nodig de stroomtang of de bedrading om en voer de test opnieuw uit.

Let op: volgens de storingsgids faalt de metertest als het huis minder dan **150 W** van het net afneemt (p. 21). Zet dus even een flinke belasting aan.

### De storingsgids

De Probleemoplossingsgids (NL, 2023) geldt voor de hybride series ET, ET PLUS+, EH, ESA, ES, EM, EHB en ES G2 en de AC-gekoppelde BT, BH, BP en SBP. De aanpak in vier lagen:

1. **Lampjes** op de omvormer (p. 5-9). De betekenis verschilt per serie; het label op de zijkant van de omvormer legt het uit.
2. **Foutcodes** in SolarGo of SEMS Portal (p. 10-19). Elke code heeft oorzaken en een oplossing.
3. **Problemen zonder melding** (p. 20-23), zoals lage opbrengst, een uitgeschakelde back-up of een batterij die niet communiceert.
4. **Accufouten, wifi en firmware** (p. 24-31).

| Code | Melding | Meestal |
|---|---|---|
| 09, 17, 29 | Geen netcontact, FAC-fout | Netspanning meten, AC-aansluiting en automaat controleren |
| 10 | Aardfout | Spanning tussen aarde en behuizing meten; vocht in de panelen |
| 11 | DC-bus hoog | PV-spanning en isolatie naar aarde meten |
| 13 | Te hoge temperatuur | Ventilatie, koelribben, 15 minuten uit |
| 15 | PV-overspanning | Open klemspanning per string meten, panelen verwijderen |
| 25 | Relaiscontrole | Spanning tussen nul en aarde onder 10 V |
| 14 (ETU), 27 (ETU) | Fasevolgorde, fasehoek | L2 en L3 omwisselen (3-fase) |

De Athena en S3 hebben geen genummerde codes maar een eigen tabel op foutnaam in hun handleiding. Blijft een storing, dan verzamel je serienummer, softwareversie, tijdstip en foto's en neem je contact op met de GoodWe-service (Storingsgids p. 36).`
    },
    {
      id: 'anders-dan-sigenergy',
      kop: 'Waar GoodWe anders werkt dan Sigenergy',
      tekst: `Ken je Sigenergy al, dan zijn dit de verschillen die je in de praktijk merkt:

| Onderwerp | Sigenergy | GoodWe |
|---|---|---|
| **Noodstroom** | Via een aparte Sigen Gateway | Een BACK-UP-uitgang op de omvormer of het ESA-systeem zelf; de oude ESA heeft ook een handmatige bypass |
| **Aanbod** | Een samenhangend ecosysteem met weinig series | Veel series en generaties naast elkaar, ook omvormers zonder batterij |
| **Batterijspanning** | Hoogspanning (300 tot 900 V) | Zowel hoogspanning (Lynx D, nieuwe ESA) als laagspanning (Lynx U, oude ESA, Athena onder 60 V) |
| **Batterij achteraf** | Via de DC-kant van de eigen omvormer | Ook AC-gekoppeld naast een bestaande omvormer (BH, SBP, BT, AC-gekoppelde ESA) |
| **Meting** | Sigen Power Sensor | GoodWe-meters (GMK110, GMK330) met stroomtang, of bij de stekkerbatterijen een Shelly of P1-leeskop |
| **App** | mySigen en Sigen Cloud | SEMS+, met oudere systemen nog SolarGo en SEMS Portal |
| **Alarmen** | Een lijst met viercijferige codes plus ID | Genummerde codes in de storingsgids, en bij nieuwe producten een tabel op foutnaam |
| **Stekkerproducten** | Niet in de kennisbank | ESA-Athena en S3 als stekkerbatterij |
| **Handleidingen** | Een reeks losse documenten per product (01, 02, 03) | Een dikke User Manual per reeks, plus een korte gids en een datasheet |

!!! kern Wat hetzelfde blijft
De basis van je werk verandert niet: spanningsloos maken volgens de vijf stappen (les m01l03), panelen als bron die je niet uit kunt zetten (les m10l02), aarding eerst, en polariteit en stringspanning meten voor je inschakelt.
!!!`
    }
  ],

  begrippen: [
    { term: 'ESA', uitleg: 'De naam van GoodWe voor zijn alles-in-een opslagsystemen: omvormer en batterij als voorbedraad geheel.' },
    { term: 'Lynx', uitleg: 'De losse batterijreeksen van GoodWe, in hoogspanning (Lynx D, Lynx Home F) en laagspanning (Lynx U, Lynx Home U).' },
    { term: 'Hoogspanningsbatterij (HV)', uitleg: 'Een batterij met een spanning van honderden volts. Minder stroom bij hetzelfde vermogen, dus dunnere kabels.' },
    { term: 'Laagspanningsbatterij (LV)', uitleg: 'Een batterij rond 48 V (of onder 60 V bij de Athena). Hoge stromen, dikke kabels.' },
    { term: 'Hybride omvormer', uitleg: 'Een omvormer voor zonnepanelen en een batterij tegelijk.' },
    { term: 'AC-gekoppeld', uitleg: 'Een batterij-omvormer die aan de wisselspanningskant naast een bestaande PV-omvormer hangt.' },
    { term: 'BACK-UP', uitleg: 'De noodstroomuitgang: een groep die blijft werken als het net uitvalt.' },
    { term: 'BoS (Balance of System)', uitleg: 'Bij de oude ESA: de schakelkast onder de omvormer met de aansluitingen, automaten en bypass-schakelaar.' },
    { term: 'SEMS+', uitleg: 'De huidige app en webomgeving van GoodWe voor inbedrijfstelling en bewaking.' },
    { term: 'SolarGo', uitleg: 'De lokale installateursapp, onder meer voor instellingen, alarmen en de meterdetectie.' },
    { term: 'SEMS Portal', uitleg: 'Het oudere bewakingsportaal van GoodWe.' },
    { term: 'CT', uitleg: 'Stroomtransformator of stroomtang: meet de stroom op de netaansluiting voor de meter.' },
    { term: 'Meter Detectie', uitleg: 'Een test in SolarGo die controleert of de stroomtang van de meter de goede kant op zit.' },
    { term: 'TOU', uitleg: 'Time of use: laden en ontladen op ingestelde tijden, bijvoorbeeld bij een laag en een hoog tarief.' },
    { term: 'HEMS', uitleg: 'Home energy management system: een kastje of software die de energie in huis regelt. De S3 en nieuwe ESA kunnen ermee samenwerken.' },
    { term: 'MPPT', uitleg: 'Regeling die per groep zonnepanelen het punt met het hoogste vermogen zoekt.' }
  ],

  overigeProducten: [
    { naam: 'Lynx D G2', rol: 'batterij', omschrijving: 'Hoogspanningsbatterij in modules van 5,1, 6,0, 8,3 en 9,0 kWh, IP66, tot 12 parallel. Hoort bij de ESA 3-10 kW en 5-30 kW en bij ET-omvormers. Alleen de datasheet zit in de map; installatie staat in de ESA-handleidingen.' },
    { naam: 'Lynx Home U, Lynx U G3 en Lynx Home F PLUS+', rol: 'batterij', omschrijving: 'Volgens de website laagspanningsbatterijen (Home U 5,4 tot 32,4 kWh, U G3 5 kWh) en een hoogspanningsbatterij (Home F PLUS+ 6,6 tot 16,4 kWh). Geen handleiding in de kennisbank.' },
    { naam: 'Hybride omvormers ET, EH, ES en EM', rol: 'omvormer', omschrijving: 'Volgens de website hybride omvormers: ET PLUS+ en ET G2 3-fase (5 tot 15 kW), EH en EH PLUS+ 1-fase (3,6 tot 6 kW), ES en ES G2 1-fase (3,6 tot 6 kW, laagspanning), EM 1-fase (3 tot 5 kW). Geen handleiding in de kennisbank.' },
    { naam: 'AC-gekoppelde omvormers BH, SBP en BT', rol: 'omvormer', omschrijving: 'Volgens de website batterij-omvormers om een batterij toe te voegen aan een bestaande PV-installatie: BH en SBP 1-fase, BT 3-fase. Geen handleiding in de kennisbank.' },
    { naam: 'Stringomvormers XS, DNS en SDT', rol: 'omvormer', omschrijving: 'Volgens de website netgekoppelde omvormers zonder batterij: XS G3 1-fase (0,7 tot 3 kW), DNS 1-fase (3 tot 6 kW), SDT 3-fase (4 tot 20 kW). Geen handleiding in de kennisbank.' },
    { naam: 'MIS micro-omvormer', rol: 'omvormer', omschrijving: 'Volgens de website een 1-fase micro-omvormer van 800 W. Geen handleiding in de kennisbank.' },
    { naam: 'HCA en HCA G2 laadpaal', rol: 'lader', omschrijving: 'Volgens de website een AC-laadpaal voor aan de muur, 7, 11 of 22 kW, 1- of 3-fase. Geen handleiding in de kennisbank.' },
    { naam: 'Slimme meters GMK110, GMK330, GM330', rol: 'sensor', omschrijving: 'Meters met stroomtang op de netaansluiting, via RS485 aan de omvormer. Genoemd in de ESA- en S3-handleidingen; een eigen handleiding zit niet in de map.' },
    { naam: 'WiFi/LAN Kit-20, 4G Kit en EzManager3000', rol: 'app', omschrijving: 'Communicatiemodules voor de omvormer en een HEMS-gateway voor dynamische tarieven, volgens de website. Geen handleiding in de kennisbank.' },
    { naam: 'SEMS+, SolarGo en SEMS Portal', rol: 'app', omschrijving: 'SEMS+ is de huidige app en webomgeving voor installateur en eigenaar. SolarGo en SEMS Portal komen voor bij oudere systemen en in de storingsgids. Een eigen handleiding van de apps zit niet in de map.' }
  ]
});
