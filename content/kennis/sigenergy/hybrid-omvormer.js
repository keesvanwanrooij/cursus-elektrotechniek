/* ==========================================================================
   content/kennis/sigenergy/hybrid-omvormer.js
   Samenvatting van de installateurshandleidingen voor de Sigen Hybrid-omvormer
   (SP2 1-fase 2.0-6.0 kW en TP2 3-fase 3.0-12.0 kW), in eigen woorden.
   Paginanummers verwijzen naar de positie in de pdf (1 = eerste pagina), niet
   naar de gedrukte paginanummers in het document zelf.
   ========================================================================== */

KENNIS.addProduct({
  id: 'sigenergy-hybrid-omvormer',
  merk: 'sigenergy',
  slug: 'hybrid-omvormer',
  naam: 'Sigen Hybrid-omvormer (SP2 1-fase en TP2 3-fase)',
  rol: 'omvormer',
  toepassingen: ['thuisbatterij'],
  korteOmschrijving: 'De omvormer die zonnepanelen en thuisbatterij samenbrengt en er wisselspanning voor huis en net van maakt. De SP2-serie is 1-fase (2.0 tot 6.0 kW), de TP2-serie is 3-fase (3.0 tot 12.0 kW). Deze pagina vat de installateurshandleidingen samen en wijst je de weg naar hoofdstuk en pagina.',

  varianten: {
    kop: ['Model', 'Fasen', 'Nominaal AC-vermogen (W)', 'Max. schijnbaar vermogen (VA)', 'Max. PV-vermogen (W)', 'PV-ingangen', 'Nominale uitgangsstroom (A)', 'Max. uitgangsstroom (A)'],
    rijen: [
      ['2.0 SP2', '1', '2000', '2200', '4000', 'PV1, PV2', '9,1', '10,0'],
      ['3.0 SP2', '1', '3000', '3300', '6000', 'PV1, PV2', '13,6', '15,0'],
      ['3.6 SP2', '1', '3680', '3680', '7360', 'PV1, PV2', '16,0', '16,0'],
      ['4.0 SP2', '1', '4000', '4400', '8000', 'PV1, PV2', '18,2', '20,0'],
      ['4.6 SP2', '1', '4600', '5000', '9200', 'PV1, PV2', '20,9', '22,7'],
      ['5.0 SP2', '1', '5000', '5500', '10000', 'PV1, PV2', '22,7', '25,0'],
      ['6.0 SP2', '1', '6000', '6600', '12000', 'PV1, PV2', '27,3', '30,0'],
      ['3.0 TP2', '3', '3000', '3300', '6000', 'PV1, PV2', '4,6', '5,1'],
      ['4.0 TP2', '3', '4000', '4400', '8000', 'PV1, PV2', '6,1', '6,7'],
      ['5.0 TP2', '3', '5000', '5500', '10000', 'PV1, PV2', '7,6', '8,4'],
      ['6.0 TP2', '3', '6000', '6600', '12000', 'PV1, PV2', '9,1', '10,0'],
      ['8.0 TP2', '3', '8000', '8800', '16000', 'PV1, PV2', '12,2', '13,4'],
      ['10.0 TP2', '3', '10000', '10000 (brochure: 11000)', '20000', 'PV1, PV2, PV3', '15,2', '16,7'],
      ['12.0 TP2', '3', '12000', '13200', '24000', 'PV1, PV2, PV3', '18,2', '20,1']
    ]
  },

  documenten: [
    { id: 'bi', titel: '01-Belangrijke informatie voor Sigen Hybrid-serie_NL', soort: 'Belangrijke informatie', paginas: 15 },
    { id: 'ig-sp2', titel: '02-Installatiegids voor Sigen Hybrid (2.0-6.0) SP2-serie_NL', soort: 'Installatiegids', paginas: 20 },
    { id: 'ig-tp2', titel: '02-Installatiegids voor Sigen Hybrid (3.0-12.0) TP2-serie_NL', soort: 'Installatiegids', paginas: 20 },
    { id: 'alarm', titel: '03-Lijst van alarmeringen_NL', soort: 'Lijst van alarmeringen', paginas: 23 },
    { id: 'ds', titel: 'Data papier - Sigen hybride omvormer voor België', soort: 'Datasheet', paginas: 2 },
    { id: 'br', titel: 'Brochure - Thuis Energieoplossing', soort: 'Brochure', paginas: 23 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `Een **omvormer** zet gelijkspanning (DC) om in wisselspanning (AC). Zonnepanelen leveren DC, een batterij werkt op DC, maar je huis en het openbare net werken op AC. Een **hybride omvormer** bedient zowel de zonnepanelen als de thuisbatterij, zodat je niet twee losse omvormers nodig hebt.

De Sigen Hybrid bestaat in twee series die in dezelfde handleidingstructuur zijn beschreven:

- **SP2**: 1-fase, van 2.0 tot 6.0 kW (2.0, 3.0, 3.6, 4.0, 4.6, 5.0 en 6.0).
- **TP2**: 3-fase, van 3.0 tot 12.0 kW (3.0, 4.0, 5.0, 6.0, 8.0, 10.0 en 12.0).

Beide hangen aan de muur, hebben beschermingsgraad **IP66** (dat is de code voor stof- en waterbescherming), koelen door natuurlijke convectie en communiceren via WLAN, Fast Ethernet (netwerkkabel), RS485 of de Sigen CommMod (4G-module). Volgens het datablad zitten er onder meer deze beveiligingen in: bescherming tegen omgekeerde DC-polariteit, isolatie- en reststroombewaking, een lichtboogfoutonderbreker (AFCI, herkent een gevaarlijke vonkverbinding in de DC-bedrading), overstroom-, overspanning- en kortsluitbeveiliging en anti-eilandbeveiliging (de omvormer levert niet door aan een net dat is uitgevallen).

!!! kern Wat je hier waarschijnlijk nog niet weet
- De omvormer heeft de batterij niet zelf aan boord. Die hangt eraan via een **batterijcontroller** (SigenStor BC) met daaronder batterijmodules (SigenStor BAT). Die onderdelen staan op een eigen pagina.
- Het maximale PV-vermogen is twee keer het nominale AC-vermogen (bij de 2.0 SP2: 4000 W PV op 2000 W AC). Die verhouding heet **DC/AC-verhouding**. De brochure noemt 200%. Je mag dus meer panelen aansluiten dan de omvormer als wisselstroom kan leveren. Volgens de brochure is dat bedoeld voor een hogere opbrengst.
- Het datablad en de installatiegids zijn voor beide series bijna hetzelfde. Kijk telkens goed of je in het SP2- of het TP2-document leest.
!!!`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Plek in het systeem',
      tekst: `De omvormer is het middelpunt waar alles op aansluit. Bekijk het als een verkeersplein met deze aansluitingen (zie hoofdstuk 1.2 Poortintroductie):

| Aansluiting | Markering | SP2 | TP2 |
|---|---|---|---|
| PV-strings (DC-aansluitblok) | PV1+/PV1- en PV2+/PV2- (TP2 ook PV3+/PV3-) | 2 ingangen | 3 ingangen (PV1 tot PV3) |
| Batterij (ingang accu) | BAT+/BAT- | ja | ja |
| CommMod (4G) en antenne (WLAN) | 4G en ANT | ja | ja |
| Communicatiepoort | COM | ja | ja |
| Wisselspanning (net en huis) | AC | ja | ja |
| Aardingspunten (2x) | - | ja | ja |
| DC-schakelaar | DC SWITCH | ja | ja |

Bij de TP2 gaat de PV3-ingang alleen bij de grotere modellen (10.0 en 12.0 kW) in gebruik. Zo werkt de keten:

- **PV-strings.** Een **string** is een rij in serie geschakelde zonnepanelen. Elke string gaat naar een PV-ingang. De omvormer heeft twee **MPPT's**: dat is een regeling die per ingangsgroep het werkpunt zoekt waarop de panelen het meeste vermogen leveren. Bij de SP2 hoort 1 string bij elke MPPT. Bij de TP2 van 10.0 en 12.0 kW delen PV2 en PV3 samen één MPPT.
- **Batterij.** De batterij komt via de SigenStor BC op de BAT+/BAT- ingang. Een netwerkkabel (CAT6, maximaal 20 m) verbindt omvormer en batterij voor de communicatie. Per controller kunnen 1 tot 6 batterijmodules met een spanning van 300 tot 600 V (datablad). De aansluiting op de BC staat in de handleiding van de BC, niet in deze.
- **Net en huis.** De AC-aansluiting gaat naar de groepenkast en het net. Een **vermogenssensor** (energiemeter) meet wat het huis van het net afneemt of teruglevert en gaat via RS485 naar de COM-poort. Sensoren moeten via het officiële kanaal van Sigenergy worden aangeschaft.
- **Back-up.** Het datablad noemt een AC-uitgang voor **noodstroom** (back-up): stroom voor het huis als het net uitvalt. De omschakeltijd is 0 ms, maar alleen als je de Sigen Gateway samen met de controller en de batterij gebruikt (voetnoot in het datablad). In de poortenlijst van de omvormer staat maar een AC-aansluiting. Hoe je de noodstroom precies bedraadt, staat niet in de installatiegids van de omvormer.
- **Router en cloud.** Via de Fast Ethernet-poort (FE, onderdeel van COM), WLAN of 4G komt het systeem online en kun je het in de mySigen-app beheren.
- **Reserve-aansluitingen op COM.** De COM-poort heeft ook ingangen DI1 tot DI5 (bedoeld voor energieplanning, zoals DRM en rimpelspanning) en twee droge contacten DO1 en DO2 voor slimme apparatuur van derden, zoals een schakelcontroller of warmtepomp. De handleiding markeert die als gereserveerd.

?? Wat betekent netgekoppeld en netonafhankelijk?
In de statuslampjes (hoofdstuk 6 en 7) noemt de handleiding twee standen. **Netgekoppeld** betekent dat de omvormer aan het openbare net hangt en levert of afneemt. **Netonafhankelijk** betekent dat hij zonder openbaar net werkt (noodstroom of *off-grid*). De lampjes aan de AC-kant hebben voor beide een eigen status.
??

Zie ook de pagina's van de batterij, de gateway, de vermogenssensor en de mySigen-app voor hun kant van de verbinding.`
    },
    {
      id: 'specificaties',
      kop: 'Specificaties in het kort',
      tekst: `De waarden hieronder komen uit het datablad voor België en de brochure (pagina 13). De modeltabel bovenaan geeft per model het vermogen. Hier staan de waarden die voor de hele serie gelden.

### Vergelijking SP2 en TP2

| Onderdeel | SP2 (1-fase) | TP2 (3-fase) |
|---|---|---|
| **PV-ingang** | | |
| Max. DC-ingangsspanning | 600 V | 1100 V |
| Nominale DC-ingangsspanning | 350 V | 600 V |
| Startspanning | 100 V | 180 V |
| MPPT-spanningsbereik | 50 ~ 550 V | 160 ~ 1000 V |
| Aantal MPPT's | 2 | 2 |
| Strings per MPPT | 1 | 1 (10.0 en 12.0: 1 of 2) |
| Max. ingangsstroom per MPPT | 16 A | 16 A (10.0 en 12.0: 16 of 32 A) |
| Max. kortsluitstroom per MPPT | 22 A | 22 A (10.0 en 12.0: 22 of 44 A) |
| **Batterij** | | |
| Controller en modules | SigenStor BC en BAT-serie | SigenStor BC en BAT-serie |
| Modules per controller | 1 ~ 6 | 1 ~ 6 |
| Spanning van de modules | 300 ~ 600 V | 300 ~ 600 V (brochure: 600 ~ 900 V) |
| **AC-uitvoer op het net** | | |
| Nominale spanning | 220 / 230 / 240 V | 220/380, 230/400, 240/415 V (3W/N+PE) |
| Netfrequentie | 50 / 60 Hz | 50 / 60 Hz |
| **Back-up (noodstroom)** | | |
| Piekvermogen (10 seconden) | 2 keer het nominale vermogen (brochure) | 2 keer het nominale vermogen |
| Nominale spanning | 220 / 230 / 240 V (brochure) | 220/380, 230/400, 240/415 V |
| Omschakeltijd back-upswitch | 0 ms (met Sigen Gateway) | 0 ms (met Sigen Gateway) |
| **Rendement** | | |
| Maximaal (datablad) | 98,3 tot 98,5% | 98,0 tot 98,7% |
| **Algemeen** | | |
| Beschermingsgraad | IP66 | IP66 |
| Afmetingen (B / H / D) | 373 / 473 / 99 mm | 477 / 568 / 99 mm |
| Gewicht | 11,5 kg | 19,5 kg |
| Bedrijfstemperatuur | -30 tot 60 °C | -30 tot 60 °C |
| Opslagtemperatuur | -40 tot 70 °C | -40 tot 70 °C |
| Max. werkhoogte | 4000 m | 4000 m |
| Geluid en nachtverbruik | 25 dB, 2,5 W | 28 dB, 3 W |

### Kabels die jij levert (installatiegids, hoofdstuk 2)

| Kabel | SP2 | TP2 |
|---|---|---|
| Aardingskabel | 4 mm² (2 tot 3,6 kW), 6 mm² (4 tot 6 kW) | 4 mm² (3 tot 8 kW), 6 mm² (10 tot 12 kW) |
| AC-kabel | 3-aderig (L, N, PE), buitendiameter 10 tot 21 mm, doorsnede 4 mm² (2 tot 3,6 kW) of 6 mm² (4 tot 6 kW) | 5-aderig (L1, L2, L3, N, PE), buitendiameter 13 tot 21 mm, doorsnede 4 mm² (3 tot 8 kW) of 6 mm² (10 tot 12 kW) |
| DC-ingangskabel (PV) | 4 tot 6 mm², buitendiameter 4,5 tot 7,8 mm | 4 tot 6 mm², buitendiameter 4,5 tot 7,8 mm |
| RS485 (sensor) | afgeschermd getwist paar, 0,5 tot 0,75 mm² (flexibel, met adereindhulzen) | 0,5 tot 0,75 mm² (flexibel, met adereindhulzen) |
| Netwerkkabel naar router | CAT6, afgeschermd, tot 100 m | CAT6, afgeschermd, tot 100 m |
| Netwerkkabel naar batterij | CAT6, afgeschermd, tot 20 m | CAT6, afgeschermd, tot 20 m |

Het datablad noemt bij de back-up voor de SP2 andere waarden (piek 6000 tot 24000 W en een driefasige spanning). Dat lijkt niet te kloppen voor een 1-fase model, dus gebruik de brochure en controleer de actuele documenten op de Sigenergy-website.

Let op dat de handleidingen bij alle kabels zeggen dat ze aan de regels van jouw land en regio moeten voldoen. Deze waarden zijn een aanbeveling, geen vervanging van je eigen berekening.`
    },
    {
      id: 'installatie',
      kop: 'Installatie in hoofdlijnen',
      tekst: `De installatiegids (hoofdstuk 2 tot 5) volgt deze volgorde. Voor bijna alles zijn er tekeningen; de tekst zelf is kort.

1. **Controle en voorbereiding (hoofdstuk 2).** Vergelijk de inhoud van de doos met de paklijst, kijk of alles heel is en zorg voor persoonlijke beschermingsmiddelen (helm, veiligheidsbril, stofmasker, isolerende handschoenen en schoenen) en het gereedschap. De gids noemt onder andere een momentsleutel, een krimptang voor de PV-connectoren (model H4TC0003, Amphenol) en een steeksleutel (H4TW0001).
2. **Plaatsing en ruimte (hoofdstuk 3).** Kies een beschutte plek: geen direct zonlicht, regen, stilstaand water of stof, geen brandgevaar, geen sterke elektromagnetische storing en niet binnen bereik van kinderen. De omvormer moet horizontaal en op een stevige, vlakke, onbrandbare muur (baksteen of beton wordt aanbevolen) hangen, met vrije ruimte rondom volgens het diagram (het diagram staat als afbeelding, niet als tekst).
3. **Montage (hoofdstuk 4).** Kies het montageschema dat past bij de meegeleverde onderdelen: massieve baksteen of beton, of een houten wand. Er mogen geen leidingen of kabels achter de boorplek zitten.
4. **Aarding (5.3).** De beschermende aardingskabel gaat op het aardingspunt van de omvormer. Er zijn twee aardingspunten: één verbonden met de accu en één voor de beschermende aardingskabel.
5. **AC-net (5.4).** Sluit de AC-kabel aan in de volgorde L, N, PE (SP2) of L1, L2, L3, N, PE (TP2). De gids zegt dat je de volgorde niet mag mengen.
6. **Communicatie (5.5 tot 5.10).** Houd voedings- en signaalkabels gescheiden. Sluit de RS485-kabel van de vermogenssensor aan op de COM-poort (RS485-2), de netwerkkabel naar de router op de FE-poort en de batterijcommunicatie op BAT. Plaats waar nodig de Sigen CommMod (4G, eventueel met andere SIM-kaart) of de WLAN-antenne en de sierafdekking.
7. **PV-aansluiting (5.6).** De gids vraagt dat de stroomonderbreker aan de PV-zijde "elektrisch neutraal" is voordat je aansluit. Lees dat als: uitgeschakeld en spanningsloos gemaakt zover dat kan. Verbind positieve en negatieve string met de bijpassende connectoren. Meet de polariteit: een negatieve spanning wijst op een polariteitsfout. Bij de TP2: 3 tot 8 kW sluit je 2 strings aan, 10 tot 12 kW sluit je 3 aan. PV2 en PV3 delen één MPPT en moeten hetzelfde model en hetzelfde aantal panelen hebben (de gids zegt: model en aantal van de aangesloten string).
8. **Batterij (via SigenStor BC).** Voor de aansluiting op de batterijcontroller verwijst de gids naar de installatiehandleiding van het betreffende BC-model (hoofdstuk 5.1).
9. **Back-up-uitgang.** Staat niet in de installatiegids van de omvormer.

Voordat je begint: de omvormer en alles wat eraan hangt moet spanningsloos zijn (hoofdstuk 5.1).`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling',
      tekst: `Na de installatie volgen hoofdstuk 6, 7 en 8 van de installatiegids.

### Controle na installatie (hoofdstuk 6)

De gids geeft zeven controlepunten. Loop ze na voordat je inschakelt:

1. De omvormer zit veilig vast.
2. Aardings-, DC-, AC- en signaalkabels zitten er allemaal en juist op.
3. Schroeven en connectoren zitten stevig en zonder speling.
4. Doorvoeren van kabelbinders zijn vrij van bramen en scherpe randen.
5. De **DC SWITCH staat op OFF**.
6. Ongebruikte poorten zijn dicht met waterdichte kleppen of pluggen.
7. Er ligt geen bouwafval in of op de omvormer.

### Inschakelen (hoofdstuk 7)

1. Schakel de AC-schakelaar boven de omvormer in.
2. Draai de DC SWITCH naar ON.
3. Volg het statuslampje aan de voorkant.

De lampjes tonen apart de DC-kant (aangesloten, actief, uit, knipperend of fout), de AC-kant (netgekoppeld, netonafhankelijk, overbelasting of defect), de verbinding met het beheersysteem (app dichtbij, FE of WLAN, 4G, te weinig dataverkeer) en de batterij (laden, ontladen, niet actief of defect). De volledige tabel staat op pagina 17 en 18 van de installatiegids.

### App en cloud (hoofdstuk 8)

Maak eerst een installateursaccount aan via de website van Sigenergy ("Partner", "Register Now"). Download daarna de mySigen-app en maak een nieuw systeem aan. Scan de SN-code van de omvormer, die staat op de bijgevoegde papieren of op de zijkant van de omvormer. De installateur moet de eigenaar vragen om binnen 24 uur de e-mail met de titel "sigencloud" te controleren en het account te activeren.

De stappen in de app staan in de aparte "Handleiding Nieuwe systemen maken van de app mySigen". Die zit niet bij deze pdf's.`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid en let op',
      tekst: `Dit is wat de handleidingen als kritisch benoemen. Alles komt uit "Belangrijke informatie" (hoofdstuk 5) en de installatiegids.

!!! gevaar Werken onder spanning is verboden
De handleiding zegt dat het verboden is om de apparatuur onder spanning te gebruiken. Dat geldt voor installeren, bedraden en vervangen. Meet de spanning op het contactpunt voordat je een aansluitklem aanraakt. Draag isolatiehandschoenen, isolerende schoenen en een veiligheidshelm, geen geleidende sieraden, en gebruik geïsoleerd gereedschap.
!!!

!!! gevaar Aarding eerst
Apparaten die geaard moeten worden, moeten permanent met de beschermingsaarding zijn verbonden. Sluit bij het aansluiten van kabels als eerste de aardingskabel aan. Bij het vervangen haal je de aardingskabel als laatste los.
!!!

!!! gevaar Schakelaars los, wachten na uitschakelen
Voor het aansluiten of losmaken van kabels moeten de schakelaars aan de voor- en achterkant van de apparatuur en de eigen schakelaars los zijn. Voor onderhoud of vervanging schakel je uit en wacht je op de tijd op het vertragingslabel op de apparatuur.
!!!

- **DC van de panelen.** Zonnepanelen leveren spanning zodra er licht op valt, ook als je de DC SWITCH uitzet. Dat staat niet uitdrukkelijk in deze handleidingen; het is vakkennis (zie les m10l02). De gids zegt wel dat de PV-zijde voor het aansluiten "elektrisch neutraal" moet zijn (5.6) en dat de DC SWITCH bij de controle na installatie op OFF staat (hoofdstuk 6).
- **Netcode.** De **netcode** is de set regels van de netbeheerder waar een omvormer aan moet voldoen. Staat niet in de installatiegids.
- **Plaatsing.** Geen rokerige, ontvlambare of explosieve ruimte. Minstens 500 m van corrosiebronnen zoals kust of chemische industrie (in een gebied met gunstig zeeklimaat, zoals Noorwegen, noemt de gids meer dan 200 m tot de kust). Niet in een afgesloten, slecht geventileerde ruimte zonder brandbeveiliging en niet in mobiele toepassingen als camper, schip of trein.
- **Temperatuur.** Werktemperatuur -30 tot 60 °C. Binnenshuis mag de kamertemperatuur door de omvormer niet meer dan 3 °C stijgen, anders neemt het vermogen af. Bij kabels: onder 0 °C worden de mantels bros. Kabels die lang onder 0 °C lagen, 24 uur in een ruimte boven 0 °C leggen voor je ze gebruikt.
- **Aansluitvolgorde en polariteit.** L, N, PE (SP2) of L1, L2, L3, N, PE (TP2) in die volgorde. PV-polariteit meten voor het inschakelen: negatieve spanning betekent verkeerd om.
- **Alleen gekwalificeerd personeel.** Getraind, met kennis van elektrotechniek en van de lokale regels.
- **Ladder, boren, transport.** Ladder onder 60 tot 70 graden, niet in de apparatuur boren, doos niet kantelen.`
    },
    {
      id: 'alarmen-en-storingen',
      kop: 'Alarmen en storingen',
      tekst: `De alarmen staan in een apart document: "03-Lijst van alarmeringen_NL" (23 pagina's, versie 05, uitgavedatum 24/10/2025). Voor de SP2 en TP2 is dit precies hetzelfde bestand.

De lijst is opgebouwd als een tabel met zes kolommen: **foutcode**, **foutnaam**, **ID** (deelfout), **ID-naam**, **oorzaak** en **aanbeveling voor reparatie**. Eén foutcode heeft vaak veel ID's, bijvoorbeeld per string of per MPPT.

De lijst geldt voor meerdere Sigen-apparaten. De eerste cijfers van de code wijzen naar de groep:

- **1xxx** (pagina 2 tot 12): omvormer en ingebouwde gateway, zoals PV-stringspanning (1006), omgekeerd aangesloten string (1007), AFCI (1009), netfouten en fasevolgorde (1024).
- **2xxx** (pagina 12 tot 17): batterij en energieopslag.
- **3xxx en 4xxx** (pagina 18 tot 21): gateway, generator en kast.
- **5xxx** (pagina 21 tot 23): laders.

Deze indeling volgt uit de foutnamen; de lijst zelf noemt de groepen niet.

Waar te beginnen als er iets mis gaat:

- De aanbevelingen zijn meestal: controleer kabels, ventilatie, zoninval en netspanning, start de omvormer opnieuw op (DC- en AC-schakelaar uit en weer in) en meld het anders. Bij hoge temperatuur (pagina 2) begint het met ventilatie en direct zonlicht.
- Bij een omgekeerde string moet de stringstroom eerst onder 0,5 A zijn, dan de DC-schakelaar uit en dan de polariteit aanpassen (pagina 4).
- Blijft de fout, dan vraagt de lijst om een storingsrapport in de mySigen-app onder Support, Troubleshooting, of contact met het Sigenergy-klantenservicecentrum.

De hele lijst overschrijven heeft geen zin. Zoek op foutcode in het document en lees de kolom aanbeveling.`
    },
    {
      id: 'wat-niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat',
      tekst: `Om te voorkomen dat je iets aanneemt dat niet gedocumenteerd is:

- De bedrading van de back-up-uitgang (via de gateway).
- Welke netcode je instelt en hoe.
- Aanhaalmomenten: de gids noemt een momentsleutel, maar in de tekst staat geen getal.
- Maximale stringlengte in panelen: alleen de spanningsgrenzen uit het datablad.
- De vrije ruimte rondom de omvormer: die staat als afbeelding.
- Het schema "Alle optische netwerken" op pagina 9: de tekst legt niet uit wat dat inhoudt.`
    }
  ],

  handleidingRefs: [
    { doc: 'bi', hoofdstuk: 'Algemene vereisten', paginas: '6-7', onderwerp: 'Waarvoor de fabrikant niet aansprakelijk is' },
    { doc: 'bi', hoofdstuk: 'Vereisten personeel', paginas: '8', onderwerp: 'Opleiding en kwalificaties van installateurs' },
    { doc: 'bi', hoofdstuk: 'Vereisten afhandeling en transport', paginas: '9', onderwerp: 'Tillen, kantelen en verplaatsen' },
    { doc: 'bi', hoofdstuk: 'Vereisten opslag', paginas: '10', onderwerp: 'Opslagtemperatuur en vochtigheid' },
    { doc: 'bi', hoofdstuk: '5.1 Routine vereisten', paginas: '11-12', onderwerp: 'Spanning, beschermingsmiddelen, aarding eerst' },
    { doc: 'bi', hoofdstuk: '5.2 Installatie apparatuur', paginas: '13', onderwerp: 'Ladders en boren' },
    { doc: 'bi', hoofdstuk: '5.3 Kabelverbinding', paginas: '14', onderwerp: 'Schakelaars los, kabels en kou' },
    { doc: 'bi', hoofdstuk: '5.4 Onderhoud en vervanging van apparatuur', paginas: '15', onderwerp: 'Uitschakelen en wachten op het vertragingslabel' },
    { doc: 'ig-sp2', hoofdstuk: '1 Introductie', paginas: '2', onderwerp: 'Uiterlijk en poorten van de SP2 (PV1 en PV2)' },
    { doc: 'ig-sp2', hoofdstuk: '2 Inspecties voor installatie', paginas: '3-4', onderwerp: 'Gereedschap en aanbevolen kabels (L, N, PE)' },
    { doc: 'ig-sp2', hoofdstuk: '3 Vereisten voor de omgeving', paginas: '5-6', onderwerp: 'Plaatsing, omgeving en installatiebasis' },
    { doc: 'ig-sp2', hoofdstuk: '4 Installatie', paginas: '7-8', onderwerp: 'Muurmontage op steen, beton en hout' },
    { doc: 'ig-sp2', hoofdstuk: '5.1 Interface-relatie', paginas: '9-10', onderwerp: 'Bedradingsschema met sensor en SigenStor BC' },
    { doc: 'ig-sp2', hoofdstuk: '5.2 Beschrijving van de COM-poort', paginas: '11', onderwerp: 'Pinnen, sensorcompatibiliteit (SP-DH, SP-CT120-DH)' },
    { doc: 'ig-sp2', hoofdstuk: '5.3 Aardingskabel en 5.4 AC-kabel', paginas: '12', onderwerp: 'Aarding en AC-aansluiting' },
    { doc: 'ig-sp2', hoofdstuk: '5.5 Signaalkabel', paginas: '13', onderwerp: 'RS485 en netwerkkabel' },
    { doc: 'ig-sp2', hoofdstuk: '5.6 DC-ingangskabel', paginas: '14', onderwerp: 'PV-strings aansluiten en polariteit controleren' },
    { doc: 'ig-sp2', hoofdstuk: '5.7 tot en met 5.10 (SIM-kaart, CommMod, WLAN-antenne, afdekking)', paginas: '15-16', onderwerp: 'Communicatiemodules en afwerking' },
    { doc: 'ig-sp2', hoofdstuk: '6 Inspecties na installatie en 7 Inschakelen', paginas: '17-18', onderwerp: 'Controlelijst, inschakelvolgorde en statuslampjes' },
    { doc: 'ig-sp2', hoofdstuk: '8 Downloaden en opstarten van de mySigen-app', paginas: '18-19', onderwerp: 'Account, systeem aanmaken en activeren' },
    { doc: 'ig-tp2', hoofdstuk: '1 Introductie', paginas: '2', onderwerp: 'Uiterlijk en poorten van de TP2 (PV1 tot PV3)' },
    { doc: 'ig-tp2', hoofdstuk: '2 Inspecties voor installatie', paginas: '3-4', onderwerp: 'Gereedschap en aanbevolen kabels (L1, L2, L3, N, PE)' },
    { doc: 'ig-tp2', hoofdstuk: '5.2 Beschrijving van de COM-poort', paginas: '11', onderwerp: 'Pinnen, sensorcompatibiliteit (TP-DH, TP-CT120, TP-CT300, TP-CT600)' },
    { doc: 'ig-tp2', hoofdstuk: '5.6 DC-ingangskabel', paginas: '14', onderwerp: 'Aantal strings per vermogensklasse; PV2 en PV3 delen een MPPT' },
    { doc: 'ig-tp2', hoofdstuk: '6 Inspecties na installatie en 7 Inschakelen', paginas: '17-18', onderwerp: 'Controlelijst en statuslampjes' },
    { doc: 'alarm', hoofdstuk: 'Lijst van alarmeringen (foutcodes 1001 tot 1031)', paginas: '2-12', onderwerp: 'Omvormerfouten: PV, AC-net, isolatie, temperatuur' },
    { doc: 'alarm', hoofdstuk: 'Lijst van alarmeringen (foutcodes 2001 tot 2304)', paginas: '12-17', onderwerp: 'Batterij en energieopslag' },
    { doc: 'ds', hoofdstuk: 'Sigen Hybrid Inverter 2.0-6.0 kW 1-fase voor België', paginas: '1', onderwerp: 'Specificatietabel SP2' },
    { doc: 'ds', hoofdstuk: 'Sigen Hybrid Inverter 3.0-12.0 kW 3-fase voor België', paginas: '2', onderwerp: 'Specificatietabel TP2' },
    { doc: 'br', hoofdstuk: 'Sigen Hybrid Inverter (productoverzicht)', paginas: '12', onderwerp: 'Ultradun, 99 mm, 25 dB, 200% DC/AC-verhouding' },
    { doc: 'br', hoofdstuk: 'Sigen Hybrid Inverter 2.0-6.0 kW 1-fase en 3.0-12.0 kW 3-fase', paginas: '13', onderwerp: 'Specificaties SP2 en TP2 naast elkaar' }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm02l05', 'm02l06', 'm03l05', 'm06l03'],

  zieOok: ['sigenergy-sigenstor-home', 'sigenergy-batterij', 'sigenergy-gateway', 'sigenergy-power-sensor', 'sigenergy-mysigen-app']
});
