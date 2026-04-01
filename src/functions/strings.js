/**
 * JavaScript string utility functions
 * Replaces SCSS functions from src/functions/_strings.scss
 */

/**
 * Split a string into an array by the given separator.
 * Equivalent to SCSS string-split()
 */
export function stringSplit(str, separator = '-') {
    return str.split(separator);
}

/**
 * Check if a string ends with the given substring.
 * Equivalent to SCSS string-ends-with()
 */
export function stringEndsWith(str, find) {
    return str.length >= find.length && str.slice(str.length - find.length) === find;
}
