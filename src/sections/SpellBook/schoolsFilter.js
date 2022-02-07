const schoolFilters = {
  blackMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "nera");
  },
  whiteMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "bianca");
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
    return theSource.some((item) => item === "satanica");
  },
  runicMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "runica");
  },
  demonicMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "demoniaca");
  },
};

export default schoolFilters;
