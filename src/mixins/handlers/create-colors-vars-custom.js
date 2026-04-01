import postcss from 'postcss';
import { createCollection, parseColor } from '../../functions/colors.js';
import { createColorsVars } from '../create-colors-vars.js';

export function createColorsVarsCustomMixin(mixin, colorName, hexColor, prefix) {
    const colorHex = (hexColor || '').trim();
    const colorFull = colorHex.startsWith('#') ? colorHex : `#${colorHex}`;
    const collection = createCollection(parseColor(colorFull));
    const colorList = { [(colorName || '').trim()]: collection };
    const css = createColorsVars(colorList, (prefix || '').trim());
    mixin.replaceWith(postcss.parse(css));
}
