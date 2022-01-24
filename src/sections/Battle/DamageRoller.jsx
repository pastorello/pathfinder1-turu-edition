import React from "react";

import DiceRoller from "../../components/DiceRoller";
import { Column, Row } from "../../components/Grid";

const DamageRoller = (props) => {
  const theProps = {
    cdRoller: {
      onDiceRolled: props.onDiceRolled,
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

export default DamageRoller;
