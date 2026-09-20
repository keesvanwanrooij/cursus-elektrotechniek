KENNIS.addToepassing({
  id: 'thuisbatterij',
  slug: 'thuisbatterij',
  naam: 'Thuisbatterij',
  intro: 'Een thuisbatterij slaat zonne-energie of goedkope stroom op om later in huis te gebruiken. Hier leer je hoe het werkt, welke onderdelen erbij horen en welke merken en producten er zijn.',
  seoTitel: 'Thuisbatterij installeren: uitleg voor beginners, onderdelen en merken',
  seoBeschrijving: 'Uitleg over de thuisbatterij voor beginnende installateurs: hoe het werkt, AC- en DC-gekoppeld, de onderdelen (omvormer, batterij, gateway), veiligheid en welke merken en producten er zijn.',

  onderdelen: [
    { rol: 'systeem',  uitleg: 'Sommige merken leveren alles als een kant-en-klaar systeem: omvormer, batterijmodules en toebehoren onder een naam. Dat scheelt keuzes en is voor beginners overzichtelijk.' },
    { rol: 'omvormer', uitleg: 'Het hart van de installatie. Een hybride omvormer voedt zonnepanelen en batterij aan dezelfde kant en zet alles om naar wisselspanning voor het huis en het net.' },
    { rol: 'batterij', uitleg: 'Hier zit de energie in. Batterijen bestaan meestal uit modules die je kunt uitbreiden, met een batterijcontroller die laden, ontladen en veiligheid bewaakt.' },
    { rol: 'gateway',  uitleg: 'Nodig voor noodstroom. De gateway koppelt het huis los van het net als dat uitvalt en schakelt over op batterij of zon. Zonder gateway heb je meestal geen back-up.' },
    { rol: 'sensor',   uitleg: 'Het systeem moet weten wat het huis verbruikt en teruglevert. Dat meet een sensor, meestal op de hoofdaansluiting. Zonder goede meting kan het niet slim sturen.' },
    { rol: 'app',      uitleg: 'Bewaking en instellingen voor de klant, en beheer op afstand voor de installateur.' }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is een thuisbatterij',
      tekst: `
Een thuisbatterij is een grote accu die je aan een woning koppelt. Overdag wekken zonnepanelen vaak meer stroom op dan het huis op dat moment nodig heeft. Zonder batterij gaat dat overschot het net op. Met batterij wordt het opgeslagen en 's avonds gebruikt.

Het verschil met de accu in een telefoon is vooral schaal en sturing. Een thuisbatterij slaat typisch tussen de 5 en 30 kWh op, wordt aangestuurd door een energiemanagementsysteem (EMS) en moet aan veel strengere veiligheidseisen voldoen, omdat er veel energie in een kleine ruimte zit.

!!! kern Twee dingen die beginners door elkaar halen
**Capaciteit** (kWh) is hoeveel energie de batterij kan opslaan. **Vermogen** (kW) is hoe snel hij die kan leveren of opnemen. Een batterij van 10 kWh met 5 kW vermogen kan dus twee uur lang 5 kW leveren, maar niet in een kwartier een oven en een laadpaal tegelijk voeden.
!!!
`
    },
    {
      id: 'waarom',
      kop: 'Waarom een thuisbatterij',
      tekst: `
Klanten hebben meestal een van deze redenen. Vraag altijd door welke, want ze leiden tot een ander ontwerp.

- **Meer eigen zonne-energie gebruiken.** Zonder batterij gebruikt een gemiddeld huishouden vaak maar een deel van de eigen opbrengst direct. De rest gaat het net op.
- **Minder afhankelijk van terugleververgoeding.** In Nederland verandert de regeling voor teruglevering. Controleer altijd de actuele regels en het contract van de klant, want dit bepaalt of een batterij financieel zinvol is.
- **Dynamisch tarief benutten.** Bij een variabel uurtarief laadt de batterij als stroom goedkoop is en levert hij als het duur is.
- **Noodstroom.** Bij een storing op het net blijft (een deel van) het huis werken. Dit vraagt een gateway of een back-upuitgang en is geen vanzelfsprekende eigenschap van elke batterij.
- **Piekbelasting beperken.** Handig als de aansluiting krap is, bijvoorbeeld met een warmtepomp en een laadpaal.

?? Is een thuisbatterij altijd de moeite waard?
Nee. Het hangt af van verbruik, aantal zonnepanelen, tarief en wat het systeem kost. Een eerlijk advies rekent het door met het werkelijke verbruik van de klant en belooft geen terugverdientijd die je niet kunt onderbouwen.
??
`
    },
    {
      id: 'hoe-werkt-het',
      kop: 'Hoe werkt het',
      tekst: `
In een woning met batterij lopen vier energiestromen door elkaar: **zon**, **batterij**, **huis** en **net**. Het systeem kiest steeds welke stroom waarheen gaat.

1. Er is zon en het huis verbruikt weinig: de zon voedt het huis en laadt de batterij.
2. De batterij is vol: het overschot gaat naar het net.
3. Het wordt donker: de batterij voedt het huis, het net levert alleen wat de batterij niet kan.
4. De batterij is leeg: het net voedt het huis.

Wat het systeem wanneer doet, bepaalt de **sturing**. Die kan eenvoudig zijn (eigen verbruik maximaliseren) of slim (rekening houden met weer, tarieven en gewoontes). Om te kunnen sturen meet het systeem continu het vermogen op de hoofdaansluiting. Daarom is de sensor een onmisbaar onderdeel.

### Waar wordt omgezet
Zonnepanelen en batterij leveren **gelijkspanning** (DC). Het huis werkt op **wisselspanning** (AC). Een omvormer zet om, en dat kan op twee plekken in het systeem. Dat verschil bepaalt het ontwerp.
`
    },
    {
      id: 'soorten',
      kop: 'AC-gekoppeld, DC-gekoppeld en all-in-one',
      tekst: `
| Soort | Hoe | Goed om te weten |
|---|---|---|
| **DC-gekoppeld** (hybride omvormer) | Zonnepanelen en batterij hangen aan dezelfde omvormer, de energie hoeft maar een keer te worden omgezet | Meestal het efficientst bij een nieuwe installatie |
| **AC-gekoppeld** | De batterij heeft een eigen omvormer en wordt aan de wisselstroomkant aangesloten | Handig om een batterij achteraf aan een bestaande PV-installatie toe te voegen |
| **All-in-one** | Omvormer, batterij en regeling als een geheel geleverd | Weinig keuzes, snelle installatie, minder flexibel |

Bij een **hybride omvormer** komt de batterij meestal via een aparte batterijcontroller met modules. Je kunt vaak later modules toevoegen, waardoor de capaciteit meegroeit met de wens van de klant.
`
    },
    {
      id: 'begrippen',
      kop: 'Begrippen die je moet kennen',
      tekst: `
| Begrip | Wat het is |
|---|---|
| **kWh** | Capaciteit: hoeveel energie erin past |
| **kW** | Vermogen: hoe snel energie eruit of erin kan |
| **SoC** | State of Charge: hoe vol de batterij is, in procenten |
| **SoH** | State of Health: hoeveel capaciteit er nog over is ten opzichte van nieuw |
| **Ontlaaddiepte (DoD)** | Hoeveel van de capaciteit je werkelijk mag gebruiken. Fabrikanten geven vaak een bruikbare capaciteit op die lager is dan de totale |
| **Cyclus** | Een keer volledig laden en ontladen. Het aantal cycli bepaalt de levensduur |
| **LFP** | Lithium-ijzerfosfaat, een celtype dat als veilig en duurzaam bekend staat |
| **EMS** | Energiemanagementsysteem: de software die bepaalt wat het systeem wanneer doet |
| **Back-up of EPS** | Noodstroom bij netuitval, voor het hele huis of een aparte groep |
| **Zero-export** | Instelling waarbij niets naar het net wordt teruggeleverd |
`
    },
    {
      id: 'installatie',
      kop: 'Wat komt er bij een installatie kijken',
      tekst: `
Geen handleiding vervangt een goede opname. Een verstandige volgorde:

1. **Opname van de bestaande installatie.** Groepenkast, aansluitwaarde, aardlektypes, aanwezige zonnepanelen, fasen, kabellengtes en beschikbare ruimte.
2. **Keuze van systeem en plek.** Denk aan vrije ruimte rond de omvormer, temperatuur, vocht en bereikbaarheid. Volg de handleiding van de fabrikant voor toegestane plaatsen. Een batterij hoort niet in een vluchtroute.
3. **Ontwerp van de aansluiting.** Een eigen groep met de juiste beveiliging, de plek van de stroomsensor en (bij noodstroom) welke groepen op de back-up komen.
4. **Aanmelden.** Nieuwe of gewijzigde productie- en opslaginstallaties moeten bij de netbeheerder gemeld worden. Controleer de actuele procedure.
5. **Montage en aansluiting** volgens de installatiegids, met veiligstellen van alle bronnen (module 1).
6. **Inbedrijfstelling** met de app: instellingen, netcode, meting controleren, test van de back-up als die er is.
7. **Oplevering** met metingen, schema, uitleg aan de klant en een overzicht van waar de handleidingen te vinden zijn.
`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid',
      tekst: `
!!! gevaar Uitschakelen is hier geen spanningsloos
Een woning met zonnepanelen en batterij heeft meerdere energiebronnen. De gelijkspanningszijde van panelen blijft onder spanning zolang er licht is, en een batterij blijft onder spanning ook als alles is uitgeschakeld. Werken aan zo'n installatie vraagt de vijf stappen uit module 1, aangevuld met alle extra bronnen. Lees les 10.2 voordat je aan een installatie met PV of opslag begint.
!!!

Verder geldt in het algemeen:

- Volg de handleiding van de fabrikant voor plaatsing, afstanden en toegestane omgevingstemperatuur. Dat is geen advies maar een voorwaarde voor garantie en verzekering.
- Let op de brandveiligheid: rookmelders in de buurt, een vrije vluchtroute en geen brandbare materialen direct tegen de batterij.
- Vraag de klant om de verzekeraar te informeren als dat in de polis wordt gevraagd.
- Batterijen zijn zwaar. Til nooit alleen en volg de aanwijzingen voor transport en opslag.
`
    },
    {
      id: 'valkuilen',
      kop: 'Veelgemaakte fouten',
      tekst: `
- Het noodstroomvermogen niet controleren tegen wat de klant op back-up verwacht (bijvoorbeeld een warmtepomp of inductiekookplaat).
- De stroomsensor verkeerd om of op de verkeerde plek monteren, waardoor het systeem verkeerd stuurt.
- Vergeten dat een 3-fase huis ook een 3-fase systeem of meting vraagt.
- Capaciteit verkopen zonder naar het werkelijke verbruik te kijken.
- De netcode of het land verkeerd instellen bij inbedrijfstelling.
- Geen schema en geen instellingen vastleggen bij oplevering.
`
    }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm10l04', 'm01l03', 'm06l03']
});
