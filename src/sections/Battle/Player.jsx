import React from "react";
import styled from "styled-components";

import { Row, Column } from "../../components/Grid";
import getBonus from "../../tools/getBonus";

const Wrapper = styled(Row)`
  .label {
    display: flex;
    ${(props) => props.isSelected === true && "background: #999;"}
    padding: 5px;
  }
`;

const Player = (props) => {
  return (
    <Wrapper isSelected={props.isActive}>
      <Column small={3}>
        <label className="label mb10">
          {props.name} {props.level}°
        </label>
        <Row>
          <Column small={4}>
            <button onClick={() => props.moveAction(props.id, "up")}>up</button>
          </Column>
          <Column small={4}>
            <button onClick={() => props.moveAction(props.id, "down")}>
              down
            </button>
          </Column>
          <Column small={4}>
            {props.isOutOfCombat === true ? (
              <button onClick={() => props.moveAction(props.id, "in")}>
                in
              </button>
            ) : (
              <button onClick={() => props.moveAction(props.id, "out")}>
                out
              </button>
            )}
          </Column>
        </Row>
        <h3 className="mt10 mb10">Conditions</h3>
        <Row>
          {props.conditions.map((item) => (
            <Column key={item.name} small={12}>
              {item.name} {item.value}
              {item.duration !== "infinito" &&
                item.duration > 0 &&
                item.duration}
              <button
                onClick={() => props.removeConditionAction(props.id, item.name)}
              >
                X
              </button>
            </Column>
          ))}
        </Row>
      </Column>
      <Column small={9}>
        <Row>
          <Column>
            <div>PF: {props.hitPoints}</div>
            <div>Soglia Morente: {props.sogliaMorente}</div>
            <div>Azioni: {props.actions}</div>
            <hr />
          </Column>
          <Column>
            <div>CA: {getBonus(props.armorClass)}</div>
            <div>Iniziativa: {getBonus(props.initiative)}</div>
            <div>Percezione: {getBonus(props.perception)}</div>
            <hr />
          </Column>
          <Column>
            <div>Visibilità: {props.visibility}</div>
            <div>Velocità: {props.speed}</div>
            <div>Terreno: {props.terrain}</div>
            <hr />
          </Column>
        </Row>
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
