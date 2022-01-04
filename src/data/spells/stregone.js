const spells = [
  {
    level: 1,
    url: "/wiki/Benedizione_della_Non_Morte",
    name: "Benedizione della Non Morte",
    source: ["stregone"],
    school: "necromanzia",
    energy: "negativa",
    description: "Instilli la benedizione della non morte in una creatura.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Arti_Tentacolari",
    name: "Arti Tentacolari",
    source: ["stregone"],
    school: "trasmutazione",
    energy: "negativa",
    description:
      "Le tue braccia si trasformano in lunghi e flessuosi tentacoli, incrementando la portata.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Artigli_del_Drago",
    name: "Artigli del Drago",
    school: "trasmutazione",
    description: "Dalle tue dita spuntano degli artigli aggressivi.",
    source: ["stregone"],
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Aureola_Angelica",
    name: "Aureola Angelica",
    source: ["stregone"],
    school: "abiurazione",
    energy: "positiva",
    description:
      "Ottieni un'aureola angelica con un'aura che aumenta la guarigione degli alleati.",
    type: "focalizzato",
  },
];

export default spells;

/*

url: "/wiki/Editto_Diabolico" title="Editto Diabolico">Editto Diabolico</a>
asd:  "Diabolic Edict
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "Emetti un editto diabolico, col quale ordini al bersaglio di svolgere un particolare compito offrendogli ricompense per il suo adempimento.

url: "/wiki/Fauci_Voraci" title="Fauci Voraci">Fauci Voraci</a>
asd:  "Glutton's Jaws
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Morfosi" title="Tratti/Morfosi">Morfosi</a>, <a href="/wiki/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "La tua bocca si trasforma in spaventose fauci che mostrano denti aguzzi.

url: "/wiki/Lancio_Elementale" title="Lancio Elementale">Lancio Elementale</a>
asd:  "Elemental Toss
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Attacco" title="Tratti/Attacco">Attacco</a>, <a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "Con un gioco di polso, lanci una porzione della tua materia elementale contro il tuo nemico.

url: "/wiki/Maleficio_di_Gelosia" title="Maleficio di Gelosia">Maleficio di Gelosia</a>
asd:  "Jealous Hex
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Maledizione" title="Tratti/Maledizione">Maledizione</a>, <a href="/wiki/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "Susciti l'innata gelosia di una megera per negare a un bersaglio le sue migliori qualità.

url: "/wiki/Polvere_Fatata" title="Polvere Fatata">Polvere Fatata</a>
asd:  "Faerie Dust
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "Cospargi l'area dell'incantesimo di una scintillante polvere magica, rendendo coloro che si trovano all'interno dell'area più facili da ingannare.

url: "/wiki/Ricordi_Ancestrali" title="Ricordi Ancestrali">Ricordi Ancestrali</a>
asd:  "Ancestral Memories
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "I ricordi di stregoni morti da tempo ti forniscono conoscenza in un'abilità specifica.

url: "/wiki/Ali_Angeliche" title="Ali Angeliche">Ali Angeliche</a>
asd:  "Angelic Wings
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Tratti/Luce" title="Tratti/Luce">Luce</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "3
asd:  "Dalla tua schiena protendono ali di luce pura che ti permettono di volare.

url: "/wiki/Incantesimi_Estesi" title="Incantesimi Estesi">Incantesimi Estesi</a>
asd:  "Extend Spell
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>, <a href="/wiki/Tratti/Metamagico" title="Tratti/Metamagico">Metamagico</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "3
asd:  "Ti appelli alla conoscenza degli antenati del tuo sangue per estendere la tua magia.

url: "/wiki/Moto_Elementale" title="Moto Elementale">Moto Elementale</a>
asd:  "Elemental Motion
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "3
asd:  "Fai appello al tuo elemento affinché ti acceleri, migliorando la tua Velocità in base al tuo elemento.

url: "/wiki/Palude_dell%27Indolenza" title="Palude dell'Indolenza">Palude dell'Indolenza</a>
asd:  "Swamp of Sloth
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "3
asd:  "Il terreno nell'area diventa paludoso e fetido.

url: "/wiki/Risucchiare_Vita" title="Risucchiare Vita">Risucchiare Vita</a>
asd:  "Drain Life
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>, <a href="/wiki/Tratti/Negativo" title="Tratti/Negativo">Negativo</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "3
asd:  "Chiudi le mani e fai fluire l'energia vitale da un'altra creatura trasferendola dentro di te.

url: "/wiki/Scendere_nella_Fossa" title="Scendere nella Fossa">Scendere nella Fossa</a>
asd:  "Embrace The Pit
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Male" title="Tratti/Male">Male</a>, <a href="/wiki/Tratti/Morfosi" title="Tratti/Morfosi">Morfosi</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>, <a href="/wiki/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "Focalizzato
asd:  "3
asd:  "Dal tuo cranio spuntano corna diaboliche e la tua pelle assume le caratteristiche del diavolo che ha generato la tua Linea di Sangue.

url: "/wiki/Incantestmi/Soffio_del_Drago" title="Incantestmi/Soffio del Drago">Soffio del Drago</a>
asd:  "Dragon Breath
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "3
asd:  "Espelli energia dalla tua bocca, infliggendo danni elementali.

asd:  "Manuale di Gioco
url: "/wiki/Sparizione_Inusuale" title="Sparizione Inusuale">Sparizione Inusuale</a>
asd:  "Fey Disappearance
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "3
asd:  "Diventi Invisibile ed ignori il Terreno Difficile naturale (come il sottobosco).

url: "/wiki/Sussurri_Aberranti" title="Sussurri Aberranti">Sussurri Aberranti</a>
asd:  "Aberrant Whispers
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>, <a href="/wiki/Tratti/Uditivo" title="Tratti/Uditivo">Uditivo</a>
asd:  "Focalizzato
asd:  "3
asd:  "Pronunci frasi in un linguaggio sconosciuto, aggredendo i pensieri di chi ti sta vicino.

url: "/wiki/Volto_Orribile" title="Volto Orribile">Volto Orribile</a>
asd:  "Horrific Visage
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>, <a href="/wiki/Tratti/Illusione" title="Tratti/Illusione">Illusione</a>, <a href="/wiki/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>, <a href="/wiki/Tratti/Paura" title="Tratti/Paura">Paura</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>, <a href="/wiki/Tratti/Visivo" title="Tratti/Visivo">Visivo</a>
asd:  "Focalizzato
asd:  "3
asd:  "Assumi brevemente i tratti del volto orribile di una megera, incutendo terrore ai tuoi nemici.

url: "/wiki/A_Me_gli_Occhi" title="A Me gli Occhi">A Me gli Occhi</a>
asd:  "You're Mine
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>, <a href="/wiki/Tratti/Incapacitazione" title="Tratti/Incapacitazione">Incapacitazione</a>, <a href="/wiki/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "5
asd:  "Manipoli le emozioni del bersaglio, permettendoti potenzialmente di controllarlo per un breve istante.

url: "/wiki/Ali_del_Drago" title="Ali del Drago">Ali del Drago</a>
asd:  "Dragon Wings
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Morfosi" title="Tratti/Morfosi">Morfosi</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>, <a href="/wiki/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "Focalizzato
asd:  "5
asd:  "Dalla tua schiena spuntano ali membranose.

url: "/wiki/Anatomia_Insolita" title="Anatomia Insolita">Anatomia Insolita</a>
asd:  "Unusual Anatomy
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Metamorfosi" title="Tratti/Metamorfosi">Metamorfosi</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>, <a href="/wiki/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "Focalizzato
asd:  "5
asd:  "Trasformi la tua carne e i tuoi organi in un amalgama bizzarra di pelle luccicante, scaglie ruvide, ciuffi di capelli e protuberanze tumorali.

url: "/wiki/Arti_della_Tomba" title="Arti della Tomba">Arti della Tomba</a>
asd:  "Grasping Grave
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "5
asd:  "Centinaia di arti scheletrici sbucano dal terreno nell'area, aggrappandosi alle creature all'interno dell'area e tentando di tenerle ferme.

url: "/wiki/Contromisura_Arcana" title="Contromisura Arcana">Contromisura Arcana</a>
asd:  "Arcane Countermeasure
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "5
asd:  "Indebolisci l'incantesimo del bersaglio, di modo da poterti difendere più facilmente da esso.

url: "/wiki/Esplosione_Elementale" title="Esplosione Elementale">Esplosione Elementale</a>
asd:  "Elemental Blast
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "5
asd:  "Raccogli l'energia elementale e fai esplodere i tuoi nemici in un'area di una delle forme elencate a tua scelta.

url: "/wiki/Fiotto_di_Fuoco_Infernale" title="Fiotto di Fuoco Infernale">Fiotto di Fuoco Infernale</a>
asd:  "Hellfire Plume
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Fuoco" title="Tratti/Fuoco">Fuoco</a>, <a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Tratti/Male" title="Tratti/Male">Male</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "5
asd:  "Evochi un fiotto di fuoco infernale che erutta dal sottosuolo.

url: "/wiki/Ira_Abissale" title="Ira Abissale">Ira Abissale</a>
asd:  "Abyssal Wrath
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "5
asd:  "Evochi l'energia di un reame Abissale.

url: "/wiki/Magia_Inusuale" title="Magia Inusuale">Magia Inusuale</a>
asd:  "Fey Glamour
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Illusione" title="Tratti/Illusione">Illusione</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "5
asd:  "Evochi magie fatate per avvolgere l'area o i bersagli di illusione.

url: "/wiki/Marchio_Divino" title="Marchio Divino">Marchio Divino</a>
asd:  "Celestial Brand
asd:  "Stregone
asd:  "<a href="/wiki/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Tratti/Maledizione" title="Tratti/Maledizione">Maledizione</a>, <a href="/wiki/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>, <a href="/wiki/Tratti/Stregone" title="Tratti/Stregone">Stregone</a>
asd:  "Focalizzato
asd:  "5
asd:  "Un simbolo infuocato appare sul bersaglio, marchiandolo in nome della giustizia divina.
*/
