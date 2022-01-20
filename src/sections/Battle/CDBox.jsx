import React, { useState } from "react";

import abilities from "../../data/abilities";

import { Row, Column } from "../../components/Grid";
import getCDResult from "../../tools/getCDResult";
import CDRoller from "../../components/CDRoller";
import Selector from "../../components/Selector";
import isValid from "../../tools/isValid";
import weapons from "../../data/weapons";
import assignWeaponBuffs from "./assignWeaponBuffs";
import classNames from "classnames";
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
    label: "Incantesimo",
    value: "spellAttack",
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
  const attackTypes = isValid.dataObj(props.actualPG.attackTypes)
    ? Object.keys(props.actualPG.attackTypes).map((item) => ({
        value: item,
        label: props.actualPG.attackTypes[item].name,
      }))
    : [
        {
          value: "pugno",
          label: weapons.pugno.name,
        },
      ];

  const [actualCheckType, setActualCheckType] = useState(checkTypes[0]);
  const [actualAttackType, setAttackType] = useState(attackTypes[0]);
  const [actualsaveThrowType, setsaveThrowType] = useState(saveThrowTypes[0]);
  const [actualRoll, setActualRoll] = useState({ value: 1, label: 1 });
  const [actualAttack, setActualAttack] = useState(0);
  const [actualAbility, setActualAbility] = useState({
    value: Object.keys(abilities)[0],
    label: abilities[Object.keys(abilities)[0]].name,
  });
  const [actualCD, setActualCD] = useState(5);

  const actualPlayer = assignWeaponBuffs(
    actualAttackType.value,
    props.actualPG
  );

  const statGetters = {
    attack: actualPlayer.attacks[actualAttack],
    abilityCheck: actualPlayer.abilityCheck[actualAbility.value],
    saveThrow: actualPlayer[actualsaveThrowType.value],
    classCheck: actualPlayer.classCheck,
    baseCheck: { bonus: 0, malus: 0 },
  };

  const actualStat = statGetters[actualCheckType.value];
  const attackBonus = actualPlayer.attacks.map((item) => getBonus(item));
  const bonusDamage =
    weapons[actualAttackType.value].dices.bonus +
    getBonus(actualPlayer.bonusDamage);

  const attackLabel = `${weapons[actualAttackType.value].dices.quantity}d${
    weapons[actualAttackType.value].dices.faces
  }${bonusDamage >= 0 ? " + " : " "}${
    weapons[actualAttackType.value].dices.bonus +
    getBonus(actualPlayer.bonusDamage)
  }`;

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
    attack1Button: {
      onClick: () => setActualAttack(0),
      children: `${attackBonus[0] >= 0 ? "+" : ""}${attackBonus[0]}`,
      className: classNames("mini-button", {
        "bg-selected": actualAttack === 0,
      }),
    },
    attack2Button: {
      onClick: () => setActualAttack(1),
      children: `${attackBonus[1] >= 0 ? "+" : ""}${attackBonus[1]}`,
      className: classNames("mini-button", {
        "bg-selected": actualAttack === 1,
      }),
    },
    attack3Button: {
      onClick: () => setActualAttack(2),
      children: `${attackBonus[2] >= 0 ? "+" : ""}${attackBonus[2]}`,
      className: classNames("mini-button", {
        "bg-selected": actualAttack === 2,
      }),
    },
  };

  return (
    <Row className="mb20 collapse">
      <Column small={6}>
        <Row>
          <Column small={5}>
            <Selector {...theProps.checkTypeSelect} />
          </Column>
          <Column small={7}>
            {actualCheckType.value === "abilityCheck" && (
              <Selector {...theProps.abilitySelect} />
            )}
            {actualCheckType.value === "attack" && (
              <Row className="collapse">
                <Column small={8}>
                  <Selector {...theProps.attackTypeSelect} />
                </Column>
                <Column small={4} className="center">
                  <div>{attackLabel}</div>
                  <Row className="collapse center">
                    <Column small={4}>
                      <button {...theProps.attack1Button} />
                    </Column>
                    <Column small={4}>
                      <button {...theProps.attack2Button} />
                    </Column>
                    <Column small={4}>
                      <button {...theProps.attack3Button} />
                    </Column>
                  </Row>
                </Column>
              </Row>
            )}
            {actualCheckType.value === "saveThrow" && (
              <Selector {...theProps.saveThrowTypeSelect} />
            )}
          </Column>
        </Row>
      </Column>
      <Column small={6}>
        <Row>
          <Column small={6}>
            <CDRoller {...theProps.cdRoller} />
          </Column>
          <Column small={3}>
            <Row>
              <Column className="shrink center-content">
                <div className="label">CD</div>
              </Column>
              <Column>
                <input
                  value={actualCD}
                  onChange={(event) => setActualCD(event.target.value)}
                />
              </Column>
            </Row>
          </Column>
          <Column small={3} className="center-content">
            <div className="label">
              {getCDResult(
                actualRoll.value,
                actualStat,
                actualCD,
                actualCheckType.value
              )}
            </div>
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default CDBox;
