import { createGlobalStyle } from "styled-components";
import chroma from "chroma-js";
import baseCss from "./mixin/baseCss";
import cssReset from "./mixin/cssReset";

const borderColor = chroma.hsl(0, 0, 0.8);
const bgButtonColor = chroma.hsl(0, 0, 0.95);
const hoverBg = chroma.temperature(3500);
const selectedBg = chroma.hcl(130, 40, 80);
export default createGlobalStyle`

    ${cssReset}
    body{
        ${baseCss}
    }
    h1 {
        font-size: 30px;
        margin-bottom: 20px;
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
    button {
        border-radius: 4px;
        width: 100%;
        padding: 8px;
        border: 1px solid ${borderColor};
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
`;
