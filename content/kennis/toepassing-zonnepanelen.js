KENNIS.addToepassing({
  id: 'zonnepanelen',
  slug: 'zonnepanelen-en-omvormers',
  naam: 'Zonnepanelen en omvormers',
  intro: 'Zonnepanelen maken gelijkstroom, het huis en het net werken op wisselstroom. Daartussen zit de omvormer. Hier leer je welke soorten omvormers er zijn, hoe ze verschillen en hoe ze samenwerken met een thuisbatterij en een laadpaal.',
  seoTitel: 'Zonnepanelen en omvormers: stringomvormer, hybride en micro-omvormer uitgelegd',
  seoBeschrijving: 'Uitleg voor beginnende installateurs over zonnepanelen en omvormers: stringomvormer, hybride omvormer en micro-omvormer, strings en MPPT, veiligheid aan de DC-kant, aansluiten en welke merken en producten er zijn.',

  onderdelen: [
    { rol: 'omvormer', uitleg: 'Het hart van elke PV-installatie. Een stringomvormer hangt aan een rij panelen, een hybride omvormer kan er ook een batterij bij beheren, en een micro-omvormer zit onder elk paneel apart. Welke soort het is, bepaalt hoe je ontwerpt, aansluit en veilig werkt.' },
    { rol: 'systeem', uitleg: 'Sommige merken leveren omvormer, batterij en regeling als een geheel. Dan is de omvormer niet los te kiezen, maar onderdeel van het systeem.' },
    { rol: 'batterij', uitleg: 'Optioneel. Een batterij slaat het overschot op. Bij een hybride omvormer hangt hij aan de DC-kant, bij micro-omvormers wordt hij aan de AC-kant gekoppeld met een eigen omvormer.' },
    { rol: 'gateway', uitleg: 'Alleen nodig als de installatie bij netuitval moet blijven werken. Zonder gateway of noodstroomschakelaar schakelt een netgekoppelde PV-installatie uit zodra het net wegvalt.' },
    { rol: 'sensor', uitleg: 'Meet wat het huis afneemt en teruglevert. Nodig voor inzicht, voor het begrenzen van teruglevering en voor slim sturen van batterij en laadpaal.' },
    { rol: 'app', uitleg: 'Inbedrijfstelling, bewaking van de opbrengst en storingsmeldingen, voor de klant en de installateur.' }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Hoe een PV-installatie in elkaar zit',
      tekst: `
Een zonnepaneel zet licht om in **gelijkspanning** (DC). Panelen worden meestal in serie geschakeld tot een **string**: de spanningen tellen op, de stroom blijft gelijk. De omvormer maakt van die gelijkspanning **wisselspanning** (AC) van 230 V en 50 Hz, synchroon met het net, zodat het huis de stroom kan gebruiken en het overschot naar het net kan.

De keten van dak tot meterkast:

1. **Panelen** op het dak, aangesloten met DC-connectoren.
2. **DC-bekabeling** naar de omvormer, bij een stringomvormer vaak honderden volts.
3. **De omvormer**, die ook bewaakt of het net er is en of de isolatie in orde is.
4. **AC-kabel** naar een eigen groep in de groepenkast.
5. **De meter** van de netbeheerder, die afname en teruglevering apart telt.

!!! kern Het belangrijkste verschil met de rest van de woninginstallatie
Bij een gewone groep haal je de automaat eruit en is de kabel spanningsloos. Bij zonnepanelen staat de DC-kant onder spanning zolang er licht op valt, ook als de omvormer en de groep uit staan. Lees les 10.2 voordat je aan PV werkt.
!!!

De basis van PV staat in les 10.1 van de cursus. Deze pagina is de kapstok voor de producten: welke soorten omvormers er zijn en hoe je ze herkent.
`
    },
    {
      id: 'soorten',
      kop: 'Drie soorten omvormers',
      tekst: `
| Soort | Waar zit hij | DC-spanning | Batterij | Goed om te weten |
|---|---|---|---|---|
| **Stringomvormer** | Een kast aan de muur, een of meer strings erop | Hoog, vaak enkele honderden volts | Nee, of alleen AC-gekoppeld met een aparte batterijomvormer | Eenvoudig en veel gebruikt. Schaduw op een paneel drukt de opbrengst van de hele string |
| **Hybride omvormer** | Een kast aan de muur, strings en batterij erop | Hoog | Ja, aan de DC-kant | Een keer omzetten voor zon en batterij. Vaak met een uitgang of gateway voor noodstroom |
| **Micro-omvormer** | Onder elk paneel, of onder twee panelen | Laag, alleen de spanning van een paneel | Ja, maar AC-gekoppeld met een eigen batterijomvormer | Elk paneel werkt los. Op het dak loopt AC in plaats van hoge DC |

Daarnaast bestaan **optimizers**: kastjes onder elk paneel die het paneel apart regelen, maar nog wel aan een centrale stringomvormer hangen. In de kennisbank staan daar nu geen producten van.

?? Welke soort is beter?
Geen enkele is altijd beter. Een stringomvormer is meestal het goedkoopst per wattpiek. Een hybride omvormer is logisch als er nu of later een batterij bij komt. Micro-omvormers helpen bij schaduw, daken met verschillende richtingen en als de klant geen hoge gelijkspanning op het dak wil. Het ontwerp hangt af van het dak, het verbruik en de wensen van de klant.
??

### Zo zie je het in de kennisbank
- **Sigenergy** en **GoodWe** werken met een hybride omvormer: zon en batterij aan dezelfde DC-kant. Bij GoodWe ESA en SigenStor Home zit die omvormer in het complete systeem.
- **Enphase** werkt met micro-omvormers per paneel. De batterij heeft dan zijn eigen omvormers en wordt aan de AC-kant gekoppeld.

Op de pagina's van de producten zelf staat wat de fabrikant precies voorschrijft.
`
    },
    {
      id: 'strings-en-mppt',
      kop: 'Strings, MPPT en spanning',
      tekst: `
Bij een string- of hybride omvormer bepaal je zelf hoeveel panelen in serie komen. Drie grenzen uit het gegevensblad van de omvormer moet je kennen:

| Grens | Wat het betekent | Waarom het telt |
|---|---|---|
| **Maximale DC-ingangsspanning** | De hoogste spanning die de ingang mag zien | Wordt die overschreden, dan kan de omvormer kapot gaan. De openklemspanning (Voc) van een string is het hoogst op een koude, heldere ochtend |
| **MPPT-spanningsbereik** | Het bereik waarin de omvormer het punt met het hoogste vermogen zoekt | Valt de string erbuiten, dan levert hij minder of niets |
| **Maximale ingangsstroom per MPPT** | De stroom die een ingang aankan | Panelen met een hoge stroom passen niet altijd op elke ingang |

**MPPT** (maximum power point tracking) is de regeling die per ingang het werkpunt met het hoogste vermogen opzoekt. Een omvormer met twee of meer MPPT's kan twee dakvlakken met een andere richting los van elkaar regelen.

!!! gevaar Reken de stringspanning bij kou
De spanning van een paneel stijgt als het kouder wordt. Een string die op een zomerdag ruim binnen de grens blijft, kan op een vriezende ochtend te hoog uitkomen. Rekenen doe je met de gegevens van het paneel en de omvormer, en bij twijfel met de ontwerpsoftware van de fabrikant. Bij micro-omvormers speelt dit veel minder, omdat elk paneel apart op zijn omvormer zit.
!!!
`
    },
    {
      id: 'aansluiten',
      kop: 'Aansluiten op de woning',
      tekst: `
1. **Eigen groep.** Een omvormer krijgt een eigen eindgroep. De beveiliging en het aardlektype volgen uit de handleiding van de omvormer. Sommige fabrikanten vragen een type A, andere laten een type B of een bepaalde uitschakelstroom voorschrijven.
2. **Kabeldoorsnede en lengte.** Kies op stroom en spanningsval. Een omvormer die bij een te hoge netspanning uitschakelt, heeft vaak een te lange of te dunne AC-kabel.
3. **Aanmelden.** Een installatie die teruglevert meld je in Nederland aan bij de netbeheerder, via energieleveren.nl. Controleer de actuele procedure.
4. **Netinstellingen.** Bij inbedrijfstelling kies je het land en de netcode in de app van de fabrikant. Een verkeerde instelling geeft storingen of een installatie die niet aan de eisen voldoet.
5. **Meting.** Als de klant inzicht wil, teruglevering moet begrenzen of een batterij en laadpaal wil sturen, komt er een meter of stroomtang op de hoofdaansluiting.

!!! info Teruglevering en regelgeving
De regels voor terugleveren veranderen. Volgens het besluit van de overheid stopt de salderingsregeling op 1 januari 2027. Controleer altijd de actuele regels en het contract van de klant, want dit bepaalt of een batterij of een begrenzing van teruglevering zinvol is.
!!!
`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid',
      tekst: `
- **DC blijft spanning geven.** Zolang er licht op de panelen valt, staat de DC-kabel onder spanning. Een DC-schakelaar maakt alleen het stuk na de schakelaar vrij, niet de kabel naar het dak.
- **DC-bogen.** Een slechte connector of een losse DC-verbinding kan een vlamboog geven die niet vanzelf dooft, zoals bij wisselstroom. Gebruik alleen passende connectoren van hetzelfde type en merk, en het juiste gereedschap.
- **Nooit onder belasting losnemen.** Een DC-connector trek je niet los terwijl er stroom loopt. Schakel eerst de omvormer en de DC-schakelaar uit.
- **Meerdere bronnen.** Met een batterij, een tweede omvormer of een noodstroomvoorziening heb je meer dan een bron. De vijf stappen uit les 1.3 gelden voor elke bron.
- **Werken op hoogte.** Dakwerk vraagt valbeveiliging. Dat valt buiten deze cursus, maar het hoort bij elke PV-klus.

?? Waarom vinden fabrikanten van micro-omvormers dat veiliger?
Bij micro-omvormers loopt er op het dak geen lange string met honderden volts gelijkspanning, maar AC die uitschakelt als de omvormers het net niet meer zien. De gelijkspanning blijft beperkt tot die van een paneel. Dat neemt niet weg dat ook die spanning onder belasting een boog kan geven, en de AC-kant is gewoon 230 V.
??
`
    },
    {
      id: 'met-batterij-en-laadpaal',
      kop: 'Samen met een batterij of laadpaal',
      tekst: `
PV, batterij en laadpaal hangen in de praktijk steeds vaker samen. Twee manieren:

- **DC-gekoppeld.** Panelen en batterij hangen aan dezelfde hybride omvormer. Een keer omzetten, een systeem, een app. Dit is de opbouw van Sigenergy en GoodWe ESA. Bij een bestaande PV-installatie betekent het vaak dat de omvormer vervangen wordt.
- **AC-gekoppeld.** De batterij heeft een eigen omvormer en hangt aan de wisselstroomkant. Dit is de opbouw van Enphase, en de gebruikelijke manier om een batterij toe te voegen aan een bestaande installatie met een stringomvormer.

Een laadpaal die op zonne-overschot kan laden, heeft een meting nodig op de hoofdaansluiting en een verbinding met het systeem of de app. Zie de toepassingen Thuisbatterij en Laadpaal.
`
    },
    {
      id: 'begrippen',
      kop: 'Begrippen',
      tekst: `
| Begrip | Wat het is |
|---|---|
| **Wp en kWp** | Wattpiek: het vermogen van een paneel bij standaard testomstandigheden. Een installatie van 10 panelen van 430 Wp is 4,3 kWp |
| **Voc** | Openklemspanning van een paneel: de spanning zonder belasting. Bepaalt de maximale stringspanning |
| **Isc** | Kortsluitstroom van een paneel. Bepaalt de stroom die een ingang moet kunnen hebben |
| **MPPT** | Regeling die per ingang het werkpunt met het hoogste vermogen zoekt |
| **String** | Panelen in serie op een ingang |
| **DC/AC-verhouding** | Meer paneelvermogen dan omvormervermogen. Normaal tot een bepaalde grens, de fabrikant noemt het maximum |
| **Clipping** | De omvormer begrenst op zijn maximale vermogen, de rest van het paneelvermogen gaat verloren |
| **Zero-export** | Instelling waarbij niets naar het net wordt teruggeleverd |
| **Netcode** | De landinstelling met de eisen van het net, zoals grenzen voor spanning en frequentie |
`
    },
    {
      id: 'valkuilen',
      kop: 'Veelgemaakte fouten',
      tekst: `
- De stringspanning alleen bij zomertemperatuur controleren.
- DC-connectoren van verschillende merken op elkaar zetten.
- Een omvormer op een groep zetten die ook andere verbruikers voedt.
- De AC-kabel te dun of te lang maken, waardoor de omvormer bij zonnig weer afschakelt op te hoge spanning.
- De verkeerde netcode of het verkeerde land kiezen bij inbedrijfstelling.
- Vergeten dat de DC-kant onder spanning blijft als alles uit staat.
- De klant niet aanmelden bij de netbeheerder.
`
    }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm10l04', 'm01l03', 'm06l03', 'm04l02']
});
