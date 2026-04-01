/**
 * Generate padding utility classes.
 * Replaces SCSS mixin create-helper-padding from src/mixins/_create-helper-padding.scss
 *
 * @param {Array}   measureList - Array of [name, value] pairs
 * @param {boolean} important   - Append !important
 * @param {string}  prefix      - Class prefix
 * @returns {string} CSS string
 */
export function createHelperPadding(measureList = [], important = false, prefix = '') {
    const imp = important ? ' !important' : '';
    const lines = [];

    for (const [name, val] of measureList) {
        lines.push(`.${prefix}pt-${name} {\n  padding-top: ${val}${imp};\n}`);
        lines.push(`.${prefix}pb-${name} {\n  padding-bottom: ${val}${imp};\n}`);
        lines.push(`.${prefix}pl-${name} {\n  padding-left: ${val}${imp};\n}`);
        lines.push(`.${prefix}pr-${name} {\n  padding-right: ${val}${imp};\n}`);
        lines.push(`.${prefix}px-${name} {\n  padding-right: ${val}${imp};\n  padding-left: ${val}${imp};\n}`);
        lines.push(`.${prefix}py-${name} {\n  padding-top: ${val}${imp};\n  padding-bottom: ${val}${imp};\n}`);
        lines.push(`.${prefix}pa-${name} {\n  padding: ${val}${imp};\n}`);
    }

    return lines.join('\n');
}
