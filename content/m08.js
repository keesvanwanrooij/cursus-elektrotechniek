CURSUS.addModule({
  id: 'm08',
  nr: 8,
  deel: 1,
  titel: 'Storingzoeken en oplevering',
  ondertitel: 'Hier wordt het vak interessant.',
  niveau: 'Gemiddeld tot gevorderd',
  studietijd: 8,
  intro: 'Iedereen kan iets monteren. Een goede monteur kan uitleggen wat er fout is, waarom het fout is, en hoe hij dat systematisch heeft vastgesteld.',
  leerdoelen: [
    'Het negenstappenmodel toepassen op een willekeurige storing',
    'Van symptoom naar hypothese redeneren in plaats van onderdelen vervangen',
    'De klassieke storingen herkennen aan hun symptoompatroon',
    'Een aardlekstoring systematisch lokaliseren met de halveringsmethode',
    'Je eigen werk controleren en de bevindingen uitleggen aan de klant'
  ],
  lessen: [

/* ------------------------------------------------------------------ 8.1 */
{
  id: 'm08l01',
  nr: '8.1',
  titel: 'Het negenstappenmodel',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt een storing benaderen via een vaste, herhaalbare volgorde in plaats van via ingevingen.',
  videos: [
    { taal: 'en', titel: "Student's Guide - Fault Finding", yt: '_yOIM9cuIZw', duur: '±15 min' }
  ],
  tekst: `
## Waarom een model

Zonder methode gaat storingzoeken zo: je vermoedt iets, je vervangt dat, het werkt niet,
je vermoedt iets anders. Na twintig minuten heb je vier dingen losgehaald, weet je niet
meer wat de uitgangssituatie was, en is het probleem er nog.

Met een methode weet je na elke stap méér dan ervoor, en kun je op elk moment uitleggen
waar je staat.

## De negen stappen

**1. Symptom** - wat gebeurt er daadwerkelijk? Niet wat de klant denkt dat er aan de
hand is, maar wat er waarneembaar is. "De lamp doet het niet" is een symptoom; "de
schakelaar is kapot" is al een conclusie.

**2. Scope** - hoe groot is het bereik? Eén apparaat, één aansluitpunt, één groep,
meerdere groepen, of de hele woning? Dit is de belangrijkste stap, want hij halveert het
zoekgebied meteen.

**3. Supply** - is er voeding? Staat de automaat in, is de aardlek ingeschakeld, komt er
spanning tot aan het punt waar je begint?

**4. Protection** - wat doen de beveiligingen? Staat er iets uit, en zo ja, schakelt het
direct opnieuw af of blijft het staan?

**5. Circuit** - waar loopt het verwachte pad? Teken het als het niet gedocumenteerd is.
Zonder verwacht pad kun je geen afwijking vaststellen.

**6. Divide** - splits het circuit op een logisch punt. Meet in het midden en niet aan
het uiteinde: elke meting halveert het zoekgebied.

**7. Measure** - test één hypothese per meting. Formuleer vooraf wat de uitkomst zou
betekenen bij beide mogelijke resultaten.

**8. Repair** - verhelp de gevonden oorzaak, niet het symptoom. En als je iets vervangt,
weet dan waaróm het defect raakte.

**9. Verify** - controleer de volledige werking en de veiligheid opnieuw, in alle
schakelstanden. Een reparatie die één stand herstelt en een andere sloopt, is een
terugkomklus.

!!! kern De vraag die alles verandert
Begin nooit met "waarschijnlijk is X kapot". Begin met: **wat weet ik zeker?**
Dat lijkt trager en is in de praktijk vrijwel altijd sneller.
!!!

## De halveringsmethode

Stap 6 verdient uitwerking, want het is de kern van efficiënt zoeken. Bij een circuit
met tien mogelijke faalpunten:

- meet je aan het uiteinde, dan weet je na één meting één ding;
- meet je in het midden, dan weet je na één meting in welke helft het probleem zit.

Na drie metingen op de juiste punten heb je een circuit met tien punten teruggebracht
tot één of twee. Dit werkt op elk niveau: eerst welke groep, dan welk deel van de groep,
dan welke doos, dan welke klem.

## Een voorbeeld

Melding: "de lamp in de gang doet het niet."

- **Symptom**: lamp brandt niet in beide schakelaarstanden.
- **Scope**: andere lampen op dezelfde groep werken wel → geen groepsprobleem.
- **Supply**: automaat staat in, aardlek staat in.
- **Protection**: niets afgeschakeld.
- **Circuit**: wisselschakeling met twee schakelaars, centraaldoos in het plafond.
- **Divide**: eerst meten bij de centraaldoos, niet bij de lamp.
- **Measure**: staat er in de doos spanning op de permanente fase? Ja → het probleem
  zit stroomafwaarts. Komt de schakeldraad in een van de standen onder spanning? Nee →
  het probleem zit in het schakeldeel, niet in de lamp.
- Vervolgens: spanningsloos maken en de wisselschakeling doorbellen.

Merk op dat het lampje zelf pas als laatste in beeld komt, terwijl dat de eerste
ingeving zou zijn geweest.
`,
  checklist: [
    'Ik kan de negen stappen opnoemen',
    'Ik bepaal altijd eerst het bereik van de storing',
    'Ik meet in het midden van een circuit in plaats van aan het uiteinde',
    'Ik formuleer vooraf wat beide uitkomsten van een meting zouden betekenen'
  ],
  bronnen: ['chatgpt.md M8', 'deekseek.md M5', 'grok.md M6']
},

/* ------------------------------------------------------------------ 8.2 */
{
  id: 'm08l02',
  nr: '8.2',
  titel: 'Van symptoom naar hypothese',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt een vage klacht omzetten in een toetsbare hypothese en die gericht onderzoeken.',
  videos: [
    { taal: 'en', titel: 'Fault Finding - The Real World Way for Electricians', yt: 'feeo1WUGyWQ', duur: '±18 min' }
  ],
  tekst: `
## Wat een klacht wel en niet vertelt

"De lamp doet het niet" laat minstens negen oorzaken open:

- geen voeding op de groep;
- automaat afgeschakeld;
- aardlek aangesproken;
- schakelaar defect;
- fase onderbroken;
- nul onderbroken;
- lamp defect;
- verbinding los;
- bedrading verkeerd na een eerdere ingreep.

Elk daarvan geeft een ander meetresultaat. Het doel van je eerste twee metingen is niet
het vinden van de oorzaak, maar het schrappen van de helft van deze lijst.

## Doorvragen bij de klant

De klant heeft informatie die je nergens kunt meten. Vraag altijd:

- **Sinds wanneer?** Een storing die gisteren begon heeft vaak een aanwijsbare oorzaak.
- **Wat is er veranderd?** Nieuw apparaat, verbouwing, schilder geweest, iets opgehangen,
  onweer gehad, lekkage?
- **Gebeurt het altijd of soms?** Intermitterende storingen wijzen op vocht, temperatuur
  of een marginale verbinding.
- **Hangt het samen met iets?** Alleen als de wasmachine draait, alleen 's ochtends,
  alleen bij regen?
- **Wat is er al geprobeerd?** Voorkomt dat je hetzelfde nog eens doet, en verklaart soms
  waarom de installatie er nu anders uitziet dan bedoeld.

!!! kern Intermitterend is informatie
"Het gebeurt maar af en toe" is geen tegenslag maar een aanwijzing. Vocht (regen,
douchen), temperatuur (opwarmen van een verbinding), belasting (alleen bij zware
apparaten) en trilling zijn de vier gangbare variabelen. Vraag door tot je weet welke
het is.
!!!

## Van hypothese naar meting

Een goede hypothese is toetsbaar en sluit iets uit:

| Hypothese | Meting | Wat een bevestiging betekent |
|---|---|---|
| De fase komt niet tot de doos | Spanning L–N in de doos | Zoek stroomopwaarts richting de kast |
| De nul is onderbroken | Spanning L–N laag, L–PE normaal | Nulzijde onderzoeken |
| De schakelaar schakelt niet door | Doorbellen, spanningsloos | Schakelaar of bedrading ernaartoe |
| Het armatuur is defect | Armatuur op een bekende werkende voeding | Vervangen, en vaststellen waarom |

De sleutel is dat je vooraf weet wat je gaat concluderen bij beide uitkomsten. Weet je
dat niet, dan is de meting niet zinvol.

## Waarom niet meteen vervangen

Een onderdeel vervangen dat toevallig ook stuk was, lost de storing niet op en kost je
het overzicht. Erger: vervangen zonder de oorzaak te kennen betekent dat het nieuwe
onderdeel om dezelfde reden opnieuw defect raakt.

Een doorgebrande lamp is soms gewoon een doorgebrande lamp. Maar de derde lamp in
hetzelfde armatuur binnen een jaar is een symptoom van iets anders: een slechte
verbinding, een te hoge spanning, of een armatuur dat zijn warmte niet kwijt kan.

## Documenteer wat je vindt

Noteer per storing: **symptoom → onderzoek → oorzaak → meting → reparatie → les**.
Na honderd storingen heb je een eigen naslagwerk dat in geen enkel boek staat, en
herken je patronen sneller dan iemand die twee jaar langer in het vak zit maar niets
heeft bijgehouden.
`,
  checklist: [
    'Ik vraag altijd door bij de klant voordat ik ga meten',
    'Ik formuleer een toetsbare hypothese voor elke meting',
    'Ik vervang geen onderdelen zonder de oorzaak te kennen',
    'Ik houd een logboek bij van symptoom, oorzaak en les'
  ],
  bronnen: ['chatgpt.md M8', 'deekseek.md M5', 'grok.md M6']
},

/* ------------------------------------------------------------------ 8.3 */
{
  id: 'm08l03',
  nr: '8.3',
  titel: 'De klassieke storingen',
  duur: 20,
  type: 'les',
  leerdoel: 'Je herkent de meest voorkomende storingen aan hun symptoompatroon.',
  videos: [
    { taal: 'en', titel: 'Electrical Troubleshooting for Beginners - Step-by-Step Guide', yt: 'yxHuwt8p8-k', duur: '±16 min' }
  ],
  tekst: `
## De onderbroken nul

**Symptomen:** meerdere aansluitpunten werken niet terwijl er wel spanning meetbaar is;
lampen die dof branden; vreemde spanningen tussen N en PE; apparatuur die zich
onvoorspelbaar gedraagt afhankelijk van wat er nog meer aanstaat.

**Waarom het verwarrend is:** je meet 230 V tussen fase en aarde, dus je concludeert
dat de voeding er is. Maar de retourweg ontbreekt, en de belastingen komen via elkaar in
serie te staan.

**Waar zoeken:** de doorgeluste nul in een contactdoos, de nulrail in de kast, of een
lasklem waar de nul doorheen loopt. Bij 3-fase: zie module 6.4 - dit is de gevaarlijkste
variant.

## De losse verbinding en de overgangsweerstand

**Symptomen:** intermitterende uitval, vaak samenhangend met belasting; verkleuring of
brandlucht; een aansluitpunt dat warm aanvoelt; soms een knetterend geluid.

**Waarom het verraderlijk is:** een spanningsmeting zonder belasting toont niets, omdat
er geen stroom loopt en dus geen spanningsval over de slechte verbinding ontstaat.

**Hoe je het vindt:** meten mét belasting, en de spanningsval over verdachte delen
vergelijken. Verkleurde klemmen en verharde isolatie zijn zichtbare aanwijzingen.

!!! gevaar Verkleuring is een brandmelding
Een bruin verkleurde klem, verhard of verkleurd isolatiemateriaal en een geur van heet
plastic zijn geen cosmetische afwijkingen. Ze betekenen dat er langdurig te veel warmte
is ontwikkeld. Herstellen betekent hier: de verbinding opnieuw maken én beoordelen of de
geleider zelf nog deugt.
!!!

## De doorgeslagen aardlek

**Symptomen:** aardlek schakelt af, direct of pas na verloop van tijd; soms alleen bij
regen, bij het aanzetten van een specifiek apparaat, of 's ochtends.

**Waar zoeken:** zie les 8.4 voor de systematiek.

## De kortsluiting

**Symptomen:** automaat schakelt direct af bij inschakelen; soms een hoorbare knal of
zichtbare schade.

**Waar zoeken:** meestal bij recente werkzaamheden. Een schroef of spijker door een
leiding, een verkeerd aangesloten component, of water in een buitendoos. Vraag altijd
wat er kort geleden is gebeurd in die ruimte.

## De defecte belasting

**Symptomen:** één apparaat werkt niet, de rest wel; soms schakelt de automaat af bij
het inschakelen van dat ene apparaat.

**Hoe je het bevestigt:** het apparaat op een andere, bekende werkende aansluiting
testen. Werkt het daar ook niet, dan ligt het aan het apparaat en niet aan de installatie.
Dat klinkt triviaal, maar het is de snelste test die er is en hij wordt vaak overgeslagen.

## Symptoompatronen in één tabel

| Patroon | Meest waarschijnlijke richting |
|---|---|
| Eén apparaat, rest werkt | Apparaat of aansluitpunt |
| Eén groep, andere groepen werken | Automaat, bedrading of belasting in die groep |
| Meerdere groepen tegelijk | Aardlek, hoofdschakelaar, of een gedeelde nul |
| Hele woning | Aansluiting, hoofdzekering, netbeheerder |
| Alles werkt, maar vreemd | Onderbroken nul - meet direct N–PE |
| Alleen bij belasting | Overgangsweerstand of te dunne leiding |
| Alleen bij vocht | Isolatiefout, buitendoos, kruipruimte |
`,
  checklist: [
    'Ik herken de symptomen van een onderbroken nul',
    'Ik weet waarom een losse verbinding zonder belasting niet zichtbaar is bij meten',
    'Ik test een verdacht apparaat altijd op een bekende werkende aansluiting',
    'Ik behandel verkleuring en brandlucht als een acuut veiligheidsprobleem'
  ],
  bronnen: ['chatgpt.md M8', 'deekseek.md M5', 'kimi.md M7', 'grok.md M6']
},

/* ------------------------------------------------------------------ 8.4 */
{
  id: 'm08l04',
  nr: '8.4',
  titel: 'Een aardlekstoring lokaliseren',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt systematisch bepalen welke groep en welk apparaat een aardlek laat afschakelen.',
  videos: [],
  tekst: `
## Eerst: is het één keer of steeds?

Een aardlek die één keer is afgeschakeld en daarna weken normaal functioneert, kan een
eenmalige gebeurtenis zijn geweest - een defecte lamp die doorbrandt, een apparaat dat
werd ingeschakeld met vocht erin. Een aardlek die herhaaldelijk afschakelt, heeft een
structurele oorzaak.

## De systematiek: halveren

1. **Alle groepen achter de aardlek uitschakelen.** Aardlek weer inschakelen. Blijft hij
   staan? Dan zit de fout in een van de groepen. Schakelt hij direct opnieuw af zonder
   dat er een groep aanstaat, dan zit de fout in de kast zelf of in de bedrading tussen
   aardlek en automaten.
2. **Groepen één voor één inschakelen.** Bij welke groep valt hij af? Dat is je
   verdachte groep. Ga verder, want er kunnen er meerdere zijn.
3. **Binnen de verdachte groep: alle verbruikers loskoppelen.** Alle stekkers eruit, ook
   die je niet verdenkt. Groep weer inschakelen.
4. **Verbruikers één voor één terugplaatsen** tot de aardlek afschakelt.
5. **Blijft de aardlek afschakelen zonder enige verbruiker?** Dan zit de fout in de vaste
   installatie. Nu is een isolatiemeting op die groep aan de orde, spanningsloos en met
   alle verbruikers losgekoppeld (module 7.4).

!!! kern Waarom je alles loskoppelt en niet alleen het verdachte apparaat
Lekstromen tellen op. Drie apparaten die elk 8 mA lekken - wat op zichzelf niet
abnormaal is - komen samen op 24 mA en brengen een 30 mA-aardlek op het randje. Er is
dan geen enkel defect apparaat te vinden, want er is er geen. De oplossing is dan
herverdelen over meer aardlekken, niet zoeken naar een schuldige.
!!!

## De gangbare verdachten

| Oorzaak | Herkenbaar aan |
|---|---|
| Vocht in buitenverlichting of tuinaansluiting | Alleen bij of na regen |
| Wasmachine, vaatwasser, boiler | Bij het opwarmen; het verwarmingselement lekt |
| Beschadigde leiding | Na verbouwing, boren of ophangen |
| Vocht in kruipruimte | Seizoensgebonden, na hoge grondwaterstand |
| Te veel apparatuur achter één aardlek | Willekeurig, vaak bij piekgebruik |
| Verkeerd aardlektype bij PV of laadpaal | Sinds de installatie daarvan |
| Defecte aardlek zelf | Schakelt af zonder enige belasting |

## Een stroomtang als versneller

Met een stroomtang om de fase en de nul van een groep tegelijk meet je direct de
lekstroom van die groep - hetzelfde principe als de aardlek zelf. Zo zie je zonder
uitschakelen welke groep de meeste lekstroom veroorzaakt, en of de som in de buurt van
30 mA komt.

Dat scheelt in de praktijk veel uit- en inschakelen, en het maakt het verschil zichtbaar
tussen "één defect" en "te veel opgeteld".

## Uitleg aan de klant

Bij een storing die blijkt te komen van optellende lekstromen, is de eerlijke uitleg:
er is niets kapot, maar er hangt te veel achter één beveiliging, en de oplossing is een
herverdeling in de groepenkast. Dat is inhoudelijk een ander gesprek dan "uw wasmachine
is defect", en het voorkomt dat de klant onnodig een apparaat vervangt.
`,
  checklist: [
    'Ik kan de vijf stappen van het lokaliseren van een aardlekstoring opnoemen',
    'Ik weet dat lekstromen optellen en dat er dan geen defect apparaat is',
    'Ik ken de gangbare oorzaken en hun herkenbare patroon',
    'Ik kan met een stroomtang de lekstroom van een groep meten'
  ],
  bronnen: ['chatgpt.md M8', 'gemini.md M3', 'deekseek.md M5', 'kimi.md M7']
},

/* ------------------------------------------------------------------ 8.5 */
{
  id: 'm08l05',
  nr: '8.5',
  titel: 'Afronden, controleren en uitleggen',
  duur: 16,
  type: 'les',
  leerdoel: 'Je kunt een reparatie afronden zodat de storing niet terugkomt en de klant begrijpt wat er is gebeurd.',
  videos: [],
  tekst: `
## Verify: de stap die het vaakst wordt overgeslagen

Na een reparatie is de verleiding groot om te vertrekken zodra het lampje brandt. Maar
de laatste stap van het model is verificatie, en die bestaat uit drie delen:

**1. Functioneel** - werkt alles weer, in álle schakelstanden en combinaties? Bij een
wisselschakeling: vier combinaties. Bij een groep: alle aansluitpunten, niet alleen de
klagende.

**2. Veiligheid** - is de beschermingsleiding nog doorverbonden, zijn de klemmen vast,
zit alles weer dicht, en is er niets blijven liggen in de doos of de kast?

**3. Oorzaak** - begrijp je waarom het misging? Zo nee, dan is de kans reëel dat je een
symptoom hebt behandeld en de storing terugkomt.

## Wat je vastlegt

Ook bij een reparatie hoort een korte vastlegging:

- wat was de melding;
- wat heb je aangetroffen;
- wat heb je gedaan;
- welke metingen heb je gedaan en met welke uitkomst;
- welke bevindingen laat je achter die niet tot de opdracht behoorden.

Dat laatste punt komt hier weer terug, en niet toevallig. Bij een storing kom je vaak
meer tegen dan waar je voor kwam: een groep zonder aardlek, een oude leiding zonder
beschermingsleiding, een kast waar de labeling niet klopt. Melden is geen kritiek op de
vorige monteur, het is informatie die de eigenaar nodig heeft.

!!! kern Wat een klant onthoudt
De klant kan de kwaliteit van je verbinding niet beoordelen. Wat hij onthoudt is: kwam
je op tijd, legde je uit wat er aan de hand was in taal die hij begreep, was het netjes
toen je wegging, en klopte de rekening met wat je had gezegd. Dat is geen bijzaak naast
het vakwerk - het is de helft ervan.
!!!

## Uitleggen zonder jargon

Vertaal wat je hebt gedaan naar de wereld van de klant:

> Niet: "de lusimpedantie was te hoog waardoor de magnetische afschakeling niet werd
> gehaald."
>
> Wel: "de kabel naar de schuur is te dun voor die lengte. Bij een kortsluiting daar
> schakelt de zekering niet snel genoeg af. Dat wil je niet, dus ik adviseer een
> dikkere kabel."

Geef daarbij altijd het waarom en het gevolg. Mensen accepteren een advies dat geld kost
prima, zolang ze begrijpen welk risico ze anders lopen.

## Als je het niet weet

Dat gebeurt, ook na jaren. De professionele reactie is niet doorgaan tot je het toevallig
oplost, maar:

1. vaststellen wat je wél zeker weet en dat noteren;
2. de installatie in een veilige toestand achterlaten - liever een groep uit dan een
   onduidelijke situatie onder spanning;
3. de klant eerlijk vertellen wat de stand van zaken is;
4. overleg met een ervaren collega, en terugkomen.

Weten wanneer je moet stoppen is dezelfde vaardigheid als weten wanneer je iets niet
mag doen. Het is het onderdeel van vakbekwaamheid dat het langst duurt om te leren en
het meest wordt gewaardeerd.
`,
  checklist: [
    'Ik controleer na een reparatie alle schakelstanden en niet alleen de klacht',
    'Ik weet waarom ik de oorzaak moet begrijpen en niet alleen het symptoom',
    'Ik leg bevindingen buiten mijn opdracht schriftelijk vast',
    'Ik kan een technische bevinding uitleggen zonder jargon'
  ],
  bronnen: ['chatgpt.md M8', 'grok.md M6', 'qwen.md M6', 'gemini.md M6']
}

]});
