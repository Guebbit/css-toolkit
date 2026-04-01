import postcss from 'postcss';
import { buildCompatibility } from '../build-compatibility.js';
import { mixinContentToString } from './utils.js';

export function buildCompatibilityMixin(mixin, browser) {
    const content = mixinContentToString(mixin);
    const css = buildCompatibility(browser, content);
    mixin.replaceWith(postcss.parse(css));
}
