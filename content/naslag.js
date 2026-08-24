/* ==========================================================================
   naslag.js - spiekbriefje, bedoeld om op de telefoon open te hebben
   ========================================================================== */

window.NASLAG = [

{
  icoon: '🧮',
  titel: 'Formules',
  inhoud: `
| Formule | Waarvoor |
|---|---|
| U = I × R | Wet van Ohm |
| I = U / R | Stroom uit spanning en weerstand |
| P = U × I | Vermogen |
| I = P / U | Stroom uit vermogen - het meest gebruikt |
| P = U² / R | Vermogen bij bekende weerstand |
| P = I² × R | Warmte in een verbinding - verklaart brand |
| U tussen fasen = 230 × √3 ≈ 400 V | 3-fase |
| U piek = 230 × √2 ≈ 325 V | Effectieve waarde versus piek |
| Energie (kWh) = P (kW) × t (uur) | Verbruik en kosten |
`
},

{
  icoon: '⚡',
  titel: 'Stroom bij 230 V',
  inhoud: `
| Vermogen | Stroom | Typisch |
|---|---|---|
| 500 W | 2,2 A | Tv, kleine koelkast |
| 1000 W | 4,3 A | Stofzuiger |
| 1500 W | 6,5 A | Vloerverwarming klein |
| 2000 W | 8,7 A | Föhn, kleine oven |
| 2300 W | 10,0 A | Waterkoker |
| 3000 W | 13,0 A | Zwaar element |
| 3500 W | 15,2 A | Grens van een 16 A-groep |
| 3680 W | 16,0 A | Theoretisch maximum 16 A-groep |

Vuistregel: **vermogen ÷ 230**, of onthoud 2300 W = 10 A en schaal vanaf daar.
`
},

{
  icoon: '🎨',
  titel: 'Aderkleuren',
  inhoud: `
| Kleur | Functie |
|---|---|
| Bruin | Fase (L of L1) |
| Zwart | Fase (L2) of schakeldraad |
| Grijs | Fase (L3) of schakeldraad |
| Blauw | Nul (N) |
| Geelgroen | Beschermingsleiding (PE) - uitsluitend hiervoor |

In oude installaties gelden andere kleuren en soms andere betekenissen.
**Kleur is een aanwijzing, meten is het bewijs.**
`
},

{
  icoon: '📏',
  titel: 'Doorsnede en beveiliging',
  inhoud: `
| Doorsnede | Gangbare beveiliging | Toepassing |
|---|---|---|
| 1,5 mm² | 16 A | Licht, gewone contactdozen |
| 2,5 mm² | 16 – 20 A | Keuken, wasmachine, zwaardere groepen |
| 4 mm² | 20 – 25 A | Kookgroep, langere leidingen |
| 6 mm² | 25 – 35 A | Kookgroep 3-fase, laadpaal, warmtepomp |
| 10 mm² | 40 A en hoger | Voedingskabels |

Vuistregel voor de ongunstigste gangbare situatie (in buis, in de wand).
Bij lange leidingen, bundeling of isolatie hoort een echte berekening.
**De beveiliging hoort bij de kabel, niet bij het apparaat.**
`
},

{
  icoon: '🔒',
  titel: 'De vijf stappen van veiligstellen',
  inhoud: `
1. **Scheiden** - alle voedingsbronnen, ook PV, UPS en laadpaal
2. **Beveiligen** tegen wederinschakeling - LOTOTO: slot en label
3. **Controleren** - tweepolige tester, test de tester vóór én na
4. **Aarden en kortsluiten** - bij onoverzichtelijke installaties
5. **Afschermen** - nabijgelegen delen die onder spanning blijven

> Uitschakelen is een handeling. Spanningsloosheid is een toestand die je moet vaststellen.

Meet in een 3-fase kast álle combinaties: L1–N, L2–N, L3–N, L1–L2, L2–L3, L1–L3,
en elke fase naar PE.
`
},

{
  icoon: '🛡️',
  titel: 'MCB, RCD en RCBO',
  inhoud: `
| Component | Beschermt | Reageert op |
|---|---|---|
| MCB (installatieautomaat) | De leiding | Overbelasting (thermisch) en kortsluiting (magnetisch) |
| RCD (aardlekschakelaar) | De mens | Verschilstroom naar aarde, 30 mA |
| RCBO (aardlekautomaat) | Beide, per groep | Beide |

**Karakteristiek**

| Letter | Magnetisch bij | Waarvoor |
|---|---|---|
| B | 3 – 5 × In | Licht, contactdozen |
| C | 5 – 10 × In | Motoren, LED-drivers, warmtepompen |
| D | 10 – 20 × In | Zware inschakelstromen |

Een aardlek beschermt **niet** bij aanraking van fase én nul tegelijk.
`
},

{
  icoon: '🔀',
  titel: 'Aardlektypes',
  inhoud: `
| Type | Detecteert | Waar |
|---|---|---|
| AC | Zuivere wisselstroom | Verouderd, niet meer toepassen |
| A | Wisselstroom + pulserende DC | Standaard in woningen |
| F | Als A + samengestelde frequenties | Frequentieregelaars, veel warmtepompen |
| B | Als F + gladde gelijkstroom | Laadpalen, PV-omvormers |

Een gladde gelijkstroomlek kan een type-AC of type-A aardlek **verzadigen**: hij ziet
dan ook gewone lekstromen niet meer, terwijl de testknop nog gewoon werkt.

Maximaal **4 eindgroepen** achter één aardlek - lekstromen tellen op.
`
},

{
  icoon: '💧',
  titel: 'IP-codering',
  inhoud: `
**IP + vaste voorwerpen + water**

| 1e cijfer | Betekent |
|---|---|
| 2 | Vingerveilig |
| 4 | Voorwerpen vanaf 1 mm |
| 5 | Beperkt stofdicht |
| 6 | Volledig stofdicht |

| 2e cijfer | Betekent |
|---|---|
| 1 | Druppelwater |
| 3 | Sproeiwater tot 60° |
| 4 | Spatwater uit elke richting |
| 5 | Waterstralen |
| 7 | Tijdelijke onderdompeling |

IP44 = gangbare minimumeis buiten en in vochtige ruimtes.
De waarde geldt voor het **correct gemonteerde geheel**, inclusief wartel en klep.
`
},

{
  icoon: '🚿',
  titel: 'Badkamerzones',
  inhoud: `
| Zone | Waar | Kort |
|---|---|---|
| 0 | In bad of douchebak | Alleen daarvoor bestemde apparatuur, zeer lage veiligheidsspanning |
| 1 | Boven bad/douche tot 2,25 m | Zeer beperkt, geen contactdozen |
| 2 | 60 cm rondom zone 1 | Voldoende IP-waarde vereist |
| 3 | Daarbuiten | Regulier, met aardlekbeveiliging |

Hoe dichter bij het water, hoe strenger. Beoordeel **per zone**, niet per ruimte.
Bij een verbouwing verschuiven de zones - opnieuw beoordelen.
`
},

{
  icoon: '🔍',
  titel: 'Storingzoeken in 9 stappen',
  inhoud: `
1. **Symptom** - wat gebeurt er echt?
2. **Scope** - hoe groot is het bereik?
3. **Supply** - is er voeding?
4. **Protection** - wat doen de beveiligingen?
5. **Circuit** - waar loopt het verwachte pad?
6. **Divide** - splits in het midden, niet aan het uiteinde
7. **Measure** - één hypothese per meting
8. **Repair** - de oorzaak, niet het symptoom
9. **Verify** - alle standen, en de veiligheid opnieuw

> Begin nooit met "waarschijnlijk is X kapot". Begin met: **wat weet ik zeker?**
`
},

{
  icoon: '🧭',
  titel: 'Symptoom naar richting',
  inhoud: `
| Patroon | Zoekrichting |
|---|---|
| Eén apparaat, rest werkt | Apparaat of aansluitpunt |
| Eén groep uit | Automaat, bedrading of belasting in die groep |
| Meerdere groepen | Aardlek, hoofdschakelaar, gedeelde nul |
| Hele woning | Aansluiting, hoofdzekering, netbeheerder |
| Alles werkt maar vreemd | **Onderbroken nul** - meet N–PE |
| Alleen bij belasting | Overgangsweerstand of te dunne leiding |
| Alleen bij vocht of regen | Isolatiefout, buitendoos, kruipruimte |
| Sinds er PV of een laadpaal is | Aardlektype controleren |
| Bij inschakelen van veel LED | Inschakelstroom, C-karakteristiek overwegen |
`
},

{
  icoon: '☠️',
  titel: 'Stroom door het lichaam',
  inhoud: `
| Stroom | Effect (50 Hz, pad via het hart) |
|---|---|
| 0,5 – 1 mA | Net waarneembaar |
| 5 – 10 mA | Pijnlijk, spieren trekken samen |
| 10 – 16 mA | **Loslaatgrens** - je kunt niet meer loslaten |
| 30 mA | Verkramping ademhalingsspieren |
| 50 mA + | Reële kans op ventrikelfibrilleren |

Bij 230 V en 1000 Ω lichaamsweerstand (vochtig): **230 mA**.

**Bij een ongeval:** eerst stroom uit, dan pas aanraken. 112 bellen. Ook zonder
zichtbaar letsel medisch laten beoordelen - hartritmestoornissen kunnen uren later
optreden.
`
},

{
  icoon: '🔌',
  titel: 'Aansluitwaarden',
  inhoud: `
| Aansluiting | Beschikbaar |
|---|---|
| 1×25 A | ≈ 5,7 kW |
| 1×35 A | ≈ 8,0 kW |
| 1×40 A | ≈ 9,2 kW |
| 3×25 A | ≈ 17,3 kW |
| 3×35 A | ≈ 24,2 kW |

**Gelijktijdige belasting inschatten**

| Verbruiker | Vermogen |
|---|---|
| Inductiekookplaat in gebruik | 3 – 7 kW |
| Warmtepomp incl. bijverwarming | 3 – 9 kW |
| Laadpaal 1-fase | 3,7 kW |
| Laadpaal 3-fase | 11 – 22 kW |
| Elektrische boiler | 2 kW |
| Wasmachine + droger | 2 – 4 kW |
`
},

{
  icoon: '📐',
  titel: 'Meten: instrument en categorie',
  inhoud: `
**Welk instrument**

| Vraag | Instrument |
|---|---|
| Staat hier geen gevaarlijke spanning? | Tweepolige tester |
| Waar verdwijnt de spanning? | Multimeter |
| Loopt deze geleider door? | Doorbelfunctie |
| Deugt de isolatie? | Isolatiemeter, 500 V DC, min. 1 MΩ |
| Schakelt de aardlek op tijd? | Installatietester, RCD-test |
| Schakelt de automaat snel genoeg? | Installatietester, Zs |
| Hoeveel stroom loopt er nu? | Stroomtang |

**Meetcategorie**

| CAT | Waar |
|---|---|
| II | Stopcontact en aangesloten apparatuur |
| III | Vaste installatie, verdeelinrichting |
| IV | Aansluiting netbeheerder, meterkast |

Weerstand meten **uitsluitend spanningsloos**. Isolatiemeting: alle verbruikers eraf.
`
}

];
