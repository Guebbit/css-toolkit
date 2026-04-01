import postcss from 'postcss';
import { buildScrollbar } from '../build-scrollbar.js';

export function buildScrollbarMixin(mixin, size, color, bg, radius) {
    const css = buildScrollbar(size, color, bg, radius);
    mixin.replaceWith(postcss.parse(css));
}
