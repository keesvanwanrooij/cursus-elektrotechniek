/* ==========================================================================
   content/kennis/zaptec/merk.js - merkpagina Zaptec
   Bronnen: de handleidingen en productbladen van Zaptec Go en Go 2 in de map,
   aangevuld met zaptec.com en help.zaptec.com voor producten zonder
   handleiding in de map (dat staat er dan bij).
   ========================================================================== */

KENNIS.addMerk({
  id: 'zaptec',
  slug: 'zaptec',
  naam: 'Zaptec',
  herkomst: 'Sandnes, Noorwegen',
  website: 'https://www.zaptec.com',
  intro: 'Zaptec is een Noorse fabrikant van AC-laadstations voor elektrische auto\'s: de kleine Zaptec Go en Go 2 voor thuis, de Zaptec Pro voor gedeelde en zakelijke installaties, de Zaptec Sense voor load balancing en de Zaptec-app en het Zaptec Portal voor beheer. Hier zie je welk product wat doet en waar je in de handleidingen moet zijn.',

  secties: [
    {
      id: 'over-het-merk',
      kop: 'Over Zaptec',
      tekst: `Zaptec Charger AS zit in Sandnes, aan de westkust van Noorwegen. Volgens de handleidingen en productbladen worden de laders daar ontworpen, ontwikkeld en gemaakt ("Made in Norway"). Op de laadstations geeft Zaptec **vijf jaar garantie** op materiaal- en fabricagefouten, en minimaal **vijf jaar software-updates** vanaf aankoop.

Wat het merk kenmerkt:

- **Alleen AC-laden.** Alle laders van Zaptec in dit overzicht laden met wisselstroom, tot 22 kW. Een DC-snellader of een thuisbatterij maakt Zaptec niet.
- **Klein, met een contactdoos.** De Go en Go 2 hebben geen vaste kabel maar een Type 2-contactdoos met elektronisch slot. De klant gebruikt zijn eigen laadkabel.
- **Altijd online.** De laders hangen via wifi of 4G aan de cloud van Zaptec. Instellen, updaten en beheren gaat via de Zaptec-app en het Zaptec Portal.
- **Gebouwd voor Noorwegen.** De laders werken ook op een **IT-net** (geen nul, 230 V tussen de fasen), dat in Noorwegen veel voorkomt. In Nederland zit je vrijwel altijd op TN of TT.
- **Geen Ethernet.** Geen van de documenten in de map noemt een netwerkaansluiting met kabel.

!!! kern Lees het productblad als verkoopdocument
Zinnen als "10x sneller" en "80% kleiner" komen uit het productblad. Voor de installatie gelden de installatiehandleiding en de technische specificaties in de gebruikershandleiding.
!!!`
    },
    {
      id: 'productoverzicht',
      kop: 'Globaal productoverzicht',
      tekst: `Voor een woning zijn dit de productfamilies van Zaptec. Alleen de Go en de Go 2 hebben een eigen pagina met handleiding; de rest komt van de website en het helpcentrum van Zaptec.

| Product | Wat het is | Voor wie | Rol |
|---|---|---|---|
| **Zaptec Go** | Compact wandlaadstation, Type 2-contactdoos, tot 22 kW, lampring, meter van ongeveer 3% | Woning, tot 3 per adres | Laadpaal en lader |
| **Zaptec Go 2** | Opvolger van de Go, met scherm, MID-meter, automatisch 3 naar 1 fase, IK10 | Woning, tot 3 per adres | Laadpaal en lader |
| **Zaptec Go 2 T2S** | Uitvoering van de Go 2 voor de Franse eisen, met sluiter in de contactdoos | Frankrijk | Laadpaal en lader |
| **Zaptec Pro** | Laadstation voor gedeelde en zakelijke installaties, schaalbaar tot veel laadpunten | Appartementen, bedrijven, parkeergarages | Laadpaal en lader |
| **Zaptec Sense** | Meter in de meterkast die het verbruik van het gebouw doorgeeft voor load balancing | Woning met een Go of Go 2 | Meting en sensoren |
| **Zaptec-app** | App voor gebruiker en installateur: activeren, instellen, laden, toegang | Iedereen | App en cloud |
| **Zaptec Portal** | Webomgeving voor installaties, laders en instellingen | Installateur en beheerder | App en cloud |
| **Accessoires** | Montagepalen, laadkabels, voorplaten, kabelhouder | Naar keuze | Laadpaal en lader |

### De verschillen tussen de laders

**Go en Go 2** zijn allebei bedoeld voor thuis en technisch nauw verwant: dezelfde aansluitklemmen, dezelfde draaischakelaar (6 tot 32 A), dezelfde lampkleuren en dezelfde boortekening. De Go 2 voegt toe:

- een **scherm** met normale modus en **MID-modus**;
- een **MID-gecertificeerde meter** (klasse B), wat nodig is als laadsessies officieel moeten worden afgerekend;
- **automatisch wisselen tussen 3 en 1 fase**;
- **IK10** in plaats van IK08 en gebruik tot **50 in plaats van 40 graden**;
- **ISO 15118**-hardware en OCPP ook rechtstreeks op de lader.

Ook bij de voorbeveiliging verschillen de documenten: voor de Go is het "maximaal 40 A, C-karakteristiek aanbevolen", voor de Go 2 in de Engelse tekst "volgens lokale voorschriften". Zie de productpagina's.

**Go 2 T2S.** Volgens het helpcentrum van Zaptec is dit de Go 2 voor de Franse regels: de contactdoos heeft een **sluiter** (in het Frans "volet") en bij 32 A hoort een kabel van **10 mm²**. Het helpcentrum heeft er een eigen installatiehandleiding voor, die niet in onze map zit. In Nederland gebruik je de gewone Go 2.

**Zaptec Pro.** Volgens de website van Zaptec bedoeld voor appartementencomplexen, bedrijven en (openbare) parkeergarages, schaalbaar van één tot meer dan duizend laadpunten. De website noemt tot 22 kW, wisselen tussen 1 en 3 fasen, een ingebouwde MID-meter met weergave op de lader, wifi en 4G LTE-M en **gepatenteerde dynamische load balancing en fasebalancering** over alle laders. Het beheer loopt via het Zaptec Portal. In het helpcentrum staat ook een T2S-uitvoering van de Pro. Het grote verschil met de Go: de Pro is gemaakt om veel laders op een gezamenlijke aansluiting te verdelen, de Go en Go 2 voor maximaal drie laders op een adres.

### Zaptec Sense

De Sense is de meter die load balancing met het huis mogelijk maakt. De gebruikershandleiding van de Go noemt hem een soort receptionist: hij leest het verbruik in huis af, zodat de lader minder vermogen neemt als de rest van het huis veel vraagt en de hoofdzekering niet uitschakelt. Volgens de website van Zaptec:

- gaat hij in de meterkast en gebruikt hij in de Benelux de **P1-poort** van de slimme meter (in Scandinavië de HAN-poort); er zijn verschillende modellen voor verschillende meterkasten;
- kan hij ook zonne-overschot herkennen, zodat de auto alleen met overschot of met overschot plus net laadt. Dat is beschikbaar in onder meer Nederland, België, Duitsland, Zwitserland en Luxemburg, te beginnen met geselecteerde particuliere **TN**-installaties;
- kun je er verbruikslimieten mee instellen, bijvoorbeeld om onder een capaciteitstarief te blijven.

Zonder Sense kunnen meerdere Go's het vermogen onderling verdelen, maar weet de lader niet wat de rest van het huis gebruikt. Een installatiehandleiding van de Sense zit niet in onze map.

### Zaptec-app en Zaptec Portal

De **Zaptec-app** gebruik je bij de installatie (QR-code scannen, installatiegegevens invullen, firmware bijwerken) en de klant daarna voor laden, pauzeren, toegang voor anderen, RFID-passen en laadgeschiedenis. Het **Zaptec Portal** is de webomgeving waarin je installaties en laders terugziet. Volgens het helpcentrum stel je daar per installatie onder meer het netstelsel en de waarde van de hoofdzekering voor het laadsysteem in. Die waarde mag nooit hoger zijn dan de beveiliging die er werkelijk zit. Om te mogen installeren en configureren heb je volgens het helpcentrum een Zaptec-account nodig dat aan je bedrijf is gekoppeld, en een afgeronde certificering bij de **Zaptec Academy**.

### Accessoires

Volgens de website van Zaptec onder meer:

- **Zaptec Column**: een montagepaal van aluminium voor de Go en de Pro, met een vervangbare fundering;
- **Onepole Lite 1200**: montagepaal speciaal voor de Go en Go 2, als Single (één lader) en Twin (twee laders);
- **Premium palen** enkel en dubbel voor de Pro;
- **laadkabels**: Type 2, 32 A, 3 fasen in 5 en 7,5 m, en een Type 1-kabel van 7,5 m voor oudere auto's;
- **voorplaten** in verschillende kleuren (de Go heeft er zes) en een kabelhouder (Zaptec Chill).

Voor de Go en Go 2 is een laadkabel extra belangrijk, omdat ze geen vaste kabel hebben.`
    },
    {
      id: 'samenhang',
      kop: 'Hoe de onderdelen samenwerken',
      tekst: `Een Zaptec-installatie in een woning bestaat uit drie lagen:

1. **De lader** (Go of Go 2) op een eigen groep met automaat en aardlekschakelaar type A. De lader zelf bewaakt gelijkstroomlek (6 mA, RDC-DD) en meet zijn eigen energie.
2. **De cloud van Zaptec**, waar de lader via wifi of 4G mee praat. Daar komen de app, het Portal en eventueel een extern platform (via OCPP 1.6J, een API of webhooks) samen.
3. **Optioneel de Zaptec Sense** in de meterkast, die het verbruik van het huis doorgeeft zodat de cloud de laadstroom kan verlagen.

### Een tweede of derde lader

Tot drie Go's of Go 2's per adres kunnen het vermogen automatisch delen. De eigenaar geeft de installateur toegang tot zijn installatie in de app (een zoeksleutel of partnercode van 4 tekens van het installatiebedrijf plus servicetoestemming). Bij de Go 2 kies je bij het activeren direct **Link naar een bestaande installatie**. Voor meerdere laders en IT-netten verwijzen de handleidingen naar help.zaptec.com.

### Zonder internet

De draaischakelaar in de lader (standen 1 tot en met 7, van 6 tot 32 A) laat de lader zonder app werken. Je kunt dan geen fasen kiezen en de functies zijn beperkt. Stand 0 betekent: de app bepaalt.

!!! info Namen lezen
**T2S** staat voor een Type 2-contactdoos met sluiter (Franse eis). **MID** is de Europese richtlijn voor meetinstrumenten: een MID-meter mag je gebruiken voor afrekenen. **RDC-DD** is de ingebouwde detectie van gelijkstroomlek. **Mode 3, case B** betekent: laden met een laadstation, met een losse kabel van de gebruiker.
!!!`
    },
    {
      id: 'handleidingen',
      kop: 'Welke handleiding bij welke vraag',
      tekst: `De documenten van Zaptec zijn kort en grotendeels beeld. De installatiehandleiding is meertalig: per stap een afbeelding en daarnaast dezelfde tekst in acht talen. Het Nederlandse stuk staat steeds als laatste of rechtsonder.

| Document | Voor wie | Waarvoor |
|---|---|---|
| **Installer Manual** | Installateur | Montage, kabelinvoer, aansluitschema per netstelsel, voorbeveiliging, draaischakelaar, instellen in de app, afronden |
| **User Manual** | Gebruiker, maar ook nuttig voor jou | Activeren, meerdere laders, lampkleuren, scherm en MID-modus (Go 2), onderhoud, en de volledige **technische specificaties** |
| **Productblad** | Verkoop en ontwerp | Netstelsels, vermogens, normen, verbinding en software-koppelingen |
| **Base Hole Layout** | Installateur | Gatenpatroon van de achterplaat op schaal 1:1 (gelijk voor Go en Go 2) |
| **help.zaptec.com** | Installateur | Meerdere laders, IT-netten, Portal, Sense en de T2S-uitvoeringen |

Twee tips:

- De **technische specificaties** (kabeldoorsnede, lekstroom, externe beveiliging) staan bij de Go in de gebruikershandleiding, niet in de installatiehandleiding. Bij de Go 2 staan ze in allebei.
- De paginanummers in de kennisbank zijn pdf-pagina's. In de Go 2-installatiehandleiding staan twee gedrukte pagina's op één pdf-pagina. Controleer altijd de datum en het documentnummer op de achterkant (bijvoorbeeld MA-00018-A2 voor de Go 2-installatiehandleiding van 16 september 2025), want Zaptec past de documenten regelmatig aan.`
    },
    {
      id: 'veiligheid',
      kop: 'Algemene veiligheidsregels van Zaptec',
      tekst: `De waarschuwingen zijn bij de Go en de Go 2 bijna gelijk:

- Alleen **gekwalificeerd personeel** installeert, repareert en onderhoudt. Reparaties alleen door Zaptec of een door Zaptec goedgekeurde werkplaats.
- Volg de lokale, regionale en landelijke wetten en voorschriften. Wie de handleiding niet volgt, verliest de garantie.
- Geen beschadigd product installeren of gebruiken. Alleen goedgekeurde bekabeling.
- Niet op plekken met extreme temperaturen, zoals volle zon.
- **Geen verlengkabels.** Adapters alleen als de autofabrikant of Zaptec ze heeft goedgekeurd.
- Niets in de Type 2-contactdoos steken. Niet schoonmaken met een hogedrukreiniger.
- Een **openbaar toegankelijke** lader jaarlijks laten inspecteren door gekwalificeerd personeel.
- De **pincode** van de lader geeft toegang tot instellingen. Bewaar hem goed en deel hem niet.

!!! gevaar Wat de handleidingen niet zeggen
Er staat geen stappenplan in voor spanningsloos werken, geen regel over aarding bij een TT-net en geen berekening van de kabeldoorsnede. Pas daarvoor de cursus toe: de vijf stappen (les 1.3), aarding (les 3.5), doorsnede (les 4.2) en aardlektypes (les 6.3).
!!!`
    },
    {
      id: 'storingen',
      kop: 'Led-indicaties en storingen',
      tekst: `Zaptec werkt bij de Go en de Go 2 met **één lampring in acht toestanden**. Er is bij de Go geen foutcode; bij de Go 2 toont het scherm daarnaast meldingen.

| Kleur | Betekenis |
|---|---|
| Geen licht | Geen voeding |
| Wit | Stand-by of laden voltooid. Moet wit zijn na de installatie |
| Blauw | Continu: wacht op de auto. Pulserend of knipperend: laden |
| Groen | Wacht op een geplande start, Eco-modus (Go) of Slim Laden (Go 2), of een externe partij |
| Geel | Wacht op authenticatie (app of RFID), of gereserveerd |
| Oranje | Wacht op configuratie door een erkende installateur |
| Rood | Fout gevonden |
| Paars | Firmware wordt bijgewerkt |

De kleurtabel staat in de pdf als twee losse kolommen. De koppeling volgt de volgorde in de tabel en de tekst "blauw = laden"; bij twijfel geldt de originele tabel.

### Een vaste aanpak bij rood

1. Koppel de auto los.
2. Start de lader opnieuw op. Hoe precies, staat niet in de handleiding.
3. Blijft het rood, neem dan contact op met de installateur of Zaptec.

Volgens het productblad reset de ingebouwde DC-lekbeveiliging automatisch als je de Type 2-kabel opnieuw insteekt. Bij de Go 2 kan het scherm een **MID-foutcode** in het rood tonen die begint met een **E**; dan neem je contact op met de servicepartner. Een volledige lijst met codes staat niet in de documenten.`
    },
    {
      id: 'anders-dan-sigenergy',
      kop: 'Waar Zaptec anders werkt dan Sigenergy',
      tekst: `| Onderwerp | Sigenergy (EV AC Charger) | Zaptec (Go en Go 2) |
|---|---|---|
| Aanbod | Laders als onderdeel van een systeem met omvormer, batterij en gateway | Alleen laders, met Sense en cloud eromheen |
| Modellen | Drie vermogens (7, 11, 22 kW), met kabel of contactdoos | Eén model tot 22 kW, alleen contactdoos |
| Lekstroom | 6 mA DC en 30 mA AC ingebouwd | 6 mA DC ingebouwd, externe aardlek type A 30 mA vereist |
| Automaat | Karakteristiek B | C-karakteristiek aanbevolen (Go), lokale voorschriften (Go 2) |
| Load balancing | Sigen Power Sensor via RS485-kabel naar de lader | Zaptec Sense via P1-poort en de cloud; laders onderling ook zonder Sense |
| Verbinding | 4G, wifi, Ethernet | 4G, wifi, Bluetooth |
| Instellen | mySigen-app, nieuw systeem aanmaken | Zaptec-app via Bluetooth en QR-code, daarna Zaptec Portal |
| Status | Vijf genummerde lampjes | Eén lampring met kleuren, bij de Go 2 ook een scherm |
| Foutcodes | Lijst van alarmeringen (5001 en verder voor laders) | Geen lijst; alleen kleuren en bij de Go 2 E-codes op het scherm |

Het belangrijkste verschil in de praktijk: bij Sigenergy hangt de lader in een groter energiesysteem en regelt het EMS van Sigenergy wanneer hij laadt. Bij Zaptec is de lader het hoofdproduct en regelt de cloud van Zaptec, met de Sense als meting, het vermogen.`
    }
  ],

  begrippen: [
    { term: 'Type 2', uitleg: 'De Europese standaardstekker en -contactdoos voor AC-laden (IEC 62196-2). De Go en Go 2 hebben een Type 2-contactdoos, geen vaste kabel.' },
    { term: 'T2S', uitleg: 'Type 2-contactdoos met sluiter, een Franse eis. Zaptec heeft er aparte uitvoeringen van de Go 2 en de Pro voor.' },
    { term: 'Mode 3, case B', uitleg: 'Laden met een vast laadstation dat met de auto communiceert, waarbij de gebruiker een losse laadkabel meebrengt.' },
    { term: 'RDC-DD', uitleg: 'Ingebouwde detectie van gelijkstroomlek (6 mA DC) volgens IEC 62955. Daardoor volstaat een externe aardlek type A in plaats van type B.' },
    { term: 'MID', uitleg: 'Europese richtlijn voor meetinstrumenten. Een MID-gecertificeerde meter, zoals in de Go 2, mag je gebruiken om laadsessies af te rekenen.' },
    { term: 'TN, TT en IT', uitleg: 'Netstelsels: hoe het net en de installatie geaard zijn. In Nederland meestal TN of TT. Het IT-net zonder nul komt vooral in Noorwegen voor.' },
    { term: 'Zaptec Sense', uitleg: 'Meter in de meterkast (in de Benelux op de P1-poort) die het verbruik van het huis doorgeeft voor dynamische load balancing.' },
    { term: 'Zaptec Portal', uitleg: 'Webomgeving van Zaptec voor installaties, laders en instellingen zoals netstelsel en hoofdzekering.' },
    { term: 'Zoeksleutel of partnercode', uitleg: 'Code van 4 tekens waarmee een klant in de app een Zaptec-installateur toegang geeft tot zijn installatie.' },
    { term: 'Draaischakelaar', uitleg: 'Schakelaar in de lader voor de maximale stroom zonder app: stand 0 = app, standen 1 tot en met 7 = 6 tot 32 A.' },
    { term: 'LTE-M en LTE Cat 1', uitleg: 'Varianten van 4G voor apparaten. De Go gebruikt LTE-M, de Go 2 LTE Cat 1.' },
    { term: 'OCPP', uitleg: 'Open standaard waarmee een laadstation met een beheerplatform praat. Zaptec ondersteunt OCPP 1.6J.' },
    { term: 'ISO 15118', uitleg: 'Norm voor communicatie tussen auto en lader, onder meer voor automatisch herkennen van de auto. De Go 2 heeft er hardware voor.' }
  ],

  overigeProducten: [
    { naam: 'Zaptec Pro', rol: 'lader', omschrijving: 'Laadstation voor appartementencomplexen, bedrijven en parkeergarages, schaalbaar tot meer dan duizend laadpunten, met dynamische load balancing en fasebalancering, MID-meter en beheer via het Zaptec Portal (volgens de website van Zaptec).' },
    { naam: 'Zaptec Go 2 T2S', rol: 'lader', omschrijving: 'Uitvoering van de Go 2 voor Frankrijk, met sluiter in de contactdoos en een kabel van 10 mm² bij 32 A (volgens het helpcentrum van Zaptec).' },
    { naam: 'Zaptec Sense', rol: 'sensor', omschrijving: 'Meter in de meterkast die het verbruik van het gebouw doorgeeft, voor load balancing en laden met zonne-overschot. In de Benelux op de P1-poort (volgens de website van Zaptec).' },
    { naam: 'Zaptec-app en Zaptec Portal', rol: 'app', omschrijving: 'App voor installatie, laden en toegang, en de webomgeving voor beheer van installaties en laders. Beschreven op de productpagina\'s van de Go en Go 2.' },
    { naam: 'Montagepalen en laadkabels', rol: 'lader', omschrijving: 'Onder meer de Zaptec Column, de Onepole Lite 1200 (Single en Twin) voor Go en Go 2, en Type 2-laadkabels van 5 en 7,5 m (volgens de website van Zaptec).' }
  ]
});
