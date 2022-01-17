import addBonus from "../../tools/addBonus";
import getBonus from "../../tools/getBonus";
import abilities from "../../data/abilities";

const skillBuffInfluence = {
  fo: ["strWeaponAttack", "strDamage"],
  de: ["dexWeaponAttack", "dexDamage", "armorClass", "tsRiflessi"],
  co: ["hitPoints", "tsTempra"],
  sa: ["perception", "tsVolonta"],
};

const classSkillInfluence = ["spellAttack", "classCheck"];

const assignSkillBonus = (player) => {
  const buffedPlayer = {
    ...player,
  };

  const classSkillValue = player.hasOwnProperty("classSkill")
    ? getBonus(player.skillCheck[player.classSkill])
    : 0;

  classSkillInfluence.forEach((item) => {
    buffedPlayer[item] = addBonus(buffedPlayer[item], "skill", classSkillValue);
  });

  Object.keys(skillBuffInfluence).forEach((item) => {
    const theBonus = getBonus(player.skillCheck[item]);
    skillBuffInfluence[item].forEach((item2) => {
      buffedPlayer[item2] = addBonus(buffedPlayer[item2], "skill", theBonus);
    });
  });

  Object.keys(abilities).forEach((item) => {
    const theBonus = getBonus(player.skillCheck[abilities[item].skill]);
    buffedPlayer.abilityCheck[item] = addBonus(
      buffedPlayer.abilityCheck[item],
      "skill",
      theBonus
    );
  });

  return buffedPlayer;
};

export default assignSkillBonus;
