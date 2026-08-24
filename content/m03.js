CURSUS.addModule({
  id: 'm03',
  nr: 3,
  deel: 1,
  titel: 'De Nederlandse woninginstallatie',
  ondertitel: 'Van netaansluiting tot eindgroep.',
  niveau: 'Beginner tot gemiddeld',
  studietijd: 5,
  intro: 'De hele keten van de aansluiting van de netbeheerder tot het laatste stopcontact, en wat elk onderdeel in de meterkast en groepenkast precies doet.',
  leerdoelen: [
    'De keten van netaansluiting tot verbruiker in de juiste volgorde benoemen',
    'De onderdelen van een meterkast herkennen en aanwijzen',
    'De opbouw van een groepenkast beschrijven: rails, N, PE, groepsvolgorde',
    'MCB, RCD en RCBO uit elkaar houden en zeggen wat elk beschermt',
    'Uitleggen waarom aarding en vereffening bestaan en wat er misgaat zonder'
  ],
  lessen: [

/* ------------------------------------------------------------------ 3.1 */
{
  id: 'm03l01',
  nr: '3.1',
  titel: 'De keten van net tot lamp',
  duur: 15,
  type: 'les',
  leerdoel: 'Je kunt de volledige keten benoemen en bij een storing bepalen op welk punt in die keten je moet zoeken.',
  videos: [
    { taal: 'en', titel: 'Basic Residential Wiring (Sam Maltese)', yt: 'hKtedrJKyQs', duur: '±20 min' }
  ],
  tekst: `
## Denk in lagen, niet in losse onderdelen

Een woninginstallatie is één keten. Wie die keten kent, hoeft bij een storing niet te
raden waar het probleem zit, maar kan systematisch een stuk van de keten afvinken.

**Netbeheerder → aansluitkabel → hoofdaansluiting met hoofdzekering → kWh-meter →
hoofdschakelaar → aardlekbeveiliging → installatieautomaten → eindgroepen →
leidingen → aansluitpunten en verbruikers**

En terug: via de nulgeleider naar de aansluiting, met daarnaast de
beschermingsleiding die alleen bij een fout stroom voert.

## Wie is waarvan eigenaar

Dit onderscheid is praktisch belangrijk, want het bepaalt waar jouw werk begint.

| Deel | Van wie | Wie mag eraan werken |
|---|---|---|
| Aansluitkabel en hoofdzekering | Netbeheerder (Liander, Enexis, Stedin …) | Uitsluitend de netbeheerder |
| kWh-meter | Netbeheerder | Uitsluitend de netbeheerder, verzegeld |
| Vanaf de hoofdschakelaar | Eigenaar van het pand | De installateur |

Alles vóór de hoofdschakelaar is dus niet jouw domein. En, belangrijker: dat deel
staat **altijd** onder spanning, ook als de hoofdschakelaar uit staat. Wie in de
meterkast werkt zonder dat te beseffen, werkt naast een permanent gevoede verbinding.

!!! gevaar Vóór de hoofdschakelaar staat altijd spanning
De hoofdschakelaar schakelt de installatie uit, niet de aansluiting. Aan de bovenkant
van die schakelaar en op de meter blijft spanning staan. Zichtbaar zegelmateriaal is
het teken dat je bij de netbeheerder terecht moet, niet dat je voorzichtig moet zijn.
!!!

## De vraag bij elke storing

Wanneer iets niet werkt, is de eerste vraag niet "wat is er kapot" maar:

> **Op welk punt in deze keten gaat het mis?**

Werkt één lamp niet, dan zit het probleem stroomafwaarts in één eindgroep. Werkt een
hele groep niet, dan kijk je naar de automaat en de bekabeling van die groep. Werkt het
hele huis niet, dan kijk je naar de aardlek, de hoofdschakelaar of de aansluiting.

Die opdeling van groot naar klein - in module 8 uitgewerkt als het scope-begrip -
scheelt in de praktijk uren.

## Groepen: waarom niet alles aan één beveiliging hangt

Een woning wordt opgedeeld in eindgroepen, en daar zijn drie redenen voor:

1. **Belasting spreiden** - één 16 A-groep kan nooit een heel huis voeden.
2. **Storing beperken** - een kortsluiting in de schuur legt niet de koelkast plat.
3. **Selectief kunnen werken** - je kunt één groep spanningsloos maken en
   veilig werken terwijl de rest van het huis blijft functioneren.

Dat derde punt is precies waarom je bij het aanpassen van een installatie altijd
nadenkt over de indeling: je legt niet alleen een circuit aan, je bepaalt ook wat een
volgende monteur straks wel en niet apart kan uitschakelen.
`,
  checklist: [
    'Ik kan de keten van netaansluiting tot verbruiker opnoemen',
    'Ik weet waar het eigendom van de netbeheerder ophoudt',
    'Ik weet dat vóór de hoofdschakelaar altijd spanning staat',
    'Ik stel bij een storing eerst de vraag hoe groot het bereik is'
  ],
  bronnen: ['chatgpt.md M3', 'kimi.md M3', 'qwen.md M3']
},

/* ------------------------------------------------------------------ 3.2 */
{
  id: 'm03l02',
  nr: '3.2',
  titel: 'De meterkast',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt elk onderdeel van een Nederlandse meterkast benoemen en aanwijzen wat wel en niet van jou is.',
  videos: [
    { taal: 'nl', titel: 'Demonstratie: meterkast van de elektrische installatie', yt: 'oHwq5tNtpIM', duur: '±12 min' }
  ],
  tekst: `
## Wat je in een meterkast aantreft

Van boven naar beneden en van links naar rechts wisselt de indeling per woning, maar
de onderdelen zijn vrijwel altijd dezelfde:

**Hoofdaansluitkast** - waar de kabel van de netbeheerder binnenkomt, met daarin de
**hoofdzekering** (vaak een mespatroon of smeltveiligheid) die de aansluitwaarde
bepaalt: 1×25 A, 1×35 A, 3×25 A enzovoort. Verzegeld, eigendom van de netbeheerder.

**kWh-meter** - tegenwoordig meestal een slimme meter met P1-poort. Meet het verbruik
en, bij zonnepanelen, de teruglevering. Ook verzegeld.

**Hoofdschakelaar** - de eerste component die van de eigenaar is. Schakelt de gehele
installatie ná de meter uit. Meestal 1- of 3-polig, soms gecombineerd met de
aardlekschakelaar.

**Aardlekschakelaar(s)** - beschermen mensen tegen aanraking. Zie les 3.4.

**Installatieautomaten** - één per eindgroep.

**Nulrail en aardrail** - de verzamelpunten voor de nul- en beschermingsleidingen.

**Hoofdaardrail en aardelektrode** - de verbinding naar de aarde, zie les 3.5.

**Overspanningsbeveiliging** - in nieuwere installaties, beschermt tegen
spanningspieken door bliksem of schakelhandelingen in het net.

## Wat de aansluitwaarde je vertelt

De hoofdzekering bepaalt hoeveel vermogen er beschikbaar is:

| Aansluiting | Beschikbaar vermogen | Situatie |
|---|---|---|
| 1×25 A | ≈ 5,7 kW | Standaard oudere woning |
| 1×35 A | ≈ 8,0 kW | Woning met elektrisch koken |
| 3×25 A | ≈ 17,3 kW | Woning met warmtepomp, laadpaal of zwaar koken |
| 3×35 A | ≈ 24,2 kW | Ruime woning of klein bedrijf |

Bij het toevoegen van een warmtepomp of laadpaal is dit het eerste getal dat je
opzoekt. Past het niet, dan is verzwaring nodig - en dat is een aanvraag bij de
netbeheerder met levertijd, geen kwestie van een dikkere kabel trekken.

!!! kern De eerste vijf minuten in elke meterkast
Kijk voordat je iets aanraakt: welke aansluitwaarde, 1- of 3-fase, hoeveel aardlekken,
hoeveel groepen, welke vrij, en klopt de labeling met wat je verwacht. Die vijf minuten
voorkomen de meeste verrassingen.
!!!

## Labeling: onbetrouwbaar tot bewezen

Groepsaanduidingen in Nederlandse meterkasten zijn beroemd om hun onbetrouwbaarheid.
Ze zijn vaak jaren geleden geschreven, na verbouwingen niet bijgewerkt, of gebaseerd op
een indeling die inmiddels is gewijzigd.

Een label is dus een hypothese, geen bewijs. De enige manier om zeker te weten welke
groep bij welk circuit hoort, is meten - en dat is precies waarom stap 3 van het
veiligstellen bestaat.

Laat je bij het opleveren van eigen werk daarom altijd een correcte, leesbare labeling
achter. Het is het goedkoopste cadeau dat je aan de volgende monteur en aan jezelf
over drie jaar kunt geven.

## Wat je hier nog niet zelf doet

Werk aan of nabij de verzegelde delen, het verwisselen van een hoofdzekering en het
wijzigen van de aansluiting zijn geen taken voor een beginnend elektricien. Kom je een
situatie tegen waarin dat nodig lijkt, dan is de juiste actie het melden bij je
leidinggevende of het inschakelen van de netbeheerder.
`,
  checklist: [
    'Ik kan alle onderdelen van een meterkast benoemen en aanwijzen',
    'Ik kan de aansluitwaarde aflezen en omrekenen naar beschikbaar vermogen',
    'Ik behandel groepslabels als hypothese en niet als bewijs',
    'Ik heb een echte meterkast doorgelopen met een ervaren elektricien'
  ],
  bronnen: ['chatgpt.md M3', 'kimi.md M3', 'gemini.md M3', 'deekseek.md M3']
},

/* ------------------------------------------------------------------ 3.3 */
{
  id: 'm03l03',
  nr: '3.3',
  titel: 'De groepenkast van binnen',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt de interne opbouw van een groepenkast beschrijven en de weg van een enkele groep volgen.',
  videos: [
    { taal: 'nl', titel: 'De groepenkast - alles wat je moet weten', yt: 'ocH-caK-reg', duur: '±15 min' }
  ],
  tekst: `
## De weg die één groep aflegt

Volg in gedachten de fase van één stopcontactgroep:

1. Vanaf de meter komt de fase op de **hoofdschakelaar**.
2. Van de hoofdschakelaar naar de **aardlekschakelaar** van dat blok.
3. Van de aardlek via een **kamrail** naar de bovenkant van de **installatieautomaat**.
4. Van de onderkant van die automaat vertrekt de **fase van de eindgroep** het huis in.

De nul loopt een parallelle route: van de meter naar de aardlek, en van de aardlek naar
de **nulrail** die bij dat aardlekblok hoort. Van die nulrail vertrekt de nul van de
eindgroep.

De beschermingsleiding gaat rechtstreeks naar de **aardrail** en passeert geen enkele
beveiliging. Hij wordt nooit geschakeld en nooit onderbroken.

!!! gevaar Nullen niet door elkaar halen
Elke aardlekschakelaar heeft zijn eigen nulrail. Sluit je de nul van een groep aan op
de nulrail van een ánder aardlekblok, dan ziet die aardlek een verschil tussen heen- en
teruggaande stroom en schakelt hij af - of, bij twee kruislings verwisselde nullen,
schakelen ze beide onvoorspelbaar. Dit is een van de meest voorkomende fouten bij het
uitbreiden van een bestaande kast.
!!!

## De onderdelen op de rail

**DIN-rail** - de metalen strip waarop alle componenten klikken. Standaard 35 mm.

**Kamrail (of aansluitrail)** - de vertande koperen strip die de fase van de aardlek
naar meerdere automaten doorverbindt. Netjes ingekort en aan het uiteinde afgedekt,
want een uitstekende kamrail in een gevoede kast is een kortsluiting die op een
ongelukje wacht.

**Nulrail** - meestal blauw of ongemarkeerd, per aardlekblok gescheiden.

**Aardrail** - geelgroen, één per kast.

**Modules (DIN-eenheden)** - de breedte van componenten wordt uitgedrukt in modules
van 17,5 mm. Een enkelpolige automaat is 1 module, een 4-polige aardlek 4 modules. Zo
bepaal je of een uitbreiding nog past.

## Wat je van een kast kunt aflezen

Met alleen kijken kun je al veel vaststellen:

- **Aantal fasen** - één of drie aders naar de hoofdschakelaar.
- **Aantal aardlekblokken** en hoeveel groepen er per blok achter hangen.
- **Aardlekautomaten** - smalle componenten met zowel een testknop als een
  automaatkarakteristiek: dat zijn RCBO's, één groep per stuk.
- **Vrije posities** - hoeveel modules er nog beschikbaar zijn voor uitbreiding.
- **Ouderdom** - een kast zonder aardlek, met stoppen of met een keramische
  smeltveiligheid, vertelt je dat de installatie een grondige beoordeling verdient.

## Werken in een bestaande kast

Uitbreiden van een bestaande groepenkast is werk waarvoor je de kast spanningsloos
maakt volgens de vijf stappen, met de nadrukkelijke kanttekening dat de aanvoer vanaf
de meter gevoed blijft. In de praktijk betekent dat: hoofdschakelaar uit, vergrendelen,
meten, en boven de hoofdschakelaar niets aanraken.

Als beginner doe je dit met iemand ernaast. Niet omdat je het niet zou begrijpen, maar
omdat de gevolgen van een fout in een groepenkast groter zijn dan waar dan ook in de
installatie.
`,
  checklist: [
    'Ik kan de route van fase, nul en PE door de kast beschrijven',
    'Ik weet waarom elke aardlek zijn eigen nulrail heeft',
    'Ik kan aflezen hoeveel modules er nog vrij zijn in een kast',
    'Ik heb vijf verschillende groepenkasten bekeken en geanalyseerd'
  ],
  bronnen: ['chatgpt.md M3', 'gemini.md M3', 'kimi.md M5']
},

/* ------------------------------------------------------------------ 3.4 */
{
  id: 'm03l04',
  nr: '3.4',
  titel: 'MCB, RCD en RCBO: wat beschermt wat',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt exact aangeven wat een installatieautomaat, een aardlekschakelaar en een aardlekautomaat beschermen, en waartegen niet.',
  videos: [
    { taal: 'nl', titel: 'Hoe werkt de automaat?', yt: '3TwiaTQCTXk', duur: '±8 min' },
    { taal: 'nl', titel: 'Hoe werkt een aardlekbeveiliging?', yt: 'e7xunYB1xkA', duur: '±9 min' }
  ],
  tekst: `
## Drie componenten, drie verschillende taken

| Component | Nederlandse naam | Beschermt | Reageert op |
|---|---|---|---|
| MCB | Installatieautomaat | De leiding | Te hoge stroom: overbelasting en kortsluiting |
| RCD | Aardlekschakelaar | De mens | Verschilstroom naar aarde, meestal 30 mA |
| RCBO | Aardlekautomaat | Beide, voor één groep | Beide bovenstaande |

Een beginnend elektricien die deze drie door elkaar haalt, begrijpt de groepenkast niet.
Het onderscheid is geen terminologie maar functioneel.

## De installatieautomaat: twee mechanismen in één behuizing

**Thermisch (bimetaal)** - bij langdurige overbelasting warmt een bimetaalstrip op,
buigt en schakelt af. Traag en met een omgekeerd verband: hoe hoger de overstroom, hoe
sneller. Dit beschermt de kabel tegen geleidelijke oververhitting.

**Magnetisch (spoel)** - bij een plotselinge zeer hoge stroom, dus bij kortsluiting,
trekt een elektromagneet het contact binnen milliseconden open.

Belangrijk om te onthouden: een automaat beschermt **niet het aangesloten apparaat**.
Hij beschermt de leiding tussen de kast en het apparaat. Een 16 A-automaat kan
moeiteloos blijven staan terwijl je telefoonlader in brand vliegt, want 16 A is voor
die kabel geen probleem.

## De aardlekschakelaar: de stroombalans

Een RCD meet de som van heen- en teruggaande stroom. In een gezonde installatie is die
som nul: wat via de fase naar binnen gaat, komt via de nul terug. Verdwijnt er stroom
langs een andere weg - via een defect apparaat, via een vochtige muur, of via een mens
naar aarde - dan ontstaat een verschil.

Bij een nominale aanspreekstroom van **30 mA** schakelt de RCD af. In de praktijk
gebeurt dat ergens tussen ongeveer de helft en de volle nominale waarde, en binnen
tientallen milliseconden. Dat is de reden dat die waarde 30 mA is en niet 100 mA:
onder de 50 mA-grens uit les 1.1 blijven, en snel genoeg om binnen een veilige tijd
af te schakelen.

Sinds 1975 is een aardlekbeveiliging van 30 mA in Nederlandse woninginstallaties
voorgeschreven. Kom je een woning tegen zonder, dan is dat op zichzelf al een bevinding
die je meldt.

!!! kern Wat de aardlek níet doet
Een aardlek beschermt je niet tegen aanraking van fase én nul tegelijk. Pak je met de
ene hand de fase en met de andere de nul, dan loopt de stroom keurig heen en terug via
het apparaat dat jij op dat moment bent. De balans klopt, de aardlek merkt niets, en de
stroom loopt door je borstkas. Alleen spanningsloos werken beschermt daartegen.
!!!

## De testknop

De T-knop op een aardlekschakelaar maakt intern een kunstmatige lekstroom en test
daarmee het mechanisme. Het advies is die knop periodiek - een gangbaar advies is
maandelijks - te bedienen, omdat het mechanisme kan vastlopen als het jarenlang niet
beweegt.

Let op de betekenis: de testknop toetst of de schakelaar werkt, niet of de installatie
in orde is en niet of de afschakeltijd nog binnen de norm valt. Dat laatste vraagt een
meting met een installatietester, waar module 7 op ingaat.

## De aardlekautomaat (RCBO)

Een RCBO combineert beide functies voor één groep. Voordelen: bij een lekstroom valt
alleen die ene groep uit in plaats van vier, en het zoeken naar de oorzaak wordt
eenvoudiger. Nadeel: hoger in aanschaf en breder in de kast.

Voor kritische circuits - een vriezer, een cv-installatie, een warmtepomp, een
serverkast - is een eigen RCBO vaak de betere keuze, juist omdat een storing elders in
huis dan niet die groep meeneemt.
`,
  checklist: [
    'Ik kan in één zin zeggen wat een MCB beschermt en wat een RCD beschermt',
    'Ik kan uitleggen waarom een aardlek je niet beschermt bij aanraking van fase én nul',
    'Ik weet waarom de nominale waarde 30 mA is en geen ander getal',
    'Ik kan in een groepenkast aanwijzen welke componenten MCB, RCD en RCBO zijn'
  ],
  bronnen: ['gemini.md M3', 'chatgpt.md M3', 'kimi.md M1', 'deekseek.md M3']
},

/* ------------------------------------------------------------------ 3.5 */
{
  id: 'm03l05',
  nr: '3.5',
  titel: 'Aarding en vereffening',
  duur: 18,
  type: 'les',
  leerdoel: 'Je kunt uitleggen waarom aarding bestaat, wat vereffening toevoegt, en wat er misgaat als de aarding ontbreekt.',
  videos: [],
  tekst: `
## Waarom aarding bestaat

Stel: in een wasmachine raakt de fasedraad de metalen behuizing. Zonder
beschermingsleiding staat die behuizing nu op 230 V ten opzichte van aarde. Er gebeurt
verder niets - geen vonk, geen geluid - tot iemand de machine aanraakt en zelf het pad
naar aarde vormt.

Mét een beschermingsleiding gebeurt er wél iets. De foutstroom loopt onmiddellijk via
de PE weg. Dat levert twee mogelijke reddingen op:

1. De stroom is zo hoog dat de **installatieautomaat** direct afschakelt, want vanuit
   het circuit gezien is dit een kortsluiting.
2. De **aardlekschakelaar** ziet dat de teruggaande stroom niet klopt en schakelt af
   bij 30 mA.

In beide gevallen wordt de fout omgezet in een afschakeling, vóórdat er een mens bij
betrokken is. Dat is de volledige functie van aarding: een fout omzetten in een
detecteerbare gebeurtenis.

## Waar de aarde vandaan komt

In Nederlandse woningen komt de aarding uit een van deze bronnen:

- een **aardelektrode**: een koperen staaf of band in de grond bij de woning;
- de **aarde van de netbeheerder**, meegevoerd met de aansluiting;
- een combinatie van beide.

Die komen samen op de **hoofdaardrail** in de meterkast. Vanaf daar loopt de aardrail
de kast in en gaat de beschermingsleiding mee met elke eindgroep.

## Hoofdvereffening

Naast aarding kent een installatie **vereffening**: het onderling verbinden van metalen
delen die géén onderdeel van de installatie zijn maar wel geleidend, zodat er tussen die
delen geen gevaarlijk spanningsverschil kan ontstaan.

Klassieke vereffeningspunten in een woning: metalen waterleiding, gasleiding, metalen
cv-leidingen en de metalen constructie van het gebouw. Ze worden met een geelgroene
geleider verbonden met de hoofdaardrail.

De redenering: raak je tegelijkertijd een defecte wasmachine en de metalen kraan aan,
dan wil je niet dat er tussen die twee 230 V staat. Zijn ze vereffend, dan bewegen ze
samen en blijft het verschil klein.

!!! gevaar Kunststof leidingen veranderen het beeld
Steeds meer woningen hebben kunststof water- en gasleidingen. Een vereffeningsdraad
die aan een kunststof leiding is bevestigd of aan een stuk metaal dat inmiddels van de
rest is losgekoppeld, doet niets - terwijl hij er wel geruststellend uitziet. Bij een
renovatie is dit een expliciet controlepunt.
!!!

## Wat er misgaat zonder goede aarding

- **Geen afschakeling bij een lichaamsfout.** De behuizing blijft onder spanning staan.
- **Aardlek werkt niet zoals bedoeld.** Bij een fout naar een niet-geaarde behuizing
  is er geen pad naar aarde en dus geen verschilstroom - tot een mens dat pad vormt.
- **Overspanningsbeveiliging werkt niet.** Die moet zijn energie ergens naartoe afvoeren.

Woningen van vóór 1975, met name in de oudere delen van een installatie, hebben
regelmatig groepen zonder beschermingsleiding. Kom je die tegen - bijvoorbeeld een
tweeaderige leiding naar een oude wandcontactdoos zonder randaarde - dan is dat geen
detail maar een bevinding die je meldt en niet stilzwijgend uitbreidt.

?? Waarom mag je PE en N in een eindgroep niet doorverbinden?
Omdat de aardlekschakelaar dan bedrijfsstroom over de beschermingsleiding ziet lopen.
De balans tussen fase en nul klopt niet meer en de aardlek schakelt af, of erger: hij
ziet een deel van de foutstroom niet meer op het moment dat het ertoe doet. Bovendien
komt er bedrijfsspanning te staan op leidingen die per definitie aanraakbaar zijn.
De scheiding tussen N en PE in de eindgroepen is een van de dingen waar je nooit
creatief mee omgaat.
??
`,
  checklist: [
    'Ik kan uitleggen wat aarding doet bij een fase die de behuizing raakt',
    'Ik weet wat hoofdvereffening is en welke leidingen daarvoor in aanmerking komen',
    'Ik weet waarom kunststof leidingen de vereffening kunnen ondermijnen',
    'Ik weet waarom N en PE in een eindgroep nooit verbonden worden'
  ],
  bronnen: ['gemini.md M3', 'kimi.md M1', 'deekseek.md M3', 'qwen.md M3']
}

]});
