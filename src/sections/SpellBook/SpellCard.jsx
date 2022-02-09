import React from "react";
import { Column, Row } from "../../components/Grid";
import isValid from "../../tools/isValid";

const SpellCard = (props) => {
  return (
    <Row className="mb10">
      <Column small={1}>{props.data.level}</Column>
      <Column small={3}>
        <h3>
          <a
            href={`https://pf2.altervista.org${props.data.url}`}
            target={"_blank"}
            rel="noreferrer"
          >
            {props.data.name}
          </a>{" "}
        </h3>
      </Column>
      <Column small={2}>
        <small>{props.data.school}</small>
      </Column>
      <Column small={5}>
        <p>{props.data.description}</p>
      </Column>
      <Column small={1}>
        {props.data.source.reduce(
          (acc, item, index) => `${acc}${index === 0 ? "" : ","} ${item}`,
          ""
        )}
      </Column>
    </Row>
  );
};

export default SpellCard;
