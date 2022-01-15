import React, { useState } from "react";

import conditions from "../../data/conditions";
import abilities from "../../data/abilities";

import { Row, Column } from "../../components/Grid";
import getCDResult from "../../tools/getCDResult";
import sortOnKey from "../../tools/sortOnKey";
import CDRoller from "../../components/CDRoller";
import Selector from "../../components/Selector";
import dices from "../../data/dices";
import addBonus from "../../tools/addBonus";
import getBonus from "../../tools/getBonus";

const durationOptions = dices.d20.map((item) => ({
  value: item,
  label: item === 0 ? "Permanente" : `${item} round`,
}));

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

const conditionsList = Object.keys(conditions)
  .map((item) => ({
    value: item,
    label: conditions[item].name,
  }))
  .sort(sortOnKey("label", "insensitive", false));

const ConditionsBox = (props) => {
  const [selectedValue, editSelectedValue] = useState({
    value: 1,
    label: 1,
  });
  const [selectedPG, editSelectedPG] = useState({
    value:
      props.actualParty.length > 0 ? props.actualParty[0].id : "no players",
    label:
      props.actualParty.length > 0 ? props.actualParty[0].name : "no players",
  });
  const [selectedDuration, editDuration] = useState({
    value: 0,
    label: "Permanente",
  });
  const [selectedCondition, editSelectedCondition] = useState(
    conditionsList[0]
  );
  const [actualCheckType, setActualCheckType] = useState(checkTypes[0]);
  const [actualAttackType, setAttackType] = useState(attackTypes[0]);
  const [actualsaveThrowType, setsaveThrowType] = useState(saveThrowTypes[0]);
  const [actualRoll, setActualRoll] = useState({ value: 1, label: 1 });
  const [actualAbility, setActualAbility] = useState({
    value: Object.keys(abilities)[0],
    label: abilities[Object.keys(abilities)[0]].name,
  });
  const [actualCD, setActualCD] = useState(5);

  const actualPG = props.actualParty.reduce(
    (item, acc) => (item.id === selectedPG.value ? item : acc),
    {}
  );

  const statGetters = {
    attack: actualPG[actualAttackType.value],
    abilityCheck: actualPG.abilityCheck.hasOwnProperty(actualAbility.value)
      ? addBonus(
          actualPG.abilityCheck[actualAbility.value],
          "skill",
          getBonus(actualPG.skillCheck[abilities[actualAbility.value].skill])
        )
      : { bonus: {}, malus: {} },
    saveThrow: actualPG[actualsaveThrowType.value],
    classCheck: addBonus(
      actualPG.classCheck,
      "skill",
      getBonus(actualPG.skillCheck[actualPG.classSkill])
    ),
    baseCheck: { bonus: 0, malus: 0 },
  };

  const actualStat = statGetters[actualCheckType.value];

  const theProps = {
    PGSelect: {
      options: props.actualParty.map((item) => ({
        value: item.id,
        label: item.name,
      })),
      onChange: (value) => editSelectedPG(value),
      value: selectedPG,
    },
    conditionSelect: {
      options: conditionsList,
      onChange: (value) => editSelectedCondition(value),
      value: selectedCondition,
    },
    valueSelect: {
      options: [1, 2, 3, 4, 5].map((item) => ({
        value: item,
        label: item,
      })),
      onChange: (value) => editSelectedValue(value),
      value: selectedValue,
    },
    roundsSelect: {
      options: durationOptions,
      onChange: (value) => editDuration(value),
      value: selectedDuration,
    },
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
    <>
      <Row className="mb20">
        <Column small={3}>
          <Selector {...theProps.PGSelect} />
        </Column>
        <Column small={4}>
          <Row className="collapse">
            <Column>
              <Selector {...theProps.conditionSelect} />
            </Column>

            {conditions[selectedCondition.value].hasValue === true && (
              <Column className="shrink">
                <Selector {...theProps.valueSelect} />
              </Column>
            )}
          </Row>
        </Column>
        <Column small={2}>
          <Selector {...theProps.roundsSelect} />
        </Column>
        <Column>
          <button
            onClick={() =>
              props.addConditionAction(selectedPG.value, {
                condition: selectedCondition.value,
                value: selectedValue.value,
                duration: selectedDuration.value,
              })
            }
          >
            Aggiungi Condizione
          </button>
        </Column>
      </Row>
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
      <hr />
    </>
  );
};

export default ConditionsBox;
