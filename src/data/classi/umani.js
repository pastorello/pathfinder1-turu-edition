import getDeity from "../../tools/getDeity";

const deity = getDeity("nb");
const elfi = [
  {
    name: "Cavaliere del Sacro Cuore",
    description: `I figli dei nobili hanno il privilegio di poter essere iniziati 
      all'Ordine dei Cavalieri del Sacro Cuore, che sono il dono delle famiglie 
      regali alla guardia scelta del clero`,
    symbol: "Cuore",
    alignments: [deity.alignment],
    relativeClass: "Campione",
    subClass: "Redentore",
    weapon: "Spada d'Arme",
    edicts: deity.edicts,
    anatems: deity.anatems,
    religionSkill: deity.tradition,
  },
  {
    name: "Sacerdote del Culto dei Tre Principii",
    description: "I depositari del culto delle Virtù.",
    symbol: "Ankh",
    alignments: deity.followersAlignment,
    domains: deity.domains,
    spells: deity.spells,
    relativeClass: "Chierico",
    subClass: "Ecclesiastico",
    weapon: "Bastone con Ankh",
    edicts: deity.edicts,
    anatems: deity.anatems,
    religionSkill: deity.tradition,
    feats: deity.clericFeats,
  },
  {
    name: "Legionario della Lacrima",
    description: `L'Ordine dei Legionari della Lacrima è il braccio armato del clero,
    un reparto speciale di preti guerrieri dediti a combattere il cultori della Magia Nera.`,
    symbol: "Lacrima",
    alignments: deity.followersAlignment,
    domains: deity.domains,
    spells: deity.spells,
    relativeClass: "Chierico",
    subClass: "Soldato della Fede",
    weapon: "Mazza",
    edicts: deity.edicts,
    anatems: deity.anatems,
    religionSkill: deity.tradition,
    feats: deity.clericFeats,
  },
  {
    name: "Custode della Divina Fiamma",
    description: `A volte può capitare che il sangue degli Angeli si risvegli in alcuni umani, 
      rendendoli in grado fare cose miracolose. Il clero accoglie ed addestra a controllare
      il potere di coloro che ricevono questo dono nei Monasteri della Fiamma.`,
    symbol: "Fiamma",
    alignments: ["lb", "cb", "nb"],
    relativeClass: "Stregone",
    subClass: "Angelica",
    spellList: deity.tradition,
    abilities: ["Diplomazia", "Religione"],
    spells: [
      "Luce",
      "Guarire",
      "Riposo Inviolato",
      "Luce Incandescente",
      "Rivela Bugie",
      "Linguaggi",
      "Campo di Vita",
      "Esplosione Solare",
      "Aura Divina",
      "Arma del Giudizio",
    ],
    lineageSpells: ["Aureola Angelica", "Ali Angeliche", "Marchio Divino"],
    bloodSpell:
      "Un'aura angelica protegge te o un bersaglio, conferendo bonus di status +1 ai Tiri Salvezza per 1 round.",
  },
];

export default elfi;
