/* ==========================================================================
   content/kennis/sigenergy/gateway.js - Sigen Gateway (Home en HomePro)
   Samenvatting in eigen woorden van zes varianten. Paginanummers verwijzen naar
   de positie in de pdf (1 = eerste pagina), niet naar het gedrukte paginanummer
   (in de installatiegidsen en de alarmlijst staat dat een lager).
   ========================================================================== */

KENNIS.addProduct({
  id: 'sigenergy-gateway',
  merk: 'sigenergy',
  slug: 'gateway',
  naam: 'Sigen Gateway (Home en HomePro)',
  rol: 'gateway',
  toepassingen: ['thuisbatterij'],
  korteOmschrijving: 'De Sigen Gateway is het schakelpunt tussen het net, de omvormer met batterij, de huisgroepen en eventueel een generator. Hij verzorgt de back-up bij netuitval en schakelt zonder merkbare onderbreking om. Er zijn zes varianten: Home SP 12K en Home TP 30K, en HomePro SP, SP-F, TP en TP-L.',

  varianten: {
    kop: ['Model', 'Fasen', 'Nominale stroom', 'Vermogen', 'Afmetingen B x H x D (mm)', 'Gewicht', 'Onderscheidend'],
    rijen: [
      ['Home SP 12K', '1-fase', 'Staat niet in de handleiding', 'Omvormers samen maximaal 12,0 kW', '400 x 550 x 149 tot 162 (tekening gids)', 'Staat niet in de handleiding', 'Twee omvormerpoorten (8,0-12,0 kW en 6,0 kW), klem voor niet-back-upbelasting, geen generator- of slimme-belastingenpoort'],
      ['Home TP 30K', '3-fase', 'Staat niet in de handleiding', '30 kW volgens de naam; grootste omvormer in de kabeltabel is 25-30 kW', '400 x 550 x 149 tot 162 (tekening gids)', 'Staat niet in de handleiding', 'Een driefasige omvormerpoort, klem voor niet-back-upbelasting, geen generator- of slimme-belastingenpoort'],
      ['HomePro SP', '1-fase', '54,6 A', '12 kW', '450 x 570 x 197 (brochure, zonder decoratieve afdekking)', '25 kg', 'Een omvormerpoort met keuze uit twee automaten, poort voor generator of slimme belastingen, klem voor niet-back-upbelasting, kabelinvoer onder of achter'],
      ['HomePro SP-F', '1-fase', '100 A', '22 kW', '450 x 695 x 177 (brochure, zonder decoratieve afdekking)', '25 kg', 'Zwaarste eenfasige variant, tot drie omvormerpoorten (twee optioneel), poort voor slimme belastingen of generator, geen niet-back-upklem'],
      ['HomePro TP', '3-fase', '45,6 A', '30 kW', '450 x 695 x 163 (brochure)', '25 kg', 'Driefasig, een omvormerpoort plus een optionele tweede met eigen automaat, poort voor slimme belastingen of generator'],
      ['HomePro TP-L', '3-fase', 'Staat niet in de handleiding', 'Staat niet in de handleiding', '450 x 650 x 150 tot 163 (tekening gids)', 'Staat niet in de handleiding', 'Als HomePro TP, maar zonder poort voor slimme belastingen of generator (in de gids "niet beschikbaar")']
    ]
  },

  documenten: [
    { id: 'bi', titel: 'Belangrijke informatie voor Sigen Gateway', soort: 'Belangrijke informatie', paginas: 16 },
    { id: 'ig-home-sp', titel: 'Installatiegids voor Sigen Gateway Home SP 12K', soort: 'Installatiegids', paginas: 18 },
    { id: 'ig-home-tp', titel: 'Installatiegids voor Sigen Gateway Home TP 30K', soort: 'Installatiegids', paginas: 18 },
    { id: 'ig-pro-sp', titel: 'Installatiegids voor Sigen Gateway HomePro SP', soort: 'Installatiegids', paginas: 20 },
    { id: 'ig-pro-spf', titel: 'Installatiegids voor Sigen Gateway HomePro SP-F', soort: 'Installatiegids', paginas: 20 },
    { id: 'ig-pro-tp', titel: 'Installatiegids voor Sigen Gateway HomePro TP', soort: 'Installatiegids', paginas: 21 },
    { id: 'ig-pro-tpl', titel: 'Installatiegids voor Sigen Gateway HomePro TP-L', soort: 'Installatiegids', paginas: 21 },
    { id: 'alarm', titel: 'Lijst van alarmeringen', soort: 'Alarmlijst', paginas: 23 },
    { id: 'br', titel: 'Brochure - Thuis Energieoplossing', soort: 'Brochure', paginas: 23 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `De Sigen Gateway is een wandkast met automaten, een bypass-schakelaar en contactoren die tussen **het openbare net**, **de omvormer met batterij** en **de groepen in je huis** zit. Waar een gewone installatie het net rechtstreeks op de groepenkast zet, loopt hier alles eerst door de gateway. Zie hem als de verkeersregelaar van een Sigenergy-thuisbatterij.

### Wat doet hij

- **Verbinden.** Het net komt binnen op de netpoort. Van daaruit gaat het vermogen naar de omvormer (die ook zon en batterij bedient) en naar de huisgroepen.
- **Back-up bij netuitval.** Valt het net weg, dan koppelt de gateway het huis los van het net en voedt de omvormer met batterij het huis. De handleiding noemt dat de *off-grid stand*. Het vakwoord is *islanding* (eilandbedrijf): een deel van de installatie draait los van het net.
- **Omschakelen zonder onderbreking.** De brochure noemt 0 ms onderbreking aan de belastingszijde, maar alleen als de gateway samen met een Sigen Energy Controller en een Sigen Battery wordt gebruikt.
- **Generator.** Een dieselgenerator start via een droog contact (een potentiaalvrij schakelcontact dat zelf geen spanning levert). De brochure noemt dat ondersteund.

### Back-up: alles of met prioriteit

De brochure noemt **back-up voor het hele huis** en **slimme back-up met prioriteit**. In de gidsen zie je dat terug als aparte uitgangen. Wat achter de *back-uppoort* hangt (volgens de gids: verlichting, router en dergelijke) blijft bij netuitval gevoed. Op de *slimme poort* hoort zware belasting: warmtepomp, zwembadverwarming, wasdroger, dompelaar of de omvormer van een ander merk. Die mag worden uitgeschakeld als de opslag bijna leeg is. Een *klem voor niet-back-upbelasting* is voor groepen die bij netuitval niet gevoed worden. Hoe je prioriteiten instelt staat niet in deze gidsen.

### Bypass

In de kast zit een **overbruggingsschakelaar, QS1** (bypass: een omweg langs de gateway-elektronica). In alle gidsen blijft QS1 in normaal bedrijf **uit**. Wanneer je hem wel gebruikt, legt de handleiding niet uit.

!!! info Home of HomePro
De handleiding legt niet uit wat "Home" en "HomePro", of "SP", "TP", "F" en "L" betekenen. SP is bij de kabels en omvormers eenfasig, TP driefasig. Voor de rest vergelijk je de poortlijsten.
!!!`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Plek in het systeem',
      tekst: `Teken in gedachten een lijn: links de buitenwereld, rechts het huis, in het midden de gateway.

### Van net naar huis

1. **Het net** (aansluiting van de netbeheerder, via de meterkast) komt op poort *GRID*, achter automaat QF1. Binnen zit een netcontactor, KM1, waarmee de gateway het net kan loskoppelen.
2. **De omvormer** hangt aan poort *INV*: de Sigen Energy Controller (SigenStor EC) of een Sigen Hybrid. Aan de gelijkstroomkant daarvan zitten de zonnepanelen en de batterij.
3. **De huisgroepen** hangen aan poort *BACKUP*. Wat daarachter zit, wordt bij netuitval door batterij en zon gedragen.
4. **Niet-back-up.** Bij de Home-varianten en HomePro SP is er een klem *X1* (*Non-BACKUP*) voor groepen die bij netuitval uitvallen.
5. **Slimme belastingen of generator** op *SMART-PORT* (HomePro SP, SP-F en TP). Bij TP-L staat die poort in de gids als "niet beschikbaar". De Home-varianten hebben geen aparte poort, wel een droog contact (DO3) voor het startsignaal en ingang DI2 voor de terugmelding van een externe ATS.

### Praten met de rest

- **FE1** (Fast Ethernet, een netwerkkabel) naar de omvormer, **FE2** naar andere apparaten zoals een Sigen EV AC Charger, extra omvormer of router.
- **Droge contacten** (DI/DO) voor bypass-terugmelding, ATS-terugmelding en generatorstart.

### EV-lader en stroomsensor

De gidsen tonen de EV AC Charger alleen als apparaat op FE2. De brochure noemt V2X (de auto als bron) als een van de bronnen waartussen de gateway naadloos schakelt. De **stroomsensor** komt in de gidsen niet aan bod. De alarmlijst heeft wel meldingen over een meter en stroomtransformatoren, met de aanwijzing te controleren of de sensor op de gateway of de meter zit.

!!! kern Waarom dit ertoe doet
Met een gateway kunnen batterij en zon spanning op de installatie zetten terwijl het net weg is. Dat verandert hoe je veilig werkt. Zie de cursusles over PV en je veiligheidsprocedure.
!!!`
    },
    {
      id: 'varianten',
      kop: 'De varianten vergeleken',
      tekst: `De tabel bovenaan zet de zes varianten naast elkaar. Dit is mijn lezing van de poortlijsten en de brochure, geen advies van de fabrikant.

### Eerst: 1-fase of 3-fase

De gateway moet bij de aansluiting van het huis en de omvormer passen. **SP** is eenfasig (Home SP 12K, HomePro SP, HomePro SP-F). **TP** is driefasig (Home TP 30K, HomePro TP, HomePro TP-L).

### Dan: Home of HomePro

**Home** heeft een kleinere kast (400 x 550 mm) zonder generator- of slimme-belastingenpoort. **HomePro** heeft die poort bij SP, SP-F en TP.

### Keuzehulp

1. Eenfasig, omvormers samen tot 12 kW, geen generator: **Home SP 12K**.
2. Eenfasig met generator of grote slimme belasting, 12 kW: **HomePro SP**.
3. Eenfasig met hoger vermogen (100 A, 22 kW): **HomePro SP-F**.
4. Driefasig, tot 30 kW, geen slimme poort nodig: **Home TP 30K** (met niet-back-upklem) of **HomePro TP-L** (zonder beide).
5. Driefasig met slimme belasting of generator: **HomePro TP**.

### Aantal omvormers

Home SP 12K heeft twee omvormerpoorten (8,0 tot 12,0 kW en 6,0 kW), samen maximaal 12,0 kW. Bij HomePro TP en TP-L is een tweede omvormer optioneel, met een zelf aangeleverde automaat. Bij SP-F zijn omvormer 2 en 3 optioneel.`
    },
    {
      id: 'specificaties',
      kop: 'Specificaties in het kort',
      tekst: `De brochure (pagina 14) geeft alleen de specificaties van HomePro SP, SP-F en TP. Voor de andere drie moet je het met de gidsen doen.

### HomePro volgens de brochure

| Onderwerp | HomePro SP | HomePro SP-F | HomePro TP |
|---|---|---|---|
| Net | 1-fase, 220 / 230 / 240 V | 1-fase, 220 / 230 / 240 V | 3-fase, 380 / 400 V |
| Nominale stroom (net en back-up) | 54,6 A | 100 A | 45,6 A |
| Nominaal vermogen | 12 kW | 22 kW | 30 kW |
| Omvormerpoort | 54,6 / 32 A, 12 / 6 kW | 55 A, 12 kW | 45,6 A, 30 kW |
| Slimme poort of generator | 54,6 A, 12 kW | 55 A, 12 kW | 45,6 A, 30 kW |
| Afmetingen B / H / D | 450 / 570 / 197 mm | 450 / 695 / 177 mm | 450 / 695 / 163 mm |
| Gewicht | 25 kg | 25 kg | 25 kg |

Voor alle drie: 50 / 60 Hz, schakeltijd bij wegvallen van het net 0 ms, overspanningscategorie III, natuurlijke convectiekoeling, communicatie via FE, RS485 en droog contact, wandmontage. Afmetingen zijn zonder decoratieve afdekking. 

### Omgeving en beschermingsgraad

Brochure: bedrijf van -30 tot 55 graden Celsius, opslag van -40 tot 70 graden, tot 4000 m hoogte, IP55. De omgevingstekening in alle zes gidsen toont IP54 en 0 tot 95 % relatieve vochtigheid. Bij SP-F staat erbij dat het vermogen terugloopt (derating) boven 50 graden. Ga bij twijfel uit van de strengste waarde.

### Uit de installatiegidsen

| Variant | Omvormerpoorten en automaten | Netkabel |
|---|---|---|
| Home SP 12K | INV1 (QF2, 8-12 kW), INV2 (QF3, 6 kW), backup QF4, niet-backup X1 | 16 mm2 |
| Home TP 30K | een driefasige omvormer (QF2), backup QF3, niet-backup X1 | 16 mm2 |
| HomePro SP | QF3 (8-12 kW) of QF4 (5-6 kW), niet allebei; backup QF5; slim QF2 | 16 mm2 |
| HomePro SP-F | omvormer 1 op QF3, 2 en 3 gereserveerd; backup QF4; slim QF2 | 35 mm2 |
| HomePro TP | omvormer 1 op QF3, 2 optioneel; backup QF4; slim QF2 | 16 mm2 |
| HomePro TP-L | omvormer 1 op QF2, 2 optioneel; backup QF3 | 16 mm2 |

Functionele aardingskabel: 6 tot 10 mm2, bij HomePro SP en SP-F 10 tot 16 mm2. Omvormerkabel driefasig: 5-8 kW 4 mm2, 10-15 kW 6 mm2, 17-20 kW 10 mm2, 25-30 kW 16 mm2. Eenfasig: 3,0 kW 4 mm2, 3,6-6,0 kW 6 mm2, 8,0-12,0 kW 16 mm2. De gidsen van HomePro TP en TP-L geven ook een tabel voor de zelf aangeleverde automaat van omvormer 2 (C16 tot C63).`
    },
    {
      id: 'installatie',
      kop: 'Installatie in hoofdlijnen',
      tekst: `De gidsen volgen ongeveer dezelfde route, maar verschillen in poorten, automaten en kabels. Lees dus altijd de volledige gids van jouw variant. Alleen getraind en gekwalificeerd personeel mag aan de apparatuur werken.

1. **Plaats en ruimtes.** Binnen of buiten, maar beschut tegen zon, regen, stilstaand water, sneeuw en stof. Niet in brandgevaarlijke of explosieve ruimtes, niet binnen bereik van kinderen, minstens 500 m van corrosiebronnen. Binnen: ventileren, de ruimte mag maximaal 3 graden opwarmen. De tekening vraagt minstens 300 mm boven, 200 mm opzij, 400 mm onder, 700 mm voor en 2 m tot een warmtebron van 60 graden.
2. **Controle vooraf.** Paklijst nalopen, PBM en gereedschap controleren en kijken of de vooraf aangedraaide schroeven nog kloppen: hun streepmarkeringen moeten op een lijn liggen.
3. **Montage.** Wandmontage, horizontaal, op een niet-brandbare, draagkrachtige, vlakke ondergrond zonder leidingen of kabels in de boorlijn. De stappen staan als tekening in de gids. Bij HomePro TP en TP-L kan een zelf aangeleverde automaat voor omvormer 2 erbij.
4. **Kabels en klemmen.** Deur open, kabels door de wartels, aansluiten op de labels (GRID, INV, BACKUP, X1, SMART-PORT, COM). Bij HomePro SP kies je kabelinvoer onder of achter (achter: gat waterdicht maken). De gids geeft per klem de te reserveren kabellengte. Verwijder geen gereserveerde doorvoergaten.
5. **Net.** Kabel op QF1, L, N en PE in volgorde (bij 3-fase L1, L2, L3, N, PE). Meet later de spanning op QF1: die moet binnen het lokaal toegestane bereik liggen.
6. **Huis en back-up.** Back-upgroepen op de back-uppoort, niet-back-upgroepen op klem X1 (Home, HomePro SP).
7. **Generator en slimme belastingen.** Droog contact DO3 voor de generatorstart, op NO/COM of NC/COM al naargelang het startgedrag. DO2 meldt de generatorcontactor terug, DO1 de netschakelaar. DI2 is voor een externe ATS: lage impedantie (kortsluiting) betekent net, hoge (open) betekent generator. Bij Home en HomePro SP is DI1 de terugmelding van de bypass-schakelaar, bij SP-F, TP en TP-L een noodstopingang.
8. **Omvormer met PV en batterij.** Per omvormerpoort een eigen automaat. Bij HomePro SP slechts een van QF3 en QF4. De kabeldoorsnede volgt uit het omvormervermogen.
9. **Communicatie en sensor.** RJ45 naar de omvormer (FE1) en naar EV-lader, router of extra omvormer (FE2): afgeschermd getwist, 8-aderig, maximaal 100 m per kabel. DI/DO: tweeaderig afgeschermd, 0,2 tot 1,5 mm2. De sensor: zie de documenten van de sensor.
10. **Aarding.** Zie hieronder.
11. **Controle en dichtmaken.** Apparaat stevig geplaatst, alle kabels compleet en juist, klemmen zonder speling, geen bramen of restafval. Daarna het binnenpaneel of de beschermkap plaatsen.

### Aarding

Is het apparaat **betrouwbaar geaard**, dan **moet** de functionele aardingskabel worden aangesloten en gaat GND naar de koperen aardrail. Is dat niet zo, dan sluit je hem niet aan. Reden: in off-grid stand koppelt een intern relais de N-draad aan de functionele aarding, zodat er een eigen aardsysteem ontstaat waarin de lekstroom- en overstroombeveiliging kunnen afschakelen.

!!! gevaar Aarding eerst
Bij het aansluiten komt de aardingskabel als eerste, bij het verwijderen of vervangen als laatste. In de gids komt de aarding (5.3 of 5.4) dan ook vóór de hoofdkabels.
!!!`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling',
      tekst: `Elke gids sluit af met hoofdstuk 6: "Inschakelen" (Home en HomePro SP) of "De apparatuur inschakelen" (SP-F, TP, TP-L). Het draait om een vaste volgorde. Schakel een automaat nooit in als er geen apparaat op is aangesloten.

| Variant | Volgorde |
|---|---|
| Home SP 12K | QF1 (net), QF2 of QF3 (omvormer), QF4 (backup), deur dicht |
| Home TP 30K | QF1 (net), QF2 (omvormer), QF3 (backup), deur dicht |
| HomePro SP | QF1 (net), QF3 of QF4 (omvormer, wachten tot die aan is), QF2 (generator of slim), QF5 (backup) |
| HomePro SP-F | QF5 (overspanningsbeveiliging), QF1, QF3 (omvormer 1), wachten, QF2 (slim), QF4 (backup) |
| HomePro TP | QF5 (overspanningsbeveiliging), QF1, QF3 (omvormer 1), eventueel omvormer 2, wachten, QF2 (slim), QF4 (backup) |
| HomePro TP-L | QF4 (overspanningsbeveiliging), QF1, QF2 (omvormer 1), eventueel omvormer 2, wachten, QF3 (backup) |

De nummers zijn de labels op de automaten in de kast en verschillen per variant. Gebruik dus de gids van jouw type.

### Wat altijd geldt

1. Zet eerst de voorste schakelaar van de apparatuur aan.
2. Bypass QS1 blijft uit.
3. Meet de spanning op QF1 voor je het binnenpaneel plaatst.
4. **Voer na elke bedradingswijziging een bedradingscontrole uit in de mobiele app**, voor je verdergaat.
5. Sluit de deur. Bij SP-F, TP en TP-L vergrendel je ook de zijpanelen met de bijgeleverde sleutel.

Instellingen in de app, zoals prioriteiten, staan niet in deze gidsen. Ze eindigen bij het inschakelen.`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid en let op',
      tekst: `De **Belangrijke informatie** (16 pagina's) is voor alle zes varianten vrijwel identiek. Hij gebruikt vier tekens: gevaar, waarschuwing, wees voorzichtig en informatie. Dit zijn de punten die de documenten als kritiek behandelen.

!!! gevaar Werk niet onder spanning
Voer geen handeling uit terwijl de apparatuur is ingeschakeld: niet bij installeren, bedraden of onderdelen vervangen. Zorg dat alle voedingen uit zijn: de netschakelaar, de omvormerschakelaar en de schakelaar van de dieselgenerator. Voor je kabels aansluit of verwijdert, moeten ook de voorste en achterste schakelaars van de apparatuur en de eigen schakelaars zijn losgekoppeld.
!!!

!!! gevaar Aarding en spanning meten
Sluit eerst de aardingskabel aan en verwijder hem bij vervanging als laatste. Meet de spanning op het contactpunt voor je een aansluitklem aanraakt. Is de gateway niet geaard, dan is er risico op een elektrische schok.
!!!

- **Personeel.** Alleen opgeleid, gekwalificeerd personeel dat de lokale wetten, normen en de werking van het systeem kent.
- **PBM en weer.** Isolerende handschoenen en schoenen, helm, geen geleidende sieraden, isolatiegereedschap. Niet werken tijdens onweer, regen, sneeuw of storm.
- **Kabels.** Niet kruisen, geen beschadigde isolatie. Onder 0 graden wordt de mantel bros: kabels die lang onder 0 graden lagen, 24 uur ervoor naar een ruimte boven 0 graden brengen.
- **Onderhoud.** Schakel uit en wacht zolang het vertragingslabel op de apparatuur aangeeft.
- **Overspanningsbeveiliging.** Bij SP-F, TP en TP-L waarschuwt de gids dat een uitgeschakelde beveiliging tot schade aan huishoudelijke verbruikers en de gateway kan leiden.
- **Transport en opslag.** Niet kantelen, maximaal 15 graden helling in de verpakking en 10 graden uitgepakt, opslag van -40 tot 70 graden (20 tot 30 aanbevolen).
- **Ladders en boren.** Alleen na instructie, houten of glasvezel ladders. Bij boren veiligheidsbril en handschoenen, nooit in de apparatuur boren.
- **Aansprakelijkheid.** De fabrikant sluit die uit bij onder meer afwijking van normen, verkeerde kabels en wijzigingen aan de software.

De Nederlandse procedure (de vijf stappen, NEN 3140) noemen deze documenten niet. Neem zelf mee dat het huis met een batterij ook onder spanning kan staan als het net weg is.`
    },
    {
      id: 'alarmen-en-storingen',
      kop: 'Alarmen en storingen',
      tekst: `De **Lijst van alarmeringen** (23 pagina's, versie 05 van 24/10/2025) is voor alle zes varianten dezelfde. Het is een lange tabel voor het hele Sigenergy-systeem, dus je moet er gericht in zoeken.

### Zo is hij opgebouwd

Elke regel heeft zes kolommen: **Foutcode**, **Foutnaam**, **ID**, **ID-naam**, **Oorzaak van de fout** en **Aanbeveling voor reparatie**. Een foutcode heeft een of meer ID's, deelfouten onder dezelfde naam. De aanbeveling geeft genummerde stappen.

### Waar kijk je

De lijst geeft zelf geen categorienamen. Aan de foutnamen zie je blokken van codes:

- **1001 tot 1031**: omvormer en PV-kant. 1028 tot 1031 gaan over een *ingebouwde* Gateway.
- **2001 tot 2304**: batterij en energieopslag.
- **3001 tot 3019**: lijkt de gateway zelf te betreffen: netfasevolgorde (3006), netfaseverlies (3008), noodstop (3013), bypass-schakelaar open of aan (3014 en 3015), contactorspoel (3016), kastdeur open (3017) en frame-stroomonderbreker (3018 en 3019).
- **4001 tot 4006**: communicatie (gateway, meter, stroomsensor), bekabeling van meter of sensor en overschrijding van het netvoedingsvermogen, plus meldingen die ik niet kon plaatsen.
- **5001 tot 5106**: lijkt EV-lader te zijn.

Controleer de exacte codes in de lijst zelf.

### Wat je in de aanbevelingen terugziet

Vaak: eerst een stand-by of uitschakelinstructie via de app, de netschakelaar losmaken, enkele minuten wachten, herstellen en inschakelen. Blijft de fout, dan meld je hem via de mySigen-app onder Support en troubleshooting of neem je contact op met Sigenergy. Een dieselgenerator heet in de lijst soms "oliegenerator" of "oliemotor".

!!! kern Zo gebruik je de lijst
Noteer bij een melding foutcode en ID uit de app, zoek die op in de lijst en volg de stappen in de kolom Aanbeveling.
!!!`
    },
    {
      id: 'niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat',
      tekst: `Dit ontbreekt in de documenten die ik heb gelezen:

- Nominale stroom van Home SP 12K, Home TP 30K en HomePro TP-L, en het gewicht van Home en TP-L.
- Wat "Home", "HomePro", "F" en "L" betekenen.
- Wanneer je de bypass-schakelaar QS1 gebruikt.
- Hoe je back-up met prioriteit instelt (dat zit in de app) en hoe de stroomsensor op de gateway wordt aangesloten.
- De brochure (IP55, 695 mm hoog) en de gidsen (IP54, 650 mm hoog) noemen niet dezelfde waarden voor HomePro.
- Bij de generatorcontacten zeggen in SP-F, TP en TP-L beide regels "open". Bij Home en HomePro SP staat "open" en "gesloten". Lees de tabel zelf na.`
    }
  ],

  handleidingRefs: [
    { doc: 'bi', hoofdstuk: 'Overzicht', paginas: '5', onderwerp: 'Doelgroep en de betekenis van de tekens gevaar, waarschuwing, wees voorzichtig en informatie' },
    { doc: 'bi', hoofdstuk: '1 Algemene vereisten', paginas: '6-7', onderwerp: 'Situaties waarin de fabrikant niet aansprakelijk is' },
    { doc: 'bi', hoofdstuk: '2 Vereisten personeel', paginas: '8', onderwerp: 'Wie er aan de apparatuur mag werken' },
    { doc: 'bi', hoofdstuk: '3 Vereisten afhandeling en transport', paginas: '9', onderwerp: 'Verplaatsen, hellingshoek en persoonlijke bescherming' },
    { doc: 'bi', hoofdstuk: '4 Vereisten opslag', paginas: '10', onderwerp: 'Opslagtemperatuur (-40 tot 70 graden) en vochtigheid' },
    { doc: 'bi', hoofdstuk: '5.1 Routine vereisten', paginas: '11-12', onderwerp: 'Niet onder spanning werken, PBM, aardingskabel eerst aansluiten en als laatste verwijderen' },
    { doc: 'bi', hoofdstuk: '5.2 Installatie apparatuur', paginas: '13-14', onderwerp: 'Schroeven controleren, veiligheid van ladders en boren' },
    { doc: 'bi', hoofdstuk: '5.3 Kabelverbinding', paginas: '15', onderwerp: 'Kabels niet kruisen, kou en 24 uur acclimatiseren' },
    { doc: 'bi', hoofdstuk: '5.4 Onderhoud en vervanging van apparatuur', paginas: '16', onderwerp: 'Uitschakelen en het vertragingslabel afwachten' },
    { doc: 'ig-home-sp', hoofdstuk: '1 Productbeschrijving', paginas: '2-3', onderwerp: 'Home SP 12K: afmetingen, poorten en onderdelen (QS1, KM1, QF1 tot QF4, X1)' },
    { doc: 'ig-home-sp', hoofdstuk: '2 Inspecties voor installatie', paginas: '4-5', onderwerp: 'Home SP 12K: PBM, gereedschap en zelf aan te leveren kabels (maximaal 12,0 kW aan omvormers)' },
    { doc: 'ig-home-sp', hoofdstuk: '5 Kabelaansluiting', paginas: '10-16', onderwerp: 'Home SP 12K: doorvoer, aarding, net, omvormer, back-up, niet-back-up, communicatiepoorten, controle' },
    { doc: 'ig-home-sp', hoofdstuk: '6 Inschakelen', paginas: '17', onderwerp: 'Home SP 12K: volgorde van inschakelen' },
    { doc: 'ig-home-tp', hoofdstuk: '2 Inspecties voor installatie', paginas: '4-5', onderwerp: 'Home TP 30K: kabels per omvormervermogen (5 tot 30 kW), vijfaderige kabels' },
    { doc: 'ig-home-tp', hoofdstuk: '5 Kabelaansluiting', paginas: '10-16', onderwerp: 'Home TP 30K: aansluiten van net, omvormer, back-up en niet-back-up' },
    { doc: 'ig-home-tp', hoofdstuk: '6 Inschakelen', paginas: '17', onderwerp: 'Home TP 30K: volgorde van inschakelen' },
    { doc: 'ig-pro-sp', hoofdstuk: '1 Productbeschrijving', paginas: '2-3', onderwerp: 'HomePro SP: poorten, KM1 en KM2, overspanningsbeveiliging FC1 en het verschil tussen slimme en huishoudelijke belasting' },
    { doc: 'ig-pro-sp', hoofdstuk: '5 Kabelaansluiting', paginas: '10-15', onderwerp: 'HomePro SP: kabelinvoer onder (5.5) of achter (5.6), aarding, kabelverbindingen' },
    { doc: 'ig-pro-sp', hoofdstuk: '5.7 Communicatiepoortintroductie', paginas: '16-17', onderwerp: 'HomePro SP: FE, RS485, DI1, DI2 (ATS), DO1 tot DO3 (generator) en de controle na installatie' },
    { doc: 'ig-pro-sp', hoofdstuk: '6 Inschakelen', paginas: '19', onderwerp: 'HomePro SP: volgorde van inschakelen' },
    { doc: 'ig-pro-spf', hoofdstuk: '1 Productbeschrijving', paginas: '2-3', onderwerp: 'HomePro SP-F: tot drie omvormerpoorten, slimme poort en onderdelen' },
    { doc: 'ig-pro-spf', hoofdstuk: '2 Inspecties voor installatie', paginas: '4-5', onderwerp: 'HomePro SP-F: zelf aan te leveren kabels, netkabel 35 mm2' },
    { doc: 'ig-pro-spf', hoofdstuk: '5 Kabelaansluiting', paginas: '9-16', onderwerp: 'HomePro SP-F: routing, aarding, kabelverbindingen, communicatiepoorten en controle' },
    { doc: 'ig-pro-spf', hoofdstuk: '6 De apparatuur inschakelen', paginas: '19', onderwerp: 'HomePro SP-F: inschakelen inclusief overspanningsbeveiliging QF5' },
    { doc: 'ig-pro-tp', hoofdstuk: '1 Productbeschrijving', paginas: '2-3', onderwerp: 'HomePro TP: poorten INV1 en INV2, BACKUP, SMART-PORT, GRID, COM' },
    { doc: 'ig-pro-tp', hoofdstuk: '2 Controle voor installatie', paginas: '4-6', onderwerp: 'HomePro TP: kabels en tabel voor een zelf aangeleverde automaat voor omvormer 2 (C16 tot C63)' },
    { doc: 'ig-pro-tp', hoofdstuk: '4 Apparatuuropbouw', paginas: '9-11', onderwerp: 'HomePro TP: wandmontage en installatie van de stroomonderbreker (4.2)' },
    { doc: 'ig-pro-tp', hoofdstuk: '5 Kabelaansluiting', paginas: '12-19', onderwerp: 'HomePro TP: aansluiten, communicatiepoorten en controle' },
    { doc: 'ig-pro-tp', hoofdstuk: '6 De apparatuur inschakelen', paginas: '20', onderwerp: 'HomePro TP: volgorde van inschakelen' },
    { doc: 'ig-pro-tpl', hoofdstuk: '1 Productbeschrijving', paginas: '2-3', onderwerp: 'HomePro TP-L: poorten zonder SMART-PORT' },
    { doc: 'ig-pro-tpl', hoofdstuk: '5.4 Omvormer aansluiten / Backup voor de huishoudelijke belastingen / Elektriciteitsnet', paginas: '15', onderwerp: 'HomePro TP-L: gereserveerde kabellengtes per automaat' },
    { doc: 'ig-pro-tpl', hoofdstuk: '6 De apparatuur inschakelen', paginas: '20', onderwerp: 'HomePro TP-L: volgorde van inschakelen met QF4, QF1, QF2 en QF3' },
    { doc: 'alarm', hoofdstuk: 'Lijst van alarmeringen (tabel met foutcodes)', paginas: '2-23', onderwerp: 'Opbouw: Foutcode, Foutnaam, ID, Oorzaak, Aanbeveling voor reparatie' },
    { doc: 'alarm', hoofdstuk: 'Foutcodes 3001 tot 3019', paginas: '18-20', onderwerp: 'Fouten die bij de Gateway lijken te horen (netfase, noodstop, bypass, contactorspoel, kastdeur)' },
    { doc: 'alarm', hoofdstuk: 'Foutcodes 4001 tot 4006', paginas: '20-21', onderwerp: 'Communicatie en bekabeling van meter en stroomsensor, netvoedingsvermogen' },
    { doc: 'br', hoofdstuk: 'Sigen Energy Gateway HomePro', paginas: '14', onderwerp: 'Specificaties van HomePro SP, SP-F en TP' }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm01l03', 'm06l04', 'm03l05', 'm10l04'],

  zieOok: ['sigenergy-sigenstor-home', 'sigenergy-hybrid-omvormer', 'sigenergy-batterij', 'sigenergy-power-sensor', 'sigenergy-ev-ac-lader', 'sigenergy-ev-dc-module']
});
