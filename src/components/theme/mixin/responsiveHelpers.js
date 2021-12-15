import { css } from 'styled-components';
import theme from '../index';

export default css`
  .hidden-on-small {
    display: none !important;
    ${theme.breakpoint.tablet`
            display: flex !important;
        `}
  }
  .showed-on-small {
    display: flex !important;
    ${theme.breakpoint.tablet`
            display: none !important;
        `}
  }
`;
