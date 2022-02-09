const schoolFilters = {
  blackMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "blasfema");
  },
  whiteMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "divina");
  },
  primeviMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "primeva");
  },
  arcaneMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "arcana");
  },
  occultMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "occulta");
  },
  elementalMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "fatata");
  },
  satanicMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "nera");
  },
  runicMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "runica");
  },
  demonicMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "infernale");
  },
};

export default schoolFilters;
