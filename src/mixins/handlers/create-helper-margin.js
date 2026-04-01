import postcss from 'postcss';
import { createHelperMargin } from '../create-helper-margin.js';
import { parseMeasures } from './utils.js';

export function createHelperMarginMixin(mixin, ...args) {
    const measures = parseMeasures(args);
    const css = createHelperMargin(measures);
    mixin.replaceWith(postcss.parse(css));
}
