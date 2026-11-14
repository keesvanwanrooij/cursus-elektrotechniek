/* ==========================================================================
   content/kennis/enphase/iq-battery-5p.js - IQ Battery 5P with FlexPhase
   Samenvatting in eigen woorden. Paginanummers verwijzen naar de positie in de
   pdf (1 = eerste pagina). Bij deze documenten valt dat samen met het gedrukte
   paginanummer; de inhoudsopgave van de snelle installatiegids loopt vanaf
   hoofdstuk 8 een pagina achter.
   ========================================================================== */

KENNIS.addProduct({
  id: 'enphase-iq-battery-5p',
  merk: 'enphase',
  slug: 'iq-battery-5p',
  naam: 'Enphase IQ Battery 5P with FlexPhase (en de oudere IQ Battery 5P)',
  rol: 'batterij',
  toepassingen: ['thuisbatterij'],
  korteOmschrijving: 'Een AC-gekoppelde thuisbatterij van 5,0 kWh met zes ingebouwde IQ8T-BAT micro-omvormers. Dezelfde kast werkt eenfasig (tot 3,84 kVA) of driefasig (1,28 kVA per fase). Dat kies je met een jumperblok op de klemmen. Netgekoppeld werkt hij met de IQ Gateway, maar voor noodstroom heb je de IQ System Controller 3 INT nodig.',

  varianten: {
    kop: ['Model (bestelcode)', 'Fasen', 'Continu vermogen', 'Nominale stroom', 'Opmerking'],
    rijen: [
      ['IQBATTERY-5P-3P-INT (standaard)', '1-fase (af fabriek) of 3-fase', '3,84 kVA, driefasig 1,28 kVA per fase', '16,7 A, driefasig 5,56 A per fase', 'In een aantal landen standaard 3,68 kVA en 16 A (voetnoot gegevensblad)'],
      ['...-1.65-1P', '1-fase', '1,65 kVA', '7,17 A', 'Verlaagde vermogensklasse'],
      ['...-2.50-1P', '1-fase', '2,50 kVA', '10,87 A', 'Verlaagde vermogensklasse'],
      ['...-3.00-1P', '1-fase', '3,00 kVA', '13,04 A', 'Verlaagde vermogensklasse'],
      ['...-3.68-1P', '1-fase', '3,68 kVA', '16 A', 'Verlaagde vermogensklasse'],
      ['...-1.84-3P', '3-fase', '1,84 kVA (0,61 per fase)', '2,67 A per fase', 'Verlaagde vermogensklasse'],
      ['...-2.50-3P', '3-fase', '2,50 kVA (0,83 per fase)', '3,62 A per fase', 'Verlaagde vermogensklasse'],
      ['...-3.00-3P', '3-fase', '3,00 kVA (1,0 per fase)', '4,35 A per fase', 'Verlaagde vermogensklasse'],
      ['...-3.68-3P', '3-fase', '3,68 kVA (1,23 per fase)', '5,33 A per fase', 'Verlaagde vermogensklasse'],
      ['IQ Battery 5P zonder FlexPhase (IQBATTERY-5P-1P-INT)', 'Alleen 1-fase', 'Staat niet in deze documenten', 'Staat niet in deze documenten', 'Oudere uitvoering, genoemd in de veiligheidsinstructies en de gidsen van de System Controller']
    ]
  },

  documenten: [
    { id: 'qig', titel: 'IQ Battery 5P with FlexPhase - Snelle installatiegids (140-00405-07, augustus 2026)', soort: 'Installatiegids', paginas: 56 },
    { id: 'dsh', titel: 'IQ Battery 5P with FlexPhase - Gegevensblad EMEA (DSH-00713-4.0)', soort: 'Gegevensblad', paginas: 7 },
    { id: 'vi', titel: 'IQ Battery 5P Safety Instructions (140-00393-02, meertalig, Nederlands deel)', soort: 'Veiligheidsinstructies', paginas: 26 },
    { id: 'pg', titel: 'Enphase Energy System planningsgids voor netgekoppelde IQ Battery 5P with FlexPhase (TEB-00292-1.0)', soort: 'Technische instructies', paginas: 19 },
    { id: 'ho', titel: "Enphase Energy System with IQ Battery 5P with FlexPhase (with backup) owner's guide (USG-00123-1.0, Engelstalig)", soort: 'Gebruikershandleiding', paginas: 28 },
    { id: 'teb366', titel: 'Configuratie van het Enphase Energy System - stringomvormer van derden, M Series en PV-afschakeling (TEB-00366-1.0)', soort: 'Technische instructies', paginas: 15 },
    { id: 'teb349', titel: 'IQ System Controller 3 INT en IQ Battery 5P with FlexPhase - richtlijnen voor beste praktijken (TEB-00349-1.0)', soort: 'Technische instructies', paginas: 10 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `De IQ Battery 5P with FlexPhase is een thuisbatterij voor binnen of buiten (IP55), in een kast van 980 x 550 x 188 mm. Erin zitten:

- Batterijcellen van lithium-ijzerfosfaat (LFP) met een bruikbare capaciteit van **5,0 kWh**, plus een batterijbeheersysteem (BMS) en een batterijcontroller.
- Zes micro-omvormers van het type **IQ8T-BAT** (elk IP67). Die maken van de gelijkspanning 230 V wisselspanning en je kunt ze in het veld los vervangen.

### AC-gekoppeld: wat betekent dat?

De batterij levert en ontvangt **wisselstroom**, dus je sluit hem aan als een gewone groep vanaf een automaat: L, N en PE (of L1, L2, L3, N en PE). De gelijkspanning (nominaal 76,8 V, bereik 60 tot 87 V volgens het gegevensblad) blijft in de kast. Er gaat geen gelijkspanningskabel naar buiten.

Bij een DC-gekoppelde batterij hangt de batterij juist samen met de zonnepanelen aan de gelijkspanningskant van een hybride omvormer. Bij Enphase heeft elk zonnepaneel een eigen micro-omvormer en heeft de batterij er zes ingebouwd. Alles komt pas aan de wisselstroomkant samen, in de groepenkast of in de IQ System Controller.

### Wat hij kan

- Eigen verbruik: overschot van de zon opslaan en 's avonds gebruiken.
- Volledige back-up, maar alleen samen met de IQ System Controller 3 INT (voetnoot 5 bij het gegevensblad).
- AI-optimalisatie voor dynamische tarieven (volgens het gegevensblad in Duitsland, Belgie, Denemarken en Frankrijk). Via een API past hij ook in een virtuele energiecentrale (VPP).

Het rendement heen en terug is volgens het gegevensblad 90 % aan de AC-kant en 96 % aan de DC-kant. De beperkte garantie loopt tot 15 jaar of 6000 cycli (wat het eerst komt), met meer dan 60 % capaciteit.

!!! info Bruikbare capaciteit
Van de 5,0 kWh houdt het systeem 2 % achter als veiligheidsgrens voor lange stroomuitval en nog 3 % om de batterij 's nachts zelf te voeden (voetnoot 11 in het gegevensblad). Een klant die precies 5,0 kWh verwacht, kan dus iets minder zelf gebruiken.
!!!`
    },
    {
      id: 'flexphase',
      kop: 'FlexPhase: een kast voor 1-fase en 3-fase',
      tekst: `**FlexPhase** betekent dat dezelfde batterij eenfasig of driefasig kan werken. Er is dus maar een bestelcode: IQBATTERY-5P-3P-INT.

### Zo stel je het in

Af fabriek werkt hij eenfasig, met een **jumperblok** dat de AC-klemmen doorverbindt. Voor driefasig trek je het jumperblok eraf en sluit je L1, L2, L3, N en PE aan. Meer is het niet (QIG paragraaf 7.5).

In eenfasige configuratie mag het jumperblok **niet** weg. Een los of verkeerd geplaatst jumperblok is volgens TEB-00349 een bekende oorzaak van een mislukte fasevalidatie.

### Wat het betekent voor het vermogen

| | Eenfasig | Driefasig |
|---|---|---|
| Continu vermogen | 3,84 kVA op een fase | 3,84 kVA totaal, 1,28 kVA per fase |
| Nominale stroom | 16,7 A | 5,56 A per fase |
| Piek 10 s (back-up) | 26,7 A | 8,9 A per fase |
| Piek 3 s (back-up) | 33,4 A | 11,3 A per fase |

Driefasig levert de batterij dus niet meer vermogen, maar verdeelt hij het over de drie fasen.

### Regels die erbij horen

- Niet mengen. Een locatie met batterijen die deels eenfasig en deels driefasig zijn ingesteld, wordt niet ondersteund. Alle batterijen op een adres staan hetzelfde (planningsgids pagina 6).
- In een driefasig huis adviseert Enphase de batterijen driefasig te installeren, want eenfasig op een driefasige aansluiting kan scheefbelasting geven.
- Driefasig moet de faserotatie rechtsom zijn (met de klok mee). Controleer dat aan de batterijklemmen voor L1-L2, L2-L3 en L3-L1, bijvoorbeeld met een Duspol met L/R-aanduiding.

### Vermogensklasse kiezen

Afhankelijk van land of netbeheerder kun je bij de inbedrijfstelling een lager continu vermogen kiezen (de modellen in de tabel bovenaan), in de Enphase Installer App onder Enphase Power Control. Plak dan het meegeleverde label met meerdere vermogens over het typeplaatje en vink met watervaste stift het gekozen model aan.

- Die keuze geldt voor **alle batterijen** in het systeem en is daarna **niet meer te wijzigen** zonder Enphase Support.
- Labelen is volgens de gids verplicht in Australie en Nieuw-Zeeland. Elders mag je het overslaan als het vermogen al op het typeplaatje staat.
- Is de functie in jouw regio nog niet vrijgegeven, dan ziet de app hem niet en geldt het vermogen op het typeplaatje.

### De oudere IQ Battery 5P zonder FlexPhase

De veiligheidsinstructies noemen naast de FlexPhase-versie ook **IQBATTERY-5P-1P-INT** (en -1P-ROW buiten Europa). Dat is de IQ Battery 5P zonder FlexPhase, dus alleen eenfasig.

- Volgens het gegevensblad van de System Controller mag een 1P-batterij alleen in huizen met een eenfasige voeding (voetnoot 4).
- In de bedradingsscenario's van de System Controller voor Australie en Zuid-Afrika mag hij in een driefasig huis alleen op L1 en dan alleen met back-up op L1.
- Een IQ Battery 5P per AC-groep van 20 A (veiligheidsinstructies).
- TEB-00366 rekent met drie IQ Battery 5P van samen 11,5 kW. Een eigen gegevensblad van deze uitvoering zit helaas niet in de kennisbank.`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Plek in het systeem',
      tekst: `De batterij werkt nooit los. Hij heeft altijd een **IQ Gateway** nodig die het systeem aanstuurt, met een bedrade besturingskabel (CTRL) ertussen. Er zijn twee opbouwen.

### Netgekoppeld (zonder noodstroom)

- Een **IQ Gateway Metered** met **Communications Kit 2 INT** (via USB op de gateway). Of de **IQ Combiner 2 EU 3P**, waarin gateway, twee IQ Relays, Communications Kit 2, automaten en een aardlekschakelaar al op DIN-rails zitten.
- Een **IQ Relay** als scheidingsinrichting: Q-RELAY-1P-INT voor eenfasig, Q-RELAY-3P-INT voor driefasig (QIG paragraaf 5.1).
- Stroomtransformatoren (CT's) voor productie en verbruik. De standalone gateway heeft er twee. Driefasig heb je er vier extra nodig (planningsgids pagina 5).
- Valt het net uit, dan schakelt de batterij automatisch af (QIG paragraaf 12.4). Dat is normaal en er is dan geen noodstroom.

### Met back-up

De **IQ System Controller 3 INT** is dan de scheidingsinrichting. Daar zitten de IQ Gateway, CT's en de functie van de IQ Relay al in (zie de pagina over de System Controller). De batterijen hangen met hun eigen automaat en hun CTRL-kabel aan de controller.

### Wat er wel en niet samen kan

| Combinatie | Netgekoppeld | Back-up |
|---|---|---|
| IQ7 of IQ8 micro-omvormers | Ja | Ja |
| Stringomvormer van een ander merk | Ja | Ja |
| M Series micro-omvormers | Nee, aparte gateway nodig | Nee, aparte gateway nodig |
| IQ7 en IQ8 op dezelfde gateway | Nee | Nee |
| Stringomvormer samen met IQ7 of IQ8 | Volgens de QIG nee, volgens de planningsgids ja | Volgens de QIG nee |
| AC Battery of IQ Battery 3T/10T erbij | Nee | Nee |

De oudere AC Battery en IQ Battery 3T/10T praten via powerline (PLC) of draadloos via Zigbee, de 5P with FlexPhase via een bedrade besturingskabel. Die gaan dus niet samen (planningsgids pagina 4). Een stringomvormer samen met IQ7 of IQ8 mag netgekoppeld volgens de planningsgids alleen op een adres zonder exportbegrenzing (PEL).

### Werkingsmodi

- Eigen verbruik, met of zonder System Controller. De klant kiest in de Enphase App een reservecapaciteit, bijvoorbeeld 30 %. Daaronder ontlaadt de batterij alleen bij stroomuitval.
- Opladen vanaf het net en ontladen naar het net volgens een schema zijn extra instellingen binnen eigen verbruik.
- Volledige back-up, alleen met System Controller. De batterij blijft vol en wordt alleen bij netuitval gebruikt.

!!! info Als je Sigenergy al kent
Bij Sigenergy hangt de batterij (BC-controller met BAT-modules) samen met de zonnepanelen aan de **gelijkspanningskant** van een hybride omvormer. Uitbreiden doe je daar met modules achter een controller. Bij Enphase is elke batterij een **zelfstandig AC-apparaat** met eigen omvormers, dus je breidt uit met nog een kast van 5,0 kWh op een AC-groep. Sigenergy praat via CAN tussen controller en modules, Enphase via een eigen bedrade CTRL-bus tussen batterijen en gateway. Daardoor kan een Enphase-batterij ook naast een bestaande stringomvormer van een ander merk.
!!!

!!! info Internet is verplicht
De batterij heeft internet nodig via de IQ Gateway, anders kan de garantie in gevaar komen (QIG pagina 7). Volgens de gebruikershandleiding moet de primaire verbinding Wi-Fi of Ethernet zijn.
!!!`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid',
      tekst: `De veiligheidsregels staan in hoofdstuk 13 van de snelle installatiegids en bijna gelijk in het Nederlandse deel van de veiligheidsinstructies (pagina 10 en 11).

!!! gevaar Spanning terwijl het net uit is
Zodra de DC-schakelaar aan staat, staat er wisselspanning op de uitgang. Zet de automaat van de batterijgroep dus uit voordat je de DC-schakelaar aan- of uitzet. Bij transport en onderhoud staat de DC-schakelaar op UIT. Haal voor installatie of onderhoud ook eerst de AC-voeding van de zonnepanelen af.
!!!

- Alleen gekwalificeerde elektriciens mogen installeren, storingen zoeken en vervangen. De QIG zegt zelfs alleen door Enphase gecertificeerde installateurs. Zonder de twee certificeringstrainingen van Enphase University blokkeert de Installer App volgens TEB-00349 de inbedrijfstelling van een systeem met System Controller.
- Werk niet alleen: er moet iemand binnen gehoorsafstand zijn.
- Pas op voor kortsluitstroom. Horloge en ringen af, geisoleerd gereedschap, isolerende handschoenen en laarzen. Leg geen gereedschap op de batterij.
- Bij rook haal je de AC-voeding van het systeem af en zet je de DC-schakelaar uit, zodat laden en ontladen stoppen.
- Bij brand eerst de AC-automaat van de batterijgroep uit, brandweer bellen en de ruimte verlaten. Blus alleen als het veilig kan, met poeder (A, B, C), CO2 of alcoholbestendig schuim.
- Gelekt elektrolyt is giftig en licht ontvlambaar, kleurloos met een zoete geur. Niet aanraken, het gebied tot minstens 25 m afzetten, ontstekingsbronnen weg en ventileren.
- Na contact met water eerst een inspectie. In overstromingsgebied monteer je hem zo hoog dat water er niet bij kan.
- Een batterij die te lang leeg staat, kan onherstelbaar beschadigen. Installeer hem en zet hem onder spanning voor de datum "Moet stroom krijgen voor" op de doos. Opslaan doe je in slaapstand, met maximaal 30 % lading en maximaal twee maanden.
- Niet als primaire of noodstroombron voor levensondersteunende of medische apparatuur.
- Vervang een batterij alleen door een IQ Battery van hetzelfde type en met hetzelfde AC-vermogen.

### Nederland: PGS 37-1

Sinds versie 7 heeft de QIG een paragraaf voor Nederland (5.2). De batterij voldoet via IEC 62619 en UL 9540A aan de minimale producteisen van PGS 37-1. Hij past in de categorieen "Typical 5" en "Typical 6" (binnen in een eigen ruimte en binnen in een open ruimte). De plaatsing moet voldoen aan maatregelen M24, M50 en M54 van PGS 37-1. Veiligheidsafstanden en ventilatie zijn de verantwoordelijkheid van de installateur. Wat die maatregelen inhouden, staat er helaas niet in.`
    },
    {
      id: 'montage',
      kop: 'Plaatsing en montage',
      tekst: `### Plek kiezen (QIG paragraaf 5.1 tot 5.4)

- Binnen of buiten, bij -20 tot 55 graden Celsius en 5 tot 95 % relatieve vochtigheid zonder condensatie, tot 2500 m hoogte. Direct zonlicht mag, maar dan presteert hij minder.
- Optimaal is 0 tot 30 graden. Op vol vermogen laden kan tussen 15 en 45 graden, ontladen tussen 0 en 50 graden. Daarbuiten regelt de batterij zelf terug.
- Niet op een brandbare ondergrond. Bij een houten wand adviseert Enphase een brandvertragende plaat ertussen. Rookmelders als de lokale regels dat vragen.
- Hij weegt **83 kg** inclusief beugel en kap, dus metselwerk of stijlen die dat kunnen dragen.
- Vrije ruimte 150 mm rondom, minstens 250 mm voor de kast en 76 mm tussen twee kasten naast elkaar (met minder dan 150 mm kun je de tilstangen niet gebruiken). In het pad van een auto minstens 900 mm boven de grond.
- De wand mag minder dan 5 graden scheef en minder dan 2 mm oneffen zijn, anders gebruik je afstandhouders of unistrut.
- Voor vloermontage is er een voetstuk (B05-PM-0550-O) met eigen instructies.

### Montage in stappen

1. Zet de **onderste bevestigingsbeugel** vast met minstens vier M8-schroeven (symmetrisch) of drie op de hartlijn, met ringen of pluggen die bij de wand passen. Niet de sleutelgaten gebruiken, want die zijn voor de batterij zelf.
2. Zet de **bovenste beschermkap** vast met minstens zes M6-schroeven (kopdikte onder 5 mm). De M4-aardingsschroeven tussen kap en beugel gaan op 1,5 Nm.
3. Schuif de **tilstangen** (IQBATTERY-HNDL-5, apart verkrijgbaar) in de zijsleuven. Til nooit aan de micro-omvormers of het plastic erachter.
4. Open de **bedradingsafdekking** (11 schroeven, geen slagschroevendraaier) en boor de kabelinvoer **voordat de kast aan de wand hangt**. Boren aan een gemonteerde kast kan onderdelen beschadigen en valt buiten de garantie.
5. Kabelinvoer: zijkant voeding tot M40 of buis van 19 tot 32 mm, zijkant besturing tot M20 of buis van 16 mm, achterkant tot M25. De achterkant is voor voeding of besturing, niet allebei. Komt de kabel links binnen, dan gaat hij rechts verder naar de volgende batterij.
6. Hang de **batterij aan de beugel** met de vier bouten in de sleuven. Zet hem vast met twee M5-borgschroeven (5,6 Nm, voor seismische eisen) en plaats bovenaan twee ankerklemmen.
7. Laat de ventilatie- en afvoergaten aan de achterkant vrij, want die zijn voor koeling en condensafvoer.

!!! gevaar Tillen
Met stangen is het tilgewicht 69,5 kg (pagina 8). Met twee personen tillen mag alleen als de lokale regels dat toestaan, anders hef je mechanisch.
!!!`
    },
    {
      id: 'elektrische-aansluiting',
      kop: 'Elektrische aansluiting en beveiliging',
      tekst: `### Voedingskabel en klemmen

- L/N/PE-klemmen (duwklemmen) voor koper van 2,5 tot 6 mm2 met of zonder adereindhuls, tot 10 mm2 zonder huls. Striplengte 10 tot 12 mm.
- In Europa moet de PE minstens 10 mm2 zijn (voetnoot QIG pagina 30).
- Aardingsstelsels TN-C-S, TN-S en TT, bij 230 / 400 V. Een IT-stelsel alleen eenfasig en netgekoppeld.
- Meerdere batterijen lus je door. Voeding en CTRL-kabel gaan rechts uit en links de volgende kast in, door aparte invoeren.

### Automaat en aantal batterijen per groep

De QIG raadt een automaat met B-karakteristiek aan en geeft deze tabel (pagina 28, de standaardklasse 3,84 kVA):

| Configuratie | Automaat voor een batterij | Maximaal per batterijgroep | Automaat bij maximum |
|---|---|---|---|
| Eenfasig, 3,84 kVA | 20 A | 2 | 40 A |
| Eenfasig, 1,65 kVA | 10 A | 4 | 40 A |
| Driefasig, 3,84 kVA | 10 A | 5 | 40 A |
| Driefasig, 1,84 kVA | 6 A | 10 | 32 A |

Sommige lokale regels vragen dat je kabel en automaat toch op het hoogste mogelijke vermogen dimensioneert, ook bij een lagere klasse. De andere documenten geven helaas andere getallen, zie "Wat niet in de handleiding staat".

### Besturingskabel (CTRL)

De batterijen praten met de gateway via een **bedrade bus**. Volgens TEB-00349 gaan hier de meeste installaties mis.

- Gebruik de geteste kabel van Enphase, **CTRL-BL-EU-01**. Heb je een andere kabel en communicatieproblemen, dan vraagt Enphase eerst de kabel te vervangen.
- Aders: klem 1 CTRL L (wit-blauw), klem 2 CTRL H (blauw-wit), klem 3 CTRL G (wit-oranje), klem 4 niet gebruikt. Aanhaalmoment 0,2 Nm, ader 0,5 tot 1,5 mm2.
- De **afsluitweerstand** komt alleen op de twee apparaten aan de uiteinden van de bus. Bij de batterij is dat de connector met weerstand op C2. Dus de eerste batterij en de Communications Kit 2 (of System Controller), of de eerste en laatste batterij als de gateway in het midden zit.
- De **afvoerdraad** (de blanke draad bij de afscherming) sluit je per kabelstuk maar aan **een** uiteinde aan, het liefst bij het apparaat waar het stuk begint.
- Alle CTRL-kabel samen is **maximaal 100 m**.
- Doe een doorgangsmeting tussen de klemmen aan beide uiteinden voordat je de kabel door de buis trekt.
- Voeding en CTRL mogen door dezelfde buis als de lokale regels dat toestaan.

### Controle voor je dichtmaakt (QIG paragraaf 7.9)

1. Geen blanke geleiders, afvoerdraden niet tegen spanningvoerende delen.
2. AC-voeding erop en per batterij 230 V meten tussen L en N (195 tot 253 V). Driefasig ook de draairichting op alle drie de combinaties.
3. AC weer uit. Dan de DC-stekkers op het BMS-bord: **B1 (plus) voor B2 (min)** en **CS1 als laatste**.
4. Afdekking terug met de 11 schroeven, op het aanhaalmoment van het rode label.

!!! info Algemene vakkennis: aardlek
De gidsen van de batterij noemen geen type aardlekschakelaar voor de batterijgroep. De gids van de System Controller tekent voor Europa wel aparte aardlekschakelaars voor PV en batterij en een verplichte aardlek in het back-upcircuit. Welk type je kiest, volgt uit de NEN 1010 en de les over aardlektypes.
!!!`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling met de Installer App',
      tekst: `Onder spanning zetten staat in hoofdstuk 8 van de QIG (pagina 40).

1. Controleer dat alle batterijen goed hangen, de micro-omvormers goed zitten en alle geleiders vastzitten.
2. **AC-voeding** op de batterijgroepen. De LED knippert een keer groen en gaat uit. Na 15 tot 20 seconden knippert hij drie keer rood: de DC-schakelaar staat uit en er is AC.
3. Druk op de **DC-besturingsschakelaar** en wacht tot de LED geel knippert. Dan is de batterij klaar.
4. Start de workflow in de **Enphase Installer App**, verbind met de IQ Gateway en volg de stappen. Daar kies je onder meer de faseconfiguratie (stap 2 volgens TEB-00349) en eventueel de vermogensklasse.
5. Plaats daarna de behuizing (hoofdstuk 9): stickers eraf, kap op de vergrendeling schuiven, vastzetten met twee M5-schroeven (3,1 Nm, voor EMC) en de leidingafdekkingen aan de kant zonder wartel.

!!! gevaar DC-schakelaar niet aan laten zonder AC
Laat de DC-schakelaar niet op ON staan zonder AC-voeding. De batterij loopt dan leeg en kan in een toestand komen waarin hij niet meer aan te zetten is. Een sticker op de kast waarschuwt: niet langer dan 24 uur aan zonder geslaagde functietest, anders kan de garantie vervallen. Stel je het systeem niet meteen in bedrijf, zet dan de DC-schakelaars van alle batterijen uit.
!!!

Na de inbedrijfstelling **kalibreert** de batterij door te laden uit zon en net, wat tot 24 uur kan duren. In die tijd gaat laden voor en levert hij niets aan het huis. Vertel dat even aan de klant, anders denkt hij dat er iets stuk is.

### Fasevalidatie

In de app controleert het systeem of elke batterijfase klopt met de controller of gateway. Mislukt dat, dan noemt TEB-00349 deze oorzaken: fasen niet gelijk aangesloten, linksdraaiend veld, geen AC of een batterij nog uit, DC-schakelaar uit, los jumperblok bij eenfasig en een verkeerde faseconfiguratie in de app. Twijfel je, meet dan 0 V of doorgang tussen dezelfde fase bij batterij en controller.`
    },
    {
      id: 'storingen',
      kop: 'LED, storingen en uitschakelen',
      tekst: `In deze documenten staat **geen lijst met foutcodes**. De toestand zie je aan de LED op de voorkant en in de apps.

### De LED lezen (QIG pagina 48)

| LED | Betekenis |
|---|---|
| Brandt geel | Werkt niet door hoge temperatuur |
| Knippert 1x geel | Geen communicatie met de IQ Gateway |
| Knippert 2x, 3x of 1 seconde geel | Update van batterijcontroller, BMS of PCU (omvormers) |
| Zacht geel pulserend | Slaapstand |
| Zacht blauw / zacht groen knipperend | Ontladen / opladen |
| Groen, groen-blauw, blauw-groen, blauw | Laadtoestand 75-100, 50-75, 25-50, 0-25 % |
| Knippert 1x rood | Upgrade mislukt |
| Knippert 2x rood | Foutstatus, contact met Enphase Support |
| Knippert 3x rood | DC-schakelaar uit, AC aanwezig |
| Zacht rood knipperend | DC-schakelaar aan, geen AC |
| Uit | BMS uit door lage lading zonder laadbron |

Knippert de LED na het opstarten langer dan twee minuten snel groen, dan druppelladen tot een minimale lading (tot 30 minuten). Knippert hij na een uur nog geel of rood, bel dan Enphase Support.

### Eerste stappen bij een storing (QIG pagina 49)

1. Controleer de temperatuur van de ruimte en of er 15 cm vrije ruimte is boven, onder en opzij.
2. LED uit? Zet de automaat van de batterijgroep uit, wacht minstens een minuut en zet hem weer aan.
3. Geen gegevens in de app? Controleer de IQ Gateway en de internetverbinding. Volgens de gebruikershandleiding herstelt een melding "Batteries not reporting" zich meestal binnen 15 tot 20 minuten.
4. Blijft het, bel dan Enphase Support. Vervangbare onderdelen alleen na overleg met Support.

### Reset met de DC-schakelaar (gebruikershandleiding pagina 21)

DC-schakelaar kort indrukken (LED wordt 3x rood) en de batterijautomaat uit. Wacht 30 seconden nadat de LED uit is en zet de automaat weer aan. Wacht dan op 3x rood en druk de DC-schakelaar weer in. De LED hoort dan groen of blauw te worden.

### Uitschakelprocedure (QIG pagina 49)

1. AC-voeding naar de batterijen uitschakelen.
2. Met een meter controleren dat er geen wisselspanning meer is.
3. LED uit: de DC-schakelaar staat al uit. LED aan (welke kleur ook): de DC-schakelaar een keer indrukken.

Deze procedure vervangt het veiligstellen volgens NEN 3140 niet. In een systeem met System Controller volg je de uitschakelvolgorde van de controller, want daar zijn meer bronnen.`
    },
    {
      id: 'niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat',
      tekst: `### Ontbreekt

- Een foutcodelijst. Er zijn alleen LED-kleuren en de verwijzing naar Enphase Support.
- Het type aardlekschakelaar voor de batterijgroep in een netgekoppeld systeem.
- Wat PGS 37-1 maatregelen M24, M50 en M54 inhouden.
- Een eigen gegevensblad van de IQ Battery 5P zonder FlexPhase.
- Aanhaalmomenten van de M8-bevestiging. De gids verwijst naar de fabrikant van de schroef.

### Tegenstrijdig of onduidelijk

- **Aantal batterijen per groep.** QIG-tabel (pagina 28): eenfasig 2 tot 4, driefasig 5 tot 10. QIG-noot (pagina 30): maximaal twee per groep. Veiligheidsinstructies (pagina 11): eenfasig een batterij per 20 A-groep, driefasig vijf per 40 A-groep. Planningsgids: vijf per groep (pagina 6), maar in de tabel drie per IQ Relay en 15 in totaal (pagina 7). Twijfel je, kies dan het strengste getal en vraag het na bij Enphase.
- **Tilgewicht.** 69,5 kg (QIG pagina 8, veiligheidsinstructies) en 67,35 kg (QIG pagina 20).
- **Temperatuur.** Ontladen neemt af onder 5 graden (gegevensblad) of onder 0 graden (QIG). De gebruikershandleiding noemt -20 tot 50 graden, de QIG -20 tot 55.
- **Vermogensklassen.** Het gegevensblad noemt naast de standaard vier verlaagde klassen per fase-uitvoering. De QIG-tabel noemt de klasse 3,84 kVA ook als apart model.
- **Naam van de 1P-batterij.** Het gegevensblad van de System Controller zet IQBATTERY-5P-1P-INT onder "with FlexPhase", maar de veiligheidsinstructies noemen alleen de 3P-INT als FlexPhase.
- **Combinatie IQ7 en IQ8.** Volgens de QIG niet ondersteund, volgens de planningsgids kan het met twee gateways en een PLC-filter.
- **Afkortingen in tekeningen.** In de back-upschema's van de QIG (pagina 37) staat "IQ Communications Kit 3 INT" waar de System Controller is getekend.
- **Gebruikershandleiding.** Die heet "EN-NL" maar is Engels (NL staat voor Nederland). Hij spreekt van drie slimme profielen maar noemt er twee. Back-up voor het hele huis beschrijft hij alleen voor een eenfasige woning.`
    }
  ],

  handleidingRefs: [
    { doc: 'qig', hoofdstuk: '1 Inleiding', paginas: '5', onderwerp: 'AC-gekoppeld met IQ8T-BAT, wat nodig is voor netgekoppeld en back-up, vermogen instellen' },
    { doc: 'qig', hoofdstuk: '2 Wat zit er in de doos', paginas: '5-6', onderwerp: 'Onderdelen, connectoren met en zonder weerstand, kabelwartels' },
    { doc: 'qig', hoofdstuk: '3 Productcompatibiliteit', paginas: '6-8', onderwerp: 'Gereedschap, kabel, internetverbinding en de compatibiliteitstabel' },
    { doc: 'qig', hoofdstuk: '4 Uitpakken', paginas: '8-9', onderwerp: 'Datum Moet stroom krijgen voor, tillen met stangen, schade controleren' },
    { doc: 'qig', hoofdstuk: '5.1 Een locatie kiezen', paginas: '9-10', onderwerp: 'Temperatuur, gewicht, kabelmaat, scheidingsinrichting, brandbare wand, aardingsstelsels' },
    { doc: 'qig', hoofdstuk: '5.2 PGS 37-1 (alleen Nederland)', paginas: '10', onderwerp: 'Naleving PGS 37-1, Typical 5 en 6, maatregelen M24, M50 en M54' },
    { doc: 'qig', hoofdstuk: '5.3 tot 5.5 Ruimte, oppervlak, beugel en kap', paginas: '11-19', onderwerp: 'Vrije ruimte, vlakheid, montage op metselwerk, stijlen en unistrut' },
    { doc: 'qig', hoofdstuk: '6 IQ Battery 5P installeren', paginas: '20-27', onderwerp: 'Tilstangen, kabelinvoer boren, achteringang, ophangen en ankerklemmen' },
    { doc: 'qig', hoofdstuk: '7.1 en 7.2 Vermogen selecteren en label', paginas: '27-29', onderwerp: 'Enphase Power Control, tabel automaten en aantal batterijen per groep' },
    { doc: 'qig', hoofdstuk: '7.3 tot 7.6 Veldbedrading, 1-fase, omzetten naar 3-fase', paginas: '29-33', onderwerp: 'Klemmen, striplengtes, PE 10 mm2, jumperblok, rechtsdraaiend veld' },
    { doc: 'qig', hoofdstuk: '7.7 en 7.8 Besturingscommunicatie', paginas: '33-37', onderwerp: 'CTRL-connectoren, afsluitweerstand, afvoerdraad, schema netgekoppeld en back-up' },
    { doc: 'qig', hoofdstuk: '7.9 Kabelgeleiding en afdekking sluiten', paginas: '38-39', onderwerp: 'Spanning en draairichting meten, B1 voor B2, CS1 als laatste' },
    { doc: 'qig', hoofdstuk: '8 Onder spanning zetten en configureren', paginas: '40', onderwerp: 'LED-volgorde, DC-schakelaar, Installer App, kalibratie tot 24 uur' },
    { doc: 'qig', hoofdstuk: '9 tot 11 Behuizing en ankerklem', paginas: '41-47', onderwerp: 'Behuizing plaatsen en demonteren, ankerklem losmaken' },
    { doc: 'qig', hoofdstuk: '12 Werking', paginas: '48-49', onderwerp: 'LED-tabel, werkingsmodi, P-Q-diagram, probleemoplossing en uitschakelprocedure' },
    { doc: 'qig', hoofdstuk: '13 Veiligheid', paginas: '50-52', onderwerp: 'Brand, overstroming, elektrolyt, veiligheidsinstructies, opslag en slaapstand' },
    { doc: 'dsh', hoofdstuk: 'Belangrijkste specificaties', paginas: '1', onderwerp: 'Kernwaarden eenfasig en driefasig, garantie en kenmerken' },
    { doc: 'dsh', hoofdstuk: 'Productgegevens en uitgang', paginas: '2-3', onderwerp: 'Vermogensklassen per bestelcode, pieken, temperatuur, afmetingen, IP, normen' },
    { doc: 'dsh', hoofdstuk: 'Wat zit er in de doos, accessoires', paginas: '4-5', onderwerp: 'Doosinhoud, vervangingsonderdelen en compatibele producten' },
    { doc: 'vi', hoofdstuk: 'NL - IQ Battery 5P veiligheidsinstructies', paginas: '10-11', onderwerp: 'Veiligheidsregels, geldige SKU-codes, maximum batterijen per AC-groep, opslag' },
    { doc: 'pg', hoofdstuk: '2 tot 4 Overzicht en interoperabiliteit', paginas: '2-4', onderwerp: 'Drie gebruikssituaties, productoverzicht, ondersteunde combinaties' },
    { doc: 'pg', hoofdstuk: '5 Ontwerp een Enphase Energy System', paginas: '4-7', onderwerp: 'Profielen, CT-meters, micro-omvormers, regels voor FlexPhase, maximum aantal batterijen' },
    { doc: 'pg', hoofdstuk: '5.2.1 tot 5.2.6 Voorbeelddiagrammen', paginas: '8-12', onderwerp: 'Driefasige systemen met IQ Combiner of losse gateway, stringomvormer en HEMS' },
    { doc: 'pg', hoofdstuk: '6 Besturingsbekabeling', paginas: '12-16', onderwerp: 'Aderkleuren CTRL-kabel, afsluitweerstanden, afvoerdraad' },
    { doc: 'ho', hoofdstuk: 'Backup profiles en Smart profiles', paginas: '8-16', onderwerp: 'Back-up van heel of deel van het huis, eigen verbruik, reservecapaciteit, laden vanaf het net' },
    { doc: 'ho', hoofdstuk: 'Troubleshooting', paginas: '18-22', onderwerp: 'Systeem herstellen, communicatie, LED-tabellen en reset met de DC-schakelaar' },
    { doc: 'teb366', hoofdstuk: '2 Stringomvormer van derden', paginas: '3-6', onderwerp: 'Verhouding omvormer tot batterij per fase, externe contactor op IO1' },
    { doc: 'teb366', hoofdstuk: '4 Overtollige PV-afschakeling', paginas: '10-11', onderwerp: 'Maximale verhouding PV tot batterijvermogen: IQ8 200 %, IQ7 150 %' },
    { doc: 'teb349', hoofdstuk: '6 tot 8 Bedrading en fasevalidatie IQ Battery', paginas: '6-9', onderwerp: 'Jumperblok, fasen gelijk aansluiten, CTRL-kabel, meest voorkomende validatiefouten' },
    { doc: 'teb349', hoofdstuk: '10 Training en certificering', paginas: '9', onderwerp: 'Zonder beide certificeringstrainingen blokkeert de Installer App de inbedrijfstelling' }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm01l03', 'm03l04', 'm06l03', 'm06l04'],

  zieOok: ['enphase-iq-system-controller-3', 'enphase-iq-gateway', 'enphase-iq8-micro-omvormers', 'sigenergy-batterij', 'sigenergy-sigenstor-home']
});
