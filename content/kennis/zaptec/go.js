/* ==========================================================================
   content/kennis/zaptec/go.js - Zaptec Go (laadstation voor thuis, tot 22 kW)
   Samenvatting in eigen woorden. Paginanummers verwijzen naar de positie in
   de pdf (1 = eerste pagina), niet naar het gedrukte paginanummer.
   De installatiehandleiding is meertalig: de Nederlandse tekst staat op de
   oneven pagina's 3 tot en met 13, de afbeeldingen op de even pagina's.
   ========================================================================== */

KENNIS.addProduct({
  id: 'zaptec-go',
  merk: 'zaptec',
  slug: 'go',
  naam: 'Zaptec Go',
  rol: 'lader',
  toepassingen: ['laadpaal'],
  korteOmschrijving: 'Een klein wandlaadstation voor wisselstroom van de Noorse fabrikant Zaptec, met een Type 2-contactdoos (zonder vaste kabel), tot 22 kW bij 3 fasen en 32 A. Eén model voor 1 en 3 fasen en voor TN-, TT- en IT-netten. Je stelt hem in met de Zaptec-app via Bluetooth.',

  varianten: {
    kop: ['Aansluiting (netstelsel en fasen)', 'Klemmen die je gebruikt', 'Piekvermogen bij 32 A'],
    rijen: [
      ['TN, 3 fasen', 'PE, N, L1, L2, L3', '22 kW'],
      ['TN, 1 fase', 'PE, N, L1', '7,4 kW'],
      ['IT, 3 fasen', 'PE, L1, L2, L3 (geen N)', '12,7 kW'],
      ['IT, 1 fase', 'PE, L1, L2 (geen N)', '7,4 kW']
    ]
  },

  documenten: [
    { id: 'im', titel: 'Zaptec Go Installer Manual (EN, NO, SE, DA, DE, FR, IT, NL)', soort: 'Installatiehandleiding', paginas: 16 },
    { id: 'gh', titel: 'Zaptec Go User Manual (meertalig, NL op pagina 38 tot en met 42)', soort: 'Gebruikershandleiding', paginas: 43 },
    { id: 'pb', titel: 'Zaptec Go Productblad (NL)', soort: 'Productblad', paginas: 4 },
    { id: 'bg', titel: 'Zaptec Go Base Hole Layout', soort: 'Boortekening', paginas: 1 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `De Zaptec Go is een laadstation voor een elektrische auto dat aan de muur hangt (of op een paal) en laadt met wisselspanning (AC). De auto krijgt wisselstroom en de lader in de auto zelf maakt daar gelijkstroom van voor de accu. Zaptec is een Noors merk; de Go is daar ontworpen en wordt daar gemaakt.

Wat je meteen opvalt:

- **Klein en licht.** 242 bij 180 bij 75 mm en 1,3 kg. Het productblad vergelijkt het formaat met een tablet.
- **Geen vaste kabel.** Aan de voorkant zit een **Type 2-contactdoos** met een klep. De bestuurder steekt zijn eigen laadkabel erin. Een elektronisch slot houdt de kabel vast tijdens het laden, en de gebruiker kan de kabel ook permanent laten vergrendelen.
- **Eén model voor alles.** Dezelfde Go werkt op 1 fase of 3 fasen en tot 32 A. Hoeveel vermogen hij levert, hangt af van de aansluiting en van wat je in de app instelt (zie de tabel met aansluitingen).
- **Altijd online.** Via wifi of 4G LTE-M (een mobiel netwerk voor apparaten met weinig dataverkeer), zodat hij software-updates op afstand krijgt.
- **Bediening via de Zaptec-app.** Starten, stoppen, toegang voor anderen en laadgeschiedenis. Een RFID-pas of -sleutel kan ook.
- **Een lampring als enige indicatie.** Er is geen scherm. De kleur van de ring vertelt wat de lader doet (zie storingen en led-indicaties).

### Vier onderdelen aan de voorkant

De installatiehandleiding (pagina 3) benoemt: A het statuslampje, B het leesvlak voor de laadpas (RFID), C de Type 2-contactdoos met klep en D de QR-code voor de installatie. Die QR-code zit ook binnen in de lader, zodat je hem na het monteren van de voorplaat nog terugvindt.

!!! info Opvolger
Zaptec verkoopt inmiddels ook de **Zaptec Go 2** (zie die pagina). Die heeft een scherm, een MID-gecertificeerde meter, automatisch wisselen tussen 3 en 1 fase en een steviger behuizing. Op de website staan beide modellen nog naast elkaar.
!!!`
    },
    {
      id: 'kiezen',
      kop: 'Uitvoering en hoe je kiest',
      tekst: `Er is maar één technische uitvoering. Het productblad noemt zes kleuren voor de voorplaat (Asphalt Black, Cloud White, Rock Grey, Midnight Blue, Moss Green en Wood Brown). Je kiest dus niet tussen modellen, maar je bepaalt bij de installatie:

1. **Netstelsel en aantal fasen.** Zie de tabel bovenaan. In een Nederlandse woning met een 3-fase TN-aansluiting is 22 kW het maximum, met 1 fase 7,4 kW.
2. **Maximale stroom.** Van 6 tot 32 A, in de app of met de draaischakelaar. Die stroom bepaal je met de voorbeveiliging, de kabel en de hoofdaansluiting van de woning, niet met de wens van de klant.
3. **Hoeveel laders op één adres.** Tot drie Zaptec Go's per adres kunnen het beschikbare vermogen automatisch delen.
4. **Wel of geen Zaptec Sense.** Wil de klant dat de lader rekening houdt met de rest van het huis (dynamische load balancing), dan is een Zaptec Sense in de meterkast nodig.

### Go of Go 2?

Kort gezegd: de Go 2 is de nieuwere uitvoering met scherm, geijkte (MID) meter, automatische faseomschakeling, IK10 en een bedrijfstemperatuur tot 50 graden. De Go heeft een gewone meter met ongeveer 3% nauwkeurigheid, geen scherm, IK08 en tot 40 graden. De aansluitklemmen, de draaischakelaar en de werkwijze in de app zijn vrijwel gelijk. Zie de Go 2-pagina voor de volledige vergelijking.

!!! info Als je Sigenergy al kent
De Sigen EV AC Charger bestaat in drie aparte vermogens (7, 11 en 22 kW) en in een uitvoering met vaste kabel of met contactdoos. De Zaptec Go is één model met alleen een Type 2-contactdoos. De belangrijkste verschillen voor jou als installateur:

- **Lekstroom:** de Sigen heeft 6 mA DC- en 30 mA AC-detectie ingebouwd. De Go heeft alleen de **6 mA DC-detectie (RDC-DD)** en vraagt daarnaast een **externe aardlekschakelaar type A van 30 mA** in de groepenkast.
- **Automaat:** Sigenergy schrijft karakteristiek B voor. Zaptec beveelt een **C-karakteristiek** aan, maximaal 40 A.
- **Netstelsels:** Sigen noemt TT, TN-S, TN-C-S en IT. Het productblad van de Go noemt TN, IT en TT; de aansluittekening toont alleen TN en IT.
- **Load balancing:** Sigen meet met de Sigen Power Sensor via een RS485-kabel naar de lader. Zaptec meet met de **Zaptec Sense** in de meterkast en regelt via de cloud. Tussen meerdere Go's wordt het vermogen ook zonder Sense gedeeld.
- **Verbinding:** Sigen heeft 4G, wifi en Ethernet. De Go heeft 4G LTE-M, wifi en Bluetooth, maar geen netwerkaansluiting met kabel.
- **Behuizing:** Sigen IP65 en IK10, de Go IP54 en IK08.
- **Status:** Sigen werkt met vijf genummerde lampjes, de Go met één lampring in acht toestanden (kleuren).
!!!`
    },
    {
      id: 'hoe-werkt-het',
      kop: 'Hoe het werkt en hoe het in het systeem past',
      tekst: `### Laden starten en stoppen

De gebruiker steekt de laadkabel in de auto en in de lader. Wordt het lampje **pulserend blauw**, dan laadt de auto. Stoppen kan met de app (pauzeren) of door de stekker uit de auto te halen. De kabel aan de kant van de lader kan er pas uit als het laden klaar is of door de auto is gestopt (gebruikershandleiding, pagina 40).

### Wie mag laden

De eigenaar kan de lader **privé** maken. Dan mag alleen laden wie toegang heeft gekregen. Die persoon maakt een eigen account in de Zaptec-app en gebruikt de app om zich te identificeren. Een RFID-pas of Zaptec-sleutel werkt ook; die koppel je in de app aan een account. Volgens het productblad leest de lader RFID volgens ISO/IEC 14443 Type A (MIFARE Classic, 13,56 MHz). De gebruikershandleiding noemt ook MIFARE DESFire en Ultralight C.

### Meerdere laders op één adres

Tot drie Zaptec Go's per adres kunnen **automatisch stroom delen**. Voor een tweede of derde lader geeft de eigenaar de installateur in de app toegang tot de bestaande installatie (Installaties, installatie kiezen, Toegang). Staat de installateur er niet bij, dan voert de eigenaar de **zoeksleutel van 4 tekens** van het installatiebedrijf in en geeft hij servicetoestemming (gebruikershandleiding, pagina 39). Daarna kan de installateur de nieuwe Go zo instellen dat hij het vermogen met de bestaande deelt.

### Load balancing met het huis: Zaptec Sense

Het delen hierboven gaat alleen tussen de laders onderling. Wil je dat de lader terugschakelt als de rest van het huis veel vraagt, dan heb je een **Zaptec Sense** nodig. De gebruikershandleiding (pagina 40) beschrijft die als een meter die het verbruik in huis afleest en dynamische load balancing mogelijk maakt, zodat de hoofdaansluiting beschermd blijft en zekeringen niet springen. Hij is volgens de handleiding alleen in geselecteerde landen te koop. Volgens de website van Zaptec gaat de Sense in de Benelux op de **P1-poort** van de slimme meter. Hoe je de Sense installeert, staat niet in de documenten van de Go.

### App, cloud en Portal

De Go praat via wifi of 4G LTE-M met de cloud van Zaptec. Daar hangen de **Zaptec-app** (gebruiker en installateur) en het **Zaptec Portal** (webomgeving voor installaties) aan. Een lader die je met je eigen Zaptec-account installeert, zie je in het Portal terug zodra de eigenaar hem heeft geregistreerd (installatiehandleiding, pagina 13). Software-updates kunnen via de app of het Portal (gebruikershandleiding, pagina 41). Zaptec belooft minimaal vijf jaar updates vanaf aankoop.

Voor koppelingen met andere systemen noemt het productblad een API, webhooks en **OCPP 1.6J cloud-naar-cloud**. OCPP is de standaardtaal tussen laadpalen en beheerplatforms. "Cloud-naar-cloud" betekent dat het beheerplatform met de Zaptec-cloud praat, niet rechtstreeks met de lader.

### Eco-modus

De gebruikershandleiding noemt bij het groene lampje een **Eco-modus** (in bepaalde landen). Volgens de website laadt de Go in die modus op momenten dat de dynamische stroomprijs laag is. Instellen gebeurt in de app.`
    },
    {
      id: 'specificaties',
      kop: 'Specificaties in het kort',
      tekst: `De waarden komen uit de technische specificaties van de gebruikershandleiding (pagina 41 en 42), het etiket in de installatiehandleiding (pagina 2) en het productblad (pagina 4).

### Elektrisch

| Onderdeel | Waarde |
|---|---|
| Nominale spanning | 230 V fase-nul (207 tot 253 V), 400 V fase-fase (360 tot 440 V), 50 Hz |
| Nominale stroom | 32 A |
| Piekvermogen | TN 3 fasen 22 kW, TN 1 fase 7,4 kW, IT 3 fasen 12,7 kW, IT 1 fase 7,4 kW |
| Stand-by | 2 W |
| Beschermingsklasse | I (de behuizing moet dus geaard zijn) |
| Overspanningscategorie | III |
| Ingebouwde DC-lekdetectie | RDC-DD, 6 mA DC, volgens IEC 62955 |
| Energiemeter | ingebouwd, 3 fasen, ongeveer 3% nauwkeurig (1% na kalibratie). Niet MID-gecertificeerd volgens de documenten |

### Mechanisch en omgeving

| Onderdeel | Waarde |
|---|---|
| Afmetingen | H 242 x B 180 x D 75 mm |
| Gewicht | 1,3 kg |
| Beschermingsgraad | IP54 (stof en spatwater), IK08 (stootvastheid) |
| Temperatuur | -30 tot +40 graden Celsius |
| Maximale hoogte | 2000 m |
| Laadmodus | mode 3, case B (contactdoos, de gebruiker brengt de kabel mee) |
| Gebruik | binnen of buiten, door gewone personen, alleen vaste montage |
| Ventilatie | niet ondersteund |

"Ventilatie niet ondersteund" betekent dat de Go geen auto's laadt die tijdens het laden een geventileerde ruimte vragen. Moderne elektrische auto's vragen dat in de praktijk niet (algemene vakkennis).

### Verbinding

4G LTE Cat M1 (in landen waar dat werkt), wifi 802.11b/g/n op 2,4 GHz, Bluetooth 4.2 en RFID op 13,56 MHz. Een Ethernetpoort noemen de documenten niet.`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid en let op',
      tekst: `De waarschuwingen staan in de installatiehandleiding (pagina 5, Nederlands) en de gebruikershandleiding (pagina 38). In eigen woorden:

- Alleen **gekwalificeerd personeel** mag de Go installeren, repareren en onderhouden. Reparaties doen Zaptec of een door Zaptec goedgekeurde werkplaats. Wie zich niet aan de handleiding houdt, verliest de garantie.
- Volg de lokale en landelijke regels. In Nederland is dat onder meer de NEN 1010 (algemene vakkennis, zie de cursus).
- Installeer of gebruik nooit een beschadigd exemplaar.
- Gebruik alleen goedgekeurde kabels voor de installatie.
- Vermijd plekken met extreme temperaturen, zoals volle zon.
- **Geen verlengkabels.** Adapters alleen als de autofabrikant of Zaptec ze heeft goedgekeurd.
- Steek niets anders in de Type 2-contactdoos en maak de lader niet schoon met een hogedrukreiniger.

De handleiding schrijft zelf geen stappenplan voor spanningsloos werken voor. Doe dat volgens de vijf stappen uit de cursus (les 1.3) voordat je de voorplaat en het klemmendeksel verwijdert.

### Onderhoud

De gebruikershandleiding (pagina 41) beveelt aan: afvegen met een vochtige doek, controleren of de contactdoos vrij is van vuil en vreemde voorwerpen, en controleren op uitwendige schade. Een **openbaar toegankelijke** lader moet volgens de handleiding jaarlijks door gekwalificeerd personeel worden geïnspecteerd. Aan het eind van de levensduur gaat hij naar de recycling als elektronisch afval.

### Pincode

Elke Go heeft een **pincode** waarmee je bij bepaalde instellingen komt. Op de voorkant van de gebruikershandleiding staat "Place pin sticker here": de sticker met de pincode hoort daar. Leg de klant uit waar de code staat en dat hij hem niet moet delen.`
    },
    {
      id: 'montage',
      kop: 'Plaatsing en montage',
      tekst: `De installatiehandleiding is grotendeels beeld. De Nederlandse tekst staat steeds op de pagina na de afbeelding.

### In de doos (pagina 6)

De lader, een set T20-schroeven (de afbeelding toont 4, 2 en 2 stuks), twee doorvoertules voor kabeldiameters van **12 tot 18 mm** en **8 tot 14 mm**, en een kabelklem. De afbeelding geeft ook een maat van **900 mm** tot de vloer.

### Monteren (pagina 7)

1. Verwijder de voorplaat.
2. Gebruik de **ingebouwde waterpas** om de lader recht te hangen.
3. Monteer op een open oppervlak, op de juiste hoogte en **minimaal 900 mm van de grond**.

### Boortekening

De "Base Hole Layout" is een maattekening van de achterplaat (onderdeelnummer ZM900090) op schaal 1:1 op A3, met een boven- en onderaanzicht en de afstanden tussen de schroefgaten en de kabelopening. De tekening zegt zelf dat hij alleen bedoeld is als gatenpatroon voor de installateur, niet om onderdelen mee te controleren. Print je hem als mal, controleer dan met een rolmaat of de afdruk echt op 100% staat (algemene vakkennis). Dezelfde tekening hoort ook bij de Go 2.

### Kabelinvoer (pagina 8 en 9)

Je kiest uit drie invoeropeningen: **boven, achter of onder**. Die boor je uit. Daarna trek je het klemmendeksel voorzichtig naar beneden om het te verwijderen.

!!! kern Plek kiezen
De handleiding raadt plekken met extreme temperaturen af, zoals volle zon. Denk daarnaast vooraf aan de positie van de auto, de lengte van de laadkabel van de klant en de route van de voedingskabel (algemene vakkennis, zie les 10.3 over het tracé naar buiten).
!!!`
    },
    {
      id: 'aansluiting',
      kop: 'Elektrische aansluiting en beveiliging',
      tekst: `Dit is het belangrijkste deel voor jou. Het staat op pagina 8 (afbeelding) en pagina 9 (Nederlandse tekst) van de installatiehandleiding, aangevuld met de specificaties op pagina 42 van de gebruikershandleiding.

### Voorbeveiliging en aardlek

- **Installatieautomaat:** maximaal **40 A**, **C-karakteristiek aanbevolen**. Dat de C-karakteristiek wordt aanbevolen, staat in de installatiehandleiding, de specificaties en het productblad.
- **Aardlekschakelaar:** **type A, 30 mA**, meerpolig. Het etiket op pagina 2 zegt: een externe meerpolige RCD type A (30 mA) is vereist. De specificaties noemen een RCD volgens IEC/EN 61008-1 of 61009-1 (volgens algemene vakkennis is 61009-1 de norm voor een RCBO, een aardlekautomaat).
- **Gelijkstroomlek:** de Go heeft een ingebouwde **RDC-DD** (residual direct current detecting device) die een gladde gelijkstroomlek vanaf **6 mA** herkent en het laden stopt. Daarom vraagt Zaptec een type A en geen type B. Volgens het productblad reset deze beveiliging automatisch als je de Type 2-kabel opnieuw insteekt.
- De specificaties van de externe beveiliging noemen verder een kortsluitvastheid (Icw) van 3 kA. Het etiket noemt voor de ingebouwde beveiliging onder meer een I²t van 6,5 kA²s. Wat je daar precies mee moet bij de keuze van de automaat, legt de handleiding niet uit.

!!! gevaar Type A alleen in combinatie met de RDC-DD
Een gewone aardlek type A kan "blind" worden door gelijkstroomlek uit de auto (les 6.3 en 10.3). Bij de Go mag type A omdat de lader die gelijkstroom zelf bewaakt. Zet je een andere laadpaal neer, lees dan opnieuw wat die fabrikant eist. Dit is geen algemene regel.
!!!

### Netstelsels

De afbeelding op pagina 8 toont vier manieren van aansluiten:

- **TN 3 fasen:** PE, N, L1, L2 en L3.
- **TN 1 fase:** PE, N en L1.
- **IT 3 fasen:** PE, L1, L2 en L3, zonder nul.
- **IT 1 fase:** PE, L1 en L2, zonder nul. De lader zit dan tussen twee fasen.

Voor een IT-net verwijst de handleiding naar zaptec.com/help. Het productblad noemt als netstelsels **TN, IT en TT**. Een aparte tekening voor TT staat niet in de handleiding. Hoe je de Go op een TT-net aansluit en wat dat voor de aarding betekent, moet je dus nakijken bij Zaptec en in de NEN 1010 (zie les 3.5 over aarding).

?? Waarom levert IT 3-fase maar 12,7 kW?
Een IT-net zoals in Noorwegen heeft vaak 230 V tussen de fasen en geen nul. Met 3 fasen van 230 V en 32 A kom je op ongeveer 1,73 x 230 x 32 = 12,7 kW. In een Nederlands TN-net staat 400 V tussen de fasen en 230 V per fase, dus 3 x 230 x 32 = 22 kW. Dit is algemene vakkennis, zie les 2.5 over 1-fase en 3-fase. IT-netten kom je in Nederlandse woningen vrijwel niet tegen.
??

### Kabeldoorsnede

- De klemmen nemen aders van **1,5 tot 6 mm²** (gebruikershandleiding, pagina 41). De afbeelding op pagina 8 noemt "Max 6 mm²" en "Max 12 mm" bij de ader, dat laatste waarschijnlijk de maximale striplengte. Controleer dat in de afbeelding.
- De "diameter aansluitkabel" van 1,40 tot 2,80 mm in de specificaties is de diameter van de koperader zelf (dat past bij 1,5 en 6 mm²), niet die van de kabel.
- De doorvoertules zijn voor kabels met een buitendiameter van 8 tot 14 en 12 tot 18 mm.
- Welke doorsnede je bij welke stroom en lengte nodig hebt, staat **niet** in de handleiding van de Go. Dat reken je zelf uit (les 4.2 over doorsnede en spanningsval). Bij 32 A en de maximale 6 mm² van de klemmen is de lengte van de kabel dus snel bepalend.

### Aansluiten

Sluit alle aders aan en druk alle hendels van de klemmen stevig naar beneden ("Click!" in de afbeelding). Zet kabelklem en afdichtingen zo dat de kabel vastzit en de doorvoer dicht is. De afbeelding noemt een maximaal aanhaalmoment van 3 Nm bij de kabelinvoer en kabelklem. Plaats het klemmendeksel terug en schakel de automaat in.

### Fasen instellen

Het aantal fasen en de maximale stroom stel je in de **app** in (zie inbedrijfstelling). Gebruik je de **draaischakelaar**, dan kun je volgens de handleiding geen fasen meer kiezen en is de functionaliteit beperkt. Of de Go zelf tijdens het laden tussen 3 en 1 fase kan wisselen, staat niet in de handleiding van de Go. Bij de Go 2 staat dat wel.`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling: app en Portal',
      tekst: `### Instellen met de app (pagina 10 en 11)

1. Zet Bluetooth aan op je telefoon.
2. Scan de QR-code op de lader met de camera.
3. Installeer de Zaptec-app als daarom wordt gevraagd en log in met je Zaptec-account.
4. Volg de stappen op het scherm om de installatiegegevens in te vullen en tik op **Opslaan**.

### Zonder app: de draaischakelaar

Met de draaischakelaar in de lader stel je de maximale stroom in. Stand **0 betekent "app"** (de app bepaalt). De andere standen: 1 = 6 A, 2 = 10 A, 3 = 13 A, 4 = 16 A, 5 = 20 A, 6 = 25 A, 7 = 32 A. Standen 8 en 9 worden niet gebruikt. Met de schakelaar kun je geen fasen kiezen en heb je minder functies.

### Afronden (pagina 12 en 13)

1. Plaats de voorplaat terug (de afbeelding noemt maximaal 1 Nm voor de schroeven) en controleer dat het statuslampje **wit** brandt.
2. Open in de app vanaf het startscherm **Producten configureren** en voer de **pincode** in.
3. Controleer dat de lader **online** is, werk de **firmware** bij en **test de aardlekschakelaar**.
4. Geef de klant de gebruikershandleiding en wijs hem op de pincode.

Heb je de lader met je eigen Zaptec-account geïnstalleerd, dan kun je hem later in het **Zaptec Portal** terugvinden zodra de eigenaar hem heeft geregistreerd.

### Wat de klant daarna doet

De eigenaar maakt een account in de Zaptec-app en activeert de lader (gebruikershandleiding, pagina 38). Had de installateur hem uitgenodigd, dan krijgt hij een welkomstbericht; anders tikt hij op **+ Nieuwe toevoegen**. De sticker met de QR-code haal je na de eerste verbinding weg; Zaptec raadt aan hem in de zekeringkast te plakken voor als de lader later opnieuw gekoppeld moet worden.

!!! info Wat je wel en niet in de handleiding vindt
Welke instellingen je precies in de app invult (netstelsel, hoofdzekering, aantal fasen) en hoe het Portal werkt, staat niet in deze handleidingen. Volgens het helpcentrum van Zaptec heb je als installateur een Zaptec-account nodig dat aan je bedrijf is gekoppeld, en een afgeronde certificering bij de Zaptec Academy. Controleer dat voordat je de eerste Go installeert.
!!!`
    },
    {
      id: 'storingen',
      kop: 'Led-indicaties en storingen',
      tekst: `De Go heeft **geen foutcodes**. Alle informatie zit in de kleur van de lampring (gebruikershandleiding, pagina 39; het productblad noemt een RGBW-ledcirkel). In de tekstversie van de pdf staan de kleuren en de betekenissen in losse kolommen. De koppeling hieronder volgt de volgorde in de tabel en klopt met de zin op pagina 40 dat pulserend blauw "laden" betekent. Kijk bij twijfel in de originele tabel.

| Kleur | Betekenis |
|---|---|
| Geen licht | Geen voeding: controleer de voeding van de lader |
| Wit | Stand-by, of laden voltooid |
| Blauw | Continu: wacht op de auto. Pulserend: de auto laadt |
| Groen | Laden wacht op een geplande start, op de Eco-modus of op een reactie van een externe partij |
| Geel | Wacht op authenticatie (app of RFID), of de lader is gereserveerd |
| Oranje | Wacht op configuratie door een erkende installateur |
| Rood | Fout gevonden |
| Paars | Firmware wordt bijgewerkt (duurt meestal een paar minuten) |

### Wat te doen bij rood

De handleiding zegt: koppel de auto los en start de lader opnieuw op. Gaat het rode licht dan niet uit, neem dan contact op met de installateur. **Hoe** je de lader herstart, staat niet in de handleiding. Volgens het productblad reset de ingebouwde DC-lekbeveiliging automatisch als je de Type 2-kabel opnieuw insteekt.

### Oranje na de installatie

Oranje betekent dat de lader nog niet is ingesteld. Dat zie je direct na het inschakelen, voordat je de app-procedure hebt doorlopen. Na het instellen moet hij wit worden.

!!! kern Rood na een aardlek of een spanningsdip
Valt de aardlekschakelaar in de groepenkast, dan is de lader spanningsloos (geen licht). Rood betekent dat de lader zelf een fout ziet. Een storing aan de auto-kant (een kabel of de auto zelf) kan ook rood geven. Probeer daarom een andere laadkabel voordat je de lader verdenkt. Dit is algemene vakkennis, geen stap uit de handleiding.
!!!`
    },
    {
      id: 'niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat',
      tekst: `- **Kabeldoorsnede per stroom en lengte.** Alleen het bereik van de klemmen (1,5 tot 6 mm²). Rekenen doe je zelf (les 4.2).
- **TT-net.** Het productblad noemt TT, maar de handleiding toont alleen TN en IT. Hoe je de aarding bij TT uitvoert, staat er niet in.
- **Faseomschakeling.** De handleiding van de Go zegt niet of hij automatisch tussen 3 en 1 fase wisselt.
- **De instellingen in de app** en het werken in het Zaptec Portal. Daarvoor verwijst Zaptec naar help.zaptec.com.
- **Installatie van de Zaptec Sense** en hoe de load balancing met het huis precies is ingesteld.
- **Foutcodes en een herstartprocedure.** Er is alleen de kleur van het lampje.
- **Wat bij een tweede of derde Go op dezelfde groep hoort.** Voor meerdere laders verwijst de handleiding naar zaptec.com/help.
- **Melding bij de netbeheerder** en de vraag of de aansluiting van de woning het vermogen aankan. Zie les 10.4.`
    }
  ],

  handleidingRefs: [
    { doc: 'im', hoofdstuk: 'Technisch etiket', paginas: '2', onderwerp: 'Mode 3, 230/400 V, 32 A, IP54, IK08, RDC-DD 6 mA en externe RCD type A 30 mA vereist' },
    { doc: 'im', hoofdstuk: 'Installeren: onderdelen (NL)', paginas: '3', onderwerp: 'Statuslampje, RFID-lezer, Type 2-contactdoos en QR-code' },
    { doc: 'im', hoofdstuk: 'Waarschuwing (NL)', paginas: '5', onderwerp: 'Gekwalificeerd personeel, garantie, beschadigde producten en extreme temperaturen' },
    { doc: 'im', hoofdstuk: 'Inhoud van de verpakking', paginas: '6', onderwerp: 'Schroeven, doorvoertules (8-14 en 12-18 mm) en montagehoogte 900 mm' },
    { doc: 'im', hoofdstuk: '1 Monteer het laadstation (NL)', paginas: '7', onderwerp: 'Voorplaat eraf, waterpas, minimaal 900 mm van de grond' },
    { doc: 'im', hoofdstuk: '2 Afbeelding aansluiting', paginas: '8', onderwerp: 'Kabelinvoer boven, achter en onder, TN en IT 1- en 3-fase, max 6 mm², 3 Nm' },
    { doc: 'im', hoofdstuk: '2 Sluit de voedingskabel aan (NL)', paginas: '9', onderwerp: 'Automaat max 40 A C-karakteristiek, aardlek type A 30 mA, klemmen en deksel' },
    { doc: 'im', hoofdstuk: '3 Afbeelding draaischakelaar', paginas: '10', onderwerp: 'Standen 0 (app) en 1 tot en met 7 (6 tot 32 A)' },
    { doc: 'im', hoofdstuk: '3 Configureer het laadstation in de app (NL)', paginas: '11', onderwerp: 'Bluetooth, QR-code scannen, Zaptec-app, zonder app met de draaischakelaar' },
    { doc: 'im', hoofdstuk: '4 Afbeelding voorplaat', paginas: '12', onderwerp: 'Voorplaat terugplaatsen, max 1 Nm' },
    { doc: 'im', hoofdstuk: '4 Afronden (NL)', paginas: '13', onderwerp: 'Statuslampje wit, pincode, online, firmware, aardlek testen, Zaptec Portal' },
    { doc: 'gh', hoofdstuk: 'Belangrijke informatie en activeren (NL)', paginas: '38', onderwerp: 'Veiligheidsregels, garantie, activeren in de app, QR-sticker in de zekeringkast' },
    { doc: 'gh', hoofdstuk: 'Meer laadstations en statuslampje (NL)', paginas: '39', onderwerp: 'Tot drie Go per adres, toegang voor de installateur, tabel met lampkleuren' },
    { doc: 'gh', hoofdstuk: 'Opladen starten en stoppen, Zaptec Sense (NL)', paginas: '40', onderwerp: 'Starten en stoppen, toegang en RFID, software-updates, load balancing met Zaptec Sense' },
    { doc: 'gh', hoofdstuk: 'Opslag en onderhoud, technische specificaties (NL)', paginas: '41', onderwerp: 'Onderhoud, pincode, mechanische specificaties en aderdoorsnede 1,5 tot 6 mm²' },
    { doc: 'gh', hoofdstuk: 'Technische specificaties (NL)', paginas: '42', onderwerp: 'Spanning, vermogen per netstelsel, verbinding, energiemeter, RDC-DD en externe beveiliging' },
    { doc: 'pb', hoofdstuk: 'Thuis opladen en kleuren', paginas: '2-3', onderwerp: 'Tot drie laders per adres, zes kleuren, wifi en 4G LTE-M' },
    { doc: 'pb', hoofdstuk: 'Technische informatie', paginas: '4', onderwerp: 'Netstelsels TN, IT en TT, max 40 A, vermogens, RDC-DD met automatische reset, OCPP 1.6J' },
    { doc: 'bg', hoofdstuk: 'Base Hole Layout', paginas: '1', onderwerp: 'Gatenpatroon van de achterplaat op schaal 1:1' }
  ],

  cursusLinks: ['m10l03', 'm06l03', 'm03l04', 'm04l02', 'm02l05', 'm03l05', 'm06l02', 'm10l04', 'm01l03'],
  zieOok: ['zaptec-go-2', 'sigenergy-ev-ac-lader', 'enphase-iq-ev-charger-2']
});
