import {
    buildAspectRatioAnchorMixin,
    buildAspectRatioContainerMixin,
    buildAspectRatioMixin
} from './handlers/build-aspect-ratio.js';
import { buildCompatibilityMixin } from './handlers/build-compatibility.js';
import { buildScrollbarMixin } from './handlers/build-scrollbar.js';
import { createClassMixin } from './handlers/create-class.js';
import { createColorsCustomMixin } from './handlers/create-colors-custom.js';
import { createColorsMixin } from './handlers/create-colors.js';
import { createColorsVarsCustomMixin } from './handlers/create-colors-vars-custom.js';
import { createColorsVarsMixin } from './handlers/create-colors-vars.js';
import { createHelperMarginMixin } from './handlers/create-helper-margin.js';
import { createHelperPaddingMixin } from './handlers/create-helper-padding.js';

export const mixins = {
    'create-colors': createColorsMixin,
    'create-colors-vars': createColorsVarsMixin,
    'create-colors-custom': createColorsCustomMixin,
    'create-colors-vars-custom': createColorsVarsCustomMixin,
    'create-class': createClassMixin,
    'create-helper-margin': createHelperMarginMixin,
    'create-helper-padding': createHelperPaddingMixin,
    'build-aspect-ratio': buildAspectRatioMixin,
    'build-aspect-ratio-container': buildAspectRatioContainerMixin,
    'build-aspect-ratio-anchor': buildAspectRatioAnchorMixin,
    'build-compatibility': buildCompatibilityMixin,
    'build-scrollbar': buildScrollbarMixin
};

export default mixins;
