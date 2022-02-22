import { createGlobalStyle } from "styled-components";
import chroma from "chroma-js";
import baseCss from "./mixin/baseCss";
import cssReset from "./mixin/cssReset";
import { keyframes } from "styled-components";

const borderColor = chroma.hsl(0, 0, 0.8);
const bgButtonColor = chroma.hsl(0, 0, 0.95);
const hoverBg = chroma.temperature(3500);
const selectedBg = chroma.hcl(130, 40, 80);

const rotate = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`;

export default createGlobalStyle`

    ${cssReset}
    body{
        ${baseCss}
    }
    h1 {
        font-size: 30px;
        font-weight: bold;
    }
    h2 {
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: bold;
    }
    h3 {
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    strong {
        font-weight: bold;
    }
    button, .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 8px;
        border: 1px solid ${borderColor};
        border-radius: 4px;
        background: ${bgButtonColor};
        &:hover{
            background: ${hoverBg};
        }
    }
    li {
        list-style-type: "-";
        padding-left: 10px;
    }
    input {
        text-align: center;
        border-radius: 4px;
        width: 100%;
        max-width: 100%;
        height: 36px;
        border: 1px solid ${borderColor};
    }
    .bg-selected{
        background: ${selectedBg};
    }
    .mini-button {
        width: 20px;
        text-align: center;
        padding: 0;
    }
    .small-button {
        padding: 0;
    }
    .center-content {
        align-items: center;
        display: flex;
    }
    .center {
        justify-content: center;
        text-align: center;
    }
    .columns > .row {
        margin-left: -5px;
        margin-right: -5px;
    }
    .total-result {
        text-align: center;
        background: #333;
        color: #fff;
        border-radius: 4px;
        &.is-changed {
            animation: ${rotate} 1s ease-out;
        }
    }
`;
