/* ==========================================================================
   content/kennis/goodwe/esa-5-30kw.js
   Samenvatting van de documentatie van de GoodWe ESA-reeks 5-30kW (3-fase,
   hybride ETA en AC-gekoppeld BTA) met Lynx D G2-batterijmodules.
   Paginanummers verwijzen naar de positie in de PDF (1 = eerste pagina).
   ========================================================================== */

KENNIS.addProduct({
  id: 'goodwe-esa-5-30kw',
  merk: 'goodwe',
  slug: 'esa-5-30kw',
  naam: 'GoodWe ESA 5-30kW (3-fase, hybride en AC-gekoppeld)',
  rol: 'systeem',
  toepassingen: ['thuisbatterij', 'zonnepanelen', 'laadpaal'],
  korteOmschrijving: 'Het driefasige alles-in-een thuisbatterijsysteem van GoodWe: een omvormer van 5 tot 30 kW die op een stapel Lynx D G2-batterijmodules wordt geklikt, met ingebouwde back-uppoort, ingebouwde meter met CT en optioneel een statische schakelkast (STS). Leverbaar als hybride uitvoering met zonnepaneelingangen (ETA) en als AC-gekoppelde uitvoering zonder zonnepaneelingangen (BTA).',

  varianten: {
    kop: ['Onderdeel', 'Uitvoering', 'Vermogen of capaciteit', 'Bijzonderheid', 'Waar in de bronnen'],
    rijen: [
      ['GW5K / GW6K / GW8K-ETA-G20', 'Hybride omvormer, 3-fase', '5 / 6 / 8 kW', '3 MPPT\'s, DC-schakelaar, 1 ventilator', 'User Manual p. 4, 57-58; Datasheet p. 2'],
      ['GW9.999K / GW10K / GW12K / GW15K / GW20K-ETA-G20', 'Hybride omvormer, 3-fase', '9,999 tot 20 kW', '4 MPPT\'s, DC-schakelaar, 1 ventilator', 'User Manual p. 4, 57-58; Datasheet p. 2'],
      ['GW25K / GW29.999K / GW30K-ETA-G20', 'Hybride omvormer, 3-fase', '25 / 29,999 / 30 kW', '4 MPPT\'s (twee met 2 strings), 3 ventilatoren', 'User Manual p. 4, 57-58; Datasheet p. 2'],
      ['GW5K tot en met GW30K-BTA-G20 (zelfde vermogensstappen)', 'AC-gekoppelde omvormer, 3-fase', '5 tot 30 kW', 'Geen PV-ingang en geen DC-schakelaar', 'User Manual p. 4, 57; AC-datasheet p. 2'],
      ['GW5.1-BAT-D-G20 / G21 en GW8.3-BAT-D-G20 / G21', 'Batterijmodule Lynx D G2', '5,12 en 8,32 kWh', 'G21 laadt pas vanaf 2 °C', 'User Manual p. 4, 97; Datasheet p. 3'],
      ['GW6.0-BAT-D-G20 en GW9.0-BAT-D-G20', 'Batterijmodule Lynx D G2', '6,0 en 9,0 kWh', 'Laadt vanaf -20 °C', 'User Manual p. 4-5, 97; Datasheet p. 3'],
      ['GW30K-STS-G10 / GW60K-STS-G10', 'Statische schakelkast (STS), optioneel', '30 / 60 kW aan de netzijde', 'Voor generator, SMART-PORT en bypass', 'User Manual p. 5, 30'],
      ['Ingebouwde meter met CT, GMK330, GM330', 'Meting aan het aansluitpunt', 'CT 120 A:40 mA (GM330: nA/5A)', 'GMK110 hoort niet bij deze reeks', 'User Manual p. 34-35'],
      ['WiFi/LAN Kit-20, 4G Kit-G20', 'Communicatiestick', 'Wifi, LAN en Bluetooth of 4G en Bluetooth', 'Kit-20 verplicht bij parallelschakeling', 'User Manual p. 5, 35-36']
    ]
  },

  documenten: [
    { id: 'um', titel: 'GW_ESA 5-30kW_User Manual-EN (V1.7, 2026-10-23)', soort: 'Gebruikershandleiding (Engels)', paginas: 355 },
    { id: 'qig', titel: 'GW_ESA 5-30kW_Quick Installation Guide-POLY', soort: 'Beknopte installatiegids', paginas: 2 },
    { id: 'ds', titel: 'GW_ESA 5-30kW Hybrid_Datasheet_EMEA-EN', soort: 'Datasheet', paginas: 4 },
    { id: 'dsac', titel: 'GW_ESA 5-30kW AC-Coupled_Datasheet_EMEA-NL', soort: 'Datasheet', paginas: 4 },
    { id: 'lynx', titel: 'GW_Lynx D G2_Datasheet_EU-NL', soort: 'Datasheet batterij', paginas: 2 },
    { id: 'veil', titel: 'Explore Battery Safety of GoodWe Lynx D_NL', soort: 'Brochure veiligheid', paginas: 4 },
    { id: 'ts', titel: 'GW_ESS Troubleshooting Guide-NL (V1.0, 2023)', soort: 'Probleemoplossingsgids', paginas: 37 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `De ESA 5-30kW is de **driefasige** versie van de GoodWe-alles-in-een thuisbatterij. Het idee is hetzelfde als bij de 1-fase ESA 3-10kW: onderop een voetstuk, daarop een stapel batterijmodules en bovenop de omvormer. De onderdelen klikken via een **blinde stekker** (een stekkerverbinding die vanzelf contact maakt als je de modules goed op elkaar zet) in elkaar (User Manual p. 52).

### De onderdelen

- **Omvormer (ETA of BTA):** 3-fase, 230/400 V, met GRID-poort naar het net en BACK-UP-poort voor noodstroom (p. 56-57).
- **Batterijmodules Lynx D G2:** dezelfde LFP-modules (lithium-ijzerfosfaat) als bij de 1-fase reeks, 5,1 / 6,0 / 8,3 / 9,0 kWh. De omvormer werkt alleen met deze GoodWe-batterijen (p. 27).
- **Ingebouwde meter met CT:** de omvormer meet zelf aan het aansluitpunt met meegeleverde stroomtransformatoren (CT's). Een losse GMK330 of GM330 is optioneel (p. 34-35).
- **Communicatiestick:** WiFi/LAN Kit-20 of 4G Kit-G20 (p. 35-36).
- **STS (statische schakelkast):** optioneel, voor generator, een SMART-PORT en een handbediende bypass (p. 30, 34).
- **EzManager3000:** optionele dataverzamelaar die meerdere apparaten centraal aanstuurt (p. 47-51).

!!! kern Welke handleiding bij welke vraag
Voor deze reeks is er **alleen een Engelse gebruikershandleiding** (V1.7, oktober 2026, 355 pagina's). Daarin staat alles: veiligheid, scenario's, montage, bedrading, inbedrijfstelling, foutcodes en technische gegevens. De beknopte installatiegids (QIG) bestaat vooral uit tekeningen. Veel algemene stukken (batterij, werkmodi, lampjes) lijken sterk op de Nederlandse handleiding van de ESA 3-10kW, maar het is een ander product. Gebruik die alleen om een begrip te snappen, niet voor getallen.
!!!

!!! info Als je Sigenergy al kent
SigenStor Home bestaat ook in een 3-fase uitvoering van 5 tot 30 kW, dus qua vermogen zijn ze vergelijkbaar. Het grote verschil: bij Sigenergy heb je voor noodstroom een **aparte Sigen Gateway** nodig, bij de ESA zit de **BACK-UP-poort en het netrelais in de omvormer**. Sigenergy hangt 1 tot 6 batterijmodules aan een Energy Controller, de ESA maximaal 12. De batterijspanning ligt bij de ESA op 700 tot 950 V, bij de 3-fase SigenStor op 600 tot 900 V. Sigenergy noemt 0 ms omschakeltijd (met gateway), GoodWe minder dan 4 ms (Datasheet p. 2). Sigenergy werkt met de mySigen-app, GoodWe met SEMS+. Sigenergy noemt ABC-poeder als blusmiddel, GoodWe verbiedt ABC-poeder (p. 21).
!!!

### Begrippen vooraf

**MPPT:** de regeling die per groep zonnepanelen het punt met het hoogste vermogen zoekt. **SOC:** laadtoestand van de batterij in procenten. **BMS:** het batterijmanagementsysteem in elke module. **Off-grid:** werken zonder openbaar net, bijvoorbeeld tijdens een storing.`
    },
    {
      id: 'hybride-of-ac',
      kop: 'Hybride of AC-gekoppeld, en welke reeks',
      tekst: `De typecode vertelt welke omvormer je hebt (User Manual p. 4, 57).

| Kenmerk | Hybride (ETA) | AC-gekoppeld (BTA) |
|---|---|---|
| Zonnepanelen direct aansluiten | Ja, 3 of 4 MPPT\'s | Nee |
| DC-schakelaar | Ja | Nee |
| Zonnestroom naar de batterij | Rechtstreeks via de DC-kant | Via de AC-kant, van het net of een bestaande omvormer |
| Max. PV-vermogen | 10 tot 60 kW (tot 200% van het AC-vermogen) | geen PV |
| AFCI (vlamboogdetectie) | Optioneel volgens datasheet | niet van toepassing |
| Bron | Datasheet p. 1-2 | AC-datasheet p. 1-2 |

Het laad- en ontlaadvermogen van de batterij is bij beide gelijk: laden tot het nominale vermogen, ontladen tot 1,1 keer (bijvoorbeeld 30 en 33 kW bij het 30 kW-model, Datasheet p. 2, AC-datasheet p. 2). Dat is anders dan bij de 1-fase hybride, die sneller uit de zon kan laden dan de AC-versie.

### Hoe je kiest

- **Nieuwe installatie met panelen en batterij:** ETA. Panelen op de PV-ingangen.
- **Er ligt al een PV-installatie met eigen netomvormer:** BTA. De bestaande omvormer komt aan de GRID-zijde (koppelingsscenario) of aan de BACK-UP-poort (microgrid).
- **Vermogen:** de reeks loopt van 5 tot 30 kW. De netaansluiting moet het aankunnen: de omvormer laat bij aanwezig net tot 63 A (5 tot 20 kW) of 80 A (25 tot 30 kW) per fase door naar de back-up (Datasheet p. 2).

### Verschil met de ESA 3-10kW

| Kenmerk | ESA 3-10kW | ESA 5-30kW |
|---|---|---|
| Netaansluiting | 1-fase (L, N, PE) | 3-fase (L1, L2, L3, N, PE) |
| Vermogen | 3 tot 10 kW | 5 tot 30 kW |
| Batterijspanning | 350 tot 550 V | 700 tot 950 V |
| Max. PV-ingangsspanning | 600 V | 1000 V |
| Capaciteit | 5 tot 108 kWh, max. 12 modules | 5 tot 108 kWh, max. 12 modules |
| Koeling | Natuurlijk, stil | Ventilatoren |
| Gewicht omvormer (hybride) | 24 tot 26 kg | 34 tot 38 kg |
| Nederlandse handleiding | Ja | Nee |

### Batterijcapaciteit

Het systeem ondersteunt 5 tot 108 kWh (p. 34). Op de vloer tegen de muur passen 6 modules op een stapel, **vrijstaand** (met de afstandsbeugel, niet tegen de muur) maximaal 4. Aan een muurbeugel 3 kleine (5.1 en 6.0) of 2 grote (8.3 en 9.0) modules. Maximaal 3 groepen en 12 modules in totaal (p. 53-54, 105). Gemengde capaciteiten mogen, maar dan werkt de batterijverwarming niet (p. 34).`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Hoe het werkt en hoe het in de installatie past',
      tekst: `### GRID en BACK-UP

De GRID-poort gaat naar het net via een ingebouwd relais, dat in off-grid opengaat. De BACK-UP-poort voedt de groepen die bij een storing door moeten werken en staat onder spanning zolang de omvormer aan is (User Manual p. 114).

- **Volledige back-up:** het hele huis hangt aan BACK-UP. Bij een storing moet de belasting onder **1,1 keer het nominale vermogen** blijven, anders schakelt de omvormer af (p. 114). Een extra meter of CT is dan niet nodig: kies in de app metertype "Built-in CT, no external meter or CT" (p. 28).
- **Gedeeltelijke back-up:** alleen de belangrijke groepen aan BACK-UP.

**Ongelijke belasting per fase:** GRID en BACK-UP mogen per fase verschillend belast worden. Het maximum per fase loopt van 2,5 kW (5 kW-model) tot 11 kW (25 tot 30 kW) (p. 78-79). In off-grid zijn motoren en compressoren beperkt: per eenfasig apparaat 1,1 kVA (5 tot 20 kW) of 2,2 kVA (25 tot 30 kW), per driefasig apparaat 3,3 of 6,6 kVA (p. 29-30).

### Drie scenario\'s en EzManager

1. **Algemeen:** alleen de ESA, eventueel met STS (p. 30-36).
2. **Microgrid:** een netomvormer aan BACK-UP. Geen generator en geen parallelschakeling in dit scenario (p. 36-41, 137).
3. **Koppelingsscenario:** een netomvormer aan GRID (p. 41-47).
4. **Met EzManager3000:** centrale aansturing van omvormers en meters via RS485. Gegevens van een netomvormer van een ander merk kan EzManager niet uitlezen (p. 47-51).

### Generator, laadpaal en parallel

- **Generator:** wordt ondersteund, ook laden uit de generator. Gebruik dan een GMK330 of GM330 (p. 33). Zonder STS op de GRID-poort, met STS op de SMART-PORT (p. 126-127).
- **Laadpaal:** een **GoodWe AC-laadpaal** kan worden aangesloten, maar **alleen bij een enkele omvormer**, niet bij parallelschakeling (p. 33). De verbinding loopt via de EMS/EV Charger-poort (RS485) (p. 157, 176). Instellen van de laadpaal staat niet in deze handleiding.
- **Parallel:** tot 10 omvormers, ook van verschillend vermogen; gebruik dan het grootste als master. Bij meer dan 6: klantenservice bellen. Elke omvormer een WiFi/LAN Kit-20 en gelijke softwareversies (p. 33).
- **Twee fasen, drie draden:** alleen bij een enkele omvormer, L3 niet aansluiten (p. 147-148). Dat netsoort kom je in Nederland normaal niet tegen.

### Werkmodi

Dezelfde zes als bij de 1-fase reeks: zelfverbruik, back-up, TOU (tijdsafhankelijk laden en ontladen), slim laden (pieken boven de terugleverlimiet in de batterij), vraagbeheer en off-grid (p. 66-76). Droge contacten kunnen verbruikers en een **SG Ready-warmtepomp** schakelen (p. 172-177).`
    },
    {
      id: 'specificaties',
      kop: 'Specificaties in het kort',
      tekst: `Waarden uit de datasheets (Datasheet p. 2, AC-datasheet p. 2). Controleer kritische getallen in de PDF.

| Waarde | Hybride ETA | AC-gekoppeld BTA |
|---|---|---|
| Nominaal AC-vermogen | 5 tot 30 kW | 5 tot 30 kW |
| Netspanning | 230/400 V, 3L/N/PE | 230/400 V, 3L/N/PE |
| Max. stroom van het net (bypass) | 63 A (5-20 kW), 80 A (25-30 kW) | idem |
| Back-up in off-grid | 1,1 keer nominaal, kort tot 2 keer (10 s, max. 45 kVA) | idem |
| Omschakeltijd naar back-up | minder dan 4 ms | minder dan 4 ms |
| Max. PV-vermogen | 10 tot 60 kW | geen PV |
| Max. PV-ingangsspanning | 1000 V | geen PV |
| MPPT-bereik | 120 tot 950 V | geen PV |
| Max. stroom per MPPT | 21 A (bij 25-30 kW twee MPPT\'s van 42 A) | geen PV |
| Batterijspanning | 700 tot 950 V | 700 tot 950 V |
| Max. rendement | 98,0 tot 98,2% | 98,0 tot 98,2% |
| Beschermingsklasse | IP66 | IP66 |
| Bedrijfstemperatuur | -35 tot 60 °C | -35 tot 60 °C |
| Gewicht omvormer | 34 kg (tot 20 kW), 38 kg (25-30 kW) | 34 en 38 kg |
| Afmetingen omvormer | 800 x 340 x 270 mm | 800 x 340 x 270 mm |

### Batterijmodules (Datasheet p. 3, Lynx D G2-datasheet p. 2)

| Waarde | 5.1 | 8.3 | 6.0 | 9.0 |
|---|---|---|---|---|
| Nominaal / bruikbaar | 5,12 / 5,0 kWh | 8,32 / 8,0 kWh | 6,0 / 5,8 kWh | 9,0 / 8,7 kWh |
| Max. laad- en ontlaadvermogen | 5,0 kW | 8,0 kW | 3,0 kW | 4,5 kW |
| Gewicht | 57,5 kg | 79 kg | 61 kg | 77 kg |

Alle modules: 800 x 326 x 270 mm, IP66, ingebouwde verwarming en **aerosolblusser** (een ingebouwd blussysteem dat bij brand een blusnevel vrijgeeft). Hoe het vermogen optelt bij meerdere modules, staat niet in het datasheet.`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid en let op',
      tekst: `!!! gevaar Spanningsloos werken
Voor elk aansluitwerk alle voorliggende schakelaars uit. Na uitschakelen ontladen interne onderdelen vertraagd: het etiket noemt **5 minuten wachten** (User Manual p. 23). De BACK-UP-poort staat onder spanning zolang de omvormer aan is (p. 114). PV-spanning kan bij deze reeks tot 1000 V gaan; de handleiding noemt in de gereedschapslijst een multimeter met een bereik tot 1000 V (p. 102).
!!!

!!! info DC-zijde en batterij
De batterij werkt op 700 tot 950 V gelijkspanning. Uit de cursus weet je: panelen leveren spanning zolang er licht is en een batterij blijft een bron. Volg de uitschakelvolgorde en meet na.
!!!

!!! gevaar Brand en blussen
Boven 150 °C bestaat brandgevaar en kunnen giftige gassen vrijkomen. De handleiding vraagt om een blusser met **CO2 of water** en verbiedt **ABC-poeder** (p. 21). In de symbolentabel staat tegelijk een etiket "niet met water blussen" (p. 23). Die twee spreken elkaar tegen: volg het etiket en vraag de leverancier.
!!!

- Niet geschikt voor levensreddende medische apparatuur (p. 27).
- Off-grid de SOC niet onder 30% laten zakken; elk half jaar volledig laden en ontladen om de SOC te kalibreren (p. 27-28).
- In een microgrid moet de open klemspanning van de PV-strings onder 0,85 keer de max. PV-spanning blijven (p. 27).
- PV-strings mogen niet geaard zijn; isolatieweerstand minimaal max. ingangsspanning gedeeld door 30 mA (p. 161).
- Volgens de veiligheidsbrochure hebben de Lynx D-modules een overdrukventiel, temperatuursensoren, thermische scheiding tussen batterij- en DC/DC-deel en polariteitsdetectie (Veiligheidsbrochure p. 1-4).`
    },
    {
      id: 'plaatsing',
      kop: 'Plaatsing en montage',
      tekst: `### Omgeving (User Manual p. 97-99)

- Binnen en buiten (IP66), bij voorkeur beschut tegen zon, regen en sneeuw. De meter hoort binnen.
- **Niet in woonruimtes** zoals slaapkamer, woonkamer of kinderkamer, en niet in een gang of onder een trap, tenzij afgesloten. Alleen toegankelijk voor bevoegden (p. 98).
- De ventilatoren maken geluid: houd rekening met geluidsgevoelige plekken (p. 98).
- Niet in de koude luchtstroom van een airco (condens), niet binnen 500 m van de kust zonder overleg.
- Batterij laden lukt boven -18 °C (5.1 en 8.3 G20), 2 °C (G21) of -20 °C (6.0 en 9.0) (p. 97).

### Kabellengtes (p. 100-101)

Parallelkabel tussen omvormers maximaal 5 m (CAT5E/6E) of 10 m (CAT7E). CT-kabel maximaal 30 m, RS485 naar de meter maximaal 100 m. De vrije ruimte rondom staat alleen als tekening.

### Montage (p. 103-108)

1. Transport met een hijsband (185 of 240 kg draagvermogen) of een transportwagen van minimaal 300 kg met 2 m hefhoogte (p. 103).
2. De omvormer komt altijd **boven** de batterijen (p. 104).
3. **Tegen de muur:** voetstuk 50 tot 60 mm van de muur, waterpas stellen, kantelbeugel aan de muur (p. 106).
4. **Vrijstaand:** de afstandsbeugel aan het voetstuk en met pluggen in de vloer. Maximaal 4 modules (p. 105, 107).
5. Beschermkappen van de blinde stekkers halen, modules stapelen (hijsgereedschap bij meer dan 3), vastschroeven, omvormer erop (p. 108).

De STS komt op een achterplaat aan de muur (p. 109-110). Aanhaalmomenten staan alleen in de tekeningen van de QIG.`
    },
    {
      id: 'aansluiting',
      kop: 'Elektrische aansluiting en beveiliging',
      tekst: `### Automaten (User Manual p. 149-153)

| Model | Gedeeltelijke back-up | Volledige back-up |
|---|---|---|
| 5K, 6K, 8K | 20 A | 63 A |
| 9.999K, 10K | 32 A | 80 A |
| 12K | 40 A | 80 A |
| 15K, 20K | 50 A | 100 A |
| 25K | 63 A | 125 A |
| 29.999K, 30K | 80 A | 125 A |

Geldt voor ETA en BTA, voor GRID en BACK-UP. Een eigen automaat per omvormer en geen verbruiker tussen omvormer en die automaat (p. 149).

**Aardlek:** de handleiding adviseert een extern **type A met 300 mA** aan de AC-uitgang (onder 30 kVA) en zegt dat een lagere waarde bij regen sneller ongewenst afschakelt door de panelen (p. 152-153).

!!! info Algemene vakkennis: 300 mA is brandbeveiliging
300 mA beschermt niet tegen een schok. De eindgroepen in huis, ook achter de BACK-UP-poort, houden in Nederland hun eigen 30 mA-aardlekbeveiliging. Zie de les over aardlektypes.
!!!

### Kabels (p. 154-158)

| Model | AC-kabel GRID en BACK-UP | PE-kabel |
|---|---|---|
| 5K tot 8K | 4-6 mm² | 4-6 mm² |
| 9.999K tot 12K | 6-10 mm² | 6-10 mm² |
| 15K, 20K | 10-16 mm² | 6-10 mm² |
| 25K tot 30K | 16-25 mm² | 10-16 mm² |

PV-kabel 4-6 mm². Communicatie afgeschermd twisted pair 0,2-0,4 mm², CAT5E of beter voor CT en parallel. De QIG geeft dezelfde AC-doorsneden (QIG p. 2).

!!! gevaar Let op bij volledige back-up
De automaat voor volledige back-up (63 tot 125 A) is veel groter dan wat de aanbevolen AC-kabel aankan (bijvoorbeeld 4-6 mm² bij 5 kW). De handleiding eist zelf dat de kabel minstens de stroom van de beveiliging aankan (p. 158). Kies de kabel dus op de automaat, niet alleen op de tabel.
!!!

### Volgorde van aansluiten

1. **Aarde eerst** (p. 159-160).
2. **PV (alleen ETA):** polariteit en spanning meten, nooit een string op twee omvormers, strings op een MPPT gelijk (p. 160-162).
3. **Batterij:** via de blinde stekker; bij een tweede stapel uitbreidingskabels (p. 162-165).
4. **AC:** L1, L2, L3, N en PE niet verwisselen (p. 165-170).
5. **Meter en CT:** richting en fasevolgorde goed (p. 170-172).
6. **Communicatie:** parallel, CT, RCR/DRED/14a (netbeheerderssignalen), meter, noodstop, droge contacten, EMS/laadpaal (p. 172-177).

### N, PE en omschakelaar

N en PE aan de back-upkant verschillen per land; de N van net- en back-upzijde moet doorverbonden zijn (p. 114). Of N en PE in off-grid worden doorgekoppeld, stel je in de app in met "Backup Power N and PE Relay Switch" (p. 120). Een **4-polige handmatige omschakelaar** voor Europa koop je bij de dealer of zelf; de gemeenschappelijke contacten aan de BACK-UP-kant (p. 123-125). Omschakelaar en STS niet samen gebruiken (p. 126).`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling en app',
      tekst: `### Controle vooraf (User Manual p. 179)

Vast gemonteerd, kabels vast, doorvoeren afgedicht, netspanning en frequentie binnen de grenzen.

### Inschakelen bij een enkele omvormer (p. 180-182)

1. Batterijschakelaars aan, kort op de multifunctionele knop van een module drukken.
2. DC-schakelaar aan (alleen ETA).
3. PV-automaat aan.
4. GRID-automaat aan.
5. Omschakelaar op BACK-UP, dan de BACK-UP-automaat aan.

Bij de eerste keer raadt de handleiding een **zwarte start** van de batterij aan: brandt daarna het SOC-lampje op de omvormer, dan zit de batterij goed (p. 180). Omvormer en batterij moeten binnen 15 minuten communiceren, anders schakelt de batterij af. Bij parallel: eerst de slaves, dan de master aan het net, en de netautomaat pas sluiten als het parallelnetwerk is gelukt (p. 180, 184-185). Met STS: GRID, INV, BACK-UP, SMART-PORT (p. 183-184).

### Lampjes (p. 186-193)

Omvormer met status- en SOC-lampjes, batterij met groen (in bedrijf, knipperen is standby of communicatieverlies) en rood (storing), plus de lampjes van STS, meter en communicatiestick.

### App

Instellen via de **SEMS+ App** of **SEMS+ WEB** (p. 194-196). De QIG noemt ook de SolarGo-app. De menu's staan in een aparte SEMS+-handleiding die niet in deze set zit. De handleiding noemt wel:

- Terugleverbeperking via de app na het aansluiten van de meter.
- Master en slave instellen bij parallel; minimaal ARM V04.182 en DSP V02.2013 (p. 33).
- Meter/CT hulpdetectie en firmware-update (p. 351).

Een lijst met netcodes staat **niet** in deze handleiding (wel in die van de 3-10kW).`
    },
    {
      id: 'storingen',
      kop: 'Storingen, uitschakelen en onderhoud',
      tekst: `### Foutcodes

Storingen lees je in de SEMS+ App onder Alarm (User Manual p. 207). De handleiding heeft tabellen: F01 tot F40 (p. 210-227), F41 tot F80 (p. 228-236), F81 tot F121 (p. 237-246), F122 tot F171 (p. 247-258), storingen zonder code (p. 259-277) en batterijstoringen (p. 278-300). Voorbeelden:

| Code | Wat | Eerst controleren |
|---|---|---|
| F12 tot F14 | Lekstroom 30, 60 of 150 mA | Isolatie PV-strings naar aarde (p. 216-217) |
| F18 | Lage isolatieweerstand | Kortsluiting naar aarde, vocht (p. 219) |
| F19 | Aarding abnormaal | PE van de omvormer (p. 220) |
| F140 | Communicatieverlies meter | Meterkabel (p. 253) |
| F143 en F144 | CT niet aangesloten of omgekeerd | CT-bedrading (p. 254) |
| F145 | PE-verlies | PE (p. 254) |

Bij vreemd laden of ontladen zonder foutcode noemt de oudere Nederlandse probleemoplossingsgids een **verkeerd georiënteerde CT** of een meter op een andere fase als eerste oorzaak (Probleemoplossingsgids p. 20). Die gids is van 2023 en gaat over oudere modellen en apps.

### Uitschakelen (p. 197-200)

1. BACK-UP-automaat uit, dan GRID-automaat uit.
2. Knop van een module 5 seconden indrukken (alle modules gaan uit), dan de batterijschakelaar uit.
3. PV-automaat uit, DC-schakelaar uit.
4. Omschakelaar naar net, zodat het huis stroom houdt.

Met STS: bij onderhoud aan de omvormer moet **QF1 INV** open zijn (p. 197).

### Onderhoud (p. 204-206)

Koelvinnen, ventilatoren en luchtopeningen elk half jaar controleren, verder bevestiging, verbindingen en afdichting. Bij opslag gelden dezelfde batterijregels als bij de 1-fase reeks: onderhoudsladen binnen 12 maanden bij -20 tot 35 °C (p. 94-96).`
    },
    {
      id: 'wat-niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat',
      tekst: `- Een **Nederlandse handleiding** voor deze reeks.
- De **lijst met netcodes** en welke Nederlandse code je kiest.
- De **menu's van de SEMS+ App** en het **instellen van de laadpaal**.
- De **vrije ruimte** en **aanhaalmomenten** in tekst: alleen in tekeningen.
- De eisen van de Nederlandse netbeheerder en NEN 1010.
- Hoe het laad- en ontlaadvermogen optelt bij meerdere batterijmodules.

### Tegenstrijdigheden en onduidelijkheden

- Blussen met water: aanbevolen in de tekst (p. 21), verboden op het etiket (p. 23).
- Volledige back-up: automaat tot 125 A bij 25-30 kW, terwijl het datasheet een bypass tot 80 A noemt. Ook bij 9,999 tot 20 kW is de automaat (80-100 A) groter dan de bypass van 63 A.
- AC-kabel 4-6 mm² bij 5-8 kW past niet bij een automaat van 63 A.
- Bij 25-30 kW noemt de handleiding 4 PV-ingangen (p. 57), het datasheet 6 strings over 4 MPPT\'s.
- Over het vermogen van een netomvormer in een microgrid ontbreekt een woord in de zin (p. 41).`
    }
  ],

  handleidingRefs: [
    { doc: 'um', hoofdstuk: 'About This Manual, Applicable Products', paginas: '3-5', onderwerp: 'Alle modellen ETA en BTA, batterijen, STS, meters, sticks' },
    { doc: 'um', hoofdstuk: '1 Safety Precautions', paginas: '13-25', onderwerp: 'Personeel, PV, omvormer, batterij, brand en etiketten (5 minuten)' },
    { doc: 'um', hoofdstuk: '2.1 System Overview', paginas: '27-30', onderwerp: 'Waarschuwingen, off-grid SOC en belastbaarheid off-grid' },
    { doc: 'um', hoofdstuk: '2.1.1 General Scenario', paginas: '30-36', onderwerp: 'Laadpaal alleen bij enkele omvormer, parallel, batterijen, meters' },
    { doc: 'um', hoofdstuk: '2.1.2 Microgrid, 2.1.3 Coupling, 2.1.4 EzManager3000', paginas: '36-51', onderwerp: 'Bestaande netomvormer en centrale aansturing' },
    { doc: 'um', hoofdstuk: '2.2 Product Overview', paginas: '52-64', onderwerp: 'Batterijconfiguratie, poorten, ventilatoren, STS, meter en stick' },
    { doc: 'um', hoofdstuk: '2.4 System Modes, 2.5 Features', paginas: '66-80', onderwerp: 'Werkmodi, AFCI, ongelijke fasebelasting, snelle uitschakeling' },
    { doc: 'um', hoofdstuk: '3.3 Equipment Storage', paginas: '94-96', onderwerp: 'Opslag en onderhoudsladen' },
    { doc: 'um', hoofdstuk: '4 Installation', paginas: '97-110', onderwerp: 'Omgeving, woonruimtes, kabellengtes, transport, stapelen tegen de muur en vrijstaand' },
    { doc: 'um', hoofdstuk: '5.1 System Wiring and Electrical Block Diagram', paginas: '113-121', onderwerp: 'Volledige en gedeeltelijke back-up, N en PE per regio' },
    { doc: 'um', hoofdstuk: '5.3 System Wiring Diagram', paginas: '123-146', onderwerp: 'Omschakelaar 4-polig, generator, parallel, meters' },
    { doc: 'um', hoofdstuk: '5.4 Two-Phase, Three-Wire', paginas: '147-148', onderwerp: 'Alleen bij enkele omvormer, L3 niet aansluiten' },
    { doc: 'um', hoofdstuk: '5.5 Materials Preparation', paginas: '149-158', onderwerp: 'Automaten, aardlek en kabeldoorsneden' },
    { doc: 'um', hoofdstuk: '5.6 tot en met 5.11 Aarde, PV, batterij, AC, meter, communicatie', paginas: '159-177', onderwerp: 'Aansluitvolgorde, poorten, EMS/laadpaal' },
    { doc: 'um', hoofdstuk: '6 System Commissioning', paginas: '179-193', onderwerp: 'Controle, inschakelen, zwarte start, parallel en lampjes' },
    { doc: 'um', hoofdstuk: '7 SEMS+ App en SEMS+ WEB', paginas: '194-196', onderwerp: 'App en monitoring' },
    { doc: 'um', hoofdstuk: '8.1 System Power-Off tot en met 8.4 Routine Maintenance', paginas: '197-206', onderwerp: 'Uitschakelvolgorde, STS-bypass en onderhoudstabel' },
    { doc: 'um', hoofdstuk: '8.5 Faults', paginas: '207-300', onderwerp: 'Foutcodes F01-F171, storingen zonder code en batterijstoringen' },
    { doc: 'um', hoofdstuk: '9 Technical Specifications', paginas: '301-350', onderwerp: 'Gegevens omvormer, batterij, STS, meter, stick en EzManager3000' },
    { doc: 'um', hoofdstuk: '10.1 FAQ', paginas: '351', onderwerp: 'Meter/CT hulpdetectie en firmware-update' },
    { doc: 'qig', hoofdstuk: 'Installatie en elektrische aansluiting', paginas: '1-2', onderwerp: 'Maten, aanhaalmomenten en kabeldoorsneden in tekeningen' },
    { doc: 'ds', hoofdstuk: 'ESA Series Power Module en Battery Module', paginas: '1-3', onderwerp: 'Specificaties hybride omvormer en batterijen' },
    { doc: 'dsac', hoofdstuk: 'ESA-reeks AC-gekoppeld', paginas: '1-2', onderwerp: 'Specificaties AC-gekoppelde omvormer' },
    { doc: 'lynx', hoofdstuk: 'Lynx D G2-reeks', paginas: '1-2', onderwerp: 'Batterijmodules en spanningsbereik 3-fase' },
    { doc: 'veil', hoofdstuk: 'Meerlaagse bescherming', paginas: '1-4', onderwerp: 'Veiligheidsvoorzieningen in de batterij' },
    { doc: 'ts', hoofdstuk: '5 Probleemoplossing zonder alarmen of indicatoren', paginas: '20-21', onderwerp: 'Vreemd laden of ontladen, ingebrande klemmen' }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm10l03', 'm01l03', 'm02l05', 'm03l04', 'm03l05', 'm06l03'],

  zieOok: ['goodwe-esa-3-10kw', 'goodwe-esa-athena', 'sigenergy-sigenstor-home', 'sigenergy-gateway']
});
