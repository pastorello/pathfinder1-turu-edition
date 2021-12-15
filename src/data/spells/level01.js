const primeviSpells = [
  {
    level: 1,
    url: "/wiki/Evoca_Piante_e_Funghi",
    name: "Evoca Piante e Funghi Evoca Piante e Funghi ",
    school: "evocazione",
    description: "Evochi una pianta o fungo che combatta con te",
  },
  {
    level: 1,
    url: "/wiki/Passare_Senza_Tracce",
    name: "Passare Senza Tracce Passare Senza Tracce ",
    school: "abiurazione",
    description: "Rendi le tue tracce difficili da trovare",
  },
  {
    level: 1,
    url: "/wiki/Randello_Incantato",
    name: "Randello Incantato Randello Incantato",
    school: "trasmutazione",
    description:
      "Rendi un randello o un bastone temporaneamente magico, ed infliggi un maggior numero di danni alle creature innaturali",
  },
  {
    level: 1,
    url: "/wiki/Zanna_Magica",
    name: "Zanna Magica Zanna Magica",
    school: "trasmutazione",
    description:
      "Rendi gli attacchi senz'armi di una creatura temporaneamente magici",
  },
];

const occultSpells = [
  {
    level: 1,
    url: "/wiki/Cattivo_Presagio",
    name: "Cattivo Presagio Cattivo Presagio",
    school: "divinazione",
    description:
      "Il bersaglio viene colpito dalla sfortuna, venendone destabilizzato",
  },
  {
    level: 1,
    url: "/wiki/Connessione_Mentale",
    name: "Connessione Mentale Connessione Mentale",
    school: "divinazione",
    description:
      "Impartisci mentalmente 10 minuti di informazioni in un istante",
  },
  {
    level: 1,
    url: "/wiki/Dolore_Fantasma",
    name: "Dolore Fantasma Dolore Fantasma ",
    school: "illusione",
    description:
      "Provochi a una creatura un dolore continuo che la rende nauseata",
  },
  {
    level: 1,
    url: "/wiki/Evoca_Fatato",
    name: "Evoca Fatato Evoca Fatato ",
    school: "evocazione",
    description: "Evochi un fatato che combatta con te",
  },
  {
    level: 1,
    url: "/wiki/Imprimere_Messaggio",
    name: "Imprimere Messaggio Imprimere Messaggio ",
    school: "divinazione",
    description:
      "Proietti delle vibrazioni psichiche verso il bersaglio, imprimendovi un breve messaggio o un'emozione che vuoi comunicare",
  },
  {
    level: 1,
    url: "/wiki/Leggere_un_Oggetto",
    name: "Leggere un Oggetto Leggere un Oggetto ",
    school: "divinazione",
    description:
      "Posi la mano su un oggetto per scoprire un'informazione circa un evento emotivo che ha coinvolto l'oggetto",
  },
  {
    level: 1,
    url: "/wiki/Lenire",
    name: "Lenire Lenire ",
    school: "necromanzia",
    description:
      "Guarisci il bersaglio e lo rinforzi contro gli attacchi mentali",
  },
];

const divineSpells = [
  {
    level: 1,
    url: "/wiki/Anatema",
    name: "Anatema Anatema",
    school: "ammaliamento",
    description:
      "Rendi difficili gli attacchi dei tuoi nemici in un'aura attorno a te",
  },
  {
    level: 1,
    url: "/wiki/Arma_Distruttiva",
    name: "Arma Distruttiva Arma Distruttiva ",
    school: "necromanzia",
    description: "Le armi infliggono danni di tipo positivo ai non morti",
  },
  {
    level: 1,
    url: "/wiki/Benedizione",
    name: "Benedizione Benedizione",
    school: "ammaliamento",
    description:
      "Rendi potenti gli attacchi dei tuoi alleati in un'aura attorno a te",
  },
  {
    level: 1,
    url: "/wiki/Ferire",
    name: "Ferire Ferire ",
    school: "necromanzia",
    description:
      "Energia negativa ferisce i viventi o guarisce i non morti, sia una creatura alla volta che tutte insieme in un'esplosione",
  },
  {
    level: 1,
    url: "/wiki/Guarire",
    name: "Guarire Guarire ",
    school: "necromanzia",
    description:
      "Energia positiva guarisce i viventi o ferisce i non morti sia una creatura singola che tutte quelle presenti in un'esplosione",
  },
  {
    level: 1,
    url: "/wiki/Individuazione_del_Veleno",
    name: "Individuazione del Veleno Individuazione del Veleno ",
    school: "divinazione",
    description: "Determini se un oggetto o creatura è velenoso",
  },
  {
    level: 1,
    url: "/wiki/Individuazione_dell%27Allineamento",
    name: "Individuazione dell'Allineamento Individuazione dell'Allineamento ",
    school: "divinazione",
    description: "Vedi le aure di un dato allineamento",
  },
  {
    level: 1,
    url: "/wiki/Legame_con_lo_Spirito",
    name: "Legame con lo Spirito Legame con lo Spirito ",
    school: "necromanzia",
    description: "Trasferisci ininterrottamente la tua salute a qualcun altro",
  },
  {
    level: 1,
    url: "/wiki/Protezione",
    name: "Protezione Protezione ",
    school: "abiurazione",
    description: "Proteggi una creatura da quelle di un dato allineamento",
  },
  {
    level: 1,
    url: "/wiki/Purificare_Cibo_e_Bevande",
    name: "Purificare Cibo e Bevande Purificare Cibo e Bevande",
    school: "necromanzia",
    description: "Rendi cibi e bevande sicuri da consumare",
  },
  {
    level: 1,
    url: "/wiki/Santuario",
    name: "Santuario Santuario",
    school: "abiurazione",
    description: "Proteggi una creatura dagli attacchi",
  },
];
const arcaneSpells = [
  {
    level: 1,
    url: "/wiki/Agitare",
    name: "Agitare",
    school: "ammaliamento",
    description:
      "Mandi in sovraccarico la mente e il corpo di un bersaglio, costringendolo a diventare irrequieto e iperattivo",
  },
  {
    level: 1,
    url: "/wiki/Allarme",
    name: "Allarme Allarme",
    school: "abiurazione",
    description: "Vieni avvertito se una creatura entra in un'area protetta",
  },
  {
    level: 1,
    url: "/wiki/Arma_Magica",
    name: "Arma Magica Arma Magica",
    school: "trasmutazione",
    description: "Rendi un'arma temporaneamente magica",
  },
  {
    level: 1,
    url: "/wiki/Armatura_Magica",
    name: "Armatura Magica Armatura Magica",
    school: "abiurazione",
    description: "Ti proteggi con  un'armatura magica",
  },
  {
    level: 1,
    url: "/wiki/Aura_Magica",
    name: "Aura Magica Aura Magica",
    school: "illusione",
    description:
      "Cambi il modo in cui appare la magia di un oggetto agli incantesimi di individuazione",
  },
  {
    level: 1,
    url: "/wiki/Bolla_d%27Aria",
    name: "Bolla d'Aria Bolla d'Aria",
    school: "evocazione",
    description: "Reagisci per creare aria affinché una creatura respiri",
  },
  {
    level: 1,
    url: "/wiki/Caduta_Morbida",
    name: "Caduta Morbida Caduta Morbida",
    school: "abiurazione",
    description: "Reagisci per rallentare la caduta di una creatura",
  },
  {
    level: 1,
    url: "/wiki/Camuffamento_Illusorio",
    name: "Camuffamento Illusorio Camuffamento Illusorio",
    school: "illusione",
    description: "Assumi l'aspetto di  un'altra creatura",
  },
  {
    level: 1,
    url: "/wiki/Carico_della_Formica",
    name: "Carico della Formica Carico della Formica",
    school: "trasmutazione",
    description: "Il bersaglio può trasportare un carico maggiore",
  },
  {
    level: 1,
    url: "/wiki/Charme",
    name: "Charme Charme",
    school: "ammaliamento",
    description: "Un umanoide diventa più amichevole nei tuoi confronti",
  },
  {
    level: 1,
    url: "/wiki/Colpo_Accurato",
    name: "Colpo Accurato Colpo Accurato",
    school: "divinazione",
    description: "Rendi il tuo prossimo attacco particolarmente accurato",
  },
  {
    level: 1,
    url: "/wiki/Comando",
    name: "Comando Comando",
    school: "ammaliamento",
    description:
      "Ordini a una creatura di avvicinarsi, fuggire, lasciar cadere qualcosa, cadere prona o alzarsi in piedi",
  },
  {
    level: 1,
    url: "/wiki/Condividere_Sapienza",
    name: "Condividere Sapienza Condividere Sapienza",
    school: "divinazione",
    description: "Condividi la tua conoscenza con le creature toccate",
  },
  {
    level: 1,
    url: "/wiki/Creare_Acqua",
    name: "Creare Acqua Creare Acqua",
    school: "evocazione",
    description: "Evochi 8 litri di acqua",
  },
  {
    level: 1,
    url: "/wiki/Dardo_Incantato",
    name: "Dardo Incantato Dardo Incantato",
    school: "invocazione",
    description: "Bersagli le creature con dardi infallibili di forza magica",
  },
  {
    level: 1,
    url: "/wiki/Disco_Fluttuante",
    name: "Disco Fluttuante Disco Fluttuante",
    school: "evocazione",
    description: "Un disco di energia ti segue, trasportando oggetti",
  },
  {
    level: 1,
    url: "/wiki/Disorientare",
    name: "Disorientare Disorientare",
    school: "ammaliamento",
    description:
      "Pianti semi di confusione nella mente del tuo bersaglio, rendendo maldestri sia le sue azioni che i suoi pensieri",
  },
  {
    level: 1,
    url: "/wiki/Esplosione_Acida",
    name: "Esplosione Acida Esplosione Acida",
    school: "invocazione",
    description:
      "Crei un guscio di acido attorno a tè che esplode immediatamente verso l'esterno",
  },
  {
    level: 1,
    url: "/wiki/Evoca_Animale",
    name: "Evoca Animale Evoca Animale",
    school: "evocazione",
    description: "Evochi un animale che combatta con te",
  },
  {
    level: 1,
    url: "/wiki/Evoca_Costrutto",
    name: "Evoca Costrutto Evoca Costrutto",
    school: "evocazione",
    description: "Evochi un costrutto che combatta con te",
  },
  {
    level: 1,
    url: "/wiki/Folata_di_Vento",
    name: "Folata di Vento Folata di Vento",
    school: "invocazione",
    description: "Il vento spegne i fuochi e respinge oggetti e creature",
  },
  {
    level: 1,
    url: "/wiki/Forma_Minuscola",
    name: "Forma Minuscola Forma Minuscola",
    school: "trasmutazione",
    description: "Ti trasformi in un animale non pericoloso",
  },
  {
    level: 1,
    url: "/wiki/Gemma_a_Frantumazione",
    name: "Gemma a Frantumazione Gemma a Frantumazione",
    school: "abiurazione",
    description:
      "Una grossa gemma fluttua attorno al bersaglio con  un'orbita irregolare",
  },
  {
    level: 1,
    url: "/wiki/Legare",
    name: "Legare Legare",
    school: "abiurazione",
    description:
      "Usi catene, viticci o altri lacci di natura magica per legare il tuo bersaglio a te",
  },
  {
    level: 1,
    url: "/wiki/Mani_Brucianti",
    name: "Mani Brucianti Mani Brucianti",
    school: "invocazione",
    description: "Dalle tue mani si sprigiona un piccolo cono di fiamme",
  },
  {
    level: 1,
    url: "/wiki/Morso_del_Ragno",
    name: "Morso del Ragno Morso del Ragno",
    school: "necromanzia",
    description:
      "Infliggi danni a una creatura e la affliggi con il veleno del ragno",
  },
  {
    level: 1,
    url: "/wiki/Negare_Odore",
    name: "Negare Odore Negare Odore",
    school: "abiurazione",
    description: "Sopprimi l'odore di una creatura",
  },
  {
    level: 1,
    url: "/wiki/Oggetto_Falsificato",
    name: "Oggetto Falsificato Oggetto Falsificato",
    school: "illusione",
    description: "Camuffi un oggetto per farlo apparire perfetto o scadente",
  },
  {
    level: 1,
    url: "/wiki/Oggetto_Illusorio",
    name: "Oggetto Illusorio Oggetto Illusorio",
    school: "illusione",
    description: "Crei  un'illusione verosimile di un oggetto",
  },
  {
    level: 1,
    url: "/wiki/Onda_d%27Urto",
    name: "Onda d'Urto Onda d'Urto",
    school: "invocazione",
    description: "Crei  un'onda di energia che si propaga attraverso la terra",
  },
  {
    level: 1,
    url: "/wiki/Palla_di_Neve",
    name: "Palla di Neve Palla di Neve",
    school: "invocazione",
    description:
      "Grazie alla magia, scagli una palla di neve densa e ghiacciata",
  },
  {
    level: 1,
    url: "/wiki/Passo_Rapido",
    name: "Passo Rapido Passo Rapido",
    school: "trasmutazione",
    description: "Accelera notevolmente la tua velocità",
  },
  {
    level: 1,
    url: "/wiki/Passo_Veloce",
    name: "Passo Veloce Passo Veloce",
    school: "trasmutazione",
    description: "Incrementi la tua velocità per 1 ora",
  },
  {
    level: 1,
    url: "/wiki/Paura",
    name: "Paura Paura",
    school: "ammaliamento",
    description: "Infondi paura a una creatura, fino a farla fuggire",
  },
  {
    level: 1,
    url: "/wiki/Peste_del_Goblin",
    name: "Peste del Goblin Peste del Goblin",
    school: "necromanzia",
    description: "Infetti una creatura con la peste del goblin",
  },
  {
    level: 1,
    url: "/wiki/Prevedere_Pericolo",
    name: "Prevedere Pericolo Prevedere Pericolo",
    school: "divinazione",
    description: "Concedi al bersaglio un barlume di preveggenza",
  },
  {
    level: 1,
    url: "/wiki/Raggio_di_Indebolimento",
    name: "Raggio di Indebolimento Raggio di Indebolimento",
    school: "necromanzia",
    description: "Prosciughi la forza di una creatura",
  },
  {
    level: 1,
    url: "/wiki/Rampicanti_Macabri",
    name: "Rampicanti Macabri Rampicanti Macabri",
    school: "necromanzia",
    description:
      "Le creature in una linea subiscono danni di tipo negativo e sanguinamento",
  },
  {
    level: 1,
    url: "/wiki/Runa_Messaggio",
    name: "Runa Messaggio Runa Messaggio",
    school: "divinazione",
    description:
      "Registri un messaggio della durata massima di 5 minuti e iscrivi una runa speciale su qualsiasi superficie non custodita entro portata",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Riparare",
    name: "Incantesimi/Riparare Riparare",
    school: "trasmutazione",
    description: "Ripari un oggetto non magico",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Saltare",
    name: "Incantesimi/Saltare Saltare",
    school: "trasmutazione",
    description: "Effettui un salto notevole",
  },
  {
    level: 1,
    url: "/wiki/Scambiare_Aspetto",
    name: "Scambiare Aspetto Scambiare Aspetto",
    school: "illusione",
    description: "Scambi il tuo aspetto con quello di qualcun altro",
  },
  {
    level: 1,
    url: "/wiki/Serratura",
    name: "Serratura Serratura",
    school: "abiurazione",
    description: "Rendi una serratura difficile da aprire",
  },
  {
    level: 1,
    url: "/wiki/Servitore_Inosservato",
    name: "Servitore Inosservato Servitore Inosservato",
    school: "evocazione",
    description: "Crei una creatura invisibile al tuo servizio",
  },
  {
    level: 1,
    url: "/wiki/Sonno",
    name: "Sonno Sonno",
    school: "ammaliamento",
    description: "Fai addormentare le creature in  un'area piccola",
  },
  {
    level: 1,
    url: "/wiki/Sopportare",
    name: "Sopportare Sopportare",
    school: "ammaliamento",
    description:
      "Rinvigorisci la mente della creatura toccata, spronandola a perseverare",
  },
  {
    level: 1,
    url: "/wiki/Spinta_Idraulica",
    name: "Spinta Idraulica Spinta Idraulica",
    school: "invocazione",
    description: "Infliggi danni e spingi una creatura con un getto di acqua",
  },
  {
    level: 1,
    url: "/wiki/Spruzzo_Colorato",
    name: "Spruzzo Colorato Spruzzo Colorato",
    school: "illusione",
    description: "Un vortice di colori abbaglia o stordisce le creature",
  },
  {
    level: 1,
    url: "/wiki/Spruzzo_Gelido",
    name: "Spruzzo Gelido Spruzzo Gelido",
    school: "invocazione",
    description:
      "Un cono di schegge di ghiaccio esplode dalle due mani aperte e ricopre il bersaglio in uno strato di gelo",
  },
  {
    level: 1,
    url: "/wiki/Stretta_Folgorante",
    name: "Stretta Folgorante Stretta Folgorante",
    school: "invocazione",
    description: "Fulmini una creatura con l'elettricità",
  },
  {
    level: 1,
    url: "/wiki/Strumento_Temporaneo",
    name: "Strumento Temporaneo Strumento Temporaneo",
    school: "evocazione",
    description:
      "Evochi nelle tue mani un semplice attrezzo temporaneo, come una pala o una corda",
  },
  {
    level: 1,
    url: "/wiki/Sudario_di_Penombra",
    name: "Sudario di Penombra Sudario di Penombra",
    school: "invocazione",
    description: "Avvolgi il bersaglio in un sudario d'ombra",
  },
  {
    level: 1,
    url: "/wiki/Unto",
    name: "Unto Unto",
    school: "evocazione",
    description: "Cospargi una superficie od oggetto con una poltiglia untuosa",
  },
  {
    level: 1,
    url: "/wiki/Ventriloquio",
    name: "Ventriloquio Ventriloquio",
    school: "illusione",
    description: "Trasferisci la tua voce",
  },
];

const spells = [
  ...divineSpells,
  ...arcaneSpells,
  ...occultSpells,
  ...primeviSpells,
];

export default spells;
