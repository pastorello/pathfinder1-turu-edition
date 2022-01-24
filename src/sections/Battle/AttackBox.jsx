import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Row, Column } from "../../components/Grid";
import getCDResult from "../../tools/getCDResult";
import CDRoller from "../../components/CDRoller";
import Selector from "../../components/Selector";
import weapons from "../../data/weapons";
import assignWeaponBuffs from "./assignWeaponBuffs";
import classNames from "classnames";
import getBonus from "../../tools/getBonus";

const AttackBox = (props) => {
  const [actualAttackType, setAttackType] = useState(
    props.actualPG.attackTypes[0]
  );
  const [actualRoll, setActualRoll] = useState({ value: 1, label: 1 });
  const [actualAttack, setActualAttack] = useState(0);
  const [actualCD, setActualCD] = useState(
    getBonus(props.vsPG.armorClass) + 10
  );

  useEffect(() => {
    setActualCD(getBonus(props.vsPG.armorClass) + 10);
  }, [props.vsPG.armorClass]);

  useEffect(() => {
    setAttackType(props.actualPG.attackTypes[0]);
  }, [props.actualPG.attackTypes]);

  const actualPlayer = assignWeaponBuffs(
    actualAttackType.value,
    props.actualPG
  );

  const attackBonus = actualPlayer.attacks.map((item) => getBonus(item));

  const getAttackLabel = () => {
    if (actualAttackType.value === "incantesimo") {
      return null;
    }

    const bonusDamage =
      weapons[actualAttackType.value].dices.bonus +
      getBonus(actualPlayer.bonusDamage);

    return `${weapons[actualAttackType.value].dices.quantity}d${
      weapons[actualAttackType.value].dices.faces
    }${bonusDamage >= 0 ? " + " : " "}${
      weapons[actualAttackType.value].dices.bonus +
      getBonus(actualPlayer.bonusDamage)
    }`;
  };

  const attackLabel = getAttackLabel();

  const theProps = {
    attackTypeSelect: {
      options: props.actualPG.attackTypes,
      onChange: (event) => setAttackType(event),
      value: actualAttackType,
    },
    cdRoller: {
      stat: actualPlayer.attacks[actualAttack],
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
    <Row className="mb10 collapse">
      <Column small={5}>
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
      </Column>
      <Column small={7}>
        <Row className="collapse">
          <Column small={6}>
            <CDRoller {...theProps.cdRoller} />
          </Column>
          <Column small={3}>
            <Row>
              <Column className="shrink center-content">
                <div className="label">
                  <div>vs</div>
                </div>
              </Column>
              <Column>
                <input
                  value={actualCD}
                  onChange={(event) => setActualCD(event.target.value)}
                />
              </Column>
            </Row>
          </Column>
          <Column small={2} className="center-content">
            <div className="label">
              {getCDResult(
                actualRoll.value,
                actualPlayer.attacks[actualAttack],
                actualCD - 10,
                props.vsPG.armorClass
              )}
            </div>
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

AttackBox.propTypes = {
  actualPG: PropTypes.object,
  vsPG: PropTypes.object,
};

export default AttackBox;
