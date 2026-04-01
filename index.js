/**
 * PostCSS plugin: @guebbit/css-toolkit
 *
 * Processes custom function calls within CSS property values:
 *   color-opaque(bg, fg)
 *   color-tint(color, weight%)
 *   color-shade(color, weight%)
 *   color-shift(color, weight%)
 *   color-luminance(color)
 *   color-contrast(color [, dark [, light]])
 *   extract-colors(color [, mode [, classic]])
 *   create-collection(color)
 *
 * For mixin support use postcss-mixins together with src/mixins/index.js.
 */
import {
    parseColor,
    formatColor,
    colorOpaque,
    colorTint,
    colorShade,
    colorShift,
    colorLuminance,
    colorContrast,
    extractColors,
    createCollection
} from './src/functions/colors.js';
import { noNullVar, noTargetVar, mapDeepGet } from './src/functions/helpers.js';
import { stringSplit, stringEndsWith } from './src/functions/strings.js';

/**
 * Tokenise a function-call argument string, respecting nested parentheses.
 * e.g. "rgba(0,0,0,0.5), 25%" → ["rgba(0,0,0,0.5)", "25%"]
 */
function tokeniseArgs(str) {
    const args = [];
    let depth = 0;
    let current = '';

    for (const ch of str) {
        if (ch === '(') depth++;
        if (ch === ')') depth--;
        if (ch === ',' && depth === 0) {
            args.push(current.trim());
            current = '';
        } else {
            current += ch;
        }
    }
    if (current.trim()) args.push(current.trim());
    return args;
}

/**
 * Parse a weight argument: "25%" → 25, "0.25" → 25 (normalised to 0–100 scale).
 */
function parseWeight(str) {
    str = str.trim();
    if (str.endsWith('%')) return parseFloat(str);
    const n = parseFloat(str);
    return n <= 1 ? n * 100 : n;
}

/**
 * Replace all occurrences of a named CSS-toolkit function in a string.
 * Uses bracket counting to correctly handle nested parentheses like rgba(...).
 */
function replaceFunction(value, fnName, replacer) {
    const search = fnName + '(';
    let result = '';
    let i = 0;

    while (i < value.length) {
        const idx = value.indexOf(search, i);
        if (idx === -1) {
            result += value.slice(i);
            break;
        }

        result += value.slice(i, idx);

        // Find the matching closing paren using bracket counting
        let depth = 0;
        let j = idx + search.length - 1; // position of the opening '('
        while (j < value.length) {
            if (value[j] === '(') depth++;
            else if (value[j] === ')') {
                depth--;
                if (depth === 0) break;
            }
            j++;
        }

        const argsStr = value.slice(idx + search.length, j);
        const args = tokeniseArgs(argsStr);
        result += replacer(args);
        i = j + 1;
    }

    return result;
}

/**
 * Process all toolkit function calls in a CSS value string.
 */
function processValue(value) {
    let v = value;

    v = replaceFunction(v, 'color-opaque', ([bg, fg]) => {
        const result = colorOpaque(bg.trim(), fg.trim());
        return formatColor(result);
    });

    v = replaceFunction(v, 'color-tint', ([color, weightStr]) => {
        const result = colorTint(color.trim(), parseWeight(weightStr));
        return formatColor(result);
    });

    v = replaceFunction(v, 'color-shade', ([color, weightStr]) => {
        const result = colorShade(color.trim(), parseWeight(weightStr));
        return formatColor(result);
    });

    v = replaceFunction(v, 'color-shift', ([color, weightStr]) => {
        const w = parseWeight(weightStr);
        const result = colorShift(
            color.trim(),
            weightStr.trim().startsWith('-') ? -Math.abs(w) : w
        );
        return formatColor(result);
    });

    v = replaceFunction(v, 'color-luminance', ([color]) => {
        return String(colorLuminance(color.trim()));
    });

    v = replaceFunction(v, 'color-contrast', ([color, dark, light]) => {
        return colorContrast(
            color.trim(),
            dark ? dark.trim() : '#000',
            light ? light.trim() : '#fff'
        );
    });

    v = replaceFunction(v, 'extract-colors', ([color, modeStr, classicStr]) => {
        const mode = modeStr !== undefined ? parseInt(modeStr, 10) : 2;
        const classic = classicStr !== undefined && classicStr.trim() === 'true';
        return extractColors(color.trim(), mode, classic);
    });

    return v;
}

const pluginObject = {
    postcssPlugin: '@guebbit/css-toolkit',

    Declaration(decl) {
        if (
            decl.value.includes('color-opaque(') ||
            decl.value.includes('color-tint(') ||
            decl.value.includes('color-shade(') ||
            decl.value.includes('color-shift(') ||
            decl.value.includes('color-luminance(') ||
            decl.value.includes('color-contrast(') ||
            decl.value.includes('extract-colors(')
        ) {
            decl.value = processValue(decl.value);
        }
    }
};

// Wrap in a creator function so PostCSS can initialise it correctly
const plugin = () => pluginObject;
plugin.postcss = true;

export default plugin;
export { plugin };
