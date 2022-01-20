import weaponsTraits from "../../data/weapons/weaponsTraits";
import weapons from "../../data/weapons";
import getBonus from "../../tools/getBonus";
import addBonus from "../../tools/addBonus";

const assignWeaponBuffs = (theWeapon, player) => {
  const thePlayer = weapons[theWeapon].traits.reduce(
    (acc, item) => weaponsTraits[item.name].effect(acc, item.value),
    {
      ...player,
      attacks: [0, -5, -10],
      weaponEffects: [],
    }
  );

  const attackBonus =
    thePlayer.range > 0 ? thePlayer.rangedAttack : thePlayer.meleeAttack;

  return {
    ...thePlayer,
    attacks: thePlayer.attacks.map((item) =>
      addBonus(attackBonus, "attackNumber", item)
    ),
    bonusDamage:
      thePlayer.range > 0 ? thePlayer.rangedDamage : thePlayer.meleeDamage,
  };
};

export default assignWeaponBuffs;
