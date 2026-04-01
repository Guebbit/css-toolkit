/**
 * Generate browser-compatibility @supports / @media wrappers.
 * Replaces SCSS mixin build-compatibility from src/mixins/_build-compatibility.scss
 *
 * @param {string}   browser - Target browser: 'ie', 'edge', 'firefox', 'opera', 'safari'
 * @param {string}   content - CSS content to wrap
 * @returns {string} CSS string
 */
export function buildCompatibility(browser, content = '') {
    switch (browser) {
        case 'ie':
            return `@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n${content}\n}`;
        case 'edge':
            return `@supports (-ms-ime-align: auto) {\n${content}\n}`;
        case 'firefox':
            return `@supports (-moz-appearance: none) {\n${content}\n}`;
        case 'opera':
            return `@supports (-o-object-fit: fill) {\n${content}\n}`;
        case 'safari':
            return `@supports (background: -webkit-named-image(i)) and (not (-webkit-touch-callout: none)) {\n${content}\n}`;
        default:
            return content;
    }
}
