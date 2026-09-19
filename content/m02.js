CURSUS.addModule({
  id: 'm02',
  nr: 2,
  deel: 1,
  titel: 'Grondbeginselen elektriciteit',
  ondertitel: 'Het mentale model waarop al het latere foutzoeken rust.',
  niveau: 'Beginner',
  studietijd: 7,
  intro: 'Spanning, stroom, weerstand en vermogen, en het verschil tussen wissel- en gelijkstroom. Zonder dit fundament blijft installeren het onthouden van trucjes.',
  inleiding: [
    "Deze module is de basis van de cursus elektrotechniek: spanning, stroom, weerstand en vermogen. Wie elektrotechniek voor beginners zoekt zonder dure boeken, begint hier met de wet van Ohm, wisselstroom en het verschil tussen 1-fase en 3-fase.",
    "Je rekent met echte voorbeelden op 230 V, zoals de stroom van een waterkoker of de kosten van vloerverwarming. Zo bouw je een solide basiscursus elektrotechniek op waar alle volgende modules op voortbouwen."
  ],
  leerdoelen: [
    'De wet van Ohm en de vermogensformules toepassen zonder rekenmachine',
    'Uitleggen waarom een apparaat stroom trekt in plaats van dat een automaat stroom levert',
    'Serie- en parallelschakelingen herkennen en doorrekenen',
    'Het verschil tussen open circuit, kortsluiting en overbelasting benoemen',
    'Uitleggen wat 1-fase en 3-fase betekenen en waarom 400 V geen 460 V is',
    'Uit een vermogen de te verwachten stroom en een passende beveiliging afleiden'
  ],
  lessen: [

/* ------------------------------------------------------------------ 2.1 */
{
  id: 'm02l01',
  nr: '2.1',
  titel: 'Spanning, stroom en weerstand',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt de drie basisgrootheden beschrijven en uitleggen waarom stroom een gevolg is en geen oorzaak.',
  videos: [
    { taal: 'en', titel: 'Electrical Basics Made Easy', yt: 'nYuVSG89vg0', duur: '±25 min' }
  ],
  tekst: `
## Drie grootheden, één samenhang

**Spanning (U, in volt)** is een potentiaalverschil: het verschil in elektrische
"druk" tussen twee punten. Spanning bestaat dus altijd *tussen* twee punten, nooit
op één punt. Wanneer iemand zegt "op deze draad staat 230 V", is de volledige zin
"tussen deze draad en de nul staat 230 V".

**Stroom (I, in ampère)** is de hoeveelheid lading die per seconde door een
doorsnede van de geleider gaat. Eén ampère is één coulomb per seconde.

**Weerstand (R, in ohm)** is de tegenwerking die een geleider of verbruiker biedt
aan die stroom.

De samenhang is de wet van Ohm:

**U = I × R** en dus **I = U / R** en **R = U / I**

## Waarom een apparaat stroom trekt

Dit is een denkfout die veel beginners lang meeslepen: het idee dat een automaat van
16 A "16 ampère in het circuit duwt". Dat is niet wat er gebeurt.

Het net levert een vrijwel constante spanning van 230 V. Wat er aan stroom gaat lopen,
wordt bepaald door de weerstand van wat je aansluit:

- een lamp van 2300 Ω trekt 230 / 2300 = 0,1 A;
- een waterkoker met een element van 23 Ω trekt 230 / 23 = 10 A;
- een kortsluiting met bijna 0 Ω trekt honderden ampères.

De automaat *begrenst* alleen: hij schakelt af zodra de stroom te lang te hoog is.
Hij bepaalt niet hoeveel stroom er onder normale omstandigheden loopt.

!!! kern De richting van het oorzakelijk verband
Spanning wordt aangeboden. Weerstand bepaalt de stroom. De beveiliging grijpt in als
die stroom onacceptabel wordt. Wie dit omdraait, begrijpt geen enkele storing.
!!!

## Geleiders, isolatoren en waarom koper

Koper geleidt goed omdat de buitenste elektronen van koperatomen makkelijk bewegen.
Aluminium geleidt ook, maar slechter per doorsnede en het is lastiger betrouwbaar te
klemmen. Kunststof isolatie houdt de stroom binnen de geleider.

Dat "goed geleiden" is relatief: ook koper heeft weerstand. Een lange, dunne kabel
heeft meer weerstand dan een korte dikke, en dat verklaart spanningsval en opwarming,
twee onderwerpen uit module 4.

## De wet van Ohm in de praktijk gebruiken

Een halogeenspot brandt niet. Je meet 230 V tussen de fase en de nul aan het armatuur.
Wat weet je nu?

Dat er spanning wordt aangeboden. Meer niet. Als er 230 V staat en er loopt geen stroom,
is de weerstand oneindig: een onderbreking. Die zit dan in de lamp zelf, in de fitting
of in een verbinding voorbij het meetpunt.

Zou je 0 V meten, dan ontbreekt de spanning en zoek je stroomopwaarts: schakelaar,
bedrading, automaat. Twee metingen, twee volledig verschillende zoekrichtingen. Dat is
het verschil tussen diagnosticeren en onderdelen vervangen.

?? Waarom voelt een 9V-batterij op je tong wel iets, en een stopcontact niet "een beetje"?
Omdat de weerstand van je tong laag is en die van je droge hand hoog, maar vooral omdat
230 V hoog genoeg is om door de huidweerstand heen te breken. Bij 9 V blijft de stroom
in de orde van microampères. De sprong tussen "je voelt iets" en "je hart raakt
ontregeld" zit niet in de spanning zelf, maar in wat die spanning door je heen kan duwen.
??
`,
  checklist: [
    'Ik kan uitleggen waarom spanning altijd tussen twee punten gemeten wordt',
    'Ik kan uitleggen waarom een apparaat stroom trekt en de automaat die niet levert',
    'Ik kan uit een meting van 230 V zonder werking afleiden dat er een onderbreking is'
  ],
  bronnen: ['chatgpt.md M2', 'kimi.md M2', 'deekseek.md M1']
},

/* ------------------------------------------------------------------ 2.2 */
{
  id: 'm02l02',
  nr: '2.2',
  titel: 'Vermogen, energie en rekenen op 230 V',
  duur: 22,
  type: 'les',
  leerdoel: 'Je kunt uit een opgegeven vermogen de stroom bepalen en inschatten welke groep en beveiliging daarbij horen.',
  videos: [
    { taal: 'en', titel: 'Electrical Basics Class', yt: 'bsdt310LESw', duur: 'lang, maak aantekeningen' }
  ],
  tekst: `
## Vermogen: hoe snel energie wordt omgezet

**Vermogen (P, in watt)** is energie per tijdseenheid. Bij een eenvoudige ohmse
belasting geldt:

**P = U × I**

En via de wet van Ohm volgen daaruit twee varianten die je regelmatig nodig hebt:

**P = U² / R** en **P = I² × R**

Die laatste formule is de belangrijkste van deze hele les, en niet omdat je hem vaak
moet uitrekenen. Hij verklaart waarom een slechte verbinding brand veroorzaakt: bij
een overgangsweerstand van 1 Ω en een stroom van 10 A wordt daar 100 W aan warmte
omgezet, in een ruimte ter grootte van een lasklem.

## Rekenen op 230 V, uit je hoofd

De stroom volgt uit **I = P / U**. Met U = 230 V:

| Vermogen | Stroom bij 230 V | Typisch apparaat |
|---|---|---|
| 500 W | ≈ 2,2 A | Kleine koelkast, tv |
| 1000 W | ≈ 4,3 A | Stofzuiger |
| 2000 W | ≈ 8,7 A | Föhn, kleine oven |
| 2300 W | = 10 A | Waterkoker |
| 3000 W | ≈ 13 A | Krachtige waterkoker, verwarmingselement |
| 3500 W | ≈ 15,2 A | Grens van wat een 16 A-groep aankan |

De vuistregel die je snel maakt: **deel het vermogen door 230**, of eenvoudiger,
**deel door 1000 en vermenigvuldig met 4,35**. Wie 2300 W = 10 A onthoudt, kan de rest
schalen.

!!! kern Waarom dit ertoe doet
Een 16 A-groep levert theoretisch 230 × 16 = 3680 W. Een waterkoker van 2200 W plus een
oven van 2000 W op dezelfde groep is 4200 W, oftewel ruim 18 A. De automaat schakelt af,
en de klant belt jou. De rekensom kost drie seconden en voorkomt een terugkomklus.
!!!

## Energie en kosten

Vermogen is een momentopname; **energie** is vermogen maal tijd, gemeten in
kilowattuur (kWh):

**Energie (kWh) = P (kW) × t (uur)**

Een vloerverwarming van 1500 W die zes uur per dag draait: 1,5 × 6 = 9 kWh per dag.
Bij een tarief van € 0,35 per kWh is dat ruim € 3 per dag, ofwel bijna € 100 per maand.

Dit is geen boekhouden maar vakinhoud: klanten vragen je dit, en het verschil tussen
"dat verbruikt best wat" en een concreet bedrag is het verschil tussen een monteur en
een vakman.

## Waarom vermogen niet altijd U × I is

Bij apparaten met een motor, een spoel of een schakelende voeding lopen stroom en
spanning niet meer in de pas. Er ontstaat een verschil tussen het **schijnbaar
vermogen** (S, in VA) dat het net moet leveren en het **werkelijk vermogen** (P, in W)
dat nuttig wordt omgezet. De verhouding daartussen heet de arbeidsfactor of cos φ.

Praktisch betekent dit: de kabel en de beveiliging moeten de stroom aankunnen die
hoort bij het schijnbaar vermogen, ook al staat er op het typeplaatje een lager
wattage. Bij motoren, warmtepompen en airco's komt dit terug - module 9 gaat erop door.

?? Waarom staat op een warmtepomp 3 kW terwijl hij 9 kW warmte levert?
Dat is geen fout en geen gratis energie. Een warmtepomp maakt geen warmte, hij
verplaatst warmte van buiten naar binnen. De 3 kW is de elektrische energie die de
compressor daarvoor nodig heeft. De verhouding tussen geleverde warmte en opgenomen
elektriciteit heet de COP. Voor jouw kabel en beveiliging telt alleen de 3 kW opgenomen
elektrisch vermogen - plus de inschakelstroom, die veel hoger ligt.
??
`,
  checklist: [
    'Ik kan uit mijn hoofd de stroom schatten bij 500, 1000, 2000 en 3000 W op 230 V',
    'Ik weet hoeveel watt een 16 A-groep theoretisch aankan',
    'Ik kan uitleggen waarom P = I²R verklaart dat losse verbindingen brand veroorzaken',
    'Ik kan een klant uitleggen wat een apparaat per maand kost'
  ],
  bronnen: ['chatgpt.md M2', 'kimi.md M2', 'gemini.md M2', 'deekseek.md M1']
},

/* ------------------------------------------------------------------ 2.3 */
{
  id: 'm02l03',
  nr: '2.3',
  titel: 'Wisselstroom: sinus, 50 Hz en effectieve waarde',
  duur: 18,
  type: 'les',
  leerdoel: 'Je begrijpt wat wisselspanning is, wat 230 V precies betekent, en waarom fase en nul niet gelijkwaardig zijn.',
  videos: [
    { taal: 'en', titel: 'Overview of Basic Electrical Wiring', yt: 'CnUW8AQEUPQ', duur: '±15 min' }
  ],
  tekst: `
## Gelijkstroom en wisselstroom

Bij **gelijkstroom (DC)** heeft de spanning een vaste polariteit: de plus blijft plus.
Batterijen, zonnepanelen en de gelijkspanningszijde van vrijwel alle elektronica
werken zo.

Bij **wisselstroom (AC)** wisselt de polariteit voortdurend van teken. Het Nederlandse
net doet dat 50 keer per seconde: **50 Hz**. Grafisch is dat een sinus die 50 maal per
seconde door nul gaat en van teken wisselt.

Wisselstroom is de standaard voor distributie omdat je de spanning met een
transformator eenvoudig kunt op- en neertransformeren. Hoge spanning betekent bij
hetzelfde vermogen lage stroom, en lage stroom betekent weinig verlies over lange
afstanden - het verlies is immers I²R.

## Wat "230 V" eigenlijk is

De 230 V op je stopcontact is de **effectieve waarde**, ook aangeduid als RMS. Dat is
de gelijkspanning die in dezelfde weerstand hetzelfde warmte-effect zou hebben.

De werkelijke piekspanning ligt hoger:

**U piek = U effectief × √2 ≈ 230 × 1,414 ≈ 325 V**

Van piek naar piek is dat dus ruim 650 V. Dat is geen weetje maar de reden waarom
meetinstrumenten en componenten op een veel hogere spanning worden beproefd dan 230 V,
en waarom isolatie op 325 V piek moet zijn berekend.

## Fase, nul en beschermingsleiding

In een woninginstallatie kom je drie soorten geleiders tegen:

| Geleider | Aanduiding | Kleur | Functie |
|---|---|---|---|
| Fase | L | Bruin (of zwart / grijs bij meerdere fasen) | Voert de spanning aan |
| Nul | N | Blauw | Voert de bedrijfsstroom terug |
| Beschermingsleiding | PE | Geelgroen | Voert foutstroom af, voert géén bedrijfsstroom |

Fase en nul zijn elektrisch **niet** gelijkwaardig, ook al loopt door beide dezelfde
bedrijfsstroom. De nul is in de installatie met aarde verbonden en staat daardoor
ongeveer op aardpotentiaal; de fase niet. Daarom krijg je een schok van de fase en
in normale omstandigheden niet van de nul.

!!! gevaar De nul is niet ongevaarlijk
Bij een onderbroken nul kan er wel degelijk spanning op de nulgeleider komen te staan,
via de belasting die er nog op zit. Een "nul" die losgeschroefd wordt terwijl er
verbruikers aan hangen, kan de volle netspanning voeren. Behandel de nul daarom altijd
als een geleider die spanning kan voeren, en meet dat.
!!!

## Waarom PE geen tweede nul is

De beschermingsleiding voert in een gezonde installatie **geen** stroom. Hij is er
uitsluitend om bij een fout - bijvoorbeeld een fase die de metalen behuizing van een
wasmachine raakt - de foutstroom af te voeren, zodat de aardlekschakelaar of de
automaat afschakelt en de behuizing niet levensgevaarlijk wordt.

Wie PE en N met elkaar verwisselt of doorverbindt in een eindgroep, sloopt precies dat
mechanisme: er loopt dan bedrijfsstroom over de beschermingsleiding, de aardlek
detecteert een verschil en schakelt af, of erger, hij detecteert het juist niet meer
wanneer het nodig is.
`,
  checklist: [
    'Ik weet dat 230 V de effectieve waarde is en de piek ongeveer 325 V bedraagt',
    'Ik kan de kleuren en functies van L, N en PE benoemen',
    'Ik kan uitleggen waarom PE geen bedrijfsstroom voert',
    'Ik weet waarom een losgenomen nul spanning kan voeren'
  ],
  bronnen: ['kimi.md M2', 'chatgpt.md M2', 'deekseek.md M1', 'qwen.md M2']
},

/* ------------------------------------------------------------------ 2.4 */
{
  id: 'm02l04',
  nr: '2.4',
  titel: 'Serie, parallel, open circuit en kortsluiting',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt serie- en parallelschakelingen doorrekenen en het verschil tussen overbelasting en kortsluiting uitleggen.',
  videos: [
    { taal: 'en', titel: 'Electrical Wiring Basics', yt: 'syaGf_XUMxA', duur: '±20 min' }
  ],
  tekst: `
## Serieschakeling

Bij een serieschakeling loopt door alle componenten **dezelfde stroom**, en verdeelt
de spanning zich over de componenten naar rato van hun weerstand.

**R totaal = R1 + R2 + R3 …**

Kenmerk: onderbreek je één component, dan valt de hele keten stil. Oude kerstverlichting
werkte zo, en het is ook precies wat er gebeurt als er een onderbreking in je circuit zit.

## Parallelschakeling

Bij een parallelschakeling staat over alle componenten **dezelfde spanning**, en
verdeelt de stroom zich over de takken.

**1 / R totaal = 1/R1 + 1/R2 + 1/R3 …**

De totale weerstand is dus altijd kleiner dan de kleinste tak. Elke verbruiker die je
erbij zet, verlaagt de totale weerstand en verhoogt de totale stroom.

Zo is een woninginstallatie opgebouwd: alle stopcontacten van een groep staan parallel,
allemaal op 230 V, en elk apparaat trekt de stroom die het nodig heeft. Daarom werkt de
tweede lamp gewoon door als de eerste kapotgaat.

!!! kern Wat je in de praktijk ziet
Verbruikers staan parallel. Schakelaars, zekeringen en beveiligingen staan in serie
met wat ze bedienen of beschermen - anders zouden ze niets kunnen onderbreken.
!!!

## Vier toestanden die je uit elkaar moet houden

**Normaal bedrijf** - de belasting trekt de stroom waarvoor het circuit is ontworpen.

**Open circuit (onderbreking)** - de keten is verbroken, de weerstand is oneindig, er
loopt geen stroom. Er kán wel gewoon spanning staan tot aan de onderbreking.
Symptoom: het werkt niet, maar de automaat blijft ingeschakeld.

**Overbelasting** - er is te veel aangesloten, of een apparaat is defect en trekt meer
dan het hoort. De stroom is bijvoorbeeld 20 A op een 16 A-groep: te hoog om lang vol te
houden, maar niet extreem. De automaat schakelt af op het **thermische** deel, na
seconden tot minuten.

**Kortsluiting** - fase raakt nul of fase raakt PE, vrijwel zonder weerstand ertussen.
De stroom loopt op tot honderden of duizenden ampères. De automaat schakelt af op het
**magnetische** deel, binnen milliseconden.

| | Stroom | Afschakeling | Typische oorzaak |
|---|---|---|---|
| Overbelasting | Iets te hoog | Traag, thermisch | Te veel apparaten, defecte motor |
| Kortsluiting | Extreem hoog | Direct, magnetisch | Draad geraakt bij boren, verkeerde aansluiting, waterinsluiting |

Dat een installatieautomaat twee verschillende mechanismen heeft, is precies om beide
situaties te kunnen onderscheiden. Module 6 gaat daar dieper op in.

## De aardlek hoort in dit rijtje niet thuis

Een aardlekschakelaar reageert op geen van bovenstaande. Hij vergelijkt de stroom die
via de fase de installatie ingaat met de stroom die via de nul terugkomt. Zijn die niet
gelijk, dan verdwijnt er ergens stroom naar aarde - bijvoorbeeld door een mens heen.
Bij een verschil van ongeveer 30 mA schakelt hij af.

Een aardlek beschermt dus **mensen tegen aanraking**, en een automaat beschermt de
**leiding tegen te hoge stroom**. Wie die twee door elkaar haalt, begrijpt de
groepenkast niet.
`,
  checklist: [
    'Ik kan uitleggen waarom verbruikers parallel staan en beveiligingen in serie',
    'Ik kan overbelasting en kortsluiting uit elkaar houden aan de hand van afschakeltijd',
    'Ik weet dat een aardlekschakelaar op iets heel anders reageert dan een automaat'
  ],
  bronnen: ['chatgpt.md M2', 'kimi.md M2', 'deekseek.md M1']
},

/* ------------------------------------------------------------------ 2.5 */
{
  id: 'm02l05',
  nr: '2.5',
  titel: '1-fase en 3-fase',
  duur: 18,
  type: 'les',
  leerdoel: 'Je begrijpt waarom er tussen twee fasen 400 V staat en waarom faseverdeling belangrijk is.',
  videos: [
    { taal: 'nl', titel: 'Welke installatieautomaat heb je nodig? 1 fase / 3 fase', yt: '1SDChIaziCQ', duur: '±10 min' }
  ],
  tekst: `
## Eén fase: het gewone huishouden

De meeste Nederlandse woningen hebben een **1-fase aansluiting**: één fasegeleider,
één nul, één beschermingsleiding. Tussen fase en nul staat 230 V. De aansluitwaarde is
meestal 1×25 A of 1×35 A, wat neerkomt op ongeveer 5,7 respectievelijk 8 kW.

## Drie fasen: drie sinussen uit fase

Bij een **3-fase aansluiting** krijg je drie fasegeleiders (L1, L2, L3) plus nul en PE.
Die drie spanningen zijn identiek van vorm maar 120° in tijd verschoven: als L1 op zijn
piek zit, zitten L2 en L3 op andere punten in hun cyclus.

Tussen elke fase en de nul staat 230 V. Tussen twee fasen onderling staat **niet**
460 V, maar:

**U tussen fasen = 230 × √3 ≈ 230 × 1,732 ≈ 400 V**

Dat komt doordat de twee sinussen niet gelijktijdig op hun maximum zitten. De faktor
√3 is het directe gevolg van die 120° verschuiving.

!!! gevaar 400 V tussen twee fasen
In een 3-fase groepenkast kun je twee punten aanraken die beide "gewoon 230 V" lijken,
en er 400 V tussen krijgen. Meet daarom in een 3-fase kast altijd álle combinaties bij
het aantonen van spanningsloosheid: L1–N, L2–N, L3–N, L1–L2, L2–L3, L1–L3, en elke
fase naar PE.
!!!

## Waarom 3-fase

**Meer vermogen bij dezelfde kabeldikte.** Een 3×25 A-aansluiting levert ongeveer
17 kW, tegenover 5,7 kW bij 1×25 A.

**Draaiveld voor motoren.** Drie fasen wekken in een motor een roterend magnetisch veld
op, waardoor een 3-fase motor eenvoudiger en robuuster kan zijn dan een 1-fase motor.

**Betere benutting van de nul.** Bij een gelijkmatige verdeling over de drie fasen heffen
de retourstromen elkaar grotendeels op en loopt er weinig stroom door de nulgeleider.

## Faseverdeling: waarom het je werk raakt

Dat laatste punt heeft een praktische keerzijde. Hangt alle zware belasting aan L1 en
niets aan L2 en L3, dan is de aansluiting scheef belast: L1 loopt tegen zijn grens
terwijl er nog ruimte zat is. De hoofdbeveiliging kan afschakelen terwijl de totale
belasting ruim binnen de aansluitwaarde ligt.

Bij het indelen van een groepenkast verdeel je daarom bewust: kookgroep op de ene fase,
warmtepomp op de tweede, de zwaardere lichtgroepen en wasmachine op de derde.

## Krachtstroom, Perilex en 2×230 V

In woningen kom je 3-fase vooral tegen bij kooktoestellen. Let op de begrippen:

- **Perilex** is een specifieke 5-polige contactdoos, meestal met twee of drie fasen.
- **Krachtstroom** is spreektaal voor een 3-fase aansluiting, vaak een CEE-contactdoos.
- **2×230 V** is een kookaansluiting met twee fasen en twee gescheiden nullen, waarbij
  het respecteren van die scheiding essentieel is.

Een inductiekookplaat aansluiten begint dan ook met het lezen van het schema op de
achterkant van het toestel en het controleren welke bruggen wel of niet geplaatst
moeten worden. Nooit uit het hoofd.
`,
  checklist: [
    'Ik kan uitleggen waarom er tussen twee fasen 400 V staat en niet 460 V',
    'Ik weet welke spanningscombinaties ik in een 3-fase kast moet meten',
    'Ik kan uitleggen waarom faseverdeling belangrijk is',
    'Ik weet dat ik bij een kooktoestel altijd eerst het schema op het toestel lees'
  ],
  bronnen: ['chatgpt.md M3', 'kimi.md M2', 'gemini.md M4', 'qwen.md M2']
},

/* ------------------------------------------------------------------ 2.6 */
{
  id: 'm02l06',
  nr: '2.6',
  titel: 'Van vermogen naar groep en beveiliging',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt uit een gevraagde belasting afleiden welke groep, doorsnede en beveiliging in de richting van het juiste antwoord liggen.',
  videos: [],
  tekst: `
## De redeneerketen

Wanneer een klant vraagt "kan hier een oven bij?", doorloop je in gedachten steeds
dezelfde keten:

1. **Welk vermogen** vraagt het apparaat, continu en bij inschakelen?
2. **Welke stroom** hoort daarbij: I = P / U.
3. **Welke doorsnede** kan die stroom voeren over deze lengte, in deze
   installatiemethode, bij deze omgevingstemperatuur?
4. **Welke beveiliging** past bij die doorsnede - nooit zwaarder dan de kabel aankan.
5. **Welke aardlekbeveiliging** hoort daarbij, en welk type?
6. **Past dit nog** binnen de aansluitwaarde en de bestaande faseverdeling?

De volgorde is niet omkeerbaar. De beveiliging wordt gekozen bij de **kabel**, niet bij
het apparaat. Een zwaardere automaat op een te dunne kabel betekent dat de kabel
smelt voordat de beveiliging afschakelt.

!!! gevaar De klassieke fout
"De automaat sloeg steeds af, dus ik heb er een zwaardere in gezet." Dat is niet het
oplossen van een probleem maar het uitschakelen van de brandbeveiliging. De automaat
beschermt de leiding; wie hem verzwaart zonder de leiding te verzwaren, verwijdert die
bescherming.
!!!

## Gangbare combinaties in woningen

Als vuistregel voor Nederlandse woninginstallaties, met de nadrukkelijke kanttekening
dat de definitieve keuze afhangt van lengte, bundeling, omgevingstemperatuur en
installatiemethode:

| Doorsnede | Gangbare beveiliging | Typische toepassing |
|---|---|---|
| 1,5 mm² | 16 A | Lichtgroepen, gewone wandcontactdozen |
| 2,5 mm² | 16 A of 20 A | Zwaardere groepen, wasmachine, keuken |
| 4 mm² | 20 A of 25 A | Kookgroep, langere leidingen |
| 6 mm² | 25 A of 35 A | Kookgroep 3-fase, laadpaal, warmtepomp |

De reden dat 1,5 mm² met 16 A wordt beveiligd en niet met 20 A, ligt in de
stroombelastbaarheid van de kabel in een gesloten buis in een muur - de ongunstigste
gangbare situatie.

## Gelijktijdigheid

Niet alles staat tegelijk aan. Een woning met een fornuis van 7 kW, een warmtepomp van
3 kW, een laadpaal van 3,7 kW en normaal huishoudelijk gebruik komt op papier ver boven
een 1×35 A-aansluiting uit, maar draait in de praktijk vaak probleemloos.

Waar het misgaat is de samenloop: koken terwijl de auto laadt en de warmtepomp opstart
op een koude ochtend. Bij nieuwe zware verbruikers hoort daarom altijd de vraag of de
aansluiting nog volstaat, en of load balancing (module 10) nodig is.

## Wat je nog niet zelf beslist

Definitieve kabelberekeningen, selectiviteitsberekeningen en het bepalen of een
aansluiting verzwaard moet worden, doe je in deze fase samen met een ervaren
elektricien. Het doel van deze les is dat je de vraag herkent en de orde van grootte
kunt inschatten - niet dat je hem alleen afhandelt.
`,
  checklist: [
    'Ik kan de zes stappen van de redeneerketen opnoemen',
    'Ik weet dat de beveiliging bij de kabel hoort en niet bij het apparaat',
    'Ik kan uitleggen waarom een zwaardere automaat plaatsen gevaarlijk is',
    'Ik ken de gangbare combinaties van doorsnede en beveiliging als vuistregel'
  ],
  bronnen: ['gemini.md M3', 'chatgpt.md M2', 'grok.md M4', 'copilot.md M3']
}

]});
