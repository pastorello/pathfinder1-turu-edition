import React, { useState } from "react";
import styled from "styled-components";
import CDRoller from "../../components/CDRoller";

import { Row, Column } from "../../components/Grid";
import getBonus from "../../tools/getBonus";
import ConditionTag from "../../components/ConditionTag";

const Wrapper = styled(Row)`
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
  margin-bottom: 10px;
  .label {
    display: flex;
    ${(props) => props.isSelected === true && "background: #999;"}
    padding: 5px;
  }
`;

const Player = (props) => {
  const [initiativeRoll, setInitiativeRoll] = useState({ value: 1, label: 1 });
  const [health, setHealth] = useState(props.hitPoints);
  const [PFinput, setPfInput] = useState(0);

  const theProps = {
    upButton: {
      onClick: () => props.moveAction(props.id, "up"),
      children: "up",
    },
    downButton: {
      onClick: () => props.moveAction(props.id, "down"),
      children: "down",
    },
    outButton: {
      onClick: () => props.moveAction(props.id, "out"),
      children: "out",
    },
    inButton: {
      onClick: () => props.moveAction(props.id, "in"),
      children: "in",
    },
    cdRoller: {
      stat: props.perception,
      roll: initiativeRoll,
      setRoll: (value) => {
        setInitiativeRoll(value);
        props.setInitiativeRollAction(props.id, value.value);
      },
    },
    PFinput: {
      onChange: (event) => setPfInput(event.target.value),
      value: PFinput,
    },
    addHeal: {
      onClick: () => setHealth(parseInt(health) + parseInt(PFinput)),
      children: "+",
    },
    addDamage: {
      onClick: () => setHealth(parseInt(health) - parseInt(PFinput)),
      children: "-",
    },
  };

  return (
    <Wrapper isSelected={props.isActive}>
      <Column small={3}>
        <label className="label mb10">
          {props.name} {props.level}° <br />
        </label>
        <div>
          Iniziativa: <strong>{props.initiativeRoll}</strong>
        </div>
        <hr />
        <CDRoller {...theProps.cdRoller} />
        <hr />
        <Row>
          <Column small={4}>
            <button {...theProps.upButton} />
          </Column>
          <Column small={4}>
            <button {...theProps.downButton} />
          </Column>
          <Column small={4}>
            {props.isOutOfCombat === true ? (
              <button {...theProps.inButton} />
            ) : (
              <button {...theProps.outButton} />
            )}
          </Column>
        </Row>
      </Column>
      <Column small={9}>
        <Row>
          <Column>
            <Row className="collapse">
              <Column small={4}>
                PF: <strong>{health}</strong>/{props.hitPoints}
              </Column>
              <Column>
                <button {...theProps.addDamage} />
              </Column>
              <Column small={4}>
                <input {...theProps.PFinput} />
              </Column>
              <Column>
                <button {...theProps.addHeal} />
              </Column>
            </Row>
            <div>Soglia Morente: {props.sogliaMorente}</div>
          </Column>
          <Column>
            <div>CA: {getBonus(props.armorClass)}</div>
            <div>Percezione: {getBonus(props.perception)}</div>
            <div>Visibilità: {props.visibility}</div>
          </Column>
          <Column>
            <div>Azioni: {props.actions}</div>
            <div>Velocità: {props.speed}</div>
            <div>Terreno: {props.terrain}</div>
          </Column>
        </Row>
        <Row>
          {props.conditions.map((item) => {
            const theProps = {
              name: item.name,
              value: item.value,
              duration: item.duration,
              removeAction: () =>
                props.removeConditionAction(props.id, item.name),
            };

            return (
              <Column key={item.name} small={4}>
                <ConditionTag {...theProps} />
              </Column>
            );
          })}
        </Row>
        <hr />
        <ul>
          {props.activeEffects.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Column>
    </Wrapper>
  );
};

export default Player;
