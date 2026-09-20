KENNIS.addToepassing({
  id: 'laadpaal',
  slug: 'laadpaal',
  naam: 'Laadpaal',
  intro: 'Een laadpaal laadt een elektrische auto thuis of op het bedrijf. Hier leer je het verschil tussen AC- en DC-laden, wat een installatie vraagt en welke merken en producten er zijn.',
  seoTitel: 'Laadpaal installeren: uitleg voor beginners, AC en DC laden en merken',
  seoBeschrijving: 'Uitleg over de laadpaal voor beginnende installateurs: AC- en DC-laden, vermogens en fasen, eigen groep en aardlek, slim laden en load balancing, veiligheid en welke merken en producten er zijn.',

  onderdelen: [
    { rol: 'lader',  uitleg: 'De laadpaal zelf. Een AC-paal levert wisselstroom en de auto zet die zelf om. Een DC-lader doet de omzetting in de lader en kan sneller laden, soms ook terug naar het huis leveren.' },
    { rol: 'sensor', uitleg: 'Om overbelasting van de aansluiting te voorkomen moet het systeem het huisverbruik meten. Dat doet een sensor op de hoofdaansluiting, en daarmee kan de paal zijn vermogen aanpassen.' },
    { rol: 'app',    uitleg: 'Voor starten, plannen en inzicht in verbruik, en voor beheer op afstand door de installateur.' },
    { rol: 'omvormer', uitleg: 'Bij laden op zonne-energie speelt de omvormer mee: die bepaalt hoeveel overschot er is om de auto mee te laden.' },
    { rol: 'batterij', uitleg: 'Een thuisbatterij kan de laadpaal voeden als de zon niet schijnt, of de piek in het huis afvlakken.' }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is een laadpaal',
      tekst: `
Een elektrische auto heeft een grote accu, meestal tussen de 40 en 100 kWh. Om die op te laden is een verbinding met veel vermogen nodig, langdurig. Een gewoon stopcontact is daar niet voor gemaakt. Een laadpaal is een vaste, beveiligde aansluiting met een eigen regeling die met de auto communiceert, zodat er alleen stroom loopt als de verbinding veilig is en de auto er klaar voor is.

Er zijn twee hoofdsoorten, die je duidelijk uit elkaar moet houden. Zie de volgende sectie.
`
    },
    {
      id: 'ac-of-dc',
      kop: 'AC-laden en DC-laden',
      tekst: `
| | AC-laadpaal | DC-lader |
|---|---|---|
| **Wat levert hij** | Wisselstroom uit het net | Gelijkstroom rechtstreeks naar de accu |
| **Wie zet om** | De boordlader in de auto | De lader zelf |
| **Vermogen thuis** | 3,7 tot 22 kW | Tientallen kW, thuisuitvoeringen vanaf ongeveer 12 kW |
| **Aansluiting auto** | Type 2 | Meestal CCS |
| **Kosten en complexiteit** | Lager | Hoger |
| **Bidirectioneel (V2H, V2G)** | Meestal niet | Kan, afhankelijk van lader en auto |

Voor thuis is een AC-paal het gangbare antwoord. De snelheid wordt begrensd door de boordlader van de auto: een auto met een 11 kW-boordlader laadt niet sneller dan 11 kW, hoe krachtig de paal ook is.

?? Waarom is een DC-lader thuis interessant?
Omdat je de accu van de auto dan kunt gebruiken als opslag voor het huis (V2H) of zelfs voor het net (V2G). Dat vraagt zowel een lader die dat kan als een auto die het ondersteunt, en op dit moment is dat nog beperkt beschikbaar.
??
`
    },
    {
      id: 'vermogen',
      kop: 'Vermogen, fasen en stroom',
      tekst: `
Het laadvermogen volgt uit spanning, stroom en het aantal fasen. Dit is de bekende rekensom uit module 2, nu met een langdurige belasting.

| Uitvoering | Vermogen | Stroom | Typisch |
|---|---|---|---|
| 1-fase, 16 A | 3,7 kW | 16 A | Standaard 1-fase aansluiting |
| 1-fase, 32 A | 7,4 kW | 32 A | Vraagt een ruimere aansluiting |
| 3-fase, 16 A | 11 kW | 3 x 16 A | Veelgebruikt bij 3-fase woningen |
| 3-fase, 32 A | 22 kW | 3 x 32 A | Zelden nodig thuis |

!!! kern Denk aan de aansluiting van de woning
Een 7,4 kW-paal op een 1 x 35 A-aansluiting neemt bijna al het beschikbare vermogen. Koken, wassen en laden tegelijk laat dan de hoofdzekering afschakelen. Het antwoord heet load balancing, zie de sectie over slim laden.
!!!
`
    },
    {
      id: 'slim-laden',
      kop: 'Slim laden en load balancing',
      tekst: `
Laden duurt uren en hoeft niet altijd op vol vermogen. Een slimme paal past zich aan:

- **Dynamisch laadbeheer (load balancing).** Een sensor meet het huisverbruik en de paal verlaagt zijn vermogen als de rest van het huis meer nodig heeft. De auto laadt dan langzamer, maar de hoofdzekering blijft heel.
- **Laden op zonne-overschot.** De paal laadt alleen met wat de zonnepanelen over hebben.
- **Gepland laden.** Starten op een vast tijdstip, bijvoorbeeld 's nachts of bij een laag tarief.
- **Authenticatie.** Starten met een pas (RFID), de app of zonder controle. Bij een paal die door meer mensen wordt gebruikt is dat belangrijk.

Voor slim laden heeft de paal een verbinding nodig (wifi, bekabeld of mobiel) en, voor het meten van het huisverbruik, een sensor. Zonder die twee is de paal domweg een beveiligd stopcontact.
`
    },
    {
      id: 'installatie',
      kop: 'Wat komt er bij een installatie kijken',
      tekst: `
1. **Opname.** Aansluitwaarde, 1- of 3-fase, groepenkast, beschikbare ruimte, en de afstand van de meterkast naar de laadplek. Meet het werkelijke kabeltracé, niet hemelsbreed.
2. **Ontwerp.** Een eigen eindgroep, de juiste doorsnede voor stroom en lengte, en het aardlektype dat de fabrikant voorschrijft. Een laadpaal is een langdurige belasting op vrijwel het maximum, dus verbindingen moeten van uitstekende kwaliteit zijn.
3. **Netbeheerder.** Past de belasting nog binnen de aansluiting? In sommige regio's kan verzwaring lang duren door netcongestie. Load balancing is dan vaak het antwoord.
4. **Montage.** Op muur of paal, buiten met de juiste beschermingsgraad, met trekontlasting en waterdichte doorvoeren.
5. **Inbedrijfstelling.** Instellingen, communicatie, meting van het huisverbruik, en een test met een auto of testapparaat.
6. **Oplevering.** Metingen vastleggen, uitleg aan de klant en een overzicht van de instellingen.
`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid en let op',
      tekst: `
!!! gevaar Nooit structureel laden via een verlengsnoer
Een verlengsnoer op een haspel laat de warmte van uren belasting niet weg. Het is een klassieke oorzaak van smeltende stekkers en brand. Wie geen paal wil, heeft een vaste aansluiting nodig.
!!!

- **Aardlek.** Bij laadpalen kan een gelijkstroomlek voorkomen. Volg de voorschriften van de fabrikant: een type B aardlek, of een paal met ingebouwde gelijkstroomdetectie (vaak 6 mA) in combinatie met een type A. Zie les 6.3 over aardlektypes.
- **Eigen groep** met beveiliging afgestemd op de kabel, niet op de paal.
- **Beschermingsgraad** passend bij de plek. Een buitenpaal hoort bestand te zijn tegen regen en stoten.
- **Spanningsloos werken** volgens de vijf stappen, ook als de paal naast een zonne-installatie of batterij staat.
`
    },
    {
      id: 'valkuilen',
      kop: 'Veelgemaakte fouten',
      tekst: `
- De kabellengte schatten in plaats van meten, waardoor spanningsval of afschakeltijd niet klopt.
- Een 3-fase paal aansluiten op een 1-fase aansluiting zonder de instelling aan te passen.
- Geen load balancing bij een krappe aansluiting.
- Het aardlektype niet controleren tegen de handleiding van de paal.
- Vergeten dat de auto de snelheid bepaalt: een kleinere boordlader haalt het vermogen van de paal nooit.
`
    }
  ],

  cursusLinks: ['m10l03', 'm10l04', 'm06l03', 'm02l05', 'm04l02']
});
