import postcss from 'postcss';
import { colorsCollection } from '../../colors/index.js';
import { createColors } from '../create-colors.js';

export function createColorsMixin(mixin) {
    const css = createColors(colorsCollection);
    mixin.replaceWith(postcss.parse(css));
}
