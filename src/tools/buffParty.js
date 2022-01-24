import assignSkillBonus from "./assignSkillBonus";
import conditions from "../data/conditions";

const buffParty = (party) => {
  const theParty = party.map((item) => {
    let conditionedPG = assignSkillBonus(
      item.conditions.reduce(
        (acc, item2) => conditions[item2.name].effect(acc, item2.value),
        item
      )
    );

    return conditionedPG;
  });

  return theParty;
};

export default buffParty;
