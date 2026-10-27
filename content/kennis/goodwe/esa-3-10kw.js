/* ==========================================================================
   content/kennis/goodwe/esa-3-10kw.js
   Samenvatting van de documentatie van de GoodWe ESA-reeks 3-10kW (1-fase,
   hybride EHA en AC-gekoppeld BHA) met Lynx D G2-batterijmodules.
   Paginanummers verwijzen naar de positie in de PDF (1 = eerste pagina).
   ========================================================================== */

KENNIS.addProduct({
  id: 'goodwe-esa-3-10kw',
  merk: 'goodwe',
  slug: 'esa-3-10kw',
  naam: 'GoodWe ESA 3-10kW (1-fase, hybride en AC-gekoppeld)',
  rol: 'systeem',
  toepassingen: ['thuisbatterij', 'zonnepanelen', 'laadpaal'],
  korteOmschrijving: 'Het eenfasige alles-in-een thuisbatterijsysteem van GoodWe: een omvormer van 3 tot 10 kW die op een stapel Lynx D G2-batterijmodules wordt geklikt, met ingebouwde back-uppoort, ingebouwde meter met CT en optioneel een statische schakelkast (STS). Leverbaar als hybride uitvoering met zonnepaneelingangen (EHA) en als AC-gekoppelde uitvoering zonder zonnepaneelingangen (BHA).',

  varianten: {
    kop: ['Onderdeel', 'Uitvoering', 'Vermogen of capaciteit', 'Bijzonderheid', 'Waar in de bronnen'],
    rijen: [
      ['GW3K / GW3.6K / GW5K / GW6K-EHA-G20', 'Hybride omvormer, 1-fase', '3,0 / 3,6 / 5,0 / 6,0 kW', '2 PV-ingangen (MPPT), DC-schakelaar', 'Gebruikershandleiding p. 3, 52-53; Datasheet p. 2'],
      ['GW8K / GW9.999K / GW10K-EHA-G20', 'Hybride omvormer, 1-fase', '8,0 / 9,999 / 10,0 kW', '4 PV-ingangen (MPPT), DC-schakelaar', 'Gebruikershandleiding p. 3, 52-53; Datasheet p. 2'],
      ['GW3K tot en met GW10K-BHA-G20 (zelfde vermogensstappen)', 'AC-gekoppelde omvormer, 1-fase', '3,0 tot 10,0 kW', 'Geen PV-ingang en geen DC-schakelaar', 'Gebruikershandleiding p. 3, 52-53; AC-datasheet p. 2'],
      ['GW5.1-BAT-D-G20 en GW5.1-BAT-D-G21', 'Batterijmodule Lynx D G2', '5,12 kWh (5,0 kWh bruikbaar)', 'G21 laadt pas vanaf 2 °C', 'Gebruikershandleiding p. 4, 89; Datasheet p. 3'],
      ['GW8.3-BAT-D-G20 en GW8.3-BAT-D-G21', 'Batterijmodule Lynx D G2', '8,32 kWh (8,0 kWh bruikbaar)', 'G21 laadt pas vanaf 2 °C', 'Gebruikershandleiding p. 4, 89; Datasheet p. 3'],
      ['GW6.0-BAT-D-G20 en GW9.0-BAT-D-G20', 'Batterijmodule Lynx D G2', '6,0 kWh (5,8) en 9,0 kWh (8,7)', 'Laadt vanaf -20 °C', 'Gebruikershandleiding p. 4, 89; Datasheet p. 3'],
      ['GW30K-STS-G10 / GW60K-STS-G10', 'Statische schakelkast (STS), optioneel', '30 / 60 kW aan de netzijde', 'Voor generator, SMART-PORT en bypass', 'Gebruikershandleiding p. 4, 56-58'],
      ['Ingebouwde meter met CT, GMK110, GM330, GMK330', 'Meting aan het aansluitpunt', 'CT 120 A:40 mA (GM330: nA:5A)', 'GM330 nodig bij meer dan 2 omvormers parallel', 'Gebruikershandleiding p. 32-33, 58-59'],
      ['WiFi/LAN Kit-20, 4G Kit', 'Communicatiestick', 'Wifi, LAN en Bluetooth of 4G en Bluetooth', 'Kit-20 verplicht bij parallelschakeling', 'Gebruikershandleiding p. 34, 59-60; User Manual EN p. 4']
    ]
  },

  documenten: [
    { id: 'geb', titel: 'GW_ESA 3-10kW_Gebruikershandleiding-NL (V1.8, 2026-07-28)', soort: 'Gebruikershandleiding', paginas: 357 },
    { id: 'um', titel: 'GW_ESA 3-10kW_User Manual-EN (V2.0, 2026-10-23)', soort: 'Gebruikershandleiding (Engels)', paginas: 339 },
    { id: 'qig', titel: 'GW_ESA 3-10kW_Quick Installation Guide-POLY', soort: 'Beknopte installatiegids', paginas: 2 },
    { id: 'ds', titel: 'GW_ESA 3-10kW_Datasheet_EMEA-EN (hybride)', soort: 'Datasheet', paginas: 4 },
    { id: 'dsac', titel: 'GW_ESA 3-10kW AC-Coupled_Datasheet_EMEA-NL', soort: 'Datasheet', paginas: 4 },
    { id: 'lynx', titel: 'GW_Lynx D G2_Datasheet_EU-NL', soort: 'Datasheet batterij', paginas: 2 },
    { id: 'veil', titel: 'Explore Battery Safety of GoodWe Lynx D_NL', soort: 'Brochure veiligheid', paginas: 4 },
    { id: 'ts', titel: 'GW_ESS Troubleshooting Guide-NL (V1.0, 2023)', soort: 'Probleemoplossingsgids', paginas: 37 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `De ESA 3-10kW is een **alles-in-een thuisbatterij voor een 1-fase aansluiting**. Omvormer en batterij zitten niet in losse kasten aan de muur, maar worden op elkaar gestapeld: onderop een voetstuk, daarop een of meer batterijmodules en bovenop de omvormer. De modules maken onderling contact via een **blinde stekker** (blind connector): een stekkerverbinding die vanzelf in elkaar valt als je de modules goed op elkaar zet. De aarding van de batterij loopt ook via die stekker (Gebruikershandleiding p. 48-49, 148).

### De onderdelen

- **Omvormer (EHA of BHA):** zet gelijkspanning om in wisselspanning en regelt met een ingebouwd energiemanagementsysteem (EMS) waar de energie heen gaat: huis, batterij of net (p. 51).
- **Batterijmodules Lynx D G2:** LFP-modules (lithium-ijzerfosfaat) van 5,1, 6,0, 8,3 of 9,0 kWh. Elke module heeft een multifunctionele knop, een eigen batterijschakelaar en een statuslampje (p. 54-55).
- **Ingebouwde meter met CT:** de omvormer meet zelf met een meegeleverde stroomtransformator (CT, een klemtang die om de kabel gaat) hoeveel het huis afneemt of teruglevert. Een losse slimme meter (GMK110, GM330 of GMK330) is optioneel (p. 32-33).
- **Communicatiestick:** de WiFi/LAN Kit-20 brengt het systeem online en maakt via Bluetooth de app-verbinding (p. 34).
- **Statische schakelkast (STS):** optioneel. Een aparte kast voor net, generator en een extra SMART-PORT, met een handbediende bypass (p. 56-57).

!!! kern Welke handleiding bij welke vraag
Er is een Nederlandse gebruikershandleiding (V1.8, juli 2026) en een nieuwere Engelse (V2.0, oktober 2026). Beide zijn ruim 330 pagina's en bevatten alles: veiligheid, scenario's, montage, bedrading, inbedrijfstelling, foutcodes en technische gegevens. Deze pagina verwijst naar de Nederlandse versie. De Engelse versie heeft een paar aanvullingen, die hieronder apart worden genoemd. De beknopte installatiegids (QIG) is vooral tekeningen met maten, kabeldoorsneden en aanhaalmomenten.
!!!

!!! info Als je Sigenergy al kent
Bij SigenStor Home heb je voor noodstroom een **aparte Sigen Gateway** nodig. Bij de ESA zit de noodstroomaansluiting (BACK-UP-poort) en het netrelais **in de omvormer zelf**. De STS is optioneel en vooral bedoeld voor een generator of extra groep. Verder: Sigenergy noemt 0 ms omschakeltijd (alleen met gateway), GoodWe noemt minder dan 4 ms (Datasheet p. 1). Sigenergy werkt met de mySigen-app, GoodWe met SEMS+. En let op het blussen: Sigenergy noemt ABC-poeder als mogelijkheid, GoodWe verbiedt ABC-poeder juist (zie Veiligheid).
!!!

### Begrippen vooraf

**MPPT** is de regeling die per groep zonnepanelen het punt met het hoogste vermogen zoekt. **SOC** (state of charge) is de laadtoestand van de batterij in procenten. **BMS** is het batterijmanagementsysteem in elke module. **Off-grid** betekent dat het systeem zonder openbaar net draait, bijvoorbeeld bij een stroomstoring.`
    },
    {
      id: 'hybride-of-ac',
      kop: 'Hybride of AC-gekoppeld, en welke reeks',
      tekst: `De reeks bestaat uit twee omvormertypes met dezelfde vermogensstappen (Gebruikershandleiding p. 3). De letters in de typecode vertellen welke je hebt.

| Kenmerk | Hybride (EHA) | AC-gekoppeld (BHA) |
|---|---|---|
| Zonnepanelen direct aansluiten | Ja, 2 of 4 PV-ingangen | Nee, geen PV-ingangen |
| DC-schakelaar op de omvormer | Ja | Nee |
| Hoe komt zonnestroom in de batterij | Rechtstreeks via de DC-kant | Via de AC-kant, van het net of van een bestaande omvormer |
| Max. laadvermogen batterij (10 kW-model) | 13,5 kW | 10,0 kW |
| Typische situatie | Nieuwe installatie met panelen | Bestaande PV-installatie met eigen omvormer |
| Bron | Datasheet p. 2, Geb. p. 52-53 | AC-datasheet p. 1-2, Geb. p. 52-53 |

### Hoe je kiest

- **Nieuwe panelen en een batterij tegelijk:** de hybride uitvoering. De panelen gaan op de PV-ingangen, de batterij laadt direct uit de zon.
- **Er hangt al een gewone netomvormer met panelen:** de AC-gekoppelde uitvoering is daarvoor bedoeld. Het AC-datasheet noemt uitdrukkelijk integratie met bestaande PV-installaties (AC-datasheet p. 1). De bestaande omvormer sluit je dan aan op de GRID-zijde (koppelingsscenario) of op de BACK-UP-poort (microgrid), zie het volgende hoofdstuk.
- **Vermogen:** kies op het verbruik en de netaansluiting. De omvormer is 1-fase: 230 V tussen L en N (Datasheet p. 2).

### Verschil met de reeks 5-30kW

| Kenmerk | ESA 3-10kW | ESA 5-30kW |
|---|---|---|
| Netaansluiting | 1-fase (L, N, PE) | 3-fase (L1, L2, L3, N, PE) |
| Vermogen | 3 tot 10 kW | 5 tot 30 kW |
| Batterijspanning | 350 tot 550 V | 700 tot 950 V |
| Capaciteit | 5 tot 108 kWh, max. 12 modules | 5 tot 108 kWh, max. 12 modules |
| Koeling | Natuurlijke koeling, geen ventilator | Ventilatoren |
| Typecode | EHA (hybride), BHA (AC) | ETA (hybride), BTA (AC) |

De batterijmodules zijn in beide reeksen dezelfde Lynx D G2-modules. Het datasheet noemt voor dezelfde module twee spanningsbereiken, een voor 1-fase- en een voor 3-fasesystemen (Lynx D G2-datasheet p. 2).

### Batterijcapaciteit

Het systeem ondersteunt 5 tot 108 kWh (Gebruikershandleiding p. 32). Op een vloervoetstuk gaan maximaal 6 modules op een stapel, met maximaal 3 uitbreidingsgroepen en 12 modules in totaal. Aan een muurbeugel gaan er minder op: 3 van de kleine modules (5.1 en 6.0) of 2 van de grote (8.3 en 9.0) (p. 49, 98). Modules van verschillende capaciteit mogen door elkaar, maar dan werkt de batterijverwarming niet (p. 32).`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Hoe het werkt en hoe het in de installatie past',
      tekst: `De omvormer heeft twee AC-poorten (Gebruikershandleiding p. 52):

- **ON-GRID (GRID):** naar het net, via een ingebouwd netrelais. In off-grid-modus gaat dat relais open (p. 107).
- **BACK-UP:** naar de groepen die bij een stroomstoring moeten blijven werken. Deze poort staat onder spanning zodra de omvormer aan staat, ook als het net wegvalt (p. 107).

### Volledige of gedeeltelijke back-up

Bij **gedeeltelijke back-up** hangen alleen de belangrijke groepen aan BACK-UP. Bij **volledige back-up** hangt het hele huis eraan. Dat kan omdat de omvormer bij aanwezig net tot 63 A doorlaat via een interne bypass (Datasheet p. 2, voetnoot 4). Bij een storing moet de totale belasting wel onder het nominale vermogen blijven, anders schakelt de omvormer af op overbelasting (p. 107). In off-grid zijn de grenzen voor motoren en compressoren (inductieve belasting) beperkt: 2,2 kVA per apparaat, en 2,2 tot 3,7 kVA in totaal (p. 28).

### Drie scenario's

1. **Algemeen scenario:** alleen de ESA, eventueel met STS (p. 28-34).
2. **Microgrid:** een gewone netomvormer hangt aan de BACK-UP-poort van de ESA. Bij een storing blijft die omvormer dan ook produceren. Geen generator mogelijk in dit scenario (p. 34-41).
3. **Koppelingsscenario:** een netomvormer hangt aan de GRID-zijde (p. 41-48). Met een GoodWe-netomvormer (DNS G3, MS G3) gaat er een RS485-kabel naar de EMS-poort op COM2 (p. 41).

De tekst over het vermogen van de netomvormer is in de Nederlandse handleiding onvolledig vertaald: er ontbreekt een woord tussen "het nominale uitgangsvermogen van de netgekoppelde omvormer" en "het nominale uitgangsvermogen van de energieopslagomvormer" (p. 41, 48). Bedoeld is vermoedelijk dat de netomvormer niet groter mag zijn dan de ESA, maar controleer dat bij de leverancier.

### Meting

Met de ingebouwde meter en de meegeleverde CT (kabel 10 m, verlengbaar tot 30 m met CAT5E of beter) kan het systeem teruglevering beperken (p. 107). In microgrid- en koppelingsscenario's heb je een tweede meter nodig om ook de opbrengst van de netomvormer te zien (p. 121-122).

### Generator, laadpaal en parallel

- **Generator:** zonder STS via de GRID-poort met een externe meter en een ATS met vergrendeling; met STS op de SMART-PORT zonder externe meter (p. 120).
- **Laadpaal:** de handleiding noemt dat een **GoodWe AC-laadpaal** kan worden aangesloten (p. 31, 37). Daarvoor is er een RS485-aansluiting op de communicatiepoort, gedeeld met EMS en netomvormer (p. 145, 165). Hoe je de laadpaal configureert, staat niet in deze handleiding.
- **Parallel:** tot 10 omvormers, bij meer dan 6 eerst de klantenservice bellen. Elke omvormer heeft een WiFi/LAN Kit-20 nodig (p. 31). De nieuwere Engelse handleiding beschrijft ook een systeem met de dataverzamelaar EzManager3000 (User Manual EN p. 48-52).

### Werkmodi

De handleiding noemt zes modi (p. 61-71): **zelfverbruik** (zon eerst naar huis, dan batterij, dan net), **back-up** (batterij blijft gevuld tot een reserve-SOC), **TOU** (laden en ontladen op tijden met goedkope of dure stroom), **slim laden** (pieken boven de terugleverlimiet in de batterij), **vraagbeheer** (pieken in afname afvlakken, vooral zakelijk) en **off-grid**. Na de eerste inbedrijfstelling laadt het systeem de batterij eerst automatisch helemaal op om het BMS te kalibreren (p. 61).

Via droge contacten kan de omvormer ook verbruikers schakelen, bijvoorbeeld een **SG Ready-warmtepomp** (p. 72-73, 165).`
    },
    {
      id: 'specificaties',
      kop: 'Specificaties in het kort',
      tekst: `Waarden uit de datasheets. Controleer kritische getallen in de originele PDF.

| Waarde | Hybride EHA | AC-gekoppeld BHA |
|---|---|---|
| Nominaal AC-vermogen | 3,0 tot 10,0 kW | 3,0 tot 10,0 kW |
| Netspanning | 220/230/240 V, L/N/PE | 220/230/240 V, L/N/PE |
| Max. afname van het net (bypass) | 6,0 tot 14,5 kVA, tot 63 A | 6,0 tot 14,5 kVA, tot 63 A |
| Back-up in off-grid | nominaal, 2x gedurende 10 s | nominaal, 2x gedurende 10 s |
| Max. PV-vermogen | 6,0 tot 20,0 kW | geen PV |
| Max. PV-ingangsspanning | 600 V | geen PV |
| MPPT-bereik | 40 tot 560 V | geen PV |
| Max. stroom per MPPT | 20 A (kortsluiting 26 A) | geen PV |
| Batterijspanning | 350 tot 550 V | 350 tot 550 V |
| Omschakeltijd naar back-up | minder dan 4 ms (p. 1) | p. 1: minder dan 4 ms, tabel p. 2: minder dan 10 ms |
| Beschermingsklasse | IP66 | IP66 |
| Bedrijfstemperatuur omvormer | -35 tot 60 °C, minder vermogen boven 40 °C | idem |
| Koeling | natuurlijke koeling | natuurlijke koeling |
| Gewicht omvormer | 24 tot 26 kg | 16,9 tot 17,7 kg |
| Afmetingen omvormer | 800 x 300 x 270 mm | 800 x 300 x 270 mm |

Bronnen: Datasheet p. 1-2, AC-datasheet p. 1-2. Let op de tegenstrijdige omschakeltijd in het AC-datasheet. Het hybride datasheet voor EMEA noemt geen 9,999 kW-model maar wel een 5,75 kW-model dat alleen in Ierland wordt verkocht.

### Batterijmodules (Datasheet p. 3, Lynx D G2-datasheet p. 2)

| Waarde | 5.1 | 8.3 | 6.0 | 9.0 |
|---|---|---|---|---|
| Nominale energie | 5,12 kWh | 8,32 kWh | 6,0 kWh | 9,0 kWh |
| Bruikbaar | 5,0 kWh | 8,0 kWh | 5,8 kWh | 8,7 kWh |
| Max. laad- en ontlaadvermogen | 5,0 kW | 8,0 kW | 3,0 kW | 4,5 kW |
| Gewicht | 57,5 kg | 79 kg | 61 kg | 77 kg |
| Cycli (laboratorium) | 8000 | 8000 | 10000 | 10000 |

Alle modules zijn 800 x 326 x 270 mm, IP66, met ingebouwde verwarming en een **aerosolblusser** (een ingebouwd blussysteem dat bij brand een blusnevel vrijgeeft). Het datasheet geeft het laad- en ontlaadvermogen per batterijtype. Hoe dat optelt bij meerdere modules, staat er niet in.`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid en let op',
      tekst: `!!! gevaar Spanningsloos werken
Schakel voor elk aansluitwerk alle voorliggende schakelaars uit: de AC-automaat en de DC-schakelaar. Werken onder spanning is verboden (Gebruikershandleiding p. 14-15, 105). Na uitschakelen ontladen interne onderdelen vertraagd: het etiket noemt **5 minuten wachten** (p. 22). De BACK-UP-poort staat onder spanning zolang de omvormer aan is, ook zonder net (p. 107).
!!!

!!! info DC-zijde en batterij
De batterijen zijn hoogspanning-DC (350 tot 550 V). Uit de cursus weet je: zonnepanelen leveren spanning zolang er licht is, en een batterij blijft een bron. Volg de uitschakelvolgorde (zie Inbedrijfstelling) en meet na voordat je iets aanraakt.
!!!

### Batterij en brand

!!! gevaar Brand en blussen
Boven 150 °C bestaat brandgevaar en kunnen giftige gassen vrijkomen. De handleiding vraagt om een blusser met **koolstofdioxide (CO2) of water** in de buurt en verbiedt **ABC-poeder** (p. 20). Tegelijk staat in de symbolentabel een etiket dat blussen met water verbiedt (p. 23). Die twee spreken elkaar tegen. Volg het etiket op het apparaat en vraag de leverancier welk middel geldt.
!!!

- Niet demonteren, niet laten vallen, niet in de zon of bij een warmtebron. Boven 60 °C omgevingstemperatuur kan brand ontstaan (p. 19).
- Een beschadigde module niet gebruiken. Gelekt elektrolyt is bijtend: ogen minstens 15 minuten spoelen en medische hulp zoeken (p. 19-20).
- Heeft een module met optionele brandbeveiliging die beveiliging geactiveerd, dan direct de hoofdschakelaar uit, controleren op schade en de module apart zetten (p. 20-21).
- Volgens de veiligheidsbrochure heeft de Lynx D een overdrukventiel, temperatuursensoren per module, thermische isolatie tussen batterij- en DC/DC-deel en een polariteitsdetectie (Veiligheidsbrochure p. 1-4).

### Overige waarschuwingen

- Niet geschikt voor levensreddende medische apparatuur (p. 26).
- Off-grid niet onder 30% SOC laten zakken en de batterij elk half jaar volledig laden en ontladen om de SOC te kalibreren (p. 26-27).
- Gebruik alleen de meegeleverde connectoren (p. 15).
- PV-strings mogen niet geaard zijn. De isolatieweerstand moet minimaal de max. ingangsspanning gedeeld door 30 mA zijn. Panelen moeten aan IEC 61730 klasse A voldoen (p. 17).`
    },
    {
      id: 'plaatsing',
      kop: 'Plaatsing en montage',
      tekst: `### Omgeving (Gebruikershandleiding p. 89-91)

- Binnen en buiten mogelijk (IP66), maar bij voorkeur beschut tegen zon, regen en sneeuw. De meter hoort binnen.
- Niet in een brandbare, explosieve of corrosieve omgeving en buiten bereik van kinderen.
- Binnen 500 m van de kust eerst overleggen met de fabrikant (zoutschade).
- Niet in de koude luchtstroom van een airco: temperatuurverschil geeft condens.
- Boven -18 °C (G20), boven 2 °C (G21) of boven -20 °C (6.0 en 9.0) kan de batterij weer laden. Daaronder kan de batterij na ontladen niet meer bijladen en gaat in onderspanning (p. 89).

De nieuwere Engelse handleiding voegt toe: **niet in een woonruimte** zoals slaapkamer, woonkamer of kinderkamer, en niet in een gang of onder een trap, tenzij afgesloten (User Manual EN p. 93). Die regel staat niet in de Nederlandse V1.8.

### Vrije ruimte en kabellengtes

De vrije ruimte rond het systeem staat alleen als tekening in de handleiding en in de QIG (met maten van 300 tot 600 mm, QIG p. 1). Kabellengtes staan wel in tekst (p. 93-94): parallelkabel tussen omvormers maximaal 5 m (CAT5E/6E) of 10 m (CAT7E), CT-kabel maximaal 30 m, RS485 naar de meter maximaal 100 m.

### Montage (p. 97-101)

1. Boor niet in leidingen en scherm de batterijen af met karton tegen boorstof.
2. De omvormer komt altijd **boven** de batterijen, nooit eronder.
3. Voetstuk op de vloer: 50 tot 60 mm van de muur, waterpas met de stelvoetjes, kantelbeveiliging aan de muur. Of het voetstuk aan een muurbeugel; controleer dan het draagvermogen van de muur.
4. Haal de beschermkap van de blinde stekker voordat je stapelt. Gebruik hijsgereedschap bij meer dan 3 modules. Hijsbanden moeten 185 kg (kleine) of 240 kg (grote modules) dragen (p. 96).
5. Schroef de modules aan elkaar en zet de bovenste module met een kantelbeugel aan de muur vast.
6. Omvormer bovenop zetten en vastschroeven. Bij een gesplitste opstelling (tweede stapel) komt er een afdekkap op de batterij.

De STS hangt op een achterplaat aan de muur (p. 101-102). Aanhaalmomenten staan alleen in de tekeningen van de QIG (bijvoorbeeld M5 4 N·m en M10 20 N·m). Welke waarde bij welke schroef hoort, zie je alleen in de tekening.`
    },
    {
      id: 'aansluiting',
      kop: 'Elektrische aansluiting en beveiliging',
      tekst: `### Beveiliging in de groepenkast (Gebruikershandleiding p. 139-142)

| Model | Automaat ON-GRID en BACK-UP, gedeeltelijke back-up | Volledige back-up |
|---|---|---|
| 3K en 3.6K | 20 A | 63 A |
| 5K | 32 A | 63 A |
| 6K | 40 A | 63 A |
| 8K | 50 A | 63 A |
| 9.999K en 10K | 63 A | 63 A |

Geldt voor EHA en BHA. Elke omvormer een eigen automaat, nooit een verbruiker tussen omvormer en die automaat (p. 139). Gebruik je de BACK-UP-poort niet, dan kies je de netautomaat op de maximale netstroom (p. 141).

**Aardlek:** de handleiding adviseert aan de AC-uitgang een **type A met 300 mA** (onder 30 kVA) en zegt dat je volgens de lokale regels mag kiezen (p. 142). De omvormer heeft ook een eigen lekstroombewaking (RCMU, p. 154). In een parallelsysteem geen RCD per omvormer, maar centraal bij het netpunt (p. 111).

!!! info Algemene vakkennis: 300 mA is geen persoonsbeveiliging
300 mA beschermt tegen brand, niet tegen een schok. De eindgroepen in de woning, ook die achter de BACK-UP-poort, hebben in Nederland gewoon hun eigen 30 mA-aardlekbeveiliging nodig. Welk type bij omvormers past, zie de les over aardlektypes.
!!!

### Kabels (p. 142-147)

- **AC (GRID en BACK-UP):** koper, 4-16 mm² (3K, 3.6K), 6-16 mm² (5K, 6K) en 10-16 mm² (8K tot 10K). De QIG noemt voor 8K 6-16 mm² (QIG p. 2), de handleiding 10-16 mm². Kies bij twijfel de zwaarste en altijd passend bij de automaat.
- **Aarde kast:** koper 5,2 tot 6 mm². **PV (alleen EHA):** PV-kabel 4-6 mm².
- **Communicatie:** afgeschermde twisted pair 0,2-0,4 mm² voor meter, EMS en laadpaal; CAT5E of beter voor CT en parallel.

### Volgorde van aansluiten

1. **Eerst de aarde** van de omvormerkast, bij demontage als laatste. De kastaarde vervangt de PE in de AC-kabel niet (p. 148).
2. **PV (alleen EHA):** polariteit en spanning meten met een multimeter, nooit een string op twee omvormers (p. 149-150).
3. **Batterij:** bij een gestapelde opstelling via de blinde stekker. Bij een tweede stapel komen er uitbreidingskabels en een eigen aarde (p. 148, 151-152).
4. **AC:** BACK-UP en GRID niet verwisselen. Hexagonale perstang gebruiken (p. 154).
5. **CT en meter:** stroomrichting van huis naar net, anders volgt een foutmelding (p. 119, 161).
6. **Communicatie:** poorten voor parallel, CT, RCR/DRED (netbeheerderssignalen), meter, noodstop/NS-beveiliging, droge contacten en EMS/laadpaal (p. 163-165).

### N en PE in back-up

Hoe N en PE aan de BACK-UP-kant lopen verschilt per land (p. 107). De handleiding heeft aparte schema's voor Australië en voor overige regio's. Voor Europa zijn er schema's waarin N en PE apart in de verdeelkast lopen (p. 111-115). De N van net- en back-upzijde moeten verbonden blijven, anders werkt off-grid niet goed (p. 107). Of N en PE in off-grid worden doorverbonden, stel je in de app in onder "Relaischakelaar voor N en PE van back-upvoeding" (p. 113).

Een **handmatige omschakelaar** (2-polig in Europa, niet meegeleverd) laat het huis bij onderhoud op het net draaien. De gemeenschappelijke contacten moeten aan de BACK-UP-kant zitten, anders staat er bij een storing spanning op de netzijde (p. 116-118). Omschakelaar en STS niet allebei plaatsen (p. 120).`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling en app',
      tekst: `### Controle vooraf (Gebruikershandleiding p. 169)

Vast gemonteerd, kabels goed vast, ongebruikte doorvoeren afgedicht, netspanning en frequentie binnen de grenzen.

### Inschakelen zonder STS (p. 170-171)

1. Batterijschakelaar(s) aan en kort op de multifunctionele knop van een module drukken. Een druk start alle modules.
2. DC-schakelaar van de omvormer aan (alleen EHA).
3. Eventueel de PV-automaat aan.
4. ON-GRID-automaat aan.
5. Handmatige omschakelaar op BACK-UP, dan de BACK-UP-automaat aan.

Binnen 15 minuten moeten omvormer en batterij met elkaar communiceren, anders schakelt de batterij zichzelf af (p. 170). Met STS is de volgorde: batterij, DC, PV, dan in de STS GRID, INV, BACK-UP en SMART-PORT (p. 173-174).

**Zwarte start:** geen zon en geen net? Batterijschakelaars aan, 15 seconden wachten en 2 seconden op de knop drukken. De batterij start dan de omvormer in off-grid (p. 174).

### Lampjes (p. 175-183)

- **Omvormer:** een blauwpaars ademlicht voor de status, rood knipperen bij een storing, en vier SOC-segmenten van 25% (vast is laden, knipperen is ontladen).
- **Batterij:** groen vast is in bedrijf, 1 keer per seconde knipperen is standby, 3 keer per seconde is communicatieverlies met de omvormer, rood is een storing.
- **WiFi/LAN Kit-20:** 1 keer knipperen wacht op Bluetooth, 2 keer geen router, 4 keer geen server. Dubbelklik op Reload zet Bluetooth 5 minuten aan.

### App

Instellen gaat via de **SEMS+ App** (Android 7.0 of hoger, iOS 15.1 of hoger) of via **SEMS+ WEB** (p. 184-185). De QIG noemt daarnaast de SolarGo-app (QIG p. 2). De menu's zelf staan in de aparte SEMS+-handleiding, die niet in deze set zit. Een paar instellingen noemt de handleiding wel:

- Netcode: de lijst bevat voor Nederland NL-16/20A en NL-A tot en met NL-D (p. 345). Welke je kiest, staat er niet bij.
- Bij volledige back-up zonder externe meter: metertype "Ingebouwde CT, extern geen meter geen CT" (p. 27).
- Terugleverbeperking, parallel master en slave, DRED/RCR en noodstop pas aanzetten als ze zijn aangesloten, anders gaat de omvormer niet aan het net (p. 120, 162).
- Meter/CT hulpdetectie om te controleren of meter en CT goed zitten (p. 341).`
    },
    {
      id: 'storingen',
      kop: 'Storingen, uitschakelen en onderhoud',
      tekst: `### Foutcodes

Alle storingen staan in de SEMS+ App onder Energiecentrale, Alarm, met oorzaak en oplossing (Gebruikershandleiding p. 195). De handleiding heeft een complete tabel: omvormercodes F01 tot F40 (p. 198-215), F41 tot F80 (p. 216-227), F81 tot F121 (p. 228-238), F122 tot F163 (p. 239-251), storingen zonder code (p. 252-273) en batterijstoringen (p. 274-298). Een paar die je als installateur snel tegenkomt:

| Code | Wat | Eerst controleren |
|---|---|---|
| F01 | Netuitval | AC-automaat of AC-kabel onderbroken (p. 198) |
| F12 tot F14 | Lekstroom 30, 60 of 150 mA | Isolatie van de PV-strings naar aarde (p. 205) |
| F18 | Lage isolatieweerstand | Kortsluiting PV of batterijpoort naar aarde, vochtige kabels (p. 207) |
| F19 | Aarding abnormaal | PE van de omvormer niet aangesloten (p. 208) |
| F140 | Communicatieverlies meter | Meterkabel en aansluiting (p. 246) |
| F143 en F144 | CT niet aangesloten of omgekeerd | CT-bedrading en richting (p. 246) |
| F145 | PE-verlies | PE controleren (p. 246) |

De handleiding meldt zelf dat de lijst per model kan verschillen en dat de app leidend is (p. 195). De oudere Nederlandse probleemoplossingsgids (2023) helpt bij klachten zonder foutcode: vreemd laden of ontladen komt vaak door een **verkeerd georiënteerde CT** of een meter op een andere fase (Probleemoplossingsgids p. 20). Die gids gaat over oudere omvormers en apps (SolarGo, SEMS Portal), dus de lampjes en menu's kunnen afwijken.

### Uitschakelen (p. 187-192)

1. BACK-UP-automaat uit.
2. ON-GRID-automaat uit.
3. Multifunctionele knop van een module 5 seconden indrukken (alle modules gaan uit), dan de batterijschakelaar op OFF.
4. Eventueel de PV-automaat uit.
5. DC-schakelaar uit. Zet de handmatige omschakelaar op net, zodat het huis stroom houdt.

Met STS staat er een eigen volgorde, en tijdens onderhoud aan de omvormer moet in de STS **QF1 INV** open zijn (p. 187, 191-192).

### Periodiek onderhoud (p. 193-195)

- Koelvinnen en luchtopeningen schoonhouden: elk half jaar.
- Bevestiging, behuizing en elektrische verbindingen: elk half jaar tot jaarlijks.
- Afdichting van de doorvoeren: jaarlijks.
- Batterij die lang stilstaat of niet vol wordt: regelmatig laden, de tabel noemt eens per 15 dagen.

**Opslag:** batterijen op 30 tot 40% SOC, bij -20 tot 35 °C binnen 12 maanden onderhoudsladen (p. 86-87).`
    },
    {
      id: 'wat-niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat',
      tekst: `- De **menu's van de SEMS+ App**: de handleiding verwijst naar een aparte app-handleiding.
- **Welke Nederlandse netcode** (NL-16/20A of NL-A tot en met NL-D) bij welke aansluiting hoort.
- **Hoe je een GoodWe-laadpaal instelt**: alleen dat het kan en via welke poort.
- **Wat een "STS VERSION"-omvormer is** en hoe je die aan de typecode herkent. Alleen die versie past op de STS (p. 31).
- De **vrije ruimte rond het systeem** en de **aanhaalmomenten** staan alleen in tekeningen.
- De **eisen van de Nederlandse netbeheerder** en NEN 1010, zoals de 30 mA-aardlekbeveiliging op eindgroepen. De handleiding verwijst alleen naar lokale regels.
- **Hoe het laad- en ontlaadvermogen optelt** bij meerdere batterijmodules.

### Tegenstrijdigheden om te onthouden

- Blussen met water: aanbevolen in de tekst (p. 20), verboden op het etiket (p. 23).
- AC-kabel 8 kW: 10-16 mm² in de handleiding (p. 144), 6-16 mm² in de QIG.
- Het hoofdstuk storingen heet in de Nederlandse versie per vergissing "AC SPD-storing" (p. 195).
- Het hybride datasheet noemt een batterijverwarming als standaard, de handleiding noemt de verwarmingsfolie optioneel (p. 32).`
    }
  ],

  handleidingRefs: [
    { doc: 'geb', hoofdstuk: 'Voorwoord, toepasselijke producten', paginas: '3-4', onderwerp: 'Alle modellen: omvormers EHA en BHA, batterijen, STS, meters en sticks' },
    { doc: 'geb', hoofdstuk: '1 Veiligheidsinstructies, 1.3 Systeemveiligheid', paginas: '12-21', onderwerp: 'Personeel, PV, omvormer, batterij, noodgevallen en brand' },
    { doc: 'geb', hoofdstuk: '1.4 Veiligheidssymbolen', paginas: '21-23', onderwerp: 'Etiketten, waaronder 5 minuten ontlaadtijd' },
    { doc: 'geb', hoofdstuk: '2.1 Systeemoverzicht', paginas: '26-28', onderwerp: 'Waarschuwingen, off-grid SOC, belastbaarheid off-grid en STS' },
    { doc: 'geb', hoofdstuk: '2.1.1 Algemeen scenario', paginas: '28-34', onderwerp: 'Schema\'s, laadpaal, parallel, batterijcombinaties en meters' },
    { doc: 'geb', hoofdstuk: '2.1.2 Microgrid en 2.1.3 Koppelingsscenario', paginas: '34-48', onderwerp: 'Bestaande netomvormer aan BACK-UP of GRID' },
    { doc: 'geb', hoofdstuk: '2.2 Productbeschrijving', paginas: '48-60', onderwerp: 'Batterijconfiguratie, poorten omvormer, batterijknop, STS, meter en stick' },
    { doc: 'geb', hoofdstuk: '2.4 Systeemmodi en 2.5 Functiekenmerken', paginas: '61-73', onderwerp: 'Zes werkmodi, AFCI, belastingsbesturing en snelle uitschakeling' },
    { doc: 'geb', hoofdstuk: '3.3 Opslag van het apparaat', paginas: '86-88', onderwerp: 'Opslag en onderhoudsladen van batterijen' },
    { doc: 'geb', hoofdstuk: '4 Installatie', paginas: '89-103', onderwerp: 'Omgeving, kabellengtes, gereedschap, hijsen en stapelen' },
    { doc: 'geb', hoofdstuk: '5.1 Elektrisch bedradingsschema', paginas: '106-115', onderwerp: 'Volledige en gedeeltelijke back-up, N en PE per regio' },
    { doc: 'geb', hoofdstuk: '5.3 Gedetailleerde systeembedradingsschema\'s', paginas: '116-138', onderwerp: 'Handmatige omschakelaar, generator, parallel, meters' },
    { doc: 'geb', hoofdstuk: '5.4 Voorbereiding van materialen', paginas: '138-147', onderwerp: 'Automaten, aardlek en kabeldoorsneden' },
    { doc: 'geb', hoofdstuk: '5.5 tot en met 5.8 Aarde, PV, batterij en AC', paginas: '147-158', onderwerp: 'Aansluitvolgorde en waarschuwingen per kabel' },
    { doc: 'geb', hoofdstuk: '5.9 Meter en 5.10 Communicatie', paginas: '158-167', onderwerp: 'CT-richting, poorten COM, DRED/RCR, droge contacten, EMS/laadpaal' },
    { doc: 'geb', hoofdstuk: '7 Systeemproefbedrijf', paginas: '169-183', onderwerp: 'Controle, inschakelen, zwarte start en lampjes' },
    { doc: 'geb', hoofdstuk: '8 SEMS+ App en SEMS+ WEB', paginas: '184-186', onderwerp: 'App downloaden en monitoring' },
    { doc: 'geb', hoofdstuk: '9.1 Systeem uitschakelen tot en met 9.4 Regelmatig onderhoud', paginas: '187-195', onderwerp: 'Uitschakelvolgorde, bypass STS en onderhoudstabel' },
    { doc: 'geb', hoofdstuk: '9.5 Storingen', paginas: '195-298', onderwerp: 'Foutcodes F01-F163, storingen zonder code en batterijstoringen' },
    { doc: 'geb', hoofdstuk: '10 Technische parameters', paginas: '299-340', onderwerp: 'Gegevens omvormer, batterij, STS, meter en stick' },
    { doc: 'geb', hoofdstuk: '11.1 FAQ en 11.4 Landen met veiligheidsvoorschriften', paginas: '341-350', onderwerp: 'Meter/CT-detectie, firmware, netcodes (NL op p. 345)' },
    { doc: 'um', hoofdstuk: '2.1.4 Scenario with EzManager3000', paginas: '48-52', onderwerp: 'Systeem met de GoodWe-dataverzamelaar (alleen in de Engelse versie)' },
    { doc: 'um', hoofdstuk: '4.1.1 Installation Environment Requirements', paginas: '92-94', onderwerp: 'Niet in woonruimtes (niet in de Nederlandse V1.8)' },
    { doc: 'qig', hoofdstuk: 'Installatie en elektrische aansluiting', paginas: '1-2', onderwerp: 'Maten, vrije ruimte, aanhaalmomenten en kabeldoorsneden in tekeningen' },
    { doc: 'ds', hoofdstuk: 'ESA Series Power Module en Battery Module', paginas: '1-3', onderwerp: 'Specificaties hybride omvormer en batterijmodules' },
    { doc: 'dsac', hoofdstuk: 'ESA-reeks AC-gekoppeld', paginas: '1-3', onderwerp: 'Specificaties AC-gekoppelde omvormer' },
    { doc: 'lynx', hoofdstuk: 'Lynx D G2-reeks', paginas: '1-2', onderwerp: 'Batterijmodules, spanningsbereik 1-fase en 3-fase' },
    { doc: 'veil', hoofdstuk: 'Meerlaagse bescherming', paginas: '1-4', onderwerp: 'Overdrukventiel, temperatuurbewaking, BMS en polariteitsdetectie' },
    { doc: 'ts', hoofdstuk: '5 Probleemoplossing zonder alarmen of indicatoren', paginas: '20-21', onderwerp: 'Vreemd laden of ontladen, ingebrande klemmen, back-up uit' }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm10l03', 'm01l03', 'm02l05', 'm03l04', 'm03l05', 'm06l03'],

  zieOok: ['goodwe-esa-5-30kw', 'goodwe-esa-athena', 'goodwe-esa-5kw-10-8kwh', 'sigenergy-sigenstor-home', 'sigenergy-gateway']
});
