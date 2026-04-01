/**
 * Generate margin utility classes.
 * Replaces SCSS mixin create-helper-margin from src/mixins/_create-helper-margin.scss
 *
 * @param {Array}   measureList - Array of [name, value] pairs
 * @param {boolean} important   - Append !important
 * @param {string}  prefix      - Class prefix
 * @returns {string} CSS string
 */
export function createHelperMargin(measureList = [], important = false, prefix = '') {
    const imp = important ? ' !important' : '';
    const lines = [];

    for (const [name, val] of measureList) {
        lines.push(`.${prefix}mt-${name} {\n  margin-top: ${val}${imp};\n}`);
        lines.push(`.${prefix}mb-${name} {\n  margin-bottom: ${val}${imp};\n}`);
        lines.push(`.${prefix}ml-${name} {\n  margin-left: ${val}${imp};\n}`);
        lines.push(`.${prefix}mr-${name} {\n  margin-right: ${val}${imp};\n}`);
        lines.push(`.${prefix}mx-${name} {\n  margin-right: ${val}${imp};\n  margin-left: ${val}${imp};\n}`);
        lines.push(`.${prefix}my-${name} {\n  margin-top: ${val}${imp};\n  margin-bottom: ${val}${imp};\n}`);
        lines.push(`.${prefix}ma-${name} {\n  margin: ${val}${imp};\n}`);
    }

    return lines.join('\n');
}
