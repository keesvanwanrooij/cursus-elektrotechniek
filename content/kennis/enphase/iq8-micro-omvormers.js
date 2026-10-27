/* ==========================================================================
   content/kennis/enphase/iq8-micro-omvormers.js
   Enphase IQ8-micro-omvormers (IQ8MC, IQ8AC, IQ8HC, IQ8X, IQ8M, IQ8+) en de
   nieuwe IQ9N, als een productfamilie. Samenvatting in eigen woorden.
   Paginanummers verwijzen naar de positie in de pdf (1 = eerste pagina).
   ========================================================================== */

KENNIS.addProduct({
  id: 'enphase-iq8-micro-omvormers',
  merk: 'enphase',
  slug: 'iq8-micro-omvormers',
  naam: 'Enphase IQ8-micro-omvormers en IQ9N',
  rol: 'omvormer',
  toepassingen: ['zonnepanelen', 'thuisbatterij'],
  korteOmschrijving: 'Kleine omvormers die onder elk zonnepaneel apart hangen en de gelijkspanning van dat ene paneel direct omzetten in 230 V wisselspanning. De familie bestaat uit IQ8+, IQ8M, IQ8MC, IQ8AC, IQ8HC, IQ8X en de nieuwe IQ9N. Ze werken alleen samen met de IQ Cable en een IQ Gateway.',

  varianten: {
    kop: ['Model', 'Max. AC-vermogen', 'Max. DC-vermogen paneel', 'MPP-spanning', 'Max. DC-spanning', 'Max. ingangsstroom', 'Max. per 20 A-groep (1-fase / 3-fase)', 'Max. per IQ Cable-sectie (1-fase / 3-fase)', 'Panelen'],
    rijen: [
      ['IQ8+ (IQ8PLUS-72-M-INT)', '300 VA (toegekend 290 W)', '440 W', '27 tot 45 V', '60 V', '12 A', '12 / 36', '8 / 21', '54 tot 72 cellen (108 tot 144 halve cellen)'],
      ['IQ8M (IQ8M-72-M-INT)', '330 VA (toegekend 325 W)', '480 W', '30 tot 45 V', '60 V', '12 A', '11 / 33', '8 / 18', '54 tot 72 cellen'],
      ['IQ8MC (IQ8MC-72-M-INT)', '330 W (325 VA)', '480 W', '25 tot 45 V', '60 V', '14 A', '11 / 33', '8 / 18', '54 tot 72 cellen'],
      ['IQ8AC (IQ8AC-72-M-INT)', '366 W (360 VA)', '530 W', '28 tot 45 V', '60 V', '14 A', '10 / 30', '8 / 18', '54 tot 72 cellen'],
      ['IQ8HC (IQ8HC-72-M-INT)', '384 W (380 VA)', '560 W', '29,5 tot 45 V', '60 V', '14 A', '9 / 27', '8 / 18', '54 tot 72 cellen'],
      ['IQ8X (IQ8X-80-M-INT)', '384 W (380 VA)', '560 W', '43 tot 60 V', '79,5 V', '10 A', '9 / 27', '8 / 18 (alleen in het schema)', '80 en 88 halve cellen, 96 cellen'],
      ['IQ9N (IQ9N-A-INT)', '427 VA (toegekend 427 W)', '600 W', '28 tot 45 V', '60 V', '16 A', '8 / 24', '7 / 15', 'Geen celaantal genoemd, "alle gangbare" panelen']
    ]
  },

  documenten: [
    { id: 'iom84', titel: 'Installatie- en bedieningshandleiding IQ8MC, IQ8AC, IQ8HC en IQ8X Microinverters (IOM-00084-4.0-NL, januari 2026)', soort: 'Installatie- en bedieningshandleiding', paginas: 44 },
    { id: 'qig251', titel: 'IQ8 Series Microinverters met geintegreerde MC4-connectoren, snelle installatiegids (140-00251-14, juni 2026)', soort: 'Snelle installatiegids', paginas: 14 },
    { id: 'mc4man', titel: 'Installatie- en bedieningshandleiding Enphase IQ8+ en IQ8M Microinverters (november 2022)', soort: 'Installatie- en bedieningshandleiding', paginas: 30 },
    { id: 'dsh446', titel: 'Gegevensblad IQ8 Series Microinverters IQ8MC, IQ8AC, IQ8HC (DSH-00446-4.0-NL)', soort: 'Gegevensblad', paginas: 6 },
    { id: 'dsh691', titel: 'Gegevensblad IQ8+ en IQ8M Microinverters (DSH-00691-3.0-NL)', soort: 'Gegevensblad', paginas: 6 },
    { id: 'iom142', titel: 'Installatie- en bedieningshandleiding IQ9N Microinverter (IOM-00142-1.0-NL, november 2025)', soort: 'Installatie- en bedieningshandleiding', paginas: 30 },
    { id: 'dsh754', titel: 'Gegevensblad IQ9N Microinverters (DSH-00754-1.0-NL)', soort: 'Gegevensblad', paginas: 6 },
    { id: 'schema', titel: 'IQ8MC, IQ8AC, IQ8HC Microinverter voorbeeld elektrisch schema, enkelfase en multifase', soort: 'Elektrisch schema', paginas: 2 },
    { id: 'ing56', titel: 'Wat u moet doen voordat u uw eerste IQ8 Series Microinverters systeem installeert (ING-00056-2.0-NL)', soort: 'Installatiegids', paginas: 4 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is een micro-omvormer',
      tekst: `Een **micro-omvormer** is een kleine omvormer voor **een zonnepaneel**. Hij hangt onder het paneel op het montagerek, het paneel steekt zijn twee DC-stekkers (MC4) erin, en er komt 230 V wisselspanning uit. Alle micro-omvormers op een rij hangen aan een gezamenlijke AC-kabel, bij Enphase de **IQ Cable**, die naar een aansluitdoos en daarna naar een eigen groep in de groepenkast loopt.

Elke micro-omvormer heeft zijn eigen **MPPT** (de regeling die het werkpunt zoekt waarop het paneel het meeste vermogen levert). Ligt er schaduw op een paneel, dan levert alleen dat paneel minder. Stringberekeningen zijn niet nodig.

### Drie soorten omvormers naast elkaar

| | Micro-omvormer (Enphase IQ8) | Stringomvormer | Hybride omvormer (zoals Sigen Hybrid) |
|---|---|---|---|
| Waar zit hij | Onder elk paneel, op het dak | Een kast aan de muur, binnen of buiten | Een kast aan de muur |
| Wat gaat erin | Een paneel | Een of meer strings: panelen in serie | Strings van panelen plus de batterij, beide op DC |
| DC-spanning op het dak | Per paneel, maximaal 60 V (IQ8X 79,5 V) | Honderden volts per string | Honderden volts; Sigen Hybrid tot 600 V (1-fase) of 1100 V (3-fase) |
| Lange DC-kabels door het huis | Nee | Ja, van dak naar omvormer | Ja |
| Batterij | Apart, op de AC-kant (IQ Battery) | Meestal niet | Direct op de DC-kant |
| Schaduw op een paneel | Alleen dat paneel levert minder | Kan de hele string remmen | Kan de string remmen |

De kolommen string- en hybride omvormer zijn **algemene vakkennis**, aangevuld met de waarden van de Sigenergy-pagina. Zie les 10.1 voor het grote plaatje van een PV-installatie.

!!! kern Waarom dit voor jou uitmaakt
Vanaf het dak loopt alleen **wisselspanning** naar binnen. De gelijkspanning blijft op de korte kabel tussen paneel en micro-omvormer. Volgens de handleiding valt daarmee het risico van gevaarlijk hoge gelijkspanning weg. Ongevaarlijk is de DC-kant niet, zie Veiligheid.
!!!

!!! info Als je Sigenergy al kent
De Sigen Hybrid is een omvormer voor het hele huis: strings tot 600 V (SP2) of 1100 V (TP2) gaan erin en de batterij hangt via de SigenStor BC aan de DC-kant. Bij Enphase heeft elk paneel zijn eigen omvormer en is alles al op het dak wisselspanning. Ook de batterij is AC-gekoppeld: volgens het gegevensblad van de IQ Gateway zitten in een IQ Battery 5P zes eigen micro-omvormers. Er is geen centrale omvormer en geen DC-schakelaar, maar je hebt altijd een IQ Gateway nodig voor de regie.
!!!`
    },
    {
      id: 'varianten',
      kop: 'De familie en hoe je kiest',
      tekst: `De tabel bovenaan zet de zeven modellen naast elkaar. De waarden komen uit de gegevensbladen (IQ8MC, AC, HC, IQ8+ en IQ8M, IQ9N) en voor de IQ8X uit hoofdstuk 7.4 van de handleiding, want de IQ8X staat niet in het gegevensblad.

### De keuze in drie vragen

1. **Hoeveel cellen heeft het paneel?** Panelen van 54 tot 72 cellen (of 108 tot 144 halve cellen) passen op IQ8+, IQ8M, IQ8MC, IQ8AC en IQ8HC. Voor panelen met 80 of 88 halve cellen of 96 cellen is er de **IQ8X**, met een hoger spanningsbereik (MPP 43 tot 60 V).
2. **Hoe sterk is het paneel?** Hoe zwaarder het paneel, hoe zwaarder het model: IQ8MC (480 W DC), IQ8AC (530 W), IQ8HC (560 W), IQ9N (600 W). Een hard maximum per paneel is er niet, er is "geen opgelegde DC/AC-verhouding". Een te zwaar paneel geeft wel extra **clipping**: het vermogen boven wat de omvormer kan leveren gaat verloren.
3. **Is het paneel elektrisch compatibel?** De nullastspanning (Voc) van het paneel mag de maximale ingangsspanning nooit overschrijden, ook niet bij de laagste temperatuur. De kortsluitstroom (Isc) van het paneel mag maximaal 20 A zijn (IQ8X: 13 A). Enphase verwijst steeds naar de **compatibiliteitscalculator** op de website. Een incompatibel paneel laat de garantie vervallen.

IQ8+ en IQ8M zijn de oudere modellen (handleiding uit 2022, met oude namen als Enlighten). De **IQ9N** is nieuw (november 2025) en het sterkst, dus er passen er minder op een groep.

### Mengen met oudere systemen

Bij uitbreiden gelden vaste regels. IQ8 mag bij een bestaand IQ7-systeem op dezelfde gateway, maar niet andersom. IQ9N mag bij IQ7 of IQ8, maar ook niet andersom. In een gemengd systeem werkt de IQ8-functie **Sunlight Jump Start** niet (wat die precies doet, leggen de bronnen niet uit), behalve bij de combinatie IQ8 met IQ9N. Met batterij mag het piekvermogen van de panelen niet meer zijn dan 150 % van het vermogen van de batterijen (IQ8 met IQ9N: 200 %). Anders moet er PV-afschakeling komen voor de stand zonder net.`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Hoe het systeem in elkaar zit',
      tekst: `Volg de stroom van het dak naar de meterkast. Het voorbeeldschema van Enphase (eenfase en meerfase) tekent het zo:

1. **Paneel naar micro-omvormer.** Een korte DC-kabel met Staubli MC4-stekkers. Volgens de IQ9N-handleiding en de snelle installatiegids maximaal 3 m.
2. **Micro-omvormer naar IQ Cable.** De AC-stekker klikt op een aftakking van de IQ Cable: 2 x 2,5 mm2 (L, N) voor eenfase of 4 x 2,5 mm2 (L1, L2, L3, N) voor meerfase. Het open einde krijgt een **IQ Terminator**.
3. **IQ Cable naar aansluitdoos.** Een aansluitdoos of AC-scheider bij het rek. Daarvandaan gaat een gewone kabel (L, N, PE of 5-aderig) naar de groepenkast.
4. **Groepenkast.** Per IQ Cable een **installatieautomaat van 20 A, B-karakteristiek** ("MCB-productie"), daarvoor een **aardlekschakelaar 40 A, 30 mA** ("RCD-productie"), en in het schema ook het **IQ Relay**.
5. **IQ Gateway Metered.** In het schema op een eigen automaat van 6 A, met een stroomtransformator op de productiekabel en een op de netaansluiting. De gateway praat met de micro-omvormers over de stroomkabels zelf (powerline communicatie, PLC).

### Wat doet het IQ Relay

Het IQ Relay is een fysiek ontkoppelrelais met netbeveiliging; de netconformiteit volgens EN 50549-1 geldt **met** IQ Relay. Het meerfasige IQ Relay koppelt ook het PLC-signaal tussen de fasen. Zonder IQ Relay heb je bij driefase een fasekoppelaar nodig (Legrand LPC-01). Of het IQ Relay in Nederland verplicht is, staat er niet in ("niet in alle landen"); het schema tekent hem wel.

### Batterij en noodstroom

Een IQ Battery hangt ook aan de AC-kant, op een eigen groep. Noodstroom (back-up bij netuitval) kan alleen met de **IQ System Controller 3 INT** en IQ Battery 5P. Zie de pagina's van die producten.

!!! kern De gateway is geen optie
Zonder IQ Gateway en het juiste **netprofiel** (de netinstellingen voor het land) produceren IQ8-micro-omvormers niets. De IQ9N controleert periodiek of er een gateway is en kan zonder gateway stoppen. Ook de 25 jaar garantie geldt alleen met een gateway die aan internet hangt.
!!!`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid',
      tekst: `### Lage DC-spanning, maar niet spanningsloos

Per paneel is de DC-spanning laag: maximaal 60 V (IQ8X 79,5 V), tegenover honderden volts bij een string. Toch waarschuwen alle handleidingen dat de **DC-geleiders ongeaard zijn en onder spanning staan** zodra er licht op het paneel valt. Er is geen schakelaar die dat uitzet. Het IQ9N-gegevensblad deelt de DC-kant in als spanningsklasse **DVC B** (AC-kant DVC C) en legt niet uit wat dat in de praktijk betekent. De gegevensbladen noemen "rapid shutdown" voor brandveiligheid, maar leggen ook niet uit hoe dat werkt.

!!! gevaar Nooit onder belasting loskoppelen
Maak de AC-groep altijd spanningsloos voor onderhoud en koppel **DC- of AC-stekkers nooit los onder belasting**. Een stekker die je onder stroom lostrekt kan een vlamboog geven (algemene vakkennis, zie les 10.2). De handleiding geeft voor het loskoppelen een vaste volgorde, zie Storingen.
!!!

!!! gevaar Losse AC-stekkers staan onder spanning
Elke ongebruikte aftakking op de IQ Cable staat onder spanning zodra het systeem aan staat. Zet er altijd een **IQ Sealing Cap** op. Installeer de **IQ Terminator nooit** als er spanning op staat. Laat geen stekker lang open liggen.
!!!

- **Met IQ System Controller 3 en IQ Battery 5P** (IQ9N-handleiding): zet de systeemuitschakelaar op UIT, wacht minstens een minuut en meet met een multimeter de AC-spanning op PV, IQ Battery, net en belasting. Pas als er nergens spanning is, ga je verder. Batterij en panelen kunnen het huis voeden terwijl het net weg is. Zie les 1.3 voor de vijf stappen.
- **Hete behuizing.** De behuizing is het koellichaam. Normaal 20 graden boven de omgeving, in extreme gevallen 90 graden (IQ8-handleidingen) of 100 graden (IQ9N en de snelle gids).
- **Alleen deskundig personeel.** Niet openmaken of repareren, dan vervalt de garantie. Geen slimme panelen, windturbines, DC-generatoren of andere batterijen op de ingang.
- **Galvanische scheiding.** Een hoogfrequente transformator scheidt DC en AC. Dubbel geisoleerd, klasse II, met aardlekbeveiliging (GFP); de paneelkabels moeten daarom het label PV Wire of PV Cable hebben.
- **Pas inschakelen** als de installatie klaar is en de netbeheerder akkoord heeft gegeven.`
    },
    {
      id: 'montage',
      kop: 'Plaatsing en montage',
      tekst: `De stappen staan in hoofdstuk 4 van de IQ8-handleiding (pagina 16 tot 23) en hoofdstuk 4 van de IQ9N-handleiding (pagina 14 tot 16).

1. **Controleer de productiedatum.** De installatie moet binnen een jaar na productie zijn. De datum zit in het serienummer (jaar en werkweek).
2. **Leg de IQ Cable** zo dat elke aftakking bij het midden van een paneel uitkomt. Aftakafstand 1,3 m (staand) of 2,0 en 2,3 m (liggend). IQ9N: minstens 15 cm over na de laatste aftakking.
3. **Monteer de micro-omvormer onder het paneel**, beschut tegen regen, zon en UV. Horizontaal met de beugel naar boven (naar de achterkant van het paneel) of verticaal. Nooit ondersteboven en nooit met de stekkers naar boven.
4. **Vrije ruimte:** minimaal 19 mm tussen dak en micro-omvormer, 13 mm tussen achterkant paneel en bovenkant micro-omvormer. Verticaal: meer dan 300 mm vanaf de rand van het paneel.
5. **Aanhaalmomenten:** 5 Nm voor 6 mm bevestigingsmateriaal, 9 Nm voor 8 mm. Niet te vast.
6. **Installatiekaart.** Plak het serienummerlabel van elke micro-omvormer op de papieren kaart op zijn plek, later ook die van gateway en batterij.
7. **Kabelbeheer.** Bevestig de IQ Cable minstens elke 300 mm aan het rek. Lussen niet kleiner dan 120 mm diameter en niet op het dak. DC-kabel: buigradius minimaal 8 keer de buitendiameter, niet om de micro-omvormer wikkelen.
8. **Aansluiten.** Klik de micro-omvormer op de IQ Cable (je hoort een klik). Dop ongebruikte aftakkingen af. Een dop of stekker haal je alleen los met de **IQ Disconnect Tool**.
9. **Panelen aansluiten** en daarna pas het paneel boven de micro-omvormer monteren. Bij gelijkspanning knippert de led zes keer groen.`
    },
    {
      id: 'elektrisch',
      kop: 'Elektrische aansluiting en beveiliging',
      tekst: `### Hoeveel micro-omvormers per groep

De tabel bovenaan geeft per model het maximum per groep van 20 A (bijvoorbeeld IQ8HC: 9 eenfase, 27 driefase) en per stuk IQ Cable. De gegevensbladen rekenen met **16 A per fase** (IQ Cable 2,5 mm2, veiligheidsfactor 1,25). Beveilig elke groep met maximaal 20 A; de 25 A-variant uit de handleidingen is **niet beschikbaar in Europa**. Mix je modellen op een groep, dan blijft de totale uitgangsstroom onder 16 A. **Centraal voeden** (de groep in het midden aansluiten, twee helften onder een automaat) is de beste werkwijze. Bij kans op hoge netspanning kan het nodig zijn het aantal per IQ Cable tot 50 % te verlagen.

### Spanningsstijging

Een omvormer die teruglevert duwt de spanning omhoog (algemene vakkennis, zie les 4.2). Enphase adviseert minder dan 2 % stijging van de verste micro-omvormer tot de groepenkast, en hooguit 1 % op de kabel tussen IQ Cable en groepenkast. Het schema noemt 6 mm2 als aanbevolen minimum voor die kabel.

### Aansluiten in de doos

- **Kleuren IQ Cable:** bruin L1, zwart L2, grijs L3, blauw N. **Blauw alleen voor N**: een verkeerde aansluiting maakt alle aangesloten micro-omvormers onherstelbaar kapot.
- De meerfasige IQ Cable wisselt de fasen intern per micro-omvormer. Laat zo min mogelijk aftakkingen leeg, anders ontstaat fase-onbalans.
- **IQ Terminator** (open einde): eenfase 13 mm mantel eraf, meerfase 20 mm. Alleen de zeskantmoer draaien, eenfase 7 Nm. Eenmalig te gebruiken.
- Meet voor het inschakelen de netspanning: eenfase 184 tot 276 V (L-N), driefase 319 tot 478 V (L-L).
- Controleer bij IQ9N en de snelle gids voor het inschakelen de **impedantie** tussen alle geleiders (L-L en L-N) om verkeerde bedrading uit te sluiten.

### Aardlek, overspanning en vereffening

Het schema zegt dat waar een aardlekschakelaar verplicht is, een **type AC** volstaat, vanwege de galvanische scheiding. Neem dat niet zomaar over: in les 6.3 leer je dat type AC verouderd is en dat type A de standaard is voor woninginstallaties. Volg de Nederlandse regels en de eisen van de groepenkast, en kies bij twijfel het strengere type. Overspanningsbeveiliging (SPD) en aardlek volgens de lokale normen; de micro-omvormers hebben zelf al overspanningsbeveiliging. Vereffen de panelframes, het rek en de metalen montagebeugels volgens de lokale normen (les 3.5).`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling met de app',
      tekst: `Dit loopt via de **Enphase Installer App** en de IQ Gateway. Het gidsje ING-00056 zet de valkuilen voor een eerste IQ8-systeem op een rij.

1. **Op kantoor:** installeer de nieuwste Installer App (oranje logo) en log in met internet. Download in de app de IQ Gateway-software (minimaal 8.03.5263).
2. **Ter plaatse:** zet de nieuwe software op de gateway. Dat duurt tot 30 minuten; je telefoon blijft in AP-modus binnen 3 tot 5 m van de gateway. Begin er zo vroeg mogelijk mee.
3. **Systeem registreren en scannen.** Scan de barcodes van de micro-omvormers met de app. **Gebruik niet de PLC-scanknop op de gateway.**
4. **Netprofiel instellen** en de apparaten inrichten ("bevoorrading" of "provisioning").
5. **Groep inschakelen.** Eerst de automaat van de groep, dan de hoofdschakelaar. De IQ8 begint pas na het netprofiel te produceren: 10 tot 15 minuten na het inrichten (ING-00056), of 20 tot 30 minuten voor vol vermogen (snelle gids en IQ9N-handleiding).
6. **Status controleren** van elke micro-omvormer in de app, via AP-modus.

### De led

| Led | Betekenis |
|---|---|
| Knippert groen | Normaal, net in orde en contact met de gateway (pas na het inrichten) |
| Knippert oranje | Net in orde, geen contact met de gateway |
| Knippert rood | Geen net of net buiten de grenzen |
| Brandt rood | DC-weerstand laag, de micro-omvormer staat uit |

Na het aansluiten van het paneel brandt de led eerst ongeveer zes seconden groen, blijft twee minuten branden en knippert dan zes keer groen. Daarna knippert hij rood zolang de groep nog uit staat.`
    },
    {
      id: 'storingen',
      kop: 'Storingen en vervangen',
      tekst: `### DC-weerstand laag

De micro-omvormer meet de isolatieweerstand van PV+ en PV- naar aarde. Komt een van beide onder **ongeveer 7 kilo-ohm** (normaal: megaohms), dan stopt hij en brandt de led rood. Oorzaak: slechte isolatie van paneel, kabels of stekkers, of vocht. De fout blijft staan tot hij gewist wordt, en dat kan alleen via de gateway: Enphase Installer Platform, Gebeurtenissen, serienummer, Taken, "Wis GFI". Over isolatieweerstand meten: les 7.4.

### Een micro-omvormer die niet werkt

De handleiding geeft 14 stappen in vaste volgorde (IQ8 pagina 25 en 26): automaten en netspanning controleren, spanning meten op de IQ Cable-aftakking, stekkers nakijken (ook op knaagdierschade), DC opnieuw aansluiten en de led volgen, en ten slotte de DC-kabels **verwisselen met een goed werkend buurpaneel**. Verhuist de fout mee, dan is het paneel kapot; blijft hij, dan de micro-omvormer.

### Loskoppelen in deze volgorde

1. AC-groep uit.
2. Micro-omvormer met de IQ Disconnect Tool van de IQ Cable halen.
3. Paneel afdekken met een ondoorzichtig kleed.
4. Met een stroomtang controleren dat er **geen DC-stroom** meer loopt. Let op: de meeste tangen moet je eerst op nul zetten.
5. DC-stekkers losmaken met de Disconnect Tool en de micro-omvormer van het rek halen.

Vervangen gaat alleen na een RMA-nummer van Enphase. Daarna haal je in de app het oude serienummer uit de gateway, scan je het nieuwe en richt je het apparaat opnieuw in. Andere fouten dan DC-weerstand laag meldt de micro-omvormer aan de gateway: zie de IQ Gateway-pagina.`
    },
    {
      id: 'niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat',
      tekst: `- Of het IQ Relay in Nederland verplicht is. De bladen zeggen alleen "niet in alle landen".
- Hoe "rapid shutdown" werkt, wat DVC B voor aanraakveiligheid betekent en wat Sunlight Jump Start doet.
- Gegevensblad van de IQ8X: die staat alleen in de handleiding.
- Hoe je de vijf stappen van de NEN 3140 toepast op een dak met panelen. Dat is je eigen werk, zie les 1.3 en 10.2.

### Waar de bronnen elkaar tegenspreken

- **Hoogste temperatuur behuizing:** 90 graden (IQ8-handleidingen) tegenover 100 graden (IQ9N, snelle gids). Ga uit van 100.
- **Kabelbevestiging:** elke 300 mm (nieuwe documenten) tegenover maximaal 1,8 m (IQ8+/IQ8M-handleiding uit 2022). Volg de nieuwe.
- **Gateway-capaciteit:** 300 micro-omvormers en 20 batterijen (IQ8-handleiding) tegenover 600 en 39 (IQ8+/IQ8M-handleiding, oudere Envoy-S).
- **Tijd tot productie:** 6 minuten (IQ8-handleiding), 10 tot 15 minuten (ING-00056), 20 tot 30 minuten voor vol vermogen (snelle gids).
- De IQ8-handleiding noemt vol vermogen "tot 60" zonder eenheid, de specificaties zeggen -40 tot 65 graden.
- De veiligheidstekst van de snelle gids noemt 25 A meerfase, de tabel zegt dat die optie in Europa niet bestaat.`
    }
  ],

  handleidingRefs: [
    { doc: 'iom84', hoofdstuk: 'Belangrijke veiligheidsinformatie', paginas: '5-9', onderwerp: 'Ongeaarde DC-geleiders, nooit onder belasting loskoppelen, hete behuizing, IQ Cable en DC-kabel' },
    { doc: 'iom84', hoofdstuk: '1 Het Enphase IQ System', paginas: '10-11', onderwerp: 'Onderdelen van het systeem, MPPT per paneel, lage DC-spanning' },
    { doc: 'iom84', hoofdstuk: '2.1 Compatibiliteit', paginas: '12-13', onderwerp: 'Panelen per model, MC4 van Staubli, mengen met IQ7, 150 %-regel' },
    { doc: 'iom84', hoofdstuk: '2.2 tot 2.6 Aarding, capaciteit, net, spanningsstijging, bliksem', paginas: '13-14', onderwerp: 'Aantal per groep, netspanningsbereik, minder dan 2 % stijging, centraal voeden' },
    { doc: 'iom84', hoofdstuk: '3 Benodigde onderdelen en gereedschap', paginas: '14-16', onderwerp: 'IQ Relay, fasekoppeling, IQ Cable-typen, Terminator, Sealing Caps' },
    { doc: 'iom84', hoofdstuk: '4.1 tot 4.9 Installatie', paginas: '16-22', onderwerp: 'IQ Cable leggen, montage, vrije ruimte, aanhaalmomenten, installatiekaart, Terminator, kleuren' },
    { doc: 'iom84', hoofdstuk: '4.10 en 4.11 Activeren en monitoring', paginas: '22-23', onderwerp: 'Inschakelen, led-betekenis, netprofiel' },
    { doc: 'iom84', hoofdstuk: '5.1 Status-led en DC-weerstand laag', paginas: '23-25', onderwerp: 'Led-werking, grens van 7 kilo-ohm, wissen in het Installer Platform' },
    { doc: 'iom84', hoofdstuk: '5.2 tot 5.4 Storing, loskoppelen, vervangen', paginas: '25-28', onderwerp: '14 stappen, volgorde van loskoppelen, serienummer vervangen' },
    { doc: 'iom84', hoofdstuk: '7.1 tot 7.4 Specificaties', paginas: '31-40', onderwerp: 'Specificaties IQ8MC, IQ8AC, IQ8HC en IQ8X' },
    { doc: 'iom84', hoofdstuk: '7.6 Elektrische schema\'s', paginas: '42-43', onderwerp: 'Voorbeeldschema eenfase en meerfase met automaten, aardlek en gateway' },
    { doc: 'qig251', hoofdstuk: '3 en 4 Voorbereiding en extra onderdelen', paginas: '4-6', onderwerp: 'Productiedatum, DC-kabel maximaal 3 m, tabel per groep, kleuren' },
    { doc: 'qig251', hoofdstuk: '5 tot 7 Installeren, ingebruikname, kabeleinde', paginas: '7-8', onderwerp: 'Korte installatievolgorde, led-tabel, 20 tot 30 minuten tot vol vermogen' },
    { doc: 'qig251', hoofdstuk: '8 Installatie en veiligheid', paginas: '9-10', onderwerp: 'Visueel overzicht, impedantiecontrole, buigradius, veiligheidsinstructies' },
    { doc: 'mc4man', hoofdstuk: '3 Planning voor de installatie', paginas: '10-11', onderwerp: 'IQ8+ en IQ8M: compatibiliteit, aarding, aantal per groep' },
    { doc: 'mc4man', hoofdstuk: '5 Installatie (stap 1 tot 10)', paginas: '13-18', onderwerp: 'IQ8+ en IQ8M: montage en aansluiten' },
    { doc: 'mc4man', hoofdstuk: '6 Probleemoplossing', paginas: '19-22', onderwerp: 'IQ8+ en IQ8M: led, lage DC-weerstand, loskoppelen en vervangen' },
    { doc: 'dsh446', hoofdstuk: 'Specificaties IQ8MC, IQ8AC, IQ8HC', paginas: '2-3', onderwerp: 'DC- en AC-gegevens, maximum per groep en per IQ Cable, 16 A per fase' },
    { doc: 'dsh446', hoofdstuk: 'Compatibiliteit met IQ7', paginas: '4', onderwerp: 'Regels voor mengen en de 150 %-grens' },
    { doc: 'dsh691', hoofdstuk: 'Specificaties IQ8+ en IQ8M', paginas: '2-3', onderwerp: 'DC- en AC-gegevens, maximum per groep en per IQ Cable' },
    { doc: 'iom142', hoofdstuk: '1.4 Veiligheidsinstructies', paginas: '6-9', onderwerp: 'IQ9N: veiligheid, behuizing tot 100 graden' },
    { doc: 'iom142', hoofdstuk: '2 Voorbereiding voor installatie', paginas: '9-12', onderwerp: 'IQ9N: gateway verplicht, mengen met IQ7 en IQ8, 8 per groep' },
    { doc: 'iom142', hoofdstuk: '4 en 5 Installeren en ingebruikname', paginas: '14-17', onderwerp: 'IQ9N: montage, impedantiecontrole, uitschakelen met System Controller 3' },
    { doc: 'iom142', hoofdstuk: '8 Probleemoplossing', paginas: '20-24', onderwerp: 'IQ9N: led, DC-weerstand laag, loskoppelen en vervangen' },
    { doc: 'iom142', hoofdstuk: '11 Elektrische schema\'s', paginas: '28-29', onderwerp: 'IQ9N: voorbeeldschema, 7 of 15 per IQ Cable-sectie' },
    { doc: 'dsh754', hoofdstuk: 'Specificaties IQ9N', paginas: '2-4', onderwerp: '427 VA, 600 W DC, DVC B, maximum per groep en per IQ Cable, mengen met IQ7 en IQ8' },
    { doc: 'schema', hoofdstuk: 'EN-IQ8-1PHN en EN-IQ8-3PHN', paginas: '1-2', onderwerp: 'Voorbeeldschema met 20 A B, aardlek 40 A 30 mA, type AC, IQ Relay en gateway' },
    { doc: 'ing56', hoofdstuk: '1 tot 3 Belangrijke informatie, op kantoor, ter plaatse', paginas: '3-4', onderwerp: 'Gateway-software bijwerken, niet de PLC-scanknop gebruiken, wachttijd' }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm01l03', 'm06l03', 'm04l02', 'm02l05', 'm07l04', 'm03l05'],

  zieOok: ['enphase-iq-gateway', 'enphase-iq-battery-5p', 'enphase-iq-system-controller-3', 'sigenergy-hybrid-omvormer']
});
