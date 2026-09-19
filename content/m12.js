CURSUS.addModule({
  id: 'm12',
  nr: 12,
  deel: 2,
  titel: 'Gereedschap, kwaliteit en ondernemen',
  ondertitel: 'De vaardigheden naast het vak die bepalen of klanten terugkomen.',
  niveau: 'Beginner tot gemiddeld',
  studietijd: 5,
  intro: 'Welk gereedschap je echt nodig hebt, hoe je werk aflevert dat een volgende monteur begrijpt, waar je bevoegdheid ophoudt, en wat er komt kijken bij zelfstandig werken.',
  inleiding: [
    "Een goede elektricien wordt niet alleen beoordeeld op kennis. Deze slotmodule van de cursus elektrotechniek gaat over je gereedschapskist, de juiste meetapparatuur, netjes opleveren en het gesprek met de klant.",
    "Je leest ook wat een VOP- of VP-aanwijzing, VCA en een verzekering betekenen als je zelfstandig gaat werken. Deze zelfstudie geeft geen diploma, maar helpt je wel om goed van start te gaan."
  ],
  leerdoelen: [
    'Een basisuitrusting samenstellen en weten welke investeringen kunnen wachten',
    'Meetapparatuur kiezen die past bij je werkzaamheden en meetcategorie',
    'Werk afleveren dat controleerbaar en overdraagbaar is',
    'Je bevoegdheden en aansprakelijkheid benoemen',
    'Verwachtingen managen en technische bevindingen begrijpelijk uitleggen'
  ],
  lessen: [

/* ------------------------------------------------------------------ 12.1 */
{
  id: 'm12l01',
  nr: '12.1',
  titel: 'Je gereedschapskist',
  duur: 16,
  type: 'les',
  leerdoel: 'Je kunt een werkbare basisuitrusting samenstellen en onderscheiden wat noodzakelijk is van wat kan wachten.',
  videos: [],
  tekst: `
## De basis: wat je vanaf dag één nodig hebt

**Veiligheid en meten**

- Tweepolige spanningstester (NEN-EN-IEC 61243-3), CAT III of IV
- Multimeter, CAT III minimaal
- Hangslot en labels voor LOTOTO
- Veiligheidsbril, veiligheidsschoenen

**Handgereedschap, VDE 1000 V geïsoleerd**

- Set schroevendraaiers, plat en kruis, en torx voor modern schakelmateriaal
- Combitang, zijkniptang, punttang
- Striptang met instelbare of automatische diepte
- Hulzentang (vierkant- of trapeziumpers)
- Waterpomptang

**Overig**

- Rolmaat, potlood, waterpas (klein, voor schakelmateriaal)
- Accuboormachine met steenboren en een goede stofafzuiging of stofzak
- Zaklamp of hoofdlamp
- Kabelschaar voor dikkere kabels
- Trekveer of glasvezeltrekband

!!! kern Bezuinig niet op drie dingen
De tweepolige spanningstester, de striptang en de hulzentang. De eerste omdat je leven
ervan afhangt, de tweede en derde omdat ze de kwaliteit van elke verbinding bepalen die
je de komende jaren maakt. Op vrijwel al het overige kun je beginnen met middenklasse en
later upgraden.
!!!

## Wat kan wachten

- Installatietester (multifunctioneel) - pas nodig als je zelfstandig gaat opleveren
- Isolatieweerstandsmeter - vaak onderdeel van de installatietester
- Stroomtang - heel nuttig bij storingzoeken, maar niet vanaf dag één
- Momentschroevendraaier - wél snel aanschaffen als je in verdeelkasten gaat werken
- Kernboor, doosfrees, grotere machines - wanneer het werk erom vraagt
- Warmtebeeldcamera - luxe, maar verrassend nuttig bij het opsporen van slechte
  verbindingen

## Onderhoud en keuring

Gereedschap met een snoer en verlengsnoeren vallen onder de periodieke inspectie volgens
NEN 3140. Praktisch betekent dat:

- beschadigd gereedschap gaat apart en niet "nog even" mee;
- verlengsnoeren visueel controleren vóór gebruik;
- isolerend gereedschap met beschadigde isolatie vervangen, niet repareren;
- accu's en laders niet onbeheerd laden op brandbaar materiaal.

## De bus inrichten

Twee praktische gewoontes die veel tijd besparen:

**Vaste plaatsen.** Alles heeft een plek; wat je pakt gaat terug. Zoeken naar
gereedschap is de grootste onzichtbare tijdpost in dit vak.

**Voorraad met minimumniveau.** Lasklemmen, adereindhulzen, schakelmateriaal, de
gangbare doorsnedes kabel, wartels en inbouwdozen. Eén rit naar de groothandel kost een
uur; een goed gevulde bus voorkomt er tientallen per jaar.
`,
  checklist: [
    'Ik heb een tweepolige spanningstester van de juiste meetcategorie',
    'Mijn handgereedschap is VDE 1000 V en onbeschadigd',
    'Ik heb een goede striptang en hulzentang',
    'Ik controleer verlengsnoeren en gereedschap vóór gebruik'
  ],
  bronnen: ['qwen.md bonus', 'copilot.md M9', 'grok.md M3']
},

/* ------------------------------------------------------------------ 12.2 */
{
  id: 'm12l02',
  nr: '12.2',
  titel: 'Meetapparatuur kiezen',
  duur: 14,
  type: 'les',
  leerdoel: 'Je kunt meetapparatuur selecteren op basis van meetcategorie, functie en het werk dat je doet.',
  videos: [
    { taal: 'nl', titel: 'Benning digitale Duspol - tweepolige spanningstester', yt: 'lkp09GUTEvE', duur: '±9 min' }
  ],
  tekst: `
## De volgorde van investeren

**1. Tweepolige spanningstester.** Je eerste en belangrijkste instrument. Let op:
CAT III of CAT IV, lastinschakeling via drukknoppen, trilalarm, doorgangstest, en
onbeschadigde vaste meetsnoeren met vingerbeschermers.

**2. Multimeter.** CAT III minimaal, met doorbelfunctie, automatische bereikkeuze en
duidelijke AC/DC-scheiding. Een True RMS-meter is aan te raden: bij vervormde
stroomvormen - en die zijn er inmiddels overal door schakelende voedingen - meet een
gewone meter systematisch verkeerd.

**3. Stroomtang.** Voor het meten van belasting en lekstroom zonder het circuit te
onderbreken. Een tang die ook lekstroom in milliampères kan meten, is bij
aardlekstoringen goud waard.

**4. Installatietester.** Zodra je zelfstandig oplevert. Combineert isolatieweerstand,
lage-weerstandsmeting met compensatie, lusimpedantie Zs, RCD-test en vaak fasevolgorde.

!!! kern Meetcategorie is geen marketing
CAT II, III en IV beschrijven tegen welke transiënte overspanning het instrument bestand
is. Hoe dichter bij de netaansluiting, hoe meer energie er bij een fout vrijkomt. Een
instrument zonder duidelijke categorie hoort niet in een meterkast - bij een fout is het
instrument zelf dan de bron van het letsel.
!!!

## Waar je op let bij aanschaf

| Aspect | Waarom |
|---|---|
| Meetcategorie en spanning | Moet passen bij de plek waar je meet |
| Kwaliteit meetsnoeren | Vaak het zwakste punt; vervangbaar? |
| Vingerbeschermers | Voorkomt afglijden naar de meetpunt |
| Zekeringen in het instrument | Bij stroommeting essentieel; vervangbaar? |
| Kalibratie | Bij professioneel opleveren periodiek nodig |
| Batterijstand-indicatie | Een lege tester wijst "geen spanning" aan |

## Kalibratie en controle

Meetinstrumenten die je gebruikt voor het aantonen van spanningsloosheid en voor
opleveringsmetingen horen periodiek gecontroleerd te worden. Voor de tweepolige tester
gebeurt dat feitelijk bij elk gebruik, met de voor- en nacontrole uit module 1.3.

Voor installatietesters geldt een periodieke kalibratie, doorgaans jaarlijks, met een
certificaat. Bij professioneel opleveren is dat certificaat onderdeel van de
onderbouwing van je meetresultaten.

## Wat je niet moet kopen

Goedkope multimeters zonder categorie-aanduiding, "spanningzoekers" met een lampje in de
schroevendraaier als hoofdinstrument, en pentesters zonder duidelijke normverwijzing.
Ze kosten weinig en kunnen alles kosten.
`,
  checklist: [
    'Ik weet welke meetcategorie ik nodig heb voor mijn werk',
    'Ik ken de volgorde waarin ik meetapparatuur ga aanschaffen',
    'Ik weet waarom True RMS relevant is bij moderne apparatuur',
    'Ik controleer mijn tester bij elk gebruik voor en na'
  ],
  bronnen: ['gemini.md M2', 'copilot.md M9', 'qwen.md bonus']
},

/* ------------------------------------------------------------------ 12.3 */
{
  id: 'm12l03',
  nr: '12.3',
  titel: 'Vakwerk afleveren',
  duur: 16,
  type: 'les',
  leerdoel: 'Je kunt werk opleveren dat technisch klopt én zichtbaar goed is, en dat overdraagbaar is aan een volgende monteur.',
  videos: [
    { taal: 'nl', titel: 'Inductie kookplaat aansluiten: kookgroep, krachtstroom, Perilex', yt: 'znN3SmrC5AU', duur: '±12 min' },
    { taal: 'nl', titel: 'Kookgroep aansluiten 2×230 V', yt: '6-d4BTSgsoM', duur: '±10 min' }
  ],
  tekst: `
## Technisch correct is de ondergrens

Dat een installatie werkt en veilig is, is geen prestatie maar een voorwaarde. Vakwerk
gaat over wat daarbovenop komt:

**recht · schoon · logisch · degelijk · consistent · controleerbaar · gedocumenteerd**

Die zeven woorden zijn geen esthetiek. Consistentie maakt fouten zichtbaar,
controleerbaarheid maakt onderhoud mogelijk, en documentatie maakt je werk overdraagbaar.

## Gewoontes op de werkvloer

**Bij binnenkomst** - vloeren afdekken waar nodig, en vragen waar je spullen mag zetten.

**Vóór het boren** - nadenken over wat er achter die wand zit: leidingen, kabels,
constructie. Bij twijfel: leidingzoeker, of van de andere kant kijken.

**Bij het trekken van kabel** - eerst het hele tracé bepalen, dan pas beginnen.

**Bij elke verbinding** - de zes controlepunten uit module 4.3.

**Bij het openen van iets** - het minstens zo netjes achterlaten als je het aantrof.

**Bij het afsluiten** - opruimen, stofzuigen, afdekramen recht, en de klant laten zien
wat er is gedaan.

!!! kern Wat de klant beoordeelt
De klant kan jouw kennis van Ohm's wet niet beoordelen. Hij ziet: scheve contactdozen,
te ruim uitgehakte gaten, stof op de vensterbank, boorgruis, losse afdekramen en
onduidelijke communicatie. Technische kwaliteit en zichtbare kwaliteit zijn twee
verschillende vaardigheden - en je wordt op de tweede afgerekend terwijl je op de eerste
je vak uitoefent. Je hebt ze allebei nodig.
!!!

## De overdraagbaarheidstest

Stel jezelf bij het afsluiten van elk werk drie vragen:

1. Kan een volgende monteur binnen een minuut zien wat ik heb gedaan?
2. Kan hij één groep uitschakelen zonder de rest van het huis stil te leggen?
3. Vindt hij mijn verbindingen terug zonder te slopen?

Drie keer ja betekent vakwerk. Eén keer nee betekent dat je iemand - vaak jezelf over
twee jaar - een probleem hebt nagelaten.

## Documentatie die je achterlaat

- Bijgewerkte labeling in de groepenkast
- Schema van wat je hebt aangelegd of gewijzigd
- Meetwaarden van de oplevering
- Bevindingen aan het bestaande deel, ook als die buiten de opdracht vielen
- Foto's van wanden vóór ze dichtgingen

Dit kost bij elkaar een half uur en is bijna altijd het onderdeel waar klanten later
het meest aan hebben.
`,
  checklist: [
    'Ik dek af voordat ik begin en ruim op voordat ik ga',
    'Ik kan de drie vragen van de overdraagbaarheidstest met ja beantwoorden',
    'Ik laat labeling, schema en meetwaarden achter',
    'Ik fotografeer wanden voordat ze dichtgaan'
  ],
  bronnen: ['chatgpt.md professional quality', 'grok.md M6', 'qwen.md M6', 'gemini.md M6']
},

/* ------------------------------------------------------------------ 12.4 */
{
  id: 'm12l04',
  nr: '12.4',
  titel: 'Bevoegdheden, certificering en aansprakelijkheid',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt benoemen wat je mag, welke certificering daarbij hoort, en welke risico\'s je loopt bij zelfstandig werk.',
  videos: [],
  tekst: `
## Wat je mag hangt niet af van wat je kunt

Terug naar module 1.2: je bevoegdheid volgt uit je **aanwijzing**, niet uit je gevoel
van bekwaamheid. Dat onderscheid is er niet om je te beperken maar omdat er bij dit werk
geen ruimte is om achteraf te ontdekken dat je iets verkeerd had ingeschat.

| Traject | Wat het is | Wanneer relevant |
|---|---|---|
| NEN 3140 VOP | Instructie voor afgebakende taken onder toezicht | Bij aanvang, als je meewerkt |
| NEN 3140 VP | Vakbekwaam Persoon: zelfstandig beoordelen en werken | Zodra je zelfstandig aan installaties werkt |
| VCA | Veiligheid, gezondheid en milieu op de werkvloer | Vaak geëist door opdrachtgevers |
| F-gassen | Werken aan koudemiddelcircuits | Bij airco en warmtepompen - zie module 9.5 |
| Vakopleiding elektrotechniek | Mbo-traject, ook in deeltijd of BBL | De structurele route naar vakbekwaamheid |

Een zelfstudiecursus als deze levert geen van deze. Wat hij wél levert is het begrip
waarmee zo'n traject veel sneller gaat en waarmee je vanaf dag één zinnige vragen stelt.

!!! gevaar Wat er gebeurt als het misgaat
Werk je aan een installatie zonder de vereiste bevoegdheid en ontstaat er letsel of
brand, dan is de vraag achteraf niet of jij het goed hebt gedaan, maar of je het mocht
doen. Verzekeraars, arbeidsinspectie en rechters kijken naar de aanwijzing, de
opleiding en de vastlegging. Dat is precies waarom module 7 zoveel aandacht besteedt
aan het vastleggen van metingen.
!!!

## Aansprakelijkheid bij zelfstandig werk

Werk je voor een werkgever, dan ligt de aansprakelijkheid grotendeels daar, mits je
binnen je aanwijzing en instructies blijft. Werk je voor eigen rekening, dan verandert
dat:

- **Bedrijfsaansprakelijkheidsverzekering (AVB)** - dekt schade aan personen en zaken
  die door jouw werk ontstaat. Voor elektrotechnisch werk geen luxe.
- **Beroepsaansprakelijkheid** - voor schade door foutief advies of ontwerp.
- **Uitsluitingen** - let op wat een polis uitsluit: werk zonder vereiste certificering
  is een klassieke uitsluitingsgrond. Een verzekering die niet uitkeert omdat je niet
  bevoegd was, is geen verzekering.

Lees bij het afsluiten specifiek na wat de polis zegt over werkzaamheden aan elektrische
installaties, en of jouw situatie eronder valt.

## Praktische route

Voor de situatie waarin je nu zit - meewerken met je broertje, volgend jaar samen met
je vader - is de verstandige volgorde:

1. Deze cursus afmaken voor het begrip.
2. **NEN 3140 VOP of VP** volgen, passend bij wat je gaat doen.
3. **VCA** als opdrachtgevers erom vragen.
4. Structureel meewerken met iemand die vakbekwaam is, en blijven vragen waarom iets zo
   gebeurt.
5. Overwegen of een mbo-traject in deeltijd of BBL past - dat is de route die je
   bevoegdheid duurzaam vastlegt.
6. Bij airco en warmtepompen: de **F-gassen**-kant expliciet beleggen bij iemand die
   daarvoor gecertificeerd is.

## De vaardigheid die het langst duurt

Weten wanneer je moet stoppen. Niet omdat je het niet snapt, maar omdat het buiten je
bevoegdheid valt, of omdat de situatie meer kennis vraagt dan je nu hebt. Dat herkennen
en benoemen is geen zwakte - het is het onderdeel van vakbekwaamheid dat ervaren
collega's het meest waarderen.
`,
  checklist: [
    'Ik weet welke aanwijzing ik nodig heb voor het werk dat ik ga doen',
    'Ik weet dat deze cursus geen bevoegdheid oplevert',
    'Ik weet welke verzekeringen relevant zijn bij zelfstandig werk',
    'Ik heb de route naar certificering voor mijzelf op een rij'
  ],
  bronnen: ['qwen.md bonus', 'gemini.md M1', 'gemini.md M6', 'grok.md vooraf', 'copilot.md M10']
},

/* ------------------------------------------------------------------ 12.5 */
{
  id: 'm12l05',
  nr: '12.5',
  titel: 'Klantcommunicatie',
  duur: 14,
  type: 'les',
  leerdoel: 'Je kunt verwachtingen managen, technische bevindingen begrijpelijk uitleggen en nee zeggen wanneer dat nodig is.',
  videos: [
    { taal: 'nl', titel: 'Groepenkast vervangen & elektrisch koken', yt: 'jVyeF1ba54g', duur: '±20 min' }
  ],
  tekst: `
## Vooraf: verwachtingen vastleggen

De meeste klachten in dit vak gaan niet over techniek maar over verwachtingen die niet
zijn uitgesproken. Vóór het werk begint, staat vast:

- wat er precies gedaan wordt, en wat expliciet niet;
- wat het kost, of op welke basis er wordt afgerekend;
- wanneer, en hoe lang het duurt;
- wat er gebeurt als je onderweg iets aantreft dat niet is voorzien;
- of er stroom uitvalt en hoelang.

Dat laatste punt wordt structureel vergeten en is voor de klant vaak het belangrijkste:
een thuiswerkende klant of een vriezer vol eten maakt het uitschakelen van een groep
een planningsvraag.

## Onderweg: meerwerk melden vóórdat je het doet

Tref je iets aan dat extra werk betekent, dan is de volgorde: **stoppen, uitleggen,
akkoord vragen, doorgaan**. Niet: doen en achteraf op de rekening zetten.

Een klant accepteert bijna elk redelijk meerwerk als hij vooraf begrijpt waarom het nodig
is. Achteraf accepteert hij vrijwel niets.

## Uitleggen zonder jargon

Vertaal altijd naar wat het voor de klant betekent:

> Niet: "de Zs was te hoog waardoor de magnetische afschakeling niet gehaald wordt."
>
> Wel: "de kabel naar uw schuur is te dun voor die afstand. Als daar kortsluiting
> ontstaat, schakelt de zekering niet snel genoeg uit. Dat is een brandrisico. Ik
> adviseer een dikkere kabel; dat kost ongeveer X."

De structuur die werkt: **wat is er aan de hand → wat betekent dat → wat adviseer ik →
wat kost het**. In die volgorde, en in gewone woorden.

!!! kern Nee zeggen is onderdeel van het vak
"Dat kan ik niet, daar ben ik niet voor bevoegd, ik regel iemand die dat wel is" klinkt
als een zwaktebod en is het tegenovergestelde. Klanten vertrouwen iemand die zijn grens
benoemt meer dan iemand die alles zegt te kunnen. En het alternatief - werk aannemen dat
je niet mag of niet kunt - is het scenario waarin het echt misgaat.
!!!

## Slecht nieuws brengen

Soms is het antwoord dat wat de klant wil hier niet kan: de aansluiting is te klein, de
installatie is te oud, netverzwaring duurt een jaar. Breng dat direct en volledig, met
de alternatieven erbij.

Wat niet werkt: het probleem kleiner maken dan het is, of het uitstellen tot het werk al
half is uitgevoerd. Wat wel werkt: het feit, de reden, en de opties.

## Bij oplevering

Sluit elk werk af met drie minuten uitleg:

- dit heb ik gedaan;
- dit is de indeling van uw groepenkast, en dit is de aardlek en de testknop;
- dit heb ik aangetroffen wat u moet weten;
- hier liggen de papieren en de meetgegevens.

Dat gesprek is het moment waarop een klant besluit of hij je terugbelt. Het is
goedkoper dan elke vorm van reclame en het is bovendien inhoudelijk het juiste om te doen.
`,
  checklist: [
    'Ik leg vooraf vast wat er gedaan wordt en wat het kost',
    'Ik meld meerwerk voordat ik het uitvoer',
    'Ik leg bevindingen uit in de volgorde wat-betekenis-advies-kosten',
    'Ik sluit elk werk af met een korte uitleg aan de klant'
  ],
  bronnen: ['qwen.md M6', 'grok.md M6', 'gemini.md M6', 'chatgpt.md professional quality']
}

]});
