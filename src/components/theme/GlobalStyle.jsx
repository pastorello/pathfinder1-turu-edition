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
`;
