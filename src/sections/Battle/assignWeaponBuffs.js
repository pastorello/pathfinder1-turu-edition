import weaponsTraits from "../../data/weapons/weaponsTraits";
import weapons from "../../data/weapons";
import addBonus from "../../tools/addBonus";

const assignWeaponBuffs = (theWeapon, player) => {
  let thePlayer = {
    ...player,
    attacks: [0, -5, -10],
    weaponEffects: [],
  };

  if (weapons.hasOwnProperty(theWeapon)) {
    thePlayer = weapons[theWeapon].traits.reduce(
      (acc, item) => weaponsTraits[item.name].effect(acc, item.value),
      thePlayer
    );
  }

  let attackBonus =
    thePlayer.range > 0 ? thePlayer.rangedAttack : thePlayer.meleeAttack;
  let damageBonus =
    thePlayer.range > 0 ? thePlayer.rangedDamage : thePlayer.meleeDamage;

  if (theWeapon === "incantesimo") {
    attackBonus = thePlayer.spellAttack;
    damageBonus = thePlayer.skillCheck[thePlayer.classSkill];
  }

  return {
    ...thePlayer,
    attacks: thePlayer.attacks.map((item) =>
      addBonus(attackBonus, "attackNumber", item)
    ),
    bonusDamage: damageBonus,
  };
};

export default assignWeaponBuffs;
