import getDeity from "../../tools/getDeity";

const deity = getDeity("cb");

const elfi = [
  {
    name: "Lancia di Ketephys",
    description: "Il loro simbolo è il Corno del Coraggio di Ketephys",
    symbol: "Corno",
    alignments: [deity.alignment],
    relativeClass: "Campione",
    subClass: "Liberatore",
    weapon: deity.weapon,
    edicts: deity.edicts,
    anatems: deity.anatems,
    religionSkill: deity.tradition,
  },
  {
    name: "Prescelto di Ketephys",
    description:
      "Nelle tue vene scorre il sangue dei draghi. Queste bestie sono tanto spaventose in combattimento quanto abili con la magia.",
    symbol: "Spada",
    alignments: ["lb", "cb", "nb", "nn", "ln", "cn"],
    relativeClass: "Stregone",
    subClass: "Draconica",
    spellList: deity.tradition,
    abilities: ["Arcano", "Società"],
    spells: [
      "Individuazione del Magico",
      "Dardo Incantato",
      "Invisibilità",
      "Velocità",
      "Scaglie Riflettenti",
      "Evoca Drago",
      "Forma di Drago",
      "Spruzzo Prismatico",
      "Labirinto",
      "Sfera Prismatica",
    ],
    lineageSpells: ["Artigli del Drago", "Soffio del Drago", "Ali del Drago"],
    bloodSpell:
      "Scaglie di drago spuntano su di te o su un bersaglio per un breve lasso di tempo, conferendo bonus di status +1 alla CA per 1 round.",
  },
  {
    name: "Guaritore Bianco",
    description: "Sei stato istruito nell'arte dell'archimia elfica.",
    symbol: "Mano",
    alignments: ["lb", "cb", "nb"],
    relativeClass: "Alchimista",
    subClass: "Cerusico",
  },
  {
    name: "Mago Elfico",
    description: "Solo da chi ha sangue Elfico può apprendere la magia Arcana.",
    symbol: "Luna",
    alignments: ["lb", "cb", "nb"],
    relativeClass: "Mago",
    subClass: "Universale",
    tradition: deity.tradition,
  },
];

export default elfi;
