CURSUS.addModule({
  id: 'm10',
  nr: 10,
  deel: 2,
  titel: 'Zonnepanelen en laadpalen',
  ondertitel: 'Wat teruglevering en gelijkspanning met je veiligheidsprocedure doen.',
  niveau: 'Gemiddeld',
  studietijd: 4,
  intro: 'PV-installaties en laadpalen komen in vrijwel elke woning voor. Ook als je ze niet zelf installeert, veranderen ze de manier waarop je aan die installatie werkt.',
  leerdoelen: [
    'De opbouw van een PV-installatie benoemen: string, DC-zijde, omvormer, AC-zijde',
    'Uitleggen waarom PV je procedure voor spanningsloos werken verandert',
    'De elektrische eisen van een laadpaal benoemen, inclusief aardlektype',
    'Uitleggen wat load balancing doet en wanneer het nodig is'
  ],
  lessen: [

/* ------------------------------------------------------------------ 10.1 */
{
  id: 'm10l01',
  nr: '10.1',
  titel: 'PV-installatie in hoofdlijnen',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt de onderdelen van een zonnestroominstallatie benoemen en de weg van paneel naar groepenkast volgen.',
  videos: [
    { taal: 'nl', titel: 'Hoe werkt een zonnepaneelinstallatie', zoek: 'zonnepanelen installatie omvormer string uitleg' },
    { taal: 'en', titel: 'How solar PV systems work', zoek: 'how solar pv system works inverter string explained' }
  ],
  tekst: `
## De keten

**Panelen → string (DC) → omvormer → AC-zijde → groep in de kast → installatie en net**

**Panelen** wekken gelijkspanning op zodra er licht op valt. Eén paneel levert enkele
tientallen volts.

**Een string** is een serieschakeling van panelen. De spanningen tellen op: tien panelen
in serie kunnen samen enkele honderden volts gelijkspanning leveren.

**De omvormer** zet die gelijkspanning om naar 230 V wisselspanning, synchroon met het
net, en levert die aan de installatie.

**De AC-zijde** is een gewone eindgroep in de groepenkast, met eigen beveiliging.

## Wat er met de opgewekte stroom gebeurt

De omvormer levert stroom aan de installatie. Wat de woning op dat moment zelf verbruikt,
wordt direct gebruikt; het overschot gaat het net op. Dat heet **teruglevering**, en de
slimme meter registreert dat apart.

Voor jou als elektricien is het belangrijke punt niet de administratie maar de fysica:
**een deel van de installatie wordt gevoed vanuit een bron die niet in de meterkast zit.**

## Waarom de DC-zijde bijzonder is

| | AC-zijde | DC-zijde |
|---|---|---|
| Spanning | 230 V wisselspanning | Enkele honderden volts gelijkspanning |
| Uit te schakelen | Ja, met de automaat in de kast | Nee - panelen leveren zolang er licht is |
| Vlamboog | Dooft bij elke nuldoorgang, 100× per seconde | Dooft niet vanzelf: er is geen nuldoorgang |

Dat laatste is het gevaarlijkste verschil. Een vlamboog in een gelijkspanningscircuit
blijft branden zolang de bron levert, omdat de spanning nooit door nul gaat. Daarom
zitten er speciale DC-schakelaars bij omvormers, en daarom mag je een DC-connector nooit
onder belasting loskoppelen.

!!! gevaar Panelen kun je niet uitschakelen
De DC-zijde van een PV-installatie staat onder spanning zodra er licht op de panelen
valt - ook bij bewolking, ook in de winter, ook als de omvormer uit staat en de automaat
in de kast eruit is. Werk aan de DC-zijde is specialistisch werk. Ga daar als beginnend
elektricien niet zelfstandig aan beginnen.
!!!

## De aansluiting in de kast

De omvormer wordt aangesloten op een eigen eindgroep met een eigen beveiliging. Punten
die daarbij horen:

- **Aardlektype B** is bij PV-omvormers vaak vereist, om dezelfde reden als bij
  inverters in module 9.3: er kan een gelijkstroomcomponent in de lekstroom zitten.
- **Doorsnede** afgestemd op het maximale vermogen van de omvormer, en op de vaak
  aanzienlijke lengte tussen zolder of dak en de meterkast.
- **Labeling**: in de meterkast hoort duidelijk te zijn dat er een PV-installatie is,
  inclusief waar de omvormer staat en hoe die is uit te schakelen.

Die labeling is een veiligheidsvoorziening, geen administratieve verplichting. Zie de
volgende les.
`,
  checklist: [
    'Ik kan de keten van paneel tot groepenkast benoemen',
    'Ik weet waarom een DC-vlamboog niet vanzelf dooft',
    'Ik weet dat panelen spanning leveren zodra er licht op valt',
    'Ik weet welk aardlektype bij een omvormer hoort'
  ],
  bronnen: ['copilot.md M7', 'qwen.md M5']
},

/* ------------------------------------------------------------------ 10.2 */
{
  id: 'm10l02',
  nr: '10.2',
  titel: 'Waarom PV je veiligheidsprocedure verandert',
  duur: 16,
  type: 'les',
  leerdoel: 'Je kunt benoemen welke aanpassingen in het veiligstellen nodig zijn bij een installatie met PV of opslag.',
  videos: [],
  tekst: `
## Stap 1 wordt een andere stap

Terug naar module 1.3: **scheiden** betekent loskoppelen van álle mogelijke
voedingsbronnen. In een woning zonder PV is dat één bron. In een woning met PV zijn het
er minstens twee, en met een thuisaccu of bidirectionele laadpaal meer.

Wat dat concreet betekent bij een woning met zonnepanelen:

1. **Inventariseer vóór het werk.** Zijn er panelen? Waar staat de omvormer? Is er een
   thuisaccu? Een laadpaal die kan terugleveren?
2. **Schakel ook de PV-groep uit**, niet alleen de groep waaraan je werkt. Een omvormer
   die actief is, voedt de installatie.
3. **Wees erop bedacht dat de DC-zijde blijft leven**, ook nadat de AC-zijde is
   uitgeschakeld.
4. **Meet, en meet opnieuw.** Bij een installatie met meerdere bronnen is de meting geen
   formaliteit maar de enige manier om te weten waar je aan toe bent.

!!! gevaar Teruglevering betekent spanning aan de verkeerde kant
Bij een gewone installatie stroomt de energie van de meterkast naar de verbruikers. Bij
teruglevering stroomt hij van de omvormer naar de meterkast. Een groep die je "van boven"
hebt uitgeschakeld, kan van beneden gevoed worden. Dit is precies de situatie waarin de
gewoonte om aan te nemen in plaats van te meten dodelijk wordt.
!!!

## Thuisaccu's en bidirectionele laadpalen

Een thuisaccu voedt de installatie ook als het donker is. Een bidirectionele laadpaal
(vehicle-to-home) kan een auto-accu inzetten als voeding voor de woning. In beide
gevallen zijn er bronnen die:

- niet zichtbaar zijn vanaf de meterkast;
- automatisch inschakelen, ook nadat jij iets hebt uitgeschakeld;
- gelijkspanning bevatten aan een van hun zijden.

Dat maakt de inventarisatie vooraf geen formaliteit maar de belangrijkste stap van het
werk.

## Wat je aan de installatie toevoegt

Wanneer jij aan een woning met PV werkt, laat je informatie achter voor de volgende:

- **Labeling in de meterkast**: er is een PV-installatie, waar staat de omvormer, hoe
  wordt die uitgeschakeld.
- **Labeling bij de omvormer**: waar zit de bijbehorende groep in de kast.
- **In het opleverdocument**: dat er meerdere voedingsbronnen zijn.

Een monteur die over vijf jaar aan die kast werkt, heeft geen idee wat er allemaal is
bijgekomen. Jouw label is het enige dat hem waarschuwt.

## Bij storingzoeken

PV verandert ook het storingsbeeld. Klachten die met PV samenhangen:

- de omvormer schakelt uit bij een te hoge netspanning - dat kan komen doordat veel
  omvormers in de straat tegelijk leveren, en is dan geen defect;
- een aardlek die afschakelt sinds de PV-installatie er is - controleer het type;
- vreemde meetwaarden bij metingen overdag die 's avonds normaal zijn.

Dat laatste is een goede vuistregel: meet je iets dat je niet begrijpt in een woning met
PV, controleer dan of het verschil maakt of de omvormer actief is.
`,
  checklist: [
    'Ik inventariseer alle voedingsbronnen voordat ik begin',
    'Ik schakel bij PV ook de omvormergroep uit',
    'Ik weet dat de DC-zijde blijft leven na het uitschakelen van de AC-zijde',
    'Ik laat labeling achter die de volgende monteur waarschuwt'
  ],
  bronnen: ['gemini.md M1', 'copilot.md M7', 'chatgpt.md M1']
},

/* ------------------------------------------------------------------ 10.3 */
{
  id: 'm10l03',
  nr: '10.3',
  titel: 'Laadpalen',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kent de elektrische eisen van een laadpaal en kunt beoordelen of een woning er een aankan.',
  videos: [
    { taal: 'nl', titel: 'Laadpaal installeren: eisen en aansluiting', zoek: 'laadpaal installeren eisen groep aardlek type B' }
  ],
  tekst: `
## Wat een laadpaal vraagt

| Uitvoering | Vermogen | Stroom | Typische doorsnede |
|---|---|---|---|
| 1-fase 16 A | 3,7 kW | 16 A | 2,5 mm², meer bij lengte |
| 1-fase 32 A | 7,4 kW | 32 A | 6 mm² of meer |
| 3-fase 16 A | 11 kW | 3×16 A | 2,5 – 6 mm² naar lengte |
| 3-fase 32 A | 22 kW | 3×32 A | 6 – 10 mm² naar lengte |

Het bepalende verschil met andere verbruikers: een laadpaal trekt zijn stroom **uren
achter elkaar op vrijwel het maximum**. Waar een oven af en toe piekt, is een laadsessie
een continue volle belasting. Kabel, beveiliging en verbindingen worden hier dus echt
belast, en een marginale verbinding komt hier als eerste aan het licht.

## Eigen groep en aardlektype B

Een laadpaal krijgt altijd een eigen eindgroep. Het aardlektype is hier geen keuze maar
een eis: door de elektronica in de auto en de laadpaal kan er een **gladde
gelijkstroomlekstroom** ontstaan, die een type-A aardlek blind maakt (zie module 9.3).

De oplossing is een **type B** aardlekbeveiliging, of een laadpaal met ingebouwde
DC-lekstroomdetectie in combinatie met een type A - wat de fabrikant dan expliciet
opgeeft. Wat het ook wordt: dit lees je in de documentatie van de laadpaal en je vult
het niet zelf in.

!!! gevaar Nooit structureel laden via een verlengsnoer
Een auto laden via een gewoon stopcontact met een verlengsnoer is de klassieke oorzaak
van smeltende stekkers en gevelbranden. Het gaat om uren continue belasting op een
verbinding die daar niet voor is gemaakt, vaak opgerold op een haspel zodat de warmte
niet weg kan. Bij de vraag "kan ik hier mijn auto opladen" is het eerlijke antwoord:
niet zo, wel met een vaste aansluiting.
!!!

## Load balancing

Een woning met een 1×35 A-aansluiting heeft ongeveer 8 kW beschikbaar. Een laadpaal van
7,4 kW gebruikt dat vrijwel volledig. Wordt er tegelijk gekookt, dan schakelt de
hoofdzekering af.

**Load balancing** lost dat op: een meetmodule in de meterkast bewaakt de totale
belasting en stuurt de laadpaal aan om minder vermogen af te nemen zodra de rest van de
woning meer vraagt. De auto laadt dan langzamer, maar het huis valt niet uit.

Varianten:

- **Statisch** - de laadpaal is ingesteld op een vast maximum, ongeacht de rest.
- **Dynamisch** - de laadpaal past zich continu aan de werkelijke belasting aan. Dit
  vereist een meetmodule om de hoofdaansluiting.

Bij vrijwel elke laadpaal in een bestaande woning is dynamische load balancing de
verstandige keuze.

## Het tracé naar buiten

Dezelfde aandachtspunten als bij een buitenunit in module 9.2: werkelijke lengte meten,
grondkabel op voldoende diepte, uv-bestendigheid, waterdichte doorvoeren, mechanische
bescherming, en trekontlasting.

Aanvullend bij laadpalen: houd rekening met de plaats van de auto en de lengte van de
laadkabel, en met de mogelijkheid dat er later een tweede laadpunt bij komt. Een lege
mantelbuis meeleggen kost bijna niets en scheelt later een compleet nieuw tracé.
`,
  checklist: [
    'Ik weet waarom een laadpaal een zwaardere belasting is dan het vermogen suggereert',
    'Ik weet dat een type B aardlek of gelijkwaardige detectie vereist is',
    'Ik kan uitleggen wat dynamische load balancing doet',
    'Ik adviseer nooit structureel laden via een verlengsnoer'
  ],
  bronnen: ['copilot.md M7', 'qwen.md M5', 'grok.md M6']
},

/* ------------------------------------------------------------------ 10.4 */
{
  id: 'm10l04',
  nr: '10.4',
  titel: 'Slimme meter, netbelasting en verzwaring',
  duur: 14,
  type: 'les',
  leerdoel: 'Je kunt beoordelen wanneer een aansluiting niet meer toereikend is en wat de opties zijn.',
  videos: [],
  tekst: `
## De slimme meter

De slimme meter registreert afname en teruglevering apart en communiceert met de
netbeheerder. De **P1-poort** aan de voorkant geeft die gegevens realtime vrij aan de
bewoner, en wordt gebruikt door energiemanagers, load balancing-systemen en
verbruiksmonitoren.

Voor jouw werk is de P1-poort relevant omdat dynamische load balancing en veel
thuisbatterij- en energiemanagementsystemen er hun informatie vandaan halen. Is die poort
al bezet, dan is een splitter of een alternatieve meetmethode nodig.

## Wanneer is verzwaring nodig

De vraag komt op zodra er een zware verbruiker bijkomt. De redenering:

1. Wat is de huidige aansluitwaarde en het bijbehorende vermogen?
2. Wat is de realistische **gelijktijdige** belasting op het zwaarste moment - een koude
   winteravond met koken, laden en verwarmen?
3. Past dat? Zo nee, is load balancing voldoende, of is verzwaring onvermijdelijk?

Verzwaring is een aanvraag bij de netbeheerder, met kosten, een wachttijd die in de
huidige markt fors kan oplopen, en soms werk aan de aansluitkabel of de meterkast. Dat
is een gesprek dat je vroeg voert met de klant, niet op de dag van installatie.

!!! kern Netcongestie is een reëel gegeven
In delen van Nederland is het net zo zwaar belast dat verzwaring niet of pas na lange
tijd mogelijk is. Dat betekent dat het antwoord op "kan hier een laadpaal van 22 kW bij"
soms nee is, ongeacht wat de klant wil betalen. Dat is geen slecht nieuws dat je moet
verzachten maar informatie die de klant nodig heeft om te kiezen - bijvoorbeeld voor
een lager laadvermogen met load balancing, wat in de praktijk vrijwel altijd volstaat.
!!!

## Wat je in de gaten houdt bij bestaande installaties

Wanneer je bij een woning komt waar in de loop der jaren van alles is bijgekomen:

- klopt de faseverdeling nog, of hangt alles zwaars aan één fase?
- is het aantal groepen per aardlek nog acceptabel, of tellen de lekstromen op?
- zijn de aardlektypes nog passend nu er een omvormer en een laadpaal in zitten?
- is de labeling bijgewerkt, of is die inmiddels misleidend?

Dat zijn allemaal bevindingen die je meldt, ook als je voor iets anders kwam. In een
woning waar in tien jaar tijd zonnepanelen, een laadpaal en een warmtepomp zijn
bijgekomen zonder dat iemand het geheel opnieuw heeft bekeken, is dat overzicht vaak het
meest waardevolle wat je kunt leveren.
`,
  checklist: [
    'Ik weet wat de P1-poort is en waarvoor die gebruikt wordt',
    'Ik kan de gelijktijdige belasting inschatten op het zwaarste moment',
    'Ik weet dat verzwaring tijd kost en niet altijd mogelijk is',
    'Ik beoordeel bij bestaande installaties de faseverdeling en de aardlektypes'
  ],
  bronnen: ['copilot.md M7', 'copilot.md M8', 'qwen.md M5']
}

]});
