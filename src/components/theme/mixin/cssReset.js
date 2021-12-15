import { css } from 'styled-components';
import theme from '..';

export default css`
  /* derived from http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 License: none (public domain) */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    box-sizing: border-box;
    vertical-align: baseline;

    padding: 0;
    border: 0;
    margin: 0;

    font-size: 100%;
    font: inherit;
    line-height: 1.2;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *,
  :after,
  :before {
    box-sizing: inherit;
  }

  /*interction behaviors*/
  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    padding: 0;
    -webkit-appearance: button;
    cursor: pointer;
  }

  a {
    color: ${theme.colors.fullBlack};
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: 'Open Sans', sans-serif;
    border: none;
    background: transparent;
  }

  dl,
  dt,
  dd,
  ol,
  ul,
  li {
    list-style-type: none;
  }
  a,
  a:focus,
  a img,
  button,
  div {
    outline: none;
    text-decoration: none;
  }

  /* react modal body class */
  .ReactModal__Body--open {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .ReactModal__Overlay.ReactModal__Overlay--after-open {
    overflow-y: auto;
  }
`;
