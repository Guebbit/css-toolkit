/**
 * Bootstrap / Material Design color palette
 * Replaces src/colors/_bootstrap.scss
 * https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss
 */
import { colorTint, colorShade } from '../functions/colors.js';

export const white = '#fff';
export const black = '#000';

export const gray100 = '#f8f9fa';
export const gray200 = '#e9ecef';
export const gray300 = '#dee2e6';
export const gray400 = '#ced4da';
export const gray500 = '#adb5bd';
export const gray600 = '#6c757d';
export const gray700 = '#495057';
export const gray800 = '#343a40';
export const gray900 = '#212529';

export const grays = {
    100: gray100,
    200: gray200,
    300: gray300,
    400: gray400,
    500: gray500,
    600: gray600,
    700: gray700,
    800: gray800,
    900: gray900
};

export const blue = '#0d6efd';
export const indigo = '#6610f2';
export const purple = '#6f42c1';
export const pink = '#d63384';
export const red = '#dc3545';
export const orange = '#fd7e14';
export const yellow = '#ffc107';
export const green = '#198754';
export const teal = '#20c997';
export const cyan = '#0dcaf0';

export const colors = {
    blue,
    indigo,
    purple,
    pink,
    red,
    orange,
    yellow,
    green,
    teal,
    cyan,
    black,
    white,
    gray: gray600,
    'gray-dark': gray800
};

// Blue shades
export const blue100 = colorTint(blue, 80);
export const blue200 = colorTint(blue, 60);
export const blue300 = colorTint(blue, 40);
export const blue400 = colorTint(blue, 20);
export const blue500 = blue;
export const blue600 = colorShade(blue, 20);
export const blue700 = colorShade(blue, 40);
export const blue800 = colorShade(blue, 60);
export const blue900 = colorShade(blue, 80);

// Indigo shades
export const indigo100 = colorTint(indigo, 80);
export const indigo200 = colorTint(indigo, 60);
export const indigo300 = colorTint(indigo, 40);
export const indigo400 = colorTint(indigo, 20);
export const indigo500 = indigo;
export const indigo600 = colorShade(indigo, 20);
export const indigo700 = colorShade(indigo, 40);
export const indigo800 = colorShade(indigo, 60);
export const indigo900 = colorShade(indigo, 80);

// Purple shades
export const purple100 = colorTint(purple, 80);
export const purple200 = colorTint(purple, 60);
export const purple300 = colorTint(purple, 40);
export const purple400 = colorTint(purple, 20);
export const purple500 = purple;
export const purple600 = colorShade(purple, 20);
export const purple700 = colorShade(purple, 40);
export const purple800 = colorShade(purple, 60);
export const purple900 = colorShade(purple, 80);

// Pink shades
export const pink100 = colorTint(pink, 80);
export const pink200 = colorTint(pink, 60);
export const pink300 = colorTint(pink, 40);
export const pink400 = colorTint(pink, 20);
export const pink500 = pink;
export const pink600 = colorShade(pink, 20);
export const pink700 = colorShade(pink, 40);
export const pink800 = colorShade(pink, 60);
export const pink900 = colorShade(pink, 80);

// Red shades
export const red100 = colorTint(red, 80);
export const red200 = colorTint(red, 60);
export const red300 = colorTint(red, 40);
export const red400 = colorTint(red, 20);
export const red500 = red;
export const red600 = colorShade(red, 20);
export const red700 = colorShade(red, 40);
export const red800 = colorShade(red, 60);
export const red900 = colorShade(red, 80);

// Orange shades
export const orange100 = colorTint(orange, 80);
export const orange200 = colorTint(orange, 60);
export const orange300 = colorTint(orange, 40);
export const orange400 = colorTint(orange, 20);
export const orange500 = orange;
export const orange600 = colorShade(orange, 20);
export const orange700 = colorShade(orange, 40);
export const orange800 = colorShade(orange, 60);
export const orange900 = colorShade(orange, 80);

// Yellow shades
export const yellow100 = colorTint(yellow, 80);
export const yellow200 = colorTint(yellow, 60);
export const yellow300 = colorTint(yellow, 40);
export const yellow400 = colorTint(yellow, 20);
export const yellow500 = yellow;
export const yellow600 = colorShade(yellow, 20);
export const yellow700 = colorShade(yellow, 40);
export const yellow800 = colorShade(yellow, 60);
export const yellow900 = colorShade(yellow, 80);

// Green shades
export const green100 = colorTint(green, 80);
export const green200 = colorTint(green, 60);
export const green300 = colorTint(green, 40);
export const green400 = colorTint(green, 20);
export const green500 = green;
export const green600 = colorShade(green, 20);
export const green700 = colorShade(green, 40);
export const green800 = colorShade(green, 60);
export const green900 = colorShade(green, 80);

// Teal shades
export const teal100 = colorTint(teal, 80);
export const teal200 = colorTint(teal, 60);
export const teal300 = colorTint(teal, 40);
export const teal400 = colorTint(teal, 20);
export const teal500 = teal;
export const teal600 = colorShade(teal, 20);
export const teal700 = colorShade(teal, 40);
export const teal800 = colorShade(teal, 60);
export const teal900 = colorShade(teal, 80);

// Cyan shades
export const cyan100 = colorTint(cyan, 80);
export const cyan200 = colorTint(cyan, 60);
export const cyan300 = colorTint(cyan, 40);
export const cyan400 = colorTint(cyan, 20);
export const cyan500 = cyan;
export const cyan600 = colorShade(cyan, 20);
export const cyan700 = colorShade(cyan, 40);
export const cyan800 = colorShade(cyan, 60);
export const cyan900 = colorShade(cyan, 80);
