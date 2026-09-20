KENNIS.addMerk({
  id: 'sigenergy',
  slug: 'sigenergy',
  naam: 'Sigenergy',
  herkomst: 'China',
  website: 'https://www.sigenergy.com',
  intro: 'Sigenergy maakt thuisenergiesystemen: hybride omvormers, batterijen, gateways voor noodstroom, laadpalen en de mySigen-app. Hier zie je in een oogopslag welk onderdeel wat doet en waar je in de handleidingen moet zijn.',

  secties: [
    {
      id: 'over-het-merk',
      kop: 'Over Sigenergy',
      tekst: `
Sigenergy ontwikkelt energieoplossingen voor woningen en bedrijven: opslagsystemen, omvormers voor zonne-energie en EV-laders. De visie is "geniet van groene energie" en de missie is het leiden in AI-gestuurde innovatie voor PV en energieopslag, met nadruk op veiligheid, eenvoud en prestaties.

Wat het merk onderscheidt, in de woorden van de brochure samengevat:

- **Alles binnen een ecosysteem.** Omvormer, batterij, gateway, sensoren, lader en app zijn op elkaar afgestemd en worden vanuit een app en een cloudplatform beheerd.
- **DC-gekoppelde architectuur.** Zonnepanelen, batterij en lader hangen aan een gezamenlijke gelijkspanningsleiding (de DC-bus), zodat er minder omgezet hoeft te worden.
- **Modulaire batterij.** Je begint met een of meer modules en breidt later uit. De brochure noemt "gemengd gebruik" van batterijpakketten, maar de voorwaarden staan in de handleiding van de batterij.
- **Noodstroom via een gateway** met een omschakeltijd die de fabrikant op 0 ms zet, mits de onderdelen samen worden gebruikt.
- **V2X.** Met de EV DC Charging Module kan de auto in de toekomst ook energie teruggeven aan het huis. De brochure zegt zelf dat dit beperkt wordt door de auto en door normen die nog moeten verschijnen.

!!! kern Lees de brochure als verkoopdocument
De brochure laat zien wat het merk kan, niet wat in jouw situatie mag of past. Voor elke keuze in de praktijk geldt de handleiding van het onderdeel dat je installeert.
!!!
`
    },
    {
      id: 'ecosysteem',
      kop: 'De familie in een oogopslag',
      tekst: `
Voor een beginner lijkt het aanbod een woud van namen. Deze tabel ordent het. De rol-kolom is de gemeenschappelijke taal van de kennisbank: dezelfde rollen zie je terug bij elke toepassing.

| Naam | Wat het is | Rol |
|---|---|---|
| **SigenStor Home** | Compleet thuisenergiesysteem: Energy Controller met batterijmodules, gateway, sensor en app | Compleet systeem |
| **Sigen Energy Controller (EC)** | De omvormer in het SigenStor-systeem, 1-fase of 3-fase | Omvormer |
| **Sigen Hybrid (SP2 en TP2)** | Dunne hybride omvormer die met een batterijcontroller en batterijmodules werkt | Omvormer |
| **SigenStor BC en BAT** | Batterijcontroller en modulaire batterij | Batterij |
| **Sigen Gateway (Home en HomePro)** | Schakelpunt voor net, batterij, zon en generator, en voor noodstroom | Gateway |
| **Sigen EV AC Charger** | Laadpaal voor wisselstroom, 7, 11 of 22 kW | Laadpaal en lader |
| **Sigen EV DC Charging Module (SigenStor EVDC)** | Bidirectionele DC-lader voor thuis | Laadpaal en lader |
| **Sigen Power Sensor en Communication Module** | Meting van stroom en vermogen, en een 4G-module voor de verbinding | Meting en sensoren |
| **mySigen-app en Sigen Cloud** | Bewaking voor de klant en beheer voor de installateur | App en cloud |
| **SigenMicro** | Micro-omvormers per paneel (400 tot 1000 W), voor dak en balkon | Omvormer |

De producten met een eigen pagina in de kennisbank vind je hieronder. Voor SigenMicro is nog geen handleiding verwerkt.
`
    },
    {
      id: 'samenhang',
      kop: 'Hoe de onderdelen samenwerken',
      tekst: `
Er zijn twee hoofdroutes om een Sigen-systeem op te bouwen. Begrijp het verschil en je weet welke handleiding je nodig hebt.

### Route 1: SigenStor Home
De **Energy Controller** is een omvormer die zonnepanelen en batterij regelt. Daaraan hang je een of meer **BAT-modules**. Samen met de gateway, een sensor en de app vormen ze het SigenStor Home-systeem. De 1-fase en 3-fase versies hebben elk hun eigen handleidingen.

### Route 2: Hybrid-omvormer met batterij
Je begint met een **Sigen Hybrid-omvormer** (SP2 voor 1-fase, TP2 voor 3-fase). De batterij sluit je via een **SigenStor BC** (batterijcontroller) met **BAT-modules** aan. Dit is de route als je een omvormer wilt kiezen op basis van het aantal panelen en fasen en de batterij apart wilt schalen.

### Wat er bij beide bij hoort
- Een **Gateway** als de klant noodstroom wil. Zonder gateway is er geen back-up.
- Een **Power Sensor** op het aansluitpunt van het net, zodat het systeem huisverbruik en teruglevering kan meten.
- De **mySigen-app** voor het aanmaken en instellen van het systeem.
- Een **EV-lader** als de klant een auto laadt: AC voor de gewone laadpaal, DC voor bidirectioneel laden.

!!! info Namen lezen
**SP** staat voor 1-fase en **TP** voor 3-fase. Het getal is het vermogen in kW, dus een 5.0 TP is een 3-fase omvormer van 5 kW. **EC** is de Energy Controller, **BC** de batterijcontroller, **BAT** de batterijmodule, **EVAC** en **EVDC** de AC- en DC-lader. **A1** is een uitvoeringsversie van het complete systeem.
!!!
`
    },
    {
      id: 'handleidingen',
      kop: 'Welke handleiding bij welke vraag',
      tekst: `
De handleidingen zijn volgens een vast patroon opgebouwd. Als je het patroon kent, weet je meteen waar je moet zoeken.

| Document | Voor wie | Waarvoor |
|---|---|---|
| **Beknopte handleiding** | Installateur en gebruiker | Eerste overzicht, vooral tekeningen |
| **Gebruikershandleiding** | Eindgebruiker | Bediening, app en dagelijks gebruik |
| **01 Belangrijke informatie** | Installateur | Veiligheid, transport, opslag, algemene regels |
| **02 Installatiegids** | Installateur | Montage, aansluiting, inbedrijfstelling |
| **03 Lijst van alarmeringen** | Installateur | Alle foutcodes met oorzaak en aanbeveling |
| **04 Onderhoud** | Installateur | Vervangen en onderhouden van onderdelen |
| **Brochure en datasheet** | Verkoop en ontwerp | Overzicht en specificaties |

Twee praktische tips: de paginaverwijzingen in de kennisbank zijn pdf-paginanummers (de eerste pagina is 1) en de handleidingen bestaan in versies. Controleer de versie op de titelpagina van het document dat je gebruikt, want getallen en schakelaargroottes kunnen tussen versies verschillen.
`
    },
    {
      id: 'veiligheid',
      kop: 'Algemene veiligheidsregels van Sigenergy',
      tekst: `
De documenten "Belangrijke informatie" van de Gateway, de Hybrid-omvormers en SigenStor Home volgen dezelfde opzet en herhalen dezelfde basisregels. Die vormen de veiligheidsbasis voor elk Sigen-product.

- **Kwalificatie.** De documenten zijn bedoeld voor opgeleid installatiepersoneel. Wie installeert moet de lokale wetten en normen kennen, de werking van het systeem begrijpen en de kwalificaties hebben die het land vraagt. Sigenergy is niet aansprakelijk bij een onjuiste installatieomgeving, kabels of gereedschap die niet aan de normen voldoen, het negeren van labels en instructies, of ongeautoriseerde wijzigingen.
- **Spanningsloos werken.** Werk niet onder spanning, meet de spanning op het contactpunt voordat je een klem aanraakt en koppel de schakelaars voor en achter het apparaat los. Voor onderhoud schakel je uit en wacht je zoals het vertragingslabel op het apparaat aangeeft. De documenten geven zelf geen wachttijd in minuten.
- **Aarding eerst.** Sluit de aardkabel als eerste aan en verwijder hem bij vervanging als laatste.
- **Persoonlijke bescherming.** Isolatiehandschoenen, isolerende schoenen, helm, isolerend gereedschap, geen metalen sieraden. Werk niet door bij vervorming of een vreemde geur.
- **Kabels, ladders en boren.** Geen beschadigde isolatie, aandacht voor scherpe randen, niet kruisen. Kabels die lang onder 0 graden lagen, leg je eerst 24 uur boven 0 graden. Ladders en boren alleen met de juiste training en een tweede persoon als toezicht.
- **Transport en opslag.** Niet kantelen, langzaam tillen, nooit onder een heftruckvork lopen. Voor opslagtemperaturen en vochtigheid geldt per product de handleiding. Batterijen vallen onder de gevaarlijke goederen (klasse 9) en de SigenStor-documenten zijn strenger over opslag en laadtoestand.
- **Batterij.** Een pakket dat is gevallen, een schok heeft gehad of nat is geworden, gebruik je niet meer zonder beoordeling door een vakman. Vervang alleen met pakketten van Sigenergy en meng geen merken. Een defect pakket kan heet zijn en brandbare en giftige gassen afgeven.

!!! gevaar Wat deze documenten niet zeggen
De regels over de gelijkspanningszijde en de batterij staan vooral in de SigenStor-documenten, niet in die van de Gateway en de Hybrid. Milieu, afdanking en toestemming van de netbeheerder komen in deze drie documenten niet uitgebreid aan bod. Pas die dus toe vanuit de cursus (module 1 en les 10.2) en de lokale regels.
!!!
`
    },
    {
      id: 'alarmen',
      kop: 'Alarmen en foutcodes',
      tekst: `
Alle Sigen-omvormers en gateways delen dezelfde **Lijst van alarmeringen** (23 pagina's, versie 05 van oktober 2025). Hij staat in de installateurshandleidingen van de Hybrid-omvormers en de Gateway-varianten.

### Hoe je een alarm leest
Elke rij heeft een **foutcode** (vier cijfers), een **foutnaam**, een **ID** (het subalarm binnen die code), een **ID-naam**, de **oorzaak** en een **aanbeveling voor reparatie**. Een alarm is dus code plus ID. De cellen in de pdf zijn samengevoegd: een tekstblok geldt vaak voor meerdere ID's, dus lees het hele blok naast de code.

### Waar de codes over gaan
| Codes | Onderwerp |
|---|---|
| 1001 tot 1031 | Omvormer: PV-strings, het net, lekstroom, communicatie, isolatie, temperatuur, nulleider en de ingebouwde gateway |
| 2001 tot 2304 | Energieopslag en batterij: versies, isolatie, temperatuur, spanning van modules, vermogensbeperking |
| 3001 tot 3019 | Gateway: temperatuur, relais, net, generator, belasting, noodstop, bypass |
| 4001 tot 4006 | Kast en aansluitingen: deur, onderbrekers, meter en sensor, netvermogenslimiet |
| 5001 tot 5106 | EV-laders: net, lekstroom, aarding, laadkabel, temperatuur |

### Drie soorten reactie
Het document noemt geen ernstniveaus, maar in de aanbevelingen zie je drie soorten:

1. **Het herstelt vanzelf.** Wachten tot het net, de belasting of de temperatuur weer normaal is.
2. **Handmatig wissen of herstarten.** Een alarm in de app wissen of het apparaat via de vaste procedure uit- en inschakelen.
3. **Storingsrapport.** Blijft het terugkomen, dan meld je het via de mySigen-app (Support, troubleshooting) of neem je contact op met Sigenergy.

### Een vaste aanpak
1. Noteer foutcode, ID en ID-naam uit de app.
2. Zoek de code op en lees oorzaak en aanbeveling van het hele blok.
3. Kijk of het een eenmalige verstoring was. Meestal koppelt het apparaat dan zelf weer aan.
4. Controleer wat de lijst noemt: netspanning en frequentie meten, kabels en aansluitingen, ventilatie, direct zonlicht.
5. Voor een herstart: standby of uit via de app, DC- en AC-schakelaars uit, een paar minuten wachten tot alles uit is, en dan weer in.
6. Bij polariteit of stringproblemen wacht je tot de stringstroom onder 0,5 A is en zet je eerst de DC-schakelaar uit.
7. Beveiligingswaarden voor het net pas aanpassen met toestemming van de lokale elektriciteitsmaatschappij.

### Voorbeelden
| Code | Betekenis | Meestal |
|---|---|---|
| 1002 | Lage isolatieweerstand | Aardsluiting op de PV-string of een lang vochtige omgeving: DC-kabel nameten |
| 1006 | Hoge PV-stringspanning | Te veel panelen in serie: stringspanning meten en aantal verlagen |
| 1007 | PV-string omgekeerd aangesloten | Wachten tot de stroom onder 0,5 A is en polariteit herstellen |
| 1010 tot 1014 | Netuitval, netspanning of netfrequentie | Meestal koppelt het apparaat zelf weer aan, anders het net meten |
| 1023 | Abnormale nulleider | Nulaansluiting en fasevolgorde controleren |
| 2110 | Clustervermogen batterij beperkt | Cluster uit- en inschakelen, ventilatie en zon controleren |
| 4005 | Netvoedingsvermogen boven de limiet | Terugstroombeveiliging instellen op een toegestane waarde |

?? Waarom pas op met exacte codes?
De alarmlijst is een pdf met samengevoegde cellen, en de Nederlandse tekst bevat schrijffouten. Bij twijfel is de originele pagina leidend. In de kennisbank verwijzen we naar de pagina's zodat je die snel vindt.
??
`
    }
  ],

  begrippen: [
    { term: 'EC (Energy Controller)', uitleg: 'De omvormer in het SigenStor-systeem. Regelt zonnepanelen, batterij en de energiestromen.' },
    { term: 'BC (Battery Controller)', uitleg: 'Batterijcontroller die batterijmodules (BAT) aan een Hybrid-omvormer koppelt.' },
    { term: 'BAT', uitleg: 'Een batterijmodule van het SigenStor-systeem. Er hangen meerdere aan een controller.' },
    { term: 'SP en TP', uitleg: 'SP betekent 1-fase, TP betekent 3-fase, bijvoorbeeld in 5.0 SP en 5.0 TP.' },
    { term: 'Gateway', uitleg: 'Schakelpunt tussen net, systeem en huis. Nodig voor noodstroom.' },
    { term: 'Back-up of EPS', uitleg: 'Noodstroom: het huis blijft voorzien als het net uitvalt.' },
    { term: 'DC-bus', uitleg: 'De gezamenlijke gelijkspanningsleiding waar PV, batterij en lader aan hangen.' },
    { term: 'MPPT', uitleg: 'Regeling die per groep zonnepanelen het punt met het hoogste vermogen opzoekt.' },
    { term: 'String', uitleg: 'Een rij zonnepanelen in serie, aangesloten op een MPPT-ingang.' },
    { term: 'EMS', uitleg: 'Energiemanagementsysteem: de software die bepaalt wanneer het systeem laadt, ontlaadt of het net gebruikt.' },
    { term: 'V2X, V2H, V2G', uitleg: 'Een auto die energie teruggeeft aan het huis (V2H) of het net (V2G).' },
    { term: 'AFCI', uitleg: 'Boogdetectie: herkent een vonkende verbinding in de DC-bedrading van de panelen.' },
    { term: 'CT en sensor', uitleg: 'Een stroomtang of meetmodule die stroom en vermogen op de aansluiting van het huis meet.' }
  ],

  overigeProducten: [
    { naam: 'SigenMicro', rol: 'omvormer', omschrijving: 'Micro-omvormer per paneel of per twee panelen (400, 500, 800 en 1000 W), bedoeld voor dak en balkon. In de brochure beschreven, nog geen handleiding in de kennisbank.' }
  ]
});
