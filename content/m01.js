CURSUS.addModule({
  id: 'm01',
  nr: 1,
  deel: 1,
  titel: 'Veiligheid & NEN 3140',
  ondertitel: 'De enige module die je niet mag overslaan.',
  niveau: 'Fundamenteel',
  studietijd: 6,
  kritiek: true,
  intro: 'Je leert waarom een lage spanning als 230 V dodelijk is, welke handelingen je met welke aanwijzing mag verrichten, en hoe je een installatie aantoonbaar spanningsloos maakt volgens de vijf stappen.',
  leerdoelen: [
    'Uitleggen waarom 50 mA door het lichaam al dodelijk kan zijn',
    'Het verschil benoemen tussen NEN 3140 en NEN 1010',
    'De bevoegdheden van VOP, VP en WV uit elkaar houden',
    'De vijf stappen van veiligstellen in de juiste volgorde toepassen',
    'Spanningsloosheid aantonen met een tweepolige spanningstester',
    'Herkennen wanneer een handeling buiten je bevoegdheid valt'
  ],
  lessen: [

/* ------------------------------------------------------------------ 1.1 */
{
  id: 'm01l01',
  nr: '1.1',
  titel: 'Waarom elektriciteit doodt',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt uitleggen waarom niet de spanning maar de stroom door je lichaam bepalend is, en welke stroomsterkte welk effect heeft.',
  videos: [
    { taal: 'en', titel: 'Safety Precautions For Electrical Safety (TECH EHS)', yt: 'GhS2xYbYRhA', duur: '±10 min' },
    { taal: 'en', titel: 'Complete Electrical Safety (HSE Study Guide)', yt: 'cUCp_mGzJF4', duur: '±20 min' }
  ],
  tekst: `
## Niet de spanning doodt, maar de stroom door je lichaam

Een spanning van 230 V klinkt bescheiden naast de 10.000 V van een hoogspanningsnet,
en juist daarin zit de onderschatting. Wat een mens beschadigt is niet de spanning
zelf maar de **stroom** die door het weefsel loopt, en die volgt gewoon uit de wet van Ohm:

**I = U / R**

Bij een droge, intacte huid kan je lichaamsweerstand oplopen tot 10.000 à 100.000 Ω.
Bij een vochtige of bezwete huid, een schaafwondje, of contact via een groot oppervlak
zakt die weerstand naar de orde van **1000 Ω**. Dan geldt:

**I = 230 / 1000 = 0,23 A = 230 mA**

Dat is een veelvoud van wat nodig is om het hart te ontregelen.

## Wat een stroom door het lichaam doet

De grenswaarden hieronder gelden bij wisselstroom van 50 Hz, de netfrequentie in
Nederland, en bij een stroompad dat het hart passeert.

| Stroom | Effect op het lichaam |
|---|---|
| 0,5 – 1 mA | Net waarneembaar, tintelend gevoel |
| 5 – 10 mA | Pijnlijk; spieren trekken samen |
| 10 – 16 mA | Loslaatgrens: je kunt de geleider niet meer bewust loslaten |
| 30 mA | Verkramping van de ademhalingsspieren |
| 50 mA en meer | Reële kans op ventrikelfibrilleren: het hart trilt in plaats van pompt |

Ventrikelfibrilleren is de belangrijkste doodsoorzaak bij elektrische ongevallen.
Het hart stopt niet netjes, maar verliest zijn coördinatie. Zonder defibrillatie
herstelt dat vrijwel nooit vanzelf.

!!! gevaar Waarom een uitgangspunt van "even snel" niet bestaat
Bij 230 mA is de marge tot een dodelijk effect geen factor twee, maar een factor vier
à vijf overschreden. De vraag is dan niet óf het gevaarlijk is, maar of het stroompad
en de duur toevallig gunstig uitvallen. Daar wil je je leven niet van laten afhangen.
!!!

## Drie factoren bepalen de afloop

**1. De stroomsterkte** - volgt uit spanning gedeeld door je weerstand op dat moment.

**2. De duur** - hoe langer de stroom loopt, hoe groter de kans dat het hart in de
kwetsbare fase van zijn ritme wordt geraakt. Dit is precies waarom een
aardlekschakelaar niet alleen op stroomsterkte maar ook op **snelheid** wordt
beoordeeld: afschakelen binnen tientallen milliseconden.

**3. Het stroompad** - de route door het lichaam. Hand naar hand en linkerhand naar
voeten lopen dwars door de borstkas en zijn daarmee het gevaarlijkst. Hand naar
voet aan dezelfde kant, of van vinger naar vinger van één hand, is minder ernstig
maar nog steeds ernstig.

## Waarom 50 Hz wisselstroom ongunstig is

Wisselstroom van 50 Hz zit ongelukkig genoeg in het frequentiegebied waar het hart
het gevoeligst is voor fibrilleren. Daarnaast veroorzaakt wisselstroom een continue
spiersamentrekking: de handspieren die de vuist sluiten zijn sterker dan die de vuist
openen, waardoor je een geleider vastgrijpt in plaats van loslaat. Dat verklaart de
loslaatgrens van 10 à 16 mA in de tabel hierboven.

?? Waarom werken vakmensen waar mogelijk met één hand?
Door één hand in je zak of achter je rug te houden, voorkom je dat je lichaam een
pad van hand naar hand vormt. Zonder dat pad loopt een eventuele stroom niet dwars
door de borstkas. Het is geen vervanging voor spanningsloos werken, maar het is een
gewoonte die het verschil kan maken op het moment dat er tóch onverwacht spanning staat.
??

## Wat dit betekent voor hoe je werkt

Bijna elk dodelijk ongeval in deze categorie begint niet met onwetendheid maar met
een **aanname**: de groep zou uit staan, dit zou de juiste kabel zijn, hier stond
gisteren ook geen spanning. De rest van deze module gaat over het systematisch
uitsluiten van die aannames.

Verder is er praktisch gedrag dat de kans op een ongunstige afloop verkleint:
ringen, horloges en armbanden af, droge handen en droog schoeisel, en niet op een
metalen ladder werken aan iets wat spanning kan voeren.
`,
  checklist: [
    'Ik kan uitleggen waarom 230 V bij 1000 Ω lichaamsweerstand ongeveer 230 mA oplevert',
    'Ik weet bij welke stroomsterkte de loslaatgrens ligt en wat dat betekent',
    'Ik kan de drie factoren noemen die de ernst van een schok bepalen',
    'Ik draag geen ring of horloge meer tijdens elektrisch werk'
  ],
  bronnen: ['gemini.md M1', 'kimi.md M1', 'chatgpt.md M1', 'grok.md M1']
},

/* ------------------------------------------------------------------ 1.2 */
{
  id: 'm01l02',
  nr: '1.2',
  titel: 'Wetgeving en bevoegdheden: wat mag jij?',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kent het verschil tussen NEN 3140 en NEN 1010, en je weet welke handelingen bij welke aanwijzing horen.',
  videos: [
    { taal: 'nl', titel: 'Animatie NEN 3140 - veilig werken aan elektrische installaties', yt: 'rv2OCKIZbxk', duur: '±6 min' },
    { taal: 'nl', titel: 'Inhoud en resultaat NEN 3140 Vakbekwaam Persoon', yt: 'jCR91QxDa-E', duur: '±10 min' }
  ],
  tekst: `
## Twee normen die je niet door elkaar moet halen

**NEN 1010** gaat over de installatie zelf: hoe een laagspanningsinstallatie wordt
ontworpen, aangelegd, gewijzigd en gecontroleerd. Het is de norm die bepaalt welke
doorsnede, welke beveiliging en welke afstanden acceptabel zijn.

**NEN 3140** gaat over het werk: hoe je veilig aan of nabij een elektrische
installatie werkt, wie wat mag doen, en hoe de bedrijfsvoering geregeld is.

Kort gezegd: NEN 1010 beschrijft *het product*, NEN 3140 beschrijft *het proces*.
Als beginnend elektricien raak je NEN 3140 iedere dag aan, en NEN 1010 telkens
wanneer je iets aanlegt of wijzigt.

## De wettelijke basis

De Arbeidsomstandighedenwet verplicht een werkgever tot veilige arbeidsomstandigheden.
Voor elektrotechniek is dat concreet gemaakt in het **Arbobesluit, artikel 3.5**:
werkzaamheden aan of in de nabijheid van een elektrische installatie mogen in beginsel
uitsluitend **spanningsloos** worden uitgevoerd. Werken onder spanning mag alleen als
het strikt noodzakelijk is, met een uitdrukkelijke opdracht, door daarvoor
gekwalificeerde mensen en met passende maatregelen.

NEN 3140 is de praktijkrichtlijn die invulling geeft aan die wettelijke eis. De norm
zelf is geen wet, maar wordt in de praktijk als de maatstaf beschouwd waaraan een
werkgever wordt afgemeten.

!!! kern De kern van artikel 3.5
Spanningsloos werken is de regel. Onder spanning werken is de uitzondering die je
moet kunnen verantwoorden - niet andersom.
!!!

## De aanwijzingen: VOP, VP en WV

Een werkgever wijst medewerkers schriftelijk aan voor een rol. Die aanwijzing bepaalt
wat je mag, en is geen diploma maar een bedrijfsbesluit gebaseerd op je opleiding,
ervaring en de installatie waaraan je werkt.

| Rol | Wie | Wat die persoon mag |
|---|---|---|
| Leek | Geen elektrotechnische kennis | Alleen bedienen wat voor iedereen bedoeld is: stekker, schakelaar |
| VOP - Voldoende Onderricht Persoon | Geen elektrotechnische vooropleiding, wel instructie voor afgebakende taken | Vooraf gedefinieerde, laag-risico handelingen onder toezicht: zekering vervangen, motorbeveiliging resetten, lamp vervangen |
| VP - Vakbekwaam Persoon | Elektrotechnische opleiding of aantoonbare diepgaande ervaring | Zelfstandig risico's beoordelen, storingen analyseren, installatie spanningsloos maken en vrijgeven |
| WV - Werkverantwoordelijke | Aangewezen voor de leiding over de werkzaamheden | Werk toewijzen, werkplek vrijgeven, toezien op de veiligheid van het werk |

Daarnaast bestaat de **IV - Installatieverantwoordelijke**: degene die verantwoordelijk
is voor de installatie als geheel, dus voor het beheer, de staat en de documentatie ervan.

## Waar dat voor jou op neerkomt

Een VOP mag uitdrukkelijk **geen** eigen risico-inschatting maken en geen complexe
storingen diagnosticeren. Dat is niet betuttelend bedoeld: het onderscheid bestaat
omdat een verkeerde risico-inschatting bij elektriciteit direct dodelijk kan zijn,
zonder tweede kans om het beter te doen.

Voor werk bij mensen thuis, waar jij de kwaliteit en veiligheid moet garanderen, is
het niveau van **Vakbekwaam Persoon** het realistische doel. Een zelfstudiecursus als
deze brengt je begrip op niveau, maar levert de aanwijzing niet: die krijg je van een
werkgever, doorgaans na een formele NEN 3140-training.

!!! gevaar Wat deze cursus niet is
Deze cursus is geen erkend diploma en geen NEN 3140-aanwijzing. Werk aan installaties
die je niet mag doen wordt niet legaal doordat je het begrijpt. Weten waar je
bevoegdheid ophoudt is onderdeel van vakbekwaamheid, niet het tegenovergestelde ervan.
!!!

## De vraag die je jezelf steeds stelt

Voordat je iets openmaakt:

1. Wat ga ik precies doen?
2. Welke delen kunnen spanning voeren?
3. Waar komt die spanning vandaan, en kan er een tweede voeding zijn?
4. Kan iemand opnieuw inschakelen terwijl ik bezig ben?
5. Heb ik het juiste meetinstrument bij me?
6. Ben ik voor deze handeling aangewezen of geïnstrueerd?
7. Weet mijn collega wat ik ga doen?

Pas als die zeven vragen beantwoord zijn, begint het technische werk.
`,
  checklist: [
    'Ik kan in één zin het verschil tussen NEN 1010 en NEN 3140 uitleggen',
    'Ik weet welke aanwijzing ik zelf heb, of dat ik er nog geen heb',
    'Ik kan benoemen wat een VOP wél en niet mag',
    'Ik heb de zeven vragen doorgenomen die vooraf gaan aan elke handeling'
  ],
  bronnen: ['gemini.md M1', 'grok.md M1', 'chatgpt.md M1', 'qwen.md M1']
},

/* ------------------------------------------------------------------ 1.3 */
{
  id: 'm01l03',
  nr: '1.3',
  titel: 'De vijf stappen van veiligstellen',
  duur: 22,
  type: 'les',
  leerdoel: 'Je kunt de vijf stappen in de juiste volgorde uitvoeren en uitleggen waarom elke stap er staat.',
  videos: [
    { taal: 'nl', titel: 'Spanningsloosheid aantonen: de 5 stappen uit de NEN 3140', yt: 'LEukyjGh7wY', duur: 'kort' },
    { taal: 'nl', titel: 'Spanningsloosheid aantonen - zo doe je dat', yt: 'K62Hs4WSJck', duur: '±8 min' }
  ],
  tekst: `
## Uitschakelen is een handeling, spanningsloos is een toestand

Dit is de belangrijkste zin uit deze hele cursus. Een automaat omzetten is iets dat
jij *doet*. Of er daadwerkelijk geen spanning meer staat, is iets dat je moet
**vaststellen**, met een geschikt instrument, op de plek waar je gaat werken.

NEN 3140 legt daarvoor in bepaling 6.2 een vaste volgorde van vijf stappen vast.
De ongevalsanalyses zijn eenduidig: vrijwel elk ernstig incident komt voort uit het
overslaan of omdraaien van een van deze stappen.

## Stap 1 - Scheiden

Koppel de installatie los van **alle** mogelijke voedingsbronnen. Niet alleen de
automaat van de groep waaraan je werkt, maar een bewuste analyse van wat er nog meer
spanning kan leveren:

- een PV-omvormer die terug levert zodra de zon schijnt;
- een noodstroomvoorziening of UPS;
- een bidirectionele laadpaal;
- een tweede groep die in dezelfde centraaldoos is doorgelust;
- een verkeerd gelabelde groepenkast, wat vaker voorkomt dan je zou willen.

Scheiden betekent zichtbaar of aantoonbaar onderbreken, niet "de schakelaar staat in
de uit-stand".

## Stap 2 - Beveiligen tegen wederinschakeling

Internationaal bekend als **LOTOTO**: Lock Out, Tag Out, Take Out. Je plaatst een
hangslot op de schakelinrichting en hangt er een gepersonaliseerd label bij met jouw
naam en de reden. Bij vervangbare zekeringen neem je de patroon mee in je zak.

De reden is banaal en daarom gevaarlijk: iemand die de meterkast passeert en denkt
"die staat vast per ongeluk uit". Zonder slot is jouw veiligheid afhankelijk van het
oordeelsvermogen van iemand anders.

## Stap 3 - Spanningsloosheid controleren

Meten op of zo dicht mogelijk bij de werkplek, met een **tweepolige spanningstester**
volgens NEN-EN-IEC 61243-3. De volgorde is dwingend:

1. test de tester op een bekend spanningvoerend punt;
2. meet op de werkplek, alle combinaties: L–N, L–PE, N–PE, en bij 3-fase ook L1–L2, L2–L3, L1–L3;
3. test de tester **opnieuw** op dat bekende spanningvoerende punt.

Die nacontrole is geen formaliteit. Een tester met een lege batterij of een gebroken
meetsnoer wijst netjes "geen spanning" aan bij een kabel die 230 V voert.

!!! gevaar De volgorde is geen suggestie
Meten zonder de tester voor én na te controleren is hetzelfde als niet meten. Je hebt
dan alleen bewezen dat het instrument niets aangaf, niet dat er geen spanning stond.
!!!

## Stap 4 - Aarden en kortsluiten

In woninginstallaties bij laagspanning meestal niet toegepast, maar je moet weten
waarom het bestaat. Bij onoverzichtelijke verdeelinrichtingen, lange parallel lopende
kabels of een risico op inductiespanning verbind je de geleiders onderling en met
aarde. Wordt er onverhoopt tóch ingeschakeld, dan veroorzaakt die verbinding
onmiddellijk een kortsluiting die de bovenliggende beveiliging aanspreekt - in plaats
van dat de spanning op jouw werkplek verschijnt.

## Stap 5 - Afschermen

Alles wat in de buurt van de werkplek wél onder spanning blijft, dek je mechanisch af
met isolerend materiaal. In een groepenkast waar je één groep vervangt, blijft de rest
van de kast immers gewoon leven.

## De volgorde onthouden

**Scheiden · Beveiligen · Controleren · Aarden · Afschermen**

Het draait om één logica: eerst wegnemen wat spanning kan leveren, dan voorkomen dat
het terugkomt, dan pas bewijzen dat het weg is. Wie stap 3 vóór stap 2 doet, meet een
toestand die iemand anders op elk moment ongedaan kan maken.

?? Wat als spanningsloos werken echt niet kan?
Dan is dat een uitzondering die vooraf beoordeeld en schriftelijk opgedragen moet
worden, uitgevoerd door iemand met de juiste aanwijzing, met isolerend gereedschap,
persoonlijke beschermingsmiddelen en meestal een tweede persoon erbij. Als beginnend
elektricien is dit geen situatie waarin je zelfstandig belandt. Kom je er wel in
terecht, dan is het juiste antwoord dat je het werk stillegt en je leidinggevende belt.
??
`,
  checklist: [
    'Ik kan de vijf stappen in de juiste volgorde opnoemen zonder terug te kijken',
    'Ik kan uitleggen waarom beveiligen vóór controleren komt',
    'Ik weet waarom de tester vóór én na de meting gecontroleerd moet worden',
    'Ik heb bedacht welke tweede voedingsbronnen bij ons werk kunnen voorkomen',
    'Ik heb dit doorgenomen met een ervaren elektricien'
  ],
  bronnen: ['gemini.md M1', 'chatgpt.md §1.3', 'grok.md M1', 'deekseek.md M0', 'kimi.md M1']
},

/* ------------------------------------------------------------------ 1.4 */
{
  id: 'm01l04',
  nr: '1.4',
  titel: 'Spanningsloosheid aantonen: waarom geen multimeter',
  duur: 20,
  type: 'les',
  leerdoel: 'Je begrijpt wat blindspanning is en waarom uitsluitend een tweepolige spanningstester geschikt is om spanningsloosheid aan te tonen.',
  videos: [
    { taal: 'en', titel: 'How to Verify a De-energized State with a Two-Pole Voltage Tester', yt: 'EcDTpr1J--E', duur: '±7 min' },
    { taal: 'nl', titel: 'Benning digitale Duspol - tweepolige spanningstester', yt: 'lkp09GUTEvE', duur: '±9 min' }
  ],
  tekst: `
## Het instrument bepaalt of je conclusie klopt

Bepaling 6.2.4 van NEN 3140 staat voor het aantonen van spanningsloosheid uitsluitend
een **tweepolige spanningstester** volgens NEN-EN-IEC 61243-3 toe. Een gewone digitale
multimeter en zeker een eenpolige spanningzoeker (de schroevendraaier met lampje)
zijn hiervoor verboden. Dat is geen bureaucratie, maar volgt uit hoe de instrumenten
elektrisch werken.

## Blindspanning: de spanning die er niet echt is

Een moderne multimeter heeft een zeer hoge ingangsimpedantie, vaak 10 MΩ of meer.
Hij trekt dus vrijwel geen stroom uit het circuit dat hij meet. Dat is precies wat je
wilt bij het meten van een elektronische schakeling, en precies wat je niet wilt bij
een installatiekabel.

In een kabelgoot lopen aders vlak naast elkaar. Tussen een spanningvoerende ader en een
spanningsloze ader ontstaat daardoor een kleine **capaciteit**, en via die capaciteit
"lekt" wisselspanning over op de spanningsloze ader. Het resultaat heet blindspanning
of fantoomspanning: je multimeter meet bijvoorbeeld 80 V of zelfs 200 V op een kabel
die in werkelijkheid nauwelijks energie kan leveren.

Dat is verwarrend, maar het levensgevaarlijke scenario is het omgekeerde: je went aan
"die 90 V is vast weer fantoomspanning" en negeert op een dag een meting die wél echt is.

## Wat de tweepolige tester anders doet

Een tweepolige spanningstester heeft een veel lagere interne weerstand en belast het
circuit dus bewust. Betere modellen hebben daarnaast drukknoppen voor **lastinschakeling**:
door ze in te drukken verlaag je de interne weerstand nog verder.

Het effect is beslissend:

- een capacitieve blindspanning heeft nauwelijks energie en **stort onder belasting
  onmiddellijk in** naar bijna nul;
- een echte netspanning levert moeiteloos die stroom en blijft gewoon staan.

Zo geeft het instrument je een eenduidig antwoord op de enige vraag die telt: kan hier
gevaarlijke energie vrijkomen?

!!! kern De vraag vóór de meting
Formuleer altijd eerst wat je wilt bewijzen. "Ik wil bewijzen dat hier geen gevaarlijke
spanning aanwezig is" leidt tot een tweepolige tester. "Ik wil weten waar in dit circuit
de spanning verdwijnt" leidt tot een multimeter. Beginnen met meten zonder die vraag
is gokken met een instrument in je hand.
!!!

## Praktische eigenschappen die ertoe doen

- **Voor- en nacontrole** op een bekend spanningvoerend punt, elke keer opnieuw.
- **Trilalarm en akoestisch signaal**, zodat je de waarschuwing ook krijgt in een
  donkere kruipruimte of een lawaaiige bouwplaats.
- **Meetcategorie**: voor werk aan een vaste installatie heb je minimaal CAT III nodig,
  in de meterkast bij voorkeur CAT IV. Die categorie zegt hoeveel spanningspiek het
  instrument kan verdragen zonder in je hand te exploderen.
- **Beide polen tegelijk**: je meet altijd tussen twee punten, nooit tussen één punt en
  je eigen gevoel voor aarde.

## Wat een eenpolige spanningzoeker wél is

Een indicatiemiddel, meer niet. Hij werkt door een minieme stroom door jouw lichaam
naar aarde te laten lopen, is afhankelijk van je schoeisel en de vloer, en geeft geen
betrouwbaar antwoord bij PV-installaties, bij onderbroken nul of achter een
scheidingstransformator. Voor het aantonen van spanningsloosheid is hij ongeschikt,
punt.

?? Mag ik met een multimeter dan helemaal niet aan een installatie meten?
Jawel, en dat doe je ook voortdurend - maar voor andere vragen. Een multimeter is
uitstekend voor het opsporen van waar spanning verdwijnt, het meten van
weerstandswaarden en het doorbellen van geleiders. Alleen de conclusie "hier is het
veilig om aan te werken" mag je er niet op baseren. Module 7 gaat hier uitgebreid
op door.
??
`,
  checklist: [
    'Ik kan uitleggen hoe blindspanning ontstaat',
    'Ik weet waarom lastinschakeling het onderscheid maakt tussen echt en schijn',
    'Ik weet welke meetcategorie ik nodig heb voor werk in de meterkast',
    'Ik heb een tweepolige spanningstester tot mijn beschikking of weet welke ik ga aanschaffen'
  ],
  bronnen: ['gemini.md M2', 'chatgpt.md §1.3', 'grok.md M2']
},

/* ------------------------------------------------------------------ 1.5 */
{
  id: 'm01l05',
  nr: '1.5',
  titel: 'PBM, gereedschap en risico op de werkplek',
  duur: 18,
  type: 'les',
  leerdoel: 'Je weet welke beschermingsmiddelen en gereedschapseisen horen bij elektrotechnisch werk, en welke omgevingsfactoren het risico vergroten.',
  videos: [
    { taal: 'en', titel: 'Jobsite PPE You SHOULD Be Wearing (Electrician U)', yt: 'od69nyPSbhc', duur: '±12 min' },
    { taal: 'en', titel: 'Electrical Safety Basic Training for Non-Electricians (Schneider)', yt: 'ggJo6m8NZtA', duur: '±15 min' }
  ],
  tekst: `
## Gereedschap dat je leven kan redden

Isolerend handgereedschap draagt de aanduiding **VDE 1000 V**. Die markering betekent
dat elk exemplaar individueel is getest op een veelvoud van de netspanning. Dat is geen
overbodige luxe: de isolatie is er niet voor de normale situatie, maar voor het moment
waarop je uitschiet en twee geleiders tegelijk raakt.

Voorwaarden waaronder die bescherming geldt:

- de isolatie is **onbeschadigd** - geen sneden, brandplekken of ontbrekende stukken;
- je gebruikt het gereedschap waarvoor het bedoeld is, dus geen schroevendraaier als beitel;
- je bewaart het zo dat de isolatie niet beschadigt.

Beschadigd isolerend gereedschap is gevaarlijker dan gewoon gereedschap, omdat je
erop vertrouwt.

## Persoonlijke beschermingsmiddelen

| Middel | Waarvoor | Wanneer |
|---|---|---|
| Veiligheidsbril | Vonken, vlamboog, metaaldeeltjes | Bij werk in verdeelinrichtingen en bij boren en zagen |
| Isolerende handschoenen | Aanraking bij werk nabij spanning | Wanneer spanningsloos werken aantoonbaar niet kan |
| Vlamvertragende kleding | Vlamboog | Bij werk aan grotere verdeelinrichtingen |
| Veiligheidsschoenen | Vallende voorwerpen, isolatie naar de vloer | Altijd op de werkplek |
| Gehoorbescherming | Boor- en breekwerk | Bij hak- en boorwerk |

Voor woninginstallaties komt het er in de praktijk op neer: schoenen en bril standaard,
de rest naar de aard van het werk.

## Vlamboog: het risico dat je onderschat

Een kortsluiting in een verdeelinrichting kan een vlamboog veroorzaken. Daarbij ontstaat
in een fractie van een seconde een temperatuur van duizenden graden, plus een drukgolf
en rondvliegend gesmolten metaal. Je hoeft geen enkele geleider aan te raken om ernstig
letsel op te lopen.

De praktische maatregelen: geen metalen gereedschap onbeheerd in een geopende kast, geen
sieraden, en waar mogelijk gewoon spanningsloos werken zodat het scenario niet bestaat.

!!! gevaar Metaal in een gevoede kast
Een enkele losse schroevendraaier of een afgeknipt stukje draad dat in een gevoede
groepenkast valt, is genoeg voor een fase-nul- of fase-fasekortsluiting. Werk daarom
boven een geopende kast met beleid, en controleer altijd wat er in de kast is
achtergebleven voordat je hem sluit.
!!!

## Omgevingsfactoren die het risico vergroten

**Vocht** verlaagt zowel je lichaamsweerstand als de isolatieweerstand van de
installatie. Badkamers, kelders, kruipruimten en buitenwerk in de regen vragen daarom
extra terughoudendheid - en in de installatie zelf om hogere IP-waarden, waar module 5
op terugkomt.

**Metalen constructies en ladders** vormen een goed geleidend pad naar aarde. Een
kunststof of glasvezel ladder is bij elektrotechnisch werk de betere keuze.

**Slecht licht** leidt tot verkeerd aflezen van kleuren en labels. Een hoofdlamp is
een van de goedkoopste veiligheidsinvesteringen die er zijn.

**Tijdsdruk** is de meest onderschatte risicofactor. Vrijwel elke overgeslagen stap
in de procedure heeft als achterliggende reden dat iemand haast had.

## Het gereedschap dat de installatie beoordeelt

NEN 3140 kent naast het werken aan installaties ook de periodieke **inspectie van
elektrisch handgereedschap en verlengsnoeren**. Dat is werk voor een keurmeester,
maar het raakt jou: gereedschap met een verlopen of ontbrekende keuring hoort niet op
de werkplek, en een beschadigd snoer leg je apart in plaats van dat je het nog "even"
gebruikt.
`,
  checklist: [
    'Mijn isolerend gereedschap is VDE 1000 V gemarkeerd en onbeschadigd',
    'Ik weet wat een vlamboog is en welke maatregelen het risico verkleinen',
    'Ik gebruik geen metalen ladder bij elektrotechnisch werk',
    'Ik controleer mijn verlengsnoeren en gereedschap op beschadiging voordat ik ze gebruik'
  ],
  bronnen: ['qwen.md M1', 'kimi.md M1', 'copilot.md M1', 'gemini.md M1', 'grok.md M1']
},

/* ------------------------------------------------------------------ 1.6 */
{
  id: 'm01l06',
  nr: '1.6',
  titel: 'Als het toch misgaat',
  duur: 12,
  type: 'les',
  leerdoel: 'Je weet wat je moet doen bij een elektrisch ongeval zonder zelf het tweede slachtoffer te worden.',
  videos: [],
  tekst: `
## De eerste reflex is de verkeerde

Iemand hangt aan een geleider en kan niet loslaten. De natuurlijke reactie is
toeschieten en trekken. Doe je dat, dan word je onderdeel van hetzelfde stroompad en
liggen er twee mensen in plaats van één - en is er niemand meer die kan bellen.

De volgorde is daarom altijd: **eerst de stroom weg, dan het slachtoffer**.

## De volgorde bij een elektrisch ongeval

1. **Schakel uit.** Hoofdschakelaar, de betreffende automaat, of trek de stekker eruit.
   Weet daarom vóór je aan het werk gaat waar de hoofdschakelaar zit.
2. **Kun je niet uitschakelen**, duw het slachtoffer of de geleider weg met iets
   droogs en isolerends: een houten bezemsteel, een kunststof stoel. Nooit met je handen,
   nooit met iets van metaal, nooit met iets nats.
3. **Bel 112.** Vermeld dat het om een elektrisch ongeval gaat.
4. **Controleer bewustzijn en ademhaling.** Geen normale ademhaling: start reanimatie
   en gebruik een AED zodra die er is. Bij ventrikelfibrilleren is een AED het enige
   dat werkt.
5. **Blijf bij het slachtoffer** en laat iemand de hulpdiensten opvangen.

!!! gevaar Ook zonder zichtbaar letsel naar de spoedeisende hulp
Bij stroomdoorgang door het lichaam kunnen hartritmestoornissen tot uren later
optreden, en kan er inwendige weefselschade zijn terwijl de huid nauwelijks een
brandplek toont. Iemand die "zich weer prima voelt" moet alsnog medisch beoordeeld
worden.
!!!

## Brandwonden door elektriciteit

Elektrische brandwonden zijn vaak veel dieper dan ze eruitzien: de stroom volgt het
weefsel en veroorzaakt schade op de route, niet alleen op het contactpunt. Koel met
lauw stromend water, dek steriel af, en verwijder geen kleding die vastzit.

Bij een vlamboogongeval kunnen daarnaast oogletsel door de lichtflits en gehoorschade
door de drukgolf optreden. Ook dat moet beoordeeld worden.

## Achteraf: melden en leren

Een ongeval of bijna-ongeval hoort gemeld te worden bij je werkgever. Een bijna-ongeval
is waardevolle informatie: het is dezelfde keten van gebeurtenissen als een echt
ongeval, maar met een gunstige afloop. Wie ze wegwuift, gooit de enige gratis les weg
die dit vak te bieden heeft.

Stel jezelf achteraf drie vragen:

- Welke stap in de procedure is overgeslagen of anders uitgevoerd?
- Waarom leek dat op dat moment redelijk?
- Wat verandert er morgen concreet aan mijn werkwijze?

Die derde vraag is de enige die iets oplevert.

## Voorbereiding die je nu al kunt treffen

- Weet in elk pand waar je werkt waar de hoofdschakelaar zit, vóórdat je begint.
- Weet of er een AED in de buurt hangt.
- Zorg dat een collega weet waar je bent en wat je doet.
- Overweeg een cursus reanimatie en AED-gebruik. Bij ventrikelfibrilleren is dat
  letterlijk het verschil.
`,
  checklist: [
    'Ik weet dat ik eerst de stroom uitschakel voordat ik een slachtoffer aanraak',
    'Ik weet waar de hoofdschakelaar zit op de plek waar ik nu werk',
    'Ik weet dat medische beoordeling ook nodig is zonder zichtbaar letsel',
    'Ik heb nagedacht over een reanimatie- en AED-cursus'
  ],
  bronnen: ['kimi.md M1', 'qwen.md M1', 'copilot.md M1']
}

]});
