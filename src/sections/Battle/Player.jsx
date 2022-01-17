import React, { useState } from "react";
import styled from "styled-components";
import CDRoller from "../../components/CDRoller";

import { Row, Column } from "../../components/Grid";
import getBonus from "../../tools/getBonus";
import Selector from "../../components/Selector";
import ConditionTag from "../../components/ConditionTag";
import visibilityConditions from "../../data/conditions/visibilityConditions";
import terrainConditions from "../../data/conditions/terrainConditions";
import conditions from "../../data/conditions";
import isValidObject from "../../tools/isValidObject";

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

const availableTerrainConditions = Object.keys(terrainConditions)
  .filter((item) => {
    const theCondition = conditions[item];
    return (
      theCondition.hasOwnProperty("showTag") && theCondition.showTag === false
    );
  })
  .map((item) => ({
    value: item,
    label: terrainConditions[item].name,
  }));

const availableVisibilityConditions = Object.keys(visibilityConditions)
  .filter((item) => {
    const theCondition = conditions[item];
    return (
      theCondition.hasOwnProperty("showTag") && theCondition.showTag === false
    );
  })
  .map((item) => ({
    value: item,
    label: visibilityConditions[item].name,
  }));

const Player = (props) => {
  const [initiativeRoll, setInitiativeRoll] = useState({ value: 1, label: 1 });
  const [PFinput, setPfInput] = useState(0);

  const getActualCondition = (availableConditions, defaultCondition) => {
    const selectedCondition = props.conditions.find((item) =>
      Object.keys(availableConditions).some((item2) => item2 === item.name)
    );
    return isValidObject(selectedCondition)
      ? {
          value: selectedCondition.name,
          label: availableConditions[selectedCondition.name].name,
        }
      : {
          value: defaultCondition,
          label: availableConditions[defaultCondition].name,
        };
  };

  const actualTerrain = getActualCondition(terrainConditions, "terrenoNormale");
  const actualVisibility = getActualCondition(
    visibilityConditions,
    "inosservato"
  );

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
      onClick: () =>
        props.setStatAction(
          props.id,
          "actualPF",
          props.actualPF + parseInt(PFinput)
        ),
      children: "+",
    },
    addDamage: {
      onClick: () =>
        props.setStatAction(
          props.id,
          "actualPF",
          props.actualPF - parseInt(PFinput)
        ),
      children: "-",
    },
    visibilitySelect: {
      options: availableVisibilityConditions,
      onChange: (value) => {
        props.addConditionAction(props.id, { name: value.value, duration: 0 });
      },
      value: actualVisibility,
    },
    terrainSelect: {
      options: availableTerrainConditions,
      onChange: (value) => {
        props.addConditionAction(props.id, { name: value.value, duration: 0 });
      },
      value: actualTerrain,
    },
  };

  const conditionsToShow = props.conditions.filter((item) => {
    const theCondition = conditions[item.name];
    return (
      !theCondition.hasOwnProperty("showTag") || theCondition.showTag === true
    );
  });

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
                PF: <strong>{props.actualPF}</strong>/
                {getBonus(props.hitPoints)}
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
            <Row className="collapse">
              <Column small={4}>Ferito {props.ferito}</Column>
              <Column small={8}>
                (morte a Morente {props.ferito + props.sogliaMorente})
              </Column>
            </Row>
          </Column>
          <Column>
            <div>CA: {getBonus(props.armorClass)}</div>
            <div>Percezione: {getBonus(props.perception)}</div>
            <Selector {...theProps.visibilitySelect} />
          </Column>
          <Column>
            <div>Azioni: {props.actions}</div>
            <div>Velocità: {props.speed}</div>
            <Selector {...theProps.terrainSelect} />
          </Column>
        </Row>
        {conditionsToShow.length > 0 && <hr />}
        <Row>
          {conditionsToShow.map((item) => {
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
