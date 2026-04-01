/**
 * JavaScript helper utility functions
 * Replaces SCSS functions from src/functions/_helpers.scss
 */

/**
 * Return the first non-null, non-undefined value from a list.
 * Equivalent to SCSS no-null-var()
 */
export function noNullVar(list = []) {
    for (const value of list) {
        if (value !== null && value !== undefined && value !== 'undefined' && value !== 'null') {
            return value;
        }
    }
    return null;
}

/**
 * If the color matches the check value, return 'inherit'.
 * Equivalent to SCSS no-target-var()
 */
export function noTargetVar(check = 'transparent', color = 'transparent') {
    if (color === check) {
        return 'inherit';
    }
    return color;
}

/**
 * Get a deeply nested value from a map using dot/key path.
 * Equivalent to SCSS map-deep-get()
 */
export function mapDeepGet(map, ...keys) {
    let current = map;
    for (const key of keys) {
        if (current === null || current === undefined) return undefined;
        current = current[key];
    }
    return current;
}
