import React, { useState } from "react";

import abilities from "../../data/abilities";

import { Row, Column } from "../../components/Grid";
import getCDResult from "../../tools/getCDResult";
import CDRoller from "../../components/CDRoller";
import Selector from "../../components/Selector";
import addBonus from "../../tools/addBonus";
import getBonus from "../../tools/getBonus";

const checkTypes = [
  {
    label: "Prova di Abilità",
    value: "abilityCheck",
  },
  {
    label: "Attacco",
    value: "attack",
  },
  {
    label: "Tiro Salvezza",
    value: "saveThrow",
  },
  {
    label: "Prova di Classe",
    value: "classCheck",
  },
  {
    label: "Prova Semplice",
    value: "baseCheck",
  },
];

const attackTypes = [
  {
    label: "Attacco (de)",
    value: "strWeaponAttack",
  },
  {
    label: "Attacco (fo)",
    value: "dexWeaponAttack",
  },
  {
    label: "Incantesimo",
    value: "spellAttack",
  },
];

const saveThrowTypes = [
  {
    label: "Tempra",
    value: "tsTempra",
  },
  {
    label: "Riflessi",
    value: "tsRiflessi",
  },
  {
    label: "Volonta",
    value: "tsVolonta",
  },
];

const CDBox = (props) => {
  const [actualCheckType, setActualCheckType] = useState(checkTypes[0]);
  const [actualAttackType, setAttackType] = useState(attackTypes[0]);
  const [actualsaveThrowType, setsaveThrowType] = useState(saveThrowTypes[0]);
  const [actualRoll, setActualRoll] = useState({ value: 1, label: 1 });
  const [actualAbility, setActualAbility] = useState({
    value: Object.keys(abilities)[0],
    label: abilities[Object.keys(abilities)[0]].name,
  });
  const [actualCD, setActualCD] = useState(5);

  const statGetters = {
    attack: props.actualPG[actualAttackType.value],
    abilityCheck: props.actualPG.abilityCheck.hasOwnProperty(
      actualAbility.value
    )
      ? addBonus(
          props.actualPG.abilityCheck[actualAbility.value],
          "skill",
          getBonus(
            props.actualPG.skillCheck[abilities[actualAbility.value].skill]
          )
        )
      : { bonus: {}, malus: {} },
    saveThrow: props.actualPG[actualsaveThrowType.value],
    classCheck: props.actualPG.hasOwnProperty("classSkill")
      ? addBonus(
          props.actualPG.classCheck,
          "skill",
          getBonus(props.actualPG.skillCheck[props.actualPG.classSkill])
        )
      : { bonus: 0, malus: 0 },
    baseCheck: { bonus: 0, malus: 0 },
  };

  const actualStat = statGetters[actualCheckType.value];

  const theProps = {
    abilitySelect: {
      options: Object.keys(abilities).map((item) => ({
        value: item,
        label: abilities[item].name,
      })),
      onChange: (event) => setActualAbility(event),
      value: actualAbility,
    },
    checkTypeSelect: {
      options: checkTypes,
      onChange: (event) => setActualCheckType(event),
      value: actualCheckType,
    },
    attackTypeSelect: {
      options: attackTypes,
      onChange: (event) => setAttackType(event),
      value: actualAttackType,
    },
    saveThrowTypeSelect: {
      options: saveThrowTypes,
      onChange: (event) => setsaveThrowType(event),
      value: actualsaveThrowType,
    },
    cdRoller: {
      stat: actualStat,
      roll: actualRoll,
      setRoll: setActualRoll,
    },
  };

  return (
    <Row className="mb20">
      <Column small={3}>
        <Selector {...theProps.checkTypeSelect} />
      </Column>
      <Column small={3}>
        {actualCheckType.value === "abilityCheck" && (
          <Selector {...theProps.abilitySelect} />
        )}
        {actualCheckType.value === "attack" && (
          <Selector {...theProps.attackTypeSelect} />
        )}
        {actualCheckType.value === "saveThrow" && (
          <Selector {...theProps.saveThrowTypeSelect} />
        )}
      </Column>
      <Column small={3}>
        <CDRoller {...theProps.cdRoller} />
      </Column>
      <Column small={3}>
        <Row>
          <Column className="shrink">CD</Column>
          <Column small={3}>
            <input
              value={actualCD}
              onChange={(event) => setActualCD(event.target.value)}
            />
          </Column>
          <Column>
            {getCDResult(
              actualRoll.value,
              actualStat,
              actualCD,
              actualCheckType.value
            )}
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default CDBox;
