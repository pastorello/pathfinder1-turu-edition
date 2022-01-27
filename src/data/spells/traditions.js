const goodTraditions = ["bianca", "arcana", "runica"];
const neutralTraditions = ["occulta", "satanica", "fatata"];
const evilTraditions = ["satanica", "nera", "demoniaca"];

const traditions = {
  all: [...goodTraditions, ...neutralTraditions, ...evilTraditions],
  good: goodTraditions,
  neutral: neutralTraditions,
  evil: evilTraditions,
};

export default traditions;
