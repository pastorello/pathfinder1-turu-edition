import { css } from 'styled-components';
import theme from '../index';

export default css`
  .bz-msg-success,
  .bz-msg-failure,
  .bz-msg-info,
  .bz-msg-wait,
  .bz-msg-warning {
    color: ${theme.colors.black80};
  }
  .bz-msg-success {
    color: ${theme.colors.fullGreen};
  }
  .bz-msg-failure {
    color: ${theme.colors.fullRed};
  }
  .bz-msg-info {
    color: ${theme.colors.fullGold};
  }
  .bz-msg-warning {
    color: ${theme.colors.fullYellow};
  }
`;
