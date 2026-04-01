/**
 * Generic single-property CSS class generator.
 * Replaces SCSS mixin create-class from src/mixins/_create-class.scss
 *
 * @param {string} instruction  - CSS property (e.g. 'text-align')
 * @param {Array}  measureList  - Array of values or [name, value] pairs
 * @param {boolean} important   - Append !important
 * @param {string} prefix       - Class prefix
 * @param {string} delimiter    - Separator between instruction and name (default '-')
 * @returns {string} CSS string
 */
export function createClass(instruction, measureList = [], important = false, prefix = '', delimiter = '-') {
    const imp = important ? ' !important' : '';
    const lines = [];

    for (const entry of measureList) {
        let name, val;
        if (Array.isArray(entry) && entry.length > 1) {
            [name, val] = entry;
        } else {
            name = val = Array.isArray(entry) ? entry[0] : entry;
        }
        lines.push(`.${prefix}${instruction}${delimiter}${name} {\n  ${instruction}: ${val}${imp};\n}`);
    }

    return lines.join('\n');
}
