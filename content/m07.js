CURSUS.addModule({
  id: 'm07',
  nr: 7,
  deel: 1,
  titel: 'Meten, testen en verifiëren',
  ondertitel: 'Een elektricien die niet kan meten, werkt voor een groot deel blind.',
  niveau: 'Gemiddeld tot gevorderd',
  studietijd: 7,
  intro: 'Van de multimeter tot de isolatieweerstandsmeting: welk instrument beantwoordt welke vraag, en wat probeer je met een meting eigenlijk te bewijzen.',
  leerdoelen: [
    'Per meetvraag het juiste instrument kiezen',
    'Een multimeter correct instellen en veilig gebruiken',
    'Continuïteit en de doorverbinding van de beschermingsleiding aantonen',
    'Uitleggen hoe een isolatieweerstandsmeting werkt en waarom op 500 V DC',
    'Benoemen welke metingen bij een oplevering horen en wat ze bewijzen'
  ],
  lessen: [

/* ------------------------------------------------------------------ 7.1 */
{
  id: 'm07l01',
  nr: '7.1',
  titel: 'Welk instrument voor welke vraag',
  duur: 15,
  type: 'les',
  leerdoel: 'Je formuleert vóór elke meting wat je wilt bewijzen, en kiest daar het instrument bij.',
  videos: [],
  tekst: `
## Meten begint met een zin, niet met een instrument

De meest voorkomende beginnersfout bij meten is het instrument pakken en ergens aan
prikken om te zien wat eruit komt. Dat levert getallen op zonder betekenis.

Begin altijd met een zin die begint met "ik wil bewijzen dat…":

| De vraag | Het instrument |
|---|---|
| Ik wil bewijzen dat hier geen gevaarlijke spanning staat | Tweepolige spanningstester |
| Ik wil weten waar in dit circuit de spanning verdwijnt | Multimeter, spanningsmeting |
| Ik wil bewijzen dat deze geleider doorloopt | Multimeter, doorbel- of weerstandsmeting |
| Ik wil bewijzen dat de isolatie nog deugt | Isolatieweerstandsmeter, 500 V DC |
| Ik wil bewijzen dat de aardlek binnen de tijd afschakelt | Installatietester met RCD-functie |
| Ik wil bewijzen dat de automaat bij kortsluiting snel genoeg afschakelt | Installatietester, Zs-meting |
| Ik wil weten hoeveel stroom er nu loopt | Stroomtang |

Deze tabel is de kern van deze hele module. Alle techniek eromheen is uitwerking.

!!! kern Diagnosticeren versus gokken
Een meting die je vooraf niet kunt uitleggen, kun je achteraf niet interpreteren. Wie
begint met "eens kijken wat de meter zegt", vervangt uiteindelijk onderdelen tot het
werkt. Wie begint met een hypothese, weet na één meting meer dan de ander na tien.
!!!

## Veiligheid van het instrument zelf

**Meetcategorie (CAT)** geeft aan tegen welke transiënte overspanningen een instrument
bestand is. Hoe dichter bij de aansluiting van de netbeheerder, hoe hoger de energie die
bij een fout kan vrijkomen.

| Categorie | Waar |
|---|---|
| CAT II | Aan het stopcontact en aangesloten apparatuur |
| CAT III | Vaste installatie, verdeelinrichting, eindgroepen |
| CAT IV | Bij de aansluiting van de netbeheerder, meterkast, buitenleidingen |

Voor werk in een meterkast wil je CAT IV, of minimaal CAT III met een ruime
spanningsmarge. Een goedkoop instrument zonder duidelijke categorie hoort niet in een
groepenkast: bij een fout kan het instrument zelf het letsel veroorzaken.

Controleer daarnaast altijd:

- meetsnoeren onbeschadigd, isolatie intact, geen blootliggend metaal;
- vingerbeschermers aanwezig;
- de juiste bussen gebruikt, zeker bij stroommeting;
- zekeringen in het instrument intact.

## De volgorde bij elke meting

1. Formuleer wat je wilt bewijzen.
2. Kies het instrument en de juiste stand.
3. Controleer het instrument op een bekende situatie.
4. Meet.
5. Interpreteer: klopt dit met mijn hypothese, of moet die worden bijgesteld?
6. Controleer het instrument opnieuw wanneer het om spanningsloosheid ging.
`,
  checklist: [
    'Ik formuleer voor elke meting eerst wat ik wil bewijzen',
    'Ik weet welke meetcategorie ik nodig heb in een meterkast',
    'Ik controleer mijn meetsnoeren voordat ik meet',
    'Ik ken de zes stappen in de meetvolgorde'
  ],
  bronnen: ['chatgpt.md M7', 'gemini.md M2', 'grok.md M2']
},

/* ------------------------------------------------------------------ 7.2 */
{
  id: 'm07l02',
  nr: '7.2',
  titel: 'De multimeter beheersen',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt een multimeter correct instellen voor spanning, weerstand en doorbelmeting, en weet waarom stroommeting anders is.',
  videos: [
    { taal: 'nl', titel: 'Hoe werkt een multimeter?', yt: '5NgMbtf621s', duur: '±12 min' },
    { taal: 'nl', titel: 'Demonstratie spanning meten met multimeter', yt: 'fAmGyqSPxoY', duur: '±8 min' }
  ],
  tekst: `
## Spanning meten

Spanning meet je **parallel**: de meter komt naast het te meten deel te staan, tussen
twee punten.

- Stand op wisselspanning (V~) voor netspanning, gelijkspanning (V=) voor accu's,
  PV-strings en elektronica.
- Meet altijd de combinaties die je nodig hebt: L–N, L–PE en N–PE. Een spanning tussen
  N en PE die meer is dan enkele volts wijst op een probleem in de nul of de aarding.
- Bij een moderne automatische meter kies je alleen AC of DC; bij een handmatige meter
  begin je op het hoogste bereik en schakel je terug.

## Weerstand en doorbellen

Weerstand meet je **uitsluitend spanningsloos**. Een weerstandsmeting op een gevoed
circuit levert een onjuiste waarde op en kan het instrument beschadigen.

De **doorbelfunctie** (het geluidssymbool) is een weerstandsmeting met een drempel: onder
ongeveer 30 Ω geeft de meter een pieptoon. Dat is de snelste manier om aders te
identificeren en doorverbindingen te controleren.

Praktische toepassingen:

- welke ader in de meterkast hoort bij welke ader in de doos boven;
- of een schakelaar in beide standen doet wat hij hoort te doen;
- of een geleider ergens is onderbroken;
- of er sluiting is tussen fase en nul vóórdat je inschakelt.

!!! gevaar Doorbellen op een gevoed circuit
Zet je de meter in de weerstandsstand en prik je in een circuit dat nog spanning voert,
dan meet je niet alleen onzin - je kunt de meter opblazen en zelf letsel oplopen. Eerst
spanningsloos maken en aantonen, dan pas de weerstandsstand kiezen.
!!!

## Stroom meten

Stroom meet je **in serie**: de meter moet in de kring worden opgenomen, zodat de stroom
er letterlijk doorheen loopt. In een vaste installatie is dat zelden praktisch en vaak
onveilig: het betekent een circuit onderbreken en de meter ertussen zetten.

Daarom gebruik je in de praktijk een **stroomtang**: die meet het magnetische veld rond
een geleider en hoeft het circuit niet te onderbreken. Belangrijk: de tang moet om
**één** geleider, niet om de hele kabel. Om een complete kabel meet je het verschil
tussen heen- en teruggaande stroom, wat in een gezond circuit nul is - precies zoals
een aardlekschakelaar werkt.

Een stroomtang die om de hele kabel iets aanwijst, vertelt je dus dat er een lekstroom
is. Dat is een uitstekende diagnostische truc bij aardlekstoringen.

## Wat de meter je niet vertelt

- **Of het veilig is.** Zie les 1.4: daarvoor is de tweepolige tester het instrument.
- **Of de isolatie deugt.** De meetspanning van een multimeter is enkele volts; isolatie
  faalt pas bij honderden.
- **Of de afschakeltijd binnen de norm valt.** Daarvoor is een installatietester nodig.

De multimeter is het instrument voor het opsporen van waar iets verdwijnt of onderbroken
is. Voor het bewijzen van veiligheid heb je ander gereedschap.
`,
  checklist: [
    'Ik meet spanning parallel en weerstand uitsluitend spanningsloos',
    'Ik weet wat de doorbelfunctie doet en waar ik hem voor gebruik',
    'Ik weet waarom een stroomtang om één geleider moet en niet om de hele kabel',
    'Ik weet welke drie dingen een multimeter mij niet kan vertellen'
  ],
  bronnen: ['chatgpt.md M7', 'gemini.md M2', 'kimi.md M6', 'deekseek.md M4']
},

/* ------------------------------------------------------------------ 7.3 */
{
  id: 'm07l03',
  nr: '7.3',
  titel: 'Continuïteit en de beschermingsleiding',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt aantonen dat de beschermingsleiding overal is doorverbonden en waarom die meting essentieel is.',
  videos: [
    { taal: 'nl', titel: 'Installatie testen op werking en kortsluiting', yt: 'dbvahEksxbQ', duur: '±14 min' }
  ],
  tekst: `
## Waarom juist de PE-meting

Alle veiligheidsmechanismen die je in module 3 hebt geleerd, hangen aan één aanname: dat
de beschermingsleiding daadwerkelijk doorloopt van de aardrail tot aan het laatste
aansluitpunt.

Is die verbinding ergens onderbroken, dan:

- schakelt de installatieautomaat bij een lichaamsfout niet af;
- ziet de aardlek de foutstroom pas als een mens het pad vormt;
- staat de behuizing van een defect apparaat onder spanning zonder dat iets ingrijpt.

En het ergste: er is geen enkel symptoom. Alles werkt gewoon. Een onderbroken PE ontdek
je uitsluitend door te meten.

!!! gevaar De stille fout
Een onderbroken beschermingsleiding geeft geen storing, geen knipperende lamp en geen
klacht van de klant. De installatie werkt jarenlang perfect, tot precies het moment
waarop de bescherming had moeten werken. Dit is de belangrijkste reden dat de
PE-continuïteitsmeting bij elke oplevering hoort.
!!!

## Hoe je het meet

Spanningsloos, met de doorbelfunctie of een lage-weerstandsmeting:

1. Verbind de ene meetpen met de aardrail in de kast.
2. Meet met de andere pen op het randaardecontact van elk aansluitpunt in het circuit.
3. Verwacht een lage weerstand - bij korte leidingen enkele tienden van een ohm, bij
   lange leidingen enkele ohms.

Voor punten die ver uit elkaar liggen gebruik je een lange meetdraad, of de
**meetdraadcompensatie** van een installatietester zodat de weerstand van je eigen
meetdraad niet wordt meegeteld.

## Wat de gemeten waarde betekent

| Meting | Betekenis |
|---|---|
| Bijna 0 Ω | Goede doorverbinding |
| Enkele ohms bij een lange leiding | Aannemelijk, controleer tegen de lengte en doorsnede |
| Tientallen ohms | Slechte verbinding: klem los, corrosie of een te dunne aftakking |
| Oneindig | Onderbroken; direct oplossen voordat de installatie in gebruik gaat |

Een waarde die "wel meevalt" bestaat hier niet. Zit er meer weerstand in dan de lengte
en doorsnede verklaren, dan is er een slechte verbinding, en die verslechtert alleen maar.

## Polariteitscontrole

Bij dezelfde gelegenheid controleer je de **polariteit**: zit de fase op de faseklem en
de nul op de nulklem, in de hele installatie. Verwisselde polariteit betekent dat een
eenpolige schakelaar de nul onderbreekt in plaats van de fase - met als gevolg dat een
schijnbaar uitgeschakeld armatuur onder spanning blijft staan.

Bij contactdozen is dat met een installatietester of een testadapter snel te
controleren; in armaturen en schakelaars doe je het door de bedrading te volgen en na te
meten.

## Vereffening controleren

Loop bij een oplevering ook de hoofdvereffening na: zijn de metalen water-, gas- en
cv-leidingen verbonden met de hoofdaardrail, en zit die verbinding op een plek waar hij
daadwerkelijk metaal raakt en niet op een inmiddels kunststof stuk leiding?
`,
  checklist: [
    'Ik kan uitleggen waarom een onderbroken PE geen symptomen geeft',
    'Ik kan de doorverbinding van de beschermingsleiding meten en de waarde beoordelen',
    'Ik controleer de polariteit bij oplevering',
    'Ik loop de hoofdvereffening na en controleer of hij daadwerkelijk metaal raakt'
  ],
  bronnen: ['gemini.md M2', 'chatgpt.md M7', 'kimi.md M6']
},

/* ------------------------------------------------------------------ 7.4 */
{
  id: 'm07l04',
  nr: '7.4',
  titel: 'Isolatieweerstand meten',
  duur: 20,
  type: 'les',
  leerdoel: 'Je begrijpt wat een isolatiemeting bewijst, waarom die op 500 V DC gebeurt en welke voorbereiding verplicht is.',
  videos: [],
  tekst: `
## Wat je wilt weten

De isolatie tussen geleiders onderling en tussen geleiders en aarde is de barrière die
alles bij elkaar houdt. Die barrière veroudert: door warmte, vocht, uv-licht,
mechanische belasting en knaagdieren.

Een multimeter kan dit niet beoordelen. Die meet met enkele volts, en bij die spanning
lijkt vrijwel elke aangetaste isolatie nog prima. Isolatie faalt pas onder spanning.

## Waarom 500 V gelijkspanning

Voor 230/400 V-installaties schrijft de norm een testspanning van **500 V DC** voor, met
een minimale isolatieweerstand van **1 MΩ**. In een droge, nieuwe installatie meet je in
de praktijk waarden ver boven 10 MΩ; een uitkomst van net boven 1 MΩ is dus geen
geruststelling maar een signaal.

Waarom gelijkspanning en geen wisselspanning: elke kabel heeft een parasitaire
capaciteit tussen de aders. Met wisselspanning zou daar continu een reactieve stroom
doorheen lopen die de werkelijke ohmse isolatieweerstand maskeert. Met gelijkspanning
laadt die capaciteit eenmalig op, waarna alleen de echte lekstroom overblijft.

!!! gevaar Verbruikers eerst loskoppelen
500 V op een circuit waaraan nog een tv, een cv-ketel, domotica of LED-drivers hangen,
vernielt die apparatuur onherroepelijk. Alle verbruikers gaan er fysiek af, en apparatuur
die vast is aangesloten wordt afgeklemd of overbrugd volgens de opgave van de
fabrikant. Dit is de belangrijkste voorbereidingsstap van de hele meting.
!!!

## De meting uitvoeren

1. Installatie spanningsloos en aangetoond spanningsloos.
2. Alle verbruikers ontkoppelen; schakelaars in de stand waarin het circuit doorloopt.
3. Meten tussen de geleiders onderling (L–N) en tussen elke geleider en aarde (L–PE, N–PE).
4. Testspanning 500 V DC aanleggen en de waarde aflezen nadat die zich heeft gestabiliseerd.
5. Na de meting het circuit **ontladen** - een goede meter doet dat zelf, maar controleer
   het. Een opgeladen kabelcapaciteit kan een onaangename schok geven.
6. Waarden noteren per groep.

## De uitkomst interpreteren

| Waarde | Interpretatie |
|---|---|
| > 10 MΩ | Normaal voor een gezonde, droge installatie |
| 1 – 10 MΩ | Voldoet aan de minimumeis, maar verdient aandacht en herhaling |
| < 1 MΩ | Voldoet niet; zoek de oorzaak voordat de installatie in gebruik gaat |
| Bijna 0 | Directe sluiting; niet inschakelen |

Vaak voorkomende oorzaken van een lage waarde: vocht in een buitendoos of kruipruimte,
een beschadigde kabel na boren of hakken, een vergeten aangesloten verbruiker, of een
element in een boiler of vloerverwarming dat begint te lekken.

## Waar dit in de praktijk het meest oplevert

- **Vóór inbedrijfstelling** van nieuw werk: bewijst dat je tijdens de aanleg niets
  hebt beschadigd.
- **Bij vloerverwarming**: vóór en ná het tegelen meten, en beide waarden noteren.
  Dat is het enige bewijs of het element bij het leggen is beschadigd.
- **Bij aardlekstoringen** die niet aan één apparaat toe te schrijven zijn.
- **Bij aankoop of overname** van een oudere installatie.
`,
  checklist: [
    'Ik weet waarom een isolatiemeting op 500 V DC gebeurt en niet met AC',
    'Ik weet dat de minimumeis 1 MΩ is en waarom een waarde net daarboven een signaal is',
    'Ik koppel altijd alle verbruikers los voordat ik meet',
    'Ik controleer of het circuit na de meting ontladen is'
  ],
  bronnen: ['gemini.md M2', 'chatgpt.md M7', 'kimi.md M6', 'copilot.md M4']
},

/* ------------------------------------------------------------------ 7.5 */
{
  id: 'm07l05',
  nr: '7.5',
  titel: 'Aardlektest, Zs en de installatietester',
  duur: 18,
  type: 'les',
  leerdoel: 'Je weet wat een RCD-test en een Zs-meting bewijzen en waarom de testknop daarvoor niet volstaat.',
  videos: [
    { taal: 'nl', titel: 'NEN 3140 keurmeester: wat doet de keurmeester?', yt: 'faWnyuwPjxc', duur: '±10 min' }
  ],
  tekst: `
## De testknop versus de meting

De **T-knop** op een aardlekschakelaar maakt intern een lekstroom en controleert of het
mechanisme nog beweegt. Nuttig als periodieke controle, en het advies is die knop
regelmatig te bedienen zodat het mechanisme niet vastloopt.

Maar de testknop bewijst niet:

- bij welke lekstroom de schakelaar precies afschakelt;
- hoe snel hij afschakelt;
- of hij dat ook doet bij het type lekstroom dat in deze installatie kan optreden.

Daarvoor is een **installatietester** met RCD-functie nodig. Die legt een gedefinieerde
lekstroom aan en meet de afschakeltijd in milliseconden.

## Wat een RCD-test meet

Een installatietester test doorgaans op meerdere niveaus:

- **bij een halve nominale waarde** (15 mA bij een 30 mA-aardlek): de schakelaar mag
  dan juist **niet** afschakelen - anders is hij te gevoelig en krijg je onverklaarbare
  uitval;
- **bij de nominale waarde** (30 mA): hij moet afschakelen binnen de voorgeschreven tijd;
- **bij een veelvoud** (bijvoorbeeld 5×): hij moet zeer snel afschakelen.

De gemeten tijden noteer je bij de oplevering. Ze zijn ook waardevol bij een latere
storing: een aardlek die vandaag in 25 ms afschakelt en over drie jaar in 200 ms, is
aan het verouderen.

## Zs: de kortsluitstroom aan het eind van de leiding

De **Zs-meting** (impedantie van de foutlus) bepaalt hoeveel stroom er zou lopen bij een
kortsluiting tussen fase en beschermingsleiding op het verste punt van een groep.

Die waarde is bepalend voor de vraag of de automaat **snel genoeg** afschakelt. Is de
lusimpedantie te hoog - door een lange leiding, een te dunne doorsnede of een slechte
verbinding - dan komt de kortsluitstroom niet boven de magnetische drempel van de
automaat en duurt het afschakelen seconden in plaats van milliseconden.

!!! kern Waarom Zs het sluitstuk is
Alle eerdere metingen bewijzen dat de installatie in orde is in rusttoestand. De
Zs-meting bewijst dat de beveiliging bij een echte fout ook daadwerkelijk op tijd
ingrijpt. Dat is het verschil tussen "het is netjes aangelegd" en "het beschermt".
!!!

## De installatietester in de praktijk

Een multifunctionele installatietester combineert doorgaans:

- isolatieweerstandsmeting (250 / 500 / 1000 V);
- lage-weerstandsmeting voor continuïteit, met meetdraadcompensatie;
- lusimpedantie Zs en de bijbehorende kortsluitstroom;
- RCD-test met verschillende stromen en golfvormen;
- vaak ook aardverspreidingsweerstand en fasevolgorde.

Het is een aanzienlijke investering en je gebruikt hem pas zinvol als je begrijpt wat
elke meting bewijst. Voor een beginnend elektricien is de volgorde: eerst de tweepolige
tester, dan een goede multimeter, en de installatietester zodra je zelfstandig
oplevert - of eerder, als je werkgever er al een heeft die je mag gebruiken.

## Wat je nu al doet

Ook zonder eigen installatietester kun je bij metingen van een collega meekijken en de
vraag stellen: wat bewijst deze meting, en wat zou een afwijkende waarde betekenen? Dat
is precies de kennis die je nodig hebt op het moment dat je het instrument zelf in
handen krijgt.
`,
  checklist: [
    'Ik weet wat de testknop wel en niet bewijst',
    'Ik ken de drie niveaus waarop een RCD-test wordt uitgevoerd',
    'Ik kan uitleggen wat de Zs-meting bewijst',
    'Ik heb bij een collega meegekeken bij metingen met een installatietester'
  ],
  bronnen: ['gemini.md M2', 'kimi.md M6', 'copilot.md M4', 'chatgpt.md M7']
},

/* ------------------------------------------------------------------ 7.6 */
{
  id: 'm07l06',
  nr: '7.6',
  titel: 'Opleveren: wat je aantoont en vastlegt',
  duur: 16,
  type: 'les',
  leerdoel: 'Je weet welke controles en metingen samen de verificatie van een installatie vormen.',
  videos: [],
  tekst: `
## Verificatie is een keten, geen enkele meting

Bij het opleveren van nieuw of gewijzigd werk hoort een verificatie die uit twee delen
bestaat: **visuele inspectie** en **metingen**. Ze vullen elkaar aan; geen van beide
volstaat alleen.

## De visuele inspectie

Wat je met je ogen vaststelt, vóórdat er spanning op komt:

- juiste componenten, juiste doorsnedes, juiste beveiligingen;
- verbindingen deugdelijk, geen blank koper, klemmen vast;
- beschermingsleiding overal aanwezig en aangesloten;
- IP-waarden passend bij de omgeving;
- schakelmateriaal en armaturen geschikt voor de zone;
- labeling aanwezig en correct;
- geen restmateriaal in dozen of kasten;
- toegankelijkheid: alle verbindingen en de kast blijven bereikbaar.

## De metingen

| Meting | Wat het bewijst |
|---|---|
| Continuïteit beschermingsleiding | De veiligheidsketen is compleet |
| Polariteit | Fase wordt geschakeld, niet de nul |
| Isolatieweerstand | De isolatie is intact, er is niets beschadigd tijdens aanleg |
| Zs / lusimpedantie | De automaat schakelt bij een fout snel genoeg af |
| RCD-test | De aardlek schakelt af binnen de vereiste tijd |
| Functionele test | Alles doet wat het hoort te doen, in elke schakelstand |

De volgorde is niet willekeurig: continuïteit en isolatie meet je spanningsloos, Zs en
de RCD-test met spanning erop, en de functionele test als laatste.

!!! kern Het rapport is onderdeel van het werk
Metingen die niet zijn vastgelegd, hebben achteraf niet plaatsgevonden. Bij schade,
discussie of een latere storing is jouw opleverdocument het enige bewijs van wat je hebt
aangetroffen en achtergelaten. Dit kost tien minuten en beschermt je jarenlang.
!!!

## Wat er in het opleverdocument staat

- adres, datum, uitvoerende;
- omschrijving van het werk: wat is nieuw, wat is gewijzigd, wat is ongemoeid gelaten;
- de groepsindeling en faseverdeling;
- de meetwaarden per groep;
- bevindingen aan het bestaande deel van de installatie, ook als je die niet hebt
  opgelost - juist die;
- eventuele adviezen aan de klant.

Dat laatste punt over bevindingen is belangrijk. Kom je een oude groep zonder
beschermingsleiding tegen of een aardlek die ontbreekt, dan meld je dat schriftelijk,
ook als de opdracht daar niet over ging. Het niet melden van een geconstateerd
veiligheidsgebrek is een groter risico dan het gebrek zelf.

## Uitleg aan de klant

Sluit af met een korte uitleg in gewone taal: wat is er gedaan, welke groep is wat, wat
moet de klant zelf weten (bijvoorbeeld de aardlek maandelijks testen), en waar liggen
de papieren. Dat gesprek van drie minuten bepaalt hoe de klant je werk beoordeelt -
meer dan de kwaliteit die hij niet kan zien.
`,
  checklist: [
    'Ik ken het verschil tussen visuele inspectie en metingen',
    'Ik kan per meting benoemen wat die bewijst',
    'Ik leg meetwaarden vast in een opleverdocument',
    'Ik meld geconstateerde gebreken schriftelijk, ook buiten mijn opdracht'
  ],
  bronnen: ['gemini.md M6', 'copilot.md M4', 'chatgpt.md M8', 'kimi.md M6']
}

]});
