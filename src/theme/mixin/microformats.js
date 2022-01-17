import { css } from 'styled-components';
import variables from '../variables';
import dontBreakAll from './dontBreakAll';

// FIXME: lo zero sta alla fine perchè, non so per quale ragione
// applica tutti i selettori generati col ciclo for anche al contenitore
// che sfrutta AppWrapper come se ci fosse una regola &, & .pt20{ ...}

const defaultSizes = [5, 10, 15, 20, 30, 35, 40, 0];
const directions = ['top', 'bottom', 'left', 'right'];
const properties = ['margin', 'padding'];

const writeMicroformat = (abbreviation, property, size) => {
  return `.${abbreviation + size}{
        ${property}: ${size}px !important;
    }`;
};

const getMicroformats = () => {
  const theMicroformats = properties.map(property => {
    return directions.map(direction => {
      return defaultSizes.map(size => {
        return writeMicroformat(
          property[0] + direction[0],
          `${property}-${direction}`,
          size
        );
      });
    });
  });

  return theMicroformats.join();
};

export default css`
  //smart z indexing
  .bz-z-element {
    z-index: ${variables.zElement} !important;
  }

  //borders
  .bt0 {
    border-top: none !important;
  }
  .bl0 {
    border-left: none !important;
  }
  .br0 {
    border-right: none !important;
  }
  .bb0 {
    border-bottom: none !important;
  }

  //padding
  .p10 {
    padding: 10px !important;
  }
  .p20 {
    padding: 20px !important;
  }
  .mt80 {
    margin-top: 80px !important;
  }

  ${getMicroformats()}

  //TEXT TRANSFORMATIONS
    .bz-ttn {
    text-transform: none !important;
  }
  .bz-ttu {
    text-transform: uppercase !important;
  }

  //FINE TUNINGS
  .bz-no-border {
    border: none !important;
  }

  //DISPLAY
  .bz-block {
    display: block !important;
  }
  .bz-inline {
    display: inline !important;
  }
  .bz-invisible {
    visibility: hidden !important;
  }
  .bz-hidden {
    display: none !important;
  }
  .bz-inline-block {
    display: inline-block !important;
  }
  .bz-nooverflow {
    overflow: hidden !important;
  }

  //POSITIONING
  .bz-relative {
    position: relative !important;
    & > .bz-place-right {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .bz-fleft {
    float: left !important;
  }
  .bz-fright {
    float: right !important;
  }
  .bz-valign {
    align-self: center !important;
  }

  //VERTICAL POSITIONING
  //NB: per allineare le .columns e .row della grid di foundation, utilizzare le apposite classi
  //.align-self-middle per le colonne e .align-middle per i row

  //questo serve come contenito per per allineare gli oggetti al suo interno
  .bz-valign-mid {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .bz-valign-bottom {
    display: flex;
    align-items: flex-end;
  }
  .bz-valign_mid-size {
    height: 30px;
    display: flex;
    align-items: center;
  }
  .bz-valign_big-size {
    height: 40px;
    display: flex;
    align-items: center;
  }
  .bz-abs-header-box {
    position: absolute;
    width: 100%;
  }

  //TEXT BEHAVIORS
  .bz-text-left {
    text-align: left !important;
  }
  .bz-text-center {
    text-align: center !important;
  }
  .bz-text-right {
    text-align: right !important;
  }
  .bz-text-capitalize {
    text-transform: capitalize !important;
  }

  //DIMENSIONS
  .w100 {
    width: 100% !important;
  }
  .h100 {
    height: 100% !important;
  }
  .bz-w-200 {
    display: inline-block;
    width: 200px;
  }
  .bz-mh-45 {
    height: 45px;
    min-height: 45px;
  }
  .bz-no-maxw {
    max-width: none !important;
    > ul {
      max-width: none !important;
    }
  }

  //BEHAVIORS
  .bz-interactive-el {
    cursor: pointer;
  }
  .bz-no-hover:hover {
    background-color: initial !important;
    color: initial !important;
    cursor: default;
  }

  .bz-blurred {
    filter: blur(5px) !important;
    position: relative;
    & > *:before {
      width: 100%;
      height: 100%;
      background: transparent;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100; //todo: capire perchè qui non si legge $z-element da settings.scss
    }

    &.bz-blurred-3px {
      filter: blur(3px) !important;
    }

    &.bz-blurred-2px {
      filter: blur(2px) !important;
    }
  }

  .bz-dontbreak {
    ${dontBreakAll}
  }
  .bz-flex-center-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
