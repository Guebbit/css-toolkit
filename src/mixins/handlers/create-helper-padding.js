import postcss from 'postcss';
import { createHelperPadding } from '../create-helper-padding.js';
import { parseMeasures } from './utils.js';

export function createHelperPaddingMixin(mixin, ...args) {
    const measures = parseMeasures(args);
    const css = createHelperPadding(measures);
    mixin.replaceWith(postcss.parse(css));
}
