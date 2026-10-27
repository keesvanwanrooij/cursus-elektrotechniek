/* ==========================================================================
   content/kennis/goodwe/esa-athena.js
   Samenvatting van de handleidingen van de GoodWe ESA-Athena-reeks
   (0,8 kW / 1,92 kWh micro-opslag) en de ESA Athena S3-reeks
   (0,8 of 3 kW / 3 tot 15 kWh), in eigen woorden.
   Paginanummers verwijzen naar de positie in de pdf (1 = eerste pagina), niet
   naar de gedrukte paginanummers. In deze handleidingen is het gedrukte nummer
   steeds een lager dan de pdf-pagina.
   ========================================================================== */

KENNIS.addProduct({
  id: 'goodwe-esa-athena',
  merk: 'goodwe',
  slug: 'esa-athena',
  naam: 'GoodWe ESA-Athena en ESA Athena S3 (micro-opslag)',
  rol: 'systeem',
  toepassingen: ['thuisbatterij', 'zonnepanelen'],
  korteOmschrijving: 'Kleine gestapelde thuisbatterijen met ingebouwde omvormer voor een paar zonnepanelen op lage gelijkspanning (maximaal 60 V). De ESA-Athena is een stekkerproduct van 800 W met 1,92 kWh per module. De ESA Athena S3 heeft een losse omvormer die standaard 800 W levert en vast aangesloten tot 3 kW gaat, met modules van 3 kWh tot 15 kWh in totaal.',

  varianten: {
    kop: ['Kenmerk', 'ESA-Athena', 'ESA Athena S3'],
    rijen: [
      ['Typenummers', 'GW0.8/1.9-ESA-PS-G10 (omvormer met batterij in een kast), uitbreiding GW1.9-BAT-LVD-G10', 'GW3K-EMA-G10 of GW3K-EMA-UK-G10 (alleen omvormer), batterij GW3.0-BAT-LVD-G10'],
      ['Opbouw', 'Bovenste kast bevat omvormer en eerste batterij; losse batterijen eronder', 'Omvormer zonder batterij bovenop; alle batterij zit in de modules eronder'],
      ['Aantal batterijmodules', '1 ingebouwd plus maximaal 4 uitbreidingen', '1 tot 5'],
      ['Opslag totaal', '1,92 tot 9,6 kWh', '3 tot 15 kWh (bruikbaar 2,75 kWh per module)'],
      ['Teruglevering aan het net', '0,8 kW (3,5 A bij 230 V)', '0,8 kW standaard; tot 3 kW na vaste aansluiting en instelling door een vakman'],
      ['Afname van het net (laden)', 'max. 1,5 kVA (8,8 A)', 'max. 3,6 kVA (16 A)'],
      ['BACK-UP-uitgang (noodstroom)', '1,5 kVA, max. 6,8 A, omschakeling onder 10 ms', '3 kVA off-grid, omschakeling 10 ms'],
      ['PV-ingangen', '4 MPPT, 1 paneel of string per MPPT, max. 60 V, 18 A per MPPT, totaal 2,4 kW', '4 MPPT, 1 string per MPPT, max. 60 V, 36 A per MPPT, totaal 4,8 kW'],
      ['Aansluiting op het net', 'Meegeleverde AC-kabel met stekker in een wandcontactdoos', 'Stekker (tot 800 W) of vaste aansluiting op de groepenkast'],
      ['Meter', 'Draadloos via wifi: Shelly Pro 3EM (EN-handleiding noemt ook SEM3-WL-2)', 'Draadloos (Shelly, Eastron, everhome) of bedraad via RS485 (GoodWe GMK110, GMK330)'],
      ['Communicatie', 'Bluetooth en wifi', 'Bluetooth, wifi, LAN (HEMS) en RS485 (meter, 14a-apparaat)'],
      ['Beschermingsklasse', 'Klasse II (dubbel geïsoleerd)', 'Omvormer klasse I (met aardpunt), batterij klasse II'],
      ['Gewicht', '26 kg plus 21 kg per uitbreiding', '15 kg plus 29 kg per batterij'],
      ['Cycli (fabrikant)', 'meer dan 6000', '10.000'],
      ['App', 'SEMS+ (Bluetooth en wifi)', 'SEMS+ (Bluetooth en wifi)']
    ]
  },

  documenten: [
    { id: 'um', titel: 'GW_ESA-Athena_User Manual-EN (V1.3, 2026-09-30)', soort: 'Gebruikershandleiding', paginas: 76 },
    { id: 'gh-nl', titel: 'GW_ESA-Athena_Gebruikershandleiding-NL (V1.1, 2025-11-25)', soort: 'Gebruikershandleiding', paginas: 98 },
    { id: 'qig', titel: 'GW_ESA-Athena_Quick Installation Guide-POLY', soort: 'Beknopte installatiegids', paginas: 2 },
    { id: 'ds', titel: 'GW_ESA-Athena_Datasheet_EMEA-EN', soort: 'Datasheet', paginas: 4 },
    { id: 's3-um', titel: 'GW_ESA Athena S3_User Manual-EN (V1.1, 2026-09-20)', soort: 'Gebruikershandleiding', paginas: 76 },
    { id: 's3-qig', titel: 'GW_ESA Athena S3_Quick Installation Guide-POLY', soort: 'Beknopte installatiegids', paginas: 2 },
    { id: 's3-ds', titel: 'GW_ESA Athena S3_Datasheet_EMEA-EN', soort: 'Datasheet', paginas: 4 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `GoodWe noemt deze producten **micro-opslag**: een kleine thuisbatterij en een omvormer in kastjes die je op elkaar stapelt. Je sluit er een paar zonnepanelen rechtstreeks op aan, en de omvormer zet die gelijkspanning om in wisselspanning voor het huis. Wat de panelen niet direct leveren, gaat in de batterij en komt er 's avonds weer uit.

Het verschil met een gewone thuisbatterij zit in de schaal en de spanning:

- **Lage gelijkspanning.** Aan de paneelkant mag de open klemspanning niet boven **60 V** komen (Athena p. 18, S3 p. 18). Dat is een of twee panelen per ingang, geen lange string van tien panelen. De S3-datasheet noemt dit "touch-safe".
- **Klein vermogen naar het net.** Standaard levert het systeem maximaal 800 W terug, de grens die GoodWe voor stekkerproducten aanhoudt.
- **Gestapeld op de vloer.** De kastjes staan op elkaar en worden met een anti-kantelbeugel aan de muur gezet.

De twee reeksen in het kort:

- **ESA-Athena** is het eenvoudige stekkerproduct. De bovenste kast bevat de omvormer én de eerste 1,92 kWh batterij. Daaronder komen tot vier uitbreidingsbatterijen. Hij kan ook los als draagbare stroombron buiten worden gebruikt ("buitenmodus").
- **ESA Athena S3** is de nieuwere en grotere uitvoering. De omvormer is een apart kastje zonder batterij, de batterijmodules zijn 3 kWh. Hij werkt met een stekker (800 W) of vast aangesloten door een vakman tot 3 kW, en hij heeft extra poorten voor een bedrade meter, een energiemanagementsysteem en netbeheerdersturing.

!!! kern Wat je hier waarschijnlijk nog niet weet
- De handleiding noemt de S3-omvormer uitdrukkelijk een omvormer die onderdeel kan zijn van een stekkersysteem. Of het geheel voldoet aan de Duitse norm VDE 0126-95 voor stekkerzonnepanelen, moet volgens GoodWe de eindgebruiker of systeembouwer zelf nagaan (S3 p. 3).
- Voor de netkoppeling vraagt de handleiding vooraf toestemming van het lokale net (Athena p. 18, S3 p. 18). Hoe dat in Nederland of België gaat, staat er niet in.
- Je hebt zelf een **slimme meter** nodig (een Shelly of een GoodWe-meter). Zonder meter weet het systeem niet wat het huis verbruikt, en dan werken zelfverbruik en terugleverbegrenzing niet.
!!!

!!! info Als je Sigenergy al kent
Sigenergy heeft in de kennisbank geen stekkerbatterij. Het dichtstbijzijnde is SigenStor Home, maar dat is een vaste installatie met batterijspanningen van honderden volts, strings tot 600 of 1100 V en een aparte Gateway voor noodstroom. De Athena werkt onder 60 V, heeft de noodstroomuitgang (BACK-UP) gewoon op de omvormer en wordt met een stekker aangesloten. De app is SEMS+ in plaats van mySigen, en de meter is een Shelly of GoodWe-meter in plaats van de Sigen Power Sensor.
!!!`
    },
    {
      id: 'kiezen',
      kop: 'Athena of S3: hoe kies je',
      tekst: `De variantentabel bovenaan zet de cijfers naast elkaar. In de praktijk komt het op vier vragen neer:

| Vraag | ESA-Athena | ESA Athena S3 |
|---|---|---|
| Hoeveel opslag wil de klant? | Tot 9,6 kWh | Tot 15 kWh |
| Hoeveel vermogen terug naar het net? | Vast 800 W | 800 W of, vast aangesloten, tot 3 kW |
| Hoe zwaar zijn de belastingen op noodstroom? | Tot 1,5 kVA | Tot 3 kVA |
| Moet het samenwerken met een energiemanagementsysteem of bedrade meter? | Nee, alleen wifi-meter | Ja: LAN, RS485, AI-modus met HEMS |

Andere verschillen die je ziet bij het werk:

- **Laadvermogen uit de panelen.** De S3 neemt per ingang tot 36 A op (de Athena 18 A), dus hij kan zwaardere panelen per ingang aan (S3-datasheet p. 2, Athena-datasheet p. 2).
- **Batterijweergave.** De lampjes op de Athena tonen de laadtoestand in stappen van 10%, op de S3 in stappen van 25% (Athena p. 24, S3 p. 25).
- **Werkmodi.** Beide kennen zelfverbruik en een tijdgestuurde modus (TOU). De S3 heeft daarnaast een **AI-modus**, die alleen werkt als er een HEMS is en een dynamisch of tijdsafhankelijk tarief is ingesteld (S3 p. 19-20).
- **Buiten gebruiken.** Alleen de Athena-handleiding beschrijft de buitenmodus als draagbare stroombron (Athena p. 71).

Of een Athena-uitbreidingsbatterij onder een S3-omvormer past, of andersom, staat in geen van de handleidingen. Beide datasheets zeggen alleen dat je oude en nieuwe batterijen binnen de eigen reeks mag mengen.`
    },
    {
      id: 'hoe-werkt-het',
      kop: 'Hoe het werkt en hoe het in het systeem past',
      tekst: `De energiestroom is eenvoudig (Athena p. 18, S3 p. 18):

1. De panelen leveren eerst aan het huis.
2. Wat over is, laadt de batterij.
3. Wat dan nog over is, gaat naar het net (begrensd op 800 W, of de ingestelde waarde).
4. Is er te weinig zon, dan levert de batterij. Is die leeg, dan neemt het huis van het net.

Dit heet de **zelfverbruiksmodus** en is de standaard. In de **TOU-modus** (time of use) stel je tijdvakken in waarin de batterij uit het net laadt (bij een laag tarief) of juist ontlaadt (bij een hoog tarief).

### De aansluitingen

| Poort | Athena | S3 | Waarvoor |
|---|---|---|---|
| GRID | ja | ja | Naar het net, via stekker of (S3) vast |
| BACK-UP | ja | ja | Contactdoos voor belangrijke apparaten bij netuitval |
| PV-ingangen | 4 (MC4) | 4 (MC4) | Een paneel of korte string per ingang |
| Aardpunt | gereserveerd | ja | Bij de S3 verplicht in vaste opstelling |
| RS485 | nee | ja | Meter, 14a-apparaat (netbeheerdersturing) |
| LAN | nee | ja | Netwerk naar router en HEMS |
| Antenne | ja, bovenop | niet als los onderdeel genoemd | Wifi en Bluetooth |
| Blind-mate batterijpoort | ja | ja | Steekverbinding naar de batterij eronder |

De batterijen hebben geen kabels: de kastjes klikken via een **blind-mate-connector** (een steekverbinding die vanzelf contact maakt als je de kast er recht op zet) op elkaar.

### De meter

Voor zelfverbruik en terugleverbegrenzing heeft het systeem een meter op de hoofdaansluiting nodig, die jij of de klant levert (Athena p. 17, S3 p. 36 en 39). Volgens de handleidingen:

- **Athena:** alleen draadloos via wifi. De Nederlandse handleiding noemt de Shelly Pro 3EM (NL p. 17), de nieuwere Engelse ook een SEM3-WL-2 (EN p. 17).
- **S3 met stekker:** draadloos, Shelly PRO 3EM, Eastron SEM3-WL-2, Eastron P1-leeskop of een everhome-leeskop (infrarood of P1) (S3 p. 36).
- **S3 vast aangesloten:** daarnaast bedraad via RS485 met GoodWe GMK110 of GMK330 (S3 p. 39).

Hoe je de meter zelf plaatst, staat niet in deze handleidingen maar in die van de meter.

?? Wat is een 14a-apparaat?
Bij de S3 is pin 5 van de RS485-poort bedoeld voor een stuurapparaat volgens de Duitse regel EnWG 14a, waarmee de netbeheerder het vermogen bij netproblemen kan terugschroeven (S3 p. 43). Voor Nederland of België geeft de handleiding geen vergelijkbare regeling.
??`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid',
      tekst: `Dit noemen de handleidingen als belangrijk (hoofdstuk 1 van beide).

!!! gevaar Spanningsloos werken
Werken onder spanning is verboden. Zet het systeem uit met de AAN/UIT-knop en trek de stekker uit, of schakel bij een vaste aansluiting de groep uit (Athena p. 45, S3 p. 50). Het label vraagt daarna **5 minuten** te wachten tot de interne onderdelen ontladen zijn (Athena p. 14, S3 p. 14). Let op dat de batterij en de panelen ook dan nog spanning leveren: dat is algemene vakkennis, zie les m10l02.
!!!

!!! gevaar Brand en blusmiddel
Boven 150 °C batterijtemperatuur bestaat brandgevaar, met giftige gassen. Gebruik nooit een ABC-poederblusser. De handleidingen zijn het oneens over water: de Athena noemt CO2, Novec 1230 of FM-200 (p. 13), de S3 noemt CO2 of water (p. 13), terwijl op het label van beide staat dat je niet met water mag blussen (Athena p. 14, S3 p. 14). Volg bij twijfel het label op het apparaat en laat blussen over aan de brandweer.
!!!

- **PV-polariteit en spanning.** Plus aan PV+, min aan PV-. Omgekeerd aansluiten of te hoge spanning valt niet onder de garantie. Zet bij de S3 nooit twee panelen of strings in serie, anders kom je boven 60 V (S3 p. 37).
- **Isolatie van de panelen.** De PV-ingang mag niet geaard worden. De isolatieweerstand naar aarde moet minstens de maximale ingangsspanning gedeeld door 30 mA zijn (Athena p. 11). Bij 60 V komt dat neer op 2 kΩ.
- **Geen DC-bron.** De PV-ingang niet voeden uit een labvoeding, tenzij met stroombegrenzing en langzaam oplopende spanning volgens de stappen in de handleiding (Athena p. 10).
- **Hetzelfde paneel niet op twee omvormers** aansluiten (Athena p. 11).
- **Kabels.** Kabels van verschillende soort minstens 30 mm uit elkaar en niet kruisen; 30 mm afstand tot warmtebronnen (Athena p. 11).
- **Elektrolyt.** Bij contact met de ogen minstens 15 minuten spoelen en een arts raadplegen (Athena p. 13).
- **Niet verplaatsen tijdens bedrijf** en niet laten vallen of erop staan (Athena p. 12).`
    },
    {
      id: 'plaatsing',
      kop: 'Plaatsing en montage',
      tekst: `### Waar het mag staan (Athena p. 30-31, S3 p. 30-31)

- Niet bij brandbare, explosieve of corrosieve stoffen.
- Goed geventileerd, beschut tegen direct zonlicht, regen en sneeuw. Zon en hitte laten het vermogen dalen.
- Niet in de luchtstroom van een airco: het temperatuurverschil kan condens in het apparaat geven.
- Buiten bereik van kinderen; het oppervlak kan heet worden.
- Laden en ontladen gaat van -20 tot 55 °C. Onder -20 °C kan een lege batterij niet meer bijladen en ontstaat onderspanning.

### Stapelen

Beide handleidingen beschrijven dezelfde volgorde (Athena p. 33-35, S3 p. 32-34). Het gereedschap: een klopboor met 8 mm boor, momentsleutel, waterpas, rubberen hamer en stofzuiger; als PBM isolerende handschoenen, veiligheidsschoenen, bril en stofmasker.

1. Zet de onderste batterij evenwijdig aan de muur: **30 mm** van de muur bij de Athena, **60 tot 65 mm** bij de S3.
2. Laat bij de **onderste** batterij de beschermkap op de onderste steekpoort zitten. Bij alle andere batterijen gaan de kappen eraf. De S3-handleiding waarschuwt dat het systeem anders niet werkt.
3. Stapel de batterijen en zet de omvormer (of de Athena-kast) **altijd bovenop**, nooit een batterij boven de omvormer.
4. Zet de anti-kantelbeugel aan de bovenste batterij en aan de muur: gat 8 mm, 45 mm diep, met pluggen.
5. Zet de kastjes onderling vast met de seriebeugels en schroeven.
6. Athena: draai de antenne bovenop vast.

Dek de apparaten af met karton als je boort, zodat er geen stof in komt.

!!! info Kap of eindweerstand?
De Athena-handleiding zegt op p. 22 dat er op de onderste steekpoort van de onderste batterij een **eindweerstand** moet zitten, en op p. 34 dat daar de **beschermkap** moet blijven. Waarschijnlijk is die kap de eindweerstand, maar dat staat er niet met zoveel woorden. Gooi die kap dus niet weg.
!!!`
    },
    {
      id: 'aansluiting',
      kop: 'Elektrische aansluiting en beveiliging',
      tekst: `### Panelen (Athena p. 36-37, S3 p. 36-37 en 40-41)

1. Controleer per ingang de maximale kortsluitstroom en de maximale spanning (60 V).
2. Zet de meegeleverde anti-demontagekap op de MC4-connectoren, zodat de stekkers niet zomaar los te trekken zijn.
3. Sluit aan met de meegeleverde PV-verlengkabel. Bij de Athena mag de PV-kabel niet langer zijn dan **3 m**; de meegeleverde kabel is 2,9 m (Athena p. 26 en 37).

### Stekkeraansluiting (Athena en S3 tot 800 W)

1. Sluit de meegeleverde AC-kabel aan op de GRID-poort.
2. Steek eventueel de stekker van de noodstroombelasting in de BACK-UP-poort.
3. Steek de stekker van de AC-kabel in een wandcontactdoos. Controleer dat stekker en contactdoos bij elkaar passen.

### Vaste aansluiting (alleen S3, tot 3 kW)

Volgens de handleiding mag alleen een vakman dit doen (S3 p. 38-43):

- **Beschermingsaarde:** zelf leveren, aanbevolen 4 mm² met een M4-kabelschoen (OT). Bij meerdere omvormers alle aardpunten vereffenen. Smeer de klem na montage in met siliconen of verf tegen corrosie (p. 40).
- **AC-kabel:** wil je verlengen, dan adviseert GoodWe een buitenkabel van 2,5 mm² koper. Sluit aan op de groepenkast (p. 42).
- **Aardlek:** de handleiding laat het aan de lokale regels over of je een aardlekbeveiliging plaatst (p. 41). Welk type staat er niet in. Zie les m06l03 voor de keuze van het aardlektype.
- **RS485 en LAN:** maak zelf een netwerkkabel (CAT5 of beter) met RJ45-stekker. Pin 7 en 8 zijn voor de meter, pin 5 voor het 14a-apparaat (p. 42-43).
- **Vermogen omhoog:** pas na de vaste aansluiting stel je in de SEMS+-app een hoger terugleververmogen in, en alleen met toestemming van het net (p. 17 en 38).

!!! kern Algemene vakkennis: waarom 800 W en vast boven 800 W
Een wandcontactdoos zit op een groep die is beveiligd voor de belasting van die kabel. Als je op diezelfde groep ook terug invoedt, kan de kabel meer stroom gaan voeren dan de beveiliging ziet. Daarom is invoeding via een stekker beperkt en hoort een groter vermogen op een eigen, goed berekende groep. Dit staat niet in de GoodWe-handleiding; zie les m02l06 en les m10l01.
!!!`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling en de SEMS+-app',
      tekst: `### Controle voor het inschakelen (Athena p. 39, S3 p. 44)

1. Stevig en waterpas geplaatst, met ruimte voor ventilatie.
2. DC- en AC-kabels goed en vast aangesloten.
3. Kabels netjes gebundeld en onbeschadigd.
4. Spanning en frequentie op het aansluitpunt voldoen aan de eisen.

### Inschakelen

Steek de stekker in (of schakel de groep in) en druk op de AAN/UIT-knop. Volg daarna de lampjes:

| Lampje | Betekenis (Athena p. 23-25, S3 p. 24-25) |
|---|---|
| Wit knippert, blauwpaars lopend licht | Athena: systeem start op |
| Wit vast, blauwpaars ademend | Athena: normaal bedrijf |
| Groen vast (S3) | Normaal bedrijf, op het net of off-grid |
| Rood knippert | Systeemfout |
| Geel knippert | Athena: overbelasting van de noodstroomuitgang |
| Groene segmenten | Laadtoestand: vast = laden, knipperend = ontladen |

De Athena heeft aanraakknoppen: 1 tot 2 seconden indrukken wisselt tussen balkon- en buitenmodus, of zet Bluetooth aan. Drie keer achter elkaar binnen 10 seconden zet de Bluetooth- en wifi-instellingen terug. De knoppen zijn vergrendeld; ontgrendelen met twee knoppen tegelijk 3 seconden, na 30 seconden vergrendelen ze weer (Athena p. 24-25).

### De app

Beide reeksen gebruik je met **SEMS+**: Bluetooth voor de eerste instelling (binnen 5 m), daarna wifi naar de router (binnen 10 m) voor bewaking op afstand (Athena p. 17-18). De Engelse handleidingen verwijzen voor de stappen naar de aparte SEMS+-handleiding (Athena EN p. 42-44, S3 p. 47-49). De **Nederlandse Athena-handleiding** heeft ze wel (NL p. 42-60):

1. Account registreren en inloggen.
2. Een station (installatie) aanmaken met naam, adres en type "residentiële opslag".
3. Het serienummer scannen en het apparaat zoeken (het heet WFA- gevolgd door het serienummer).
4. Inloggen op het apparaat met het wachtwoord uit de handleiding, Bluetooth eventueel aan laten staan (anders gaat het na 5 minuten uit).
5. De router kiezen, daarna het **land of de veiligheidsnorm** (de netcode).
6. Werkmodus kiezen: zelfverbruik (standaard) of TOU met tijden en vermogens.

Daarna stel je onder Instellingen onder meer in (NL p. 52-55): **anti-terugvoer** en vermogenslimiet (werkt alleen als de meter gevonden is), de maximale stroom van het net, **batterijverwarming** (drie standen die bij respectievelijk 3, 10 of 17 °C aanslaan), de **energiebesparingsmodus** en de minimale laadtoestand op het net en off-grid.

!!! info Energiebesparing kan noodstroom uitschakelen
De energiebesparingsmodus staat in de fabriek aan. Is de batterij onder de ingestelde ondergrens, dan gaat het apparaat in stand-by en volgens de Nederlandse handleiding werkt dan ook de noodstroom niet (NL p. 54). Het apparaat wordt wakker als de panelen weer spanning geven of als je op de knop drukt (EN p. 72). Leg dit uit aan de klant als die op de BACK-UP-uitgang rekent.
!!!`
    },
    {
      id: 'storingen',
      kop: 'Storingen en onderhoud',
      tekst: `De handleidingen hebben geen foutcodes met nummers, maar een tabel met **foutnaam, oorzaak en aanpak** (Athena p. 48-63, S3 p. 53-62). Je ziet de melding in SEMS+ (NL p. 59-60).

| Groep | Voorbeelden | Meestal te doen |
|---|---|---|
| Net | Overspanning, onderspanning, frequentie, LVRT en HVRT | Komt het af en toe voor, dan herstelt het vanzelf. Vaak: netspanning meten en bij afwijking de netbeheerder bellen. Instellingen alleen wijzigen met toestemming van de netbeheerder |
| Isolatie en aarde | Lage isolatieweerstand, aardfout | Paneelkabels en connectoren nameten; bij vocht kan het tijdelijk zijn |
| Intern | Relais, stroomsensor, temperatuur, BUS-spanning | AC-zijde uit, panelen los, apparaat uit; na 5 minuten alles weer aan. Blijft het, dan dealer bellen |
| PV | PV-overspanning, mismatch | Te veel panelen in serie: open klemspanning onder 60 V brengen |
| Batterij (Athena p. 57-63) | "BMS1 RACK n" met spanning, temperatuur, communicatie, verwarming | Batterij herstarten, software bijwerken, anders service |

Verzamel voor de service: serienummer, softwareversie, installatiedatum, wanneer en hoe vaak de fout optreedt, foto's van de opstelling en de toestand van het net (Athena p. 48).

### Periodiek onderhoud (Athena p. 46-48, S3 p. 51-53)

- Elke 6 maanden: vrije ruimte en vuil rond het apparaat.
- Elke 6 tot 12 maanden: vastzitten, schade en losse aansluitingen.
- Batterij die lang niet gebruikt of volgeladen is: elke 15 dagen laden.

### Opslag (Athena p. 27-29, S3 p. 28-29)

Opslaan op 35 tot 45% lading. Bij -20 tot 35 °C binnen 12 maanden, bij 35 tot 45 °C binnen 6 maanden opnieuw laden. Een apparaat dat langer dan twee jaar in opslag lag of na installatie 6 maanden niet heeft gewerkt, eerst laten nakijken. De productiedatum staat in het serienummer, cijfer 11 tot 14 (Athena p. 74-75).`
    },
    {
      id: 'wat-niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat',
      tekst: `- Of en hoe je in Nederland of België een stekkerbatterij of de vaste S3-aansluiting meldt bij de netbeheerder. De handleiding zegt alleen dat je toestemming nodig hebt.
- Welk type aardlekbeveiliging en welke groepsgrootte voor de vaste S3-aansluiting.
- Of Athena- en S3-batterijen onderling uitwisselbaar zijn.
- Hoe je de meter installeert: daarvoor verwijzen beide naar de handleiding van de meter.
- De vrije ruimte rond de stapel en de maten: die staan alleen als tekening.
- Aanhaalmomenten: er wordt een momentsleutel genoemd, maar in de tekst staat geen waarde.

!!! info Versies en vertaling
De Nederlandse Athena-handleiding (V1.1, november 2025) is ouder dan de Engelse (V1.3, september 2026). De Engelse noemt een extra meter. De Nederlandse vertaling bevat fouten: bij veiligheid staat "omgevingstemperatuur 150" waar de Engelse de batterijtemperatuur bedoelt, en hier en daar staat Pools ("Modul fotowoltaiczny"). Bij twijfel is de Engelse versie leidend.
!!!`
    }
  ],

  handleidingRefs: [
    { doc: 'um', hoofdstuk: '1.3 System Safety, 1.3.1 PV String Safety', paginas: '9-11', onderwerp: 'Spanningsloos werken, PV-ingang, isolatieweerstand, kabelafstanden' },
    { doc: 'um', hoofdstuk: '1.3.3 Battery Safety en noodmaatregelen', paginas: '12-13', onderwerp: 'Elektrolyt, brand boven 150 graden, blusmiddelen' },
    { doc: 'um', hoofdstuk: '1.4 Safety Symbols', paginas: '13-14', onderwerp: 'Labels, 5 minuten wachten, niet met water blussen' },
    { doc: 'um', hoofdstuk: '2.1 System Overview en 2.2 System Mode', paginas: '17-19', onderwerp: 'Opbouw, meter, 60 V, zelfverbruik en TOU' },
    { doc: 'um', hoofdstuk: '2.4 Appearance en 2.6 Indicator Light', paginas: '20-25', onderwerp: 'Poorten, steekpoorten, lampjes en aanraakknoppen' },
    { doc: 'um', hoofdstuk: '3.2 Delivered Items en 3.3 Equipment Storage', paginas: '26-29', onderwerp: 'Leveringsomvang, opslag en laadtoestand' },
    { doc: 'um', hoofdstuk: '4.1 Installation Requirements en 4.3 Install the Device', paginas: '30-35', onderwerp: 'Plaats, gereedschap, stapelen en anti-kantelbeugel' },
    { doc: 'um', hoofdstuk: '5 System Wiring', paginas: '36-38', onderwerp: 'Panelen en AC-kabel met stekker' },
    { doc: 'um', hoofdstuk: '6 System Trial Run en 7 SEMS+', paginas: '39-44', onderwerp: 'Controle, inschakelen, lampjes, app en web' },
    { doc: 'um', hoofdstuk: '8.1 Power-Off en 8.4 Periodic Maintenance', paginas: '45-48', onderwerp: 'Uitschakelen en onderhoudsschema' },
    { doc: 'um', hoofdstuk: '8.5 Troubleshooting', paginas: '48-63', onderwerp: 'Net-, isolatie-, interne, PV- en batterijfouten (BMS vanaf p. 57)' },
    { doc: 'um', hoofdstuk: '9 Technical Parameters', paginas: '64-70', onderwerp: 'Specificaties omvormer en uitbreidingsbatterij' },
    { doc: 'um', hoofdstuk: '10.1 FAQs en 10.3 Battery SN Code', paginas: '71-75', onderwerp: 'Buitenmodus, energiebesparing, productiedatum uit serienummer' },
    { doc: 'gh-nl', hoofdstuk: '2.3 Systeemveiligheid en 2.4 Veiligheidssymbolen', paginas: '10-14', onderwerp: 'Veiligheid in het Nederlands' },
    { doc: 'gh-nl', hoofdstuk: '3 Systeemintroductie', paginas: '17-25', onderwerp: 'Overzicht, werkmodi, poorten en LED-indicatoren' },
    { doc: 'gh-nl', hoofdstuk: '5 Installatie, 6 Systeem bedrading, 7 Inbedrijfstelling', paginas: '30-41', onderwerp: 'Plaatsen, stapelen, aansluiten, inschakelen' },
    { doc: 'gh-nl', hoofdstuk: '8.1 tot 8.4 SEMS+ App en snel configureren', paginas: '42-50', onderwerp: 'Account, station aanmaken, apparaat koppelen, werkmodus' },
    { doc: 'gh-nl', hoofdstuk: '8.5 Parameters instellen', paginas: '50-55', onderwerp: 'Anti-terugvoer, verwarming, energiebesparing, ontlaaddiepte' },
    { doc: 'gh-nl', hoofdstuk: '8.6 Installatie-informatie en alarmen bekijken', paginas: '55-60', onderwerp: 'Overzicht en alarmmeldingen in de app' },
    { doc: 'gh-nl', hoofdstuk: '9 Onderhoud en 9.5 Probleemoplossing', paginas: '61-81', onderwerp: 'Uitschakelen, onderhoud, storingstabel' },
    { doc: 'gh-nl', hoofdstuk: '10 Technische specificaties', paginas: '82-88', onderwerp: 'Specificaties in het Nederlands' },
    { doc: 'qig', hoofdstuk: 'Installatie en bedrading (ook Nederlands)', paginas: '1', onderwerp: 'Netvergunning, 60 V, stapelen en aansluiten op tekening' },
    { doc: 'qig', hoofdstuk: 'Inschakelen, indicatoren en app', paginas: '2', onderwerp: 'Lampjes, SEMS+ downloaden en station aanmaken' },
    { doc: 'ds', hoofdstuk: 'Power Module en Battery Module', paginas: '1-3', onderwerp: 'Kenmerken, specificaties, capaciteit per aantal modules' },
    { doc: 's3-um', hoofdstuk: 'Foreword (Applicable Products)', paginas: '3', onderwerp: 'Typenummers en de opmerking over VDE 0126-95' },
    { doc: 's3-um', hoofdstuk: '1.3 System Safety en 1.4 Safety Symbols', paginas: '9-14', onderwerp: 'Veiligheid, blusmiddel, labels' },
    { doc: 's3-um', hoofdstuk: '2.1 System Overview en 2.2 System Mode', paginas: '17-20', onderwerp: 'Stekker of vast, meters, zelfverbruik, TOU en AI-modus' },
    { doc: 's3-um', hoofdstuk: '2.4 Appearance en 2.6 Indicator Light', paginas: '20-25', onderwerp: 'Poorten (RS485, LAN) en lampjes' },
    { doc: 's3-um', hoofdstuk: '4 Installation', paginas: '30-34', onderwerp: 'Plaats, gereedschap, stapelen op 60 tot 65 mm van de muur' },
    { doc: 's3-um', hoofdstuk: '5.1 Plug in solar device wiring', paginas: '35-38', onderwerp: 'Stekkeraansluiting, draadloze meters, PV niet in serie' },
    { doc: 's3-um', hoofdstuk: '5.2 Permanent connection wiring', paginas: '38-43', onderwerp: 'Aarde, AC naar groepenkast, aardlek, RS485-pinnen, LAN' },
    { doc: 's3-um', hoofdstuk: '6 System Trial Operation en 7 SEMS+', paginas: '44-49', onderwerp: 'Controle, inschakelen, lampjes, app' },
    { doc: 's3-um', hoofdstuk: '8 System Maintenance en 8.5 Troubleshooting', paginas: '50-62', onderwerp: 'Uitschakelen, onderhoud en storingstabel' },
    { doc: 's3-um', hoofdstuk: '9 Technical Parameters', paginas: '63-71', onderwerp: 'Specificaties omvormer en batterij' },
    { doc: 's3-qig', hoofdstuk: 'Installatie en bedrading (ook Nederlands)', paginas: '1', onderwerp: 'Netvergunning en opbouw op tekening' },
    { doc: 's3-qig', hoofdstuk: 'Aansluiting, indicatoren en app', paginas: '2', onderwerp: 'Lampjes en SEMS+' },
    { doc: 's3-ds', hoofdstuk: 'Hybrid Inverter en Battery Module', paginas: '1-3', onderwerp: 'Kenmerken, specificaties, gewicht en maten per aantal modules' }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm10l04', 'm02l06', 'm06l03', 'm01l03'],

  zieOok: ['goodwe-esa-3-10kw', 'goodwe-esa-5-30kw', 'goodwe-esa-5kw-10-8kwh', 'sigenergy-sigenstor-home']
});
