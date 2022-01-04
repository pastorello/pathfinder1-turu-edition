import React, { useState } from "react";
import { Row, Column } from "../components/Grid";
import alignments from "../data/alignments";
import deities from "../data/deities";
const DeityCard = (deity) => {
  return (
    <Row>
      <Column small={3}>
        <h3>
          <a href={deity.url}>{deity.name}</a> <small>{deity.title}</small>
        </h3>
      </Column>
      <Column small={2}>{alignments[deity.alignment]}</Column>
      <Column small={2}>{deity.virtue}</Column>
      <Column small={3}>
        <h3>
          <a href={deity.oppositeUrl}>{deity.oppositeDeity}</a>{" "}
          <small>{deity.oppositeTitle}</small>
        </h3>
      </Column>
      <Column small={2}>{alignments[deity.oppositeAlignment]}</Column>
    </Row>
  );
};

const Dieties = (props) => {
  return (
    <Row>
      <Column small={12}>
        <h2>Divinità</h2>
        <Row>
          <Column>
            {deities.map((item) => (
              <DeityCard {...item} key={item.name} />
            ))}
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default Dieties;
