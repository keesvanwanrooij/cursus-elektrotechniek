/* ==========================================================================
   content/kennis/enphase/iq-system-controller-3.js - IQ System Controller 3 INT
   Samenvatting in eigen woorden. Paginanummers verwijzen naar de positie in de
   pdf (1 = eerste pagina). In de beknopte installatiehandleiding valt dat samen
   met het gedrukte nummer. De installatiechecklist is meertalig: het Nederlandse
   deel staat op pagina 7, het Engelse op pagina 2.
   ========================================================================== */

KENNIS.addProduct({
  id: 'enphase-iq-system-controller-3',
  merk: 'enphase',
  slug: 'iq-system-controller-3',
  naam: 'Enphase IQ System Controller 3 INT (noodstroom en eilandbedrijf)',
  rol: 'gateway',
  toepassingen: ['thuisbatterij', 'zonnepanelen'],
  korteOmschrijving: 'De IQ System Controller 3 INT is de wandkast die het huis, het net, de IQ Batteries en de zonnepanelen met micro-omvormers verbindt. Hij schakelt bij netuitval automatisch over op noodstroom (eilandbedrijf) en heeft een IQ Gateway, CT-meters, de functie van een IQ Relay en vier hulpcontacten voor PV-afschakeling ingebouwd. Een model: SC100G-M230ROW, 1-fase en 3-fase, tot 80 A per fase.',

  varianten: {
    kop: ['Onderdeel', 'Bestelcode', 'Wat het is'],
    rijen: [
      ['IQ System Controller 3 INT', 'SC100G-M230ROW', 'Een model voor 1-fase en 3-fase: 230 / 400 V, 80 A per fase voor net, PV en batterij samen, en back-upbelasting'],
      ['System Shutdown Switch (SSD)', 'SC-INT-SSD-KIT', 'Meegeleverde vergrendelbare noodschakelaar voor buiten, tot 60 m van de controller'],
      ['Mobiel modem Mobile Connect', 'CELLMODEM-M1-06-AT-05 of CELLMODEM-07-INT-05', 'Meegeleverd, voorgeinstalleerd, met een data-abonnement van 5 jaar; alleen als reserveverbinding'],
      ['CTRL-koppen', 'CTRL-040-HDR-INT', 'Losse connectoren voor de besturingskabel naar de IQ Battery 5P'],
      ['Vervangbare printplaten', 'SC-IQG-PCBA-ROW, SC-ECB-PCBA-ROW, SC-IOB-PCBA-ROW en andere', 'IQ Gateway-plaat, controller, I/O-kaart, relaisplaat en netrelais zijn in het veld te vervangen']
    ]
  },

  documenten: [
    { id: 'qig', titel: 'IQ System Controller 3 INT - Beknopte installatiehandleiding (140-00273-13, februari 2025)', soort: 'Installatiegids', paginas: 48 },
    { id: 'dsh', titel: 'IQ System Controller 3 INT - Gegevensblad EMEA (DSH-00596-3.0)', soort: 'Gegevensblad', paginas: 6 },
    { id: 'chk', titel: 'IQ System Controller 3 INT installation checklist (141-00079-01, meertalig)', soort: 'Checklist', paginas: 9 },
    { id: 'teb349', titel: 'IQ System Controller 3 INT en IQ Battery 5P with FlexPhase - richtlijnen voor beste praktijken (TEB-00349-1.0)', soort: 'Technische instructies', paginas: 10 },
    { id: 'pg', titel: 'Enphase Energy System planningsgids voor netgekoppelde IQ Battery 5P with FlexPhase (TEB-00292-1.0)', soort: 'Technische instructies', paginas: 19 },
    { id: 'teb366', titel: 'Configuratie van het Enphase Energy System - stringomvormer van derden, M Series en PV-afschakeling (TEB-00366-1.0)', soort: 'Technische instructies', paginas: 15 },
    { id: 'ho', titel: "Enphase Energy System with IQ Battery 5P with FlexPhase (with backup) owner's guide (USG-00123-1.0, Engelstalig)", soort: 'Gebruikershandleiding', paginas: 28 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `De IQ System Controller 3 INT is een kunststof wandkast (760 x 500 x 158 mm, 15,2 kg, IP55) die tussen **het net**, **de groepen van het huis**, **de IQ Batteries** en **de zonnepanelen** zit. Hij is het onderdeel dat een Enphase-systeem **noodstroom** geeft. Zonder deze kast is een Enphase-batterij alleen netgekoppeld en valt hij uit als het net wegvalt.

### Wat zit erin

- **Een automatische omschakelaar (ATS).** Valt het net weg, dan opent het netrelais en draait het huis los van het net op batterij en zon: eilandbedrijf, in de handleiding *off-grid* of *back-upmodus*. Het gegevensblad noemt een overgangstijd van 0 ms voor de belasting en maximaal 120 ms tot het netrelais open is. Die 0 ms geldt alleen als het vermogen van de batterijen groter is dan de belasting op dat moment (voetnoot 2).
- **Een ingebouwde IQ Gateway.** Het brein van het systeem: communiceert met de micro-omvormers, de batterijen en de Enphase-cloud. Een aparte IQ Gateway is dus niet nodig.
- **Voorbedrade CT-meters** voor productie en verbruik op de PV- en netklemmen.
- **De functie van een IQ Relay** (de netbeveiliging die in een netgekoppeld systeem een los IQ Relay doet).
- **DIN-rails** voor de automaten en aardlekschakelaars van PV, batterij, net en belasting. Die automaten zijn **niet** meegeleverd.
- **Vier hulpcontacten** voor PV-afschakeling, een stringomvormer van een ander merk en het afschakelen van grote belastingen.
- **Een mobiel modem** als reserveverbinding en een aansluiting voor de **System Shutdown Switch**.

### Wat hij ondersteunt

- IQ7 en IQ8 micro-omvormers (en S Series in Australie en Nieuw-Zeeland).
- IQ Battery 5P with FlexPhase. De controller werkt alleen met bedrade besturing naar de batterij.
- Aardingsstelsels **TN-C-S, TN-S en TT**. Niet TN-C en niet IT.
- Werkingsmodi eigen verbruik en volledige back-up.

!!! info Als je Sigenergy al kent
De Sigen Gateway en de IQ System Controller doen hetzelfde werk: het huis bij netuitval loskoppelen en op batterij en zon laten doordraaien. Het verschil zit in wat erachter hangt. Bij Sigenergy komt een hybride omvormer aan de omvormerpoort, met zon en batterij aan de gelijkspanningskant. Bij Enphase komen de **PV-groepen met micro-omvormers** en de **batterijgroepen** elk als AC-groep met een eigen automaat in de controller binnen. Verder zit de IQ Gateway (het brein) bij Enphase in de controller, terwijl bij Sigenergy de omvormer het systeem regelt. De bypass-schakelaar QS1 bij Sigenergy heet bij Enphase de handmatige opheffing (MOR). Nieuw bij Enphase is de verplichte System Shutdown Switch buiten.
!!!`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Plek in het systeem',
      tekst: `Teken het zo: links het net en de meter, in het midden de controller, rechts het huis. PV en batterijen komen van onderen de controller in.

### De aansluitingen (QIG pagina 12 en 13)

- **GRID / MAINS**: de voeding vanaf de meterkast, middelste rij.
- **BACKUP LOADS**: de groepen die bij netuitval gevoed blijven, bovenste rij voor.
- **NON-BACKUP LOADS**: de groepen die bij netuitval uitvallen, onderste rij achter.
- **PV**: de groepen met micro-omvormers, met een eigen PV-nulaansluiting.
- **IQ Battery**: de batterijgroepen, nul op de nulrail.
- **IO-kaart** met SSD-aansluiting, hulpcontacten IO1 tot IO4, digitale ingang, CT-aansluiting en de besturingskabel naar de batterijen.
- **IQ Gateway-automaat** op positie 19, voorbedraad. Niet verplaatsen.

!!! gevaar Fasevolgorde in de kast
In de controller lopen de faseklemmen van links naar rechts **L3, L2, L1**. L1 zit dus rechts. Dat is omgekeerd van wat je gewend bent. De QIG herhaalt deze waarschuwing op bijna elke tekening.
!!!

### Back-up van alles of van een deel

De gebruikershandleiding noemt **back-up van het hele huis** en **back-up van een deel** (alleen de groepen die de klant met de installateur als essentieel heeft aangewezen). In de kast zie je dat terug: wat op BACKUP LOADS zit, blijft aan; wat op NON-BACKUP LOADS zit, valt uit. Bij een adres met alleen PV en geen batterij komen alle belastingen op NON-BACKUP (checklist).

### Met oudere of vreemde PV

- **Stringomvormer van een ander merk** op de PV-klemmen via een externe contactor (NO), aangestuurd door IO1. De ingebouwde productie-CT meet hem mee. Off-grid blijft hij alleen meedraaien als zijn AC-vermogen per fase niet groter is dan dat van de batterijen (TEB-00366).
- **M Series** micro-omvormers houden hun eigen gateway en worden als stringomvormer behandeld, met een PLC-filter ertussen.
- **Te veel PV** voor de batterij in eilandbedrijf: zie PV-afschakeling hieronder.

### Met een EV-lader

Het gegevensblad van de IQ Bidirectional EV Charger noemt de System Controller als eilandingsapparaat waarmee de auto een spanningsloos huis kan opstarten (Dark Start). De gidsen van de controller zelf noemen geen laadpaal.`
    },
    {
      id: 'specificaties',
      kop: 'Specificaties in het kort',
      tekst: `Uit het gegevensblad (DSH-00596, pagina 1 tot 4):

| Onderwerp | Waarde |
|---|---|
| Nominale spanning | 230 V L-N, 400 V L-L (bereik 184-276 V L-N, 320-480 V L-L) |
| Frequentie | 50 Hz (47-52 Hz) |
| Net, PV/batterij en back-upbelasting | Elk maximaal 80 A continu per fase |
| Hoofdautomaat | Tot 80 A |
| Back-upbedrijf | Eenfasig en driefasig |
| Overspanningscategorie | III |
| Automatenruimte | 10 enkelpolige plaatsen aan de PV- en batterijkant, 8 aan de net- en back-upkant |
| Klemmen net en belasting | 2,5 tot 35 mm2 (inbus 4 mm, 6 Nm, strip 12 mm) |
| Nul- en aardrail | Grote gaten 2,5-35 mm2 (5 Nm), kleine gaten 2,5-16 mm2 (2,2 Nm) |
| Hulpcontacten | 2 x NO en 2 x NC, 230 V AC of 24 V DC, 1 A |
| IQ Gateway-beveiliging | 16 A, voorgeinstalleerd |
| Omgeving | -40 tot 50 graden Celsius, tot 100 % vochtigheid niet condenserend, tot 2000 m |
| Normen | Onder meer IEC 61439-2, VDE-AR-E 2510-2, EN 50549-1, VDE-AR-N-4105 |
| Garantie | Controller 10 jaar, SSD-schakelaar en modem 5 jaar |

Alle klemmen zijn geschikt voor 90 graden.`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid',
      tekst: `!!! gevaar Veel spanningsbronnen
In deze kast komen net, batterijen en zonnepanelen samen. De QIG waarschuwt dat de klemmen onder spanning kunnen komen als een van de bronnen aan staat. Meet de spanning van elke batterij, PV-groep en andere bron. Bedraad de controller nooit onder spanning en open de dead-front (de binnenafdekking) alleen als de kast volledig spanningsloos is.
!!!

- **Wie.** Alleen gekwalificeerde elektriciens, en volgens de QIG door Enphase gekwalificeerde installateurs. Zonder de certificeringstrainingen voor IQ Battery 5P with FlexPhase en IQ System Controller blokkeert de Installer App de inbedrijfstelling (TEB-00349 pagina 9).
- **Voor installatie of onderhoud**: AC van het PV-systeem af en de DC-schakelaars van alle IQ Batteries uit.
- **Niet alleen werken**, niet repareren of openen (vervalt de garantie), geen brandbare spullen in de buurt.
- **Overstroming**: zo hoog monteren dat water er niet bij kan. Is water in contact geweest, eerst een inspectie.
- **Brand of rook**: DC-schakelaars van de batterijen uit, PV- en batterijautomaten in de controller uit, AC-automaat van de controllergroep uit, brandweer, ruimte verlaten.
- **Aarding.** Voor veilig back-upbedrijf is een **lokale aardelektrode** nodig (QIG pagina 15). Waar de lokale regels het vragen, verbind je de aardrail met minstens 10 mm2 koper, groen-geel, met de aarde van het gebouw.
- **Aardlek in het back-upcircuit is verplicht** in de Europese scenario's (QIG pagina 40 en 42, en de checklist).
- **Niet voor levensondersteunende of medische apparatuur** als noodstroombron.

!!! info Algemene vakkennis: waarom een eigen aarding
In eilandbedrijf is het net, en daarmee de aarding van de netbeheerder, losgekoppeld. Om de aardlekschakelaars te laten werken heeft het eiland een eigen aardverbinding nodig. Daarom vraagt Enphase een lokale aardelektrode en schakelt de controller in de Europese scenario's ook de nul van het net los. Zie de lessen over aarding en over PV en je veiligheidsprocedure.
!!!`
    },
    {
      id: 'montage',
      kop: 'Plaatsing en montage',
      tekst: `### Plek kiezen (QIG pagina 6 en 7)

- Binnen of buiten (IP55), maar **niet in directe regen en niet in direct zonlicht**, niet in veel stof.
- **Alleen aan de wand**, rechtop, niet op de grond of aan het plafond, niet meer dan 10 graden uit het lood en niet voorover gekanteld.
- De wand moet 15,2 kg dragen. Met twee personen optillen en uitlijnen.
- -40 tot 50 graden, niet hoger dan 2000 m. In overstromingsgebied hoog genoeg.
- Vrije ruimte volgens de tekening 150 mm rondom en **minstens 600 mm voor de kast**. Bij montage in het pad van een auto adviseert Enphase minstens 91 cm hoogte.
- Kies een plek waar de kabels van PV, net en batterijen makkelijk binnenkomen.

### Montage in stappen

1. **Deur eraf** (niet verder dan 90 graden openen) en opzij leggen.
2. **Kabelinvoer boren voordat de kast aan de wand hangt.** Er zijn invoeren onder, links, rechts en achter, gemarkeerd op de kast (tot 51 mm onder, reken 10 mm extra voor de wartel). Na montage boren mag niet: stof op de printplaten kan kortsluiting geven. Ongebruikte gaten dichten. Buiten: wartels of leidingen van minstens IP55.
3. **Ophangen** met twee M6-schroeven van ongeveer 80 mm (afhankelijk van de wand) en ringen, waterpas. Het bovenste bevestigingspunt heeft een sleutelgat.
4. **Dead-front eraf** (1,4 Nm), eerst de kabel van het modem losmaken. Wijzig de dead-front niet, behalve het uitnemen van vulplaten.
5. **Automaten en aardlekschakelaars** op de DIN-rails plaatsen, gedimensioneerd volgens de lokale regels. Voor een adres met een PV-groep en een batterijgroep raadt Enphase aardlekautomaten (RCBO) aan, zodat alles in de controller past.`
    },
    {
      id: 'elektrische-aansluiting',
      kop: 'Elektrische aansluiting en beveiliging',
      tekst: `### Welk bedradingsscenario

De QIG geeft per regio een scenario (tabel pagina 14, tekeningen pagina 33 tot 43). Voor Europa zijn er drie:

| Scenario | Schakelaar in de netvoeding | Net-nul los bij back-up | Nul-automaat vereist | Batterij |
|---|---|---|---|---|
| A3 | Eenfasig, 2-polig | Ja | Ja | IQBATTERY-5P-1P-INT |
| A8 en A9 | Driefasig, 3-polig | Ja | Nee | IQBATTERY-5P-3P-INT |
| A10 en A11 | Driefasig, 4-polig | Ja | Ja | IQBATTERY-5P-3P-INT |

De tekeningen A9 en A11 tonen per PV-groep en per batterijgroep een eigen aardlekschakelaar (R1 en R2). Een aardlekautomaat mag ook, maar dan apart voor PV en batterij. Welk scenario in Nederland verplicht is, staat niet in de gids.

### Netvoeding en groepen

- Volgorde: eerst de netkabel op GRID/MAINS volgens het label, nul op de netnul.
- Back-upgroepen op BACKUP LOADS. Met een driefasige FlexPhase-batterij in de juiste fasevolgorde; met een eenfasige 1P-batterij alleen op de L1-back-upklem.
- **De nullen van de back-upgroepen moeten in de hoofdverdeler gescheiden zijn** van de andere nullen en op de back-upnulklem in de controller komen (checklist).
- PV-nul op de PV-nulaansluiting, batterijnul op de nulrail.
- In een driefasig huis de nul niet doorlussen naar batterijen op verschillende fasen: elke batterijfase een eigen nul naar de nulrail.

### Besturingskabel naar de batterijen

Zelfde regels als bij de batterij: kabel CTRL-BL-EU-01, klem 1 CTRL L, 2 CTRL H, 3 CTRL G, 4 niet gebruikt, 0,2 Nm. **Afsluitweerstand** op de twee uiteinden van de bus. Zit de controller aan het eind, dan op de controller en de laatste batterij. Zit hij in het midden, dan sluit je op beide connectoren draden aan en zitten de weerstanden op de eerste en de laatste batterij. **Afvoerdraad** per kabelstuk aan een kant, totaal maximaal 100 m. Noteer kleur en nummer van elke ader en doe een doorgangsmeting voordat je de kabel door de buis trekt.

### System Shutdown Switch (SSD)

- **Elk systeem met deze controller heeft een SSD nodig.** De schakelaar is tweepolig en vergrendelbaar en moet **buiten, goed bereikbaar** hangen, maximaal 60 m van de controller.
- De SSD-kop op de IO-kaart is af fabriek doorverbonden. Haal die draadbrug weg en sluit de SSD aan: klem 1 tot 4 op pen 1 tot 4. Draad 0,5 tot 1,5 mm2 met adereindhuls, 1,2 Nm op de schakelaar, 0,2 Nm op de kop.
- **Bedraad de SSD voor je inschakelt en laat hem op AAN staan tot de inbedrijfstelling klaar is.** Staat hij tijdens de inbedrijfstelling uit, dan blijven de DER-relais open, komt er geen spanning op de PV- en batterijklemmen en branden beide LED's rood (TEB-00349).

### Hulpcontacten en PV-afschakeling

IO1 en IO2 zijn NC-contacten (NC1, NC2), IO3 en IO4 NO-contacten (NO1, NO2), 1 A bij 230 V AC of 24 V DC. Je stelt hun functie in met de Installer App.

- **PV-afschakeling** (PV shedding): als er meer PV is dan de batterijen in eilandbedrijf aankunnen, koppelt een contactor een deel van de PV-groepen los zodra het systeem off-grid gaat. Gebruik een NO-contactor van 25 A (AC-7a of AC-7b). Stuurdraad van de contactor op de IO-pen, de referentie op de IQ Gateway-automaat, de back-upautomaat of het back-uppaneel. In de Installer App kies je dan altijd Basic mode.
- **Belasting afschakelen**: grote, minder belangrijke verbruikers off-grid uitschakelen via een NO-contactor die bij de belasting past (230 V, IEC EN 61095).
- **Stringomvormer van derden**: via een NO-contactor op IO1. In Advanced mode kies je bij welke laadtoestand hij off-grid wordt losgekoppeld (80 tot 90 %) en weer bijgeschakeld (20 tot 70 %).

De voorbeeldcontactor die TEB-00366 noemt, is een Hager ESC425 (driefasig) of ESC225 (eenfasig).`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Controle en inbedrijfstelling',
      tekst: `Gebruik de **installatiechecklist** (Nederlands op pagina 7). Hij is een samenvatting van de QIG en het invullen en fotograferen is volgens de checklist een verplichte stap in de Installer App.

### Voor het inschakelen

1. Lokale aarde aanwezig en op de aardrail. Kast schoon, klemmen aangedraaid, alle automaten uit.
2. Net, nul, back-up- en niet-back-upgroepen, PV-nul en batterijnul op de juiste klemmen (zie boven).
3. SSD bedraad en op AAN. Handmatige opheffing (MOR) uit, hendel omlaag.
4. Afvoerdraad van de besturingskabel aan een kant (staat in de Engelse en niet in de Nederlandse checklist).
5. **Netspanning meten** aan de netkant van de hoofdautomaat: L-N 230 V plus of min 8 %, per fase noteren, ook N-PE.
6. **Draairichting meten** met een draaiveldmeter of Duspol: rechtsom op L1-L2, L2-L3 en L3-L1. Fout? Verwissel L2 en L3. Houd volgens de QIG de L2-sonde (met het display) in je linkerhand, omdat L1 rechts zit.
7. Aanvullende metingen volgens de lokale regels, zoals aardmeting en isolatieweerstand.

### Na het inschakelen

1. Hoofdautomaat in, wachten op de klik van de relais en de LED's.
2. Gaat de controller niet aan, dan de eerste stappen opnieuw. Sluiten de relais niet, dan opnieuw spanning en draairichting.
3. Spanning en draairichting op de netklemmen in de kast nogmaals meten. Op back-up-, gateway- en PV-klemmen moet dezelfde spanning staan als het net.
4. Automaten van PV, batterij, back-up en niet-back-up in.
5. Lusimpedantie, netimpedantie en test van de aardlek in het back-upcircuit volgens de lokale regels.
6. Foto's maken van de bedrading zonder dead-front en van de ingevulde checklist.
7. Dead-front terug (geen draden afknellen), vulplaat aan de netkant, daarna de modemkabel op de USB-poort van de IQ Gateway.

### In de app

- Stel de controller in bedrijf met de **Enphase Installer App**. Zie je hem niet, controleer of de AP-modus-LED van de IQ Gateway groen is, druk anders op de AP-knop en verbind je telefoon met het Wi-Fi van de gateway.
- Richt **Ethernet of Wi-Fi** van de klant in als hoofdverbinding. Het modem is alleen reserve.
- Na de inbedrijfstelling deur dicht en vergrendelen.
- **Achteraf toevoegen** aan een bestaand systeem: in de app bestaande IQ Relays buiten gebruik stellen en de controller toevoegen met de optie Oude IQ Gateway vervangen (TEB-00349 pagina 6). Anders krijg je een gatewayconflict.`
    },
    {
      id: 'storingen',
      kop: 'Bediening, LED en storingen',
      tekst: `Er is geen foutcodelijst. De controller heeft twee status-LED's; daarnaast heeft de ingebouwde IQ Gateway zijn eigen LED's.

### Veelvoorkomende fouten (TEB-00349 pagina 3)

| Wat er mis is | Wat je ziet | Wat je doet |
|---|---|---|
| Net- en back-upklemmen verwisseld | Verbruik 0, CT's niet actief, systeem blijft off-grid hangen | Uitschakelen en goed aansluiten |
| Linksdraaiend veld | Fasevalidatie mislukt, systeem komt niet terug op het net | Draairichting meten en corrigeren |
| SSD uit of verkeerd aangesloten | Beide LED's rood, geen spanning op PV en batterij | SSD goed aansluiten, op AAN, stap 4 (provisioning) in de app herhalen |
| Controller achteraf geplaatst | Fouten bij inbedrijfstelling, gatewayconflict | Oude relais en gateway uit de app, controller toevoegen |
| Besturingskabel fout of geen afsluitweerstand | Batterijen niet gevonden, communicatiefout | Goedgekeurde kabel, bedrading en weerstanden nalopen |

### De System Shutdown Switch gebruiken (QIG pagina 26)

Alleen na de inbedrijfstelling. **Uitschakelen**: SSD uit, DC-schakelaars van alle batterijen uit, PV-automaten en batterijautomaten in de controller uit, een minuut wachten en de AC-spanning op PV- en batterijklemmen meten. Een lage spanning van ongeveer 20 V DC op die draden is normaal: daarmee kan het systeem later zichzelf opstarten op zonlicht (Sunlight Jump Start). **Weer aan**: in omgekeerde volgorde, als laatste de DC-schakelaars van de batterijen indrukken.

### Handmatige opheffing (MOR)

Alleen in nood of op aanwijzing van Enphase Support. Eerst de DC-schakelaars van alle batterijen uit, alle batterijautomaten uit, alle PV-automaten uit, dan het klepje open en de MOR op Active. Het huis draait dan alleen op het net; PV en batterijen zijn losgekoppeld. Doe je het zonder die stappen, dan kan de apparatuur beschadigen.

### Uitschakelprocedure van het hele systeem (QIG pagina 26)

1. DC-schakelaars van alle IQ Batteries uit.
2. SSD uit.
3. Batterij- en PV-automaten in de controller uit.
4. Hoofdautomaat in de controller (als die er is) en de netvoeding uit.
5. Automaten van back-up- en niet-back-upgroepen uit.
6. Controleren of de LED's van micro-omvormers, batterijen en controller uit zijn.
7. Dead-front eraf en op alle klemmen (PV, batterij, net, belasting) meten dat er geen spanning staat.
8. Dead-front en deur dicht en vergrendelen.

Dit is de fabrikantvolgorde. Het veiligstellen volgens NEN 3140 (vergrendelen, spanningsloosheid aantonen) doe je daarnaast, zie de les over de vijf stappen.

### Herstel na een uitval (gebruikershandleiding pagina 18)

Controleer de automaten in de controller. Melding "Microinverters not reporting" of "Batteries not reporting": tot 20 minuten wachten, het systeem herstelt bedrade communicatie meestal zelf. Werkt de IQ Gateway niet, dan ontladen de batterijen ook niet.`
    },
    {
      id: 'niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat',
      tekst: `### Ontbreekt

- Een foutcodelijst; alleen LED's en Enphase Support.
- Welk Europees bedradingsscenario (2-, 3- of 4-polig) in Nederland moet, en welk type aardlekschakelaar.
- Waarom de nul bij back-up losgeschakeld wordt en hoe je dat zelf test.
- De betekenis van de maat 900 mm op de tekening van de vrije ruimte.
- Een laadpaal als onderdeel van het back-upsysteem.

### Tegenstrijdig of onduidelijk

- **LED 1 en LED 2 zijn omgewisseld.** In de QIG (pagina 27) is LED 1 de batterij-LED (batterij niet gevonden, laadtoestand herstellen, geel is off-grid) en LED 2 de net-LED (gesynchroniseerd, blauw is off-grid, rood is SSD of MOR). In de gebruikershandleiding (pagina 19) is het andersom.
- **Grens voor PV-afschakeling.** De QIG (pagina 22) zegt: verplicht boven 150 % van het batterijvermogen per fase en noemt IQ7 en S Series. TEB-00366 (pagina 10) noemt 150 % voor IQ7 en 200 % voor IQ8.
- **Nederlandse checklist.** Bij de draairichting staat "Rechtsom (R)/linksom", en de stappen over de afvoerdraad en het adres met alleen PV ontbreken ten opzichte van de Engelse versie. Gebruik de Engelse pagina 2 als controle.
- **MOR.** De gebruikershandleiding zegt dat het systeem dan alleen op het net draait, TEB-00349 en de QIG zeggen dat de MOR de controller omzeilt en PV en batterijen loskoppelt van net en huis. Dat komt op hetzelfde neer, maar de woorden verschillen.
- **Batterijnaam.** Het gegevensblad zet IQBATTERY-5P-1P-INT onder "with FlexPhase"; volgens de veiligheidsinstructies van de batterij is alleen IQBATTERY-5P-3P-INT de FlexPhase-uitvoering.`
    }
  ],

  handleidingRefs: [
    { doc: 'qig', hoofdstuk: 'Inleiding', paginas: '2', onderwerp: 'Wat de controller doet, ondersteunde micro-omvormers en aardingsstelsels' },
    { doc: 'qig', hoofdstuk: 'Deel A Gereedschap en doosinhoud', paginas: '4-5', onderwerp: 'Zelf mee te nemen spullen (onder meer Duspol), SSD, modem, CTRL-connectoren' },
    { doc: 'qig', hoofdstuk: 'Stap 1 en 2 Locatie en vrije ruimte', paginas: '6-7', onderwerp: 'Plaatsingsregels, temperatuur, hoogte, 600 mm vrij voor de kast' },
    { doc: 'qig', hoofdstuk: 'Stap 3 tot 6 Deur, montage, kabelinvoer, dead-front', paginas: '8-11', onderwerp: 'Ophangen, invoergaten vooraf boren, dead-front spanningsloos openen' },
    { doc: 'qig', hoofdstuk: 'Deel B Intern aanzicht en voedingsaansluiting', paginas: '12-13', onderwerp: 'Klemmen voor net, back-up, niet-back-up, PV en batterij, fasevolgorde L3-L2-L1' },
    { doc: 'qig', hoofdstuk: 'Bedradingsscenario en aanvullende instructies', paginas: '14-16', onderwerp: 'Scenario per regio, klemmaten en aanhaalmomenten, kritische controles, aardelektrode' },
    { doc: 'qig', hoofdstuk: 'Besturingskabel (CTRL)', paginas: '17-19', onderwerp: 'Koppen, afsluitweerstand, drie bedradingsvolgordes, afvoerdraad' },
    { doc: 'qig', hoofdstuk: 'System Shutdown (SSD) Switch-bedrading', paginas: '20', onderwerp: 'SSD buiten, maximaal 60 m, aansluiting op de IO-kaart' },
    { doc: 'qig', hoofdstuk: 'AUX-bedrading en PV shedding', paginas: '21-22', onderwerp: 'Hulpcontacten IO1 tot IO4, PV-afschakeling, belasting afschakelen, stringomvormer van derden' },
    { doc: 'qig', hoofdstuk: 'Dead-front sluiten, modem, laatste controles', paginas: '23-25', onderwerp: 'Modem als reserve, spanning en draairichting, inbedrijfstelling met de Installer App' },
    { doc: 'qig', hoofdstuk: 'Bedrijf', paginas: '26', onderwerp: 'Handmatige opheffing, uitschakelprocedure, SSD activeren en terugzetten, onderhoud' },
    { doc: 'qig', hoofdstuk: 'LED-tabellen', paginas: '27-29', onderwerp: 'LED 1 en LED 2 van de controller, LED en knoppen van de IQ Gateway, modem' },
    { doc: 'qig', hoofdstuk: 'Veiligheid', paginas: '30-31', onderwerp: 'Veiligheidsinstructies, brand en overstroming, voorwaarden modem' },
    { doc: 'qig', hoofdstuk: 'Bijlage A Scenario A3 (Europa, eenfasig)', paginas: '35', onderwerp: 'Eenfasig huis met nulscheiding en aparte aardlek voor PV en batterij' },
    { doc: 'qig', hoofdstuk: 'Bijlage A Scenario A8 tot A11 (Europa, driefasig)', paginas: '40-43', onderwerp: 'Driefasig met 3- of 4-polige schakelaar, verplichte aardlek in het back-upcircuit' },
    { doc: 'qig', hoofdstuk: 'Checklist installateur', paginas: '47', onderwerp: 'Korte controlelijst voor en na het inschakelen' },
    { doc: 'dsh', hoofdstuk: 'Belangrijkste specificaties en elektrische specificaties', paginas: '1-2', onderwerp: '80 A per fase, overgangstijd 0 ms en netisolatie 120 ms, hulpcontacten, klemmaten' },
    { doc: 'dsh', hoofdstuk: 'Mechanische gegevens, garantie, accessoires', paginas: '3', onderwerp: 'Afmetingen, automatenruimte, omgeving, garantie, vervangbare onderdelen' },
    { doc: 'dsh', hoofdstuk: 'Compatibiliteit en normen', paginas: '4', onderwerp: 'Compatibele batterijen en micro-omvormers, normen, 1P alleen in eenfasige huizen' },
    { doc: 'chk', hoofdstuk: 'NL - installatiechecklist', paginas: '7', onderwerp: 'Controles voor en na het inschakelen, meetwaarden noteren, foto verplicht' },
    { doc: 'chk', hoofdstuk: 'EN - installation checklist', paginas: '2', onderwerp: 'Volledigere Engelse versie met afvoerdraad en adres met alleen PV' },
    { doc: 'teb349', hoofdstuk: '1 Overzicht', paginas: '3', onderwerp: 'Tabel met veelvoorkomende fouten, symptomen en oplossingen' },
    { doc: 'teb349', hoofdstuk: '2 tot 5 Klemmen, draairichting, SSD, achteraf plaatsen', paginas: '4-6', onderwerp: 'Net en back-up niet verwisselen, Duspol, SSD en MOR, oude gateway vervangen' },
    { doc: 'teb349', hoofdstuk: '9 en 10 Documentatie en certificering', paginas: '9', onderwerp: 'Verplichte trainingen Enphase University' },
    { doc: 'pg', hoofdstuk: '6.1 Bedradingshandleiding met IQ System Controller 3 INT', paginas: '15-16', onderwerp: 'Volgorde van de besturingskabel en plaats van de afsluitweerstanden' },
    { doc: 'teb366', hoofdstuk: '2 en 3 Stringomvormer van derden en M Series', paginas: '3-10', onderwerp: 'Externe NO-contactor op IO1, PLC-filter, Basic en Advanced mode' },
    { doc: 'teb366', hoofdstuk: '4 en 5 PV-afschakeling en configuratie in de app', paginas: '10-15', onderwerp: 'Maximale verhouding PV tot batterij, instellen en valideren van het hulpcontact' },
    { doc: 'ho', hoofdstuk: 'Component introduction en Backup profiles', paginas: '6-9', onderwerp: 'Wat de controller voor de klant doet, back-up van heel of deel van het huis' },
    { doc: 'ho', hoofdstuk: 'Troubleshooting en LEDs', paginas: '18-20', onderwerp: 'Herstel na uitval, SSD, handmatige opheffing, LED-tabellen' },
    { doc: 'ho', hoofdstuk: 'Safety instructions IQ System Controller', paginas: '25-26', onderwerp: 'Veiligheid en noodgevallen voor de bewoner' }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm01l03', 'm03l04', 'm03l05', 'm06l03', 'm06l04'],

  zieOok: ['enphase-iq-battery-5p', 'enphase-iq-gateway', 'enphase-iq8-micro-omvormers', 'enphase-iq-ev-charger-2', 'sigenergy-gateway']
});
