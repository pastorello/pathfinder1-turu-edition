import weaponsTraits from "../../data/weapons/weaponsTraits";
import weapons from "../../data/weapons";

const assignWeaponBuffs = (theWeapon, player) => {
  const thePlayer = weapons[theWeapon].traits.reduce(
    (acc, item) => weaponsTraits[item.name].effect(acc, item.value),
    {
      ...player,
      attacks: [0, -5, -10],
      weaponEffects: [],
    }
  );

  return {
    ...thePlayer,
    attackBonus:
      thePlayer.range > 0 ? thePlayer.rangedAttack : thePlayer.meleeAttack,
    damageBonus:
      thePlayer.range > 0 ? thePlayer.rangedDamage : thePlayer.meleeDamage,
  };
};

export default assignWeaponBuffs;
