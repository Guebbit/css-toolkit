import postcss from 'postcss';
import { colorsCollection } from '../../colors/index.js';
import { createColorsVars } from '../create-colors-vars.js';

export function createColorsVarsMixin(mixin, prefix) {
    const p = prefix || '';
    const css = createColorsVars(colorsCollection, p);
    mixin.replaceWith(postcss.parse(css));
}
