import React, { useState } from "react";
import DiceRoller from "../../components/DiceRoller";
import { Row, Column } from "../../components/Grid";
import conditions from "../../data/conditions";
import getBonus from "../../tools/getBonus";
import sortOnKey from "../../tools/sortOnKey";
import ConditionsBox from "./ConditionsBox";
import party from "./party";
import Player from "./Player";

const Battle = (props) => {
  const [actualTurn, setActualTurn] = useState(0);
  const [theParty, setParty] = useState(party);
  const [actualPlayer, setActualPlayer] = useState(party[0].id);
  const [panchina, setPanchina] = useState([]);

  const resetBattle = () => {
    setActualTurn(0);
    setActualPlayer(theParty[0].id);
  };

  const reloadParty = () => {
    setParty(party);
    setPanchina([]);
    setActualPlayer(party[0].id);
  };

  const addCondition = (
    playerID,
    { condition = null, value = null, duration = null }
  ) => {
    setParty(
      theParty.map((item) => ({
        ...item,
        conditions:
          item.id === playerID
            ? [
                ...item.conditions.filter((item2) => item2.name !== condition),
                {
                  name: condition,
                  value: value,
                  duration: duration,
                },
              ]
            : item.conditions,
      }))
    );
  };

  const removeCondition = (playerID, condition) => {
    setParty(
      theParty.map((item) => ({
        ...item,
        conditions:
          item.id === playerID
            ? [...item.conditions.filter((item2) => item2.name !== condition)]
            : item.conditions,
      }))
    );
  };

  const setInitiativeRoll = (playerID, initiative) => {
    setParty(
      theParty.map((item) => ({
        ...item,
        initiativeRoll:
          item.id === playerID
            ? getBonus(item.perception) + parseInt(initiative)
            : item.initiativeRoll,
      }))
    );
  };

  const sortInitiative = () => {
    const newSort = theParty.sort(sortOnKey("initiativeRoll", "number", true));
    setParty(newSort);
    setActualPlayer(newSort[0].id);
  };

  const nextTurn = () => {
    setActualTurn(actualTurn + 1);
    if (theParty.length > 1) {
      const lastPlayer = theParty[0];
      const newParty = [...theParty];
      newParty.shift();
      setParty([...newParty, lastPlayer]);
      setActualPlayer(newParty[0].id);
    }
  };

  const movePG = (playerID, direction) => {
    if (direction === "in") {
      setParty([
        ...theParty,
        ...panchina.filter((item) => item.id === playerID),
      ]);
      setPanchina([...panchina.filter((item) => item.id !== playerID)]);
    }
    if (direction === "out") {
      setParty([...theParty.filter((item) => item.id !== playerID)]);
      setPanchina([
        ...panchina,
        ...theParty.filter((item) => item.id === playerID),
      ]);
    }
    if (direction === "up") {
      const newParty = [...theParty];
      const playerIndex = theParty.findIndex((item) => item.id === playerID);
      if (playerIndex > 0) {
        const playerToMove = {
          ...theParty[playerIndex - 1],
        };
        newParty[playerIndex - 1] = newParty[playerIndex];
        newParty[playerIndex] = playerToMove;
      }
      setParty(newParty);
    }
    if (direction === "down") {
      const newParty = [...theParty];
      const playerIndex = theParty.findIndex((item) => item.id === playerID);
      if (playerIndex < theParty.length - 1) {
        const playerToMove = {
          ...theParty[playerIndex + 1],
        };
        newParty[playerIndex + 1] = newParty[playerIndex];
        newParty[playerIndex] = playerToMove;
      }
      setParty(newParty);
    }
  };

  const buffedParty = theParty.map((item) =>
    item.conditions.reduce(
      (acc, item2) => conditions[item2.name].effect(acc, item2.value),
      item
    )
  );
  const thePlayers = buffedParty.map((item) => {
    const theProps = {
      ...item,
      key: item.id,
      isActive: item.id === actualPlayer,
      moveAction: movePG,
      removeConditionAction: removeCondition,
      setInitiativeRollAction: setInitiativeRoll,
    };
    return <Player {...theProps} />;
  });

  const outOfCombatPlayers = panchina.map((item) => {
    const theProps = {
      ...item,
      key: item.id,
      isActive: false,
      isOutOfCombat: true,
      moveAction: movePG,
    };
    return <Player {...theProps} />;
  });

  const theProps = {
    conditionsBox: {
      addConditionAction: addCondition,
      actualParty: buffedParty,
    },
  };
  return (
    <Row className="mb20">
      <Column small={12}>
        <Row>
          <Column small={4}>
            <h1>The Battle</h1>
          </Column>
          <Column small={1}>
            <h3>
              Round <strong>{actualTurn}</strong>
            </h3>
          </Column>
          <Column>
            <button type="button" onClick={nextTurn}>
              Prossimo turno
            </button>
          </Column>
          <Column>
            <button type="button" onClick={sortInitiative}>
              Ordina Iniziativa
            </button>
          </Column>
          <Column className="shrink">
            <button type="button" onClick={reloadParty}>
              Ricarica Party
            </button>
          </Column>
          <Column className="shrink">
            <button type="button" onClick={resetBattle}>
              Resetta Turni
            </button>
          </Column>
        </Row>
        <DiceRoller />
        {thePlayers.length > 0 && <ConditionsBox {...theProps.conditionsBox} />}
        {thePlayers}
        <h2 className="mt40">Fuori dal combattimento</h2>
        {outOfCombatPlayers}
      </Column>
    </Row>
  );
};

export default Battle;
