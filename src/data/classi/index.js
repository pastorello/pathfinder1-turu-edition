import elfi from "./elfi";
import nani from "./nani";
import umani from "./umani";

const classi = [
  ...elfi,
  ...nani,
  ...umani,
  {
    name: "Alchimista",
    stirpi: ["umano", "nano", "hanfling", "elfo"],
    alignments: ["lb", "nb", "cb", "nn", "cn", "ln", "lm", "nm", "cm"],
  },
  {
    name: "Barbaro",
    stirpi: ["umano", "nano"],
    alignments: ["nb", "cb", "nn", "cn", "nm", "cm"],
  },
  {
    name: "Bardo",
    subClasses: [
      "Musa dell'Ecletticismo",
      "Musa del Virtuosismo",
      "Musa Enigmatica",
    ],
    stirpi: ["umano", "hanfling", "elfo"],
    magia: "occulta",
    alignments: ["lb", "nb", "cb", "nn", "cn", "ln", "lm", "nm", "cm"],
  },
  {
    name: "Paladino di Desna",
    virtue: "valore",
    alignments: ["lb"],
    stirpi: ["umano"],
  },
  {
    name: "Paladino di Torag",
    virtue: "onore",
    alignments: ["lb"],
    stirpi: ["nano"],
  },
  {
    name: "Redentore di Iomedae",
    virtue: "giustizia",
    alignments: ["lb"],
    stirpi: ["elfo"],
  },
  {
    name: "Liberatore di Erastil",
    virtue: "giustizia",
    alignments: ["lb"],
    stirpi: ["halfling"],
  },
  {
    name: "Canaglia",
    stirpi: ["umano", "hanfling", "elfo"],
    alignments: ["lb", "nb", "cb", "nn", "cn", "ln", "lm", "nm", "cm"],
  },
  {
    name: "Soldato della Fede di Sarenae",
    virtue: "onestà",
    magia: "divina",
    alignments: ["nb"],
    stirpi: ["umano", "elfo", "nano"],
  },
  {
    name: "Ecclesiastico di Pharasma",
    virtue: "compassione",
    magia: "divina",
    alignments: ["nb"],
    stirpi: ["umano", "elfo"],
  },
  {
    name: "Druido di Gozreh",
    virtue: "umiltà",
    magia: "primeva",
    alignments: ["nn"],
    stirpi: ["umano", "elfo", "halfling", "nano"],
  },
  {
    name: "Guerriero",
    stirpi: ["umano", "nano", "elfo"],
    alignments: ["lb", "nb", "cb", "nn", "cn", "ln", "lm", "nm", "cm"],
  },
  {
    name: "Mago",
    stirpi: ["umano", "elfo", "halfling"],
    magia: "arcana",
    alignments: ["lb", "nb", "cb", "nn", "cn", "ln", "lm", "nm", "cm"],
  },
  {
    name: "Monaco di Irori",
    virtue: "spiritualità",
    alignments: ["nn"],
    stirpi: ["umano", "elfo"],
  },
  {
    name: "Ranger",
    stirpi: ["umano", "halfling", "elfo"],
    alignments: ["lb", "nb", "cb", "nn", "cn", "ln", "lm", "nm", "cm"],
  },
  {
    name: "Stregone Vodoo",
    stirpi: ["umano"],
    magia: "blasfema",
    alignments: ["lm", "nm", "cm"],
  },
  {
    name: "Stregone Bianco",
    stirpi: ["elfo", "halfling"],
    lineage: "angelica",
    magia: "divina",
    alignments: ["lb", "nb", "cb"],
  },
  {
    name: "Stregone Tribale",
    stirpi: ["elfo", "halfling"],
    magia: "primeva",
    alignments: ["nb", "cb", "nn", "cn"],
  },
  {
    name: "Stregone Occultista",
    stirpi: ["elfo", "halfling"],
    magia: "occulta",
    alignments: ["nn", "cn", "ln", "lm", "nm", "cm"],
  },
  {
    name: "Stregone Elementarista",
    stirpi: ["elfo", "halfling"],
    magia: "arcana",
    alignments: ["lb", "nb", "cb", "nn", "cn", "ln", "lm", "nm", "cm"],
  },
];

export default classi;
