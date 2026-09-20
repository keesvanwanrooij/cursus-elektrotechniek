/* ==========================================================================
   content/kennis/sigenergy/ev-dc-module.js
   Samenvatting van de handleidingen van de Sigen EV DC Charging Module.
   Paginanummers verwijzen naar de positie in de PDF (1 = eerste pagina).
   ========================================================================== */

KENNIS.addProduct({
  id: 'sigenergy-ev-dc-module',
  merk: 'sigenergy',
  slug: 'ev-dc-module',
  naam: 'Sigen EV DC Charging Module (SigenStor EVDC, 12,5 en 25 kW)',
  rol: 'lader',
  toepassingen: ['laadpaal', 'thuisbatterij'],

  korteOmschrijving: 'Een bidirectionele DC-lader voor thuis die op de DC-bus van het Sigen-systeem zit. Hij laadt een auto met CCS2-stekker en kan, als de auto het ondersteunt, ook energie uit de auto terug naar het huis leveren (V2X).',

  varianten: {
    kop: ['Type', 'Vermogen laden en ontladen', 'Max. stroom', 'Laadkabel', 'Gewicht'],
    rijen: [
      ['SigenStor EVDC 12 (5S2, 7.5S2, 10S2)', '12,5 kW', '40 A', '5 / 7,5 / 10 m', '37 / 39 / 41 kg'],
      ['SigenStor EVDC 25 (5S2, 7.5S2, 10S2)', '25 kW', '80 A', '5 / 7,5 / 10 m', '37 / 39 / 41 kg'],
      ['SigenStor EVDC 12 en 25 (7.5GBT, 10GBT)', '12,5 of 25 kW', 'staat niet in de handleiding', '7,5 / 10 m', 'staat niet in de handleiding']
    ]
  },

  documenten: [
    { id: 'bh', titel: 'Beknopte handleiding voor Sigen EV DC Charging Module', soort: 'Beknopte handleiding', paginas: 2 },
    { id: 'gh', titel: 'Gebruikershandleiding voor Sigen EV DC Charging Module', soort: 'Gebruikershandleiding', paginas: 34 },
    { id: 'bi', titel: '01-Belangrijke informatie voor Sigen EV DC Charging Module', soort: 'Belangrijke informatie', paginas: 14 },
    { id: 'ig', titel: '02-Installatiegids voor Sigen EV DC Charging Module', soort: 'Installatiegids', paginas: 41 },
    { id: 'br', titel: 'Brochure - Thuis Energieoplossing', soort: 'Brochure', paginas: 23 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `De Sigen EV DC Charging Module (in de handleidingen kortweg **SigenStor EVDC**) is een wandlader voor een elektrische auto. Het is geen gewone AC-laadpaal maar een **DC-lader**. Bij AC-laden geeft de paal wisselspanning en zet de lader in de auto die om naar gelijkspanning voor de accu. Bij DC-laden gebeurt die omzetting in de lader zelf en gaat gelijkspanning rechtstreeks de autoaccu in. Daarom werkt de EVDC met een hoge spanning (150 tot 1000 V).

### Bidirectioneel
De handleiding noemt het een **bidirectioneel DC/DC oplaad- en ontlaadsysteem**: de energie kan twee kanten op. Je kunt de auto laden, maar ook de autoaccu ontladen. Laden en ontladen kan met hetzelfde vermogen: 12,5 kW (EVDC 12) of 25 kW (EVDC 25).

### V2X, V2H en V2G
De brochure gebruikt **V2X** (vehicle-to-everything: de auto als energiebron). Twee vormen worden genoemd:

- **V2H** (vehicle-to-home): de auto levert stroom aan je woning, bijvoorbeeld als back-up.
- **V2G** (vehicle-to-grid): de auto levert terug aan het net. De brochure koppelt dit aan piekafvlakking en VPP-dispatch (VPP = virtuele centrale: veel kleine opslagsystemen die samen als een centrale worden aangestuurd).

!!! info V2X hangt af van de auto
De bron zegt het zelf: de V2X-functionaliteit is beperkt door de mogelijkheden van de EV (elektrische auto). Zodra de relevante normen zijn gepubliceerd, kan de functie volgens de brochure via een OTA-update (softwareupdate via internet) worden uitgebreid. Welke auto's officieel ondersteund worden, staat niet in de handleidingen; de brochure verwijst naar de website van Sigenergy.
!!!

### De stekker: CCS2
De modellen met typecode S2 hebben een **CCS2**-aansluiting (CCS Combo2), de Europese standaardstekker voor DC-laden. De installatiegids noemt ook typen 7.5GBT en 10GBT. Wat GBT betekent, legt de handleiding niet uit. Ze hebben een ander uiterlijk dan de S2-modellen.

De module heeft een laadkabel met stekker, een houder voor die stekker, een leesgebied voor de RFID-kaart en een kabelhouder. De kabellengte zit in het type: 5, 7,5 of 10 m.

**Waar lees je dit na:** Gebruikershandleiding 2.1 en 2.2 (p9-10), Installatiegids 1.1 (p2), Brochure p7 en p10.`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Plek in het systeem',
      tekst: `De EVDC werkt niet los. Hij wordt gebruikt met een SigenStor EC, SigenStor AC of Sigen Hybrid (de omvormers) en met het accupakket SigenStor BAT.

### De DC-bus
De brochure noemt de architectuur "met DC gekoppeld". De **DC-bus** is een gemeenschappelijke gelijkspanningsverbinding waar zonnepanelen (PV), thuisaccu (ESS, energy storage system) en EV-lader direct op zitten. Stroom van de panelen kan zo naar accu of auto zonder telkens om te zetten naar wisselspanning en terug. Volgens de brochure verhoogt dat het rendement. Dat is een claim van de fabrikant.

### Scenario's uit de installatiegids
De installatiegids (p3) noemt vier situaties:

1. SigenStor EC, AC of Sigen Hybrid + EVDC + accu: EVDC toevoegen aan een bestaand systeem.
2. Dezelfde combinatie, alles voor het eerst geplaatst.
3. Sigen Hybrid + EVDC: EVDC toevoegen aan een bestaande installatie.
4. Sigen Hybrid + EVDC, alles voor het eerst geplaatst.

De modules worden op elkaar gestapeld: accupakket, dan EVDC, dan omvormer (p17). De koppeling gaat volgens de tekst met steekverbindingen (mannelijke en vrouwelijke connector). Een losse DC-kabel tussen kasten wordt niet beschreven.

!!! info Energy Controller of ook Hybrid?
De brochure (p10, voetnoot 1) zegt dat de module samen met de Sigen Energy Controller moet worden gebruikt. De installatiegids noemt ook combinaties met de Sigen Hybrid. Vraag bij twijfel Sigenergy.
!!!

### Wat er nog omheen hangt
Het netwerkschema in de gebruikershandleiding (2.5, p13-14) toont naast PV, omvormer, EVDC, accu en auto ook:

- een **gateway**, met een dieselgenerator als back-upbron voor langdurig off-grid gebruik;
- verdeelpanelen voor back-up en niet-back-up;
- een **vermogenssensor** op het aansluitpunt van het net. Bij een "nul-netaansluiting" hoort die erbij (wat dat precies is, legt de bron niet uit);
- mySigen-app, router, antenne en CommMod (communicatiemodule). Aanbevolen: bekabeld netwerk (FE) en wifi. Na twee jaar moet de gebruiker zelf een 4G-abonnement voor de CommMod nemen.

**Waar lees je dit na:** Gebruikershandleiding 2.2 en 2.5 (p10, 13-14), Installatiegids 1.2 (p3), Brochure p4 en p7.`
    },
    {
      id: 'specificaties',
      kop: 'Specificaties in het kort',
      tekst: `Deze waarden komen uit de brochure (p10). De gebruikershandleiding verwijst voor alle technische parameters naar het gegevensblad (hoofdstuk 7, p34).

| | EVDC 12 | EVDC 25 |
|---|---|---|
| Max. laadvermogen | 12,5 kW | 25 kW |
| Max. afvoervermogen (ontladen) | 12,5 kW | 25 kW |
| Bedrijfsspanningsbereik | 150 tot 1000 V | 150 tot 1000 V |
| Max. bedrijfsstroom | 40 A | 80 A |
| Aansluiting | CCS2 | CCS2 |

Voor beide typen:

- **Afmetingen** (B / H / D): 700 / 270 / 260 mm.
- **Gewicht**: 37, 39 of 41 kg bij 5, 7,5 of 10 m kabel (zonder buitenkant en wandbeugels).
- **Beschermingsgraad**: IP66 (stofdicht en bestand tegen krachtige waterstralen). Volgens de brochure onderhoudsvrij.
- **Koeling**: intelligente luchtkoeling.
- **Temperatuur**: in bedrijf -30 tot 60 graden Celsius, opslag -40 tot 70 graden.
- **Vochtigheid**: 5% tot 95%. **Maximale hoogte**: 4000 m.
- **Beveiligingen** (alle "ondersteund"): kortsluiting, over- en onderspanning, overbelasting, oververhitting, omgekeerde polariteit en "inspectie van lasnaden". Dat laatste is een vreemde vertaling; wat er gecontroleerd wordt staat niet in de handleiding. Isolatiebewaking (controle of de gelijkspanningskant geen stroom naar aarde lekt) komt in deze documenten niet voor.
- **Authenticatie**: RFID-kaart, app of geen.
- **Beheer**: led-indicator, app en RFID; OTA en diagnose op afstand; OCPP 1.6J ED 2 (standaardprotocol voor communicatie met een laadbeheersysteem).
- **Normen**: EN IEC 61851-1, EN 61851-23, EN IEC 61851-21-2 en ETSI EN 303 645.

!!! info Kabellengte: de bronnen spreken elkaar tegen
Het typenummer en het gewicht noemen 5, 7,5 en 10 m. De specificatietabel van de brochure noemt bij de kabellengte alleen "7.5 / 10". Ga bij twijfel uit van het typenummer op de module en het gegevensblad.
!!!

De beknopte handleiding (p1) toont afstanden rond de module (0,2 m, 0,7 m, 0,85 m, 1 m) en een waarde R per kabellengte: 4,85 m bij 5 m kabel, 7,35 m bij 7,5 m en 9,85 m bij 10 m. Waar R vanaf gemeten wordt, laat alleen de tekening zien.

**Waar lees je dit na:** Brochure p10, Gebruikershandleiding 2.1 (p9) en hoofdstuk 7 (p34), Beknopte handleiding p1.`
    },
    {
      id: 'installatie',
      kop: 'Installatie in hoofdlijnen',
      tekst: `Installeren mag alleen door een installateur die door Sigenergy gecertificeerd is (Gebruikershandleiding hoofdstuk 4, p18). De installatiegids (versie 05, 04/01/2026) beschrijft de volgorde, maar veel stappen staan alleen als tekening in het document.

### Voor je begint
1. **Controleer de levering** aan de hand van de paklijst (installatiegids hoofdstuk 2, p4).
2. **Beschermingsmiddelen**: helm, bril, stofmasker, beschermende en isolerende handschoenen, isolerende schoenen.
3. **Gereedschap**: onder meer boormachine met stofzuiger, striptang, krimpgereedschap, geïsoleerde schroevendraaierset, verstelbare steeksleutel met koppel (opening 53 mm), geïsoleerde momentsleutelset, waterpas en meetlint.
4. **Kabels**: heeft de eigenaar bij een bestaand systeem genoeg kabellengte? Zo niet, dan levert de installateur een kabel met de juiste specificaties.
5. **Kies de plek** (hoofdstuk 3, p5-6), zie Veiligheid en let op.

### Montage
6. **Alles spanningsloos**: ook de netzijde, omvormers en generatoren (p7).
7. **Boor de montagegaten** voor de omvormer. Expansiebouten M8 x 120 RVS met sluitringen worden aanbevolen en zijn niet meegeleverd. Laat de decoratieve afdekking tijdens het boren zitten (p7-8).
8. **Bestaande installatie:** kabel uit de omvormer halen en de omvormer van de wand nemen (p11, p24).
9. **Plaats de EVDC** volgens de tekeningen (p12-14, p25-26) en de omvormer weer erboven.
10. **Nieuwe installatie:** eerst het accupakket, dan de EVDC, dan de omvormer (p17). De gids geeft formules voor de hoogte van de montagegaten (L1, L2) bij N accumodules. Met een enkele SigenStor BAT hoeft de omvormer niet aan de muur (p18).
11. **Kabel van de omvormer terugplaatsen.** Voor de bedrading zelf verwijst de gids naar de Installatiegids van het betreffende SigenStor Home-model (p16, p27, p31).
12. **Connectorhouder en laadconnector plaatsen** (hoofdstuk 5, p32-34).

### Aarding, DC-aansluiting en communicatie
De installatiegids beschrijft geen aardingspunt, aanhaalmomenten of aparte communicatiekabel voor de EVDC. Wat er wel staat:

- Aarding als algemene regel (Belangrijke informatie p11): aardingskabel eerst aansluiten, bij vervanging als laatste losmaken.
- De koppeling van accu, EVDC en omvormer gaat via steekverbindingen. Staan pinnen in de mannelijke connector scheef en toont de lichtstrip een afwijkende status, dan de pinnen rechtzetten en opnieuw verbinden (p16, p23).

Welke groep, kabeldoorsnede en aardlekschakelaar de netaansluiting vraagt, staat niet in deze documenten.

**Waar lees je dit na:** Installatiegids hoofdstuk 2 tot 5 (p4-34), Belangrijke informatie 5.2 (p13).`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling',
      tekst: `De installatiegids heeft twee blokken: inschakelen (hoofdstuk 6, p35) en een nieuw systeem maken in de app (hoofdstuk 7, p36-37).

### Inschakelen
1. Controleer of alle kabels goed zijn aangesloten. Belangrijke informatie (p11) eist dat vóór je de stroomopwaartse MCB (automaat) inschakelt.
2. Zet de stroomopwaartse schakelaar aan.
3. Zet de **DC SWITCH** van de omvormer op ON (niet nodig bij de SigenStor AC).
4. Lees de status van de **DC-laderindicator** op het voorpaneel van de SigenStor EC, AC of Hybrid.

| Indicator | Betekenis |
|---|---|
| Uit | Uitgeschakeld |
| Constant aan | Ingeschakeld, connector niet op de auto |
| Constant aan | Connector zit in de auto, of laden voltooid |
| Snel knipperend | Laden start, systeem klaar |
| Knipperend | Aan het laden |
| Constant aan | Alarm |
| Constant aan | Storing in de apparatuur |

De kleuren die deze toestanden onderscheiden, staan niet in de tekstlaag van de PDF. Kijk in de PDF zelf.

Na het starten van het laden hoor je na ruim 30 seconden een piep waarna het laden begint. Vier pieptonen betekenen dat het laden voortijdig is gestopt (door gebruiker of auto, of door een fout tijdens de wachttijd).

### Nieuw systeem in de app
1. De installateur maakt een account via de website van Sigenergy ("Partner", "Nu aanmelden").
2. Download de **mySigen**-app en maak een nieuw systeem aan. Voor de stappen verwijst de gids naar de mySigen App Creating New Systems Guide.
3. Voeg je de EVDC toe aan een bestaande installatie, dan herkent het systeem de apparaten automatisch.

### Upgraden van 12 naar 25 kW
Een EVDC 12 kan met een licentie naar 25 kW. Koop en activeer die in de mySigen-app (installatiegids p40).

**Waar lees je dit na:** Installatiegids hoofdstuk 6 en 7 (p35-37) en Veelgestelde vragen (p38-40).`
    },
    {
      id: 'gebruik',
      kop: 'Gebruik in het dagelijks leven',
      tekst: `Hoofdstuk 5 van de gebruikershandleiding is voor de eigenaar geschreven: app, RFID-kaart, starten en stoppen.

### Aanmelden in de app
Download de mySigen-app en meld je aan met een e-mailaccount. Activeer het account via de e-mail van "sigencloud" en stel het eerste wachtwoord in (p20). De tekst spreekt van het "installatieprogramma", dus het lijkt om het installateursaccount te gaan. Andere app-instellingen staan in de aparte mySigen App User Manual (p32).

### Laden starten
Er zijn drie manieren: met de **app**, met een **Sigen RFID-kaart** of **zonder authenticatie**. De eerste twee worden aanbevolen.

1. Steek de connector in de auto.
2. Start in de app of houd de gekoppelde RFID-kaart voor het leesgebied. Een kaart moet eerst aan de app gebonden zijn; bij een fout kun je hem verwijderen onder "Kaartmanagement" (p21).
3. De module doet een zelftest, legt contact met de auto en begint na ongeveer 30 tot 40 seconden. Wacht rustig: niet opnieuw op de app drukken, de kaart niet herhaaldelijk scannen en de connector niet opnieuw insteken.
4. Lukt het niet? Steek de connector opnieuw in, controleer of hij goed vastzit en start opnieuw.

Staat "Authenticatie" uit, dan kan iedere auto de module gebruiken (p24).

### Laden stoppen
- Vanzelf als de auto vol is.
- Met de RFID-kaart: opnieuw scannen.
- Met de app: bij een enkel systeem via THUIS, Lader, STOPPEN; bij meerdere parallelle SigenStor-systemen via Apparaat, SigenStor, Lader, STOPPEN (p25, p31).

### Slim laden
De brochure (p10) noemt:

- **Gepland laden**: je stelt starttijden in.
- **Laden met PV-overschot**: zonnestroom die het huis niet nodig heeft, zodat het laden groen is.
- **Battery Boost Charging**: de thuisaccu helpt mee, met een instelbare afkapwaarde voor de laadstatus (SOC, state of charge).
- **Snel laden**: stroom van net en PV tegelijk.
- **Slim beheer van belasting** (load management).

### V2H in het dagelijks gebruik
Hoe je stroom uit de auto naar het huis instelt of start, staat niet in de gebruikershandleiding (versie 01, juni 2024) en niet in de installatiegids. De brochure noemt V2H alleen als functie, afhankelijk van de auto.

### Onderhoud
Hoofdstuk 6 (p33) vraagt om periodiek schoonmaken met de module uitgeschakeld, zonder gereedschap dat de isolatie beschadigt (zoals draadborstels). De tabel noemt een cyclus van eenmaal per drie of per zes maanden zonder uit te leggen wanneer welke geldt. Verder: let op schade, vervorming en vreemde geluiden en controleer de parameters.

**Waar lees je dit na:** Gebruikershandleiding hoofdstuk 5 (p19-32) en 6 (p33), Brochure p10.`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid en let op',
      tekst: `Alle documenten zeggen: alleen getrainde en gekwalificeerde personen mogen aan de apparatuur werken (Installatiegids p2, Belangrijke informatie p8). Schade door het niet volgen van de instructies valt buiten de garantie.

!!! gevaar Hoogspanning binnenin
Volgens het etiket staat de module binnenin onder hoogspanning zodra hij is ingeschakeld. Open de behuizing niet tijdens bedrijf. Na het uitschakelen ontladen interne onderdelen vertraagd: wacht 5 minuten (Gebruikershandleiding 2.4, p12). Het bedrijfsspanningsbereik loopt tot 1000 V.
!!!

### Regels voor de installateur
Uit Belangrijke informatie 5.1 tot 5.3 (p11-14):

!!! gevaar Niet werken onder spanning
Werken aan de apparatuur terwijl die onder spanning staat (installatie, bedrading, vervanging) is verboden. Meet eerst de spanning op het contactpunt voordat je een aansluiting aanraakt. Schakel de stroom uit vóór onderhoud of vervanging.
!!!

- Draag isolatiehandschoenen, isolatieschoenen en helm, geen geleidende sieraden, en gebruik geïsoleerd gereedschap.
- **Aarding:** aardingskabel eerst aansluiten, bij vervanging als laatste losmaken.
- Kabel goed aansluiten voordat je de stroomopwaartse MCB inschakelt.
- Geen eigen generator als stroombron en geen kabels of adapters die er niet voor bedoeld zijn.
- Niet werken bij onweer, regen, sneeuw of storm. Niet schoonspuiten of met alcohol of olie reinigen.
- Bij het boren: niet in het apparaat zelf boren, bril en handschoenen dragen en boorstof snel opruimen.
- Volg bij het plaatsen de bedieningsstappen exact: anders kan er na het inschakelen hoogspanning op de apparatuur staan (installatiegids p25, p29).

### Plaatsing
Uit hoofdstuk 3 van installatiegids en gebruikershandleiding:

- Beschut, niet in direct zonlicht, regen, sneeuw of stof; niet in rokerige, ontvlambare of explosieve ruimtes.
- Minstens 500 m van corrosiebronnen zoals kustgebieden en chemische fabrieken.
- Niet op een brandbare ondergrond; beton of massief metselwerk, vlak en zonder leidingen of elektra in de wand.
- Niet binnen kinderbereik en niet in een afgesloten, slecht geventileerde ruimte zonder brandbeveiliging. Binnen mag de temperatuur door de module niet meer dan 3 graden stijgen.
- In een garage niet op de rijlijn van de auto, wel dicht bij de parkeerplek.
- Niet in campers, schepen of treinen.

### Regels voor de gebruiker
- Geen vloeistof in connector of stopcontact, connector niet laten vallen, kabel niet laten platrijden.
- Het koellichaam is heet.
- Alleen voor het laden van voertuigen, niet op openbare infrastructuur, medische noodapparatuur of liften.
- Radiogolven kunnen pacemakers en gehoorapparaten beïnvloeden: vraag de fabrikant van het medische apparaat.

?? Wat past hier uit de cursus?
Niet werken onder spanning en spanningloosheid aantonen horen bij de vijf stappen van veiligstellen (m01l03). Bij een systeem met PV en accu blijft de DC-zijde leven (m10l02). Meet daarom altijd zelf en ga niet alleen op de wachttijd van 5 minuten af.
??

**Waar lees je dit na:** Belangrijke informatie p5-14, Gebruikershandleiding hoofdstuk 1 en 3 (p6-8, p15-17), Installatiegids p2, p4-6, p25, p29.`
    },
    {
      id: 'alarmen-en-storingen',
      kop: 'Alarmen en storingen',
      tekst: `Er is in de bronnen geen lijst met alarmcodes of een stappenplan voor storingzoeken. Wat er wel staat:

- **De led-indicator** (Gebruikershandleiding 5.1, p19; Installatiegids hoofdstuk 6, p35) onderscheidt "alarmeren" en "storing in apparatuur". De handleiding zegt niet hoe je die twee oplost.
- **Vier pieptonen** na het starten van het laden betekenen dat het laden voortijdig is gestopt (installatiegids p35).
- **Afwijkende lichtstrip na inschakelen:** controleer of de pinnen in de mannelijke connector scheef staan. Zet ze recht en steek de connectoren opnieuw in elkaar (installatiegids p16 en p23).
- **Laden lukt niet:** connector opnieuw insteken, controleren of hij goed in de auto zit, opnieuw starten (Gebruikershandleiding p23). Blijft het mislukken, neem contact op met de verkoper (p8).
- **Iets lijkt niet normaal:** neem contact op met je installateur of vertegenwoordiger. De gebruiker mag het apparaat niet zelf demonteren (Beknopte handleiding p2).
- **Na een stoot of ongeluk:** meteen stoppen met gebruik. Professioneel personeel moet het apparaat eerst beoordelen (p7).
- **Diagnose op afstand:** de brochure noemt die (p10). Hoe dat werkt staat in de mySigen-documentatie, niet hier.

Een foutcodetabel, meetwaarden voor storingzoeken en herstelprocedures staan **niet in de handleiding**. Voor een installateur betekent dat: terugvallen op de Sigenergy-website of de partnerondersteuning.

**Waar lees je dit na:** Gebruikershandleiding p8, p19, p23, Installatiegids p16, p35, Beknopte handleiding p2.`
    }
  ],

  handleidingRefs: [
    { doc: 'ig', hoofdstuk: '1.1 Uiterlijk en afmetingen', paginas: '2', onderwerp: 'Onderdelen van de module: connectorhouder, laadkabel, RFID-leesgebied, kabelhouder' },
    { doc: 'ig', hoofdstuk: '1.2 Typische installatiescenario\'s', paginas: '3', onderwerp: 'De vier combinaties met omvormer en accu, nieuw of toevoegen' },
    { doc: 'ig', hoofdstuk: '2 Inspecties voor installatie', paginas: '4', onderwerp: 'Controle van levering, beschermingsmiddelen, gereedschap en kabels' },
    { doc: 'ig', hoofdstuk: '3 Vereisten voor de omgeving', paginas: '5-6', onderwerp: 'Eisen aan locatie, ondergrond en afstand tot de parkeerplek' },
    { doc: 'ig', hoofdstuk: '4.1 Omvormer + SigenStor EVDC + Accupakket', paginas: '7-23', onderwerp: 'EVDC toevoegen of alles voor het eerst plaatsen in een systeem met accu' },
    { doc: 'ig', hoofdstuk: '4.2 Omvormer + SigenStor EVDC', paginas: '24-31', onderwerp: 'Installatie bij een Sigen Hybrid zonder accu, met waarschuwing over hoogspanning' },
    { doc: 'ig', hoofdstuk: '5 Installatie van oplaadcontactdoos en plaatsing van oplaadconnector', paginas: '32-34', onderwerp: 'Connectorhouder en laadconnector plaatsen, per uitvoering' },
    { doc: 'ig', hoofdstuk: '6 Inschakelen', paginas: '35', onderwerp: 'Inschakelvolgorde, led-statustabel en pieptonen' },
    { doc: 'ig', hoofdstuk: '7 Een nieuw systeem creëren', paginas: '36-37', onderwerp: 'Installateursaccount en systeem aanmaken in de mySigen-app' },
    { doc: 'ig', hoofdstuk: 'Veelgestelde vragen', paginas: '38-40', onderwerp: 'Laadkabel verwijderen en terugplaatsen, upgrade van 12 naar 25 kW met licentie' },
    { doc: 'bi', hoofdstuk: 'Algemene vereisten', paginas: '6-7', onderwerp: 'Wanneer de fabrikant niet aansprakelijk is (omgeving, normen, eigen wijzigingen)' },
    { doc: 'bi', hoofdstuk: 'Personeelsvereisten, Vereisten voor behandeling en transport, Opslagvereisten', paginas: '8-10', onderwerp: 'Kwalificaties, transport met PBM en opslagcondities' },
    { doc: 'bi', hoofdstuk: '5.1 Routinevereisten', paginas: '11-12', onderwerp: 'Hoogspanningsgevaar, PBM, aarding en de volgorde bij het inschakelen' },
    { doc: 'bi', hoofdstuk: '5.2 Installatie van de apparatuur, 5.3 Onderhoud en vervanging van apparatuur', paginas: '13-14', onderwerp: 'Boorveiligheid en stroom afsluiten voor onderhoud' },
    { doc: 'gh', hoofdstuk: 'Hoofdstuk 1 Veiligheidsmaatregelen', paginas: '6-8', onderwerp: 'Veiligheidseisen voor gebruikers en situaties waarin het niet gebruikt mag worden' },
    { doc: 'gh', hoofdstuk: 'Hoofdstuk 2 Productintroductie (2.1 Modelbeschrijving, 2.2 Beschrijving, 2.4 Etiketbeschrijving)', paginas: '9-12', onderwerp: 'Typecode, bidirectionele DC/DC-werking en betekenis van de etiketten' },
    { doc: 'gh', hoofdstuk: '2.5 Gebruikelijke netwerken', paginas: '13-14', onderwerp: 'Schema met PV, omvormer, EVDC, accu, gateway, sensor en communicatie' },
    { doc: 'gh', hoofdstuk: 'Hoofdstuk 3 Omgevingsvereisten', paginas: '15-17', onderwerp: 'Eisen aan installatieomgeving en montageoppervlak' },
    { doc: 'gh', hoofdstuk: 'Hoofdstuk 5 Hoe te gebruiken (5.1 tot 5.5)', paginas: '19-32', onderwerp: 'Led-status, app en RFID-kaart, laden starten en stoppen, enkel en parallel systeem' },
    { doc: 'gh', hoofdstuk: 'Hoofdstuk 6 Gepland onderhoud', paginas: '33', onderwerp: 'Reinigings- en inspectiecyclus' },
    { doc: 'bh', hoofdstuk: 'Voorzorgsmaatregelen voor de installatie', paginas: '1', onderwerp: 'Afstanden rond de module en reikwijdte R per kabellengte' },
    { doc: 'bh', hoofdstuk: 'Voorzorgsmaatregelen voor dagelijks gebruik', paginas: '2', onderwerp: 'Bij afwijkingen installateur bellen, niet zelf demonteren' },
    { doc: 'br', hoofdstuk: 'Waarom Sigenergy? (05 en 06: DC-gekoppelde architectuur, V2X)', paginas: '7', onderwerp: 'DC-bus, V2H en V2G, beperking door de auto' },
    { doc: 'br', hoofdstuk: 'Sigen EV DC Charging Module (specificaties)', paginas: '10', onderwerp: 'Volledige specificatietabel, slim laden, protocollen en normen' }
  ],

  cursusLinks: ['m10l03', 'm10l02', 'm01l03', 'm01l02', 'm03l05', 'm06l03'],

  zieOok: ['sigenergy-ev-ac-lader', 'sigenergy-sigenstor-home', 'sigenergy-hybrid-omvormer', 'sigenergy-gateway', 'sigenergy-mysigen-app']
});
