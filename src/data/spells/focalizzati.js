const spells = [
  {
    level: 2,
    url: "/wiki/Incantesimi/Invocare_il_Giuramento_Cremisi",
    name: "Invocare il Giuramento Cremisi",
    source: [],
    school: "invocazione",
    description:
      "Brandendo la tua arma scateni un'esplosione di energia distruttiva.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Dardo_Invernale",
    name: "Dardo Invernale",
    source: [],
    school: "invocazione",
    description: "Scagli un pezzo di ghiaccio pieno dell'ira invernale.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Espellere_Anima",
    name: "Espellere Anima",
    source: [],
    school: "necromanzia",
    description:
      "Il tuo tocco distrugge la connessione tra corpo e anima, possibilmente costringendo l'anima a fuoriuscire del tutto dal corpo.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Essiccare",
    name: "Essiccare",
    source: [],
    school: "invocazione",
    description: "Venti secchi disidratano una creatura.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Giavellotto_Elettrico",
    name: "Giavellotto Elettrico",
    source: [],
    school: "invocazione",
    description:
      "Scagli un giavellotto di elettricità che lascia un campo caricato attorno al suo bersaglio.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Lamento",
    name: "Lamento",
    source: [],
    school: "ammaliamento",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },
];

/* 

  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },
url: "/wiki/Percezione_dello_Sciame" title="Percezione dello Sciame">Percezione dello Sciame</a>
asd:  "<a href="/wiki/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>
asd:  "Estendi i tuoi sensi attraverso una moltitudine di creature striscianti e volanti.

  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },
url: "/wiki/Piaghe_Divine" title="Piaghe Divine">Piaghe Divine</a>
asd:  "<a href="/wiki/Tratti/Malattia" title="Tratti/Malattia">Malattia</a>, <a href="/wiki/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>
asd:  "La tua divinità invia piaghe devastanti.

  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },
url: "/wiki/Ricordi_dell%27Oggetto" title="Ricordi dell'Oggetto">Ricordi dell'Oggetto</a>
asd:  "<a href="/wiki/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>
asd:  "Toccando un oggetto, ne estrai l'esperienza di coloro che l'hanno creato e usato.

url: "/wiki/Ritardare_Conseguenze" title="Ritardare Conseguenze">Ritardare Conseguenze</a>
asd:  "<a href="/wiki/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>
asd:  "Differisci il momento in cui il bersaglio verrebbe ferito a uno successivo nel flusso temporale.
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },

url: "/wiki/Sbarramento_Draconico" title="Sbarramento Draconico">Sbarramento Draconico</a>
asd:  "<a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>
asd:  "Modelli dell'energia in un minuscolo drago (o creatura serpentina) che ti svolazza attorno.
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },

url: "/wiki/Stella_Zenith" title="Stella Zenith">Stella Zenith</a>
asd:  "<a href="/wiki/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>, <a href="/wiki/Tratti/Luce" title="Tratti/Luce">Luce</a>
asd:  "Richiami una minuscola stella affinché orbiti attorno a una creatura in un alone scintillante prima di scattare in alto verso i cieli, dove segna la posizione approssimativa della creatura.
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },

url: "/wiki/Stemma_del_Giuramento" title="Stemma del Giuramento">Stemma del Giuramento</a>
asd:  "<a href="/wiki/Tratti/Evocazione" title="Tratti/Evocazione">Evocazione</a>
asd:  "Un indicatore magico assicura a una creatura che hai mantenuto la tua parte dell'accordo.
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },

url: "/wiki/Stretta_Avvizzente" title="Stretta Avvizzente">Stretta Avvizzente</a>
asd:  "<a href="/wiki/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>, <a href="/wiki/Tratti/Negativo" title="Tratti/Negativo">Negativo</a>
asd:  "Il tuo tocco fa marcire la materia organica e decomporre gli oggetti.
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },

url: "/wiki/Vuoto_Interno" title="Vuoto Interno">Vuoto Interno</a>
asd:  "<a href="/wiki/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Inietti un frammento di vuoto nella tua mente, rimodellandola momentaneamente in un luogo vuoto e desolato.
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },

url: "/wiki/Ablazione_Adattiva" title="Ablazione Adattiva">Ablazione Adattiva</a>
asd:  "<a href="/wiki/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>
asd:  "4
asd:  "Ti cambi per adattarti alla mistica lunghezza d'onda dei danni da energia, proteggendoti da ulteriori ferite.
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },

url: "/wiki/Asterismo" title="Asterismo">Asterismo</a>
asd:  "<a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Tratti/Luce" title="Tratti/Luce">Luce</a>
asd:  "4
asd:  "Delle linee di ardente luce stellare formano una costellazione attorno a te.
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },

 url:   "/wiki/Campo_Incolto" title="Campo Incolto">Campo Incolto</a>
asd:  "<a href="/wiki/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>, <a href="/wiki/Tratti/Negativo" title="Tratti/Negativo">Negativo</a>
asd:  "4
asd:  "Una malsana luce gialla riempie l'aria mentre forze entropiche impediscono la guarigione.
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },

 url:   "/wiki/Forma_di_Mantide" title="Forma di Mantide">Forma di Mantide</a>
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Metamorfosi" title="Tratti/Metamorfosi">Metamorfosi</a>, <a href="/wiki/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "4
asd:  "Diventi una mantide.
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },

url:   "/wiki/Forma_di_Sciame" title="Forma di Sciame">Forma di Sciame</a>
asd:  "<a href="/wiki/Tratti/Metamorfosi" title="Tratti/Metamorfosi">Metamorfosi</a>, <a href="/wiki/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "4
asd:  "Ti scorpori in uno sciame di creature <a href="/wiki/Tratti/Taglia" title="Tratti/Taglia">Minuscole</a>.
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },

url:   "/wiki/Fonte_di_Serenit%C3%A0" title="Fonte di Serenità">Fonte di Serenità</a>
asd:  "<a href="/wiki/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>, <a href="/wiki/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "4
asd:  "Un faro divino emana serenità, rinfrancando gli alleati vicini.
  {
    level: 2,
    url: "/wiki/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },
  
 url:   "/wiki/Imbottigliare_Tempesta" title="Imbottigliare Tempesta">Imbottigliare Tempesta</a>
asd:  "Bottle the Storm

asd:  "<a href="/wiki/Tratti/Elettricit%C3%A0" title="Tratti/Elettricità">Elettricità</a>, <a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Quando il fulmine viene rivolto contro di te, ne conservi in sicurezza l'energia al tuo interno, rilasciandola al momento opportuno.
asd:  "Presagi Perduti: Divinità e Magia


 url:   "/wiki/Interstizio_Ectoplasmatico" title="Interstizio Ectoplasmatico">Interstizio Ectoplasmatico</a>
asd:  "Ectoplasmic Interstice

asd:  "<a href="/wiki/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>
asd:  "Focalizzato
asd:  "4
asd:  "Costringi il <a href="/wiki/Piano_Materiale" title="Piano Materiale">Piano Materiale</a> e quello <a href="/wiki/Piano_Etereo" title="Piano Etereo">Etereo</a> a sovrapporsi parzialmente, creando una zona che fa sì che entità incorporee e spirituali assumano molti aspetti delle creature corporee.
asd:  "Presagi Perduti: Divinità e Magia


 url:   "/wiki/Miasma_Ripugnante" title="Miasma Ripugnante">Miasma Ripugnante</a>
asd:  "Foul Miasma

asd:  "<a href="/wiki/Tratti/Malattia" title="Tratti/Malattia">Malattia</a>, <a href="/wiki/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>
asd:  "Focalizzato
asd:  "4
asd:  "Moltiplica la <a href="/wiki/Malattia" title="Malattia">Malattia</a> all'interno di una creatura, tirandola fuori dal suo corpo in una nebbia infettiva, dove può diffondersi ad altre creature.
asd:  "Presagi Perduti: Divinità e Magia

url:   "/wiki/Pericoli_Evanescenti" title="Pericoli Evanescenti">Pericoli Evanescenti</a>
asd:  "Ephemeral Hazards

asd:  "<a href="/wiki/Tratti/Illusione" title="Tratti/Illusione">Illusione</a>, <a href="/wiki/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>, <a href="/wiki/Tratti/Visivo" title="Tratti/Visivo">Visivo</a>
asd:  "Focalizzato
asd:  "4
asd:  "Crei dei pericoli illusori, come delle lame rotanti o una pozza d'acido, in quattro spazi di 3 metri per 3 entro portata.
asd:  "Presagi Perduti: Divinità e Magia

url:   "/wiki/Polvere_di_Diamante" title="Polvere di Diamante">Polvere di Diamante</a>
asd:  "Diamond Dust

asd:  "<a href="/wiki/Tratti/Freddo" title="Tratti/Freddo">Freddo</a>, <a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Raffreddi l'area circostante, formando una nube di cristalli di ghiaccio danzanti in un'emanazione attorno a te.
asd:  "Presagi Perduti: Divinità e Magia

 url:   "/wiki/Porta_sull%27Oltre" title="Porta sull'Oltre">Porta sull'Oltre</a>
asd:  "Door to Beyond

asd:  "<a href="/wiki/Tratti/Evocazione" title="Tratti/Evocazione">Evocazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Colpendo l'aria, crei in uno spazio adiacente non occupato delle sottili fenditure che conducono a qualche luogo fuori dalla realtà.
asd:  "Presagi Perduti: Divinità e Magia

url:   "/wiki/Ricordare_i_Perduti" title="Ricordare i Perduti">Ricordare i Perduti</a>
asd:  "Remember the Lost

asd:  "<a href="/wiki/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>, <a href="/wiki/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "4
asd:  "Invochi i perduti e i dimenticati, assalendo le menti dei tuoi nemici con i ricordi di coloro che sono morti avendo subito un torto da essi.
asd:  "Presagi Perduti: Divinità e Magia


 url:   "/wiki/Ruggito_del_Dragone" title="Ruggito del Dragone">Ruggito del Dragone</a>
asd:  "Roar of the Wyrm

asd:  "<a href="/wiki/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Incanali il potere dei draghi nella tua voce, rilasciando un ruggito che genera rispetto nelle creature draconiche ma instilla paura nella maggioranza delle altre creature.
asd:  "Presagi Perduti: Divinità e Magia



 url:   "/wiki/Sfida_Doverosa" title="Sfida Doverosa">Sfida Doverosa</a>
asd:  "Dutiful Challenge

asd:  "<a href="/wiki/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Quando sfidi un nemico allontani parzialmente la sua attenzione dai tuoi alleati.
asd:  "Presagi Perduti: Divinità e Magia

url:   "/wiki/Sofferenza_Traboccante" title="Sofferenza Traboccante">Sofferenza Traboccante</a>
asd:  "Overflowing Sorrow

asd:  "<a href="/wiki/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>, <a href="/wiki/Tratti/Incapacitazione" title="Tratti/Incapacitazione">Incapacitazione</a>, <a href="/wiki/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "4
asd:  "La tristezza fluisce da te verso le creature nelle vicinanze, oscurando ogni altro pensiero avessero.
asd:  "Presagi Perduti: Divinità e Magia

 url:   "/wiki/Stasi" title="Stasi">Stasi</a>
asd:  "Stasis

asd:  "<a href="/wiki/Tratti/Incapacitazione" title="Tratti/Incapacitazione">Incapacitazione</a>, <a href="/wiki/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Il flusso del tempo si congela attorno a una creatura o un oggetto, tenendolo fermo.
asd:  "Presagi Perduti: Divinità e Magia

 url:   "/wiki/Trascrizione_Fantasma" title="Trascrizione Fantasma">Trascrizione Fantasma</a>
asd:  "Ghostly Transcription

asd:  "<a href="/wiki/Tratti/Illusione" title="Tratti/Illusione">Illusione</a>, <a href="/wiki/Tratti/Visivo" title="Tratti/Visivo">Visivo</a>
asd:  "Focalizzato
asd:  "4
asd:  "Delle lettere luminescenti si assemblano in aria, fornendo una trascrizione del discorso del bersaglio in tutte le lingue che tu parli.
asd:  "Presagi Perduti: Divinità e Magia

url:   "/wiki/Tempesta_di_Polvere" title="Tempesta di Polvere">Tempesta di Polvere</a>
asd:  "Dust Storm

asd:  "<a href="/wiki/Tratti/Aria" title="Tratti/Aria">Aria</a>, <a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Tratti/Non_Letale" title="Tratti/Non Letale">Non Letale</a>
asd:  "Focalizzato
asd:  "4
asd:  "Richiami una vorticante tempesta di polvere.
asd:  "Presagi Perduti: Divinità e Magia

*/

export default spells;
