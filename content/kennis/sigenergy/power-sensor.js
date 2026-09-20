/* ==========================================================================
   content/kennis/sigenergy/power-sensor.js - Sigen Power Sensor en Sigen Communication Module
   Samenvatting in eigen woorden. Paginanummers verwijzen naar de positie in
   de pdf (1 = eerste pagina), niet naar het gedrukte paginanummer.
   ========================================================================== */

KENNIS.addProduct({
  id: 'sigenergy-power-sensor',
  merk: 'sigenergy',
  slug: 'power-sensor',
  naam: 'Sigen Power Sensor en communicatiemodule',
  rol: 'sensor',
  toepassingen: ['thuisbatterij', 'laadpaal'],
  korteOmschrijving: 'De stroom- en vermogenssensoren van Sigenergy (SP-CT100, TP-CT100, SP-DH, TP-DH en de draadloze WI-varianten voor SigenMicro) meten wat het huis van het net afneemt of teruglevert. De Sigen Communication Module (CommMod) is de USB-steker met simkaart waarmee een omvormer via 4G met de cloud praat.',

  varianten: {
    kop: ['Model', 'Net', 'Meting', 'Max. stroom', 'Communicatie', 'Afmetingen B / H / D (mm)', 'Gewicht'],
    rijen: [
      ['SP-CT100-WI', '1P2W (1-fase)', 'CT, alleen voor SigenMicro', '100 A', 'RS485 of WLAN 2,4 GHz', '19 / 90 / 66', '0,1 kg'],
      ['TP-CT100-WI', '3P3W of 3P4W (3-fase)', 'CT, alleen voor SigenMicro', '100 A', 'RS485 of WLAN 2,4 GHz', '19 / 90 / 66', '0,1 kg'],
      ['SP-DH', '1P2W (1-fase)', 'Direct, geen CT', '100 A', 'RS485, Modbus RTU, 9600 bps', '36 / 100 / 63', '0,20 kg'],
      ['SP-CT100', '1P2W (1-fase)', '1 CT', '100 A (CT)', 'RS485, Modbus RTU, 9600 bps', '19 / 94,5 / 68,5 of 18 / 100 / 65,5', '0,07 kg'],
      ['TP-DH', '3P3W of 3P4W (3-fase)', 'Direct, geen CT', '100 A', 'RS485, Modbus RTU, 9600 bps', '72 / 100 / 66', '0,32 kg'],
      ['TP-CT100', '3P3W of 3P4W (3-fase)', '3 CT', '100 A (CT)', 'RS485, Modbus RTU, 9600 bps', '19 / 94,5 / 68,5 of 18 / 100 / 65,5', '0,08 kg']
    ]
  },

  documenten: [
    { id: 'br', titel: 'Brochure - Thuis Energieoplossing', soort: 'Brochure', paginas: 23 },
    { id: 'ig3f', titel: 'Installatiegids voor SigenStor Home - Driefasensysteem A1_NL', soort: 'Installatiegids', paginas: 44 },
    { id: 'gh3f', titel: 'Gebruikershandleiding voor SigenStor Home - Driefasensysteem A1_NL', soort: 'Gebruikershandleiding', paginas: 37 },
    { id: 'igtp2', titel: 'Installatiegids voor Sigen Hybrid (3.0-12.0) TP2-serie_NL', soort: 'Installatiegids', paginas: 20 },
    { id: 'igsp2', titel: 'Installatiegids voor Sigen Hybrid (2.0-6.0) SP2-serie_NL', soort: 'Installatiegids', paginas: 20 },
    { id: 'evac', titel: 'Installatiegids voor Sigen EV AC Charger_NL', soort: 'Installatiegids', paginas: 22 },
    { id: 'alarm', titel: 'Lijst van alarmeringen_NL (bij de Sigen Hybrid TP2-serie)', soort: 'Alarmlijst', paginas: 23 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `Een **vermogenssensor** (Engels: *power sensor*) meet op een vast punt hoeveel stroom en vermogen er loopt. Sigenergy heeft **SP-modellen** voor een 1-fase aansluiting en **TP-modellen** voor 3-fase. Binnen elke familie zijn er twee soorten:

- **DH-typen** (SP-DH en TP-DH): de sensor meet zelf, zonder losse stroomklemmen, tot 100 A.
- **CT-typen** (SP-CT100 en TP-CT100): de sensor werkt met een of drie **CT's**. Een CT (*current transformer*, stroomtransformator) is een ring of klem die je om de draad legt en die de stroom meet via het magnetische veld, zonder de draad te onderbreken. Het principe lijkt op de stroomtang uit de les over meten. De CT's zijn bedoeld voor maximaal 100 A.

De **WI-varianten** (SP-CT100-WI en TP-CT100-WI) zijn alleen voor de SigenMicro-serie (micro-omvormers). Ze hebben WLAN op 2,4 GHz en verbinden volgens de brochure direct met de cloud. De afkorting WI wordt niet uitgelegd.

### De communicatiemodule

De **Sigen Communication Module** (in de gidsen **CommMod**) is een compact kastje met USB-aansluiting, micro-simkaart en led-lampjes. Hij meet niets, maar geeft een omvormer mobiel internet (2G, 3G of 4G), zodat het systeem ook zonder wifi of netwerkkabel met de cloud en de app praat.

!!! kern De sensor meet, de CommMod verbindt
De sensor vertelt het systeem wat er bij het net gebeurt. De CommMod brengt de gegevens naar de cloud. Je komt ze vaak samen tegen in dezelfde installatiegids.
!!!`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Plek in het systeem',
      tekst: `### Waarom is de sensor nodig

Een omvormer weet wat hij zelf levert, maar niet wat het huis verbruikt of naar het net gaat. Daarvoor moet je meten op het **aansluitpunt met het net**. De gidsen tekenen de sensor daarom aan de netzijde. Zo kan het systeem bepalen hoeveel zonne-energie er over is voor de batterij of de auto.

Wanneer je de sensor nodig hebt, hangt af van de opstelling:

- Bij **gedeeltelijke back-up** (alleen een deel van de groepen blijft aan bij netuitval) hoeft de sensor niet geconfigureerd te worden. Wil je daarbij een netaansluiting **zonder stroomtoevoer** (de handleiding legt dat niet verder uit), dan wel.
- In het schema voor **back-up van het hele huis** staat geen sensor getekend, in het schema **zonder back-up** wel.
- De **Sigen EV AC Charger** kan dynamisch lastbeheer (overbelasting van het huis voorkomen) alleen met de Sigen Power Sensor.

### RS485 en Modbus

De sensor praat met de omvormer over **RS485**: een tweedraads seriële bus (draden A+ en B-) die tegen storing kan. De taal heet **Modbus RTU**, veelgebruikt voor meters en industriële apparatuur, met 9600 bps. Dit past bij de les over bussystemen: een bus is een kabel waarover berichten gaan.

### Draadloos

De SP-DH, SP-CT100, TP-DH en TP-CT100 kunnen draadloos werken met de **Sigen Sensor Sub1G Kit** (868 MHz, IEEE 802.11ah, ook WiFi HaLow). De kit kent twee werkmodi: **AP** (*access point*, hoofdapparaat) en **STA** (*station*, slaveapparaat). In open ruimte haalt hij volgens laboratoriumtests tot 200 m, met muren ertussen minder. De COM-poort van de Sigen Hybrid heeft een gereserveerde 5 V-voeding voor de Sub1G-module. Hoe je de modules koppelt, staat niet in de brochure.

### CommMod en verbinding

De gidsen raden **FE** (netwerkkabel) en **WLAN** aan. De CommMod is voor 4G en past in de poort met opdruk 4G. Er zit gratis 4G-verkeer bij (hoeveel staat er niet). Is dat op, of ontbreekt de simkaart, dan vervang je de simkaart door een kaart uit het land van installatie, met een dataplan van 50 MB per maand maal het aantal omvormers. Volgens de gebruikershandleiding moet de gebruiker na twee jaar zelf zijn 4G-abonnement opwaarderen.`
    },
    {
      id: 'specificaties',
      kop: 'Specificaties',
      tekst: `De tabel bovenaan vergelijkt de types. Overige waarden uit de brochure (pagina 16, 18 en 19):

### Sensoren

| Eigenschap | Waarde |
|---|---|
| Frequentie | 50 of 60 Hz |
| Nauwkeurigheid spanning / vermogen | 0,5 % / 1 % |
| Montage | DIN-rail 35 mm |
| Beschermingsgraad | IP20 |
| Werktemperatuur (p. 18) | -25 tot 65 graden C |
| CT-kabel, binnendiameter CT | 1 m, 24 of 16 mm |

Voor de CT-typen geeft de brochure twee waarden voor diameter en gewicht. Een voetnoot zegt dat sensoren van twee fabrikanten door elkaar geleverd worden omdat ze functioneel gelijk zijn. Kijk dus naar wat je ontvangt. Het ingangsbereik van de 3-fase-types is in de brochuretekst lastig te lezen (173 tot 480 V fase-fase, 176 tot 276 V fase-nul): controleer het in de pdf.

### Sub1G-kit en communicatiemodule

| Eigenschap | Sub1G-kit | CommMod |
|---|---|---|
| Aansluiting | RS485 of draadloos | USB, plug-and-play |
| Bereik of netwerk | 868 MHz, tot 200 m open ruimte | LTE, WCDMA en GSM, micro-SIM |
| Voeding | 85 tot 277 V wissel | minder dan 4 W |
| Afmetingen (mm) | 18 / 118 / 66 | 52 / 112 / 33 |
| Bescherming | niet vermeld | IP66 |
| Past bij | sensoren | Sigen Energy Controller- en Hybrid-serie |`
    },
    {
      id: 'installatie',
      kop: 'Installatie in hoofdlijnen',
      tekst: `De sensor gaat op een DIN-rail van 35 mm. De bedrading van de sensor zelf staat in de handleiding **in de verpakking van de sensor**. De installatiegidsen beschrijven vooral de kant van de omvormer.

1. **Kies de sensor** bij het systeem: 1-fase of 3-fase, met of zonder CT's, via het officiële kanaal.
2. **Verbind RS485** met de COM-poort van de omvormer. **RS485-2** is voor de sensor aan de netzijde, **RS485-1** is een aanpasbare poort voor bijvoorbeeld een energiemanagementsysteem van een ander merk, een meter of een warmtepomp. Bij de 3-fasetypen gaat A+ naar klem 14 en B- naar klem 13 van de sensor, met een afgeschermde kabel.
3. **De laadpaal** gebruikt dezelfde RS485-verbinding naar de sensor (bij de TP-CT120-DH ook op klem 14 en 13).
4. **CommMod:** steek hem in de poort 4G. De lampjes: langzaam knipperen is verbinden of stand-by, snel knipperen is gegevens versturen.
5. **Maak het systeem aan in de mySigen-app.** Bij een Gateway met gedeeltelijke back-up moeten Gateway en sensor geactiveerd worden. Hoe, staat niet in deze gidsen.

### Let op: de types verschillen per document

De brochure noemt SP-CT100 en TP-CT100. De installatiegidsen noemen **TP-DH, TP-CT120-DH, TP-CT300-DH en TP-CT600-DH** (3-fase) en **SP-DH en SP-CT120-DH** (1-fase), met een metertype erachter, bijvoorbeeld SDM630MCT 40mA/120A. Wat DH betekent, staat nergens. Ga uit van wat op de sensor en in de meegeleverde handleiding staat. De sensoraansluiting staat niet in de Gateway-installatiegidsen (Home en HomePro), wel in die van de omvormers.`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid',
      tekst: `Alleen wat de handleidingen zelf zeggen:

!!! gevaar Spanningsloos werken
Voor het bedraden moeten omvormer en aangesloten apparatuur spanningsloos zijn. Bij de driefasige SigenStor Home hoort daarbij: DC-schakelaar UIT, voorste AC-schakelaar uit en alle stroomtoevoer uit, ook net, omvormer en dieselgenerator. Werk niet aan ingeschakelde apparatuur.
!!!

- Alleen **getrainde of gekwalificeerde personen** mogen aan de apparatuur werken.
- Koop sensoren via het **officiële kanaal** van Sigenergy.
- Houd de **voedingskabel gescheiden van de signaalkabel** en beperk de lengte van de signaalkabel.
- **Verkeerd aangesloten CT's** geven een alarm (omgekeerde aansluiting per fase A, B of C, of verkeerde bedrading). Het advies is herbedraden. Ook een communicatiefout met de sensor is een alarm.

!!! info Wat hier niet staat
De handleidingen bevatten geen waarschuwing over CT's die je nooit open mag laten onder belasting. Dat staat niet in de handleiding. Kijk in de handleiding bij de sensor en vraag het een ervaren collega.
!!!

?? Wat is het verschil tussen 1P2W en 3P3W/3P4W?
1P2W is een enkelfasig net met twee draden (fase en nul). 3P3W is 3-fase met drie draden, 3P4W is 3-fase met vier draden (drie fasen plus nul). Zie de les over 1-fase en 3-fase.
??`
    }
  ],

  handleidingRefs: [
    { doc: 'br', hoofdstuk: 'Sigen Power Sensor (SP-CT100-WI, TP-CT100-WI)', paginas: '16', onderwerp: 'Draadloze CT-sensoren voor SigenMicro met specificaties' },
    { doc: 'br', hoofdstuk: 'Sigen Power Sensor (SP-DH, SP-CT100, TP-DH, TP-CT100) en Sigen Sensor Sub1G Kit', paginas: '18', onderwerp: 'Vergelijkingstabel van alle sensoren en de draadloze Sub1G-kit' },
    { doc: 'br', hoofdstuk: 'Sigen Communication Module', paginas: '19', onderwerp: '4G-module met simkaart, IP66 en compatibiliteit' },
    { doc: 'br', hoofdstuk: 'Sigen EV AC Charger 7 / 11 / 22 kW', paginas: '17', onderwerp: 'Dynamisch lastbeheer en overschotladen werken alleen met de Sigen Power Sensor' },
    { doc: 'ig3f', hoofdstuk: '1.1 Inleiding netwerken', paginas: '2-5', onderwerp: 'Plaats van de vermogenssensor en de CommMod in het systeem, sensortypes voor 3-fase' },
    { doc: 'ig3f', hoofdstuk: '5.5 Aansluiting signaalkabel (5.5.1 COM-aansluiting, 5.5.2 RS485-signaalkabel)', paginas: '30-31', onderwerp: 'RS485-2 naar de netsensor, klemmen 13 en 14' },
    { doc: 'ig3f', hoofdstuk: '5.9 SIM-kaart van Sigen CommMod vervangen en 5.10 Sigen CommMod installatie', paginas: '37', onderwerp: 'Simkaart vervangen en de led-indicatoren van de CommMod' },
    { doc: 'gh3f', hoofdstuk: '2.1 Productintroductie en 2.4 Inleiding voor typisch netwerk', paginas: '10-19', onderwerp: 'Sensortypes en CommMod, netwerkschema\'s met en zonder sensor, 4G-abonnement na twee jaar' },
    { doc: 'igtp2', hoofdstuk: '5 Kabelaansluiting en installatie van onderdelen (5.2 Beschrijving van de COM-poort)', paginas: '9-11', onderwerp: 'COM-poort van de Sigen Hybrid: RS485-2 voor de netsensor, 5 V voor de Sub1G-module' },
    { doc: 'igtp2', hoofdstuk: '5.7 Vervanging van de SIM-kaart en 5.8 Installatie van Sigen CommMod', paginas: '15', onderwerp: 'Aanbevolen dataplan en de led-lampjes van de CommMod' },
    { doc: 'igsp2', hoofdstuk: '5.2 Beschrijving van de COM-poort', paginas: '11', onderwerp: 'Klemmen voor SP-DH en SP-CT120-DH op de 1-fase Hybrid' },
    { doc: 'evac', hoofdstuk: '5.4 RS485/DO signaalkabelverbinding', paginas: '15', onderwerp: 'RS485-verbinding tussen de laadpaal en de vermogenssensor' },
    { doc: 'alarm', hoofdstuk: 'Lijst van alarmeringen', paginas: '20', onderwerp: 'Alarmen voor communicatiefout met de sensor en omgekeerd aangesloten CT' }
  ],

  cursusLinks: ['m10l04', 'm02l05', 'm07l02', 'm11l02'],
  zieOok: ['sigenergy-sigenstor-home', 'sigenergy-hybrid-omvormer', 'sigenergy-gateway', 'sigenergy-ev-ac-lader', 'sigenergy-mysigen-app']
});
