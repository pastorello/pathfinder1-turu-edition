import { css } from 'styled-components';

import microformats from './microformats';
import fonts from './fonts';
import semanticClasses from './semanticClasses';
import responsiveHelpers from './responsiveHelpers';

export default css`

    ${fonts}
    ${semanticClasses}
    ${microformats}
    ${responsiveHelpers}
`;
