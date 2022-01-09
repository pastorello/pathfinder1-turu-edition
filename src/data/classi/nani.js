import getDeity from "../../tools/getDeity";

const deity = getDeity("lb");
const elfi = [
  {
    name: "Giustiziere di Torag",
    description: `I Giustizieri di Torag sono la guardia scelta del Tribunale, 
    sono detiti a contrastare la Magia Satanica e far rispettare le leggi.`,
    symbol: "Bilancia",
    alignments: [deity.alignment],
    relativeClass: "Campione",
    subClass: "Paladino",
    weapon: deity.weapon,
    edicts: deity.edicts,
    anatems: deity.anatems,
    religionSkill: deity.tradition,
  },
  {
    name: "Maestro delle Rune",
    description: `Una ristretta cerchia di nani ha il privilegio di poter essere iniziata
       alla Magia Runica. I Maestri delle Rune sono i protettori del 
       Sacro Codex e dedicano la loro vita alla costruzione di manufatti ed
       artifizi per proteggere i segreti dell'arte nanica`,
    symbol: "Codex",
    alignments: ["lb", "cb", "nb"],
    relativeClass: "Mago",
    subClass: "Abiuratore",
    tradition: deity.tradition,
  },
  {
    name: "Ingegnere Nanico",
    description: "Sei stato istruito nell'arte dell'archimia nanica.",
    symbol: "Compasso",
    alignments: ["lb", "cb", "nb", "ln", "nn"],
    relativeClass: "Alchimista",
    subClass: "Bombarolo",
  },
  {
    name: "Guardiano dei Tumuli",
    description: `Ordine di guerrieri nanici discendenti di antiche generazioni 
    di custodi delle tombe, hanno una connessione col regno dei morti che li rende
    in grado di avere poteri sovrannaturali.`,
    symbol: "Calice",
    alignments: ["lb", "cb", "nb", "ln", "nn"],
    relativeClass: "Barbaro",
    subClass: "Istinto Spirituale",
  },
];

export default elfi;
