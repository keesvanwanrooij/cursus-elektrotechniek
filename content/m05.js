CURSUS.addModule({
  id: 'm05',
  nr: 5,
  deel: 1,
  titel: 'Schakelingen en aansluitpunten',
  ondertitel: 'Het werk waarmee je in de praktijk het snelst ervaring opdoet.',
  niveau: 'Beginner tot gemiddeld',
  studietijd: 8,
  intro: 'Schema lezen en tekenen, en daarna de schakelingen bouwen die je in vrijwel elke woning tegenkomt: enkelpolig, wissel, kruis, en de wandcontactdozen eromheen.',
  inleiding: [
    "Licht aan, licht uit, en soms vanaf twee of drie plekken tegelijk. In deze module leer je de schakelingen kennen die je in bijna elke woning tegenkomt: enkelpolig, wissel, kruis en serie, plus de wandcontactdozen eromheen.",
    "Je leert installatieschema's lezen en tekenen, dimmers en sensoren kiezen en de badkamerzones toepassen. Zo leer je stap voor stap een schema begrijpen in plaats van draden na te doen."
  ],
  leerdoelen: [
    'Een installatieschema lezen en zelf een schema tekenen voordat je monteert',
    'De enkelpolige schakeling volledig doorredeneren van fase tot nul',
    'Een wissel- en een kruisschakeling opbouwen en de fouten erin herkennen',
    'Wandcontactdozen correct aansluiten en doorlussen',
    'De badkamerzones en IP-codering toepassen bij vochtige ruimtes'
  ],
  lessen: [

/* ------------------------------------------------------------------ 5.1 */
{
  id: 'm05l01',
  nr: '5.1',
  titel: 'Schema lezen en tekenen',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt een installatieschema lezen en zelf schetsen wat er elektrisch moet gebeuren voordat je gereedschap pakt.',
  videos: [
    { taal: 'nl', titel: 'Installatieschema (ElektroTube)', yt: 'qA5iEeupYRo', duur: '±12 min' }
  ],
  tekst: `
## Twee soorten schema's

Een **installatieschema** (ook wel eendraadschema) toont wat er functioneel gebeurt:
welke schakelaar bedient welk lichtpunt, hoeveel aders er tussen twee punten lopen.
Compact, en bedoeld om de opzet te begrijpen.

Een **bedradingsschema** toont elke ader afzonderlijk: welke draad op welke klem. Dat
is wat je nodig hebt tijdens het monteren.

Een goede elektricien kan het eerste lezen en het tweede zelf afleiden.

## Waarom je eerst tekent

De verleiding is groot om direct te monteren en op je geheugen te vertrouwen:
"volgens mij zat die zwarte draad daar". Dat werkt tot het misgaat, en dan kost het
uren.

Tekenen dwingt je om drie vragen te beantwoorden vóórdat er iets vastzit:

1. Waar komt de permanente fase vandaan?
2. Waar loopt de nul heen, en langs welke weg terug?
3. Waar hoort de beschermingsleiding, en wat is er metaal dat geaard moet worden?

Een schets van dertig seconden op de achterkant van een doos verdient zichzelf vrijwel
altijd terug.

!!! kern De volgorde van vakwerk
Schema → montage → controle van de bedrading tegen het schema → continuïteitscontrole →
visuele inspectie → pas dan spanning erop. Elke stap die je overslaat, moet je later
alsnog doen, maar dan onder tijdsdruk en met spanning erop.
!!!

## De symbolen die je dagelijks tegenkomt

| Symbool | Betekenis |
|---|---|
| Cirkel met kruis | Lichtpunt |
| Schuine streep met bolletje | Enkelpolige schakelaar |
| Twee schuine strepen | Wisselschakelaar |
| Kruis met vier aansluitingen | Kruisschakelaar |
| Halve cirkel met twee streepjes | Wandcontactdoos |
| Idem met streep erdoor | Wandcontactdoos met randaarde |
| Cirkel met punt | Centraaldoos of aftakdoos |
| Getal bij een lijn | Aantal aders in die leiding |

Dat laatste is het meest gebruikte hulpmiddel bij het lezen van een woningschema: een
"3" bij een leiding tussen schakelaar en centraaldoos vertelt je meteen dat het geen
enkelvoudige schakeling is.

## Een schema maken van een bestaande installatie

Bij storingzoeken en verbouwingen kom je vaak een installatie tegen zonder enige
documentatie. Dan teken je zelf, gaandeweg:

- Begin bij de groepenkast en noteer welke groep welke ruimte voedt.
- Teken per ruimte de aansluitpunten en de zichtbare centraaldozen.
- Meet met een doorbelfunctie welke ader waar uitkomt - spanningsloos.
- Noteer wat je aantreft, ook als het onlogisch is. Vooral dan.

Dat schema laat je achter bij de klant of in de meterkast. Het is vaak het meest
gewaardeerde onderdeel van je werk, en het kost je een half uur.
`,
  checklist: [
    'Ik teken het schema voordat ik begin met monteren',
    'Ik kan de gangbare symbolen in een woningschema benoemen',
    'Ik weet dat een getal bij een leiding het aantal aders aangeeft',
    'Ik laat een schema achter bij werk dat ik heb aangepast'
  ],
  bronnen: ['chatgpt.md M5', 'gemini.md M5', 'kimi.md M4']
},

/* ------------------------------------------------------------------ 5.2 */
{
  id: 'm05l02',
  nr: '5.2',
  titel: 'De enkelpolige schakeling',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt de eenvoudigste lichtschakeling volledig doorredeneren en aanwijzen wat er elektrisch gebeurt bij het openen van de schakelaar.',
  videos: [],
  tekst: `
## De keten

De eenvoudigste lichtschakeling ziet er zo uit:

**Fase → schakelaar → schakeldraad → lamp → nul → terug naar de kast**

De beschermingsleiding loopt mee naar alle metalen delen die aangeraakt kunnen worden,
en naar het armatuur als dat een metalen behuizing heeft.

Wat er gebeurt als je de schakelaar opent: de keten wordt onderbroken, de weerstand
wordt oneindig, er loopt geen stroom meer, en de lamp dooft. De volle netspanning staat
nu over de geopende schakelaarcontacten. Voorbij de schakelaar, op de schakeldraad,
staat geen spanning meer - in een correct uitgevoerde installatie.

!!! gevaar Schakel altijd de fase, nooit de nul
Wordt de nul geschakeld in plaats van de fase, dan lijkt de lamp uit maar staat het hele
armatuur nog steeds onder spanning. Wie dan een lamp vervangt, raakt een spanningvoerend
deel aan terwijl de schakelaar op "uit" staat. Dit is een klassieke fout in oude en
in ondeskundig aangepaste installaties, en een van de redenen dat je nooit op de stand
van een schakelaar vertrouwt.
!!!

## De centraaldoos

In de Nederlandse woningbouw komen de leidingen samen in een **centraaldoos** in het
plafond. Daar zitten meestal:

- de permanente fase van de groep;
- de nul van de groep;
- de beschermingsleiding;
- de leiding naar de schakelaar (fase heen, schakeldraad terug);
- de leiding naar het lichtpunt.

De schakelaar krijgt dus de fase toegevoerd en stuurt hem als **schakeldraad** terug
naar de doos, waar hij doorgaat naar de lamp. De nul gaat rechtstreeks van de doos naar
de lamp en komt niet bij de schakelaar.

Dat verklaart het praktijkprobleem bij slimme schakelaars: die hebben zelf voeding
nodig en dus een nul in de schakeldoos, en die is er in dit klassieke schema niet.
Module 11 gaat daarop door.

## Het schakelmateriaal zelf

- **Inbouwdoos** waterpas plaatsen, en op de juiste diepte. Een doos die te diep zit,
  maakt afmonteren onmogelijk; te ondiep en de afdekplaat sluit niet aan.
- **Aders op lengte** met een kleine reservelus, zodat je het component later kunt
  uitnemen zonder alles los te halen.
- **Klemmen** volgens de aanduiding op het component: L voor de aanvoer, de
  genummerde of gemarkeerde klem voor de schakeldraad.
- **Afdekraam** pas aan het eind, en controleer of het recht zit - dit is het enige
  deel van je werk dat de klant elke dag ziet.

## Controleren voordat er spanning op komt

1. Vergelijk de bedrading met je schema, ader voor ader.
2. Controleer met een doorbelmeting of de schakeldraad daadwerkelijk doorloopt naar de
   lamp en of er geen sluiting is tussen fase en nul.
3. Controleer of de beschermingsleiding overal is doorverbonden.
4. Kijk visueel: geen blank koper, alle klemmen vast, alles zit netjes in de doos.
5. Pas daarna spanning erop, en test in beide standen.
`,
  checklist: [
    'Ik kan de volledige keten van fase naar nul beschrijven bij een lichtschakeling',
    'Ik schakel altijd de fase en nooit de nul',
    'Ik weet welke aders in een centraaldoos samenkomen',
    'Ik doorloop de vijf controlestappen voordat ik spanning inschakel'
  ],
  bronnen: ['chatgpt.md M5', 'kimi.md M4', 'deekseek.md M2']
},

/* ------------------------------------------------------------------ 5.3 */
{
  id: 'm05l03',
  nr: '5.3',
  titel: 'Wissel- en kruisschakeling',
  duur: 22,
  type: 'les',
  leerdoel: 'Je kunt een wisselschakeling en een kruisschakeling opbouwen en de veelgemaakte fouten erin herkennen.',
  videos: [
    { taal: 'nl', titel: 'Wisselschakeling aansluiten - elektra tutorial', yt: 'qfDZNUOtah0', duur: '±10 min' }
  ],
  tekst: `
## De wisselschakeling: één lamp, twee bedieningspunten

Denk aan een trappenhuis: beneden aan, boven uit. Dat vraagt om twee schakelaars die
allebei onafhankelijk de toestand kunnen omkeren.

Een **wisselschakelaar** heeft drie aansluitingen: één gemeenschappelijk contact en
twee wisselcontacten. Hij verbindt het gemeenschappelijke contact met het ene óf het
andere wisselcontact - hij onderbreekt niet, hij kiest.

De opbouw:

1. De fase komt binnen op het gemeenschappelijke contact van schakelaar A.
2. Tussen de twee wisselcontacten van A en de twee wisselcontacten van B lopen de
   **twee wisseldraden**.
3. Vanaf het gemeenschappelijke contact van B gaat de schakeldraad naar de lamp.
4. De nul gaat rechtstreeks naar de lamp.

De lamp brandt wanneer beide schakelaars dezelfde wisseldraad hebben gekozen. Zet je er
één om, dan is de keten verbroken. Zet je de andere ook om, dan is de keten via de
andere wisseldraad weer gesloten. Vandaar dat elke schakelaar altijd werkt, ongeacht de
stand van de andere.

## De kruisschakeling: drie of meer bedieningspunten

Voor een derde bedieningspunt komt er tussen de twee wisselschakelaars een
**kruisschakelaar** te staan. Die heeft vier aansluitingen en doet één ding: de twee
wisseldraden onderling verwisselen of doorlaten.

Elke extra kruisschakelaar die je ertussen zet, voegt een bedieningspunt toe. Het
principe blijft: aan de uiteinden twee wisselschakelaars, daartussen zoveel
kruisschakelaars als je bedieningspunten nodig hebt.

!!! kern De denkfout die je moet vermijden
Een wisselschakeling heeft geen "aan" en "uit". Beide standen zijn gelijkwaardig; de
lamp brandt afhankelijk van de combinatie van standen. Wie probeert de schakelaars
"goed om te zetten" tijdens het monteren, raakt in verwarring. Redeneer via de
verbindingen, niet via de standen.
!!!

## Veelgemaakte fouten

**Fase op een wisselcontact in plaats van op het gemeenschappelijke contact.**
Gevolg: de lamp reageert wel, maar niet in alle combinaties, of er ontstaat kortsluiting
zodra beide schakelaars in dezelfde stand komen.

**Wisseldraden verwisseld met de schakeldraad.** De schakeling lijkt te werken vanaf
één punt en niet vanaf het andere.

**Onderbreken van de nul in plaats van de fase** - zelfde gevaar als bij de
enkelpolige schakeling.

**Bij LED-verlichting: nagloeien.** Sommige schakelmaterialen met controlelampje of
lange parallel lopende leidingen laten een minieme stroom lopen die bij een LED al
zichtbaar is. Oplossing is meestal het verwijderen van het controlelampje of het
plaatsen van een geschikte ontstoringscondensator bij het armatuur.

## Controleren zonder spanning

Bij een wisselschakeling kun je vrijwel alles controleren met een doorbelmeting,
spanningsloos:

- meet tussen het gemeenschappelijke contact van A en dat van B, in alle vier de
  combinaties van standen - twee ervan moeten doorverbinding geven, twee niet;
- controleer dat er in geen enkele stand doorverbinding is tussen fase en nul.

Vind je dat patroon, dan is de schakeling correct opgebouwd en kun je met vertrouwen
inschakelen.
`,
  checklist: [
    'Ik kan uitleggen hoe een wisselschakeling elektrisch werkt',
    'Ik weet waar de fase binnenkomt en waar de schakeldraad vertrekt',
    'Ik kan een kruisschakeling tussen twee wisselschakelaars plaatsen',
    'Ik kan een wisselschakeling spanningsloos controleren met een doorbelmeting'
  ],
  bronnen: ['chatgpt.md M5', 'gemini.md M2', 'kimi.md M4', 'qwen.md M4']
},

/* ------------------------------------------------------------------ 5.4 */
{
  id: 'm05l04',
  nr: '5.4',
  titel: 'Serieschakeling, dimmers en sensoren',
  duur: 16,
  type: 'les',
  leerdoel: 'Je kunt de serieschakeling toepassen en weet waar je op let bij dimmers en bewegingsmelders met moderne verlichting.',
  videos: [],
  tekst: `
## De serieschakeling in installatietermen

Let op de terminologie: een **serieschakelaar** in de installatietechniek is niet
hetzelfde als een serieschakeling in de elektrotechniek. Het is een schakelaar met twee
onafhankelijke wippen in één inbouwdoos, die twee lichtpunten apart bedient - bekend
van de badkamer, waar de ene wip het licht en de andere de ventilator schakelt.

De fase komt binnen op een gemeenschappelijke klem en gaat via twee gescheiden
contacten naar twee schakeldraden.

## Dimmen en LED

Het dimmen van een gloeilamp was eenvoudig: minder spanning, minder licht. LED-lampen
werken fundamenteel anders - ze bevatten een elektronische driver, en die reageert niet
lineair op een verlaagde spanning.

Praktische aandachtspunten:

- Gebruik een **LED-geschikte dimmer**, en controleer de opgegeven minimum- en
  maximumbelasting. Veel dimmers hebben een ondergrens die met drie LED-lampjes al niet
  wordt gehaald, waardoor ze gaan flikkeren.
- Let op **fase-aansnijding versus fase-afsnijding** (RL of RC). Welke variant nodig is,
  hangt af van de driver in de lamp; de fabrikant van de lamp geeft dat aan.
- **Combineer geen verschillende lamptypen** op één dimmer.
- Flikkeren, brommen of niet uitgaan is bijna altijd een combinatieprobleem van dimmer
  en lamp, en zelden een defect.

!!! kern De vraag bij dimmerklachten
Bij "de lampen flikkeren" is de eerste vraag niet welke dimmer kapot is, maar welke
combinatie van dimmer en lamp er is toegepast en of die door beide fabrikanten wordt
ondersteund. Dat scheelt vaak een onnodige vervanging.
!!!

## Bewegingsmelders en aanwezigheidsmelders

Een **bewegingsmelder** (PIR) reageert op warmtebeweging, een
**aanwezigheidsmelder** is gevoeliger en houdt het licht aan bij kleine bewegingen.

Bij de installatie let je op:

- **Nuldraad nodig?** Veel elektronische melders hebben een eigen voeding en dus een
  nul in de schakeldoos. Dat is in het klassieke Nederlandse centraaldoosschema vaak
  niet aanwezig; controleer dit vóórdat je het component koopt.
- **Minimale belasting.** Sommige melders hebben, net als dimmers, een ondergrens die
  met LED-verlichting niet wordt gehaald.
- **Plaatsing.** PIR-sensoren detecteren beweging dwars op hun kijkrichting beter dan
  recht op zich af. Een sensor recht tegenover een deur werkt slechter dan een die de
  loopbeweging zijdelings ziet.
- **Detectiegebied en nalooptijd** stel je in samen met de klant, ter plekke. Wat op
  papier redelijk lijkt, blijkt in de gang vaak te kort of te lang.

## Nagloeiende LED's

Een veelvoorkomende klacht: de LED-lamp gloeit zwak na als de schakelaar uit staat.
Oorzaken zijn meestal een controlelampje in de schakelaar, een elektronische component
die zijn eigen voeding via de lamp trekt, of capacitieve koppeling in een lange parallel
lopende leiding.

Oplossingen, in volgorde van voorkeur: het controlelampje verwijderen of het component
vervangen door een variant met eigen nul, of een daarvoor bedoelde ontstoringscondensator
parallel aan het armatuur plaatsen.
`,
  checklist: [
    'Ik weet wat een serieschakelaar in installatietermen is',
    'Ik controleer of dimmer en lamp een ondersteunde combinatie vormen',
    'Ik controleer of er een nul beschikbaar is voordat ik een elektronisch component kies',
    'Ik ken de oorzaken van nagloeiende LED-lampen'
  ],
  bronnen: ['chatgpt.md M5', 'copilot.md M6', 'qwen.md M5']
},

/* ------------------------------------------------------------------ 5.5 */
{
  id: 'm05l05',
  nr: '5.5',
  titel: 'Wandcontactdozen en doorlussen',
  duur: 16,
  type: 'les',
  leerdoel: 'Je kunt wandcontactdozen correct aansluiten, doorlussen en beoordelen wanneer een aparte groep nodig is.',
  videos: [],
  tekst: `
## De aansluiting zelf

Een wandcontactdoos met randaarde heeft drie aansluitingen: fase, nul en
beschermingsleiding. De randaardecontacten zitten aan de zijkanten van de doos en zijn
intern verbonden met de PE-klem.

Aandachtspunten:

- **Polariteit** - hoewel een gewone stekker omkeerbaar is, houd je de installatie
  consequent: fase op de aangegeven klem, nul op de zijne. Bij apparaten met een
  eenpolige schakelaar of een schakelbare zekering maakt dit wel degelijk uit.
- **PE als eerste, en met een reserve** - de beschermingsleiding hoort zo aangelegd te
  zijn dat hij als laatste losraakt als er ooit aan de kabel getrokken wordt.
- **Bevestiging** - een doos die alleen op de klauwen zit, draait op termijn los. Waar
  het kan, ook schroeven.
- **Waterpas** - dit is wat de klant ziet, elke dag.

## Doorlussen

In een woninggroep worden contactdozen doorgaans **doorgelust**: de kabel komt binnen
op de ene doos, en vanaf dezelfde klemmen loopt hij door naar de volgende. Zo hangen
alle dozen parallel aan dezelfde groep.

Twee manieren om dat uit te voeren:

**Beide aders in dezelfde klem** - toegestaan als de klem daar geschikt voor is en het
aantal geleiders per klem is toegestaan. Nadeel: haal je het component eruit, dan
onderbreek je de hele rest van de groep.

**Via een aparte lasklem in de doos** - de kabels worden onderling verbonden en er
loopt één aftakking naar het component. Voordeel: het component is uitneembaar zonder
de rest van de groep te onderbreken. Dit is de nettere oplossing waar de ruimte het
toelaat.

!!! gevaar Doorlussen via het component is kwetsbaar
Wordt de nul doorgelust via een contactdoos en raakt die klem los, dan verliezen alle
volgende dozen hun nul. De apparaten die eraan hangen komen dan in serie te staan via
de belasting, wat tot vreemde spanningen en beschadigde apparatuur leidt. Een
onderbroken nul is een van de lastigste storingen om te vinden - module 8 komt erop terug.
!!!

## Hoeveel dozen op één groep

Er bestaat geen absoluut getal; wat telt is de te verwachten belasting. Praktisch:

- Een gewone woonkamergroep met verlichting en wat contactdozen: ruim voldoende op 16 A.
- Keuken: vraagt aparte aandacht. Waterkoker, oven, magnetron en koffiezetapparaat
  samen overschrijden 16 A moeiteloos. Meerdere groepen of een aparte groep per zware
  verbruiker is hier de regel.
- Wasmachine en droger: elk een eigen groep, vanwege de hoge, langdurige belasting.
- Buiten en schuur: eigen groep, en denk aan de aardlekbeveiliging en de kabelkeuze.

## Buiten en in vochtige ruimtes

Voor contactdozen buiten of in natte ruimtes geldt een minimale IP-waarde, meestal
IP44 of hoger, en een uitvoering met klep. Belangrijk detail: de IP-waarde geldt bij een
correct gemonteerde wartel en een gesloten klep - een buitendoos met een opengeklapte
klep en een stekker erin is niet meer spatwaterdicht. Bij vaste buitenaansluitingen kies
je daarom voor een uitvoering waarbij de kabeldoorvoer zelf dicht is.
`,
  checklist: [
    'Ik houd de polariteit consequent aan bij het aansluiten van contactdozen',
    'Ik ken het verschil tussen doorlussen via het component en via een lasklem',
    'Ik weet waarom een onderbroken nul in een doorgeluste groep zoveel schade doet',
    'Ik weet welke IP-waarde nodig is voor contactdozen buiten'
  ],
  bronnen: ['chatgpt.md M5', 'kimi.md M4', 'deekseek.md M2', 'qwen.md M4']
},

/* ------------------------------------------------------------------ 5.6 */
{
  id: 'm05l06',
  nr: '5.6',
  titel: 'Vochtige ruimtes: zones en IP-codering',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt de badkamerzones benoemen en bepalen welke apparatuur waar is toegestaan.',
  videos: [],
  tekst: `
## Waarom vocht alles verandert

Water verlaagt zowel de weerstand van je lichaam als de isolatieweerstand van de
installatie. In een badkamer sta je bovendien vaak met blote, natte voeten op een
tegelvloer - een uitstekende verbinding met aarde. De marges die elders acceptabel zijn,
zijn dat hier niet.

Daarom kent NEN 1010 voor ruimtes met bad of douche een indeling in **zones**, waarbij
per zone is bepaald welke apparatuur is toegestaan en welke beschermingsgraad die moet
hebben.

## De zones in hoofdlijnen

| Zone | Waar | Wat is toegestaan |
|---|---|---|
| 0 | In het bad of de douchebak zelf | Uitsluitend apparatuur die daar expliciet voor is bedoeld, op zeer lage veiligheidsspanning |
| 1 | Direct boven bad of douche, tot 2,25 m hoogte | Beperkt: bijvoorbeeld daarvoor bestemde armaturen, geen contactdozen |
| 2 | 60 cm rondom zone 1 | Armaturen en apparatuur met voldoende IP-waarde; contactdozen alleen in specifieke gevallen |
| 3 | Daarbuiten | Reguliere apparatuur, met inachtneming van de aardlekbeveiliging |

De exacte maten en toegestane toepassingen staan in de norm en zijn in de loop der jaren
gewijzigd. Wat je hier moet meenemen is het **principe**: hoe dichter bij het water, hoe
strenger, en de beoordeling gaat per zone en niet per ruimte.

!!! gevaar Renovaties zijn het risicomoment
Een badkamer die vroeger klopte, klopt na een verbouwing misschien niet meer: de douche
verschuift, het bad wordt een inloopdouche, en een contactdoos die in zone 3 zat staat
opeens in zone 2. Bij elke badkamerverbouwing hoort daarom een herbeoordeling van de
zones, niet alleen van wat er nieuw bij komt.
!!!

## IP-codering lezen

De IP-code bestaat uit twee cijfers: **IP + bescherming tegen vaste voorwerpen +
bescherming tegen water**.

| Eerste cijfer | Betekent | Tweede cijfer | Betekent |
|---|---|---|---|
| 2 | Vingerveilig | 1 | Druppelwater |
| 4 | Draadjes van 1 mm | 3 | Sproeiwater tot 60° |
| 5 | Stofdicht in beperkte mate | 4 | Spatwater uit elke richting |
| 6 | Volledig stofdicht | 5 | Waterstralen |
| | | 7 | Tijdelijke onderdompeling |

IP44 is dus: beschermd tegen voorwerpen vanaf 1 mm en tegen spatwater. Dat is de
gangbare minimumeis voor buiten en voor vochtige ruimtes.

Let op dat de IP-waarde geldt voor het gemonteerde geheel. Een IP65-armatuur met een
verkeerd gemonteerde of ontbrekende wartel is geen IP65 meer.

## Ventilatie en verwarming in de badkamer

Twee praktische punten die je vaak tegenkomt:

- **Ventilator met nalooptijd** heeft een permanente fase én een geschakelde fase
  nodig, plus een nul. Vaak drie aders naar de schakelaar. Controleer dit vóórdat de
  wanden dicht gaan.
- **Elektrische vloerverwarming** vraagt een eigen groep met een eigen aardlek, en de
  weerstand van het element wordt vóór en ná het leggen gemeten en genoteerd. Dat
  meetprotocol is het enige bewijs dat het element bij het tegelen niet is beschadigd.
`,
  checklist: [
    'Ik kan de vier badkamerzones benoemen en het principe erachter uitleggen',
    'Ik kan een IP-code lezen en zeggen wat elk cijfer betekent',
    'Ik weet dat een IP-waarde geldt voor het correct gemonteerde geheel',
    'Ik weet dat bij een badkamerrenovatie de zones opnieuw beoordeeld moeten worden'
  ],
  bronnen: ['kimi.md M1', 'gemini.md M5', 'copilot.md M3', 'qwen.md M4']
}

]});
