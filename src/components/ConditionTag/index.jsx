import React from "react";
import styled from "styled-components";
import { Column, Row } from "../Grid";

const Wrapper = styled(Row)`
  width: 100%;
  border-radius: 4px;
  padding: 5px;
  background: #ddd;
  button {
    width: 20px;
    text-align: center;
    float: right;
    padding: 0;
  }
`;

const ConditionTag = (props) => {
  const theProps = {};

  return (
    <Wrapper className="collapse">
      <Column small={8}>
        {props.name} {props.value}
      </Column>
      <Column small={4}>
        {props.duration > 0 && `(${props.duration}r)`}{" "}
        <button onClick={props.removeAction}>X</button>
      </Column>
    </Wrapper>
  );
};

export default ConditionTag;
