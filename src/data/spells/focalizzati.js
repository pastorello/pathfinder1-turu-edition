const spells = [
  {
    level: 2,
    url: "/wikiInvocare_il_Giuramento_Cremisi",
    name: "Invocare il Giuramento Cremisi",
    source: [],
    school: "invocazione",
    description:
      "Brandendo la tua arma scateni un'esplosione di energia distruttiva.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Incantesimi/Dardo_Invernale",
    name: "Dardo Invernale",
    source: [],
    school: "invocazione",
    description: "Scagli un pezzo di ghiaccio pieno dell'ira invernale.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Incantesimi/Espellere_Anima",
    name: "Espellere Anima",
    source: [],
    school: "necromanzia",
    description:
      "Il tuo tocco distrugge la connessione tra corpo e anima, possibilmente costringendo l'anima a fuoriuscire del tutto dal corpo.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Incantesimi/Essiccare",
    name: "Essiccare",
    source: [],
    school: "invocazione",
    description: "Venti secchi disidratano una creatura.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Incantesimi/Giavellotto_Elettrico",
    name: "Giavellotto Elettrico",
    source: [],
    school: "invocazione",
    description:
      "Scagli un giavellotto di elettricità che lascia un campo caricato attorno al suo bersaglio.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Incantesimi/Iperfocalizzazione",
    name: "Iperfocalizzazione",
    source: [],
    school: "divinazione",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Incantesimi/Lamento",
    name: "Lamento",
    source: [],
    school: "ammaliamento",
    description:
      "Acuisci i sensi di una creatura, sebbene gli oggetti più lontani divengano per essa confusi, indistinti o muti.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Percezione_dello_Sciame",
    name: "Percezione dello Sciame",
    source: [],
    school: "divinazione",
    description:
      "Estendi i tuoi sensi attraverso una moltitudine di creature striscianti e volanti.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Piaghe_Divine",
    name: "Piaghe Divine",
    source: [],
    school: "necromanzia",
    energy: "negativa",
    description: "La tua divinità invia piaghe devastanti.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Ricordi_dell%27Oggetto",
    name: "Ricordi dell'Oggetto",
    source: [],
    school: "divinazione",
    description:
      "Toccando un oggetto, ne estrai l'esperienza di coloro che l'hanno creato e usato.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Ritardare_Conseguenze",
    name: "Ritardare Conseguenze",
    source: [],
    school: "abiurazione",
    description:
      "Differisci il momento in cui il bersaglio verrebbe ferito a uno successivo nel flusso temporale.",
    type: "focalizzato",
  },
  {
    level: 2,
    url: "/wiki/Incantesimi/Sbarramento_Draconico",
    name: "Sbarramento Draconico",
    source: [],
    school: "invocazione",
    description:
      "Modelli dell'energia in un minuscolo drago (o creatura serpentina) che ti svolazza attorno.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Stella_Zenith",
    name: "Stella Zenith",
    source: [],
    school: "divinazione",
    description:
      "Richiami una minuscola stella affinché orbiti attorno a una creatura in un alone scintillante prima di scattare in alto verso i cieli, dove segna la posizione approssimativa della creatura.",
    type: "focalizzato",
  },

  {
    level: 1,
    url: "/wiki/Incantesimi/Stemma_del_Giuramento",
    name: "Stemma del Giuramento",
    source: [],
    school: "evocazione",
    description:
      "Un indicatore magico assicura a una creatura che hai mantenuto la tua parte dell'accordo.",
    type: "focalizzato",
  },

  {
    level: 1,
    url: "/wiki/Incantesimi/Stretta_Avvizzente",
    name: "Stretta Avvizzente",
    source: [],
    school: "necromanzia",
    energy: "negativa",
    description:
      "Il tuo tocco fa marcire la materia organica e decomporre gli oggetti.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Vuoto_Interno",
    name: "Vuoto Interno",
    source: [],
    school: "abiurazione",
    description:
      "Inietti un frammento di vuoto nella tua mente, rimodellandola momentaneamente in un luogo vuoto e desolato.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Ablazione_Adattiva",
    name: "Ablazione Adattiva",
    source: [],
    school: "abiurazione",
    description:
      "Ti cambi per adattarti alla mistica lunghezza d'onda dei danni da energia, proteggendoti da ulteriori ferite.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Asterismo",
    name: "Asterismo",
    source: [],
    school: "invocazione",
    description:
      "Delle linee di ardente luce stellare formano una costellazione attorno a te.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Campo_Incolto",
    name: "Campo Incolto",
    source: [],
    school: "necromanzia",
    energy: "negativa",
    description:
      "Una malsana luce gialla riempie l'aria mentre forze entropiche impediscono la guarigione.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Forma_di_Mantide",
    name: "Forma di Mantide",
    source: [],
    school: "trasmutazione",
    description: "Diventi una mantide.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Forma_di_Sciame",
    name: "Forma di Sciame",
    source: [],
    school: "trasmutazione",
    description: "Ti scorpori in uno sciame di creature Minuscole.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Fonte_di_Serenit%C3%A0",
    name: "Fonte di Serenità",
    source: [],
    school: "abiurazione",
    description:
      "Un faro divino emana serenità, rinfrancando gli alleati vicini.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Imbottigliare_Tempesta",
    name: "Imbottigliare Tempesta",
    source: [],
    school: "invocazione",
    description:
      "Quando il fulmine viene rivolto contro di te, ne conservi in sicurezza l'energia al tuo interno, rilasciandola al momento opportuno.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Interstizio_Ectoplasmatico",
    name: "Interstizio Ectoplasmatico",
    source: [],
    school: "necromanzia",
    description:
      "Costringi il Piano Materiale e quello Etereo a sovrapporsi parzialmente, creando una zona che fa sì che entità incorporee e spirituali assumano molti aspetti delle creature corporee.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Miasma_Ripugnante",
    name: "Miasma Ripugnante",
    source: [],
    school: "necromanzia",
    energy: "negativa",
    description:
      "Moltiplica la Malattia all'interno di una creatura, tirandola fuori dal suo corpo in una nebbia infettiva, dove può diffondersi ad altre creature.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Pericoli_Evanescenti",
    name: "Pericoli Evanescenti",
    source: [],
    school: "illusione",
    description:
      "Crei dei pericoli illusori, come delle lame rotanti o una pozza d'acido, in quattro spazi di 3 metri per 3 entro portata.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Polvere_di_Diamante",
    name: "Polvere di Diamante",
    source: [],
    school: "invocazione",
    description:
      "Raffreddi l'area circostante, formando una nube di cristalli di ghiaccio danzanti in un'emanazione attorno a te.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Porta_sull%27Oltre",
    name: "Porta sull'Oltre",
    source: [],
    school: "evocazione",
    description:
      "Colpendo l'aria, crei in uno spazio adiacente non occupato delle sottili fenditure che conducono a qualche luogo fuori dalla realtà.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Ricordare_i_Perduti",
    name: "Ricordare i Perduti",
    source: [],
    school: "divinazione",
    description:
      "Invochi i perduti e i dimenticati, assalendo le menti dei tuoi nemici con i ricordi di coloro che sono morti avendo subito un torto da essi.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Ruggito_del_Dragone",
    name: "Ruggito del Dragone",
    source: [],
    school: "ammaliamento",
    description:
      "Incanali il potere dei draghi nella tua voce, rilasciando un ruggito che genera rispetto nelle creature draconiche ma instilla paura nella maggioranza delle altre creature.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Sfida_Doverosa",
    name: "Sfida Doverosa",
    source: [],
    school: "abiurazione",
    description:
      "Quando sfidi un nemico allontani parzialmente la sua attenzione dai tuoi alleati.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Sofferenza_Traboccante",
    name: "Sofferenza Traboccante",
    source: [],
    school: "ammaliamento",
    description:
      "La tristezza fluisce da te verso le creature nelle vicinanze, oscurando ogni altro pensiero avessero.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Stasi",
    name: "Stasi",
    source: [],
    school: "trasmutazione",
    description:
      "Il flusso del tempo si congela attorno a una creatura o un oggetto, tenendolo fermo.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Trascrizione_Fantasma",
    name: "Trascrizione Fantasma",
    source: [],
    school: "illusione",
    description:
      "Delle lettere luminescenti si assemblano in aria, fornendo una trascrizione del discorso del bersaglio in tutte le lingue che tu parli.",
    type: "focalizzato",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Tempesta_di_Polvere",
    name: "Tempesta di Polvere",
    source: [],
    school: "invocazione",
    asd: "Richiami una vorticante tempesta di polvere.",
  },
];

export default spells;
