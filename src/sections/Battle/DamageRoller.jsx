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
      children: "Assegna danno",
    },
    assignHealButton: {
      onClick: () => props.onAssignRoll("heal"),
      children: "Assegna cura",
    },
  };
  return (
    <Row>
      <Column small={8}>
        <DiceRoller {...theProps.cdRoller} />
      </Column>
      <Column>
        <button {...theProps.assignDamageButton} />
      </Column>
      <Column>
        <button {...theProps.assignHealButton} />
      </Column>
    </Row>
  );
};

export default DamageRoller;
