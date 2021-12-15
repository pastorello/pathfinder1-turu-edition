import React from "react";
import spellsDB from "../data/spells";
import { Row, Column } from "../components/Grid";

const SpellBook = (props) => {
  const theSpells = spellsDB.map((item) => {
    return (
      <Row className="mb10">
        <Column small={1}>{item.level}</Column>
        <Column small={3}>
          <h3>
            <a
              href={`https://pf2.altervista.org${item.url}`}
              target={"_blank"}
              rel="noreferrer"
            >
              {item.name}
            </a>{" "}
          </h3>
        </Column>
        <Column small={2}>
          <small>{item.school}</small>
        </Column>
        <Column small={6}>
          <p>{item.description}</p>
        </Column>
      </Row>
    );
  });
  return (
    <Row>
      <Column small={12}>
        <h2>SpellBook</h2>
        {theSpells}
      </Column>
    </Row>
  );
};

export default SpellBook;
