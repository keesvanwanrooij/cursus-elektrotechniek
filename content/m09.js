CURSUS.addModule({
  id: 'm09',
  nr: 9,
  deel: 2,
  titel: 'Warmtepomp, airco en cv-ketel',
  ondertitel: 'De elektrische kant van klimaatinstallaties.',
  niveau: 'Gemiddeld tot gevorderd',
  studietijd: 6,
  intro: 'Wat een warmtepomp, airco of cv-ketel elektrisch van de installatie vraagt: eigen groep, doorsnede, aardlektype, inschakelstroom en de scheiding tussen sterk- en zwakstroom.',
  leerdoelen: [
    'Uit de technische gegevens van een warmtepomp de elektrische eisen afleiden',
    'Een geschikte groep, doorsnede en karakteristiek bepalen voor een klimaatinstallatie',
    'Bepalen welk aardlektype nodig is bij een frequentiegeregelde compressor',
    'De voeding en communicatiekabel tussen binnen- en buitenunit correct uitvoeren',
    'Beoordelen of de bestaande aansluiting de extra belasting aankan'
  ],
  lessen: [

/* ------------------------------------------------------------------ 9.1 */
{
  id: 'm09l01',
  nr: '9.1',
  titel: 'Wat een warmtepomp elektrisch vraagt',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt uit een typeplaatje of datablad afleiden welk elektrisch vermogen en welke stroom je moet aanhouden.',
  videos: [
    { taal: 'nl', titel: 'Warmtepomp elektrisch aansluiten - uitleg', zoek: 'warmtepomp elektrisch aansluiten groep aardlek' },
    { taal: 'en', titel: 'Heat pump electrical requirements explained', zoek: 'heat pump electrical requirements breaker sizing' }
  ],
  tekst: `
## Opgenomen vermogen versus afgegeven warmte

Op de documentatie van een warmtepomp staan twee getallen die vaak worden verward:

**Afgegeven thermisch vermogen** - de warmte die het toestel aan de woning levert,
bijvoorbeeld 9 kW.

**Opgenomen elektrisch vermogen** - wat het toestel van jouw installatie vraagt,
bijvoorbeeld 3 kW.

Het verschil komt doordat een warmtepomp geen warmte máákt maar warmte **verplaatst**
van buiten naar binnen. De verhouding tussen beide heet de **COP** (Coefficient of
Performance) op een bepaald werkpunt, of de **SCOP** over een heel seizoen.

Voor jouw kabel en beveiliging telt uitsluitend het **opgenomen elektrisch vermogen**.
De 9 kW warmte is voor de installateur van de verwarming; de 3 kW elektrisch is voor jou.

!!! kern Lees het typeplaatje, niet de brochure
Op het toestel staat wat je nodig hebt: opgenomen vermogen, nominale stroom, maximale
stroom, aanbevolen beveiliging en of het toestel 1-fase of 3-fase is. Die gegevens zijn
leidend boven elke vuistregel, en boven wat de leverancier aan de telefoon zegt.
!!!

## Wat het opgenomen vermogen niet is

Er zijn drie situaties waarin de werkelijke stroom hoger is dan de nominale waarde:

**1. Inschakelstroom.** Het moment waarop de compressor start. Bij oudere, direct
startende compressoren loopt dat op tot een veelvoud van de bedrijfsstroom. Moderne
toestellen met een frequentieregelaar (inverter) starten zacht en hebben daar veel
minder last van - een van de belangrijkste redenen dat inverters de standaard zijn
geworden.

**2. Elektrisch bijverwarmingselement.** Veel warmtepompen hebben een elektrisch element
voor koude dagen, voor de tapwaterbereiding of voor de legionellacyclus. Dat element van
bijvoorbeeld 3 of 6 kW komt bovenop het compressorvermogen. Het maximale opgenomen
vermogen ligt daardoor fors hoger dan het nominale.

**3. Ontdooicyclus.** Bij een lucht-waterwarmtepomp vriest de buitenunit bij bepaalde
temperaturen aan en draait het proces tijdelijk om. Dat gaat gepaard met een afwijkend
verbruikspatroon.

Reken daarom altijd met de **maximale** opgenomen stroom uit de documentatie, niet met
het nominale bedrijfspunt.

## 1-fase of 3-fase

| | 1-fase | 3-fase |
|---|---|---|
| Typisch tot | ongeveer 5 à 7 kW opgenomen | daarboven |
| Voordeel | Eenvoudiger, past bij bestaande woningen | Lagere stroom per fase, minder spanningsdip bij starten |
| Aandachtspunt | Zware belasting op één fase | Faseverdeling in de kast opnieuw bekijken |

Bij een 1-fase warmtepomp op een woning met een 1×35 A-aansluiting wordt de
gelijktijdigheid al snel het knelpunt. Zie les 9.6.

## De vraag die je stelt vóórdat er iets besteld wordt

1. Wat is het maximale opgenomen vermogen, inclusief bijverwarming?
2. 1-fase of 3-fase, en welke aansluitwaarde heeft de woning?
3. Welke beveiliging en welk aardlektype schrijft de fabrikant voor?
4. Hoe lang wordt de leiding naar de buitenunit?
5. Is er ruimte in de groepenkast, en op welke fase?

Wie deze vijf vragen stelt vóór de levering, voorkomt de situatie waarin het toestel op
de stoep staat en de installatie het niet aankan.
`,
  checklist: [
    'Ik weet het verschil tussen afgegeven thermisch en opgenomen elektrisch vermogen',
    'Ik reken met de maximale opgenomen stroom, inclusief bijverwarming',
    'Ik lees de vereiste beveiliging van het typeplaatje en niet uit een vuistregel',
    'Ik stel de vijf vragen voordat er een toestel besteld wordt'
  ],
  bronnen: ['nieuw geschreven']
},

/* ------------------------------------------------------------------ 9.2 */
{
  id: 'm09l02',
  nr: '9.2',
  titel: 'Eigen groep, doorsnede en karakteristiek',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt de groep voor een klimaatinstallatie dimensioneren, rekening houdend met lengte en inschakelgedrag.',
  videos: [
    { taal: 'nl', titel: 'Kabeldoorsnede en beveiliging bepalen', zoek: 'kabeldoorsnede bepalen spanningsval berekenen NEN 1010' }
  ],
  tekst: `
## Altijd een eigen eindgroep

Een warmtepomp, airco of andere klimaatinstallatie krijgt een **eigen eindgroep**, om
drie redenen:

1. **Belasting** - het is een langdurige, forse en vaak continue belasting.
2. **Beschikbaarheid** - je wilt niet dat de verwarming uitvalt door een fout in de
   tuinverlichting. In de winter is dat geen ongemak maar mogelijk vorstschade.
3. **Diagnose** - bij storing wil je één circuit kunnen isoleren zonder de rest van de
   woning te betrekken.

Vaak is een eigen **aardlekautomaat** (RCBO) de betere keuze boven een gedeelde
aardlekschakelaar, om diezelfde redenen.

## Doorsnede bij een buitenunit

De buitenunit staat zelden naast de meterkast. Vijftien tot dertig meter is normaal, via
de kruipruimte, over zolder of om het huis heen. Dat maakt **spanningsval** relevant.

De redeneerketen:

1. Bepaal de maximale stroom uit de documentatie.
2. Bepaal de werkelijke kabellengte langs het tracé - niet hemelsbreed.
3. Kies een doorsnede die zowel de stroom kan voeren als de spanningsval binnen de
   perken houdt.
4. Controleer de installatiemethode: door isolatie of gebundeld met andere kabels
   verlaagt de belastbaarheid.
5. Controleer of de beveiliging past bij de gekozen doorsnede, en bij wat de fabrikant
   voorschrijft.

Voor een 1-fase warmtepomp van enkele kW over twintig meter kom je in de praktijk al
snel op 4 of 6 mm² uit, waar op grond van de stroom alleen 2,5 mm² had gekund. Die
extra doorsnede is geen overdaad maar volgt uit de lengte.

!!! kern Meet het tracé, schat het niet
De meest gemaakte fout bij buitenunits is de kabellengte onderschatten. Loop het tracé
fysiek af en tel de omwegen mee: door de kruipruimte, om de fundering heen, omhoog langs
de gevel. Een kabel die twintig meter leek en veertig meter blijkt, verandert de
berekening volledig.
!!!

## Kabeltype naar buiten

De kabel naar een buitenunit moet bestand zijn tegen de omgeving:

- **In de grond**: een grondkabel, op voldoende diepte en met een waarschuwingslint of
  beschermende afdekking erboven.
- **Langs de gevel**: uv-bestendig, of in een beschermbuis.
- **Doorvoeren**: waterdicht afgewerkt en met de doorvoer naar beneden aflopend, zodat
  er geen water naar binnen loopt.
- **Wartels**: passend bij de kabeldiameter, en aangedraaid - een te ruime wartel maakt
  van de IP-waarde een papieren belofte.

## Karakteristiek

De B-karakteristiek is de standaard voor woningcircuits. Bij toestellen met een
noemenswaardige inschakelstroom - direct startende compressoren, oudere
airco-installaties, sommige omvormers - is een **C-karakteristiek** nodig om
ongewenste afschakeling te voorkomen.

Let daarbij op het voorbehoud uit module 6.2: een C-automaat aan het einde van een lange
leiding kan bij een kortsluiting te traag afschakelen. Bij een lange leiding naar een
buitenunit is dat een reële situatie, en hoort er dus een controle van de
lusimpedantie bij.

De fabrikant geeft doorgaans expliciet aan welke beveiliging vereist is. Die opgave is
leidend.

## Werkschakelaar bij de unit

Bij een buitenunit hoort een **werkschakelaar** in de directe nabijheid: een afsluitbare
schakelaar waarmee de monteur de unit spanningsloos kan maken en beveiligen tegen
wederinschakeling, zonder naar de meterkast te hoeven.

Dat is exact stap 1 en 2 uit module 1 toegepast op deze situatie, en het is de reden dat
zo'n schakelaar in de praktijk vrijwel altijd wordt gevraagd door de onderhoudsmonteur.
`,
  checklist: [
    'Ik geef een klimaatinstallatie altijd een eigen eindgroep',
    'Ik meet het werkelijke kabeltracé in plaats van het te schatten',
    'Ik houd rekening met spanningsval bij lange leidingen naar een buitenunit',
    'Ik plaats een werkschakelaar bij de buitenunit'
  ],
  bronnen: ['nieuw geschreven']
},

/* ------------------------------------------------------------------ 9.3 */
{
  id: 'm09l03',
  nr: '9.3',
  titel: 'Aardlektype bij frequentiegeregelde toestellen',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt onderbouwen waarom een inverter-toestel een type A, F of B aardlek vraagt en wat er misgaat met het verkeerde type.',
  videos: [
    { taal: 'nl', titel: 'Aardlekschakelaar types A, F en B uitgelegd', zoek: 'aardlekschakelaar type A F B verschil uitleg' }
  ],
  tekst: `
## Waarom een warmtepomp anders is dan een lamp

Vrijwel elke moderne warmtepomp en airco heeft een **frequentieregelaar** (inverter). Die
zet de netspanning eerst om naar gelijkspanning en daarna weer naar wisselspanning met
een regelbare frequentie, zodat de compressor toerental kan variëren.

Het gevolg is dat er in het toestel een **gelijkspanningstussenkring** zit. Ontstaat er
een isolatiefout aan die kant, dan is de lekstroom naar aarde geen nette sinus meer maar
kan hij een gelijkstroomcomponent bevatten.

## Wat dat met de aardlek doet

Een aardlekschakelaar meet met een stroomtransformator: een ringkern waar de geleiders
doorheen lopen. Zolang de som van heen- en teruggaande stroom nul is, wordt er niets
opgewekt.

Een **gladde gelijkstroom** door die ringkern doet iets vervelends: hij magnetiseert de
kern in één richting en kan die verzadigen. Een verzadigde kern reageert nauwelijks meer
op veranderingen - dus ook niet meer op een gewone wisselstroomlek die er daarna
overheen komt.

!!! gevaar De aardlek die er nog hangt maar niets meer doet
Dit is de reden dat het aardlektype bij inverter-toestellen geen detail is. Een type-AC
of type-A aardlek die door een gelijkstroomlek verzadigd raakt, blijft er onveranderd
uitzien, blijft ingeschakeld, en de testknop werkt gewoon - terwijl hij bij een echte
fout niet meer afschakelt. Het is een beveiliging die alleen nog symbolisch aanwezig is.
!!!

## Welk type wanneer

| Type | Detecteert | Toepassing bij klimaatinstallaties |
|---|---|---|
| AC | Alleen zuivere wisselstroom | Niet toepassen |
| A | Wisselstroom en pulserende gelijkstroom | De ondergrens; voldoende voor veel toestellen die dat expliciet opgeven |
| F | Als A, plus samengestelde frequenties | Vaak voorgeschreven bij frequentiegeregelde apparatuur |
| B | Als F, plus gladde gelijkstroom | Waar het toestel een gelijkstroomlek kan veroorzaken, en standaard bij laadpalen en omvormers |

De fabrikant schrijft voor welk type nodig is. Staat er niets, dan is dat geen
vrijbrief maar een reden om het na te vragen - bij de leverancier, of bij iemand met
meer ervaring in klimaatinstallaties.

## Praktische gevolgen

Een type F of B aardlekbeveiliging is aanzienlijk duurder dan een type A en breder in
de kast. Dat betekent:

- neem het mee in de offerte, niet als verrassing achteraf;
- reserveer de ruimte in de groepenkast bij het ontwerp;
- controleer bij bestaande installaties waar een warmtepomp bijkomt, welk type er nu
  hangt - dat is vaak nog type AC of A.

## Bij een storing

Schakelt de aardlek af sinds de warmtepomp erin zit, dan zijn de gangbare oorzaken:

1. **Verkeerd type** - het toestel produceert een lekstroom die dit type niet aankan.
2. **Optellende lekstromen** - de normale lekstroom van de inverter komt bovenop wat er
   al was; zie module 8.4.
3. **Werkelijke fout** - vocht in de buitenunit, een beschadigde kabel in het tracé, of
   een defect in het toestel.

De volgorde van onderzoeken is: eerst vaststellen welk type er hangt en wat de fabrikant
voorschrijft, dan de lekstroom meten met een stroomtang, en pas daarna het toestel
verdenken.
`,
  checklist: [
    'Ik kan uitleggen waarom een inverter een gelijkstroomlek kan veroorzaken',
    'Ik weet hoe verzadiging een type-A aardlek onbruikbaar maakt',
    'Ik controleer altijd welk aardlektype de fabrikant voorschrijft',
    'Ik controleer bij bestaande installaties welk type er nu hangt'
  ],
  bronnen: ['nieuw geschreven', 'gemini.md M3 (aardlekprincipe)']
},

/* ------------------------------------------------------------------ 9.4 */
{
  id: 'm09l04',
  nr: '9.4',
  titel: 'Buitenunit en binnenunit koppelen',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt de voeding en de communicatiekabel tussen de units correct uitvoeren en de scheiding tussen sterk- en zwakstroom bewaken.',
  videos: [
    { taal: 'nl', titel: 'Buitenunit aansluiten: voeding en communicatiekabel', zoek: 'warmtepomp buitenunit aansluiten interlink kabel' }
  ],
  tekst: `
## Twee soorten verbindingen

Tussen binnen- en buitenunit lopen doorgaans twee elektrische verbindingen, en die
hebben verschillende eisen:

**De voeding** - sterkstroom, 230 of 400 V. Sommige systemen voeden de buitenunit vanuit
de binnenunit, andere voeden beide units apart vanuit de groepenkast. Welk van de twee,
staat in het aansluitschema van de fabrikant en is niet uitwisselbaar.

**De communicatiekabel** (interlink, bus) - laagspanning of datacommunicatie, waarmee de
units elkaar aansturen. Vaak twee of drie aders, soms afgeschermd.

## Scheiding tussen sterk- en zwakstroom

De communicatiekabel is gevoelig voor storing. Loopt hij over een lange afstand strak
naast de voedingskabel, dan kan de wisselspanning capacitief en inductief inkoppelen,
met communicatiefouten of onverklaarbare storingsmeldingen als gevolg.

Praktische regels:

- houd afstand tussen voedings- en communicatiekabel waar dat kan;
- kruis ze bij voorkeur haaks in plaats van dat ze parallel lopen;
- gebruik een afgeschermde kabel wanneer de fabrikant dat voorschrijft, en sluit de
  afscherming aan **zoals voorgeschreven** - meestal aan één zijde;
- gebruik geen aders van de voedingskabel voor communicatie, ook al zijn er aders over.

!!! kern Storingsmeldingen die geen storing zijn
Een warmtepomp die willekeurige communicatiefouten geeft, is opvallend vaak een
bekabelingsprobleem en geen defect toestel. Controleer bij zo'n melding eerst het
kabeltracé, de scheiding en de aansluiting van de afscherming, voordat er onderdelen
worden besteld.
!!!

## Buiten werken: dichtheid en bestendigheid

- **Wartels** passend bij de kabeldiameter, goed aangedraaid, en met de dichting op zijn
  plaats. Een wartel die te ruim is, laat water door langs de kabel.
- **Doorvoeren aflopend** uitvoeren, of met een druppellus zodat water niet langs de
  kabel naar binnen loopt.
- **UV-bestendigheid** bij kabels die in de zon liggen; gewone PVC-mantel verhardt en
  scheurt na jaren buiten.
- **Mechanische bescherming** waar de kabel bereikbaar is voor grasmaaiers, schoppen en
  kinderen.
- **Trekontlasting** vóór de klemmen, zoals overal.

## Aarding van de buitenunit

De metalen behuizing van een buitenunit wordt geaard via de beschermingsleiding in de
voedingskabel. Controleer bij oplevering de doorverbinding met een continuïteitsmeting
(module 7.3) - juist bij een buitenunit, waar corrosie en vocht op termijn hun werk doen.

Let er ook op dat een buitenunit vaak op een frame of consoles staat. Metalen delen die
aanraakbaar zijn en door een fout onder spanning kunnen komen, horen in de beoordeling
meegenomen te worden.

## De grens van jouw werk

De elektrische aansluiting is jouw domein. Het koudemiddelcircuit - de leidingen tussen
binnen- en buitenunit, vacuümtrekken, vullen, afpersen - is dat niet: daarvoor gelden
aparte eisen en certificering. Les 9.5 gaat daarop in.

Een praktische werkverdeling is dan ook gebruikelijk: de elektricien legt de voeding, de
groep, de werkschakelaar en de communicatiekabel; de gecertificeerde monteur doet het
koudemiddelcircuit en de inbedrijfstelling.
`,
  checklist: [
    'Ik controleer in het schema van de fabrikant hoe beide units gevoed worden',
    'Ik houd voedings- en communicatiekabel gescheiden',
    'Ik sluit een afscherming aan zoals voorgeschreven, niet aan beide zijden',
    'Ik controleer de aarding van de buitenunit met een continuïteitsmeting'
  ],
  bronnen: ['nieuw geschreven']
},

/* ------------------------------------------------------------------ 9.5 */
{
  id: 'm09l05',
  nr: '9.5',
  titel: 'Airco en split-units',
  duur: 16,
  type: 'les',
  leerdoel: 'Je kent de elektrische aansluiting van een split-unit en weet waar de grens ligt tussen elektrotechnisch en koeltechnisch werk.',
  videos: [
    { taal: 'nl', titel: 'Airco split-unit aansluiten - elektrische kant', zoek: 'airco split unit elektrisch aansluiten voeding werkschakelaar' }
  ],
  tekst: `
## Elektrisch lijkt een airco op een kleine warmtepomp

Een split-airco is technisch een warmtepomp die warmte verplaatst, meestal van binnen
naar buiten. De elektrische eisen volgen dezelfde logica als in de vorige lessen:

- eigen eindgroep, gedimensioneerd op de maximale opgenomen stroom;
- doorsnede afgestemd op stroom én kabellengte naar de buitenunit;
- aardlektype volgens de fabrikant - vrijwel altijd een inverter, dus minimaal type A
  en vaak type F;
- werkschakelaar bij de buitenunit;
- gescheiden voedings- en communicatiekabel.

Voor een gangbare split-unit voor één ruimte kom je qua opgenomen vermogen doorgaans op
enkele honderden watt tot ruim een kilowatt uit - bescheiden vergeleken met een
woningwarmtepomp, maar wel continu draaiend op warme dagen.

## Multi-split en meerdere binnenunits

Bij een multi-split systeem hangen meerdere binnenunits aan één buitenunit. Elektrisch
verandert er dan het volgende:

- het opgenomen vermogen van de buitenunit is hoger;
- er lopen meerdere communicatiekabels, elk naar een binnenunit;
- de binnenunits hebben soms een eigen voeding nodig, soms worden ze vanuit de
  buitenunit gevoed - opnieuw: het schema van de fabrikant is leidend.

## Condensafvoer en elektrische veiligheid

Een binnenunit produceert condenswater. Wordt dat via een condenspomp afgevoerd, dan is
dat een extra elektrische verbruiker, meestal gevoed vanuit de binnenunit.

Waar dit jouw werk raakt: condenswater en elektra zijn een ongelukkige combinatie. Let
op de plaatsing van aansluitingen ten opzichte van de condensbak en de afvoer, en op de
IP-waarde van wat zich in dat gebied bevindt.

!!! gevaar Koudemiddel is geen elektrotechniek
Het aansluiten, vacuümtrekken, vullen en afpersen van het koudemiddelcircuit valt onder
wet- en regelgeving voor gefluoreerde broeikasgassen. Daarvoor is een specifieke
certificering vereist die losstaat van elke elektrotechnische aanwijzing. Als
elektricien doe je de elektrische kant; het koudemiddelcircuit laat je aan een
gecertificeerde koeltechnicus.

Bespreek dit expliciet met je vader, die praktijkkennis heeft van wat binnen jullie
bedrijf wel en niet mag, en leg de werkverdeling vooraf vast.
!!!

## Wat je bij een airco-installatie doet

1. Beoordelen of de bestaande installatie de extra belasting aankan.
2. De eindgroep aanleggen: doorsnede, beveiliging, aardlektype.
3. Voeding naar de buitenunit, inclusief werkschakelaar en waterdichte doorvoeren.
4. Communicatiekabel leggen, gescheiden van de voeding.
5. Aarding controleren en meten.
6. Aansluiten volgens het schema van de fabrikant.
7. Metingen en oplevering, zoals in module 7.
8. De koeltechnische inbedrijfstelling overlaten aan wie daarvoor gecertificeerd is.

## Wat de klant vaak vraagt

"Kan die airco op een gewoon stopcontact?" Bij een klein mobiel apparaat soms wel; bij
een vaste split-unit is het antwoord in de regel nee. Een vaste installatie hoort een
vaste aansluiting op een eigen groep te krijgen, met de juiste beveiliging - juist omdat
het toestel jarenlang, continu en onbeheerd draait.
`,
  checklist: [
    'Ik weet dat een split-airco elektrisch dezelfde eisen stelt als een kleine warmtepomp',
    'Ik controleer bij multi-split hoe de binnenunits gevoed worden',
    'Ik weet dat het koudemiddelcircuit aparte certificering vereist',
    'Ik heb de werkverdeling elektro versus koeltechniek besproken met mijn vader'
  ],
  bronnen: ['nieuw geschreven']
},

/* ------------------------------------------------------------------ 9.6 */
{
  id: 'm09l06',
  nr: '9.6',
  titel: 'Cv-ketel, thermostaat en gelijktijdigheid',
  duur: 16,
  type: 'les',
  leerdoel: 'Je kent de elektrische kant van een cv-installatie en kunt beoordelen of een aansluiting extra belasting aankan.',
  videos: [
    { taal: 'nl', titel: 'CV-ketel aansluiten: voeding, thermostaat en OpenTherm', zoek: 'cv ketel aansluiten voeding thermostaat opentherm bedrading' }
  ],
  tekst: `
## De cv-ketel elektrisch

Een gasgestookte cv-ketel is elektrisch bescheiden: pomp, ventilator, ontsteking en
besturing samen blijven ruim onder een halve kilowatt. Toch krijgt de ketel bij voorkeur
een **eigen groep**, om dezelfde reden als bij de warmtepomp: je wilt niet dat de
verwarming uitvalt door een storing elders.

Aandachtspunten:

- **Werkschakelaar of eigen wandcontactdoos** bij de ketel, zodat de servicemonteur het
  toestel spanningsloos kan maken.
- **Polariteit** klopt: fase op fase, nul op nul. Sommige ketelbesturingen controleren
  de polariteit en weigeren te starten of geven een foutcode bij verwisseling.
- **Aarding** aanwezig en doorverbonden; controleer met een continuïteitsmeting.
- **Vochtige opstelling** (zolder, kelder, badkamer): let op de zone-indeling uit
  module 5.6 en op de IP-waarde van de aansluiting.

## Thermostaatbedrading

Er zijn twee gangbare varianten, en het verschil is belangrijk:

**Aan/uit-thermostaat** - twee aders, een simpel schakelcontact. De thermostaat sluit
het contact als er warmte nodig is, en de ketel gaat op vol vermogen aan.

**OpenTherm (modulerend)** - twee aders, maar nu met communicatie in beide richtingen.
De thermostaat vertelt de ketel welk vermogen nodig is, waardoor de ketel kan moduleren:
zachter branden in plaats van steeds aan en uit. Dat is zuiniger en comfortabeler.

Belangrijk: de aders zien er hetzelfde uit, maar de systemen zijn niet zomaar
uitwisselbaar. Sluit je een OpenTherm-thermostaat aan op een klemmenstrook die voor
aan/uit is bedoeld, dan werkt het niet of niet zoals bedoeld. Lees de aansluitgegevens
van zowel de ketel als de thermostaat.

Voor de thermostaatkabel geldt hetzelfde als voor de communicatiekabel bij een
warmtepomp: gescheiden van sterkstroom leggen.

## Gelijktijdigheid en de aansluitwaarde

Dit is de les die het meest voorkomt in de praktijk. Een woning met een 1×35 A-aansluiting
heeft ongeveer 8 kW beschikbaar. Tel op wat er tegenwoordig bij kan komen:

| Verbruiker | Opgenomen vermogen |
|---|---|
| Inductiekookplaat, in gebruik | 3 – 7 kW |
| Warmtepomp met bijverwarming | 3 – 9 kW |
| Laadpaal 1-fase | 3,7 kW |
| Elektrische boiler | 2 kW |
| Wasmachine en droger | 2 – 4 kW |

Deze getallen lopen op een koude avond gemakkelijk op boven de beschikbare 8 kW. Het
gevolg is een hoofdzekering die afschakelt - en dat is geen defect maar een
ontwerpprobleem.

!!! kern De vraag bij elke zware toevoeging
Voordat er iets zwaars bijkomt: wat is de aansluitwaarde, wat hangt er al aan, en wat
is de realistische gelijktijdige belasting op het zwaarste moment? Is het antwoord
krap, dan zijn de opties een netverzwaring aanvragen, load balancing toepassen
(module 10.3), of de klant vertellen dat dit toestel hier niet past. Die derde optie
is soms het juiste antwoord.
!!!

## Wat je vastlegt

Bij het toevoegen van een klimaatinstallatie leg je vast: de aansluitwaarde vóór en na,
de nieuwe groep met doorsnede en beveiliging, het aardlektype, de faseverdeling, en de
metingen. Bij een latere storing of een discussie over overbelasting is dat het enige
document dat vertelt wat er is afgesproken en uitgevoerd.
`,
  checklist: [
    'Ik geef een cv-ketel een eigen groep met werkschakelaar',
    'Ik ken het verschil tussen aan/uit en OpenTherm-thermostaatbedrading',
    'Ik controleer de aansluitwaarde voordat er een zware verbruiker bijkomt',
    'Ik kan uitleggen wanneer netverzwaring of load balancing nodig is'
  ],
  bronnen: ['nieuw geschreven']
}

]});
