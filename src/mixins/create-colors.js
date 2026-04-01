/**
 * Generate color utility classes for a given color collection.
 * Replaces SCSS mixin create-colors from src/mixins/_create-colors.scss
 *
 * @param {Object} colorList   - { branchName: { colorName: colorValue } }
 * @param {boolean} vars       - If true, use CSS var references instead of raw values
 * @param {string} prefix      - Class prefix
 * @param {string} prefixV     - CSS variable prefix (when vars=true)
 * @param {string[]} featureList - Whitelist of features: text, background, border, pseudo, hover
 * @returns {string} CSS string
 */
import { formatColor, parseColor } from '../functions/colors.js';

function resolveColor(colorValue) {
    if (typeof colorValue === 'string') return colorValue;
    return formatColor(colorValue);
}

export function createColors(
    colorList = {},
    vars = false,
    prefix = '',
    prefixV = '',
    featureList = []
) {
    const all = featureList.length < 1;
    const has = (f) => all || featureList.includes(f);
    const lines = [];

    for (const [branchName, branch] of Object.entries(colorList)) {
        const isGradient = branchName === 'gradient';

        for (const [colorName, colorValue] of Object.entries(branch)) {
            const cls = `${prefix}${branchName}-${colorName}`;
            const varRef = (name) => `var(--${prefixV}${name})`;

            // Text
            if (!isGradient && has('text')) {
                const val = vars
                    ? `${varRef(`${branchName}-${colorName}`)}`
                    : resolveColor(colorValue);
                lines.push(`.${cls}-text {\n  color: ${val} !important;\n}`);
            }

            // Border
            if (!isGradient && has('border')) {
                const val = vars
                    ? `${varRef(`${branchName}-${colorName}`)}`
                    : resolveColor(colorValue);
                lines.push(`.${cls}-border {\n  border-color: ${val} !important;\n}`);
            }

            // Background
            if (has('background')) {
                if (vars) {
                    lines.push(
                        `.${cls}-bg {\n  background-color: ${varRef(`${branchName}-${colorName}`)} !important;\n  color: ${varRef(`on-${branchName}-${colorName}`)} !important;\n}`
                    );
                } else {
                    lines.push(
                        `.${cls}-bg {\n  background-color: ${resolveColor(colorValue)} !important;\n}`
                    );
                }
            }

            // Pseudo background
            if (has('pseudo')) {
                const val = vars
                    ? `${varRef(`${branchName}-${colorName}`)}`
                    : resolveColor(colorValue);
                lines.push(
                    `.${cls}-pseudo-bg::after,\n.${cls}-pseudo-bg::before {\n  background-color: ${val} !important;\n}`
                );
            }

            // Hover variants
            if (has('hover')) {
                // Hover text
                if (!isGradient && has('text')) {
                    const val = vars
                        ? `${varRef(`${branchName}-${colorName}`)}`
                        : resolveColor(colorValue);
                    lines.push(`.${cls}-hover-text:hover {\n  color: ${val} !important;\n}`);
                }

                // Hover border
                if (!isGradient && has('border')) {
                    const val = vars
                        ? `${varRef(`${branchName}-${colorName}`)}`
                        : resolveColor(colorValue);
                    lines.push(
                        `.${cls}-hover-border:hover {\n  border-color: ${val} !important;\n}`
                    );
                }

                // Hover background
                if (has('background')) {
                    if (vars) {
                        lines.push(
                            `.${cls}-hover-bg:hover {\n  background-color: ${varRef(`${branchName}-${colorName}`)} !important;\n  color: ${varRef(`on-${branchName}-${colorName}`)} !important;\n}`
                        );
                    } else {
                        lines.push(
                            `.${cls}-hover-bg:hover {\n  background-color: ${resolveColor(colorValue)} !important;\n}`
                        );
                    }
                }

                // Hover pseudo background
                if (has('pseudo')) {
                    const val = vars
                        ? `${varRef(`${branchName}-${colorName}`)}`
                        : resolveColor(colorValue);
                    lines.push(
                        `.${cls}-hover-pseudo-bg:hover::after,\n.${cls}-hover-pseudo-bg:hover::before {\n  background-color: ${val} !important;\n}`
                    );
                }
            }
        }
    }

    return lines.join('\n');
}
