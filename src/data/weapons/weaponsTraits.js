const weaponsTraits = {
  accurata: {
    name: "Accurata",
    effect: (player, value) => ({
      ...player,
      meleeAttack: value === true ? player.rangedAttack : player.meleeAttack,
    }),
  },
  aDistanza: {
    name: "A Distanza",
    effect: (player, value) => ({
      ...player,
      range: value,
    }),
  },
  aDueMani: {
    name: "A Due Mani",
    effect: (player) => ({
      ...player,
    }),
  },
  agile: {
    name: "Agile",
    effect: (player) => ({
      ...player,
      attacks: [0, player.attacks[1] + 2, player.attacks[2] + 2],
    }),
  },
  lancio: {
    name: "Lancio",
    effect: (player, value) => ({
      ...player,
      rangedDamage: player.meleeDamage,
      range: value,
    }),
  },
  disarmare: {
    name: "Disarmare",
    effect: (player) => player,
  },
  disarmato: {
    name: "Disarmato",
    effect: (player) => player,
  },
  fatale: {
    name: "Disarmato",
    effect: (player) => ({
      ...player,
      weaponEffects: [
        ...player.weaponEffects,
        "Con un colpo critico, il dado di danno dell'arma è incrementato a quel valore di dado al posto del normale valore; inoltre l'arma aggiunge un dado di danno aggiuntivo del valore riportato",
      ],
    }),
  },
  impeto: {
    name: "Impeto",
    effect: (player) => ({
      ...player,
      weaponEffects: [
        ...player.weaponEffects,
        "il secondo attacco ottiene bonus di circostanza al danno uguale al numero di dadi di danno dell'arma, mentre ogni attacco successivo ottiene bonus di circostanza al danno uguale al doppio del numero di dadi di danno dell'arma",
      ],
    }),
  },
  spazzare: {
    name: "Spazzare",
    effect: (player) => ({
      ...player,
      weaponEffects: [
        ...player.weaponEffects,
        "Quando attacchi con quest'arma ottieni bonus di circostanza +1 al tuo Tiro per Colpire se hai già tentato di attaccare un bersaglio differente in questo turno usando quest'arma",
      ],
    }),
  },
  versatile: {
    name: "Versatile",
    effect: (player) => player,
  },
  nonLetale: {
    name: "Non Letale",
    effect: (player, value) => ({
      ...player,
      attacks:
        value === true
          ? player.attacks.map((item) => item - 2)
          : player.attacks,
    }),
  },
};

export default weaponsTraits;
