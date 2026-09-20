/* ==========================================================================
   content/kennis/sigenergy/sigenstor-home.js
   Samenvatting van de handleidingen van SigenStor Home (1-fase en 3-fase, versie A1).
   Paginanummers verwijzen naar de positie in de PDF (1 = eerste pagina).
   ========================================================================== */

KENNIS.addProduct({
  id: 'sigenergy-sigenstor-home',
  merk: 'sigenergy',
  slug: 'sigenstor-home',
  naam: 'SigenStor Home (1-fase en 3-fase)',
  rol: 'systeem',
  toepassingen: ['thuisbatterij', 'laadpaal'],
  korteOmschrijving: 'Het complete thuisenergiesysteem van Sigenergy: een Energy Controller (omvormer) met een of meer SigenStor BAT-batterijmodules, een gateway voor noodstroom, een vermogenssensor en de mySigen-app. Verkrijgbaar in een 1-fase en een 3-fase uitvoering, versie A1.',

  varianten: {
    kop: ['Onderdeel', 'Uitvoering', 'Vermogen of capaciteit', 'Waar in de bronnen'],
    rijen: [
      ['SigenStor EC (Energy Controller), 1-fase', '3.0 / 3.6 / 4.0 / 4.6 / 5.0 / 6.0 / 8.0 / 10.0 / 12.0 SP', '3,0 tot 12,0 kW', 'Brochure p. 8'],
      ['SigenStor EC, 3-fase', '5.0 / 6.0 / 8.0 / 10.0 / 12.0 / 15.0 / 17.0 / 20.0 / 25.0 / 30.0 TP', '5,0 tot 30,0 kW', 'Brochure p. 9, Installatiegids p. 3'],
      ['SigenStor EC, 3-fase laagspanning', '5.0 / 6.0 / 8.0 / 10.0 / 12.0 TPLV', '5,0 tot 12,0 kW', 'Brochure p. 9'],
      ['Alternatieve omvormer: Sigen Hybrid', '5.0 tot 30.0 TP (voor PV, met licentie ook met batterij)', '5,0 tot 30,0 kW', 'Installatiegids p. 3, Gebruikershandleiding p. 11'],
      ['Alleen-opslag omvormer: SigenStor AC (Sigen Storage Controller)', '5.0 tot 25.0 TP', '5,0 tot 25,0 kW', 'Gebruikershandleiding p. 10-11'],
      ['Batterijmodule SigenStor BAT', 'BAT 6.0 en 10.0 (brochure); BAT 5.0 en 8.0 (gebruikershandleiding); BAT 5.0 / 6.0 / 8.0 / 10.0 (installatiegids)', '6,02 en 9,04 kWh totaal (brochure)', 'Brochure p. 11, Installatiegids p. 3'],
      ['Vermogenssensor', 'Sigen Sensor TP-DH, TP-CT120-DH, TP-CT300-DH, TP-CT600-DH', 'Meetbereik afhankelijk van de uitvoering (120, 300 of 600 A)', 'Gebruikershandleiding p. 12']
    ]
  },

  documenten: [
    { id: 'bt3', titel: 'Beknopte handleiding voor SigenStor Home Driefasensysteem A1_NL', soort: 'Beknopte handleiding', paginas: 2 },
    { id: 'bt1', titel: 'Beknopte handleiding voor SigenStor Home Eenfasig systeem A1_NL', soort: 'Beknopte handleiding', paginas: 2 },
    { id: 'geb', titel: 'Gebruikershandleiding voor SigenStor Home - Driefasensysteem A1_NL', soort: 'Gebruikershandleiding', paginas: 37 },
    { id: 'bi', titel: '01-Belangrijke informatie voor SigenStor Home_NL', soort: 'Belangrijke informatie', paginas: 18 },
    { id: 'ig', titel: '02-Installatiegids voor SigenStor Home - Driefasensysteem A1_NL', soort: 'Installatiegids', paginas: 44 },
    { id: 'on', titel: '04-Handleiding onderhoud voor SigenStor Home - Driefasensysteem A1_NL', soort: 'Onderhoud', paginas: 12 },
    { id: 'br', titel: 'Brochure - Thuis Energieoplossing', soort: 'Brochure', paginas: 23 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `SigenStor Home is geen los apparaat maar een **compleet thuisenergiesysteem**. Het combineert de omvormer, de batterij en de bijbehorende meet- en communicatieonderdelen tot een geheel dat zonnestroom opslaat en later weer aan het huis levert. (Gebruikershandleiding p. 16).

### De onderdelen in één oogopslag

- **SigenStor EC (Energy Controller):** de omvormer. Hij zet de gelijkspanning (DC) van zonnepanelen en batterij om in wisselspanning (AC) voor het huis en het net, en hij stuurt de energiestromen aan. Hij moet volgens de handleiding samen met PV-modules en SigenStor BAT worden gebruikt.
- **SigenStor BAT:** de batterijmodule. Meerdere modules kunnen aan één EC hangen (1 tot 6 stuks volgens de brochure).
- **Sigen Gateway:** schakelt tussen net en systeem en zorgt voor noodstroom. Zonder gateway heb je geen back-up.
- **Sigen Power Sensor (vermogenssensor):** meet bij het aansluitpunt van het net hoeveel stroom er heen of weer loopt.
- **Sigen CommMod:** een module voor communicatie via 4G, als alternatief voor kabel of wifi.
- **mySigen-app:** hiermee maak je het systeem aan, stel je het in en volg je het.

!!! kern Welke handleiding bij welke vraag
De set bestaat uit een beknopte handleiding, een gebruikershandleiding, "Belangrijke informatie" (veiligheid, transport, opslag), een installatiegids en een onderhoudshandleiding. De installatiegids en de onderhoudshandleiding zijn geschreven voor het 3-fase systeem. Voor de 1-fase uitvoering staat in deze set alleen de beknopte handleiding en de brochure; staat iets voor 1-fase niet in de handleiding, vraag de leverancier.
!!!

### Twee begrippen vooraf

Bij "p." staat de positie in de PDF (1 is de eerste pagina). **MPPT** is de regeling die per groep zonnepanelen (string) het punt met het hoogste vermogen opzoekt. **EMS** (energiemanagementsysteem) is de software in de omvormer die bepaalt wanneer de batterij laadt, ontlaadt of het net wordt gebruikt.`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Plek in het systeem',
      tekst: `Het systeem zit tussen de zonnepanelen, het net en de groepenkast van het huis.

### Hoe de stroom loopt

De handleiding beschrijft het zo (Gebruikershandleiding p. 16): de zonnepanelen leveren gelijkstroom. Die gaat naar de batterij, of wordt door de omvormer omgezet in wisselstroom voor de verbruikers in huis, of gaat naar het net. Als de zon niet genoeg levert, geeft de batterij energie af. Volgens de brochure (p. 7) is de architectuur **DC-gekoppeld**: PV, batterij en eventueel een EV-lader hangen aan een gezamenlijke gelijkspanningsleiding, de **DC-bus**. Dat scheelt omzettingen, dus verlies.

### Drie manieren van aansluiten

De gebruikershandleiding toont drie netwerkschema's (p. 17-20), de installatiegids herhaalt ze (p. 2):

1. **Back-up voor het hele huis:** gateway en een back-up distributiepaneel. Valt het net uit, dan blijft het huis voorzien.
2. **Gedeeltelijke back-up:** naast het back-up paneel is er een niet-back-up paneel. Alleen de belangrijkste groepen krijgen noodstroom. Hier hoort de vermogenssensor bij wanneer je met de gateway ook netaansluiting zonder stroomtoevoer wilt (p. 18-19).
3. **Zonder back-up:** een AC-schakelaar en distributiepaneel, plus vermogenssensor. Geen gateway.

!!! kern Noodstroom en back-up
**Back-up** of **noodstroom** betekent dat de batterij en de zon het huis blijven voeden als het net uitvalt. De brochure noemt een schakeltijd van 0 ms naar back-up, maar alleen als gateway, Energy Controller en batterij samen worden gebruikt (Brochure p. 8-9, voetnoot). In de installatiegids staat dat de gateway een must-have is voor back-upnetwerken (p. 3). Bij uitval van het net levert de omvormer tot twee keer het nominale vermogen, maximaal 10 seconden.
!!!

### Slimme verbruikers

Apparaten met een hoog verbruik (warmtepomp, wasdroger, boiler) kun je als slimme verbruiker aansluiten, zodat ze uitgaan als de batterij bijna leeg is (Installatiegids p. 4). Een dieselgenerator kan via de gateway als back-upbron dienen.

### Uitbreiden

Overleg met de eigenaar of hij later batterijmodules of de **Sigen EV DC Charging Module** (een bidirectionele EV-lader) wil toevoegen, en laat ruimte en kabellengte over (Installatiegids p. 2). De laadmodule is een aparte productfamilie met een eigen installatiegids.`
    },
    {
      id: 'specificaties',
      kop: 'Specificaties in het kort',
      tekst: `De waarden komen uit de brochure (p. 8, 9 en 11) en zijn bereiken over de hele reeks. Voor het exacte model: zie de tabel per model of het gegevensblad, en controleer kritische getallen in de originele PDF.

### Energy Controller

| Waarde | 1-fase (SP) | 3-fase (TP) |
|---|---|---|
| Nominaal AC-vermogen | 3,0 tot 12,0 kW | 5,0 tot 30,0 kW |
| Max. PV-vermogen | 6000 tot 24000 W | 8000 tot 48000 W |
| Max. DC-ingangsspanning | 600 V | 1100 V |
| Nominale DC-ingangsspanning | 350 V | 600 V |
| MPPT-spanningsbereik | 50 tot 550 V | 160 tot 1000 V |
| Aantal MPPT's | 2 tot 4 | 2 tot 4 |
| Max. ingangsstroom per MPPT | 16 A | 16 A |
| Max. uitgangsstroom (net) | 15,0 tot 54,6 A | 8,4 tot 50,0 A |
| Nominale uitgangsspanning | 220 / 230 / 240 V | 380 / 400 V (3 fasen + N + PE) |
| Spanningsbereik batterij | 300 tot 600 V | 600 tot 900 V |
| Batterijmodules per EC | 1 tot 6 | 1 tot 6 |
| Beschermingsklasse | IP66 | IP66 |
| Omgevingstemperatuur in bedrijf | -30 tot 60 °C | -30 tot 60 °C |

**IP66** betekent stofdicht en beschermd tegen krachtige waterstralen. De installatiegids wil de omvormer toch beschut geplaatst hebben (p. 10).

### SigenStor BAT (brochure p. 11)

| Waarde | BAT 6.0 | BAT 10.0 |
|---|---|---|
| Celtype | LiFePO4 (**LFP**, lithium-ijzerfosfaat) | LiFePO4 |
| Totale energie | 6,02 kWh | 9,04 kWh |
| Bruikbare energie | 5,84 kWh | 8,76 kWh |
| Continu laden en ontladen | 3000 W | 4600 W |
| Piek (10 seconden) | 4500 W | 6900 W |
| Ontlaaddiepte | 100% | 100% |
| Gewicht | 62 kg | 78 kg |
| Afmetingen (B/H/D) | 767 / 270 / 265 mm | 767 / 270 / 265 mm |
| Bedrijfstemperatuur | -20 tot 55 °C | -20 tot 55 °C |

De brochure noemt 10.000 cycli, met de kanttekening dat dit door de celfabrikant is opgegeven onder testomstandigheden (25 ± 2 °C, 0,5C, SOH 60%). De batterij moet binnen 7 dagen na volledig ontladen weer worden opgeladen.`
    },
    {
      id: 'installatie',
      kop: 'Installatie in hoofdlijnen',
      tekst: `Alles hieronder komt uit de installatiegids voor het 3-fase systeem (versie 07 van 2025-09-29). Installeren mag alleen door getraind of ervaren elektrisch personeel (Installatiegids p. 2).

### Voorbereiding

1. Lees de installatiegids en "Belangrijke informatie". Overleg met de eigenaar over uitbreidingen (p. 2).
2. Controleer met de paklijst of alles compleet en heel is. Handgreep en hangslot blijven van de eigenaar (p. 7).
3. Zorg voor beschermingsmiddelen (helm, bril, isolerende handschoenen en schoenen) en gereedschap, waaronder momentsleutel en multimeter (p. 7).
4. Kies de plek volgens hoofdstuk 3 (p. 10-12), zie Veiligheid.
5. Leg de kabels klaar. De handleiding geeft voor de AC-kabel een vijfaderige flexibele koperkabel op: 4 tot 6 mm² bij 5 tot 15 kW, 6 tot 10 mm² bij 17 tot 20 kW, 10 tot 16 mm² bij 25 kW en 16 mm² bij 30 kW. Kabels voor PV, netwerk en signaal: p. 8-9.

### Montage

1. Kies vloermontage (hoofdstuk 4.1, p. 13-21) of wandmontage (4.2, p. 22-23). Op de vloer passen tot zes BAT-modules, aan de wand twee. Bij drie of meer BAT's op de vloer is een lift nodig.
2. Zet de batterijmodules waterpas met nivelleerplaten of verstelbare voeten (niet in aardbevingsgebied).
3. Til met de meegeleverde handgreep (4,5 N·m aandraaien, maximaal 100 keer gebruiken, p. 16).
4. Plaats de Energy Controller en zet de basisbeugel vast (p. 18-20). Het hangslot is optioneel en helpt tegen diefstal (p. 21).

### Elektrische aansluiting

Hoofdstuk 5 (p. 24-29 en 35):

1. Alles eerst uit: DC-schakelaar op UIT en de voorliggende AC-schakelaar uit (p. 24).
2. Sluit **eerst de aarding** aan (5.3, p. 26).
3. Sluit de AC-uitgang aan (5.4, p. 26-29). L1, L2, L3, N en PE in de juiste volgorde.
4. Sluit de PV-strings aan (5.6, p. 35): 5,0 tot 8,0 kW heeft twee kanalen, 10,0 tot 15,0 kW drie en 17,0 tot 30,0 kW vier. Gebruik alleen de meegeleverde PV-connectors.
5. Bepaal de AC-schakelaar in de groepenkast: minimaal 380 V AC, met aanbevolen stroom van 25 A (5,0-8,0 kW), 32 A (10,0-15,0 kW), 40 A (17,0-20,0 kW), 50 A (25,0 kW) of 63 A (30,0 kW), zie Installatiegids p. 3.

### Communicatie

1. **RS485 naar de vermogenssensor** en optioneel naar een energiemanagementsysteem van derden of een warmtepomp (5.5, p. 30-31).
2. **Droge contacten en digitale ingangen** voor externe apparaten, netplanning en de **NS-beveiliging** (p. 32-34).
3. **Netwerk:** twee RJ45-poorten, één naar de router en één naar andere apparaten zoals omvormers of gateways (5.7, p. 36).
4. **Wifi-antenne** vastdraaien (5.8) of **CommMod** voor 4G plaatsen (5.10, p. 37). Bij verbruikte gratis data vervang je de SIM-kaart (5.9).

Sluit af met de controle na installatie (hoofdstuk 6, p. 38) en plaats de decoratieve afdekking (hoofdstuk 7, p. 39).`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling',
      tekst: `De inbedrijfstelling staat in hoofdstuk 8 en 9 van de installatiegids (p. 40-43). De stappen in het kort:

1. **Zet de voorliggende AC-schakelaar aan.**
2. **Draai de DC-SCHAKELAAR naar AAN** (p. 40).
3. **Lees de LED-indicatoren op de voorzijde van de omvormer.** Er zijn indicatoren voor DC-zijde, AC-zijde, energieopslag en communicatie. Ze tonen onder meer of de DC-zijde actief is, of het systeem netgekoppeld of off-grid draait, of de batterij laadt of ontlaadt en hoe de verbinding loopt. De volledige tabel staat op p. 40 (installatiegids) en p. 28-29 (gebruikershandleiding).
4. **Maak een account** via het Partner-gedeelte van de website van Sigenergy en registreer daar (p. 41).
5. **Download de mySigen-app** en maak een nieuw systeem aan. Scan het serienummer (SN) van het label op het doosmateriaal, of van de zijkant van de omvormer (p. 41-42).
6. **Laat de eigenaar zijn e-mail van sigencloud controleren** en zijn account binnen 24 uur activeren (p. 42).
7. **Plaats de resterende decoratieve afdekkingen** (p. 43).

### Instellingen

De instellingen doe je in de mySigen-app. Volgens de gebruikershandleiding (p. 25-27) kent het systeem vier werkmodi:

- **Sigen AI-modus:** leert het verbruik en de stroomprijs en stuurt daarop (alleen in bepaalde landen).
- **Volledige voeding van het net:** zoveel mogelijk PV-opbrengst terugleveren.
- **Eigenverbruik:** zon gaat eerst naar het huis, dan de batterij, dan het net.
- **Tijdsgebaseerde regeling:** je stelt handmatig laad- en ontlaadperiodes in.

Met een gateway kun je ook een **reserve back-up** instellen: het minimale laadniveau (SOC, state of charge) dat de batterij bewaart voor noodstroom (p. 27). Netplanning en NS-beveiliging worden eveneens in de app ingesteld (Installatiegids p. 31-34). Voor de exacte menu's verwijst de handleiding naar aparte mySigen-documenten die niet in deze set zitten.

Apparaat aan of uit via de app: Instellingen, aan/uit. Handmatig: verwijder de decoratieve afdekking en houd de AAN/UIT-knop langer dan 3 seconden ingedrukt, met meer dan 10 seconden tussen uit en aan (Gebruikershandleiding p. 32).`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid en let op',
      tekst: `!!! gevaar Spanningsloos werken en meten
Werk niet aan het systeem terwijl het aan staat. Zet alle toevoer uit: net, omvormer en eventuele dieselgenerator (Installatiegids p. 24). Na uitschakelen ontladen interne onderdelen vertraagd: het etiket noemt 10 minuten wachten (Gebruikershandleiding p. 15). Meet de spanning op het aansluitpunt voor je iets aanraakt (Belangrijke informatie p. 14).
!!!

!!! info DC-zijde en batterij
De handleiding zegt niet met zoveel woorden dat de DC-zijde onder spanning blijft na uitschakelen. Uit de cursus weet je wel: panelen leveren spanning zolang er licht is en een batterij blijft een bron. Meet dus altijd na.
!!!

### Aarding en aansluiten

- Aardingskabel **eerst** aansluiten en bij vervanging **als laatste** losmaken (Belangrijke informatie p. 14).
- Tussen gateway en huishoudelijke belasting hoort een aardlekschakelaar (RCD) tegen elektrische schok bij lekstroom (Installatiegids p. 3). Voor het niet-back-up paneel noemt de handleiding minimaal het aantal omvormers x 100 mA (p. 4), waarschijnlijk de nominale reststroom.
- Monteer op de PV-ingang alleen de meegeleverde connectors en corrigeer omgekeerde polariteit direct (p. 35).
- Kabels alleen verwerken boven 0 °C; na lange kou eerst minimaal 24 uur opwarmen (Belangrijke informatie p. 17).

### Plaatsing en vrije ruimte

- Niet in een omgeving met rook of ontvlambare of explosieve stoffen, niet in direct zonlicht, regen of stof, en niet in een afgesloten, slecht geventileerde ruimte zonder brandbeveiliging (Installatiegids p. 10).
- Minimaal 500 m van bronnen van zout- of zuurcorrosie zoals de zeekust (p. 10).
- Niet op een brandbare ondergrond, niet waar leidingen of kabels in de wand lopen en niet binnen bereik van kinderen (p. 10-11). In een garage niet waar een voertuig kan aanrijden.
- Binnen goed ventileren: de binnentemperatuur mag niet met meer dan 3 °C stijgen door het apparaat (p. 10).
- Dek de afdekking nooit af en houd het warmteafvoerkanaal van 300 tot 600 mm vrij (Gebruikershandleiding p. 8). Maatschema's: Installatiegids p. 11-12, Beknopte handleiding p. 1.

### Temperatuur

Bedrijfstemperatuur -20 tot 55 °C, optimaal 10 tot 35 °C. Onder 0 °C laadt de batterij niet meteen: de ingebouwde verwarming start eerst (en verbruikt stroom). Boven 40 °C daalt het vermogen en slijt het apparaat sneller (Gebruikershandleiding p. 23).

### Batterij en brand

!!! gevaar Batterijveiligheid
Batterijsystemen hebben een hoog brandrisico en defecte modules kunnen brandbare en giftige gassen afgeven. Vervangen mag alleen door of onder toezicht van professionals. Meng geen batterijen van andere merken en gebruik een module na een val of schok niet meer (Belangrijke informatie p. 18, Installatiegids p. 13). Bij brand: veilig uitschakelen, kleine brand blussen met CO2 of ABC-poeder, anders het gebouw verlaten en de brandweer bellen (Gebruikershandleiding p. 35).
!!!

- Elektrolyt (de batterijvloeistof) is bijtend: bij contact met de ogen minstens 15 minuten spoelen en medische hulp inschakelen (Gebruikershandleiding p. 36).
- De batterij moet tijdig worden opgeladen: binnen 30 dagen bij een lading vanaf 10%, binnen 7 dagen bij 0 tot 10% (p. 34).
- Opslag van modules: -25 tot 60 °C, op 40 ± 5% lading, en afhankelijk van de temperatuur na 6 tot 15 maanden bijladen (Belangrijke informatie p. 12-13).
- Niet gebruiken voor kritische toepassingen zoals medische noodapparatuur of liften (Gebruikershandleiding p. 9).`
    },
    {
      id: 'alarmen-en-storingen',
      kop: 'Alarmen en storingen',
      tekst: `Het systeem meldt zich op drie manieren:

- **LED-indicatoren op de omvormer** voor DC-zijde, AC-zijde, batterij en communicatie, met een tabel voor vaste en knipperende lampjes (Installatiegids p. 40, Gebruikershandleiding p. 28-29). Bij de batterij betekent knipperen laden of ontladen en een vaste lamp dat alle modules defect zijn.
- **CommMod-lampjes** voor het 4G-netwerk (p. 37 en p. 29).
- **De mySigen-app**, waarin je de batterijstatus in real-time volgt. De brochure noemt ook een slimme diagnose in de app (Brochure p. 5-6).

### Alarmlijst

Een **lijst met alarmcodes** voor SigenStor Home zit niet in deze set. De installateursdocumenten zijn genummerd 01, 02 en 04; nummer 03 ontbreekt. Bij andere Sigen-producten heet document 03 "Lijst van alarmeringen", maar of dat hier ook zo is, staat niet in de handleiding: vraag de leverancier.

Wat de handleiding wel zegt bij storingen: bij afwijkingen (lekkage, vervorming) niet zelf demonteren maar de installateur bellen (Beknopte handleiding p. 2), en het systeem niet gebruiken als het niet wil opladen (Gebruikershandleiding p. 9).`
    },
    {
      id: 'onderhoud',
      kop: 'Onderhoud',
      tekst: `### Routineonderhoud (Gebruikershandleiding p. 31)

- **Reiniging:** kijk regelmatig of de decoratieve afdekking vuil of beschadigd is en reinig zo nodig. Gebruik geen staalborstels of natte doeken, en schakel het systeem hiervoor uit. De tabel noemt "elke drie maanden" en "elke zes maanden"; welk interval waarvoor geldt, is uit de tekst niet op te maken.
- **Controle tijdens werking:** kijk naar schade of vervorming, luister naar vreemde geluiden en controleer of de parameters kloppen. Dit kan zonder uit te schakelen.
- Bij langdurige inactiviteit geeft het systeem een herinnering en schakelt het uit veiligheidsoverwegingen uiteindelijk zelf uit (p. 33).

### Vervanging van onderdelen (Onderhoudshandleiding p. 9-12)

De onderhoudshandleiding beschrijft alleen de **vervanging van de ventilator**, in drie stappen: systeem uitschakelen (2.1), ventilator verwijderen en nieuwe plaatsen (2.2), systeem inschakelen (2.3). De handleiding bestaat vooral uit tekeningen. Je hebt onder meer een momentsleutel en isolerend schroevendraaiergereedschap nodig (p. 7), en dezelfde etikettenwaarschuwingen gelden: 10 minuten wachten (p. 8).

Voor onderhoud of vervanging geldt verder (Belangrijke informatie p. 18): uitschakelen, wachten tot de vertragingstijd op het etiket is verstreken, pas inschakelen na herstel. Bij krassen in de lak tijdig bijwerken, want roest valt niet onder de garantie (p. 15).`
    }
  ],

  handleidingRefs: [
    { doc: 'ig', hoofdstuk: '1 Inleiding Driefasensysteem, 1.1 Inleiding netwerken', paginas: '2-5', onderwerp: 'Onderdelenlijst, aansluitschema back-up en niet-redundant, AC-schakelaar en aardlekadvies' },
    { doc: 'ig', hoofdstuk: '1.2 Uiterlijk en afmetingen, 1.3 Poortbeschrijvingen', paginas: '6', onderwerp: 'Poorten en schakelaars van de omvormer' },
    { doc: 'ig', hoofdstuk: '2 Controle voorafgaand aan installatie', paginas: '7-9', onderwerp: 'Paklijst, beschermingsmiddelen, gereedschap, kabelspecificaties' },
    { doc: 'ig', hoofdstuk: '3 Vereisten keuze locatie', paginas: '10-12', onderwerp: 'Omgeving, positie, ondergrond en vrije ruimtes' },
    { doc: 'ig', hoofdstuk: '4 Installatie van omvormer en accupak', paginas: '13-23', onderwerp: 'Vloermontage en wandmontage van BAT en EC' },
    { doc: 'ig', hoofdstuk: '5 Kabelverbinding en installatie van componenten, 5.3 en 5.4', paginas: '24-29', onderwerp: 'Aarding en AC-uitgang' },
    { doc: 'ig', hoofdstuk: '5.5 Aansluiting signaalkabel', paginas: '30-34', onderwerp: 'COM-poort, RS485, droge contacten, netplanning en NS-beveiliging' },
    { doc: 'ig', hoofdstuk: '5.6 DC-inputkabel van omvormer, 5.7 RJ45 kabel, 5.8 WLAN-antennestokinstallatie, 5.9 en 5.10 CommMod', paginas: '35-37', onderwerp: 'PV-strings, netwerkkabel, wifi en 4G' },
    { doc: 'ig', hoofdstuk: '6 Controle na de installatie', paginas: '38', onderwerp: 'Controlelijst voor oplevering' },
    { doc: 'ig', hoofdstuk: '8 Aanzetten apparatuur, 9 Download en zet een nieuw systeem voor de mySigen-app op', paginas: '40-43', onderwerp: 'Inschakelen, LED-status en het aanmaken van het systeem in de app' },
    { doc: 'bi', hoofdstuk: '3 Vereisten voor behandeling en transport, 3.2 Batterijpakket', paginas: '9-11', onderwerp: 'Tillen, transport en gevaarlijke goederen' },
    { doc: 'bi', hoofdstuk: 'Opslagvereisten', paginas: '12-13', onderwerp: 'Opslagtemperatuur, laadniveau en oplaadperiode' },
    { doc: 'bi', hoofdstuk: '5 Bedrijfsvereisten, 5.1 Routinevereisten', paginas: '14-15', onderwerp: 'Hoogspanning, aarding, beschermingsmiddelen' },
    { doc: 'bi', hoofdstuk: '5.2 Installatie van de apparatuur, 5.3 Kabelverbinding, 5.4 Onderhoud en vervanging van apparatuur', paginas: '16-18', onderwerp: 'Ladder en boren, kabelwerk, batterijvervanging en brandrisico' },
    { doc: 'geb', hoofdstuk: '2.1 Productintroductie', paginas: '10-12', onderwerp: 'Modellen EC, AC, Hybrid, BAT, vermogenssensor en CommMod' },
    { doc: 'geb', hoofdstuk: '2.4 Inleiding voor typisch netwerk', paginas: '16-20', onderwerp: 'Drie netwerkschema\'s en AC-schakelaar' },
    { doc: 'geb', hoofdstuk: 'Vereisten keuze locatie', paginas: '21-23', onderwerp: 'Omgeving, positie en temperatuur' },
    { doc: 'geb', hoofdstuk: '5 Systeemwerking, 5.1 Werkmodus, 5.2 LED-indicatorstatus', paginas: '25-29', onderwerp: 'Vier werkmodi, reserve back-up en LED-betekenissen' },
    { doc: 'geb', hoofdstuk: '6 Systeem Onderhoud, 6.1 tot 6.4', paginas: '31-36', onderwerp: 'Routineonderhoud, in- en uitschakelen, SOC laag en noodgevallen' },
    { doc: 'on', hoofdstuk: '2 Vervanging van onderdelen, 2.2 Vervanging van de ventilator', paginas: '9-12', onderwerp: 'Ventilator vervangen (vooral tekeningen)' },
    { doc: 'bt3', hoofdstuk: 'Voorzorgsmaatregelen voor de installatie', paginas: '1', onderwerp: 'Vrije ruimtes en afstanden op tekening, QR-code voor de app' },
    { doc: 'bt1', hoofdstuk: 'Voorzorgsmaatregelen voor dagelijks gebruik (1-fase)', paginas: '2', onderwerp: 'Bij afwijkingen installateur bellen, niet zelf demonteren' },
    { doc: 'br', hoofdstuk: 'Sigen Energy Controller 3.0-12.0 kW 1-fase en 5.0-30.0 kW 3-fase', paginas: '8-9', onderwerp: 'Specificaties van de Energy Controller' },
    { doc: 'br', hoofdstuk: 'Sigen Battery 6.0 / 10.0', paginas: '11', onderwerp: 'Specificaties van de batterijmodule' }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm01l03', 'm02l05', 'm06l03', 'm03l05'],

  zieOok: ['sigenergy-hybrid-omvormer', 'sigenergy-batterij', 'sigenergy-gateway', 'sigenergy-power-sensor', 'sigenergy-ev-dc-module', 'sigenergy-mysigen-app']
});
