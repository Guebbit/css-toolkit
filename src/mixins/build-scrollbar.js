/**
 * Generate custom scrollbar CSS for WebKit browsers.
 * Replaces SCSS mixin build-scrollbar from src/mixins/_build-scrollbar.scss
 *
 * @param {string} size     - Scrollbar width/height (e.g. '4px')
 * @param {string} color    - Thumb color
 * @param {string} bg       - Track background color ('auto' = transparent)
 * @param {string} radius   - Thumb border-radius
 * @returns {string} CSS string (for use inside a selector)
 */
export function buildScrollbar(size = '4px', color = '#fff', bg = 'auto', radius = '10px') {
    const resolvedBg = bg === 'auto' ? 'transparent' : bg;

    return [
        `  &::-webkit-scrollbar {`,
        `    width: ${size};`,
        `    height: ${size};`,
        `    background-color: transparent;`,
        `    background-color: ${resolvedBg};`,
        `  }`,
        `  &::-webkit-scrollbar-thumb {`,
        `    border-radius: ${radius};`,
        `    background-color: #fff;`,
        `    background-color: ${color};`,
        `  }`,
        `  &::-webkit-scrollbar-corner {`,
        `    background-color: transparent;`,
        `    background-color: ${resolvedBg};`,
        `  }`,
    ].join('\n');
}
