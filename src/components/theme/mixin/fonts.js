import { css } from 'styled-components';
import theme from '../index';

export default css`
  /* open-sans-300 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: ${theme.vars.fontLight};
    src: local('Open Sans Light'), local('OpenSans-Light'),
      url('https://s3-eu-west-1.amazonaws.com/assets.buzzoole.com/common/fonts/open-sans/open-sans-v15-latin-300.woff2')
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('https://s3-eu-west-1.amazonaws.com/assets.buzzoole.com/common/fonts/open-sans/open-sans-v15-latin-300.woff')
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* open-sans-regular - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: ${theme.vars.fontNormal};
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
      url('https://s3-eu-west-1.amazonaws.com/assets.buzzoole.com/common/fonts/open-sans/open-sans-v15-latin-regular.woff2')
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('https://s3-eu-west-1.amazonaws.com/assets.buzzoole.com/common/fonts/open-sans/open-sans-v15-latin-regular.woff')
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* open-sans-600 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: ${theme.vars.fontSemibold};
    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
      url('https://s3-eu-west-1.amazonaws.com/assets.buzzoole.com/common/fonts/open-sans/open-sans-v15-latin-600.woff2')
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('https://s3-eu-west-1.amazonaws.com/assets.buzzoole.com/common/fonts/open-sans/open-sans-v15-latin-600.woff')
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'akzidenz-grotesk';
    font-style: normal;
    font-weight: ${theme.vars.fontNormal};
    src: url('https://s3-eu-west-1.amazonaws.com/assets.buzzoole.com/common/fonts/akzidenz-grotesk/akzidenz-grotesk-500.woff2')
        format('woff2'),
      url('https://s3-eu-west-1.amazonaws.com/assets.buzzoole.com/common/fonts/akzidenz-grotesk/akzidenz-grotesk-500.woff')
        format('woff'),
      url('https://s3-eu-west-1.amazonaws.com/assets.buzzoole.com/common/fonts/akzidenz-grotesk/akzidenz-grotesk-500.otf')
        format('opentype');
  }

  @font-face {
    font-family: 'akzidenz-grotesk';
    font-style: normal;
    font-weight: ${theme.vars.fontBold};
    src: url('https://s3-eu-west-1.amazonaws.com/assets.buzzoole.com/common/fonts/akzidenz-grotesk/akzidenz-grotesk-700.woff2')
        format('woff2'),
      url('https://s3-eu-west-1.amazonaws.com/assets.buzzoole.com/common/fonts/akzidenz-grotesk/akzidenz-grotesk-700.woff')
        format('woff'),
      url('https://s3-eu-west-1.amazonaws.com/assets.buzzoole.com/common/fonts/akzidenz-grotesk/akzidenz-grotesk-700.otf')
        format('opentype');
  }
`;
