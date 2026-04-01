import postcss from 'postcss';
import { createCollection, parseColor } from '../../functions/colors.js';
import { createColors } from '../create-colors.js';

export function createColorsCustomMixin(mixin, colorName, hexColor, varsStr, prefix, prefixV) {
    const colorHex = (hexColor || '').trim();
    const colorFull = colorHex.startsWith('#') ? colorHex : `#${colorHex}`;
    const collection = createCollection(parseColor(colorFull));
    const colorList = { [(colorName || '').trim()]: collection };
    const vars = (varsStr || '').trim() === 'true';
    const css = createColors(colorList, vars, (prefix || '').trim(), (prefixV || '').trim());
    mixin.replaceWith(postcss.parse(css));
}
