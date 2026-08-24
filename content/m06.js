CURSUS.addModule({
  id: 'm06',
  nr: 6,
  deel: 1,
  titel: 'Groepenkast: ontwerp en montage',
  ondertitel: 'Begrijpen komt hier ruim vóór zelfstandig uitvoeren.',
  niveau: 'Gemiddeld tot gevorderd',
  studietijd: 7,
  intro: 'De verdeelinrichting bepaalt rechtstreeks de brand- en aanraakveiligheid van een woning. Deze module gaat over het ontwerp: welke groep, welke karakteristiek, welk type aardlek en waarom.',
  leerdoelen: [
    'Een groepsindeling opstellen op basis van belasting en gebruik',
    'De karakteristieken B en C kiezen op basis van inschakelstroom',
    'Uitleggen wat selectiviteit is en waarom die niet vanzelf ontstaat',
    'De aardlektypes AC, A, F en B onderscheiden en toepassen',
    'De consequenties van een onderbroken nul bij 3-fase benoemen'
  ],
  lessen: [

/* ------------------------------------------------------------------ 6.1 */
{
  id: 'm06l01',
  nr: '6.1',
  titel: 'Groepsindeling ontwerpen',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt een verdeling in eindgroepen opstellen die past bij het gebruik van de woning.',
  videos: [
    { taal: 'nl', titel: 'Groepenkast / installatie uitbreiden - eindgroep en kamrails', yt: 'POJz32s91B8', duur: '±12 min' }
  ],
  tekst: `
## Waarom je niet indeelt op ruimte maar op gebruik

De verleiding is om per kamer een groep te maken. Dat lijkt overzichtelijk, maar het
klopt zelden met de werkelijke belasting. Een slaapkamer trekt vrijwel niets, een keuken
trekt meer dan de rest van de woning bij elkaar.

Uitgangspunten die wél werken:

1. **Zware, langdurige verbruikers krijgen een eigen groep.** Wasmachine, droger, oven,
   kookplaat, vaatwasser, warmtepomp, laadpaal.
2. **Kritische verbruikers krijgen een eigen beveiliging.** Een vriezer of een
   cv-installatie wil je niet laten uitvallen door een lekstroom in de tuinverlichting.
3. **Verlichting en contactdozen gescheiden.** Slaat de contactdozengroep af, dan sta
   je niet in het donker met een defect apparaat in je handen.
4. **Buiten en schuur apart.** Vocht en mechanische schade zijn daar het grootst.
5. **Ruimte voor later.** Laat vrije posities over: een warmtepomp, laadpaal of
   zonnepanelen komen er in vrijwel elke woning nog bij.

## Een realistische indeling voor een eengezinswoning

| Groep | Wat | Beveiliging |
|---|---|---|
| 1 | Verlichting begane grond | 16 A |
| 2 | Verlichting verdieping | 16 A |
| 3 | Contactdozen woonkamer | 16 A |
| 4 | Contactdozen slaapkamers | 16 A |
| 5 | Keuken contactdozen | 16 A of 20 A |
| 6 | Vaatwasser | 16 A |
| 7 | Wasmachine | 16 A |
| 8 | Droger | 16 A |
| 9 | Kookgroep | 16/20/25 A naar toestel |
| 10 | Buiten en schuur | 16 A |
| 11 | Cv-installatie | 16 A |
| Res. | Vrije posities voor warmtepomp, laadpaal, PV | - |

Dit is geen voorschrift maar een startpunt om over te praten met de klant en met je
collega. De werkelijke indeling volgt uit het gebruik en uit wat er al ligt.

!!! kern De vraag die je bij elke groep stelt
Niet "past deze automaat", maar: welke functie moet deze beveiliging vervullen, welk
circuit beschermt hij, en past dat bij de kabel die eraan hangt. Dat is het verschil
tussen onderdelen monteren en elektrotechniek bedrijven.
!!!

## De maximale groepen per aardlek

Een gangbare regel in Nederlandse woninginstallaties is dat er niet meer dan vier
eindgroepen achter één aardlekschakelaar hangen. De achterliggende redenen zijn
praktisch:

- **Lekstromen tellen op.** Elk apparaat heeft een kleine, volstrekt normale lekstroom
  naar aarde. Hang je er te veel achter één aardlek, dan komt de som in de buurt van de
  aanspreekwaarde en gaat de aardlek "spontaan" afschakelen.
- **Storingzoeken.** Vier groepen zijn te overzien; twaalf niet.
- **Beschikbaarheid.** Bij een fout valt niet je hele woning uit.

## Ruimte in de kast

Componentbreedte wordt uitgedrukt in **modules** van 17,5 mm. Bij het ontwerpen tel je:
hoofdschakelaar, aardlekken, automaten, eventuele overspanningsbeveiliging, en laat je
bewust ruimte over.

Een kast die op de dag van oplevering exact vol zit, is een kast waarin de volgende
uitbreiding een complete vervanging wordt.
`,
  checklist: [
    'Ik kan een groepsindeling opstellen op basis van gebruik in plaats van kamers',
    'Ik weet waarom kritische verbruikers een eigen beveiliging krijgen',
    'Ik kan uitleggen waarom er maximaal vier groepen achter één aardlek horen',
    'Ik laat bewust vrije posities over in een nieuwe kast'
  ],
  bronnen: ['gemini.md M3', 'chatgpt.md M6', 'kimi.md M5', 'grok.md M4']
},

/* ------------------------------------------------------------------ 6.2 */
{
  id: 'm06l02',
  nr: '6.2',
  titel: 'Karakteristiek en selectiviteit',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt een B- of C-karakteristiek kiezen en uitleggen wat selectiviteit betekent voor de installatie.',
  videos: [
    { taal: 'nl', titel: 'Welke installatieautomaat heb je nodig? 1 fase / 3 fase', yt: '1SDChIaziCQ', duur: '±10 min' }
  ],
  tekst: `
## Wat de karakteristiek beschrijft

De letter op een installatieautomaat - B, C of D - beschrijft bij welke veelvoud van de
nominale stroom het **magnetische** deel direct afschakelt. Het thermische deel is voor
alle karakteristieken vergelijkbaar.

| Karakteristiek | Magnetische afschakeling bij | Toepassing |
|---|---|---|
| B | ongeveer 3 tot 5 × In | Verlichting, contactdozen, gewone woningcircuits |
| C | ongeveer 5 tot 10 × In | Motoren, transformatoren, veel LED-drivers, warmtepompen |
| D | ongeveer 10 tot 20 × In | Zware inschakelstromen, industrieel |

Bij een B16 betekent dat: magnetisch afschakelen bij ruwweg 48 tot 80 A.

## Waarom C bestaat: de inschakelstroom

Veel apparaten trekken bij het inschakelen kortstondig een veelvoud van hun
bedrijfsstroom:

- een motor die opstart, tot vijf à zeven keer;
- een transformator, door de magnetisering van de kern;
- LED-drivers en schakelende voedingen, doordat hun ingangscondensatoren in een
  fractie van een milliseconde worden opgeladen;
- een warmtepompcompressor, afhankelijk van de aansturing.

Die piek duurt milliseconden en is voor de kabel volstrekt onschadelijk - maar een
B-automaat ziet hem als een kortsluiting en schakelt af. Het gevolg is een installatie
die "af en toe zomaar uitvalt bij het aanzetten".

De oplossing is dan een C-karakteristiek, mits de kabel en de foutstroomsituatie dat
toelaten.

!!! gevaar C is geen gratis oplossing
Een C-automaat schakelt pas bij een hogere stroom magnetisch af. Aan het eind van een
lange leiding kan de kortsluitstroom te laag zijn om die drempel te halen, waardoor de
automaat pas via het langzame thermische deel afschakelt - of, in het slechtste geval,
niet binnen de vereiste tijd. Bij lange leidingen hoort daarom een berekening of meting
van de kortsluitstroom (Zs), zie module 7.
!!!

## Veel LED-verlichting op één groep

Een praktijkgeval dat je zeker tegenkomt: een groep met tientallen LED-armaturen die bij
het inschakelen de automaat laat afslaan, terwijl de totale belasting nog geen 200 W is.

Dat is geen defect. De ingangscondensatoren van alle drivers samen vormen op het moment
van inschakelen bijna een kortsluiting. Oplossingen: de verlichting over meerdere
groepen verdelen, een C-karakteristiek toepassen, of armaturen kiezen met een lagere
opgegeven inschakelstroom.

## Selectiviteit

Selectiviteit betekent dat bij een fout **alleen de dichtstbijzijnde beveiliging**
afschakelt, en niet de bovenliggende. Zonder selectiviteit legt een kortsluiting in een
tafellamp de hele woning plat.

In een woninginstallatie kijk je vooral naar de keten hoofdzekering →
aardlekschakelaar → automaat. De hoofdzekering van de netbeheerder is doorgaans zwaarder
en trager dan de automaten erachter, waardoor de selectiviteit meestal vanzelf goed
uitpakt.

Waar het misgaat is bij aardlekbeveiliging: twee aardlekken in serie met dezelfde
gevoeligheid (bijvoorbeeld 30 mA achter 30 mA) schakelen bij een lekstroom
onvoorspelbaar, mogelijk allebei. Wil je selectiviteit in aardlekbeveiliging, dan is de
bovenliggende beveiliging minder gevoelig én vertraagd uitgevoerd (een S-type).

Volledige selectiviteitsberekeningen zijn specialistisch werk. Wat je in deze fase moet
kunnen: het begrip herkennen, en signaleren wanneer een installatie zich niet selectief
gedraagt.
`,
  checklist: [
    'Ik kan uitleggen wat de letter op een automaat betekent',
    'Ik weet wanneer een C-karakteristiek nodig is en wat het nadeel ervan is',
    'Ik kan verklaren waarom veel LED-verlichting een B-automaat kan laten afslaan',
    'Ik kan uitleggen wat selectiviteit is en waar het bij aardlekken misgaat'
  ],
  bronnen: ['gemini.md M3', 'chatgpt.md M6', 'copilot.md M5']
},

/* ------------------------------------------------------------------ 6.3 */
{
  id: 'm06l03',
  nr: '6.3',
  titel: 'Aardlekarchitectuur en aardlektypes',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt bepalen welk type aardlekbeveiliging bij welke belasting hoort en waarom het verkeerde type blind kan zijn.',
  videos: [
    { taal: 'nl', titel: 'Een 4-polige aardlekautomaat installeren', yt: 'c3JbmDrWe8Y', duur: '±12 min' }
  ],
  tekst: `
## Waarom er verschillende types bestaan

Een aardlekschakelaar meet het verschil tussen heen- en teruggaande stroom met een
stroomtransformator: de geleiders lopen door een ringkern, en zolang de som nul is,
wordt er in de meetwikkeling niets opgewekt.

Die meting werkt alleen bij stroomvormen waarvoor het type is gebouwd. Moderne
apparatuur met elektronica produceert lekstromen die niet meer op een nette sinus
lijken, en dan wordt het type bepalend.

| Type | Detecteert | Waar nodig |
|---|---|---|
| AC | Zuivere sinusvormige wisselstroomlekken | Verouderd; niet meer toereikend voor moderne installaties |
| A | Sinus én pulserende gelijkstroomlekken | De standaard voor woninginstallaties |
| F | Als A, plus samengestelde frequenties | Circuits met frequentieregelaars, wasmachines en warmtepompen van bepaalde typen |
| B | Als F, plus **gladde gelijkstroomlekken** | Laadpalen, PV-omvormers, apparatuur met een DC-zijde |

!!! gevaar Blindheid bij het verkeerde type
Een gladde gelijkstroomlekstroom kan de ringkern van een type-AC of type-A aardlek
magnetisch verzadigen. Het gevolg is dat de aardlek niet alleen die lekstroom niet ziet,
maar ook zijn vermogen verliest om normale wisselstroomlekken te detecteren. Hij hangt
dan als een dood component in de kast, terwijl alles er goed uitziet en de testknop het
gewoon doet. Dit is het argument achter de type-eisen bij laadpalen en omvormers.
!!!

## De gevoeligheid

**30 mA** is de standaard voor personenbeveiliging in woningen. Lager (10 mA) kom je
tegen bij zeer specifieke toepassingen; hoger (100 of 300 mA) uitsluitend voor
brandbeveiliging, niet voor personen.

Naast de gevoeligheid bestaat er **vertraging**: een S-type schakelt bewust iets later
zodat het onderliggende, snelle type eerst kan afschakelen. Dat is de manier om
selectiviteit in aardlekbeveiliging te bereiken.

## Aardlekschakelaar of aardlekautomaat

| | Aardlekschakelaar (RCD) + automaten | Aardlekautomaat (RCBO) per groep |
|---|---|---|
| Kosten | Lager | Hoger |
| Ruimte | Compacter | Breder |
| Bij een fout valt uit | Alle groepen achter die aardlek | Alleen die ene groep |
| Storingzoeken | Uitsluiten per groep nodig | Direct duidelijk welke groep |

Voor kritische circuits - vriezer, cv, warmtepomp, serverkast, medische apparatuur -
is een eigen RCBO vrijwel altijd de betere keuze. Voor de rest is een blok van maximaal
vier groepen achter één aardlek gebruikelijk.

## Waarom een aardlek "zomaar" afschakelt

Bij de melding "de aardlek slaat er steeds uit" zijn de gangbare oorzaken:

1. **Opgetelde normale lekstromen** - te veel apparatuur achter één aardlek. Elk apparaat
   lekt een beetje; samen komen ze bij de aanspreekwaarde.
2. **Vocht** - buitenverlichting, tuinaansluiting, kruipruimte, of water in een armatuur.
3. **Defect apparaat** - een element in een boiler, wasmachine of vaatwasser dat begint
   te lekken naar de behuizing.
4. **Beschadigde kabel** - een schroef of spijker door een leiding.
5. **Verkeerd type** - zie hierboven; met een omvormer of laadpaal in de installatie kan
   het type de oorzaak zijn.

De systematische aanpak van dit zoekproces staat in module 8.
`,
  checklist: [
    'Ik ken de vier aardlektypes en weet welke waar nodig is',
    'Ik kan uitleggen hoe een gladde gelijkstroom een type-A aardlek blind maakt',
    'Ik weet wanneer een RCBO per groep de betere keuze is',
    'Ik kan de vijf gangbare oorzaken van een afschakelende aardlek opnoemen'
  ],
  bronnen: ['gemini.md M3', 'copilot.md M5', 'copilot.md M7', 'kimi.md M5']
},

/* ------------------------------------------------------------------ 6.4 */
{
  id: 'm06l04',
  nr: '6.4',
  titel: '3-fase en de nulgeleider',
  duur: 18,
  type: 'les',
  leerdoel: 'Je begrijpt waarom faseverdeling telt en waarom een onderbroken nul bij 3-fase catastrofaal is.',
  videos: [
    { taal: 'nl', titel: '3 fase groepenkast vervangen (Dutch Electrician)', yt: 'WbizGG0jiSc', duur: '±18 min' },
    { taal: 'nl', titel: '3 FASE GROEPENKAST zelf bouwen (Dutch Electrician Amsterdam)', yt: 'BuyfpPYw_jM', duur: '±20 min' }
  ],
  tekst: `
## Faseverdeling in de praktijk

Bij een 3-fase aansluiting verdeel je de eindgroepen bewust over L1, L2 en L3. Het doel
is dat de belasting per fase ongeveer gelijk is, zodat de hoofdbeveiliging niet
afschakelt terwijl er op de andere fasen nog ruimte zat is.

Praktische aanpak bij het indelen:

- Zware, voorspelbare verbruikers eerst verdelen: kookgroep op de ene fase, warmtepomp
  op de tweede, laadpaal op de derde.
- Daarna de gewone groepen zo goed mogelijk spreiden.
- Noteer de verdeling in het schema in de kast, zodat een volgende monteur de
  verdeling niet ongemerkt scheeftrekt.

Bij het uitbreiden van een bestaande kast betekent dit dat je niet zomaar de eerstvolgende
vrije positie pakt: je kijkt eerst welke fase daar zit en of dat past.

## Wat de nulgeleider in een 3-fase systeem doet

Bij een gelijkmatige, symmetrische belasting heffen de drie fasestromen elkaar in de
nulgeleider grotendeels op - er loopt dan weinig tot geen stroom door de nul. Bij een
ongelijke verdeling voert de nul het verschil af.

Dat verklaart waarom de nulgeleider bij 3-fase net zo serieus genomen moet worden als de
fasen zelf, en waarom hij nooit "even losgenomen" wordt.

!!! gevaar De onderbroken nul bij 3-fase
Valt de gezamenlijke nulgeleider weg terwijl er 1-fase apparatuur op de drie fasen hangt,
dan komen de belastingen in serie te staan tussen twee fasen - dus over 400 V in plaats
van 230 V. De spanning verdeelt zich naar rato van de weerstand: een licht belaste fase
krijgt een veel te hoge spanning, een zwaar belaste een te lage.

Het resultaat is een woning waarin apparatuur op de ene fase doorbrandt terwijl op de
andere de lampen dof branden. Dit is een van de meest destructieve storingen die er
bestaan, en de reden dat de nulverbinding in een 3-fase installatie met bijzondere zorg
wordt uitgevoerd en gecontroleerd.
!!!

## Herkennen van een nulonderbreking

Symptomen die je richting deze diagnose sturen:

- Meerdere groepen met vreemd gedrag tegelijk, niet één.
- Lampen die feller of doffer branden dan normaal, soms wisselend met wat er aan staat.
- Meetwaarden die niet kloppen: 150 V op de ene fase, 290 V op de andere.
- Apparatuur die defect raakt zonder aanwijsbare oorzaak.

Bij dit patroon schakel je uit en meet je gericht, in plaats van door te zoeken naar een
defect apparaat.

## 4-polige componenten

In een 3-fase kast kom je 4-polige hoofdschakelaars en aardlekschakelaars tegen: drie
fasen plus de nul. De nul wordt daarbij mee geschakeld, zodat de installatie werkelijk
volledig van het net gescheiden kan worden.

Let bij montage op de aanduiding van de nulklem - die zit doorgaans op een vaste positie
en is gemarkeerd. Een nul die op een fasepositie wordt aangesloten, levert direct
400 V op een circuit dat 230 V verwacht.
`,
  checklist: [
    'Ik verdeel zware verbruikers bewust over de drie fasen',
    'Ik kan uitleggen wat er gebeurt bij een onderbroken nul in een 3-fase installatie',
    'Ik herken de symptomen van een nulonderbreking',
    'Ik controleer bij 4-polige componenten de positie van de nulklem'
  ],
  bronnen: ['gemini.md M4', 'chatgpt.md M6', 'copilot.md M5']
},

/* ------------------------------------------------------------------ 6.5 */
{
  id: 'm06l05',
  nr: '6.5',
  titel: 'Een kast opbouwen en opleveren',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kent de volgorde en de kwaliteitseisen bij het bouwen van een verdeelinrichting, als observator en toekomstig uitvoerder.',
  videos: [
    { taal: 'nl', titel: 'Groepenkast vervangen (ABB groepenkast)', yt: 'SMUWcWRnJ9Y', duur: '±25 min' },
    { taal: 'nl', titel: 'Groepenkast generator tutorial (Elektramat)', yt: '2fadiZPEkhM', duur: '±10 min' }
  ],
  tekst: `
## Kijk deze module eerst als observator

Een groepenkast vervangen is geen werk waarmee je als beginner zelfstandig begint. Het
raakt de voeding van de hele woning, er blijft een permanent gevoed deel over, en een
fout heeft gevolgen voor elke groep tegelijk.

Bekijk de video's met de vraag "in welke volgorde werkt deze monteur en waarom", niet met
de vraag "kan ik dit nu ook".

## De volgorde

1. **Inventariseren** - bestaande groepen documenteren, aansluitwaarde vaststellen,
   3-fase of 1-fase, wat er aan bijzondere verbruikers hangt (PV, laadpaal, warmtepomp).
2. **Ontwerpen** - groepsindeling, aardlekblokken, types, faseverdeling, benodigde
   modules. Hier hoort het schema bij dat straks in de kast komt.
3. **Voorbereiden** - materiaal compleet, kast voorbedraden waar mogelijk, labels maken.
4. **Veiligstellen** - de vijf stappen, met bewustzijn dat boven de hoofdschakelaar
   spanning blijft staan.
5. **Demonteren en monteren** - bestaande groepen gecontroleerd loskoppelen en
   labelen vóór je iets weghaalt.
6. **Aansluiten** - kamrails op maat, aders op lengte, aanhaalmomenten volgens fabrikant.
7. **Controleren** - visueel, continuïteit, isolatieweerstand, polariteit.
8. **Inschakelen en testen** - groep voor groep, met de aardlektest.
9. **Opleveren** - schema in de kast, labeling, meetgegevens vastleggen, klant uitleggen.

## Kwaliteitspunten die een vakman herkent

- **Aders op lengte**, met een kleine reservelus; niet strak getrokken en niet in
  bossen overtollig draad.
- **Kamrail op maat geknipt** en de open uiteinden afgedekt.
- **Aanhaalmomenten** volgens de fabrikantopgave, en na verloop van tijd nagelopen bij
  de zwaardere verbindingen.
- **Nullen bij de juiste aardlek**, gecontroleerd en niet aangenomen.
- **Labeling** die overeenkomt met de werkelijkheid, in leesbaar handschrift of gedrukt.
- **Schema in de kast**, met de faseverdeling erbij.
- **Werkruimte**: de kast moet later te openen zijn zonder dat er iets voor staat.

!!! kern Wat oplevering betekent
Een kast is niet af als hij werkt. Hij is af als een volgende monteur binnen vijf minuten
kan zien wat waar zit, welke groep welke fase heeft en welke metingen er zijn gedaan.
Dat is het punt waarop je werk overdraagbaar is - en overdraagbaarheid is de definitie
van professioneel werk.
!!!

## Wat je vastlegt bij oplevering

- de gemeten isolatieweerstand per groep;
- de gecontroleerde doorverbinding van de beschermingsleiding;
- de uitgevoerde aardlektest;
- de groepsindeling en faseverdeling;
- datum, en wie het werk heeft uitgevoerd.

Dat document is niet alleen voor de klant. Het is jouw bewijs van wat je hebt
aangetroffen en achtergelaten, en dat is bij discussies over schade of latere storingen
het enige wat telt.
`,
  checklist: [
    'Ik ken de negen stappen in de juiste volgorde',
    'Ik weet dat boven de hoofdschakelaar spanning blijft staan tijdens het werk',
    'Ik ken de kwaliteitspunten waaraan een goede kast te herkennen is',
    'Ik weet welke gegevens ik bij oplevering vastleg'
  ],
  bronnen: ['chatgpt.md M6', 'gemini.md M3', 'copilot.md M5', 'kimi.md M5']
}

]});
