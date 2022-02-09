const goodTraditions = ["divina", "arcana", "runica"];
const neutralTraditions = ["occulta", "nera", "fatata"];
const evilTraditions = ["nera", "blasfema", "infernale"];

const traditions = {
  all: [...goodTraditions, ...neutralTraditions, ...evilTraditions],
  good: goodTraditions,
  neutral: neutralTraditions,
  evil: evilTraditions,
};

export default traditions;
