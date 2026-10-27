/* ==========================================================================
   content/kennis/zaptec/go-2.js - Zaptec Go 2 (laadstation voor thuis, met
   scherm en MID-meter). Samenvatting in eigen woorden. Paginanummers
   verwijzen naar de positie in de pdf (1 = eerste pagina), niet naar het
   gedrukte paginanummer. De installatiehandleiding is meertalig en heeft
   dubbele pagina's: elke pdf-pagina bevat twee gedrukte pagina's.
   ========================================================================== */

KENNIS.addProduct({
  id: 'zaptec-go-2',
  merk: 'zaptec',
  slug: 'go-2',
  naam: 'Zaptec Go 2',
  rol: 'lader',
  toepassingen: ['laadpaal'],
  korteOmschrijving: 'De opvolger van de Zaptec Go: een compact wandlaadstation voor wisselstroom met Type 2-contactdoos, tot 22 kW, nu met een scherm, een MID-gecertificeerde energiemeter, automatisch wisselen tussen 3 en 1 fase en een steviger behuizing (IK10). Instellen gaat met de Zaptec-app via een QR-code op het scherm.',

  varianten: {
    kop: ['Uitvoering', 'Contactdoos', 'Markt', 'Kabel bij 32 A', 'Bron'],
    rijen: [
      ['Zaptec Go 2', 'Type 2 (IEC 62196-2) met klep en elektronisch slot', 'Algemeen, ook Nederland', '6 mm² (aders 1,5 tot 6 mm²)', 'Installatiehandleiding en productblad'],
      ['Zaptec Go 2 T2S', 'Type 2 met sluiter (volet) volgens Franse eisen', 'Frankrijk', '10 mm² volgens het helpcentrum', 'Alleen het helpcentrum van Zaptec, geen handleiding in de map']
    ]
  },

  documenten: [
    { id: 'im', titel: 'Zaptec Go 2 Installer Manual (meertalig, met NL)', soort: 'Installatiehandleiding', paginas: 13 },
    { id: 'gh', titel: 'Zaptec Go 2 User Manual (meertalig, NL op pagina 38 tot en met 42)', soort: 'Gebruikershandleiding', paginas: 43 },
    { id: 'pb', titel: 'Zaptec Go 2 Productblad (NL)', soort: 'Productblad', paginas: 2 },
    { id: 'bg', titel: 'Zaptec Go 2 Base Hole Layout', soort: 'Boortekening', paginas: 1 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `De Zaptec Go 2 is een laadstation voor wisselstroom (AC) dat aan de muur of op een paal hangt. Net als de Zaptec Go heeft hij geen vaste kabel maar een **Type 2-contactdoos**: de bestuurder steekt zijn eigen laadkabel erin. Hij laadt tot 22 kW bij 3 fasen en 32 A, en werkt met één model op 1 of 3 fasen.

Aan de voorkant zitten vier onderdelen (installatiehandleiding, pagina 2): A het **statuslampje** (een ledring), B het **scherm**, C het leesvlak voor de **laadpas (RFID)** en D de **Type 2-contactdoos** met klep.

### Wat nieuw is ten opzichte van de Go

- **Een scherm.** Het verlichte LCD-scherm toont wat de lader doet, hoeveel kWh er in deze sessie is geladen en eventuele fouten. Bij het eerste inschakelen staat er een QR-code op voor de installatie.
- **Een MID-meter.** De ingebouwde energiemeter is gecertificeerd volgens MID klasse B. MID is de Europese richtlijn voor meetinstrumenten. Met een MID-meter kun je laadsessies officieel afrekenen, bijvoorbeeld met een werkgever die de stroom vergoedt (algemene vakkennis).
- **Automatisch wisselen tussen 3 en 1 fase.** De Go 2 kan tijdens het laden van 3 naar 1 fase overschakelen. Wil je dat niet, dan kies je bij het instellen "1-fase".
- **Steviger en warmtebestendiger.** IK10 in plaats van IK08, en een bedrijfstemperatuur tot 50 in plaats van 40 graden Celsius.
- **Voorbereid op ISO 15118.** De hardware ondersteunt deze norm voor communicatie tussen auto en lader. Wat daar nu al mee kan, zeggen de documenten niet.

De kleuren van het statuslampje, de draaischakelaar en de aansluitklemmen zijn gelijk aan die van de Go.`
    },
    {
      id: 'verschil-met-go',
      kop: 'Verschillen met de Zaptec Go',
      tekst: `Deze tabel zet de documenten van beide laders naast elkaar. Alles komt uit de handleidingen en productbladen in de map, behalve waar anders staat.

| Onderdeel | Zaptec Go | Zaptec Go 2 |
|---|---|---|
| Scherm | geen, alleen de lampring | LCD-scherm met normale modus en MID-modus |
| Energiemeter | ongeveer 3% (1% na kalibratie), niet MID | MID klasse B (EN 50470-1 en -3), aangemelde instantie NMi |
| Faseomschakeling | niet genoemd | automatisch 3 naar 1 fase, uit te zetten door 1-fase te kiezen |
| Mobiel netwerk | 4G LTE-M (Cat M1) | 4G LTE Cat 1 |
| ISO 15118 | niet genoemd | hardware-ondersteuning |
| OCPP 1.6J | cloud-naar-cloud | cloud-naar-cloud of rechtstreeks op het apparaat |
| Stootvastheid | IK08 | IK10 |
| Temperatuur | -30 tot +40 graden | -30 tot +50 graden |
| Afmetingen en gewicht | 242 x 180 x 75 mm, 1,3 kg | 239 x 178 x 73 mm, 1,6 kg |
| Stand-by | 2 W | 2,5 W |
| Voorbeveiliging | max 40 A, C-karakteristiek aanbevolen | volgens lokale voorschriften (zie aansluiting) |
| Aardlek | type A 30 mA | type A 30 mA of een gelijkwaardige RCBO |
| Kabel bij 32 A | niet genoemd | 6 mm² |
| Montagehoogte | minimaal 900 mm | geen minimum in de tekst |
| QR-code voor installatie | sticker op en in de lader | op het scherm bij inschakelen |
| Extra lader koppelen | via toegang en zoeksleutel van de installateur | ook direct bij activeren: "Link naar een bestaande installatie" |
| Impulsspanning | 4 kV | 6 kV tussen fasen en PELV, 4 kV tussen fasen |

!!! info Als je Sigenergy al kent
De Sigen EV AC Charger komt in drie vermogens (7, 11 en 22 kW) en met vaste kabel of contactdoos. De Go 2 is één model met contactdoos. Voor jou als installateur:

- **Lekstroom:** Sigen heeft 6 mA DC- en 30 mA AC-detectie ingebouwd. De Go 2 alleen de **6 mA DC-detectie (RDC-DD)** en vraagt een **externe aardlek type A 30 mA** of gelijkwaardige RCBO.
- **Automaat:** Sigen schrijft karakteristiek B voor. Bij Zaptec noemt de Nederlandse tekst C-karakteristiek, de Engelse tekst alleen "volgens lokale voorschriften".
- **Meting:** beide laders hebben nu een ingebouwde meter, maar alleen de Go 2 noemt een MID-certificering in de documenten.
- **Load balancing:** Sigen met de Sigen Power Sensor via RS485, Zaptec met de **Zaptec Sense** in de meterkast via de cloud.
- **Fasen:** Sigen noemt "fase schakelen" in de brochure zonder uitleg. De Go 2 wisselt automatisch tussen 3 en 1 fase.
- **Verbinding:** Sigen heeft ook Ethernet. De Go 2 heeft 4G, wifi en Bluetooth, maar geen kabelaansluiting voor een netwerk.
- **Behuizing:** beide IK10. Sigen IP65, de Go 2 IP54.
!!!`
    },
    {
      id: 'hoe-werkt-het',
      kop: 'Hoe het werkt en hoe het in het systeem past',
      tekst: `### Laden en toegang

Starten: laadkabel in de auto en in de lader. Knippert het statuslampje **blauw**, dan laadt de auto. Stoppen: pauzeren in de app of de stekker uit de auto halen. De kabel aan de laderkant blijft vergrendeld tot het laden klaar is of door de auto is gestopt (gebruikershandleiding, pagina 40).

De eigenaar kan de lader privé maken en anderen toegang geven via de app. Laden met een RFID-pas of Zaptec-sleutel kan ook; die koppel je in de app aan een account. De Go 2 leest MIFARE Classic en MIFARE DESFire.

### Meerdere laders en load balancing

Tot **drie Go 2's per adres** kunnen het vermogen automatisch verdelen (gebruikershandleiding, pagina 39). Bij het activeren van een extra lader kies je in de app **Link naar een bestaande installatie** (installatiehandleiding, pagina 7). De eigenaar kan de installateur ook achteraf toegang geven met een **partnercode van 4 tekens** en servicetoestemming.

Voor load balancing met de rest van het huis noemt de gebruikershandleiding van de Go 2 de Zaptec Sense niet. Volgens de website van Zaptec werkt de **Zaptec Sense** met de Go en de Go 2: hij meet het verbruik van het gebouw via de P1-poort (Benelux) en laat de lader terugschakelen voordat de hoofdzekering wordt overbelast. Laden met zonne-overschot via de Sense is volgens de website beschikbaar in onder meer Nederland en België, te beginnen met geselecteerde particuliere TN-installaties.

### Gepland laden

De gebruikershandleiding (pagina 41) noemt **gepland laden**, bedoeld om in de daluren te laden. In het Verenigd Koninkrijk staat de lader standaard zo ingesteld dat hij op werkdagen in de piekuren niet laadt; dat kun je in de app aanpassen. Voor Nederland is daar niets standaard ingesteld volgens de handleiding.

### Cloud, app en Portal

De Go 2 is via wifi of 4G verbonden met de cloud van Zaptec. Daaraan hangen de **Zaptec-app** en het **Zaptec Portal**. Software-updates gaan via de app of het Portal; Zaptec belooft minimaal vijf jaar updates. Als je de lader in de app activeert, krijgt de eigenaar automatisch een melding over zijn nieuwe Go 2 (installatiehandleiding, pagina 8). Voor koppelingen met andere systemen noemt het productblad een API, webhooks en OCPP 1.6J, zowel via de cloud als rechtstreeks op de lader.`
    },
    {
      id: 'specificaties',
      kop: 'Specificaties in het kort',
      tekst: `Uit de Nederlandse specificaties van de installatiehandleiding (pagina 12), de gebruikershandleiding (pagina 42) en het productblad (pagina 2).

### Elektrisch

| Onderdeel | Waarde |
|---|---|
| Nominale spanning | 230/400 V, 50 Hz (productblad: 230 en 400 V, plus of min 10%) |
| Nominale stroom | 32 A |
| Piekvermogen | TN 3 fasen 22 kW, TN 1 fase 7,4 kW, IT 3 fasen 12,7 kW, IT 1 fase 7,4 kW |
| Stand-by | 2,5 W |
| Beschermingsklasse | I |
| Overspanningscategorie | III |
| Impulsspanning | 6 kV tussen fasen en PELV, 4 kV tussen fasen |
| Ingebouwde DC-lekdetectie | RDC-DD, 6 mA DC, IEC 62955:2018 |
| Energiemeter | MID klasse B, 3 x 230/400 V, 0,25 tot 5 (32) A, testuitgang 10.000 impulsen per kWh (in de app aan te zetten) |

Let op: het productblad noemt IT 3 fasen niet (alleen 22 kW TN 3 fasen en 7,4 kW bij 1 fase op TN en IT). De gebruikershandleiding noemt wel 12,7 kW voor IT 3 fasen.

### Mechanisch en omgeving

| Onderdeel | Waarde |
|---|---|
| Afmetingen | H 239 x B 178 x D 73 mm (met achterplaat) |
| Gewicht | 1,6 kg |
| Beschermingsgraad | IP54 en IK10 |
| Temperatuur in gebruik | -30 tot +50 graden Celsius |
| Maximale hoogte | 2000 m |
| Aderdoorsnede | 1,5 tot 6 mm² |
| Kabeldiameter met meegeleverde tule | 8 tot 20 mm |
| Gat voor de invoerkabel | 25 mm |
| Laadmodus | mode 3, case B |
| Ventilatie | niet ondersteund |

### Verbinding

4G LTE Cat 1, wifi 802.11b/g/n op 2,4 GHz, Bluetooth 4.2, NFC/RFID op 13,56 MHz en hardware-ondersteuning voor ISO 15118. In de tekst over software-updates (gebruikershandleiding, pagina 41) staat nog "4G LTE-M", zoals bij de Go; de specificaties en het productblad zeggen LTE Cat 1.`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid en let op',
      tekst: `De regels zijn gelijk aan die van de Go (installatiehandleiding pagina 3, gebruikershandleiding pagina 38):

- Alleen **gekwalificeerd personeel** installeert, repareert en onderhoudt. Reparaties door Zaptec of een goedgekeurde werkplaats. Niet volgen van de handleiding betekent: geen garantie.
- Lokale en landelijke regels volgen (in Nederland onder meer NEN 1010, algemene vakkennis).
- Geen beschadigd product installeren of gebruiken, alleen goedgekeurde bekabeling.
- Geen extreme temperaturen of volle zon.
- **Geen verlengkabels.** Adapters alleen als de autofabrikant of Zaptec ze goedkeurt.
- Niets in de Type 2-contactdoos steken, niet schoonmaken met een hogedrukreiniger.

Werk spanningsloos volgens de vijf stappen (les 1.3). De handleiding zegt daar zelf niets over.

### Onderhoud en pincode

Afvegen met een vochtige doek, contactdoos vrijhouden van vuil, controleren op schade (gebruikershandleiding, pagina 41). Een **openbaar toegankelijke** lader jaarlijks laten inspecteren door gekwalificeerd personeel. De lader heeft een **pincode** voor bepaalde instellingen. De sticker met de code hoort op de voorkant van de gebruikershandleiding.`
    },
    {
      id: 'montage',
      kop: 'Plaatsing en montage',
      tekst: `### In de doos (installatiehandleiding, pagina 4)

De lader, T20-schroeven (de afbeelding toont 4, 2 en 2 stuks), doorvoertules voor **12 tot 18 mm** en **8 tot 14 mm** en een kabelklem. De afbeelding noemt bij de montage een maximaal aanhaalmoment van 3 Nm.

### Monteren

Haal de kap eraf, hang de lader recht met de **ingebouwde waterpas** en monteer hem op een open oppervlak op de juiste hoogte. Anders dan bij de Go noemt de tekst van de Go 2 **geen minimale hoogte**. Voor de Go stond er minimaal 900 mm; houd die als richtlijn aan als de klant geen andere eis heeft, maar dat is een keuze van jou en geen voorschrift uit deze handleiding.

### Boortekening

De "Base Hole Layout" van de Go 2 is hetzelfde bestand als die van de Go: een maattekening van de achterplaat (ZM900090) op schaal 1:1 op A3, bedoeld als gatenpatroon voor de installateur. Controleer bij het printen of de schaal echt 100% is (algemene vakkennis).

### Kabelinvoer

Kies **boven, achter of onder**. Bij de Go 2 wordt **onder aanbevolen**. Boor het gat uit en trek het klemmendeksel voorzichtig naar beneden. Volgens de specificaties is het invoergat 25 mm en past er met de meegeleverde tule een kabel met een buitendiameter van 8 tot 20 mm door.`
    },
    {
      id: 'aansluiting',
      kop: 'Elektrische aansluiting en beveiliging',
      tekst: `De afbeelding en tekst staan op pagina 5 van de installatiehandleiding (gedrukte pagina 8 en 9), de eisen op pagina 12.

### Voorbeveiliging en aardlek

Hier spreken de talen elkaar tegen:

- De **Engelse** tekst vraagt een installatieautomaat **volgens de lokale voorschriften** en een meerpolige **aardlek type A van 30 mA of een gelijkwaardige RCBO**.
- De **Nederlandse** tekst noemt een zekering van **maximaal 40 A met C-karakteristiek (aanbevolen)** en een aardlek type A 30 mA. Dat is letterlijk de eis uit de handleiding van de Go.
- De Nederlandse specificaties (pagina 12) en het productblad zeggen: zekering en aardlekschakelaar zijn vereist volgens de lokale voorschriften.

Wat overblijft (algemene vakkennis): een eigen groep met een automaat die past bij de kabel en de ingestelde laadstroom, en een aardlek type A van 30 mA. De keuze van waarde en karakteristiek van de automaat is jouw ontwerp volgens NEN 1010 (les 6.2), want deze handleiding geeft geen eenduidige waarde.

De lader bewaakt zelf **gelijkstroomlek vanaf 6 mA** met een ingebouwde **RDC-DD**. Daarom vraagt Zaptec een type A en geen type B (zie les 6.3 en 10.3). Volgens het productblad reset deze beveiliging automatisch als je de Type 2-kabel opnieuw insteekt.

### Netstelsels

De afbeelding toont dezelfde vier aansluitingen als bij de Go:

| Netstelsel | Klemmen |
|---|---|
| TN 3 fasen | PE, N, L1, L2, L3 |
| TN 1 fase | PE, N, L1 |
| IT 3 fasen | PE, L1, L2, L3 |
| IT 1 fase | PE, L1, L2 |

Het productblad noemt **TN, IT en TT**. Een aparte tekening voor TT staat niet in de handleiding; zoek dat op bij Zaptec en in de NEN 1010 (les 3.5). Voor IT-netten en voor meerdere laders verwijst de handleiding naar help.zaptec.com.

### Kabeldoorsnede

De klemmen nemen **1,5 tot 6 mm²**. Voor een installatie van **32 A** schrijft de handleiding **6 mm²** voor. Adereindhulzen zijn optioneel. De afbeelding noemt "Max 12 mm" bij de ader, waarschijnlijk de striplengte; kijk dat na in de afbeelding. Of 6 mm² bij jouw kabellengte genoeg is voor de spanningsval, reken je zelf uit (les 4.2).

### Aansluiten

Sluit alle aders aan en druk de hendels stevig naar beneden. Zet de kabel vast met de trekontlasting en de doorvoertule. Plaats het klemmendeksel terug en schakel de automaat in.

### Fasen instellen

Bij een 3-fase aansluiting wisselt de Go 2 **automatisch tussen 3 en 1 fase**. Wil je dat voorkomen, kies dan bij het instellen in de app **1-fase** (installatiehandleiding, pagina 7). Met de draaischakelaar kun je geen fasen kiezen. Wanneer de lader precies omschakelt, staat niet in de handleiding.`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling: app, scherm en Portal',
      tekst: `### Instellen met de app (pagina 7)

1. Schakel de automaat in. Op het scherm verschijnt een **QR-code**.
2. Scan de code. Die brengt je naar de installatiepagina in de **Zaptec-app**.
3. Volg de stappen om de lader in te stellen en te activeren. Kies **1-fase** alleen als je de automatische faseomschakeling niet wilt. Komt er een lader bij op hetzelfde adres, kies dan **Link naar een bestaande installatie**.
4. Na het instellen verdwijnt de QR-code. Het scherm toont 30 seconden de **MID-modus** en gaat daarna naar de normale modus.

### Zonder app: de draaischakelaar

Gelijk aan de Go: stand 0 = app, 1 = 6 A, 2 = 10 A, 3 = 13 A, 4 = 16 A, 5 = 20 A, 6 = 25 A, 7 = 32 A, 8 en 9 niet gebruikt. Draai van 0 naar de gewenste stand. Geen fasekeuze en minder functies.

### Afronden (pagina 8)

1. Plaats de kap terug (de afbeelding noemt maximaal 1 Nm) en controleer dat het statuslampje **wit** is.
2. Open in de app vanaf Home **Producten configureren** en voer de **pincode** in.
3. Controleer of de lader **online** is, werk de **firmware** bij en **test de aardlekschakelaar**.
4. Geef de klant de gebruikershandleiding en laat zien waar de pincode staat.

Heb je de lader in de app geactiveerd, dan krijgt de eigenaar automatisch een melding. Hoe het **Zaptec Portal** werkt, staat niet in deze handleidingen. Volgens het helpcentrum van Zaptec stel je daar per installatie onder meer het netstelsel en de hoofdzekering in, en heb je als installateur een bedrijfsaccount en een Zaptec Academy-certificering nodig.

### MID-modus en het scherm

De gebruikershandleiding (pagina 38) legt de twee schermmodi uit:

- **Normale modus:** wat je dagelijks ziet. Pictogrammen voor laden, permanente kabelvergrendeling, laden gepauzeerd, RFID-autorisatie vereist, geweigerd of verleend, een kleine fout en een ernstige fout. Daarbij de kWh van deze sessie.
- **MID-modus:** voor de wettelijke meting. Je ziet de totale energie die over de levensduur door de lader is opgenomen en afgegeven (in kWh) en de software-identificatie. De modus verschijnt bij het inschakelen. Je roept hem ook op door **binnen 5 seconden tweemaal een laadkabel in te steken en eruit te halen** zonder auto eraan. Staat permanente kabelvergrendeling aan, zet die dan eerst uit. Na ongeveer 30 seconden sluit de modus vanzelf.

!!! kern Meterstand alleen geldig met MID
Lees je een meterstand af voor een vergoeding, controleer dan dat de letters **MID** in het authenticatievak van het scherm staan. Staan ze er niet, dan is de meting volgens de handleiding ongeldig.
!!!`
    },
    {
      id: 'storingen',
      kop: 'Led-indicaties, schermmeldingen en storingen',
      tekst: `### Statuslampje

Dezelfde kleuren als bij de Go (gebruikershandleiding, pagina 40). In de tekstversie van de pdf staan kleuren en betekenissen in losse kolommen; de koppeling hieronder volgt de volgorde van de tabel en de zin "knippert blauw = laden". Controleer bij twijfel de originele tabel.

| Kleur | Betekenis |
|---|---|
| Geen licht | Geen voeding: controleer de voeding van de lader |
| Wit | Stand-by, of laden voltooid |
| Blauw | Continu: wacht op de auto. Knipperend: de auto laadt |
| Groen | Laden wacht op een geplande start, op Slim Laden (in bepaalde landen) of op een externe partij |
| Geel | Wacht op authenticatie (app of RFID), of gereserveerd |
| Oranje | Wacht op configuratie door een erkende installateur |
| Rood | Fout gevonden |
| Paars | Firmware wordt bijgewerkt, duurt meestal een paar minuten |

Bij de Go heet de groene toestand "Eco-modus", bij de Go 2 "Slim Laden". De Nederlandse tekst bij "geen licht" zegt "controleer het vermogen", een vertaalfout: de Engelse tekst bedoelt de voeding.

### Wat te doen bij rood

Koppel de auto los en start de lader opnieuw op. Blijft het rood, neem dan contact op met de installateur. Hoe je de lader herstart, staat niet in de handleiding.

### Foutcodes op het scherm

De Go 2 is de eerste van de twee met een foutcode. Bij een fout in de **MID-module** toont het scherm een code in het rood die begint met de letter **E** (het voorbeeld in de handleiding is E00018C), met MID in het authenticatievak. Zie je die, neem dan contact op met de servicepartner. Een lijst met alle codes en hun betekenis staat **niet** in de handleiding. Het scherm onderscheidt verder een **kleine fout** en een **ernstige fout**; bij een ernstige fout verwijst de handleiding naar de servicepartner.`
    },
    {
      id: 'niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat',
      tekst: `- **Een vaste waarde voor de automaat.** De Engelse tekst zegt "volgens lokale voorschriften", de Nederlandse noemt nog 40 A met C-karakteristiek. Ontwerp de groep zelf (les 6.2).
- **Kabeldoorsnede bij lagere stromen en lange afstanden.** Alleen "6 mm² bij 32 A".
- **TT-net.** Wel in het productblad, niet in de aansluittekening.
- **Wanneer de faseomschakeling ingrijpt** en wat de auto daarvoor moet kunnen.
- **Een lijst met foutcodes** van het scherm.
- **Het werken in het Zaptec Portal** en de installatie van de Zaptec Sense.
- **De T2S-uitvoering.** Die staat alleen in het helpcentrum van Zaptec, met een eigen handleiding die niet in onze map zit. Die uitvoering is voor Frankrijk; in Nederland kom je hem normaal niet tegen.
- **ISO 15118 en terugleveren.** De hardware ondersteunt ISO 15118 en de MID-modus toont ook afgegeven energie, maar wat er nu al mee kan, staat niet in de documenten.
- **Melding bij de netbeheerder** en controle van de hoofdaansluiting (les 10.4).`
    }
  ],

  handleidingRefs: [
    { doc: 'im', hoofdstuk: 'Installeren: onderdelen', paginas: '2', onderwerp: 'Statuslampje, scherm, RFID-lezer en Type 2-contactdoos' },
    { doc: 'im', hoofdstuk: 'Waarschuwing (NL rechtsonder)', paginas: '3', onderwerp: 'Gekwalificeerd personeel, garantie, beschadigd product, extreme temperaturen' },
    { doc: 'im', hoofdstuk: '1 Monteer het laadstation', paginas: '4', onderwerp: 'Inhoud verpakking, doorvoertules, waterpas, montage, 3 Nm' },
    { doc: 'im', hoofdstuk: '2 Sluit de voedingskabel aan', paginas: '5', onderwerp: 'Automaat en aardlek, TN en IT 1- en 3-fase, kabelinvoer (onder aanbevolen), 6 mm² bij 32 A' },
    { doc: 'im', hoofdstuk: '3 Configureer het laadstation in de app (NL)', paginas: '7', onderwerp: 'QR-code op het scherm, 1-fase kiezen, koppelen aan bestaande installatie, MID-modus, draaischakelaar' },
    { doc: 'im', hoofdstuk: '4 Afronden', paginas: '8', onderwerp: 'Statuslampje wit, pincode, online, firmware, aardlek testen, melding aan eigenaar' },
    { doc: 'im', hoofdstuk: 'Technische specificaties (NL)', paginas: '12', onderwerp: 'Afmetingen, IK10, aderdoorsnede, kabeldiameter en invoergat, elektrische waarden, RDC-DD' },
    { doc: 'gh', hoofdstuk: 'Belangrijke informatie en weergave (NL)', paginas: '38', onderwerp: 'Veiligheidsregels, garantie, scherm in normale modus en MID-modus, MID-foutcode' },
    { doc: 'gh', hoofdstuk: 'Activeren en meer laadstations (NL)', paginas: '39', onderwerp: 'Activeren in de app, tot drie Go 2 per adres, partnercode van de installateur' },
    { doc: 'gh', hoofdstuk: 'Statuslampje en laden starten/stoppen (NL)', paginas: '40', onderwerp: 'Tabel met lampkleuren, starten en stoppen, toegang en RFID' },
    { doc: 'gh', hoofdstuk: 'Software-updates, onderhoud en gepland laden (NL)', paginas: '41', onderwerp: 'Updates, onderhoud, pincode, gepland laden en de Britse standaardinstelling' },
    { doc: 'gh', hoofdstuk: 'Technische specificaties (NL)', paginas: '42', onderwerp: 'Vermogen per netstelsel, verbinding, ISO 15118 en de MID-meter' },
    { doc: 'pb', hoofdstuk: 'De details: technische informatie', paginas: '2', onderwerp: 'Netstelsels TN, IT en TT, vermogens, RDC-DD, MID klasse B, LTE Cat 1, OCPP 1.6J' },
    { doc: 'bg', hoofdstuk: 'Base Hole Layout', paginas: '1', onderwerp: 'Gatenpatroon van de achterplaat op schaal 1:1 (gelijk aan de Go)' }
  ],

  cursusLinks: ['m10l03', 'm06l03', 'm03l04', 'm04l02', 'm02l05', 'm03l05', 'm06l02', 'm10l04', 'm01l03'],
  zieOok: ['zaptec-go', 'sigenergy-ev-ac-lader', 'enphase-iq-ev-charger-2']
});
