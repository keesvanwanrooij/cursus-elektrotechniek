/* ==========================================================================
   content/kennis/enphase/iq-ev-charger-2.js - Enphase IQ EV Charger 2
   Samenvatting in eigen woorden. Paginanummers verwijzen naar de positie in
   de pdf (1 = eerste pagina). In de snelle installatiegids valt dat samen met
   het gedrukte nummer NL-x; in de andere documenten niet altijd.
   ========================================================================== */

KENNIS.addProduct({
  id: 'enphase-iq-ev-charger-2',
  merk: 'enphase',
  slug: 'iq-ev-charger-2',
  naam: 'Enphase IQ EV Charger 2 (stopcontact of vaste kabel, 1- en 3-fase)',
  rol: 'lader',
  toepassingen: ['laadpaal', 'thuisbatterij'],
  korteOmschrijving: 'Een AC-laadpaal van Enphase voor aan de muur, met een Type 2-stopcontact of een vaste kabel van 7,5 m. Je sluit hem eenfasig of driefasig aan en stelt de laadstroom in tussen 6 en 32 A. Werkt los of samen met zonnepanelen en IQ Battery, met ingebouwde MID-meter, gelijkstroomlekdetectie van 6 mA en dynamische load balancing via de IQ Gateway.',

  varianten: {
    kop: ['Uitvoering', 'SKU', 'Aansluiting auto', 'Meegeleverd', 'Afmetingen (L x B x D)', 'Gewicht'],
    rijen: [
      ['Met contactdoos', 'IQ-EVSE-EU-3032-0005-1300', 'Type 2-stopcontact met afdekklepjes (shutter)', 'Lader, montagebeugel, wartels. Laadkabel en holster los te koop', '410 x 250 x 128 mm', '6 kg'],
      ['Vast (verbonden)', 'IQ-EVSE-EU-3032-0105-1300', 'Vaste Type 2-laadkabel van 7,5 m', 'Lader, montagebeugel, wartels, kabel en connectorholster', '370 x 250 x 118 mm', '11 kg met kabel']
    ]
  },

  documenten: [
    { id: 'qig', titel: 'IQ EV Charger 2 snelle installatiegids (140-00515)', soort: 'Installatiegids', paginas: 30 },
    { id: 'cg', titel: 'IQ EV Charger 2 inbedrijfstellingsgids voor elektriciens en huiseigenaren (USG-00067)', soort: 'Inbedrijfstellingsgids', paginas: 11 },
    { id: 'tc', titel: 'IQ EV Charger 2 installatieconfiguraties (TEB-00211)', soort: 'Technische instructies', paginas: 13 },
    { id: 'dlb', titel: 'IQ EV Charger 2 Dynamic Load Balancing (TEB-00274)', soort: 'Technische instructies', paginas: 10 },
    { id: 'app', titel: 'Enphase App installatiegids voor IQ EV Charger 2 als standalone systeem (USG-00093)', soort: 'App-handleiding', paginas: 10 },
    { id: 'ds', titel: 'Gegevensblad IQ EV Charger 2 (DSH-00539, NL)', soort: 'Gegevensblad', paginas: 4 },
    { id: 'bidi', titel: 'Data sheet IQ Bidirectional EV Charger (DSH-00921, Engels, voorlopig)', soort: 'Gegevensblad', paginas: 5 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `De IQ EV Charger 2 is een laadpaal voor aan de muur die een auto laadt met wisselstroom (AC). De lader in de auto zet die om naar gelijkstroom voor de accu. De laadpaal zelf schakelt en bewaakt alleen de wisselstroom.

Hij werkt **standalone** (alleen de lader op een eigen groep, bediend met de Enphase App) of **geïntegreerd** met zonnepanelen, een IQ Gateway en eventueel een IQ Battery. Dan laadt de auto met zonne-overschot en past de lader zijn vermogen aan aan het verbruik van het huis.

Hij past op elke auto met een **Type 2**-laadpoort (ook Mennekes genoemd), de Europese standaardstekker voor AC-laden. Ingebouwd zit een **MID-meter**: een gecertificeerde kWh-meter (klasse B, 1% nauwkeurig) waarmee laadsessies officieel te registreren zijn, bijvoorbeeld voor een vergoeding.

!!! info Als je Sigenergy al kent
De Sigen EV AC Charger bestaat in drie aparte vermogens (7, 11 en 22 kW). Bij Enphase is er één lader die je eenfasig of driefasig aansluit en in de app instelt op 6 tot 32 A. Grote verschillen voor jou als installateur:

- **Lekstroom:** Sigen heeft zowel 6 mA DC- als 30 mA AC-detectie ingebouwd. Enphase heeft alleen de 6 mA DC-detectie (RDC-DD) en eist daarnaast een eigen **30 mA aardlek type A** of een RCBO type A in de groepenkast.
- **Automaat:** Sigen schrijft karakteristiek B voor, Enphase **karakteristiek C** op 125% van de ingestelde laadstroom.
- **Meting voor load balancing:** Sigen gebruikt de Sigen Power Sensor via RS485. Enphase gebruikt de **IQ Gateway Metered met consumptie-CT's**, die via het thuisnetwerk (Wi-Fi of Ethernet) met de lader praat.
- Enphase schakelt automatisch tussen drie fasen en één fase, heeft een MID-meter en een kabel van 7,5 m (Sigen: 5 m). Beschermingsgraad IP55, Sigen IP65.
!!!`
    },
    {
      id: 'varianten-en-keuze',
      kop: 'Uitvoeringen en hoe je kiest',
      tekst: `Er zijn twee uitvoeringen (zie de tabel). Het verschil zit alleen in hoe de auto wordt aangesloten:

- **Met contactdoos:** de bestuurder gebruikt een eigen laadkabel. Klepjes in het stopcontact gaan pas open als er een Type 2-stekker in wordt gedrukt. Kabel en holster zijn los te koop. De kabel moet bij het vermogen van de lader passen, anders laadt de auto langzamer.
- **Vast:** met kabel van 7,5 m en holster. Kies de plek zo dat de kabel makkelijk bij de laadpoort komt.

**Eenfasig of driefasig** is geen aparte uitvoering: je bepaalt het met de bekabeling en de instelling bij de inbedrijfstelling.

| Netvorm | Spanning | Maximaal laadvermogen |
|---|---|---|
| Eenfasig met nul | 230 V | tot 7,4 kW |
| Driefasig ster met nul (TN/TT) | 400 V | tot 22 kW |
| Driefasig zonder nul (IT, "delta") | 3 x 230 V | tot 12,7 kW |

De stroom is 32 A per fase en instelbaar vanaf 6 A. Het gegevensblad geeft als voorbeeld: wil je een driefasige lader beperken tot 11 kW, stel dan bij de inbedrijfstelling 16 A in.

### Overige specificaties (gegevensblad)

- IP55 en IK10, binnen en buiten, -40 tot 55 graden Celsius.
- Kabelinvoer onder of achter, met een M32-wartel (kabel 15 tot 25,4 mm) en een M25-wartel (11 tot 17,9 mm).
- Wi-Fi, Bluetooth, Ethernet, RS-485, CAN en 4G LTE. OCPP, API en Modbus TCP. Als ondersteunde meters: Linky, P1 (DSMR 4.x en 5.0) en HAN.
- Overspanningsbeveiliging, RDC-DD (6 mA), detectie van vastgelaste relais en overstroomdetectie. 5 jaar garantie.`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Hoe het in het systeem past',
      tekst: `Het document "installatieconfiguraties" (TEB-00211) beschrijft vier opstellingen, telkens met de lader op een eigen groep met MCB en aardlek type A:

1. **Standalone:** alleen de lader op het net.
2. **Zonne-energie:** IQ7- of IQ8-micro-omvormers of een string-omvormer, met een IQ Gateway Metered of IQ Combiner 3P EU. Plannen, groen laden en laden buiten de piekuren.
3. **Zonne-energie met IQ Battery:** de auto laadt ook met zonne-overschot en batterij-energie.
4. **Met HEMS:** daarbij de IQ Energy Router (energiebeheer voor het huis), die ook een lader van een ander merk en een warmtepomp in het schema heeft. Alleen in een beperkt aantal landen.

### CT's: de meetpunten van het systeem

Een **CT** (stroomtransformator) is een meetklem om een geleider. De **productie-CT** meet wat de zonnepanelen leveren, de **consumptie-CT** meet wat er tussen elektriciteitsmeter en groepenkast door gaat, dus het verbruik of de teruglevering van het hele huis. Voor laden met zonne-overschot moeten beide op alle fasen zitten, ook als de PV of batterij maar op één of twee fasen zit.

### Fasen afstemmen

- Sluit de lader bij voorkeur aan op **dezelfde fase als de PV of batterij**: beter groen laden, minder onbalans.
- Een eenfasige lader op een driefasig PV-systeem raadt Enphase af vanwege fase-onbalans (TEB-00211, 7.4).
- Klem L1 van de lader moet dezelfde fase zijn als L1 van de IQ Gateway Metered.

### Faseschakeling

Driefasig laden vraagt minimaal 4,2 kW (6 A op drie fasen), eenfasig 1,38 kW. Is het zonne-overschot kleiner dan 4,2 kW, dan schakelt een driefasig aangesloten lader zelf naar één fase en laadt hij al vanaf ongeveer 1,4 kW.

!!! info Thuisbatterij en noodstroom
De lader is niet volledig opgenomen in de IQ System Controller voor off-grid (noodstroom). Enphase raadt aan hem aan te sluiten als belasting die niet op de noodstroom zit (TEB-00211, pagina 5). Een belasting buiten de noodstroom krijgt bij netuitval geen spanning (algemene vakkennis), dus reken er niet op dat de auto dan uit de batterij laadt.
!!!

Verder volgens TEB-00211: kies de modus Zelfverbruik niet bij een terugleverlimiet (PEL) van 1,4 kW eenfasig of 4,14 kW driefasig. Dynamische tarieven zijn er alleen in België, Duitsland en Nederland.`
    },
    {
      id: 'load-balancing',
      kop: 'Dynamische load balancing uitgelegd',
      tekst: `### Het probleem

Een huis heeft een maximale aansluitwaarde, bijvoorbeeld 3 x 25 A. Een laadpaal op 3 x 16 A gebruikt daar uren achter elkaar een groot deel van. Gaan tegelijk oven en warmtepomp aan, dan kan op één fase meer stroom lopen dan de hoofdzekering toelaat.

### De oplossing

Bij **dynamische load balancing** (DLB) kijkt de lader continu hoeveel het huis al verbruikt en neemt hij alleen de rest. Bij Enphase werkt dat zo (TEB-00274):

1. De consumptie-CT's meten per fase hoeveel stroom het huis uit het net haalt.
2. De **IQ Gateway Metered** stuurt die meting via het thuisnetwerk naar de lader.
3. Jij hebt in de Installer App ingevuld hoeveel stroom per fase het huis mag afnemen. In Nederland en België heet dat de **netinterconnectiecapaciteit (GIC)** en vul je het in ampère in (in het Verenigd Koninkrijk: maximum-invoerlimiet, MIL).
4. De lader rekent per fase uit hoeveel er nog over is en laadt op het **laagste** van die drie getallen.

?? Rekenvoorbeeld (eigen voorbeeld, geen getallen uit de handleiding)
Je vult 25 A per fase in. Het huis gebruikt op dat moment 6 A op L1, 14 A op L2 en 9 A op L3. Er is dan nog 19, 11 en 16 A over. Een driefasige lader laadt op alle fasen even hard, dus hij gaat naar 11 A, het minimum. Gaat de waterkoker op L2 aan, dan zakt de lader verder.
??

Wordt het beschikbare vermogen op drie fasen kleiner dan 4,1 kW, dan schakelt de lader over naar **eenfasig laden op L1**. Daarom raadt Enphase aan de minst belaste fase van het huis op L1 van de lader aan te sluiten.

### Wat je nodig hebt

- Een IQ Gateway Metered met consumptie-CT's op alle fasen (eenfasig: één), tussen elektriciteitsmeter en groepenkast. Dat kan ook bij een standalone lader zonder PV of batterij.
- Firmware lader 25.7.1.7 of hoger (wordt bij de inbedrijfstelling zelf bijgewerkt, tot 10 minuten, paarse lichtbalk), Installer App 4.5.0 of hoger, gateway-software 7.6.168 of hoger.
- Gateway en lader op **hetzelfde netwerk**, met een juiste fasetoewijzing.

In de Installer App vul je eerst de GIC in onder Site-instellingen, daarna maak je de lokale verbinding en zet je DLB aan. Stap 5 (validatie) wordt nog niet ondersteund: overslaan.

!!! kern Wat als de verbinding wegvalt
Valt de IQ Gateway uit of verliest de lader de lokale verbinding met de gateway, dan beperkt de lader zichzelf tot **8 A** (fail-safe). Het internet is niet nodig: zolang gateway en lader elkaar via het thuisnetwerk zien, blijft DLB werken.
!!!`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid',
      tekst: `Hoofdstuk 17 van de snelle installatiegids noemt onder meer:

- Alleen een gekwalificeerde elektricien installeert, repareert, onderhoudt of verplaatst de lader.
- Schakel de groep van de lader uit bij nood, voor onderhoud en voor het schoonmaken.
- Geen vingers of voorwerpen in de Type 2-connector. Niet gebruiken als lader, kabel of connector beschadigd is.
- Alleen voor auto's met een Type 2-poort die tijdens het laden geen ventilatie nodig hebben.
- Bescherming tegen bliksem en overspanning volgens de lokale regels.
- Alleen op een wand of de Enphase-voet, met de meegeleverde beugel.

Verbreek je de verzegeling of de labels tegen openmaken, dan vervalt de garantie.

!!! gevaar Isolatiemeting alleen op 250 V
Volgens een voetnoot in het gegevensblad (pagina 3) is de lader getest op 500 V gelijkspanning, maar mag de isolatietest op het eindproduct door de overspanningsbeveiliging alleen met **250 V** worden gedaan. Meet je de groep met een installatietester, stel die dan in op 250 V. De lader loskoppelen tijdens de meting is algemene vakkennis en staat niet in de handleiding (zie les 7.4).
!!!`
    },
    {
      id: 'montage',
      kop: 'Plaatsing en montage',
      tekst: `### Locatie

- Een vlakke, verticale, gladde ondergrond die het gewicht draagt: houten of betonnen muur, of één verticale houten staander. Helling minder dan 5 graden.
- Montagehoogte **tussen 800 en 1200 mm** boven de vloer.
- Een stabiele internetverbinding via Wi-Fi of Ethernet voor de slimme functies.

De gereedschapslijst staat in hoofdstuk 5 (onder meer Torx-bits M3 tot M5 en een krimptang).

### Stappen

1. **Muurbeugel.** Begin op de plek die het dichtst bij de voeding ligt, zet een waterpaslijn, gebruik de beugel als sjabloon en teken drie gaten af. Boor 8 mm, minstens 55 mm diep, en let op leidingen in de muur. Gebruik pluggen en de meegeleverde schroeven.
2. **Lader ophangen.** Zet eerst de nok aan de onderkant in de voet van de beugel, laat dan de pennen links en rechts in de openingen achterop glijden. Zet vast met de schroeven, **7 Nm**.
3. **Holster** (vast model, of los gekocht). Zelfde manier van boren en daarna de afdekking erop.
4. **Afwerken na activering.** Klik de afdekking (esthetische hoes) op de voorkant en zet die onderaan vast met twee M3-schroeven, **0,6 Nm**. Dicht alle ongebruikte kabelinvoeren af met de meegeleverde pluggen.`
    },
    {
      id: 'aansluiting',
      kop: 'Elektrische aansluiting en beveiliging',
      tekst: `### Beveiliging in de groepenkast

De lader krijgt een **eigen groep** die voldoet aan IEC 60364 en de lokale regels (in Nederland de NEN 1010, algemene vakkennis). De snelle installatiegids geeft twee mogelijkheden:

- een aparte **aardlekschakelaar 30 mA type A** plus een **MCB karakteristiek C**, of
- een **RCBO** (aardlekautomaat) met type A-aardlek van 30 mA en karakteristiek C.

De automaat kies je op **125% van de laadstroom** die je instelt: 16 A laadstroom, 20 A automaat (voorbeeld uit de gids). Bij 32 A is dat 40 A (eigen rekensom).

!!! kern Aardlek type A met ingebouwde DC-lekdetectie
Enphase schrijft type A voor, omdat de lader zelf een **RDC-DD van 6 mA** heeft: een detector die gelijkstroomlekkage naar aarde meet (IEC 62955). Algemene vakkennis (les 10.3): een gladde gelijkstroomlekstroom kan een type A-aardlek blind maken, daarom vraagt een laadpaal een type B, of type A met zo'n ingebouwde detectie. De 30 mA AC-bescherming komt van de aardlek of RCBO in de kast. Zie ook les 6.3.
!!!

De doorsnede van de voedingskabel staat niet in de handleiding. Die bepaal je zelf (les 4.2).

### Voeding aansluiten

1. Open het servicepaneel: vier hoekschroeven, bij het contactdoosmodel ook twee langere schroeven naast het stopcontact.
2. **Achter:** prik de afdichtingsdoorvoer door. **Onder:** vervang de plug door de M32-wartel (**11,3 Nm**), eenfasig mag de M25-wartel met verloopstuk.
3. Sluit aan volgens het schema voor jouw net. Klemschroeven **1,5 Nm**.
4. Controleer het aanhaalmoment van **alle** aansluitingen, ook die uit de fabriek: ze kunnen los zijn geraakt tijdens transport.
5. Sluit het servicepaneel (**1,8 Nm**), grootste ronding onderaan.

### Netvormen (hoofdstuk 9.3)

Er zijn schema's voor TN of TT met nul (eenfasig en driefasig) en voor IT zonder nul (tweefasig en driefasig).

Bij meerdere laadpunten raadt Enphase **fasedraaiing** aan (1-2-3, 2-3-1, 3-1-2), zodat auto's die alleen op L1 laden niet allemaal op dezelfde fase komen. Leg de draaiing vast bij de activering, anders kloppen de verbruiksgegevens niet.

### Communicatie

Op de print zitten USB-C, RS-485, CAN 1, CAN 2 en LAN 1 (CAN werkte nog niet bij de lancering). Ethernet voer je achter in via de vrije middelste invoer (contactdoosmodel: rechtsonder) of onder via de M25-wartel (**9 Nm**) met een afdichtingsinzetstuk. Laat de afdichtpluggen in de ongebruikte gaten.`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling met de app',
      tekst: `Inbedrijfstellen heet bij Enphase **activeren**. Zonder activering laadt de lader wel, maar zonder slimme functies zoals load balancing en toegangscontrole. Activeren vraagt internet via Ethernet of Wi-Fi. Er zijn twee routes:

- **Enphase Installer App:** voor Enphase-gecertificeerde installateurs. Op een locatie met PV of batterij moet de integratie door zo'n installateur gebeuren (TEB-00211, 4.2).
- **Enphase App:** voor een elektricien samen met de huiseigenaar, bijvoorbeeld bij een standalone lader. De technische stappen zijn alleen voor een bekwame elektricien.

Begin pas als de **witte** LED brandt.

### Stappen in de Enphase App (USG-00067)

1. Account aanmaken of inloggen, IQ EV Charger 2 toevoegen en de locatie invullen.
2. Verbinden via Wi-Fi en Bluetooth (de app heeft toestemming nodig voor camera, Bluetooth en locatie).
3. De QR-code aan de binnenkant of onderkant scannen. Pas daarna sluit je de frontplaat.
4. **Elektrische installatie** (alleen de elektricien): type net, eenfasig of driefasig met fasetoewijzing, de **maximale stroom (6 tot 32 A per fase)** en bevestigen dat er een **aardlek type A** zit. Kies de stroom zo dat lader en huis samen binnen de aansluitwaarde blijven.
5. Internet via Wi-Fi of Ethernet koppelen, afronden, eventueel autogegevens invullen.

Na een geslaagde activering wordt de LED **groen**. Zodra de auto goed is aangesloten, wordt hij **blauw**.

### Wat de gebruiker in de app doet (USG-00093)

Onder Menu, Instellingen, IQ EV Charger kiest de gebruiker **Opladen volgens planning** (bijvoorbeeld daluren) of **Handmatig opladen** (direct op maximale stroom), en zet hij **authenticatie** aan zodat elk laden eerst toestemming vraagt. De gids voor groen laden in een geïntegreerd systeem zit niet bij onze bestanden.`
    },
    {
      id: 'storingen',
      kop: 'LED-indicator, MID-display en storingen',
      tekst: `Er zijn **geen foutcodes** met nummers in de documenten. De status lees je af aan de lichtbalk op de voorkant en in de app.

### Lichtbalk na activering (snelle installatiegids, pagina 25)

| Kleur | Patroon | Betekenis |
|---|---|---|
| Groen | Constant | Geen auto aangesloten |
| Groen | Eerste, middelste en laatste LED aan | "Gesloten" (wat dat betekent, legt de gids niet uit) |
| Groen | Heen en weer (boemerang) | Wachten op autorisatie |
| Groen | Druppel vanuit het midden naar buiten | Laden toegestaan, auto nog niet klaar |
| Groen | 5 seconden constant | Activering of update gelukt |
| Geel | Heen en weer | Activering bezig |
| Paars | Van links naar rechts | Software-update (OTA) bezig |
| Wit | Constant | Netwerkverbinding verloren |
| Blauw | Constant | Klaar om te laden, laadt nu niet |
| Blauw | Langzaam aan en uit | Bezig met laden |
| Rood | 5 seconden knipperen | Activering of update mislukt |
| Rood | Blijft knipperen | Storing of fout |

Bij een lader die nog **niet** geactiveerd is, betekent wit "geen auto aangesloten" en groen van links naar rechts "opstarten".

### MID-display

Bij inschakelen toont het display de MID-firmwareversie, een controlegetal (CRC) en de totaal geladen energie. Tijdens het laden wisselt het tussen spanning en stroom per fase, vermogen en sessie-energie.

Wat je bij een rode storing moet doen, staat niet in de documenten. De gids verwijst naar de FAQ en Enphase Support.`
    },
    {
      id: 'niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat of niet klopt',
      tekst: `### Ontbreekt

- De kabeldoorsnede en de maximale aderdoorsnede van de klemmen.
- Een lijst met foutcodes of een stappenplan bij een rode storing.
- Of load balancing ook via de P1-poort van de slimme meter werkt. Het gegevensblad noemt P1, de DLB-gids beschrijft alleen de IQ Gateway met CT's.
- Of 4G een eigen SIM-kaart vraagt, en waarvoor de RS-485-poort dient.

### Documenten spreken elkaar tegen

- **Overspanningsbeveiliging:** 253 V in de installatiegids, 265 V in het nieuwere gegevensblad.
- **Spanningstolerantie:** plus of min 10% in de installatiegids, 15% in het gegevensblad.
- **OCPP en ISO 15118:** installatiegids OCPP 2.0.1 en ISO 15118 "hardwareklaar", gegevensblad OCPP 1.6J en 2.0.1 en ISO 15118-20 ondersteund.
- **Grens voor faseschakeling:** 4,1 kW in de DLB-gids, 4,2 kW in TEB-00211.
- **Witte LED:** voor activering moet wit branden, maar bij een geactiveerde lader betekent wit "netwerkverbinding verloren".
- **Kleur update:** paars in de installatiegids, magenta in de app-gidsen.
- **App-versie:** de installatiegids noemt Installer App 4.4.0, voor DLB is 4.5.0 nodig.
- **SKU-tabel:** TEB-00211 noemt beide SKU's "driefasig", de andere documenten driefasig en eenfasig.

Het gegevensblad (juni 2026) is nieuwer dan de installatiegids (november 2024).`
    },
    {
      id: 'bidirectioneel',
      kop: 'Apart product: IQ Bidirectional EV Charger',
      tekst: `!!! info IQ Bidirectional EV Charger is een ander product
Dit is **geen uitvoering** van de IQ EV Charger 2, maar een aparte lader. Er is alleen een voorlopig Engelstalig gegevensblad (DSH-00921). Een installatiehandleiding zit niet bij onze bestanden. Volgens dat gegevensblad:

- Het is een **DC-lader**: de omzetting gebeurt in de lader, niet in de auto. De auto krijgt een **CCS Type 2**-connector (IEC 62196-3) aan een kabel van 7,5 m.
- Energie kan twee kanten op: de auto laden, het huis voeden vanuit de auto (**V2H**) en terugleveren aan het net (**V2G**).
- Tot 11 kW driefasig en 7,4 kW eenfasig. Of je dat mag, hangt af van de netbeheerder.
- Met een IQ System Controller of IQ Grid Switch kan hij een spanningsloos huis opstarten bij netuitval (**Dark Start**).
- 400 x 650 x 180 mm, 38 kg, IP55 en IK10, RDC-DD 6 mA, 10 jaar garantie.
- Specificaties en functies kunnen per land verschillen en hangen af van goedkeuring.
!!!`
    }
  ],

  handleidingRefs: [
    { doc: 'qig', hoofdstuk: '1 Inleiding en 2 Integratie met het Enphase Energy System', paginas: '5-6', onderwerp: 'Systeemschema standalone, met PV, met PV en batterij, en met HEMS' },
    { doc: 'qig', hoofdstuk: '3 Checklist voor installatie', paginas: '6-7', onderwerp: 'Ondergrond, montagehoogte, kabellengte, MCB C met aardlek type A of RCBO, RDC-DD 6 mA' },
    { doc: 'qig', hoofdstuk: '4 Wat zit er in de doos en 5 Gereedschap', paginas: '7-9', onderwerp: 'Inhoud per uitvoering en benodigd gereedschap' },
    { doc: 'qig', hoofdstuk: '6 De muurbeugel monteren', paginas: '9-10', onderwerp: 'Boren en de beugel op muur of houten staander zetten' },
    { doc: 'qig', hoofdstuk: '7 De IQ EV Charger 2 aan de muur bevestigen en 8 Connectorholster', paginas: '10-12', onderwerp: 'Lader in de beugel hangen (7 Nm) en holster monteren' },
    { doc: 'qig', hoofdstuk: '9.1 Voedingsbedrading voor verbonden Type-2 model', paginas: '13-15', onderwerp: 'Servicepaneel, invoer achter of onder, wartel en aanhaalmomenten' },
    { doc: 'qig', hoofdstuk: '9.2 Voedingsbedrading voor model met contactdoos', paginas: '15-17', onderwerp: 'Hetzelfde voor de uitvoering met stopcontact' },
    { doc: 'qig', hoofdstuk: '9.3 Fase bedradingsschema\'s voor netvoedingstypes', paginas: '18-20', onderwerp: 'TN/TT met nul, IT zonder nul en fasedraaiing bij meerdere laders' },
    { doc: 'qig', hoofdstuk: '10 Bedradingsaansluitingen voor communicatie', paginas: '20-23', onderwerp: 'Poorten op de print en Ethernet via achter- of onderinvoer' },
    { doc: 'qig', hoofdstuk: '11 De IQ EV Charger 2 activeren', paginas: '23-24', onderwerp: 'Activering via Installer App of Enphase App' },
    { doc: 'qig', hoofdstuk: '12 De installatie voltooien en 13 Checklist na installatie', paginas: '24-25', onderwerp: 'Afdekking, afdichten, LED-kleuren en stopcontact met klepjes' },
    { doc: 'qig', hoofdstuk: '14 Problemen oplossen', paginas: '25', onderwerp: 'MID-display en LED-patronen voor en na activering' },
    { doc: 'qig', hoofdstuk: '15 Accessoires en 16 Specificaties', paginas: '25-27', onderwerp: 'Losse kabels, holster, installatiekit en specificatietabel' },
    { doc: 'qig', hoofdstuk: '17 Veiligheidsinformatie', paginas: '27-28', onderwerp: 'Veiligheidsinstructies voor installatie, gebruik en onderhoud' },
    { doc: 'cg', hoofdstuk: '2 De IQ EV Charger 2 aansluiten, stap 1 tot en met 4', paginas: '4-6', onderwerp: 'Account, lader toevoegen en locatie' },
    { doc: 'cg', hoofdstuk: '2 De IQ EV Charger 2 aansluiten, stap 5 tot en met 7', paginas: '7-9', onderwerp: 'Bluetooth, QR-code, nettype, fasen, maximale stroom en aardlek type A' },
    { doc: 'cg', hoofdstuk: '2 De IQ EV Charger 2 aansluiten, stap 8 tot en met 10', paginas: '10', onderwerp: 'Internet, afronden en voertuiggegevens' },
    { doc: 'cg', hoofdstuk: '3 LED-lampen en 4 Standalone versus geïntegreerd', paginas: '11', onderwerp: 'LED-tabel en verwijzing naar de app-gidsen' },
    { doc: 'tc', hoofdstuk: '2.1 SKU\'s en 3 Ondersteunde systeemconfiguraties', paginas: '4-5', onderwerp: 'Welke opstelling welke onderdelen vraagt, en de PEL-waarschuwing' },
    { doc: 'tc', hoofdstuk: '4 Vereisten voor de locatie', paginas: '5', onderwerp: 'Eigen groep, aardlek type A, fasetoewijzing, CT\'s, off-grid' },
    { doc: 'tc', hoofdstuk: '5 Configuraties (5.1 tot en met 5.4)', paginas: '6-9', onderwerp: 'Standalone, met PV, met IQ Battery en met HEMS' },
    { doc: 'tc', hoofdstuk: '6 Bedradingsconfiguraties', paginas: '9-10', onderwerp: 'Wanneer groen laden kan en de grenzen voor faseschakeling' },
    { doc: 'tc', hoofdstuk: '7 Bedrading en bediening (7.1 tot en met 7.5)', paginas: '10-13', onderwerp: 'Combinaties van eenfasig en driefasig PV en lader' },
    { doc: 'dlb', hoofdstuk: '1.1 IQ EV Charger 2 Dynamic Load Balancing', paginas: '3', onderwerp: 'Hoe DLB werkt, minimum per fase en overschakelen naar L1' },
    { doc: 'dlb', hoofdstuk: '1.2 Vereisten', paginas: '4', onderwerp: 'CT\'s, firmware- en appversies, hetzelfde netwerk, fasetoewijzing' },
    { doc: 'dlb', hoofdstuk: '1.3 Installatie en configuratie', paginas: '4-8', onderwerp: 'GIC of MIL invullen, lokale verbinding maken en DLB aanzetten' },
    { doc: 'dlb', hoofdstuk: '1.4 Storingen en oplossingen en 1.5 Status in de app', paginas: '8-9', onderwerp: 'Terugvallen naar 8 A en werking zonder internet' },
    { doc: 'app', hoofdstuk: '1 Inleiding tot en met 3 Onmiddellijk opladen', paginas: '3-5', onderwerp: 'Laadmodi: planning en handmatig' },
    { doc: 'app', hoofdstuk: '4 Het energieverbruik monitoren', paginas: '6-7', onderwerp: 'Status, live status, energie, sessies en rapporten' },
    { doc: 'app', hoofdstuk: '5 Verbeterde beveiliging en 6 LED\'s', paginas: '8-10', onderwerp: 'Authenticatie aanzetten en LED-tabel' },
    { doc: 'ds', hoofdstuk: 'Belangrijkste specificaties', paginas: '1', onderwerp: 'Overzicht functies, 6 tot 32 A, begrensbaar tot 11 kW' },
    { doc: 'ds', hoofdstuk: 'Elektrische, mechanische en communicatiespecificaties', paginas: '2', onderwerp: 'Vermogen per netvorm, afmetingen, wartels, ondersteunde meters' },
    { doc: 'ds', hoofdstuk: 'Functies, veiligheid en conformiteit', paginas: '3', onderwerp: 'Normen, RDC-DD, sensoren en de voetnoot over isolatietest op 250 V' },
    { doc: 'bidi', hoofdstuk: 'Key specifications', paginas: '1', onderwerp: 'Wat de bidirectionele lader is en doet' },
    { doc: 'bidi', hoofdstuk: 'Electrical specifications en Features', paginas: '2-3', onderwerp: 'Vermogen, DC-bereik, connector, V2H, V2G, Dark Start en netcodes' }
  ],

  cursusLinks: ['m10l03', 'm10l04', 'm06l03', 'm03l04', 'm06l02', 'm04l02', 'm02l05', 'm07l04', 'm01l03'],
  zieOok: ['sigenergy-ev-ac-lader', 'enphase-iq-gateway', 'enphase-iq-battery-5p', 'enphase-iq8-micro-omvormers', 'enphase-iq-system-controller-3']
});
