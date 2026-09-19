CURSUS.addModule({
  id: 'm11',
  nr: 11,
  deel: 2,
  titel: 'Domotica en slimme installaties',
  ondertitel: 'Wat je nú moet weten om later niet te hoeven slopen.',
  niveau: 'Gemiddeld',
  studietijd: 3,
  intro: 'Slimme schakelaars, bussystemen en de voorbereidingen die je tijdens gewoon installatiewerk treft zodat domotica later mogelijk blijft.',
  inleiding: [
    "Slimme schakelaars, bussystemen en een woning die op commando reageert. Je leert waarom slimme schakelaars een nuldraad nodig hebben en wat het verschil is tussen centrale en decentrale sturing.",
    "Het belangrijkste dat je meeneemt is voorbereiding: met loze leidingen en een extra ader maak je een woning geschikt voor domotica zonder nu al een systeem te kiezen. Dat scheelt later veel hakwerk."
  ],
  leerdoelen: [
    'Uitleggen waarom slimme schakelaars een nuldraad in de schakeldoos nodig hebben',
    'Het verschil tussen centrale en decentrale sturing benoemen',
    'Beoordelen welke voorbereidingen bij nieuwbouw en renovatie zinvol zijn'
  ],
  lessen: [

/* ------------------------------------------------------------------ 11.1 */
{
  id: 'm11l01',
  nr: '11.1',
  titel: 'Slimme schakelaars en de nuldraad',
  duur: 16,
  type: 'les',
  leerdoel: 'Je kunt beoordelen of een bestaande installatie geschikt is voor een slimme schakelaar en welke alternatieven er zijn.',
  videos: [
    { taal: 'nl', titel: 'Slimme schakelaar installeren: nuldraad nodig?', zoek: 'slimme schakelaar nuldraad schakeldoos oplossing' }
  ],
  tekst: `
## Het probleem in één alinea

Een klassieke schakelaar is een mechanisch contact: hij hoeft zelf geen energie te
gebruiken. Daarom loopt er in het Nederlandse centraaldoosschema (module 5.2) alleen een
fase naartoe en een schakeldraad terug - **geen nul**.

Een slimme schakelaar bevat elektronica: een radio-ontvanger, een processor, soms een
statuslampje. Die elektronica heeft permanent voeding nodig, ook als het licht uit staat.
En voor voeding heb je fase én nul nodig.

In een groot deel van de Nederlandse woningen ligt die nul dus niet waar hij nodig is.

## De oplossingen, in volgorde van voorkeur

**1. Nul meetrekken.** Ligt er een buis van de centraaldoos naar de schakeldoos, dan kun
je vaak een extra ader bijtrekken. Dit is de nette oplossing.

**2. Module in de centraaldoos of het armatuur.** In plaats van de schakelaar slim te
maken, plaats je een schakelmodule bij de lamp, waar fase én nul wél aanwezig zijn. De
bestaande schakelaar blijft zitten en stuurt de module aan. Vaak de beste oplossing bij
renovatie.

**3. Slimme lampen in plaats van slimme schakelaars.** De schakelaar moet dan permanent
ingeschakeld blijven, wat bewoners verwarrend vinden en waardoor het licht niet meer
handmatig te bedienen is als het netwerk uitvalt.

**4. Schakelaars zonder nul.** Er bestaan uitvoeringen die hun voeding via de
belasting trekken. Dat werkt bij gloeilampen prima, maar veroorzaakt bij LED-verlichting
regelmatig nagloeien of knipperen, omdat de kleine reststroom voor een LED al genoeg is
om zwak te branden. Zie module 5.4.

!!! kern De vraag vóór aanschaf
Controleer altijd eerst of er een nul in de schakeldoos aanwezig is, en of er een buis
ligt waardoor je er een kunt trekken. Dat kost vijf minuten en bepaalt welke oplossing
mogelijk is. Andersom werken - eerst de slimme schakelaars kopen en dan ontdekken dat
het niet kan - is een van de meest voorkomende teleurstellingen bij domotica.
!!!

## Draadloos of bedraad

**Draadloos** (Zigbee, Z-Wave, wifi, Matter) is snel te plaatsen en geschikt voor
bestaande woningen. Nadelen: afhankelijk van radiobereik, batterijen in sensoren, en
software die na jaren niet meer wordt onderhouden.

**Bedraad** is betrouwbaarder en langer houdbaar, maar vergt bekabeling en dus een
verbouwing of nieuwbouw. Zie de volgende les.

Voor jouw werk is vooral dit relevant: de klant kiest het systeem, jij zorgt dat de
elektrische infrastructuur klopt en dat de keuzes die je nu maakt de opties later niet
onnodig dichttimmeren.
`,
  checklist: [
    'Ik controleer of er een nul in de schakeldoos aanwezig is voordat er iets besteld wordt',
    'Ik ken de vier oplossingsrichtingen en hun nadelen',
    'Ik weet waarom schakelaars zonder nul bij LED problemen geven'
  ],
  bronnen: ['copilot.md M6', 'qwen.md M5']
},

/* ------------------------------------------------------------------ 11.2 */
{
  id: 'm11l02',
  nr: '11.2',
  titel: 'Bussystemen: centraal en decentraal',
  duur: 16,
  type: 'les',
  leerdoel: 'Je begrijpt het principe van een bussysteem en waarin dat verschilt van conventionele installatietechniek.',
  videos: [
    { taal: 'nl', titel: 'KNX domotica uitleg voor installateurs', zoek: 'KNX domotica uitleg installatie principe' }
  ],
  tekst: `
## Het principe

Bij conventionele installatie loopt er sterkstroom naar de schakelaar en weer terug.
De schakelaar onderbreekt de stroom naar de lamp.

Bij een **bussysteem** doet de schakelaar dat niet. Hij stuurt een **bericht** over een
buskabel: "knop 1 ingedrukt". Een actor in de verdeelkast ontvangt dat bericht en
schakelt de betreffende groep.

Het gevolg: de sterkstroom loopt uitsluitend tussen verdeelkast en verbruiker, en de
bediening loopt over een aparte, laagspanningskabel.

## Wat dat oplevert

- **Elke knop kan alles bedienen.** Wat een knop doet, is een instelling en geen
  bedrading. Wil de klant dat de schakelaar in de hal ook de buitenverlichting doet, dan
  is dat een wijziging in de configuratie.
- **Scenario's**: één druk die meerdere dingen tegelijk doet.
- **Integratie** met verwarming, zonwering, aanwezigheidsdetectie en beveiliging.
- **Minder sterkstroombekabeling naar bedieningspunten**, meer naar verbruikers.

En wat het kost:

- **Hogere investering** in componenten en in de configuratie.
- **Kennis en software** zijn nodig voor het programmeren; dat is een vak apart.
- **Afhankelijkheid**: valt de centrale sturing uit, dan werkt de bediening niet meer,
  tenzij dat expliciet is ondervangen.

## Centraal versus decentraal

**Centraal**: alle actoren zitten in de verdeelkast. Vanuit elk verbruikspunt loopt een
eigen kabel naar de kast. Veel bekabeling, maar maximale flexibiliteit en alle techniek
op één bereikbare plaats. Dit is de gebruikelijke opzet bij KNX en vergelijkbare systemen.

**Decentraal**: modules zitten bij de verbruikers, in centraaldozen of armaturen. Minder
bekabeling, maar techniek verspreid door het huis en dus lastiger te onderhouden.

!!! kern De echte kostenpost zit in de bekabeling
Bij een centrale opzet vertrekt vanuit elk lichtpunt en elk bedieningspunt een eigen
kabel naar de kast. Dat is bij nieuwbouw of een casco-renovatie goed te doen, en bij een
bewoonde woning met afgewerkte wanden vrijwel onbetaalbaar. Het moment waarop je deze
keuze maakt, is daarom veel bepalender dan het merk dat je kiest.
!!!

## Wat je hiervan moet weten als beginner

Je hoeft geen KNX-programmeur te worden. Wat je moet kunnen:

- het principe uitleggen aan een klant die erover nadenkt;
- herkennen wanneer een woning zich in een fase bevindt waarin dit nog kan (casco, groot
  onderhoud) en wanneer het schip is gevaren;
- de infrastructuur voorbereiden zodat de optie openblijft, zonder dat de klant nu al
  hoeft te kiezen. Dat is precies waar de volgende les over gaat.
`,
  checklist: [
    'Ik kan het principe van een bussysteem uitleggen aan een klant',
    'Ik ken het verschil tussen centrale en decentrale opzet',
    'Ik weet dat de bekabeling de bepalende kostenpost is',
    'Ik herken wanneer een woning zich in de juiste fase bevindt voor deze keuze'
  ],
  bronnen: ['copilot.md M6', 'qwen.md M5']
},

/* ------------------------------------------------------------------ 11.3 */
{
  id: 'm11l03',
  nr: '11.3',
  titel: 'Voorbereiden zonder nu al te kiezen',
  duur: 14,
  type: 'les',
  leerdoel: 'Je kunt bij regulier installatiewerk voorbereidingen treffen die latere uitbreiding mogelijk houden.',
  videos: [],
  tekst: `
## De goedkoopste momenten zijn nu

Bijna alles wat domotica later duur maakt, is bekabeling in afgewerkte wanden. Tijdens
regulier werk - een verbouwing, een nieuwe groepenkast, een uitbreiding - kun je met
weinig extra kosten opties openhouden.

## De maatregelen, van goedkoop naar duurder

**1. Loze leidingen.** Een lege mantelbuis van de meterkast naar de zolder, naar de
tuin, naar de garage. Kost tijdens een verbouwing bijna niets en maakt later elke kabel
mogelijk zonder hakwerk.

**2. Nul meetrekken naar schakeldozen.** Bij nieuw werk kost een extra ader vrijwel
niets, en het lost het probleem uit les 11.1 op voordat het bestaat.

**3. Buis van de centraaldoos naar de schakeldoos ruim genoeg.** Zodat er later een
extra ader bij kan.

**4. UTP-kabel meetrekken.** Naar de meterkast, naar de plek van de router, naar de
plekken waar later een camera, een access point of een bedieningspaneel kan komen. UTP
is de meest veelzijdige kabel die er is en veroudert nauwelijks in bruikbaarheid.

**5. Ruimte in de groepenkast.** Vrije modules voor toekomstige groepen, actoren of
meetmodules. Zie module 6.1.

**6. Bereikbare centraaldozen.** Een centraaldoos die achter gipsplaat verdwijnt, is
verloren. Houd ze bereikbaar, of documenteer waar ze zitten.

!!! kern Documenteren is de zevende maatregel
Loze leidingen die niemand kan vinden, zijn geen loze leidingen. Leg vast waar ze
lopen, waar ze beginnen en eindigen, en laat dat achter bij de klant en in de meterkast.
Een foto van de wand vóór het stucwerk is daarbij het waardevolste document dat je kunt
maken - en het kost tien seconden.
!!!

## Het gesprek met de klant

De meeste klanten weten tijdens een verbouwing nog niet of ze domotica willen. De juiste
vraag is dan niet "wilt u domotica" maar:

> "Als u er over vijf jaar wél iets mee wilt, wilt u dan dat we nu een paar dingen
> voorbereiden zodat het dan zonder hakwerk kan? Het kost nu weinig extra."

Dat is een vraag die vrijwel iedereen begrijpt, en het maakt van een technische keuze
een eenvoudige afweging.

## Wat je niet moet doen

Geen half systeem installeren omdat het nu leuk lijkt. Domotica die halverwege blijft
steken - twee slimme lampen, een app die niemand gebruikt, een schakelaar die het soms
doet - is slechter dan geen domotica. Het levert klachten op, en die komen bij jou terug.

Kies met de klant: óf een doordacht systeem, óf een goed voorbereide conventionele
installatie. De tussenweg is de enige verkeerde optie.
`,
  checklist: [
    'Ik leg loze leidingen aan tijdens verbouwingen',
    'Ik trek standaard een nul mee naar schakeldozen bij nieuw werk',
    'Ik fotografeer wanden voordat ze dichtgaan',
    'Ik stel de klant de vraag over voorbereiden in plaats van over kiezen'
  ],
  bronnen: ['copilot.md M6', 'qwen.md M5', 'chatgpt.md professional quality']
}

]});
