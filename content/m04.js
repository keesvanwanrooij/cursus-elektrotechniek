CURSUS.addModule({
  id: 'm04',
  nr: 4,
  deel: 1,
  titel: 'Kabel, draad en verbindingen',
  ondertitel: 'Hier zit het verschil tussen amateurwerk en vakwerk.',
  niveau: 'Beginner tot gemiddeld',
  studietijd: 6,
  intro: 'Een circuit kan elektrisch functioneren en tóch slecht zijn aangelegd. Deze module gaat over kabelkeuze, doorsnede en verbindingen die over twintig jaar nog steeds betrouwbaar zijn.',
  inleiding: [
    "Een installatie die werkt is nog geen goede installatie. Hier leer je welke kabels en draden je in Nederland gebruikt, hoe je een doorsnede kiest en hoe je verbindingen maakt die over twintig jaar nog veilig zijn.",
    "Strippen, lasklemmen, adereindhulzen en trekontlasting oefen je het beste zelf op restmateriaal. Dat praktische werk hoort bij elke serieuze zelfstudie elektrotechniek, en de checklists helpen je om je eigen werk kritisch te beoordelen."
  ],
  leerdoelen: [
    'De gangbare Nederlandse kabel- en draadtypen herkennen en benoemen',
    'Uitleggen hoe doorsnede, lengte en installatiemethode de belastbaarheid bepalen',
    'Correct strippen en termineren, met de juiste striplengte en klemtechniek',
    'Uitleggen waarom overgangsweerstand brand veroorzaakt',
    'Een verbinding beoordelen op zes controlepunten'
  ],
  lessen: [

/* ------------------------------------------------------------------ 4.1 */
{
  id: 'm04l01',
  nr: '4.1',
  titel: 'Kabels en draden herkennen',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt de gangbare kabeltypen benoemen en zeggen waar elk type wel en niet voor bedoeld is.',
  videos: [
    { taal: 'en', titel: '10 Mistakes EVERYONE Makes When Doing DIY Electrics (Artisan Electrics)', yt: 'RBuHJNYcc7k', duur: '±15 min' }
  ],
  tekst: `
## Draad, kabel en snoer

Deze drie woorden worden door elkaar gebruikt, maar betekenen iets anders.

**Draad** is één geleider met één laag isolatie, bedoeld om in een buis te worden
getrokken. Hij heeft geen mantel en mag daarom niet los in het zicht of in de grond.

**Kabel** heeft meerdere geleiders binnen één gemeenschappelijke mantel. Die mantel
geeft mechanische bescherming, waardoor de kabel wél los kan worden gelegd.

**Snoer** is soepel en bedoeld voor beweegbare apparatuur, niet voor vaste installatie.

## De gangbare typen in Nederlandse woningen

| Type | Wat het is | Waar je het gebruikt |
|---|---|---|
| VD | Eenaderig installatiedraad, massief | In buis, in de wand of in de kast |
| VMvK | Meeraderige kabel met PVC-mantel | Vaste installatie binnen, op de wand |
| YMvK | Meeraderige kabel, robuustere PVC-mantel | Vaste installatie, ook in beton en vochtige ruimtes |
| XMvK | Als YMvK maar met kunststof mantel voor grondwerk | In de grond, naar tuinhuis, buitenunit |
| Montagedraad (soepel) | Fijndradig, flexibel | In kasten, waar bewegingsruimte of buigzaamheid nodig is |

De letters zijn geen willekeur: ze coderen de opbouw en het isolatiemateriaal. Voor je
dagelijkse werk is het belangrijkste onderscheid: mag deze kabel hier liggen, gezien
mechanische belasting, vocht, uv-licht en grondcontact.

!!! kern De vraag bij kabelkeuze
Niet "welke kabel heb ik in de bus", maar: hoeveel aders, welke doorsnede, en welke
omgeving moet hij twintig jaar overleven. Buiten, in de grond, of achter een gipsplaat
is drie keer een ander antwoord.
!!!

## Massief of soepel

**Massieve geleiders** (één dikke kern) zijn ideaal voor vaste installatie: ze houden
hun vorm, zitten stevig in veerklemmen en trekken makkelijk door een buis.

**Soepele geleiders** (veel dunne draadjes) zijn nodig waar beweging of krappe bochten
in het spel zijn, bijvoorbeeld in een gevulde groepenkast.

Het cruciale verschil in verwerking: een soepele geleider hoort in de meeste
klemsystemen een **adereindhuls**. Zonder huls waaieren de draadjes uit, komt er nog
maar een deel onder de klem, en ontstaat er een te klein contactoppervlak - met alle
gevolgen die les 4.4 beschrijft.

## Aders herkennen

| Kleur | Functie |
|---|---|
| Bruin | Fase (L, of L1) |
| Zwart | Fase (L2) of schakeldraad |
| Grijs | Fase (L3) of schakeldraad |
| Blauw | Nul (N) |
| Geelgroen | Beschermingsleiding (PE) - uitsluitend hiervoor |

Geelgroen is de enige kleurcombinatie met een absolute betekenis: die ader is altijd en
uitsluitend beschermingsleiding. Blauw als fase gebruiken of geelgroen als schakeldraad
misbruiken is niet "even praktisch", het is het onbruikbaar maken van de enige
visuele veiligheidsinformatie die de volgende monteur heeft.

!!! gevaar Oude installaties hebben andere kleuren
In installaties van vóór de huidige kleurcodering kom je rood, groen, zwart en andere
combinaties tegen, soms met een volstrekt andere betekenis. Kleur is daar geen bewijs,
alleen een aanwijzing. Meten blijft het enige dat telt.
!!!
`,
  checklist: [
    'Ik kan draad, kabel en snoer uit elkaar houden',
    'Ik weet welk kabeltype in de grond mag en welk niet',
    'Ik weet wanneer een adereindhuls nodig is',
    'Ik gebruik geelgroen uitsluitend voor de beschermingsleiding'
  ],
  bronnen: ['chatgpt.md M4', 'deekseek.md M2', 'qwen.md M4']
},

/* ------------------------------------------------------------------ 4.2 */
{
  id: 'm04l02',
  nr: '4.2',
  titel: 'Doorsnede, belastbaarheid en spanningsval',
  duur: 20,
  type: 'les',
  leerdoel: 'Je begrijpt waarom een doorsnede niet één vast getal aan ampères kan voeren, en welke factoren dat beïnvloeden.',
  videos: [],
  tekst: `
## Waarom een kabel warm wordt

Elke geleider heeft weerstand. Loopt er stroom doorheen, dan wordt er vermogen omgezet
in warmte:

**P = I² × R**

De kwadratische factor is bepalend: verdubbel je de stroom, dan verviervoudigt de
warmteontwikkeling. Een kabel is dus niet lineair overbelastbaar.

Die warmte moet weg kunnen. Kan dat niet, dan stijgt de temperatuur van de isolatie,
verouderd het PVC versneld, wordt het bros, en ontstaat op termijn een fout - soms
tien jaar na de aanleg.

## Waarom er geen enkel getal bestaat

De belastbaarheid van dezelfde 2,5 mm² kabel verschilt aanzienlijk per situatie:

| Factor | Effect |
|---|---|
| Installatiemethode | Vrij in de lucht koelt veel beter dan in een gesloten buis in isolatiemateriaal |
| Bundeling | Tien kabels in één goot verwarmen elkaar; elke kabel mag dan minder |
| Omgevingstemperatuur | Een warme technische ruimte of een dak in de zomer verlaagt de belastbaarheid |
| Isolatiemateriaal | PVC verdraagt minder temperatuur dan XLPE |
| Lengte | Beïnvloedt niet de warmte per meter, maar wel de spanningsval |

Daarom staan er in NEN 1010 tabellen met correctiefactoren, en daarom is "2,5 mm² kan
20 A" een vuistregel en geen waarheid.

!!! kern Ongunstigste gangbare situatie
De vuistregels die je in Nederland hoort - 1,5 mm² met 16 A, 2,5 mm² met 20 A - zijn
gebaseerd op de ongunstigste gangbare installatiemethode: in een buis, weggewerkt in de
wand. Ligt je kabel gunstiger, dan zit je aan de veilige kant. Ligt hij ongunstiger,
bijvoorbeeld gebundeld in isolatiemateriaal, dan klopt de vuistregel niet meer.
!!!

## Spanningsval

Over de weerstand van de kabel valt spanning weg, dus komt er bij de verbruiker minder
aan dan er vertrekt:

**U val = I × R kabel**

Bij korte leidingen is dat verwaarloosbaar. Bij een lange leiding naar een tuinhuis,
een buitenunit of een laadpaal wordt het bepalend. De praktische gevolgen:

- verbruikers presteren minder (een motor die minder koppel levert en warmer wordt);
- de energie die je verliest wordt warmte in de kabel;
- bij een kortsluiting aan het einde van een lange leiding kan de stroom te laag zijn
  om de automaat snel genoeg te laten afschakelen.

Dat laatste punt is een veiligheidsargument en niet alleen een kwaliteitsargument. Voor
woninginstallaties wordt in de praktijk een spanningsval van orde 3 % over een eindgroep
aangehouden.

## De vuistregel als startpunt

| Doorsnede | Gangbare beveiliging in woningen |
|---|---|
| 1,5 mm² | 16 A |
| 2,5 mm² | 16 A of 20 A |
| 4 mm² | 20 A of 25 A |
| 6 mm² | 25 A of 35 A |
| 10 mm² | 40 A of meer, en voedingskabels |

Gebruik dit om te weten of je in de goede orde van grootte zit. Wordt de leiding lang,
loopt hij door isolatie, of gaat het om een warmtepomp of laadpaal, dan hoort er een
echte berekening bij - en die maak je in deze fase samen met iemand met meer ervaring.

?? Waarom kun je niet gewoon overal 2,5 mm² leggen voor de zekerheid?
Dat mag technisch meestal wel en is soms verstandig, maar het heeft grenzen. Dikkere
aders passen slechter in schakelmateriaal en centraaldozen, zijn stugger in krappe
inbouwdozen, kosten meer, en verleiden een volgende monteur ertoe de beveiliging te
verzwaren omdat "de kabel dik genoeg is" - terwijl een ander deel van hetzelfde circuit
dunner kan zijn. Bewust kiezen is beter dan overal het maximum leggen.
??
`,
  checklist: [
    'Ik kan uitleggen waarom belastbaarheid afhangt van de installatiemethode',
    'Ik weet waarom bundeling de toegestane stroom verlaagt',
    'Ik kan uitleggen waarom spanningsval bij lange leidingen een veiligheidskwestie is',
    'Ik ken de vuistregels voor doorsnede en beveiliging'
  ],
  bronnen: ['gemini.md M3', 'chatgpt.md M4', 'copilot.md M3']
},

/* ------------------------------------------------------------------ 4.3 */
{
  id: 'm04l03',
  nr: '4.3',
  titel: 'Strippen en termineren',
  duur: 22,
  type: 'les',
  leerdoel: 'Je kunt een geleider strippen en aansluiten zodat de verbinding elektrisch en mechanisch in orde is.',
  videos: [
    { taal: 'nl', titel: 'Stopcontact aansluiten, draden strippen, Wago', yt: 'Z5li77ywG5g', duur: 'kort' }
  ],
  tekst: `
## Elke verbinding heeft twee functies

Een verbinding moet **elektrisch goed geleiden** én **mechanisch betrouwbaar blijven**,
jarenlang, terwijl hij opwarmt en afkoelt en terwijl er af en toe aan de kabel wordt
getrokken. Slaagt hij op één van die twee punten niet, dan is hij fout - ook al werkt
het circuit vandaag prima.

## Strippen zonder schade

**Striplengte**: de klem of het component schrijft voor hoeveel isolatie eraf moet.
Bij lasklemmen en schakelmateriaal staat dat vaak als maatstreepje of getal op het
component zelf. Meten of aflezen, niet schatten.

**Te kort gestript** → de isolatie komt onder de klem, waardoor het koper maar
gedeeltelijk contact maakt. Het contactoppervlak wordt klein en de overgangsweerstand
hoog.

**Te lang gestript** → er blijft blank koper buiten de klem zichtbaar. Dat is een
aanraakbaar spanningvoerend deel en, in een volle doos, een kortsluiting die op een
verschuiving wacht.

**Ingesneden koper** → een striptang die te diep gaat, snijdt in de geleider. De
doorsnede wordt daar kleiner, dus de weerstand hoger en de warmteontwikkeling groter.
Bij massief draad breekt de ader daar op termijn af, precies op het punt waar hij het
meest beweegt.

Gebruik daarom een goede striptang met instelbare diepte of automatische aanpassing,
en niet je zijkniptang of een mesje.

## Adereindhulzen

Voor soepele geleiders in klem- of schroefverbindingen:

1. Kies de huls die past bij de doorsnede - de kleurcodering helpt daarbij.
2. Strip op de lengte van de huls.
3. Draai de draadjes samen en schuif ze volledig in de huls.
4. Pers met een **hulzentang** (vierkant- of trapeziumpers), niet met een waterpomptang.
5. Controleer: geen losse draadjes buiten de huls, huls volledig gevuld.

Een slecht geperste huls is een verborgen overgangsweerstand.

## Schroefverbindingen en aanhaalmoment

Bij schroefklemmen - in schakelmateriaal, automaten en hoofdschakelaars - is het
aanhaalmoment een specificatie van de fabrikant, geen gevoelskwestie.

**Te los** → klein contactoppervlak, hoge overgangsweerstand, warmteontwikkeling,
kruip van het materiaal, en na verloop van tijd nog losser.

**Te vast** → de geleider wordt vervormd of beschadigd, de klem kan scheuren, en de
veerwerking verdwijnt.

Voor werk in verdeelinrichtingen is een momentschroevendraaier daarom geen luxe. Waar
je die niet hebt, geldt: naschroeven na enige tijd bij zwaardere verbindingen, en de
fabrikantwaarde opzoeken bij twijfel.

!!! gevaar Aluminium en koper niet mengen
Aluminium en koper vormen bij direct contact een elektrochemisch koppel dat corrodeert,
zeker in aanwezigheid van vocht. De overgangsweerstand loopt op en de verbinding wordt
een warmtebron. Zijn beide materialen in het spel, dan hoort daar specifiek daarvoor
bedoeld verbindingsmateriaal bij.
!!!

## De zes controlepunten

Loop na elke verbinding deze lijst af. Na een paar honderd keer doe je het automatisch:

1. Geen koper beschadigd of ingesneden.
2. Geen blank koper zichtbaar buiten de klem.
3. Geen isolatie onder de klem.
4. Geleider volledig ingestoken tot de aanslag.
5. Verbinding mechanisch stevig - trektest met een rustige, gedoseerde trek.
6. De bedrading blijft overzichtelijk, met voldoende lengte om later nog te kunnen werken.
`,
  checklist: [
    'Ik strip op de voorgeschreven lengte in plaats van op gevoel',
    'Ik gebruik een hulzentang voor adereindhulzen, geen combinatietang',
    'Ik ken de zes controlepunten en loop ze na elke verbinding af',
    'Ik heb twintig identieke oefenverbindingen gemaakt en beoordeeld'
  ],
  bronnen: ['chatgpt.md M4', 'gemini.md M2', 'deekseek.md M2']
},

/* ------------------------------------------------------------------ 4.4 */
{
  id: 'm04l04',
  nr: '4.4',
  titel: 'Lasklemmen en overgangsweerstand',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt uitleggen waarom een losse verbinding brand veroorzaakt, en de gangbare verbindingsmethoden beoordelen.',
  videos: [
    { taal: 'en', titel: 'Why Loose Wires Cause Fires (Electrician U)', yt: 'yLGfokoU_UA', duur: '±12 min' }
  ],
  tekst: `
## Het mechanisme achter de meeste installatiebranden

Een verbinding die niet goed vastzit, heeft een kleiner contactoppervlak. Daardoor
ontstaat er een **overgangsweerstand** van bijvoorbeeld 0,5 tot 1 Ω - een waarde die
in een meting nauwelijks opvalt.

Loopt er 10 A door die verbinding, dan wordt daar omgezet:

**P = I² × R = 10² × 1 = 100 W**

Honderd watt in het volume van een lasklem. Ter vergelijking: dat is een ouderwetse
gloeilamp, weggestopt in een gesloten doos tegen brandbaar materiaal.

En het wordt erger met de tijd: de warmte doet het materiaal uitzetten en krimpen, de
klemkracht neemt af, de weerstand stijgt, de temperatuur stijgt verder. Dit heet
thermische wegloop, en het verklaart waarom installatiebranden vaak jaren na de
aanleg ontstaan.

!!! gevaar De verbinding die het "gewoon deed"
Een slechte verbinding werkt in het begin prima. Alle lampen branden, de klant is
tevreden, en de fout is onzichtbaar tot hij zich als brandlucht meldt. Vakwerk bij
verbindingen is daarom geen kwestie van netheid maar van veiligheid op termijn.
!!!

## Verbindingsmethoden vergeleken

| Methode | Werking | Beoordeling |
|---|---|---|
| Veerklem (Wago-type) | Een veer drukt de geleider met constante kracht tegen een railtje | Constante klemkracht, onafhankelijk van de monteur; standaard in modern werk |
| Hendelklem | Als veerklem, maar met open/dicht hendel | Ook geschikt voor soepele geleiders, herbruikbaar, iets groter |
| Kroonsteen | Schroef drukt op de geleider | Afhankelijk van aandraaien en naschroeven, gevoelig voor kruip |
| Lasdop | Draadverbinding onder een dop | In Nederland zeldzaam geworden, gevoelig voor onvakkundige toepassing |

De veerklem heeft het grootste voordeel dat de klemkracht **niet afhangt van de
handkracht en het humeur van de monteur**. Dat is precies de variabele die de meeste
slechte verbindingen veroorzaakt.

## Veerklemmen goed toepassen

- Strip op de **op de klem aangegeven** lengte, exact.
- Steek massief draad recht en volledig in tot de aanslag; je voelt en ziet dat hij zit.
- Soepel draad: adereindhuls, of een klemtype dat expliciet geschikt is voor soepel
  draad met open hendel.
- Controleer met een lichte trek of de geleider vastzit.
- Gebruik het aantal polen dat je nodig hebt; laat geen ongebruikte openingen als
  toegang tot spanningvoerende delen liggen waar dat vermijdbaar is.
- Let op de toegestane doorsnede: elke klem heeft een minimum en een maximum.

## De lasdoos zelf

Een verbinding hoort in een daarvoor bestemde doos die bereikbaar blijft. Een lasklem
los in een spouwmuur of ingemetseld achter tegels is geen verbinding maar een tijdbom
die je niet meer kunt inspecteren.

De regel is eenvoudig: **elke verbinding moet later terug te vinden en te controleren
zijn.** Wie dat aanhoudt, bespaart de volgende monteur - die vaak jijzelf bent - uren
zoeken en sloopwerk.
`,
  checklist: [
    'Ik kan met P = I²R uitrekenen hoeveel warmte een slechte verbinding produceert',
    'Ik kan uitleggen wat thermische wegloop is',
    'Ik weet waarom een veerklem betrouwbaarder is dan een kroonsteen',
    'Ik plaats verbindingen uitsluitend in bereikbare dozen'
  ],
  bronnen: ['gemini.md M2', 'chatgpt.md M4', 'deekseek.md M2']
},

/* ------------------------------------------------------------------ 4.5 */
{
  id: 'm04l05',
  nr: '4.5',
  titel: 'Routing, trekontlasting en vakwerk',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt een kabeltracé plannen en afmonteren zodat het werk ook over jaren nog te begrijpen en te onderhouden is.',
  videos: [
    { taal: 'en', titel: 'How to Wire an Electrical Panel - Good Workmanship', yt: 'nxPZxJwdIGE', duur: '±20 min' }
  ],
  tekst: `
## Eerst denken, dan trekken

Voordat je een kabel trekt, staat vast waar hij eindigt, welke route hij neemt, en wat
er onderweg gebeurt. Dat lijkt vanzelfsprekend en is het in de praktijk zelden.

Vragen vooraf:

- Waar zit het aansluitpunt precies, ook in hoogte?
- Welke route is de kortste die tegelijk beschermd en bereikbaar is?
- Kruis ik water-, gas- of cv-leidingen, en met welke afstand?
- Kan er later iemand in deze muur boren, en ligt de kabel dan op een voorspelbare plaats?
- Waar komen de verbindingen, en blijven die bereikbaar?

## Voorspelbare tracés

In woningen worden leidingen bij voorkeur **verticaal en horizontaal** gelegd, in lijn
met schakelaars en contactdozen, en niet diagonaal. Dat is niet esthetiek: het is de
enige manier waarop iemand die later een schilderij ophangt, kan voorspellen waar niet
geboord mag worden.

Een diagonaal getrokken kabel achter stucwerk is jaren later niet terug te vinden en
maakt van elke boring een gok.

## Trekontlasting

Elke kabel die een apparaat, kast of doos binnenkomt, hoort mechanisch te zijn
vastgezet vóórdat hij de klemmen bereikt. Wordt er aan de kabel getrokken, dan mag die
kracht nooit op de aansluitklemmen terechtkomen.

Middelen: wartels, kabelbinders op een bevestigingspunt, ingebouwde trekontlasting in
schakelmateriaal, of een klem in de kast. Bij buitenwerk levert de wartel bovendien de
vereiste dichtheid, waar module 9 op terugkomt.

!!! kern De test van goed vakwerk
Kan een volgende monteur binnen een minuut zien wat jij hebt gedaan en waarom? Kan hij
één groep uitschakelen zonder het hele huis stil te leggen? Vindt hij de verbindingen
terug? Zo ja, dan was het vakwerk, ongeacht hoe snel het ging.
!!!

## In de kast: waarom orde functioneel is

Nette bedrading in een groepenkast is geen ijdelheid:

- **Foutzoeken** gaat sneller als je een ader visueel kunt volgen.
- **Warmte** kan beter weg bij ordelijke bundels dan bij een kluwen.
- **Uitbreiden** is mogelijk zonder alles los te halen.
- **Fouten** vallen op. In een rommelige kast valt een vergeten ader niemand op.

Praktisch: aders op lengte, met een kleine reservelus zodat je later nog kunt
verplaatsen, gebundeld per functie, kamrail op maat en afgedekt, en labeling die
overeenkomt met het schema in de kast.

## Wat de klant ziet

De klant beoordeelt jouw Ohm's wet niet. Hij ziet scheve wandcontactdozen, gaten die
te ruim zijn uitgehakt, stof op de vloer, losse afdekramen en boorgruis in de
vensterbank.

Technische kwaliteit en zichtbare kwaliteit zijn twee verschillende vaardigheden, en je
hebt ze allebei nodig. Het goede nieuws: de tweede is grotendeels een kwestie van
gewoontes - afdekken vóór je begint, opruimen tijdens in plaats van achteraf, en het
werk altijd minstens zo netjes achterlaten als je het aantrof.
`,
  checklist: [
    'Ik bepaal het volledige tracé voordat ik begin met trekken',
    'Ik leg leidingen verticaal en horizontaal in lijn met aansluitpunten',
    'Ik zorg dat elke kabel trekontlasting heeft voordat hij de klemmen bereikt',
    'Ik laat de werkplek schoner achter dan ik hem aantrof'
  ],
  bronnen: ['chatgpt.md M4', 'chatgpt.md professional quality', 'qwen.md M4', 'grok.md M5']
}

]});
