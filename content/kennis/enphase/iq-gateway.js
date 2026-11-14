/* ==========================================================================
   content/kennis/enphase/iq-gateway.js - Enphase IQ Gateway (Standard en
   Metered) met stroomtransformatoren en EMI Line Filter.
   Samenvatting in eigen woorden. Paginanummers verwijzen naar de positie in
   de pdf (1 = eerste pagina). De Envoy-S-handleiding is uit 2016 en gebruikt
   oude namen (Envoy-S, Installer Toolkit, Enlighten).
   ========================================================================== */

KENNIS.addProduct({
  id: 'enphase-iq-gateway',
  merk: 'enphase',
  slug: 'iq-gateway',
  naam: 'Enphase IQ Gateway (Standard en Metered) met stroomtransformatoren',
  rol: 'sensor',
  toepassingen: ['zonnepanelen', 'thuisbatterij', 'laadpaal'],
  korteOmschrijving: 'Het DIN-railkastje dat over de stroomkabels met de micro-omvormers praat, de netinstellingen doorgeeft, met stroomtransformatoren productie en verbruik meet en alles naar de Enphase-cloud stuurt. Noodstroom schakelt het niet, dat doet de IQ System Controller.',

  varianten: {
    kop: ['Model', 'Naam', 'Meting', 'Stroomtransformatoren', 'Max. micro-omvormers', 'Batterijen', 'Bron'],
    rijen: [
      ['ENV-S-WB-230', 'IQ Gateway Standard', 'Alleen PV-productie, via de micro-omvormers (ongeveer 5 %)', 'Geen', 'Tot 300', 'Niet ondersteund', 'Gegevensblad'],
      ['ENV-S-EM-230', 'IQ Gateway Metered', 'Productie en verbruik met CT\'s, nauwkeurigheid 1 %', '2 x CT-100-SPLIT-ROW meegeleverd, maximaal 3 voor productie en 3 voor verbruik', 'Tot 300', '12 IQ Battery 3T of 4 IQ Battery 10T', 'Gegevensblad'],
      ['ENV-S-EM-230-LF-KIT', 'IQ Gateway Metered met EMI Line Filter Kit', 'Als Metered', '2 deelbare CT\'s plus een EMI Line Filter in de doos', 'Staat niet in de verkorte handleiding', 'Staat niet in de verkorte handleiding', 'Verkorte handleiding'],
      ['ENV-S-WM-230', 'Envoy-S Metered Multiphase (oudere naam en uitvoering)', 'Productie en verbruik, 1 %', '2 x CT-100-SPLIT meegeleverd', '600', '39 AC Battery', 'Handleiding uit 2016']
    ]
  },

  documenten: [
    { id: 'gwdsh', titel: 'Gegevensblad IQ Gateway (IQG-DSH-00012-4.0-NL-EMEA, mei 2025)', soort: 'Gegevensblad', paginas: 4 },
    { id: 'gwqig', titel: 'Verkorte handleiding: de IQ Gateway Metered en EMI Line Filter Kit installeren (ENV-S-EM-230-LF-KIT, december 2023)', soort: 'Verkorte handleiding', paginas: 4 },
    { id: 'envoy', titel: 'Installatie- en bedieningshandleiding Enphase Envoy-S Metered Multiphase (141-00035 Rev. 01, 2016)', soort: 'Installatie- en bedieningshandleiding', paginas: 43 },
    { id: 'ct101', titel: 'CT-101-NL: meetspoelen aansluiten en in bedrijf stellen (2022)', soort: 'Werkinstructie (beste praktijk)', paginas: 23 },
    { id: 'trouble', titel: 'Enphase Solar troubleshooting guide (ING-00061-2.0, Engels, augustus 2025)', soort: 'Storingsgids', paginas: 56 },
    { id: 'teb274', titel: 'IQ EV Charger 2 Dynamic Load Balancing (TEB-00274-3.0-NL, maart 2026)', soort: 'Technische instructie', paginas: 10 },
    { id: 'iom84', titel: 'Installatie- en bedieningshandleiding IQ8MC, IQ8AC, IQ8HC en IQ8X Microinverters (IOM-00084-4.0-NL)', soort: 'Installatie- en bedieningshandleiding', paginas: 44 },
    { id: 'ing56', titel: 'Wat u moet doen voordat u uw eerste IQ8 Series Microinverters systeem installeert (ING-00056-2.0-NL)', soort: 'Installatiegids', paginas: 4 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `De **IQ Gateway** is een kastje van 213 x 126 x 45 mm op een DIN-rail, in of naast de groepenkast. Het is het **communicatie- en meetcentrum** van een Enphase-systeem. In oudere documenten heet hij **Envoy** of **Envoy-S**, maar het is hetzelfde soort apparaat.

### Wat hij doet

- **Praten over de stroomkabels.** Micro-omvormers en het IQ Relay hebben geen eigen internet. De gateway spreekt ze aan via **powerline communicatie** (PLC), signalen op de gewone 230 V-bedrading, dus hij moet dicht bij de groepenkast zitten. Let op: de nieuwere **IQ Battery 5P with FlexPhase** gebruikt volgens de batterijdocumenten geen PLC maar een aparte bedrade besturingskabel via de Communications Kit 2 of de IQ System Controller. Alleen oudere Enphase-batterijen praatten via PLC of draadloos.
- **Netprofiel doorgeven.** De micro-omvormers krijgen hun netinstellingen van de gateway. Zonder gateway en netprofiel produceren IQ8-micro-omvormers niets.
- **Meten**, alleen bij de Metered. Met **stroomtransformatoren** (CT's) meet hij wat de panelen produceren en wat het huis van het net haalt of teruglevert.
- **Sturen.** Exportbeperking (PEL) en beheer van fase-onbalans (PIM) lopen via de gateway. Voor een deel van die functies zijn volgens de gegevensbladen de Metered met CT's en/of een IQ Relay nodig.
- **Naar de cloud.** Via wifi, ethernet of een mobiel modem naar de Enphase App en het Installer Platform, ook voor software-updates.

!!! kern Gateway betekent hier iets anders
Bij Sigenergy is de **Sigen Gateway** een schakelkast met contactoren en een bypass, die het huis bij netuitval loskoppelt van het net en op noodstroom zet. De Enphase IQ Gateway schakelt **niets**, hij meet en communiceert alleen. Daarom staat hij in deze kennisbank onder de rol **Meting en sensoren**. De noodstroomschakelaar van Enphase is de **IQ System Controller 3 INT**, met volgens de IQ9N-handleiding een eigen communicatie-gateway in de behuizing.
!!!

!!! info Als je Sigenergy al kent
De IQ Gateway Metered doet ongeveer wat bij Sigenergy de **Sigen Power Sensor** (meten aan de netzijde met CT's) en de **CommMod** (internet) samen doen. Bij Sigenergy praat de sensor via RS485 met de omvormer en heeft de omvormer de regie. Bij Enphase is er geen centrale omvormer, dus is de gateway het brein waar alles samenkomt. De communicatie loopt daar ook niet via een buskabel maar over de stroomkabels.
!!!`
    },
    {
      id: 'varianten',
      kop: 'Standard of Metered en de onderdelen',
      tekst: `### Standard of Metered

De **Standard** (ENV-S-WB-230) bewaakt alleen wat de micro-omvormers zelf melden: ongeveer 5 % nauwkeurig, geen CT-klemmen, geen batterijen. De **Metered** (ENV-S-EM-230) heeft een ingebouwde productie- en verbruiksmeter van 1 %, klemmen voor zes CT's en een digitale in- en uitgang voor sturing door de netbeheerder. Hij ondersteunt ook batterijen. Wil je het verbruik van het huis weten, gebruik je een batterij of een IQ EV Charger 2 met lastbeheer, dan heb je de Metered nodig.

Voor allebei: 230 V (Metered ook 230/400 V), 50 Hz, maximaal 20 A beveiliging (B-karakteristiek), 3 tot 5 W, 12 DIN-modulebreedtes, 0,5 kg, IP30. Buiten of in een open ruimte moet hij in een behuizing van **IP54** of hoger.

### Stroomtransformatoren

| Type | Volgens het gegevensblad |
|---|---|
| CT-100-SPLIT-ROW | Deelbare CT van 100 A, voor kleinere panelen met geleiders tot 16 mm2, als set van vier te bestellen. Twee zitten bij de Metered. |
| CT-100-SPLIT | Deelbare CT, als set van vier, voor meerfase of dikkere geleiders. Het blad noemt hier 200 A. |

Stel dat je een driefasige installatie hebt. Dan heb je **per fase een CT voor productie en een voor verbruik** nodig, dus zes. In de doos zitten er twee, dus je hebt er vier extra nodig.

### EMI Line Filter

De kit ENV-S-EM-230-LF-KIT bevat ook een **EMI Line Filter** (ELF-020-1P, 20 A, tot 250 V). Volgens de verkorte handleiding is dat in Europa verplicht bij **IQ7-micro-omvormers**, zodat storende ruis buiten het huisnet en het openbare net blijft. Bij driefase drie filters. De PLC-communicatie wordt er **niet** beter van.

### Overige accessoires

- **Mobile Connect**: mobiel modem via USB (in het gegevensblad CELLMODEM-07-INT-05, in de oudere documenten CELLMODEM-02).
- **Communications Kit 2 INT**: bekabelde verbinding tussen gateway en IQ Battery 5P.
- **Fasekoppelaar**: nodig bij driefase als er geen meerfasig IQ Relay is, zodat het PLC-signaal alle fasen bereikt.`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Plek in het systeem',
      tekst: `De gateway heeft twee kanten. Aan de ene kant de **stroomkabels** naar micro-omvormers en IQ Relay (PLC), met een eigen besturingskabel voor de IQ Battery 5P with FlexPhase. Aan de andere kant het **thuisnetwerk** naar de router en internet.

1. **Voeding:** een eigen automaat van maximaal 20 A (1-, 2- of 3-polig), kabel 2,5 mm2 koper, geschikt voor 75 graden. In het Enphase-voorbeeldschema voor micro-omvormers staat er een automaat van 6 A.
2. **Productie-CT's** om de fasedraden die van de PV-installatie komen.
3. **Verbruiks-CT's** om de hoofdtoevoer, tussen de kWh-meter en de groepenkast.
4. **Internet** via wifi (2,4 en 5 GHz, aanbevolen bereik 10 m), ethernet (Cat5E of Cat6, UTP) of het mobiele modem.

### Batterij en laadpaal

De Metered houdt de **IQ Battery** bij en stuurt hem. Volgens de storingsgids moet de verbruiksmeter bij een systeem met batterij op "Load with Solar" staan.

Voor **dynamisch lastbeheer** haalt de **IQ EV Charger 2** het verbruik per fase op uit de gateway. Daarvoor zijn verbruiks-CT's op alle drie fasen nodig (een bij een eenfasige lader) en moeten gateway en lader op hetzelfde thuisnetwerk zitten. Valt de gateway uit of de verbinding weg, dan laadt de lader nog maar met 8 A. Zonder internet maar met werkend thuisnetwerk blijft het lastbeheer gewoon werken.

!!! kern De Metered is het meetpunt van het huis
Alles wat "slim" is hangt af van goed geplaatste verbruiks-CT's: verbruik tonen, exportbeperking, batterij sturen en de laadstroom van de auto aanpassen. Een verkeerd geplaatste CT geeft dus meer dan een rare grafiek: het hele systeem neemt dan verkeerde beslissingen.
!!!`
    },
    {
      id: 'stroomtransformatoren',
      kop: 'Stroomtransformatoren plaatsen',
      tekst: `Een **CT** is een ring die je om een draad klemt. De stroom door die draad wekt in de CT een kleine stroom op die evenredig is met de echte stroom (Envoy-S-handleiding, pagina 10). Zo meet je zonder de draad te onderbreken, net als met een stroomtang.

### Voorbereiden

1. **Labels:** markeer de CT's en de kabeluiteinden met kleur of met de labels uit de doos. CT-101 gebruikt P1, P2, P3 voor productie en C1, C2, C3 voor verbruik.
2. **Fasen herkennen:** markeer elke fasedraad op drie plekken: bij de invoer in de groepenkast, bij de gateway en bij de PV-automaat. Kleuren zijn niet altijd betrouwbaar, dus meet bij twijfel.
3. **Ruimte:** plaats CT's niet in een kast waar ze meer dan 75 % van de bedradingsruimte in een doorsnede innemen.

### Aansluiten en klemmen

- **Eerst de CT-draden op de klemmen van de gateway. Pas daarna de CT om de draad en pas daarna stroom op het circuit.** Witte draad op de klem met de punt (I1 met punt), blauwe draad op de gewone klem (I1). CT-101 zegt het als: wit boven, blauw onder.
- **Productie-CT:** om de fasedraad van de PV-installatie, met de **pijl naar de groepenkast** (van de panelen af). Eenfase alleen L1, driefase L1, L2 en L3.
- **Verbruiks-CT:** om de hoofdtoevoer, met de **pijl naar de groepenkast** (van het net af).
- Alleen **fasedraden van dezelfde fase** door een CT. Meerdere draden van dezelfde fase mag, als ze passen.
- Haal alle klemmen aan met **0,56 Nm**.

### Kabels verlengen

De CT-kabel is 4 m. Verlengen mag met getwiste kabel van 0,75 tot 2,5 mm2, maximaal 1,5 ohm per draad (3 ohm per CT-lus). De Envoy-S-handleiding geeft 64 m bij 0,75 mm2 tot 213 m bij 2,5 mm2. De verkorte handleiding en dezelfde handleiding elders zeggen maximaal 148 m.

### De spanningstest uit CT-101

Per fase meet je de spanning tussen de draad waar de CT om zit en de bijbehorende L-klem van de gateway. Bij **0 V** is het dezelfde fase en zit het goed. Bij **400 V** zijn de fasen verwisseld en wordt de meting fout. CT-101 zegt er nadrukkelijk bij: niet lukraak draden of CT's verplaatsen, eerst meten.

!!! gevaar Dit is meten onder spanning
CT-101 laat deze test doen met de hele installatie ingeschakeld. Dat is werken in de buurt van spanning. Doe het alleen met een geschikte meter (meetcategorie III of hoger), geisoleerde meetpennen en als je daarvoor bevoegd bent. Zie les 1.2 en 7.2. Dit is algemene vakkennis, want CT-101 zegt er zelf niets over.
!!!`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid',
      tekst: `!!! gevaar Geen CT's om een draad waar stroom door loopt
Installeer stroomtransformatoren nooit terwijl er stroom door het gemeten circuit loopt. Sluit de CT-draden altijd eerst aan op de klemmen. Koppel CT-draden niet los van de klemmen zolang er stroom op het circuit staat. (Verkorte handleiding pagina 1 en 3, Envoy-S-handleiding pagina 5, 16 en 40.)
!!!

- Zet de **hoofdschakelaar uit** voordat je de gateway plaatst en bedraadt, of bij een onderverdeling eerst die onderverdeling. Werk volgens de vijf stappen van les 1.3.
- Sluit **geen ongebruikte klemmen** aan en maak de gateway niet open. Met de kap eraf vervalt de garantie.
- In een behuizing mag het niet warmer worden dan **46 graden**.
- De verkorte handleiding raadt een **aardlekschakelaar** aan en verwijst naar de lokale regels (les 6.3).
- Zet de gateway niet uit tijdens een **software-update**, dus zolang de leds om de beurt groen knipperen.

?? Waarom mag je een CT niet open laten?
Bij een stroomtransformator met een stroomuitgang kan de secundaire wikkeling een hoge spanning opbouwen als hij openstaat terwijl er stroom door de primaire draad loopt. Dat is **algemene vakkennis**, want de Enphase-documenten leggen het zo niet uit. Bij de CT-ingangen op de tekening van de klemmen staat "100A 0.5V". Dat kan op een CT met spanningsuitgang wijzen, maar het staat er niet met zoveel woorden. Houd je dus gewoon aan de volgorde van de handleiding.
??`
    },
    {
      id: 'installatie',
      kop: 'Installatie in tien stappen',
      tekst: `De verkorte handleiding (pagina 2 en 3) en de Envoy-S-handleiding (pagina 12 tot 23) volgen dezelfde volgorde.

1. **Locatie:** dicht bij de groepenkast (sterkste PLC-signaal) en binnen bereik van de 4 m CT-kabels. Droog en beschermd, horizontaal op de DIN-rail. Een metalen behuizing dempt wifi. Boor geen gaten boven in de behuizing.
2. **Voeding en meting:** voeding op L1 (en L2, L3) en N, CT's zoals hierboven.
3. **Inschakelen:** klemmenafdekking dicht, automaat aan. Alle vier de leds knipperen ongeveer 2 minuten rood (oudere versie: oranje). Daarna blijft de apparaatcommunicatie-led rood tot de micro-omvormers gevonden zijn.
4. **Systeem aanmaken** in de Enphase Installer App.
5. **Apparaten toevoegen** door de barcodes te scannen. Bij IQ8 gebruik je niet de scanknop op de gateway (ING-00056).
6. **Tarief** invoeren (optioneel).
7. **Verbinding:** AP-modusknop ongeveer een seconde indrukken, telefoon op het wifinetwerk van de gateway. Daarna de gateway op wifi, ethernet of mobiel. Voor WPS de AP-knop 5 seconden vasthouden.
8. **Apparaten inrichten:** de app werkt het netprofiel bij en richt alles in. Voor IQ8 is gateway-software 8.03.5263 of hoger nodig, de update duurt tot 30 minuten.
9. **Meters configureren:** eerst de productiemeter, dan de verbruiksmeter.
10. **Rapport** delen en het overzicht met de bewoner doornemen.

Bij driefase komt de **fasekoppelaar** aan de belastingzijde van de overstroombeveiliging. Het **EMI Line Filter** (alleen met IQ7) komt binnen of in een IP54-behuizing, met ingaande en uitgaande kabels niet naast elkaar.`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Meters in bedrijf stellen',
      tekst: `CT-101 laat de meterwizard stap voor stap zien (pagina 11 tot 23).

### Productiemeter

1. Kies Meterconfiguratie, Productiemeter en de fasen (bij een driefasige woning L1+L2+L3).
2. Controleer dat de metingen per fase **positief** zijn. Negatief betekent een fout in de installatie.
3. **Schakel de PV uit** en controleer dat de productie nul of bijna nul is. Zitten gateway en IQ Relay op dezelfde aardlekautomaat, schakel die dan niet uit, want dan valt de gateway weg en begin je opnieuw. Gebruik een werkschakelaar of de testknop van het IQ Relay.
4. Inschakelen.

### Verbruiksmeter

1. Pas als de productiemeter aan staat.
2. Zet PV en batterij uit, schakel een bekende zware verbruiker in en kijk of het verbruik stijgt.
3. Zet de PV weer aan en beantwoord of de teruglevering door de verbruiks-CT wordt gemeten. Dat bepaalt het type: **verbruik met productie** (netto, CT op de netaansluiting) of **alleen verbruik**.
4. Vergelijk met de kWh-meter van het huis en schakel in.

!!! info Kies het metertype in een keer goed
Volgens de Envoy-S-handleiding kun je het type verbruiksmeter niet meer wijzigen als de meter eenmaal is ingeschakeld.
!!!

### De vier leds

| Led | Groen | Knippert groen | Rood | Uit |
|---|---|---|---|---|
| Netwerk | Verbonden | WPS of verbinden bezig | Alleen lokaal netwerk | Geen netwerk |
| AP-modus | Wifi van de gateway aan | | | AP uit |
| Productie | Alle micro-omvormers produceren | Upgrade micro-omvormer | Minstens een produceert niet | Nacht of weinig licht |
| Apparaten | Alle apparaten communiceren | Apparaatscan bezig | Minstens een communiceert niet | Nacht of weinig licht |`
    },
    {
      id: 'storingen',
      kop: 'Storingen',
      tekst: `### Apparaten worden niet gevonden

Vaak is er gewoon te weinig licht, want micro-omvormers zonder zon praten niet. Is er wel licht, kijk dan in de app wie ontbreekt en of PV-automaten, paneelaansluiting en paneelspanning in orde zijn. Meerdere gateways op een groepenkast kunnen elkaar storen ("domeinoverschrijdend verkeer"), dus neem ze een voor een in gebruik.

### Ruis op de stroomkabels

Produceert het systeem 's nachts of springt de grafiek raar, dan kan **PLC-ruis** de oorzaak zijn. De storingsgids noemt stekkerdozen, aardlekstopcontacten, dimmers, grote apparaten, alarmsystemen en slechte automaten. In de app zit een ruisdetectie. Oplossingen: een powerline-filter (de gids noemt een "radius power line filter"), bij een Standard eerst de gateway op een andere groep, ferrietringen op de verdachte groep of een aparte groep vanaf de hoofdverdeler.

### Verbruik loopt gelijk met productie

Dan zitten de CT's verkeerd of op de verkeerde fase en zie je ook zonder zon negatief verbruik. Controleer eerst het metertype, dan de polariteit per fase. Die kun je in het Installer Platform omdraaien. Zet daarna de startdatum van de meter op de volgende dag.

### Geen productie

Produceert er niets, kijk dan naar netspanning, frequentie, automaat en bedrading vanaf de groepenkast. Valt alles op een groep weg, dan naar die groep en de aansluitdoos. Is het er maar een, dan naar de AC-stekker op de IQ Cable en de startspanning van het paneel.

### Internet

Netwerk-led uit bij wifi: WPS verlopen, of het ligt aan de router of een metalen kast. Rood: de router heeft geen internet. Nieuwe router: wifi-instellingen in de gateway aanpassen. Vanaf softwareversie 7.6.358 zet de gateway zelf AP-modus aan als hij offline is.

### Vervangen

Alleen na een RMA van Enphase. Volgorde in de Envoy-S-handleiding (pagina 40 en 41): voeding gateway uit, draden los, PV-automaat uit, CT's openklikken en verwijderen, nieuwe plaatsen, opstarten, verbinden en Enphase het systeem laten bijwerken.`
    },
    {
      id: 'niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat',
      tekst: `- Hoeveel IQ Battery 5P een Metered aankan. Het gegevensblad noemt alleen IQ Battery 3T en 10T.
- Of het IQ Relay en welke fasekoppelaar in Nederland verplicht zijn.
- Of de CT's een stroom- of spanningsuitgang hebben.
- Hoe je de spanningstest van CT-101 veilig uitvoert.

### Waar de bronnen elkaar tegenspreken

- **Capaciteit:** 300 micro-omvormers (gegevensblad, IQ8-handleiding) tegenover 600 en 39 batterijen (Envoy-S-handleiding uit 2016). De IQ8-handleiding noemt 20 batterijen, het gegevensblad 12 of 4.
- **CT-kabel verlengen:** tot 148 m tegenover tot 213 m.
- **Leds:** rood in de nieuwe documenten, oranje in de oude.
- **Omgeving:** het gegevensblad noemt -40 tot 65 graden buiten en tegelijk IP30 met verplichte behuizing buiten. Vochtigheid 85 % tegenover 95 %, hoogte 2500 m tegenover 2000 m.
- **CT-100-SPLIT:** het gegevensblad noemt hem 200 A, de naam en de klemtekening zeggen 100 A.
- **Scanknop:** de verkorte handleiding beschrijft de 15-minutenscan, maar ING-00056 zegt die bij IQ8 juist niet te gebruiken.
- **Kopje fout:** in de verkorte handleiding staat bij stap C "verbruiks-trafo's", terwijl de tekst over productie-CT's gaat.
- **Onder spanning:** de Envoy-S-handleiding laat een erkende elektricien een verbruiks-CT plaatsen als de toevoer niet uit kan, terwijl dezelfde handleiding dat elders verbiedt. Volg de strengste regel.`
    }
  ],

  handleidingRefs: [
    { doc: 'gwdsh', hoofdstuk: 'IQ Gateway en de onderdelen van het Enphase Energy System', paginas: '1', onderwerp: 'Wat de gateway doet, IQ Relay, IQ Cable, IQ Battery 5P met zes ingebouwde micro-omvormers' },
    { doc: 'gwdsh', hoofdstuk: 'Productdetails, capaciteit, mechanische gegevens, communicatie', paginas: '2', onderwerp: 'Standard tegenover Metered, 300 micro-omvormers, batterijen, IP30, CT- en I/O-klemmen, wifi, ethernet' },
    { doc: 'gwdsh', hoofdstuk: 'Leds, normen, levering en accessoires', paginas: '3', onderwerp: 'Volgorde van de leds, CT-100-SPLIT en CT-100-SPLIT-ROW, Communications Kit 2' },
    { doc: 'gwqig', hoofdstuk: 'Voorbereiding, scherm en bediening, veiligheid', paginas: '1', onderwerp: 'Inhoud doos, 75 %-regel, IP54, extra CT\'s en fasekoppelaar, leds en knoppen, aardlek aanbevolen' },
    { doc: 'gwqig', hoofdstuk: 'Installatie stap 1 tot 10 en probleemoplossing', paginas: '2', onderwerp: 'Locatie, opstarten, app, inrichten, meterconfiguratie, led-tabel, storingen a tot d' },
    { doc: 'gwqig', hoofdstuk: 'Bedrading voeding en CT\'s, instructieblad Europa, EMI Line Filter', paginas: '3', onderwerp: 'Klemmen I1 tot I3, pijlrichting, 0,56 Nm, EMI-filter verplicht bij IQ7, eenfaseschema' },
    { doc: 'gwqig', hoofdstuk: 'Driefasig aansluitschema met EMI Line Filter', paginas: '4', onderwerp: 'Drie filters, IQ Relay 3P, gateway en groepenkast' },
    { doc: 'envoy', hoofdstuk: 'Veiligheid', paginas: '5-6', onderwerp: 'Geen CT\'s onder stroom, niet openmaken, 46 graden in behuizing' },
    { doc: 'envoy', hoofdstuk: 'Planning en voorbereiding', paginas: '8-11', onderwerp: 'Twee kanten van de gateway, fasekoppeling, werking van een CT, capaciteit' },
    { doc: 'envoy', hoofdstuk: '1 tot 3 Locatie, voeding en CT\'s', paginas: '13-17', onderwerp: 'Plaatsen, voeding 2,5 mm2 en 20 A, CT\'s plaatsen, kabels verlengen tot 3 ohm' },
    { doc: 'envoy', hoofdstuk: '4 tot 8 DRM, inschakelen, AP-modus, apparaten, meters', paginas: '18-20', onderwerp: 'Opstarten, scanmethodes, metertype dat je later niet kunt wijzigen' },
    { doc: 'envoy', hoofdstuk: '9 Verbinding maken', paginas: '21-23', onderwerp: 'Wifi, mobiel modem, ethernet met ferrietkraal, PLC-bruggen' },
    { doc: 'envoy', hoofdstuk: 'Werking van de Envoy-S', paginas: '25-26', onderwerp: 'Leds, eerste opstart, nieuwe apparaatscan' },
    { doc: 'envoy', hoofdstuk: 'Probleemoplossing', paginas: '35-39', onderwerp: 'Apparaatdetectie, productie, internet, DHCP, firewall' },
    { doc: 'envoy', hoofdstuk: 'Een Envoy-S vervangen', paginas: '40-41', onderwerp: 'Volgorde van vervangen inclusief CT\'s' },
    { doc: 'envoy', hoofdstuk: 'Technische gegevens', paginas: '42-43', onderwerp: 'Afmetingen CT, meetcircuit CAT III tot 200 A, capaciteit' },
    { doc: 'ct101', hoofdstuk: 'Stap 1 tot 3 Labels, aansluiting en richting', paginas: '3-5', onderwerp: 'P1 tot P3 en C1 tot C3, wit boven en blauw onder, eerst aansluiten dan klemmen' },
    { doc: 'ct101', hoofdstuk: 'Stap 4 tot 6 Spanning meten en aandachtspunten', paginas: '6-10', onderwerp: '0 V goed, 400 V verwisselde fasen' },
    { doc: 'ct101', hoofdstuk: 'Stap 7 Productiemeter in bedrijf', paginas: '11-16', onderwerp: 'Fasen kiezen, positieve meting, PV uit en aardlek met IQ Relay' },
    { doc: 'ct101', hoofdstuk: 'Stap 8 Verbruiksmeter in bedrijf', paginas: '17-23', onderwerp: 'Volgorde, testbelasting, type verbruiksmeter, vergelijken met kWh-meter' },
    { doc: 'trouble', hoofdstuk: '1.2 en 1.3 Gateway herkennen en AP-modus', paginas: '5-6', onderwerp: 'Typen gateway, AP-modus aanzetten, automatisch AP bij offline' },
    { doc: 'trouble', hoofdstuk: '2 Gateway verbinden met wifi', paginas: '9-11', onderwerp: 'Via de Installer App en de Enphase App' },
    { doc: 'trouble', hoofdstuk: '3 Power line communication issues', paginas: '13-17', onderwerp: 'PLC-ruis herkennen en verhelpen' },
    { doc: 'trouble', hoofdstuk: '4 Meter issues', paginas: '19-23', onderwerp: 'Verbruik spiegelt productie, CT-polariteit, metertype, CT\'s aan en uit' },
    { doc: 'trouble', hoofdstuk: '7 en 8 Self Service en systeemdiagnose', paginas: '47-53', onderwerp: 'Retour, vervanging, productie uit en aan, gateway op afstand herstarten' },
    { doc: 'teb274', hoofdstuk: '1.1 en 1.2 Dynamic Load Balancing en vereisten', paginas: '3-4', onderwerp: 'Verbruiks-CT\'s op alle fasen, zelfde netwerk, softwareversies' },
    { doc: 'teb274', hoofdstuk: '1.4 Storingen en oplossingen', paginas: '8', onderwerp: 'Laden beperkt tot 8 A bij uitval gateway of verbinding' },
    { doc: 'iom84', hoofdstuk: '1 Het Enphase IQ System', paginas: '10', onderwerp: 'Rol van de gateway voor de micro-omvormers, netprofiel, PEL en PIM' },
    { doc: 'iom84', hoofdstuk: '5.1.2 DC-weerstand laag', paginas: '24-25', onderwerp: 'Gateway nodig om de fout te wissen' },
    { doc: 'iom84', hoofdstuk: '7.6 Elektrische schema\'s', paginas: '42-43', onderwerp: 'Gateway Metered in het voorbeeldschema met automaat van 6 A en CT\'s voor productie en verbruik' },
    { doc: 'ing56', hoofdstuk: '1 tot 3 Belangrijke informatie, op kantoor, ter plaatse', paginas: '3-4', onderwerp: 'Gateway-software 8.03.5263, update tot 30 minuten, niet de PLC-scanknop' }
  ],

  cursusLinks: ['m10l04', 'm10l01', 'm07l02', 'm02l05', 'm11l02', 'm03l02', 'm01l03', 'm01l02', 'm06l03'],

  zieOok: ['enphase-iq8-micro-omvormers', 'enphase-iq-system-controller-3', 'enphase-iq-battery-5p', 'enphase-iq-ev-charger-2', 'sigenergy-gateway', 'sigenergy-power-sensor']
});
