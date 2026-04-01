/**
 * Generate CSS custom property declarations for a color collection.
 * Replaces SCSS mixin create-colors-vars from src/mixins/_create-colors-vars.scss
 *
 * @param {Object} colorList - { branchName: { colorName: colorValue } }
 * @param {string} prefix    - CSS variable prefix
 * @returns {string} CSS declarations (without selector, to be placed inside :root {})
 */
import { extractColors, colorContrast, parseColor, formatColor } from '../functions/colors.js';

function resolveColor(colorValue) {
    if (typeof colorValue === 'string') return colorValue;
    return formatColor(colorValue);
}

export function createColorsVars(colorList = {}, prefix = '') {
    const lines = [];

    for (const [branchName, branch] of Object.entries(colorList)) {
        // Colour channel variables (e.g. --blue-400: 61.4 139 253.4)
        for (const [colorName, colorValue] of Object.entries(branch)) {
            const raw = resolveColor(colorValue);
            const extracted = extractColors(raw);
            lines.push(`  --${prefix}${branchName}-${colorName}: ${extracted};`);
        }

        // Contrast (on-*) variables (e.g. --on-blue-400: 0 0 0)
        for (const [colorName, colorValue] of Object.entries(branch)) {
            const raw = resolveColor(colorValue);
            const contrast = colorContrast(raw);
            const extracted = extractColors(contrast);
            lines.push(`  --${prefix}on-${branchName}-${colorName}: ${extracted};`);
        }
    }

    return lines.join('\n');
}
