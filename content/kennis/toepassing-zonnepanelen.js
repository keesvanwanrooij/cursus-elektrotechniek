KENNIS.addToepassing({
  id: 'zonnepanelen',
  slug: 'zonnepanelen-en-omvormers',
  naam: 'Zonnepanelen en omvormers',
  intro: 'Zonnepanelen maken gelijkstroom, maar het huis en het net werken op wisselstroom. Daartussen zit de omvormer. Hier lees je welke soorten omvormers er zijn, waarin ze verschillen en hoe ze samenwerken met een thuisbatterij en een laadpaal.',
  seoTitel: 'Zonnepanelen en omvormers: stringomvormer, hybride en micro-omvormer uitgelegd',
  seoBeschrijving: 'Uitleg voor beginnende installateurs over zonnepanelen en omvormers: stringomvormer, hybride omvormer en micro-omvormer, strings en MPPT, veiligheid aan de DC-kant, aansluiten en welke merken en producten er zijn.',

  onderdelen: [
    { rol: 'omvormer', uitleg: 'Zonder omvormer doet een PV-installatie niets. Een stringomvormer hangt aan een rij panelen, een hybride omvormer beheert er ook een batterij bij en een micro-omvormer zit onder elk paneel apart. Welke soort het is, bepaalt hoe je ontwerpt, aansluit en veilig werkt.' },
    { rol: 'systeem', uitleg: 'Sommige merken leveren omvormer, batterij en regeling als één geheel. Dan kies je de omvormer niet los, want hij hoort bij het systeem.' },
    { rol: 'batterij', uitleg: 'Niet verplicht. Een batterij slaat het overschot op. Bij een hybride omvormer hangt hij aan de DC-kant. Bij micro-omvormers koppel je hem aan de AC-kant, met een eigen omvormer.' },
    { rol: 'gateway', uitleg: 'Alleen nodig als de installatie bij netuitval moet blijven werken. Zonder gateway of noodstroomschakelaar gaat een netgekoppelde PV-installatie uit zodra het net wegvalt.' },
    { rol: 'sensor', uitleg: 'Meet wat het huis afneemt en teruglevert. Die meting heb je nodig voor inzicht, om teruglevering te begrenzen en om een batterij of laadpaal slim te sturen.' },
    { rol: 'app', uitleg: 'Voor de inbedrijfstelling, het bekijken van de opbrengst en storingsmeldingen, voor de klant en voor jou als installateur.' }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Hoe een PV-installatie in elkaar zit',
      tekst: `
Een zonnepaneel maakt van licht **gelijkspanning** (DC). Meestal schakel je panelen in serie tot een **string**, dus de spanningen tellen op en de stroom blijft gelijk. De omvormer maakt daar **wisselspanning** (AC) van 230 V en 50 Hz van, gelijk met het net, zodat het huis de stroom kan gebruiken en het overschot naar het net gaat.

Van dak tot meterkast ziet dat er zo uit:

1. **Panelen** op het dak, aangesloten met DC-connectoren.
2. **DC-bekabeling** naar de omvormer. Bij een stringomvormer staat daar vaak honderden volts op.
3. **De omvormer**, die ook bewaakt of het net er is en of de isolatie in orde is.
4. **AC-kabel** naar een eigen groep in de groepenkast.
5. **De meter** van de netbeheerder, die afname en teruglevering apart telt.

!!! kern Hier verschilt PV van de rest van de woning
Bij een gewone groep zet je de automaat uit en dan is de kabel spanningsloos. Bij zonnepanelen staat de DC-kant onder spanning zolang er licht op valt, ook als de omvormer en de groep uit staan. Lees daarom eerst les 10.2 voordat je aan PV werkt.
!!!

De basis van PV staat in les 10.1. Op deze pagina gaat het om de producten: welke soorten omvormers er zijn en hoe je ze herkent.
`
    },
    {
      id: 'soorten',
      kop: 'Drie soorten omvormers',
      tekst: `
| Soort | Waar zit hij | DC-spanning | Batterij | Goed om te weten |
|---|---|---|---|---|
| **Stringomvormer** | Kast aan de muur, een of meer strings erop | Hoog, vaak enkele honderden volts | Nee, of alleen AC-gekoppeld met een aparte batterijomvormer | Eenvoudig en veel gebruikt. Schaduw op één paneel drukt de opbrengst van de hele string |
| **Hybride omvormer** | Kast aan de muur, strings en batterij erop | Hoog | Ja, aan de DC-kant | Zon en batterij worden één keer omgezet. Vaak met een uitgang of gateway voor noodstroom |
| **Micro-omvormer** | Onder elk paneel, of onder twee panelen | Laag, alleen de spanning van één paneel | Ja, maar AC-gekoppeld met een eigen batterijomvormer | Elk paneel werkt los. Op het dak loopt AC in plaats van hoge DC |

Je komt ook **optimizers** tegen. Dat zijn kastjes onder elk paneel die het paneel apart regelen, maar ze hangen nog wel aan een centrale stringomvormer. Daar staan in de kennisbank nu geen producten van.

?? Welke soort is beter?
Dat hangt ervan af. Een stringomvormer is meestal het goedkoopst per wattpiek. Een hybride omvormer is logisch als er nu of later een batterij bij komt. Micro-omvormers helpen bij schaduw, bij daken met verschillende richtingen en als de klant geen hoge gelijkspanning op het dak wil. Dus het dak, het verbruik en de wensen van de klant bepalen de keuze.
??

### Zo zie je het in de kennisbank
Sigenergy en GoodWe werken met een hybride omvormer, dus zon en batterij hangen aan dezelfde DC-kant. Bij GoodWe ESA en SigenStor Home zit die omvormer in het complete systeem.

Enphase werkt met micro-omvormers per paneel. De batterij heeft dan zijn eigen omvormers en hangt aan de AC-kant.

Wat de fabrikant precies voorschrijft, lees je op de productpagina's.
`
    },
    {
      id: 'strings-en-mppt',
      kop: 'Strings, MPPT en spanning',
      tekst: `
Bij een string- of hybride omvormer bepaal je zelf hoeveel panelen in serie komen. Daarvoor moet je drie grenzen uit het gegevensblad van de omvormer kennen.

| Grens | Wat het betekent | Waarom het telt |
|---|---|---|
| **Maximale DC-ingangsspanning** | De hoogste spanning die de ingang mag zien | Ga je eroverheen, dan kan de omvormer kapotgaan. De openklemspanning (Voc) van een string is het hoogst op een koude, heldere ochtend |
| **MPPT-spanningsbereik** | Het bereik waarin de omvormer het punt met het hoogste vermogen zoekt | Valt de string erbuiten, dan levert hij minder of niets |
| **Maximale ingangsstroom per MPPT** | De stroom die een ingang aankan | Panelen met een hoge stroom passen niet altijd op elke ingang |

**MPPT** (maximum power point tracking) is de regeling die per ingang het werkpunt met het hoogste vermogen opzoekt. Heeft een omvormer twee of meer MPPT's, dan kan hij twee dakvlakken met een andere richting los van elkaar regelen.

!!! gevaar Reken de stringspanning uit bij kou
De spanning van een paneel stijgt als het kouder wordt. Een string die op een zomerdag ruim binnen de grens blijft, kan op een vriezende ochtend dus te hoog uitkomen. Reken met de gegevens van het paneel en de omvormer. Twijfel je, gebruik dan de ontwerpsoftware van de fabrikant. Bij micro-omvormers speelt dit veel minder, omdat elk paneel apart op zijn eigen omvormer zit.
!!!
`
    },
    {
      id: 'aansluiten',
      kop: 'Aansluiten op de woning',
      tekst: `
1. **Eigen groep.** Een omvormer krijgt een eigen eindgroep. De beveiliging en het aardlektype haal je uit de handleiding van de omvormer, want dat verschilt per fabrikant. De een vraagt een type A, de ander schrijft een type B of een bepaalde uitschakelstroom voor.
2. **Kabeldoorsnede en lengte.** Kies op stroom en spanningsval. Valt een omvormer uit op te hoge netspanning, dan is de AC-kabel vaak te lang of te dun.
3. **Aanmelden.** Een installatie die teruglevert meld je in Nederland aan bij de netbeheerder via energieleveren.nl. Kijk wel even of de procedure nog zo is.
4. **Netinstellingen.** Bij de inbedrijfstelling kies je het land en de netcode in de app van de fabrikant. Kies je verkeerd, dan krijg je storingen of een installatie die niet aan de eisen voldoet.
5. **Meting.** Wil de klant inzicht, teruglevering begrenzen of een batterij en laadpaal sturen, dan komt er een meter of stroomtang op de hoofdaansluiting.

!!! info Teruglevering en regelgeving
De regels voor terugleveren veranderen. Volgens het besluit van de overheid stopt de salderingsregeling op 1 januari 2027. Kijk dus altijd naar de actuele regels en het contract van de klant, want dat bepaalt of een batterij of een begrenzing van teruglevering zin heeft.
!!!
`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid',
      tekst: `
- **DC blijft spanning geven.** Zolang er licht op de panelen valt, staat de DC-kabel onder spanning. Een DC-schakelaar maakt alleen het stuk na de schakelaar vrij, niet de kabel naar het dak.
- **DC-bogen.** Een slechte connector of een losse DC-verbinding kan een vlamboog geven die niet vanzelf dooft zoals bij wisselstroom. Gebruik daarom alleen connectoren van hetzelfde type en merk, met het juiste gereedschap.
- **Nooit onder belasting losnemen.** Een DC-connector trek je niet los terwijl er stroom loopt. Zet eerst de omvormer en de DC-schakelaar uit.
- **Meerdere bronnen.** Met een batterij, een tweede omvormer of noodstroom heb je meer dan één bron. De vijf stappen uit les 1.3 gelden voor elke bron.
- **Werken op hoogte.** Op het dak heb je valbeveiliging nodig. Dat valt buiten deze cursus, maar het hoort wel bij elke PV-klus.

?? Waarom noemen fabrikanten van micro-omvormers dat veiliger?
Bij micro-omvormers loopt er op het dak geen lange string met honderden volts gelijkspanning. Er loopt AC, die uitgaat als de omvormers het net niet meer zien. De gelijkspanning blijft dus beperkt tot die van één paneel. Maar ook die spanning kan onder belasting een boog geven. En de AC-kant is gewoon 230 V.
??
`
    },
    {
      id: 'met-batterij-en-laadpaal',
      kop: 'Samen met een batterij of laadpaal',
      tekst: `
PV, batterij en laadpaal hangen steeds vaker samen. Dat kan op twee manieren.

**DC-gekoppeld.** Panelen en batterij hangen aan dezelfde hybride omvormer, dus je hebt één keer omzetten, één systeem en één app. Zo werken Sigenergy en GoodWe ESA. Bij een bestaande PV-installatie betekent het vaak wel dat de omvormer eruit gaat.

**AC-gekoppeld.** De batterij heeft een eigen omvormer en hangt aan de wisselstroomkant. Zo werkt Enphase. Het is ook de gewone manier om een batterij toe te voegen aan een bestaande installatie met een stringomvormer.

Wil de klant de auto laden op zonne-overschot, dan heeft de laadpaal een meting op de hoofdaansluiting nodig en een verbinding met het systeem of de app. Meer daarover lees je bij Thuisbatterij en Laadpaal.
`
    },
    {
      id: 'begrippen',
      kop: 'Begrippen',
      tekst: `
| Begrip | Wat het is |
|---|---|
| **Wp en kWp** | Wattpiek: het vermogen van een paneel bij standaard testomstandigheden. 10 panelen van 430 Wp is samen 4,3 kWp |
| **Voc** | Openklemspanning van een paneel, dus de spanning zonder belasting. Bepaalt de maximale stringspanning |
| **Isc** | Kortsluitstroom van een paneel. Bepaalt welke stroom een ingang moet aankunnen |
| **MPPT** | Regeling die per ingang het werkpunt met het hoogste vermogen zoekt |
| **String** | Panelen in serie op één ingang |
| **DC/AC-verhouding** | Meer paneelvermogen dan omvormervermogen. Dat is normaal tot een bepaalde grens. Het maximum staat bij de fabrikant |
| **Clipping** | De omvormer begrenst op zijn maximale vermogen, dus de rest van het paneelvermogen gaat verloren |
| **Zero-export** | Instelling waarbij je niets naar het net teruglevert |
| **Netcode** | De landinstelling met de eisen van het net, zoals grenzen voor spanning en frequentie |
`
    },
    {
      id: 'valkuilen',
      kop: 'Veelgemaakte fouten',
      tekst: `
- De stringspanning alleen bij zomertemperatuur uitrekenen.
- DC-connectoren van verschillende merken op elkaar zetten.
- Een omvormer op een groep zetten die ook andere verbruikers voedt.
- Een te dunne of te lange AC-kabel, waardoor de omvormer bij zonnig weer uitvalt op te hoge spanning.
- Het verkeerde land of de verkeerde netcode kiezen bij de inbedrijfstelling.
- Vergeten dat de DC-kant onder spanning blijft als alles uit staat.
- De installatie niet aanmelden bij de netbeheerder.
`
    }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm10l04', 'm01l03', 'm06l03', 'm04l02']
});
