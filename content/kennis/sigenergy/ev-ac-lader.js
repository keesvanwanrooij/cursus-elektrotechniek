/* ==========================================================================
   content/kennis/sigenergy/ev-ac-lader.js - Sigen EV AC Charger (7, 11 en 22 kW)
   Samenvatting in eigen woorden. Paginanummers verwijzen naar de positie in
   de pdf (1 = eerste pagina), niet naar het gedrukte paginanummer.
   ========================================================================== */

KENNIS.addProduct({
  id: 'sigenergy-ev-ac-lader',
  merk: 'sigenergy',
  slug: 'ev-ac-lader',
  naam: 'Sigen EV AC Charger (7, 11 en 22 kW)',
  rol: 'lader',
  toepassingen: ['laadpaal', 'thuisbatterij'],
  korteOmschrijving: 'Een wandgemonteerde wisselstroom-laadpaal van Sigenergy voor buiten en binnen, met Type 2-connector of Type 2-stopcontact met afsluiting, in drie vermogens (7, 11 en 22 kW). Laadt met zonne-overschot en dynamisch laadbeheer als hij met de Sigen Power Sensor werkt.',

  varianten: {
    kop: ['Vermogen', 'Netaansluiting', 'Uitgangsstroom', 'Voorbeveiliging (MCB)', 'Voedingskabel (aanbeveling)'],
    rijen: [
      ['7 kW', '1 fase (L/N/PE), 230 V. De kabeltabel noemt ook twee fasen (L1/L2/PE)', '6 tot 32 A', '1P+N, 40 A', '3-aderig koper, 6 mm², 32 A'],
      ['11 kW', '3 fasen, 230 V fase-nul en 400 V fase-fase (5-draads of 4-draads)', '6 tot 16 A', '3P+N, 20 A', '5-aderig of 4-aderig koper, 2,5 tot 4 mm², 16 A'],
      ['22 kW', '3 fasen, 230 V fase-nul en 400 V fase-fase (5-draads of 4-draads)', '6 tot 32 A', '3P+N, 40 A', '5-aderig of 4-aderig koper, 6 mm², 32 A']
    ]
  },

  documenten: [
    { id: 'bi', titel: 'Belangrijke informatie voor Sigen EV AC Charger_NL', soort: 'Belangrijke informatie', paginas: 15 },
    { id: 'ig', titel: 'Installatiegids voor Sigen EV AC Charger_NL', soort: 'Installatiegids', paginas: 22 },
    { id: 'br', titel: 'Brochure - Thuis Energieoplossing', soort: 'Brochure', paginas: 23 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `De Sigen EV AC Charger is een laadpaal die aan de muur hangt en een elektrische auto laadt met wisselspanning (AC). Bij AC-laden krijgt de auto gewone wisselstroom en zet de lader in de auto die om naar gelijkstroom voor de accu. Bij DC-laden gebeurt die omzetting in het laadstation zelf, daarom zijn DC-laders groter en duurder en kunnen ze sneller laden.

### Uitvoeringen

Er zijn drie vermogens: 7, 11 en 22 kW. Elk bestaat in twee uitvoeringen die je aan de modelcode herkent (de installatiegids noemt ze T2 en T2SH, plus UK-varianten):

- **T2:** een vaste laadkabel met een Type 2-connector. **Type 2** is de Europese standaardstekker voor AC-laden van auto's. De brochure noemt een geïntegreerde laadkabel van 5 m. Op de muur komt een houder om de stekker in op te bergen.
- **T2SH:** geen kabel, maar een Type 2-stopcontact met beschermklep (de brochure zegt "met afsluiting"). De bestuurder gebruikt dan zijn eigen laadkabel.

### Authenticatie: wie mag laden

Je kunt de lader op drie manieren laten starten: met een **RFID-kaart** (een pasje dat je tegen het leesvlak houdt), via de app, of met auto-opladen zonder authenticatie. In dat laatste geval begint het laden zodra de auto is aangesloten.

### Slim laden

De brochure noemt drie laadwijzen:

- **Slim schema:** je stelt start- en stoptijden in, hoe vaak het schema herhaalt en welke laadmodus geldt. Per tijdslot kies je apart tussen laden met zonne-overschot en snel laden.
- **Laden met PV-overschot:** de auto krijgt alleen de stroom die de zonnepanelen (PV) over hebben. De brochure spreekt van 100% groene stroom. De brochure noemt daarnaast Battery Boost Charging met een SOC-afschakelinstelling (SOC is de laadtoestand: het percentage dat de batterij nog vol is). Het gaat dus om extra stroom uit de thuisbatterij, met een ondergrens die je instelt. Ook laden via het net wordt genoemd.
- **Snel laden:** het systeem haalt tegelijk stroom uit het net en uit de zonnepanelen, voor de hoogst mogelijke snelheid.

!!! info Slim laden werkt niet alleen
Volgens de voetnoten bij de brochure vraagt slim laden met PV-overschot een SigenStor of een externe omvormer die met de Sigen Power Sensor is gekoppeld. Dynamisch lastbeheer en overtollig opladen met een omvormer van een ander merk vragen ook de Sigen Power Sensor. Een losse lader zonder die onderdelen kan dit dus niet.
!!!`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Plek in het systeem',
      tekst: `### Voeding en beveiliging ervoor

De lader krijgt zijn stroom uit de groepenkast via een eigen kabel. Ervoor komt een **pre-AC-schakelaar** (in de handleiding ook pre-MCB genoemd). Dat is de automaat (MCB, een kleine installatieautomaat die de kabel beveiligt tegen overbelasting en kortsluiting) die de lader in- en uitschakelt. De installatiegids schrijft een MCB met **karakteristiek B** voor conform IEC/EN 60898 (waarden: zie de tabel met varianten). Is er al een geschikte AC-schakelaar geïnstalleerd, dan mag je die gebruiken. Let op: dit "type B" gaat over de uitschakelkarakteristiek van de automaat en is iets anders dan een aardlekschakelaar type B.

De lader heeft zelf **DC-foutdetectie van 6 mA** en **AC-foutdetectie van 30 mA** ingebouwd. Dat betekent: hij meet zelf of er gelijkstroom of wisselstroom naar aarde weglekt en schakelt dan uit. Gewone aardlekschakelaars herkennen gelijkstroomlekkage slecht, daarom is dit bij laadpalen belangrijk. Volgens de brochure is dit onderdeel (een RDC-PD) getest volgens IEC 62955. Of je daarnaast nog een aardlekschakelaar in de groepenkast nodig hebt en welk type, staat niet in de handleiding. Zie de cursuslessen.

### Ondersteunde netvormen

Hoofdstuk 5.1 van de installatiegids toont vier netvormen: eenfase (L/N/PE), driefasen vijfdraads (L1/L2/L3/N/PE), driefasen vierdraads (L1/L2/L3/PE) en twee fasen (L1/L2/PE). Als aardingssysteem noemt de installatiegids TT, TN-S, TN-C-S en IT.

### Communicatie

De lader kan praten via **4G** (met een SIM-kaart die je zelf levert), **Wi-Fi** en **Ethernet** (een netwerkkabel naar een router). Voor de meting via een aparte meter gebruikt hij **RS-485 met Modbus RTU**: een tweedraads seriële verbinding waarop apparaten data uitwisselen. Voor het aansturen via een laadplatform noemt de brochure OCPP 1.6J.

De Sigen Gateway heeft een Ethernetpoort (FE2) die volgens de installatiegids van de gateway bedoeld is voor het aansluiten van een Sigen EV AC Charger. 

### Load balancing en dynamisch laadbeheer

**Load balancing** betekent dat de lader zijn vermogen aanpast aan wat de rest van het huis gebruikt, zodat de hoofdzekering niet uitschakelt. Bij Sigen heet dit dynamisch lastbeheer (in de brochure), bedoeld om overbelasting te voorkomen. Volgens de voetnoten werkt het alleen met de **Sigen Power Sensor**, die via RS485 op de lader wordt aangesloten. De installatiegids noemt de sensor Sigen Sensor TP-CT120-DH (SDM630 MCT 40mA). Ook "fase schakelen" wordt in de brochure als ondersteund genoemd, maar hoe dat werkt legt de brochure niet uit.

### Koppeling met het Sigen-systeem en de app

Op het overzichtsplaatje van Sigenergy (brochure, pagina 4) staat de lader naast SigenStor, gateway, hybride omvormer en de mySigen-app. Na de eerste inschakeling maak je de lader aan als nieuw systeem in de **mySigen-app** (zie inbedrijfstelling). De brochure noemt de app als weergave en als manier om een laadsessie te starten. Waar je de schema's precies instelt, staat niet uitdrukkelijk in de documenten. De ingebouwde indicator op de lader komt aan bod bij alarmen en storingen.`
    },
    {
      id: 'specificaties',
      kop: 'Specificaties in het kort',
      tekst: `De getallen komen uit de brochure (pagina 17) en de installatiegids. Waar ze elkaar aanvullen staat dat erbij.

### Elektrisch

| Onderdeel | Waarde |
|---|---|
| Nominaal laadvermogen | 7 / 11 / 22 kW |
| Nominale spanning | 7 kW: 220 tot 240 V, 1 fase (1W+N+PE). 11 en 22 kW: 220 tot 240 V en 380 tot 415 V, 3 fasen (3W+N+PE) |
| Uitgangsstroom | 7 kW: 6 tot 32 A. 11 kW: 6 tot 16 A. 22 kW: 6 tot 32 A |
| Frequentie | 50 / 60 Hz |
| Kabeldoorsnede voeding (brochure) | 2,5 tot 6,0 mm² |
| Stand-by zelfverbruik | minder dan 3,6 W |

### Kabels volgens de installatiegids

- **AC-voeding:** koperen kabel voor buiten, geschikt tot 90 graden Celsius, buitendiameter 13 tot 20 mm. Doorsneden per model: zie de tabel met varianten.
- **RS485- en DO-signaalkabel:** afgeschermd getwist paar (draden om elkaar gedraaid tegen storing) van 0,2 tot 1,5 mm², buitendiameter 5 tot 7 mm.
- **RJ45-netwerkkabel:** afgeschermd getwist paar, buitendiameter 5 tot 7 mm.
- **PEN-controlelijn (optioneel, alleen Verenigd Koninkrijk):** 2-aderige koperen kabel van 0,75 tot 1,5 mm².

### Beveiligingen

De brochure noemt als ondersteund: bescherming tegen over- en onderspanning, overbelasting, oververhitting, aardlekfouten en pieken, en **PEN-bescherming**. Dat laatste is een beveiliging voor het geval de gecombineerde nul- en aardleiding (PEN-geleider) van het net onderbroken raakt. Dan kan er gevaarlijke spanning op geleidende delen komen te staan. In het Verenigd Koninkrijk kan hiervoor optioneel een Sigen EVAC Slimme PEN Breaker worden aangesloten. Verder noemt de brochure een **willekeurige laadvertraging** als ondersteund. Wat dat precies doet, legt de brochure niet uit.

Ingebouwd zijn verder DC-foutdetectie (6 mA) en AC-foutdetectie (30 mA), en de brandvertragingsklasse UL94-5VB van de behuizing.

### Omgeving en behuizing

| Onderdeel | Waarde |
|---|---|
| Beschermingsgraad | IP65 en IK10 (IP: bescherming tegen stof en water; IK: bescherming tegen mechanische slag) |
| Afmetingen (B / H / D) | 234 / 384 / 126 mm |
| Gewicht | 4,5 / 6,4 kg (de brochure zegt niet welk gewicht bij welke uitvoering hoort) |
| Temperatuur in bedrijf | -30 tot 55 graden Celsius |
| Relatieve luchtvochtigheid | 5% tot 95% |
| Koeling | natuurlijke convectie (geen ventilator) |
| Kabelinvoer | onder-, boven- en achterkant |

Communicatie: 4G, Wi-Fi en Ethernet, protocol RS-485 Modbus RTU, OCPP 1.6J. Weergave via een LED-indicator en de app. Genoemde norm onder meer: EN IEC 61851-1.`
    },
    {
      id: 'installatie',
      kop: 'Installatie in hoofdlijnen',
      tekst: `De installatiegids is grotendeels beeld met weinig tekst. Onderstaande stappen volgen de hoofdstukken 2 tot en met 5 (pagina 4 tot en met 19 van de installatiegids).

### Voor je begint

Controleer de paklijst, je beschermingsmiddelen, je gereedschap en de kabels die de klant levert. De lader mag alleen worden bediend door getraind of ervaren elektrisch personeel.

### De stappen

1. **Locatie kiezen en monteren.** Kies een beschutte plek: niet rokerig, ontvlambaar, explosief of corrosief, geen direct zonlicht, regen, stilstaand water of sneeuw, en minstens 500 m van bronnen van zout- of zuurcorrosie (zeekust, chemische fabrieken). Monteer horizontaal op een niet-brandbare, liefst stenen ondergrond, buiten bereik van kinderen. In een garage niet op een plek waar de auto langs komt. Laat de indicator zichtbaar. Zorg dat er geen leidingen in de muur zitten voordat je boort.
2. **Uitpakken en demonteren.** Haal de lader uit de verpakking en het frontpaneel eraf, zodat je bij het aansluitblok komt. Bij doorvoer achter boor je daarvoor een opening in de muur.
3. **Vastzetten.** Maak het apparaat vast aan de wand volgens de afbeelding op pagina 10.
4. **Voorbeveiliging en kabel.** Zorg dat pre-AC-schakelaar en voedingskabel bij het model passen (zie de tabel met varianten) en werk spanningsloos.
5. **Kabels aansluiten.** Kies de route: onder (aanbevolen), boven of achter. Bij boven of achter moet je de bovenkant goed beschermen tegen langdurig blijvend water. De installatiegids geeft striplengtes per klem (L3, L2, L1, N en PE) en per routering. Sluit de AC-voeding aan volgens het netschema. Een verkeerd aangesloten PE-draad is een veiligheidsrisico en de lader werkt dan niet.
6. **Communicatie aansluiten.** RS485 naar de Sigen Power Sensor (klem A en B), optioneel de DO-uitgang (met de aansluitingen COM en NC, 1 A en 30 V gelijkspanning; waarvoor die dient, staat niet in de handleiding), bij een Sigen EVAC met MCB-aansluitingen optioneel de PEN-controlelijn (alleen Verenigd Koninkrijk), de netwerkkabel naar de router en desgewenst de SIM-kaart voor 4G. De SIM-kaart is standaardformaat en wordt door de gebruiker geleverd. Aanbevolen wordt capaciteit van 64 KB en 128 MB dataverkeer per maand.
7. **Afsluiten.** Loop de controlelijst voor het paneel door (o.a. alle kabels correct, schroeven vast, ongebruikte poorten dicht met waterdichte afdekkingen of pluggen, niets achtergebleven in de lader). Monteer daarna het paneel. Bij de T2-uitvoering plaats je tot slot de kabelhouder aan de muur en hang je de laadconnector erin.

!!! kern Kabelroute
De installatiegids raadt aan om kabels via de onderste geleidingsgaten in te voeren (gaten 3 en 5). Bij boven of achter: de lader op een beschutte plek hangen, want water kan anders binnendringen na langdurige ophoping aan de bovenkant. Bij achterdoorvoer wordt één communicatiekabel per doorvoer aangeraden.
!!!`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling',
      tekst: `Het hoofdstuk "6 Aanmaken en inschakelen nieuw systeem" is kort:

1. Zet de pre-AC-schakelaar aan.
2. Kijk naar de indicator op het voorpaneel. Die laat zien in welke toestand de lader zit (zie alarmen en storingen).
3. Zodra de indicator groen wordt en constant brandt of knippert, maak je in de **mySigen-app** een nieuw systeem aan.

De stappen voor de app staan op pagina 21. Voor een account ga je naar de website van Sigenergy naar "Partner" en dan "Nu registreren". Daarna download je de mySigen-app en maak je een nieuw systeem aan voor het apparaat. De exacte stappen verschillen per situatie. Voor details verwijst de installatiegids naar de aparte "mySigen App Creating New Systems Guide", die niet bij onze bestanden zit.

Een lijst met instellingen die je bij oplevering moet controleren of een testprocedure staat niet in de handleiding. Volg je eigen opleveringsprocedure.`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid en let op',
      tekst: `Het document "Belangrijke informatie" (15 pagina's) is een algemeen veiligheidsdocument voor installateurs en technische dienst. Wat het als kritisch noemt, in eigen woorden.

!!! gevaar Werk nooit onder spanning
De handleiding verbiedt uitdrukkelijk om de lader onder spanning te installeren, te bedraden of te vervangen. Voordat je kabels aansluit of losmaakt, moeten de schakelaars vóór en achter de lader en de schakelaars van het apparaat zelf uit staan. Meet de spanning op het contactpunt voordat je een aansluitklem aanraakt.
!!!

### Aarding en aansluitvolgorde

Sluit de aardingskabel **als eerste** aan. Haal hem bij het vervangen **als laatste** los. Controleer of de kabel naar de lader goed is aangesloten voordat je de pre-MCB inschakelt. Raak na het inschakelen de aansluitpunten niet aan.

### Persoonlijke veiligheid

Draag isolatiehandschoenen, isolerende schoenen en een veiligheidshelm, gebruik isolerend gereedschap en draag geen geleidende sieraden. Bij het boren draag je een veiligheidsbril en handschoenen. Boor niet in de lader zelf en maak de gaten direct schoon.

### Gebruik en omgeving

- Gebruik de lader niet bij slecht weer (onweer, regen, sneeuw, orkaan) en reinig hem niet met water, alcohol of olie.
- Controleer op schade of afwijkingen (vervormd, vreemde geur) en gebruik hem dan niet.
- Gebruik de lader alleen om voertuigen te laden en niet met een eigen generator als stroombron.

### Kabels

Gebruik een kabel van voldoende lengte, geen verlengkabel. Kruis of verstrengel kabels niet, gebruik geen kabels met beschadigde isolatie en let op scherpe randen bij doorvoeren. Houd ze uit de buurt van warmtebronnen. Bij temperaturen rond 0 graden wordt de mantel bros: installeer voorzichtig, en leg kabels die langer onder 0 graden lagen 24 uur van tevoren in een warmere ruimte.

### Kortsluitwaarde van de laadaansluiting

De handleiding noemt maximale I²t-waarden (de doorlaatenergie bij kortsluiting) voor de aansluiting: 80.000 A²s voor de laadconnector (Case C, vaste kabel) en 75.000 A²s voor het stopcontact (Case B). De tekst spreekt van een "Model 3-lader", vermoedelijk laadmodus 3 (mode 3). Wat je hiermee moet doen bij de keuze van de voorbeveiliging, legt de handleiding niet uit.

### Onderhoud en vervanging

Sluit de stroomtoevoer af voor onderhoud of vervanging en zet hem pas weer aan als alles klaar is.

### Personeel en aansprakelijkheid

Alleen opgeleid en gekwalificeerd personeel mag de lader installeren en onderhouden. Sigenergy is niet aansprakelijk voor schade door onder meer een installatieomgeving die niet aan de normen voldoet, verkeerde kabels of gereedschap, het niet volgen van de instructies of eigen software-aanpassingen.`
    },
    {
      id: 'alarmen-en-storingen',
      kop: 'Alarmen en storingen',
      tekst: `De installatiegids kent **geen foutcodes** met een nummer. Alle informatie over de toestand en storingen zit in de indicator op het voorpaneel, in de tabel bij hoofdstuk 6 op pagina 20 van de installatiegids. Een aparte lijst met alarmeringen zoals bij de gateway staat niet bij de documenten voor deze lader.

De indicator bestaat uit lampjes die genummerd zijn (1 tot en met 5). De tabel geeft per situatie aan welke lampjes branden, in welke kleur en of ze constant branden of knipperen.

!!! info Kleur en aantal lampjes
De kleurkolom van de tabel is in de tekstversie van de pdf niet leesbaar. In dit overzicht staan daarom alleen de lampjes en het patroon. Dezelfde combinatie van lampjes en patroon komt voor bij verschillende betekenissen, dus de kleur is waarschijnlijk nodig om ze te onderscheiden. Gebruik daarom altijd de originele tabel op pagina 20.
!!!

### Normale toestanden

| Lampjes | Patroon | Betekenis |
|---|---|---|
| Alle, veelkleurig | Constant aan | Configuratie starten en initialiseren |
| 1 | Constant aan | Stand-by, geen internet, connector niet in de auto |
| 1 | Toenemend knipperen | Stand-by, wel internet, connector niet in de auto |
| Alle | Constant aan | RFID-kaart niet gelezen, connector zit in de auto. Of: opladen voltooid |
| Alle | Toenemend knipperen | Oplaadtijd geregistreerd en connector zit al in de auto |
| Alle | Knipperen | RFID-kaart gelezen, klaar om te laden |
| Alle | Vloeiend knipperen | Bezig met laden |
| Geen | Uit | Niet ingeschakeld, of te lage spanning |

### Storingen

| Lampjes | Patroon | Betekenis |
|---|---|---|
| 1 | Knipperen | Elektrische lekkage in de apparatuur |
| 1 | Constant aan | Relais in de apparatuur is vastgeplakt (kwam vast te zitten) |
| 1 en 2 | Knipperen | Over- of onderspanningsbeveiliging |
| 1 tot en met 3 | Knipperen | Overstroombeveiliging |
| 1 tot en met 4 | Knipperen | Overtemperatuurbeveiliging |
| 1 tot en met 5 | Knipperen | Aardingsstoring |
| Alle | Knipperen | Communicatiestoring tussen de lader en de auto |
| 1 en 2 | Constant aan | Overige storingen |

Wat je bij een storing moet doen (resetten, meten, contact opnemen met Sigenergy), staat niet in de handleiding.

?? Wat betekent "relais vastgeplakt"?
De lader schakelt de stroom naar de auto met een relais (een elektrisch bediende schakelaar). Zitten de contacten vast, dan kan de lader de stroom niet meer echt afschakelen.
??`
    }
  ],

  handleidingRefs: [
    { doc: 'bi', hoofdstuk: 'Overzicht (inleiding, doelgroep, betekenis van de tekens)', paginas: '5', onderwerp: 'Voor wie het document is en wat Gevaar, Waarschuwing en Let op betekenen' },
    { doc: 'bi', hoofdstuk: 'Algemene vereisten', paginas: '6-7', onderwerp: 'Wanneer Sigenergy niet aansprakelijk is: normen, kabels, opslag, wijzigingen, overmacht' },
    { doc: 'bi', hoofdstuk: 'Vereisten personeel', paginas: '8', onderwerp: 'Opleiding, certificaten en kennis van lokale regels voor installateurs' },
    { doc: 'bi', hoofdstuk: 'Vereisten afhandeling en transport', paginas: '9', onderwerp: 'Verplaatsen, transport, stapelen en beschermen tegen water' },
    { doc: 'bi', hoofdstuk: 'Vereisten opslag', paginas: '10', onderwerp: 'Temperatuur, vochtigheid en omstandigheden bij opslag' },
    { doc: 'bi', hoofdstuk: '5.1 Routine vereisten', paginas: '11-12', onderwerp: 'Hoogspanning, aarding, isolerend gereedschap, PBM en I²t-waarden van de laadaansluiting' },
    { doc: 'bi', hoofdstuk: '5.2 Installatie apparatuur', paginas: '13', onderwerp: 'Veilig boren en het gewicht van de apparatuur opvangen' },
    { doc: 'bi', hoofdstuk: '5.3 Kabelverbinding', paginas: '14', onderwerp: 'Schakelaars uit, kabels niet kruisen, temperatuurbeperkingen, geen verlengkabel' },
    { doc: 'bi', hoofdstuk: '5.4 Onderhoud en vervanging van apparatuur', paginas: '15', onderwerp: 'Stroom afsluiten voor onderhoud en pas weer inschakelen na herstel' },
    { doc: 'ig', hoofdstuk: '1 Inleiding', paginas: '2-3', onderwerp: 'Modellen, geleidingsgaten, laadaansluiting, RFID-lezer en indicator' },
    { doc: 'ig', hoofdstuk: '2 Controle voorafgaand aan installatie', paginas: '4-5', onderwerp: 'PBM, gereedschap, pre-AC-schakelaar (MCB) en kabelspecificaties per model' },
    { doc: 'ig', hoofdstuk: '3 Vereisten locatie', paginas: '6-7', onderwerp: 'Installatieomgeving, positie en montageoppervlak' },
    { doc: 'ig', hoofdstuk: '4 Installatie', paginas: '8-10', onderwerp: 'Uitpakken, paneel demonteren, doorvoer achter en wandmontage' },
    { doc: 'ig', hoofdstuk: '5.1 Beschrijving van de netvoedingsmodi', paginas: '11', onderwerp: 'Netschema: 1-fase, 2-fase, 3-fase 4-draads en 5-draads' },
    { doc: 'ig', hoofdstuk: '5.2 Routing', paginas: '12-13', onderwerp: 'Route onder (aanbevolen), boven of achter en bescherming tegen water' },
    { doc: 'ig', hoofdstuk: '5.3 AC-inputkabelverbinding', paginas: '14', onderwerp: 'Striplengte per klem (L1, L2, L3, N, PE) per routering' },
    { doc: 'ig', hoofdstuk: '5.4 RS485/DO signaalkabelverbinding', paginas: '15', onderwerp: 'RS485 naar de Sigen Power Sensor en de DO-uitgang' },
    { doc: 'ig', hoofdstuk: '5.5 (Optioneel) Aansluiting van PEN-controlelijnen', paginas: '16', onderwerp: 'Sigen EVAC Slimme PEN Breaker, alleen voor het Verenigd Koninkrijk' },
    { doc: 'ig', hoofdstuk: '5.6 FE signaalkabelverbinding en 5.7 Installatie van de SIM-kaart', paginas: '17', onderwerp: 'Netwerkkabel naar router en SIM-kaart voor 4G' },
    { doc: 'ig', hoofdstuk: '5.8 Paneel installeren', paginas: '18', onderwerp: 'Controlelijst voordat je het paneel sluit' },
    { doc: 'ig', hoofdstuk: '5.9 Kabelhouder installeren en laadconnector plaatsen', paginas: '19', onderwerp: 'Alleen voor de T2-uitvoeringen met vaste kabel' },
    { doc: 'ig', hoofdstuk: '6 Aanmaken en inschakelen nieuw systeem', paginas: '20', onderwerp: 'Inschakelen en tabel met indicatorstatus en storingen' },
    { doc: 'ig', hoofdstuk: 'mySigen-app downloaden en nieuw systeem aanmaken', paginas: '21', onderwerp: 'Account, app en verwijzing naar de mySigen App Creating New Systems Guide' },
    { doc: 'br', hoofdstuk: 'Sigenergy-thuisenergieoplossingen (overzicht)', paginas: '4', onderwerp: 'Waar de EV AC-lader past in het complete thuisenergiesysteem' },
    { doc: 'br', hoofdstuk: 'Sigen EV AC Charger 7 / 11 / 22 kW', paginas: '17', onderwerp: 'Specificatietabel, slim laden en voetnoten over Sigen Power Sensor' }
  ],

  cursusLinks: ['m10l03', 'm10l04', 'm06l03', 'm02l05', 'm03l04', 'm04l02'],
  zieOok: ['sigenergy-ev-dc-module', 'sigenergy-gateway', 'sigenergy-power-sensor', 'sigenergy-sigenstor-home', 'sigenergy-mysigen-app']
});
