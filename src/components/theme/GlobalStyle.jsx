import { createGlobalStyle } from "styled-components";

import theme from ".";
import baseCss from "./mixin/baseCss";
import cssReset from "./mixin/cssReset";

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
        padding: 5px;
        border: 1px solid black;
    }
    li {
        list-style-type: "-";
        padding-left: 10px;
    }
`;
