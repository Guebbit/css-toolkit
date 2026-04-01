/**
 * Custom color palettes
 * Replaces src/colors/_customs.scss
 */
import { colorTint, colorShade } from '../functions/colors.js';

export const flatricaGreen = '#06a763';
export const mangaRed      = '#d41816';

// Flatrica-green shades
export const flatricaGreen100 = colorTint(flatricaGreen, 80);
export const flatricaGreen200 = colorTint(flatricaGreen, 60);
export const flatricaGreen300 = colorTint(flatricaGreen, 40);
export const flatricaGreen400 = colorTint(flatricaGreen, 20);
export const flatricaGreen500 = flatricaGreen;
export const flatricaGreen600 = colorShade(flatricaGreen, 20);
export const flatricaGreen700 = colorShade(flatricaGreen, 40);
export const flatricaGreen800 = colorShade(flatricaGreen, 60);
export const flatricaGreen900 = colorShade(flatricaGreen, 80);

// Manga-red shades
export const mangaRed100 = colorTint(mangaRed, 80);
export const mangaRed200 = colorTint(mangaRed, 60);
export const mangaRed300 = colorTint(mangaRed, 40);
export const mangaRed400 = colorTint(mangaRed, 20);
export const mangaRed500 = mangaRed;
export const mangaRed600 = colorShade(mangaRed, 20);
export const mangaRed700 = colorShade(mangaRed, 40);
export const mangaRed800 = colorShade(mangaRed, 60);
export const mangaRed900 = colorShade(mangaRed, 80);
