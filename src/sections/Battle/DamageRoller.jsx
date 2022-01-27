import React from "react";
import PropTypes from "prop-types";

import DiceRoller from "../../components/DiceRoller";
import { Column, Row } from "../../components/Grid";
import isValid from "../../tools/isValid";

const DamageRoller = (props) => {
  const theProps = {
    cdRoller: {
      onDiceRolled: props.onDiceRolled,
      defaultDice: isValid.dataObj(props.defaultDice)
        ? props.defaultDice
        : {
            quantity: 1,
            faces: 4,
            bonus: 0,
          },
    },
    assignDamageButton: {
      onClick: () => props.onAssignRoll("damage"),
      children: "Danno",
    },
    assignHealButton: {
      onClick: () => props.onAssignRoll("heal"),
      children: "Cura",
    },
  };
  return (
    <Row>
      <Column small={2}>
        <button {...theProps.assignDamageButton} />
      </Column>
      <Column small={2}>
        <button {...theProps.assignHealButton} />
      </Column>
      <Column small={8}>
        <DiceRoller {...theProps.cdRoller} />
      </Column>
    </Row>
  );
};

DamageRoller.propTypes = {
  onDiceRolled: PropTypes.func,
  onAssignRoll: PropTypes.func,
  defaultDice: PropTypes.object,
};

export default DamageRoller;
