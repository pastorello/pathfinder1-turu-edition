import React, { useState } from "react";
import Select from "react-select";

import conditions from "../../data/conditions";
import abilities from "../../data/abilities";

import { Row, Column } from "../../components/Grid";
import getBonus from "../../tools/getBonus";
import getCDResult from "../../tools/getCDResult";

const d20 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
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
    value: "infinito",
    label: "infinito",
  });
  const [selectedCondition, editSelectedCondition] = useState({
    value: Object.keys(conditions)[0],
    label: conditions[Object.keys(conditions)[0]].name,
  });
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
    abilityCheck: actualPG.abilityCheck[actualAbility.value],
    saveThrow: actualPG[actualsaveThrowType.value],
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
      options: Object.keys(conditions).map((item) => ({
        value: item,
        label: conditions[item].name,
      })),
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
      options: ["infinito", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
        (item) => ({
          value: item,
          label: item,
        })
      ),
      onChange: (value) => editDuration(value),
      value: selectedDuration,
    },
    rollSelect: {
      options: d20.map((item) => ({ value: item, label: item })),
      onChange: (event) => setActualRoll(event),
      value: actualRoll,
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
    rollButton: {
      onClick: () => {
        const newValue = Math.floor(Math.random() * 20 + 1);
        setActualRoll({
          label: newValue,
          value: newValue,
        });
      },
      children: "ROLL",
    },
  };

  return (
    <>
      <Row>
        <Column small={3}>
          <Select {...theProps.PGSelect} />
        </Column>
        <Column>
          <Select {...theProps.conditionSelect} />
        </Column>
        <Column>
          <Select {...theProps.valueSelect} />
        </Column>
        <Column>
          <Select {...theProps.roundsSelect} />
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
          <Select {...theProps.checkTypeSelect} />
        </Column>
        <Column small={3}>
          {actualCheckType.value === "abilityCheck" && (
            <Select {...theProps.abilitySelect} />
          )}
          {actualCheckType.value === "attack" && (
            <Select {...theProps.attackTypeSelect} />
          )}
          {actualCheckType.value === "saveThrow" && (
            <Select {...theProps.saveThrowTypeSelect} />
          )}
        </Column>
        <Column small={3}>
          <Row>
            <Column className="shrink">{getBonus(actualStat)} +</Column>
            <Column>
              <Select {...theProps.rollSelect} />
            </Column>
            <Column className="shrink">
              <button {...theProps.rollButton} />
            </Column>
          </Row>
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
    </>
  );
};

export default ConditionsBox;
