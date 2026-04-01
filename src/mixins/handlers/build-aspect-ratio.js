import postcss from 'postcss';
import {
    buildAspectRatio,
    buildAspectRatioContainer,
    buildAspectRatioAnchor
} from '../build-aspect-ratio.js';

export function buildAspectRatioMixin(mixin, ratio) {
    const css = buildAspectRatio(ratio || '100%');
    mixin.replaceWith(postcss.parse(css));
}

export function buildAspectRatioContainerMixin(mixin, ratio) {
    const css = buildAspectRatioContainer(ratio || '100%');
    mixin.replaceWith(postcss.parse(css));
}

export function buildAspectRatioAnchorMixin(mixin) {
    const css = buildAspectRatioAnchor();
    mixin.replaceWith(postcss.parse(css));
}
