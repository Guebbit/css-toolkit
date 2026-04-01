/**
 * JavaScript color utility functions
 * Replaces SCSS functions from src/functions/_colors.scss
 */

const COLOR_DECIMALS = 5;

function roundColorNumber(value, decimals = COLOR_DECIMALS) {
    if (!Number.isFinite(value)) return value;
    const rounded = Number(value.toFixed(decimals));
    return Object.is(rounded, -0) ? 0 : rounded;
}

function normalizeColorChannels(color) {
    if (!color || color.transparent || color.unparseable) return color;
    return {
        ...color,
        r: roundColorNumber(color.r),
        g: roundColorNumber(color.g),
        b: roundColorNumber(color.b),
        a: color.a === undefined ? color.a : roundColorNumber(color.a)
    };
}

/**
 * Parse a CSS color string to { r, g, b, a } object
 * Supports: #hex, #hexa, rgb(), rgba()
 */
export function parseColor(colorStr) {
    if (!colorStr || colorStr === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, transparent: true };
    }
    if (typeof colorStr === 'object' && 'r' in colorStr) {
        return colorStr;
    }
    colorStr = String(colorStr).trim();

    // Handle 3-digit hex
    const shortHex = colorStr.match(/^#([a-f\d])([a-f\d])([a-f\d])$/i);
    if (shortHex) {
        return {
            r: parseInt(shortHex[1] + shortHex[1], 16),
            g: parseInt(shortHex[2] + shortHex[2], 16),
            b: parseInt(shortHex[3] + shortHex[3], 16),
            a: 1
        };
    }

    // Handle 6-digit hex (and optional 8-digit with alpha)
    const hexMatch = colorStr.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i);
    if (hexMatch) {
        return {
            r: parseInt(hexMatch[1], 16),
            g: parseInt(hexMatch[2], 16),
            b: parseInt(hexMatch[3], 16),
            a: hexMatch[4] ? parseInt(hexMatch[4], 16) / 255 : 1
        };
    }

    // Handle rgb() / rgba() with comma or space syntax
    const rgbMatch = colorStr.match(
        /rgba?\(\s*(\d+(?:\.\d+)?)\s*[,\s]\s*(\d+(?:\.\d+)?)\s*[,\s]\s*(\d+(?:\.\d+)?)(?:\s*[,/]\s*(\d+(?:\.\d+)?))?\s*\)/
    );
    if (rgbMatch) {
        return {
            r: parseFloat(rgbMatch[1]),
            g: parseFloat(rgbMatch[2]),
            b: parseFloat(rgbMatch[3]),
            a: rgbMatch[4] !== undefined ? parseFloat(rgbMatch[4]) : 1
        };
    }

    // Not a parseable color (e.g. gradient, named color keyword, 'inherit') — return as-is marker
    return { unparseable: true, raw: colorStr };
}

/**
 * Format a color object to a CSS string (matching SCSS output behaviour)
 */
export function formatColor(color) {
    if (!color || color.transparent) return 'transparent';
    if (color.unparseable) return color.raw;
    const normalized = normalizeColorChannels(color);
    const { r, g, b, a } = normalized;

    if (a === 1) {
        // Use hex notation when all channels are exact integers
        if (Number.isInteger(r) && Number.isInteger(g) && Number.isInteger(b)) {
            const rh = r.toString(16).padStart(2, '0');
            const gh = g.toString(16).padStart(2, '0');
            const bh = b.toString(16).padStart(2, '0');
            // Shorthand where possible (#fff, #000)
            if (rh[0] === rh[1] && gh[0] === gh[1] && bh[0] === bh[1]) {
                return `#${rh[0]}${gh[0]}${bh[0]}`;
            }
            return `#${rh}${gh}${bh}`;
        }
        return `rgb(${r}, ${g}, ${b})`;
    }
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * Mix two colors using Sass-compatible weighted formula.
 * weight = percentage of color1 (0–100)
 */
export function colorMix(color1, color2, weight) {
    const c1 = typeof color1 === 'string' ? parseColor(color1) : color1;
    const c2 = typeof color2 === 'string' ? parseColor(color2) : color2;
    const p = weight / 100;
    const a1 = c1.a !== undefined ? c1.a : 1;
    const a2 = c2.a !== undefined ? c2.a : 1;

    const w = p * 2 - 1;
    const alphaDiff = a1 - a2;

    let w1;
    if (Math.abs(w * alphaDiff + 1) < 1e-10) {
        w1 = (w + 1) / 2;
    } else {
        w1 = ((w + alphaDiff) / (1 + w * alphaDiff) + 1) / 2;
    }
    const w2 = 1 - w1;

    return {
        r: c1.r * w1 + c2.r * w2,
        g: c1.g * w1 + c2.g * w2,
        b: c1.b * w1 + c2.b * w2,
        a: a1 * p + a2 * (1 - p)
    };
}

/**
 * Return opaque color
 * color-opaque(#fff, rgba(0, 0, 0, .5)) => #808080
 * Equivalent to SCSS color-opaque()
 */
export function colorOpaque(background, foreground) {
    const bg = typeof background === 'string' ? parseColor(background) : background;
    const fg = typeof foreground === 'string' ? parseColor(foreground) : foreground;
    const fgOpaque = { ...fg, a: 1 };
    return colorMix(fgOpaque, bg, (fg.a !== undefined ? fg.a : 1) * 100);
}

/**
 * Tint a color (mix with white)
 * Equivalent to SCSS color-tint()
 */
export function colorTint(color, weight) {
    const c = typeof color === 'string' ? parseColor(color) : color;
    return colorMix({ r: 255, g: 255, b: 255, a: 1 }, c, weight);
}

/**
 * Shade a color (mix with black)
 * Equivalent to SCSS color-shade()
 */
export function colorShade(color, weight) {
    const c = typeof color === 'string' ? parseColor(color) : color;
    return colorMix({ r: 0, g: 0, b: 0, a: 1 }, c, weight);
}

/**
 * Shade the color if the weight is positive, else tint it
 * Equivalent to SCSS color-shift()
 */
export function colorShift(color, weight) {
    if (weight > 0) {
        return colorShade(color, weight);
    }
    return colorTint(color, -weight);
}

/**
 * Return WCAG2.1 relative luminance (%)
 * Equivalent to SCSS color-luminance()
 */
export function colorLuminance(color) {
    if (!color || color === 'transparent') return 100;
    const c = typeof color === 'string' ? parseColor(color) : color;
    if (c.transparent || c.unparseable) return 100;
    return ((c.r * 0.299 + c.g * 0.587 + c.b * 0.114) / 255) * 100;
}

/**
 * Return the dark or light color with the best contrast against the given color.
 * Equivalent to SCSS color-contrast()
 */
export function colorContrast(color, dark = '#000', light = '#fff') {
    if (!color || color === 'transparent') return 'inherit';
    const c = typeof color === 'string' ? parseColor(color) : color;
    if (c.transparent || c.unparseable) return 'inherit';

    const colorBrightness = colorLuminance(c);
    const lightBrightness = colorLuminance(typeof light === 'string' ? parseColor(light) : light);
    const darkBrightness = colorLuminance(typeof dark === 'string' ? parseColor(dark) : dark);

    return Math.abs(colorBrightness - lightBrightness) > Math.abs(colorBrightness - darkBrightness)
        ? light
        : dark;
}

/**
 * Extract RGB/RGBA values as a space- or comma-separated string.
 * mode 1 = always without alpha, mode 2 = without alpha when alpha==1
 * Equivalent to SCSS extract-colors()
 */
export function extractColors(color = '#fff', mode = 2, classic = false) {
    if (!color || color === 'transparent') return color;
    const c = typeof color === 'string' ? parseColor(color) : color;
    if (c.transparent) return 'transparent';
    // Non-parseable (gradient, keyword, etc.) — return raw value
    if (c.unparseable) return c.raw;

    const delimiter = classic ? ', ' : ' ';
    const delimiterAlpha = classic ? ', ' : ' / ';

    const { r, g, b, a } = normalizeColorChannels(c);

    if (mode === 1 || (mode === 2 && a === 1)) {
        return `${r}${delimiter}${g}${delimiter}${b}`;
    }
    return `${r}${delimiter}${g}${delimiter}${b}${delimiterAlpha}${a}`;
}

/**
 * Create a default shade collection (100–900) from a base color.
 * Equivalent to SCSS create-collection()
 */
export function createCollection(color = '#fff') {
    const c = typeof color === 'string' ? parseColor(color) : color;
    return {
        100: colorTint(c, 80),
        200: colorTint(c, 60),
        300: colorTint(c, 40),
        400: colorTint(c, 20),
        500: { ...c },
        600: colorShade(c, 20),
        700: colorShade(c, 40),
        800: colorShade(c, 60),
        900: colorShade(c, 80)
    };
}
