/* ==========================================================================
   content/kennis/goodwe/esa-5kw-10-8kwh.js
   Samenvatting van de documenten van de oudere GoodWe ESA (GW5048-ESA,
   5 kW, 48 V-batterij, 5,4 tot 10,8 kWh), in eigen woorden.
   Paginanummers verwijzen naar de positie in de pdf (1 = eerste pagina).
   In de installatiehandleiding en de batterijkasthandleiding is het gedrukte
   nummer 3 lager dan de pdf-pagina, in de storingsgids ook 3 lager.
   ========================================================================== */

KENNIS.addProduct({
  id: 'goodwe-esa-5kw-10-8kwh',
  merk: 'goodwe',
  slug: 'esa-5kw-10-8kwh',
  naam: 'GoodWe ESA 5 kW / 5,4-10,8 kWh (GW5048-ESA, oudere generatie)',
  rol: 'systeem',
  toepassingen: ['thuisbatterij', 'zonnepanelen'],
  korteOmschrijving: 'De eerdere ESA van GoodWe: een 1-fase hybride omvormer van 5 kW met ingebouwde schakelkast (BoS) en daaronder een batterijkast met 48 V-lithiumpakketten van samen 5,4 tot 10,8 kWh. Je komt hem tegen bij bestaande installaties. Hier lees je hoe je hem herkent en welke handleiding je nodig hebt.',

  varianten: {
    kop: ['Onderdeel', 'Typenummer', 'Belangrijkste gegevens', 'Bron'],
    rijen: [
      ['Hybride omvormer met BoS', 'GW5048-ESA', '5 kW naar het net, 1-fase 230 V, 2 MPPT, PV max. 580 V, batterij 48 V (40 tot 60 V), IP65, 44 kg, 516 x 832 x 290 mm', 'Datasheet p. 2, Installatiehandleiding p. 37-40'],
      ['Batterijkast', 'BCL9600 (de omvormerhandleiding schrijft BCL0096)', 'Ruimte voor 2 pakketten, IP54, 37 kg, 516 x 1205 x 280 mm met voeten', 'Datasheet p. 2, Batterijkasthandleiding p. 4'],
      ['Batterijpakket', 'GoodWe SECU-A (SECU-A5.4L of SECU A5.4-20)', '5,4 kWh per pakket volgens hoofdstuk 3; hoofdstuk 2 noemt 4,8 kWh', 'Batterijkasthandleiding p. 7 en 10'],
      ['Energiemeter met stroomtang', 'meegeleverd (geen typenummer in de tekst)', 'DIN-rail, 36 mm breed, RS485 via netwerkkabel, stroomtang tot 120 A', 'Installatiehandleiding p. 14 en 28-29'],
      ['App en portaal', 'SolarGo en SEMS Portal', 'Instellen via SolarGo of de webpagina van de wifi-module; bewaking via semsportal.com', 'Installatiehandleiding p. 34-35']
    ]
  },

  documenten: [
    { id: 'im', titel: 'GW_ESA_Installation Manual-EN (User Manual Hybrid Inverter GW5048-ESA, V1.5, 2022-10-30)', soort: 'Installatiehandleiding', paginas: 42 },
    { id: 'bk', titel: 'GW_ESA Battery Enclosure_Installation Manual-EN (BCL9600, V1.2, 2022-10-30)', soort: 'Installatiehandleiding', paginas: 16 },
    { id: 'ds', titel: 'GW_ESA (14A)_Datasheet_EMEA-EN (juli 2023)', soort: 'Datasheet', paginas: 2 },
    { id: 'tg', titel: 'GW_ESS Troubleshooting Guide-NL (Probleemoplossingsgids, V1.0, 2023-03-10)', soort: 'Storingsgids', paginas: 37 }
  ],

  secties: [
    {
      id: 'wat-is-het',
      kop: 'Wat is het en hoe herken je hem',
      tekst: `GoodWe gebruikt de naam **ESA** voor zijn alles-in-een thuisbatterijen. De ESA op deze pagina is de eerdere generatie: een **5 kW 1-fase hybride omvormer** voor een **48 V-batterij**. Volgens de datasheet (juli 2023) zitten omvormer, batterijcellen, lader en UPS in één behuizing, met 2 MPPT's en 5,4 tot 10,8 kWh opslag. De installatiehandleiding is van 2022.

De documenten noemen dit systeem zelf geen voorganger van de huidige ESA-reeksen. Maar uit de datums en de opbouw blijkt wel dat het de oudere generatie is. Het grote verschil met de huidige **ESA 3-10 kW** (zie die pagina) is de batterij. Die nieuwe werkt met hoogspanningsbatterijen van rond 380 V (Lynx D G2), deze oude ESA met een **laagspanningsbatterij van 48 V**.

### Zo herken je hem op locatie

- Het typeplaatje noemt **GW5048-ESA** (5 kW, 48 V).
- Er zitten drie delen boven elkaar: bovenaan de **omvormer**, daaronder de **BoS** (Balance of System, een schakelkast met de aansluitingen en automaten) en op de vloer de hoge **batterijkast** (ruim 1,2 m).
- Achter een klepje in de BoS zie je een batterij-automaat (125 A, DC), een net-automaat (40 A), een back-up-automaat (25 A), een PV-scheidingsschakelaar en een **draaischakelaar met drie standen** voor de bypass (Installatiehandleiding p. 19).
- Op de voorkant staan acht lampjes met tekst: SYSTEM, BACKUP, SOLAR, BATTERY, GRID, ENERGY, COMMUNICATIONS en ERROR (p. 33).
- De wifi-module zendt een netwerk uit met de naam **Solar-WiFi** plus de laatste tekens van het serienummer (p. 34).

!!! info Als je Sigenergy al kent
Net als bij SigenStor Home zijn omvormer en batterij hier samen ontworpen. Maar SigenStor werkt met batterijen van 300 tot 900 V en heeft een aparte Sigen Gateway nodig voor noodstroom. Deze GoodWe heeft een **48 V-batterij** met dikke DC-kabels en een batterij-automaat. De noodstroomuitgang zit al in de BoS, met een handmatige bypass erbij. De app is SolarGo in plaats van mySigen en de meter is een DIN-railmeter met stroomtang in plaats van de Sigen Power Sensor.
!!!`
    },
    {
      id: 'hoe-werkt-het',
      kop: 'Hoe het werkt',
      tekst: `De omvormer koppelt twee PV-strings, de batterij, het net en een aparte groep voor noodstroom. In de standaardmodus (**General mode**) gaat zonnestroom eerst naar het huis, dan naar de batterij en dan naar het net. Bij te weinig zon levert de batterij en daarna het net. Valt het net weg, dan houden zon en batterij de back-upgroep in de lucht (Installatiehandleiding p. 11-13).

De andere modi stel je in met SolarGo:

- In **Off-grid mode** werken zon en batterij als eilandsysteem zonder net.
- In **Standby mode** laadt de batterij alleen en ontlaadt pas bij netuitval, zoals een UPS.
- In **Economic mode** laadt hij in het daltarief en ontlaadt in het piektarief.

Volgens de handleiding moet het systeem minstens 80% van zijn levensduur aan het net hangen, want lang off-grid gebruik verkort de levensduur van de batterijen (p. 9).

### Noodstroom: wat wel en niet

De back-upuitgang levert volgens de handleiding 5000 W continu en 6900 W gedurende 10 seconden voor het aanlopen (p. 11). Maar het technische blad en de datasheet noemen 4600 VA nominaal met dezelfde piek (p. 38, datasheet p. 2), dus reken met 4600 VA. Boven 45 °C omgeving neemt het vermogen af en boven 60 °C schakelt hij uit.

| Geschikt op back-up | Niet geschikt op back-up |
|---|---|
| Kleine keukenapparaten, magnetron, tv, computer | Boiler en geiser |
| Verlichting (led) | Airco |
| Koelkast en vriezer | Elektrische kookplaat en oven |
| | Sauna of spa, waterpompen |

De back-upgroep deelt de nulleider met het net, zodat de verbinding tussen nul en aarde in alle standen intact blijft (p. 11).`
    },
    {
      id: 'veiligheid',
      kop: 'Veiligheid',
      tekst: `!!! gevaar Alle bronnen uit en 5 minuten wachten
Er zijn drie bronnen: net, panelen en batterij. Schakel ze alle drie af en controleer met een spanningsmeter voor minstens 1000 V AC en DC dat er niets meer op staat. Wacht na het afschakelen minstens 5 minuten voor je iets binnenin aanraakt (Installatiehandleiding p. 5-7). Panelen geven al spanning bij weinig licht, dus plaats een DC-scheider of zekering volgens de lokale regels (p. 6). Open nooit het bovenste omvormergedeelte.
!!!

- Werk nooit alleen aan dit systeem (p. 6).
- Let op de polariteit van de batterij. Omgekeerd aansluiten beschadigt de omvormer en kost de garantie (p. 7 en 22).
- Gebruik alleen goedgekeurde lithium-ionbatterijen. Andere zijn niet toegestaan, omdat de BMS-communicatie alleen met geteste modellen werkt (p. 23).
- Laad nooit een bevroren batterij. Bij het losnemen haal je eerst de geaarde pool los (p. 8).
- Niet voor medische of levensondersteunende apparatuur (p. 6).
- Zet geen brandbare spullen in dezelfde ruimte, want de relais en schakelaars zijn niet vonkvrij (p. 7).
- De omvormer is transformatorloos. Er zit geen scheidingstransformator in, dus alle andere onderdelen moeten daarmee overweg kunnen (p. 9).`
    },
    {
      id: 'montage',
      kop: 'Plaatsing en montage',
      tekst: `### Plaats (Installatiehandleiding p. 10 en 14)

- Vrije ruimte: 300 mm boven, 500 mm aan elke zijkant en 1200 mm voor.
- Binnen of buiten, maar beschut tegen zon, regen en sneeuw. Boven 45 °C neemt het vermogen af.
- Een muur die het hele systeem draagt. De handleiding noemt 50 kg voor de wandplaat met omvormer.
- Minstens 30 m uit de buurt van radioapparatuur onder 30 MHz, of met een ferrietkern of filter op de kabels.

### Volgorde

1. Eerst de batterijkast (p. 16). Schroef de voeten eronder, zet hem waterpas tegen de muur, schroef hem vast en kit de zes schroefgaten af (Batterijkasthandleiding p. 6-7). Laat minstens 150 mm ruimte voor luchtcirculatie.
2. Dan de wandplaat (p. 16). Komt de batterijkast pas later, monteer de omvormer dan op 1206 mm van de vloer.
3. Hang de BoS op de twee haken van de wandplaat (p. 16).
4. Zet de omvormer op de BoS zodat de connectoren in elkaar vallen. Schroef de bovenkant vast en zet de antenne erop (p. 17). Zet de omvormer nooit rechtop op zijn connectoren.
5. Schuif de batterijen in de kast, van onder naar boven, met de batterijschakelaars uit. Sluit de voedingskabels en de aardverbindingen in de kast aan (Batterijkasthandleiding p. 7-9).`
    },
    {
      id: 'aansluiting',
      kop: 'Elektrische aansluiting',
      tekst: `Alle aansluitingen zitten in de BoS, achter de afdekplaat met vier inbusbouten. De kap kan er pas af als de PV-scheider uit (horizontaal) staat (Installatiehandleiding p. 18).

| Aansluiting | Kabel | Aanhaalmoment | Pagina |
|---|---|---|---|
| Aarde (PE) | max. 16 mm² | 3,5 Nm | 21 |
| PV-strings (2x) | 4 mm², Amphenol MC4 | - | 22 |
| Batterij plus en min | max. 10 mm², MC4-stekkers, elk max. 3 m | - | 22-23 |
| Batterijkast naar aarde | 16 mm² | 3,5 Nm | 22 |
| Net en back-up (L, N, PE) | 16 mm² | 3,5 Nm | 25-27 |

- Het net gaat van de groepenkast naar de net-automaat in de BoS. Zorg dat de hoofdverdeler goed geaard is (p. 26).
- De back-up gaat naar een aparte back-upverdeler met eigen aardverbinding (p. 27).
- BMS-communicatie is verplicht bij elke installatie met batterijen (p. 23). In de batterijkast gaat een kabel van de BMS-doorvoer naar COM 1 van de hoofdbatterij. Van COM 2 gaat er een naar COM 1 van de tweede batterij (Batterijkasthandleiding p. 11-12).
- De **energiemeter** klik je op de DIN-rail in de groepenkast (p. 28-29). Zet de stroomtang om de inkomende fasedraad met de pijl de goede kant op, met de zwarte en witte draad op klem 7 en 8. Voor de spanningsmeting gaat de fase (rood) via de meegeleverde zekering van 0,1 A naar klem 10 en de nul (zwart) naar klem 9. De netwerkkabel gaat naar de poort "kWh meter" van de omvormer.

!!! kern De bypass-schakelaar
De draaischakelaar in de BoS bepaalt waar de back-upgroep zijn stroom vandaan haalt (p. 30). In **stand I** (onder, standaard) komt die uit de omvormer, dus ononderbroken bij netuitval. In **stand O** (midden) is de back-upgroep helemaal los. In **stand II** (boven) komt hij rechtstreeks uit het net en is de omvormer overbrugd. Stand II gebruik je bij onderhoud, zodat de klant stroom houdt.
!!!

Welke aardlekbeveiliging of welke groepsgrootte in de groepenkast hoort staat er helaas niet in. Zie les m06l03 en les m02l06.`
    },
    {
      id: 'inbedrijfstelling',
      kop: 'Inbedrijfstelling',
      tekst: `### Batterij eerst (Batterijkasthandleiding p. 10-15)

1. Stel bij een SECU-A5.4L de **DIP-schakelaars** in. Die staan anders bij een los pakket dan bij meerdere pakketten. Schakelaar 2 is de eindweerstand (laatste batterij), schakelaar 3 het GoodWe-protocol (p. 10).
2. Sluit de batterijkast aan op de omvormer: de MC4-stekkers bovenop de kast naar de batterijconnectoren onder de omvormer en de aardkabel naar de aardklem (p. 13).
3. Druk op elk pakket de batterij-automaat in (groen lampje) en dan de batterijschakelaar van de hoofdbatterij. De hoofdbatterij geeft zelf de adressen uit (p. 15).
4. Kies in **SolarGo** het juiste batterijtype, want een verkeerde keuze geeft een BMS-communicatiefout (p. 11).

### Systeem aan (Installatiehandleiding p. 31)

Met alle kappen dicht zet je in deze volgorde aan: batterij-automaat, PV-scheider, net-automaat, back-up-automaat en dan de groep in de groepenkast. Uitschakelen gaat in omgekeerde volgorde: back-up, net, PV, batterij, groep (p. 32).

### Internet

Verbind je telefoon met het **Solar-WiFi**-netwerk van de omvormer en stel de router in via de webpagina van de module of via SolarGo (p. 34-35). Je gebruikt daarvoor het wachtwoord uit de handleiding. Wijzig het na de eerste keer, want dat raadt de storingsgids aan (Storingsgids p. 11). In SolarGo stel je ook de landinstelling (netcode) en de exportbegrenzing in.

!!! info Meter controleren
Met de functie **Meter Detectie** in SolarGo controleer je of de stroomtang de goede kant op zit. Een verkeerd gedraaide stroomtang is volgens de storingsgids een bekende oorzaak van vreemd laden en ontladen van de batterij (Storingsgids p. 20). Let op: de metertest faalt als er minder dan 150 W van het net wordt afgenomen (p. 21). De stappen staan op de GoodWe-merkpagina.
!!!`
    },
    {
      id: 'storingen',
      kop: 'Storingen',
      tekst: `De installatiehandleiding geeft alleen een lijst met foutnamen en een korte uitleg (p. 36). Bijvoorbeeld Utility Loss (net weg), PV over voltage, Isolation failure, Ground I failure (lekstroom), Relay-check failure, Battery communication failure en Over Load (back-up overbelast).

Voor de aanpak gebruik je de algemene **Probleemoplossingsgids** van GoodWe, die de ESA-serie naast ET, EH, ES en andere hybride omvormers noemt:

1. De lampjes (p. 5-9). COM knippert bijvoorbeeld bij een BMS- of meterprobleem en FAULT knippert een keer bij overbelasting van de back-up.
2. De foutcode in SolarGo of SEMS Portal (p. 10-19), met per code de oorzaak en de oplossing.
3. Problemen zonder melding (p. 20-23), zoals vreemd laden, een uitgeschakelde back-up, lage PV-opbrengst of een batterij die niet communiceert.
4. Batterijalarmen (p. 24), wifi (p. 25-26) en firmware bijwerken (p. 28-31).

| Melding | Wat de gids aanraadt |
|---|---|
| Geen netcontact, FAC-fout | Netspanning op de AC-klemmen meten, aansluitingen en automaat controleren en kijken of L en N niet verwisseld zijn. Daarna de automaat 5 minuten uit en weer aan |
| Aardfout, relaisfout | Spanning tussen nul en aarde meten (onder 10 V), aansluiting van N en PE controleren |
| PV-overspanning | Open klemspanning per string meten, zo nodig panelen uit de string halen |
| Isolatiefout | Strings een voor een aansluiten om de slechte te vinden. Bij vocht kan het tijdelijk zijn |
| Te hoge temperatuur | Ventilatie verbeteren, 15 minuten uit en weer aan |

Blijft de storing, neem dan contact op met de GoodWe-service (Storingsgids p. 36).`
    },
    {
      id: 'wat-niet-in-handleiding',
      kop: 'Wat niet in de handleiding staat of niet klopt',
      tekst: `- De omvormerhandleiding noemt de batterijkast BCL0096, de eigen handleiding BCL9600.
- Hoofdstuk 2 van de batterijkasthandleiding spreekt van twee SECU-A-pakketten van 4,8 kWh (samen 9,6 kWh). Hoofdstuk 3 en de datasheet noemen 5,4 kWh per pakket (tot 10,8 kWh). Kijk dus op het typeplaatje van het pakket.
- De kast houdt twee pakketten, maar de DIP-tabel spreekt van maximaal vier. Dat past bij twee gekoppelde kasten, wat de handleiding als optie noemt maar niet uitwerkt.
- Het back-upvermogen is 5000 W in de tekst en 4600 VA in het technische blad.
- Wat "14A" in de naam van de datasheet betekent, legt de datasheet zelf niet uit.
- Niet beschreven zijn het aardlektype, de groepsgrootte, de netcode-instellingen voor Nederland en de opslag van de batterijen.`
    }
  ],

  handleidingRefs: [
    { doc: 'im', hoofdstuk: 'Safety Precautions', paginas: '4-8', onderwerp: 'Doelgroep, alle bronnen uit, 5 minuten, batterijveiligheid' },
    { doc: 'im', hoofdstuk: '01 Introduction', paginas: '9-10', onderwerp: 'Functies, 48 V lithium, 80% op het net, maten en vrije ruimte' },
    { doc: 'im', hoofdstuk: '02 Planning', paginas: '11-13', onderwerp: 'Back-upbelastingen en de vier werkmodi' },
    { doc: 'im', hoofdstuk: '03 Installation', paginas: '14-17', onderwerp: 'Leveringsomvang, plaats, gereedschap, wandplaat, BoS en omvormer' },
    { doc: 'im', hoofdstuk: '4.1 en 4.2 BoS Wiring', paginas: '18-20', onderwerp: 'Kap verwijderen, aansluitingen en automaten, aansluitschema' },
    { doc: 'im', hoofdstuk: '4.2.2 tot 4.2.5 PE, PV, batterij en BMS', paginas: '21-24', onderwerp: 'Kabeldiktes, aanhaalmoment, polariteit, BMS-kabel' },
    { doc: 'im', hoofdstuk: '4.2.6 tot 4.2.8 AC-aansluitingen', paginas: '25-27', onderwerp: 'Net en back-upverdeler' },
    { doc: 'im', hoofdstuk: '4.3 Energy Meter Connections', paginas: '28-29', onderwerp: 'DIN-railmeter, stroomtang, klemnummers' },
    { doc: 'im', hoofdstuk: '05 Operation', paginas: '30-33', onderwerp: 'Bypass-schakelaar, in- en uitschakelen, lampjes' },
    { doc: 'im', hoofdstuk: '06 Internet Connection', paginas: '34-35', onderwerp: 'Wifi-instelling en SolarGo' },
    { doc: 'im', hoofdstuk: '07 Troubleshooting', paginas: '36', onderwerp: 'Lijst met foutnamen' },
    { doc: 'im', hoofdstuk: '08 Technical Parameters', paginas: '37-40', onderwerp: 'Specificaties omvormer en batterijkast' },
    { doc: 'bk', hoofdstuk: '01 Product Introduction', paginas: '4-5', onderwerp: 'Maten en onderdelen' },
    { doc: 'bk', hoofdstuk: '02 Installation', paginas: '5-9', onderwerp: 'Plaats, voeten, vastzetten, pakketten plaatsen en aarden' },
    { doc: 'bk', hoofdstuk: '03 BMS Connections', paginas: '10-12', onderwerp: 'DIP-schakelaars, batterijkeuze in SolarGo, BMS-kabels' },
    { doc: 'bk', hoofdstuk: '04 Connecting en 05 Commissioning', paginas: '13-15', onderwerp: 'Kast op de omvormer aansluiten en batterijen starten' },
    { doc: 'ds', hoofdstuk: 'ESA Series', paginas: '1-2', onderwerp: 'Kenmerken en specificaties GW5048-ESA met batterijkast' },
    { doc: 'tg', hoofdstuk: '3 Probleemoplossing via LED-indicatoren', paginas: '5-9', onderwerp: 'Betekenis van de lampjes en wat te doen' },
    { doc: 'tg', hoofdstuk: '4 Probleemoplossing via SEMS Portal en SolarGo', paginas: '10-19', onderwerp: 'Alarmen uitlezen en foutcodes met oplossing' },
    { doc: 'tg', hoofdstuk: '5 Probleemoplossing zonder alarmen, 5.1 Accufouten', paginas: '20-24', onderwerp: 'Laden, back-up, meter, batterijcommunicatie' },
    { doc: 'tg', hoofdstuk: '6 Wifi en 8 Firmware updaten', paginas: '25-31', onderwerp: 'Wifi-problemen en firmware' },
    { doc: 'tg', hoofdstuk: '10 Contact met het servicecentrum', paginas: '36', onderwerp: 'Wanneer en hoe de service bellen' }
  ],

  cursusLinks: ['m10l01', 'm10l02', 'm01l03', 'm02l06', 'm03l05', 'm06l03'],

  zieOok: ['goodwe-esa-3-10kw', 'goodwe-esa-5-30kw', 'goodwe-esa-athena', 'sigenergy-sigenstor-home']
});
