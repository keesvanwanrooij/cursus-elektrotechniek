/* Productpagina: SigenStor-batterij (BC-controller en BAT-modules).
   Samenvatting in eigen woorden van de Sigenergy-documentatie, met verwijzingen naar
   hoofdstuk en pagina (PDF-paginanummer, 1 = eerste pagina). */

KENNIS.addProduct({
  id: 'sigenergy-batterij',
  merk: 'sigenergy',
  slug: 'batterij',
  naam: 'SigenStor-batterij (BC-controller en BAT-modules)',
  rol: 'batterij',
  toepassingen: ['thuisbatterij'],

  korteOmschrijving: 'De batterijcontroller SigenStor BC en de batterijmodules SigenStor BAT vormen samen het energieopslagsysteem dat je op een Sigen Hybrid-omvormer (SP2 of TP2) of op een Energy Controller aansluit. Let op: de installatiegids voor het BC/BAT-systeem zit niet in de kennisbank, alleen de veiligheidskennisgeving, de brochure en de gidsen van de omvormers.',

  varianten: {
    kop: ['Eigenschap', 'SigenStor BAT 6.0', 'SigenStor BAT 10.0'],
    rijen: [
      ['Totale energiecapaciteit', '6.02 kWh', '9.04 kWh'],
      ['Beschikbare (bruikbare) energiecapaciteit', '5.84 kWh', '8.76 kWh'],
      ['Type cel', 'LiFePO4 (LFP), 314 Ah', 'LiFePO4 (LFP), 314 Ah'],
      ['Levensduur van de cyclus', '10000 cycli (zie voorwaarden)', '10000 cycli (zie voorwaarden)'],
      ['Ontlaaddiepte', '100%', '100%'],
      ['Max. laad- en ontlaadvermogen', '3000 W', '4600 W'],
      ['Piekvermogen (10 seconden)', '4500 W', '6900 W'],
      ['Gewicht', '62 kg', '78 kg'],
      ['Afmetingen (B / H / D)', '767 / 270 / 265 mm', '767 / 270 / 265 mm']
    ]
  },

  documenten: [
    { id: 'kg', titel: '01-SigenStor BC-energieopslagsysteem Belangrijke kennisgeving_NL', soort: 'Belangrijke kennisgeving', paginas: 15 },
    { id: 'br', titel: 'Brochure - Thuis Energieoplossing', soort: 'Brochure', paginas: 23 },
    { id: 'dp', titel: 'Data papier - Sigen hybride omvormer voor België', soort: 'Datablad', paginas: 2 },
    { id: 'sp2', titel: '02-Installatiegids voor Sigen Hybrid (2.0-6.0) SP2-serie_NL', soort: 'Installatiegids', paginas: 20 },
    { id: 'tp2', titel: '02-Installatiegids voor Sigen Hybrid (3.0-12.0) TP2-serie_NL', soort: 'Installatiegids', paginas: 20 },
    { id: 'home', titel: '02-Installatiegids voor SigenStor Home - Driefasensysteem A1_ NL', soort: 'Installatiegids', paginas: 44 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het',
      tekst: `
### De bouwstenen

Het batterijsysteem van Sigenergy bestaat uit twee soorten onderdelen:

- **SigenStor BAT** is de batterijmodule: een behuizing met accucellen. De brochure beschrijft de types BAT 6.0 en BAT 10.0.
- **SigenStor BC** is de batterijcontroller: het onderdeel tussen de modules en de omvormer. Aan één controller kun je 1 tot 6 modules hangen.

Een **cel** is de kleinste eenheid die energie opslaat, vergelijk het met één penlite. Een **module** bevat meerdere cellen. Sigenergy gebruikt cellen van 314 Ah (ampère-uur: hoeveel lading er in de cel past) met **LFP**-chemie, de afkorting voor lithium-ijzerfosfaat (LiFePO4). In de brochure staat dat de cellen zijn gemaakt voor 10.000 **cycli**. Een cyclus is één keer volledig laden en ontladen.

### Wat doet de controller?

De handleidingen in de kennisbank leggen niet uit wat de BC intern doet. Wat ze wel zeggen:

- Wie een Sigen Hybrid SP2 of TP2 op de Sigen-batterij aansluit, **moet** een BC gebruiken (voetnoot 4 bij de specificaties in de brochure).
- De BC en de modules praten met elkaar via **CAN**, een veelgebruikt communicatiesysteem in batterijen en voertuigen.
- Op de omvormer zit een aparte COM-aansluiting voor de verbinding met de SigenStor BC.

### Waarom modulair?

De brochure noemt als voordelen: nieuwe en oude modules mengen, eenvoudig uitbreiden en optimalisatie per pakket, met actieve balancering (het gelijktrekken van de laadtoestand tussen modules). Je begint klein en breidt later uit, tot 6 modules per controller.

!!! info Mengen is niet altijd hetzelfde
De brochure bedoelt het mengen van nieuwe en oude **Sigen**-modules. De veiligheidskennisgeving verbiedt het mengen met batterijen van **andere merken** en het combineren met omvormers van andere merken.
!!!
`
    },
    {
      id: 'plek-in-systeem',
      kop: 'Plek in het systeem',
      tekst: `
### DC-gekoppeld aan de omvormer

De brochure beschrijft een **DC-gekoppelde architectuur**: PV, batterij en de EV-lader zitten op een gezamenlijke gelijkspanningsverbinding, de DC-bus. De batterij hangt dus aan de gelijkspanningskant, net als de zonnepanelen.

De keten in de bronnen:

**PV-panelen + Sigen Hybrid SP2/TP2 (of Energy Controller) - SigenStor BC - SigenStor BAT (1 tot 6 modules)**

Op de omvormer zit een batterij-ingang met de markering BAT+/BAT-, plus een COM-poort met een aansluiting voor de SigenStor BC. In de kabeltabel staat een CAT6-netwerkkabel van omvormer naar accu, maximaal 20 m per kabel.

### Spanningsbereik en compatibiliteit

| Omvormer | Spanningsbereik batterijmodules |
|---|---|
| Sigen Hybrid SP2 (eenfase, 2.0-6.0 kW) | 300 ~ 600 V |
| Sigen Hybrid TP2 (driefase, 3.0-12.0 kW) | 600 ~ 900 V |

De BAT-modules zijn volgens de brochure compatibel met de SigenStor EC-serie en de Sigen Hybrid SP2/TP2-serie. De BC wordt genoemd bij de Sigen Hybrid SP2/TP2-serie. Hoe een BAT-stapel precies op de EC wordt gekoppeld, staat niet in deze samenvatting.

### Noodstroom

Voor noodstroom komt de Sigen Gateway erbij: 0 ms onderbreking aan de belastingszijde, mits Gateway, omvormer en Sigen-batterij samen worden gebruikt (brochure). Zie de pagina over de gateway.
`
    },
    {
      id: 'specificaties',
      kop: 'Specificaties in het kort',
      tekst: `
De belangrijkste getallen (capaciteit, vermogen, gewicht, afmetingen) staan in de tabel bovenaan deze pagina. Hieronder de rest, allemaal uit de brochure, pagina 11.

### BAT 6.0 en 10.0: gemeenschappelijk

| Eigenschap | Waarde |
|---|---|
| Opslagtemperatuur | -25 ~ 60 °C |
| Bedrijfstemperatuur | -20 ~ 55 °C |
| Relatieve vochtigheid | 5% ~ 95% |
| Max. werkhoogte | 4000 m |
| Koeling | Natuurlijke convectie |
| Beschermingsklasse | IP66 |
| Montage | Vloer of muur |
| Modules per controller | 1 ~ 6 |
| Normen | IEC/EN 60730-1, UN 38.3, IEC/EN 62619, IEC/EN 63056, IEC/EN 62477 |

### SigenStor BC (controller)

| Eigenschap | Waarde |
|---|---|
| Bedrijfsspanningsbereik eenfase | 300 ~ 600 V |
| Bedrijfsspanningsbereik driefase | 600 ~ 900 V |
| Gewicht | 8 kg |
| Afmetingen (B / H / D) | 765 / 109 / 260 mm (zonder decoratieve afdekking) |
| Compatibele batterij | SigenStor BAT-serie |
| Compatibele omvormer | Sigen Hybrid SP2/TP2-serie |
| Communicatie | CAN |

### Wat de getallen betekenen

- **Beschikbare capaciteit** is de bruikbare energie, iets onder de totale capaciteit. **Ontlaaddiepte (DoD)** is hoeveel je mag leegtrekken: Sigenergy noemt 100%.
- De **10.000 cycli** gelden onder voorwaarden: 25 ± 2 °C, laden en ontladen met 0,5C (een halve capaciteit per uur) en tot een **SOH** van 60%. SOH (state of health) is hoeveel capaciteit de batterij nog heeft ten opzichte van nieuw. Het cijfer komt van de celfabrikant.
- Een batterij die volledig leeg is geweest, moet **binnen 7 dagen** weer worden opgeladen om gezond te blijven (voetnoot 3).

Het datablad van Sigenergy zegt dat gegevens zonder voorafgaande kennisgeving kunnen wijzigen. Gebruik voor een offerte altijd de actuele documentatie.
`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid en let op',
      tekst: `
### Vijf beveiligingslagen

De brochure noemt vijf lagen bescherming rond de batterij:

1. Temperatuurbewaking op celniveau
2. Een interne brandbluskit
3. Geïsoleerde kussens met hoge temperatuursweerstand
4. Pads met aerogel-isolatie
5. Een decompressieklep (laat druk ontsnappen)

De status van de batterij is in real time te volgen in de mySigen-app.

### Brandrisico

Volgens de kennisgeving hebben batterij-energieopslagsystemen een hoog brandrisico. Defecte pakketten kunnen brandbare en giftige gassen afgeven en aan de buitenkant erg heet zijn: niet met blote handen aanraken. Vervangen mag alleen door of onder toezicht van professionals.

!!! gevaar Niet werken onder spanning
Voer geen handelingen uit zolang de apparatuur is ingeschakeld. Zet vooraf alle voeding uit: net, omvormer en dieselgenerator. Meet de spanning op het aansluitpunt voordat je een klem aanraakt. Sluit bij het aansluiten eerst de aarde aan en haal die bij het verwijderen als laatste los. (Hoofdstuk 5.1)
!!!

### Wat je niet doet

- Een module gebruiken die gevallen is, een schok kreeg of in het water heeft gelegen.
- In het apparaat boren, of het schoonmaken met water, alcohol of olie.
- Mengen met batterijen of omvormers van andere merken: dan is de fabrikant niet aansprakelijk.
- Doorgaan bij een vervormde behuizing of een vreemde geur.

Installeren en onderhouden mag alleen getraind, gecertificeerd personeel (Hoofdstuk 2).

### Transport

De apparatuur valt onder gevaarlijke goederen klasse 9 en is goedgekeurd volgens UN38.3. Belangrijk voor je bus:

- Verpakt maximaal 15° kantelen, uitgepakt maximaal 10°.
- Nooit samen met brandbare, explosieve of corrosieve stoffen, en niet met voedsel, medicijnen of dierenvoer. Moet het toch samen met gewone goederen, dan is de tussenruimte 0,8 m met isolatie ertussen (het vergelijkingsteken is in de tekst onleesbaar, controleer in de pdf of dit een minimum is).
- Per spoor en door de lucht is vervoer verboden. Over de weg geldt ADR, over zee de IMDG-code.

### Opslag

Opgeslagen batterijen bewaar je apart van andere spullen, met blusmiddelen in de buurt, droog, uit de zon en beschermd tegen ongedierte. De opslagtemperatuur is -25 tot 60 °C, aanbevolen 20 tot 30 °C. Zet de batterij weg op **40% ± 5% SOC** (state of charge: laadtoestand). Daarna moet je op tijd bijladen:

| Werkelijke opslagtemperatuur | Oplaadperiode |
|---|---|
| onder -25 °C | niet toegestaan |
| -25 tot 25 °C | 15 maanden |
| 25 tot 35 °C | 9 maanden |
| 35 tot 60 °C | 6 maanden |
| boven 60 °C | niet toegestaan |

Na de eerste 12 maanden bewaren is het onomkeerbare capaciteitsverlies 3% tot 10%. Oudere voorraad moet vóór gebruik door gekwalificeerd personeel worden gecontroleerd.

`
    },
    {
      id: 'installatie',
      kop: 'Installatie en plaatsing',
      tekst: `
!!! kern Wat hier ontbreekt
De installatiegids voor het BC/BAT-systeem zit niet in de kennisbank. De veiligheidskennisgeving beschrijft geen montagestappen en geen bedrading. Voor de aansluiting van de BC verwijzen de gidsen van de omvormers naar de installatiehandleiding van het betreffende model.
!!!

### Wat de kennisgeving wel zegt

- **Tillen (5.2):** zorg dat je het gewicht echt kunt dragen. Een BAT weegt 62 of 78 kg.
- **Ladders en boren (5.2):** alleen geschikte ladders (bij elektrisch werk hout of glasvezel), en een veiligheidsbril en handschoenen bij het boren.
- **Kabels (5.3):** schakelaars aan voor- en achterzijde uit voordat je kabels aansluit of losmaakt, per categorie bundelen, weg van warmtebronnen. Installeer bij meer dan 0 °C. Lag de kabel lang in de kou, laat hem dan minstens 24 uur opwarmen.
- **Onderhoud (5.4):** eerst uitschakelen en de wachttijd op het etiket afwachten.

### Wat de omvormer- en Home-gidsen zeggen

- De gidsen van de SP2- en TP2-omvormer beschrijven de batterij-ingang, de COM-poort naar de BC en de netwerkkabel. Voor de BC zelf verwijzen ze naar de handleiding van het betreffende model.
- De gids van SigenStor Home (hoofdstuk 4) behandelt de plaatsing van omvormer en BAT-modules: zes BAT's voor vloerinstallatie, twee voor wandinstallatie, en een hulpmiddel om te tillen vanaf drie modules op de vloer. Kan er water op de vloer staan, monteer dan op een platform of direct aan de muur. Een BAT die gevallen is mag je niet meer gebruiken.
- Na installatie tonen lampjes op de omvormer of de BAT's laden, ontladen of defect zijn (hoofdstuk 7 bij SP2/TP2, hoofdstuk 8 bij Home).

Let op: de Home-gids noemt de modellen BAT 5.0 tot 10.0, de brochure alleen BAT 6.0 en 10.0, en de BC komt in de tekst van de Home-gids niet voor. Hoe dat samenhangt, staat niet in de kennisbank.
`
    }
  ],

  handleidingRefs: [
    { doc: 'kg', hoofdstuk: 'Hoofdstuk 1 Algemene vereisten', paginas: '6', onderwerp: 'Wanneer de fabrikant niet aansprakelijk is, onder meer bij mengen met andere merken' },
    { doc: 'kg', hoofdstuk: 'Hoofdstuk 2 Personeelsvereisten', paginas: '7', onderwerp: 'Opleiding en kwalificatie van installateurs' },
    { doc: 'kg', hoofdstuk: 'Hoofdstuk 3 Vereisten voor hantering en transport, 3.2 Batterijenpakket', paginas: '8-10', onderwerp: 'Gevaarlijke goederen klasse 9, hellingshoek, wat wel en niet samen vervoerd mag worden' },
    { doc: 'kg', hoofdstuk: 'Hoofdstuk 4 Opslagvereisten', paginas: '11', onderwerp: 'Opslagtemperatuur, 40% SOC en de tabel met oplaadperiodes' },
    { doc: 'kg', hoofdstuk: 'Hoofdstuk 5 Bedrijfsvereisten, 5.1 Routinevereisten', paginas: '12', onderwerp: 'Niet werken onder spanning, PBM, aarden en spanning meten' },
    { doc: 'kg', hoofdstuk: '5.2 Installatie van de apparatuur en 5.3 Kabelverbinding', paginas: '13-14', onderwerp: 'Ladders, boren en omgaan met kabels' },
    { doc: 'kg', hoofdstuk: '5.4 Onderhoud en vervanging van apparatuur', paginas: '15', onderwerp: 'Brandrisico, defecte pakketten en vervangen door professionals' },
    { doc: 'br', hoofdstuk: 'Sigenergy-thuisenergieoplossingen', paginas: '4', onderwerp: 'Overzicht: hybrideomvormer met SigenStor BC en BAT als modulair BESS' },
    { doc: 'br', hoofdstuk: 'Waarom Sigenergy? 03 Altijd betrouwbare veiligheidsbewaking', paginas: '6', onderwerp: 'LFP-cellen, 10.000 cycli en de vijf beveiligingslagen' },
    { doc: 'br', hoofdstuk: 'Waarom Sigenergy? 05 Innovatieve met DC gekoppelde architectuur', paginas: '7', onderwerp: 'DC-bus, optimalisatie per pakket, mengen van nieuwe en oude modules' },
    { doc: 'br', hoofdstuk: 'Sigen Battery 6.0 / 10.0', paginas: '11', onderwerp: 'Specificaties van BAT 6.0 en 10.0 en van de SigenStor BC, met de voetnoten' },
    { doc: 'br', hoofdstuk: 'Sigen Hybrid Inverter 2.0-6.0 kW 1-fase en 3.0-12.0 kW 3-fase, Batterijaansluiting', paginas: '13', onderwerp: 'Aantal modules per controller en spanningsbereik per omvormertype' },
    { doc: 'dp', hoofdstuk: 'Sigen Hybrid Inverter 2.0-6.0 kW 1-fase voor België, Batterijaansluiting', paginas: '1', onderwerp: 'Batterijaansluiting van de eenfase-omvormer in de Belgische uitvoering' },
    { doc: 'sp2', hoofdstuk: '1 Introductie, 1.2 Poortintroductie', paginas: '2', onderwerp: 'Batterij-ingang BAT+/BAT- en de COM-poort' },
    { doc: 'sp2', hoofdstuk: '2 Inspecties voor installatie, Door de installateur geleverde kabels', paginas: '4', onderwerp: 'CAT6-kabel van omvormer naar accu, maximaal 20 m per kabel' },
    { doc: 'sp2', hoofdstuk: '5 Kabelaansluiting en installatie van onderdelen, 5.2 Beschrijving van de COM-poort', paginas: '9-11', onderwerp: 'Verbinding met de SigenStor BC en verwijzing naar de handleiding van het model' },
    { doc: 'sp2', hoofdstuk: '7 Inschakelen', paginas: '17-18', onderwerp: 'Indicatielampjes voor laden, ontladen en defecte BAT-modules' },
    { doc: 'tp2', hoofdstuk: '5 Kabelaansluiting en installatie van onderdelen, 5.2 Beschrijving van de COM-poort', paginas: '9-11', onderwerp: 'Hetzelfde voor de driefase-omvormer' },
    { doc: 'home', hoofdstuk: '1 Inleiding Driefasensysteem, 1.1 Inleiding netwerken', paginas: '2-5', onderwerp: 'Overzicht van onderdelen, waaronder de SigenStor BAT en de gateway' },
    { doc: 'home', hoofdstuk: '4 Installatie van omvormer en accupak, 4.1 Vloermontage en 4.2 Wandmontage', paginas: '13-23', onderwerp: 'Plaatsing van BAT-modules op vloer of muur, aantallen en tillen' },
    { doc: 'home', hoofdstuk: '8 Aanzetten apparatuur', paginas: '40', onderwerp: 'Betekenis van de statusindicatoren van de BAT-modules' }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm02l03', 'm02l02', 'm01l05'],

  zieOok: ['sigenergy-hybrid-omvormer', 'sigenergy-sigenstor-home', 'sigenergy-gateway', 'sigenergy-mysigen-app']
});
