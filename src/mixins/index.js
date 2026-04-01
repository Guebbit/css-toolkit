/**
 * Aggregated mixin exports for use with postcss-mixins.
 * Each entry is a function (mixin, ...args) compatible with the postcss-mixins API.
 */
import postcss from 'postcss';
import { colorsCollection } from '../colors/index.js';
import { createCollection, parseColor } from '../functions/colors.js';
import { createColors } from './create-colors.js';
import { createColorsVars } from './create-colors-vars.js';
import { createClass } from './create-class.js';
import { createHelperMargin } from './create-helper-margin.js';
import { createHelperPadding } from './create-helper-padding.js';
import { buildAspectRatio, buildAspectRatioContainer, buildAspectRatioAnchor } from './build-aspect-ratio.js';
import { buildCompatibility } from './build-compatibility.js';
import { buildScrollbar } from './build-scrollbar.js';

/**
 * Helper: parse mixin content children into a CSS string.
 */
function mixinContentToString(mixin) {
    return mixin.nodes ? mixin.nodes.map((n) => n.toString()).join('\n') : '';
}

export const mixins = {
    /**
     * @mixin create-colors
     * Generates color utility classes for the default color collection.
     * Optional args: vars(true|false) prefix prefixV feature1 feature2 ...
     */
    'create-colors': function (mixin, ...args) {
        const css = createColors(colorsCollection);
        mixin.replaceWith(postcss.parse(css));
    },

    /**
     * @mixin create-colors-vars
     * Generates CSS variable declarations for the default color collection.
     * To be placed inside a :root {} rule.
     */
    'create-colors-vars': function (mixin, prefix) {
        const p = prefix || '';
        const css = createColorsVars(colorsCollection, p);
        mixin.replaceWith(postcss.parse(css));
    },

    /**
     * @mixin create-colors-custom colorName, hexColor, vars, prefix, prefixV
     * Generates color utility classes for a custom single-color collection.
     * hexColor should NOT include the '#' sign to keep it a single mixin token.
     */
    'create-colors-custom': function (mixin, colorName, hexColor, varsStr, prefix, prefixV) {
        const colorHex = (hexColor || '').trim();
        const colorFull = colorHex.startsWith('#') ? colorHex : `#${colorHex}`;
        const collection = createCollection(parseColor(colorFull));
        const colorList = { [(colorName || '').trim()]: collection };
        const vars = (varsStr || '').trim() === 'true';
        const css = createColors(colorList, vars, (prefix || '').trim(), (prefixV || '').trim());
        mixin.replaceWith(postcss.parse(css));
    },

    /**
     * @mixin create-colors-vars-custom colorName, hexColor, prefix
     * Generates CSS variable declarations for a custom color collection.
     */
    'create-colors-vars-custom': function (mixin, colorName, hexColor, prefix) {
        const colorHex = (hexColor || '').trim();
        const colorFull = colorHex.startsWith('#') ? colorHex : `#${colorHex}`;
        const collection = createCollection(parseColor(colorFull));
        const colorList = { [(colorName || '').trim()]: collection };
        const css = createColorsVars(colorList, (prefix || '').trim());
        mixin.replaceWith(postcss.parse(css));
    },

    /**
     * @mixin create-class instruction, name1:value1, name2:value2, ..., [important], [prefix:myPrefix]
     * Simple single-property class generator.
     * Pass value pairs as "name:value". Use "important" keyword for !important.
     * Use "prefix:myprefix" to add a class prefix.
     */
    'create-class': function (mixin, instruction, ...args) {
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
    },

    /**
     * @mixin create-helper-margin name1:value1, name2:value2, ...
     */
    'create-helper-margin': function (mixin, ...args) {
        const measures = args.map((a) => {
            const trimmed = a.trim();
            const colonIdx = trimmed.indexOf(':');
            if (colonIdx > -1) {
                return [trimmed.slice(0, colonIdx), trimmed.slice(colonIdx + 1)];
            }
            return [trimmed, trimmed];
        });
        const css = createHelperMargin(measures);
        mixin.replaceWith(postcss.parse(css));
    },

    /**
     * @mixin create-helper-padding name1:value1, name2:value2, ...
     */
    'create-helper-padding': function (mixin, ...args) {
        const measures = args.map((a) => {
            const trimmed = a.trim();
            const colonIdx = trimmed.indexOf(':');
            if (colonIdx > -1) {
                return [trimmed.slice(0, colonIdx), trimmed.slice(colonIdx + 1)];
            }
            return [trimmed, trimmed];
        });
        const css = createHelperPadding(measures);
        mixin.replaceWith(postcss.parse(css));
    },

    /**
     * @mixin build-aspect-ratio ratio
     * Use inside a selector. Generates ::before padding-top and child anchor.
     */
    'build-aspect-ratio': function (mixin, ratio) {
        const css = buildAspectRatio(ratio || '100%');
        mixin.replaceWith(postcss.parse(css));
    },

    /**
     * @mixin build-aspect-ratio-container ratio
     */
    'build-aspect-ratio-container': function (mixin, ratio) {
        const css = buildAspectRatioContainer(ratio || '100%');
        mixin.replaceWith(postcss.parse(css));
    },

    /**
     * @mixin build-aspect-ratio-anchor
     */
    'build-aspect-ratio-anchor': function (mixin) {
        const css = buildAspectRatioAnchor();
        mixin.replaceWith(postcss.parse(css));
    },

    /**
     * @mixin build-compatibility browser
     * Wraps content in a browser-specific @supports / @media query.
     * The mixin must have child nodes (nested CSS).
     */
    'build-compatibility': function (mixin, browser) {
        const content = mixinContentToString(mixin);
        const css = buildCompatibility(browser, content);
        mixin.replaceWith(postcss.parse(css));
    },

    /**
     * @mixin build-scrollbar size color bg radius
     * Use inside a selector.
     */
    'build-scrollbar': function (mixin, size, color, bg, radius) {
        const css = buildScrollbar(size, color, bg, radius);
        mixin.replaceWith(postcss.parse(css));
    },
};

export default mixins;
