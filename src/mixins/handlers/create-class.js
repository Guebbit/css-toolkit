import postcss from 'postcss';
import { createClass } from '../create-class.js';

export function createClassMixin(mixin, instruction, ...args) {
    let important = false;
    let prefix = '';
    const measures = [];

    for (const arg of args) {
        const trimmed = arg.trim();
        if (trimmed === 'important' || trimmed === 'true') {
            important = true;
        } else if (trimmed.startsWith('prefix:')) {
            prefix = trimmed.slice(7);
        } else if (trimmed.includes(':')) {
            const colonIdx = trimmed.indexOf(':');
            const name = trimmed.slice(0, colonIdx);
            const val = trimmed.slice(colonIdx + 1);
            measures.push([name, val]);
        } else if (trimmed) {
            measures.push(trimmed);
        }
    }

    const css = createClass(instruction.trim(), measures, important, prefix);
    mixin.replaceWith(postcss.parse(css));
}
