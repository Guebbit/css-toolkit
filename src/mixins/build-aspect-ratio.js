/**
 * Generate aspect-ratio container CSS.
 * Replaces SCSS mixin build-aspect-ratio from src/mixins/_build-aspect-ratio.scss
 */

/**
 * Container mixin: adds ::before padding-top hack for old-browser aspect ratio.
 * @param {string} ratio - CSS percentage value (e.g. '100%', '56%')
 * @returns {string} CSS string (for use inside a selector)
 */
export function buildAspectRatioContainer(ratio = '100%') {
    return `  position: relative;\n  &::before {\n    content: "";\n    display: block;\n    padding-top: ${ratio};\n  }`;
}

/**
 * Anchor mixin: absolutely positions a child to fill its parent.
 * @returns {string} CSS string (for use inside a selector)
 */
export function buildAspectRatioAnchor() {
    return `  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;`;
}

/**
 * Combined shortcut: container + child anchor.
 * @param {string} ratio - CSS percentage value
 * @returns {string} CSS string
 */
export function buildAspectRatio(ratio = '100%') {
    return `  position: relative;\n  &::before {\n    content: "";\n    display: block;\n    padding-top: ${ratio};\n  }\n  & > * {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }`;
}
