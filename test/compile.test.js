import { describe, it } from 'mocha';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssNesting from 'postcss-nesting';
import postcssMixins from 'postcss-mixins';
import cssnano from 'cssnano';
import { mixins } from '../src/mixins/index.js';
import toolkitPlugin from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let cssCompiled;

function assertContains(expected) {
    const compact = (value) => value.replace(/\s+/g, '').replace(/;/g, '').replace(/::/g, ':');
    expect(compact(cssCompiled)).to.contain(compact(expected));
}

function roundCssNumbers(css, decimals = 5) {
    return css.replace(/-?\d+\.\d{6,}/g, (raw) => {
        const rounded = Number.parseFloat(raw).toFixed(decimals);
        return rounded.replace(/\.?0+$/, '');
    });
}

async function postcssCompiler() {
    const inputPath = path.join(__dirname, './compiled.css');
    const source = fs.readFileSync(inputPath, 'utf8');

    const result = await postcss([
        postcssImport(),
        postcssMixins({ mixins }),
        toolkitPlugin(),
        postcssNesting(),
        cssnano()
    ]).process(source, { from: inputPath });

    return roundCssNumbers(result.css);
}

describe('COMPILE', function () {
    this.timeout(10000);

    it('Should compile', async function () {
        cssCompiled = await postcssCompiler();
        fs.writeFileSync(path.join(__dirname, 'compiled.css'), cssCompiled);
    });

    it('Check some rules', function () {
        assertContains('.blue-400-text {');
        assertContains('color:#3d8bfd!important;');
        assertContains('.blue-400-bg,.blue-400-pseudo-bg:after,.blue-400-pseudo-bg:before{');
        assertContains('background-color:#3d8bfd!important;');
        assertContains('.blue-400-border {');
        assertContains('border-color:#3d8bfd!important;');
        assertContains('.blue-400-pseudo-bg:after');
        assertContains('.blue-400-pseudo-bg:before');
        assertContains('.blue-400-hover-text:hover {');
        assertContains(
            '.blue-400-hover-bg:hover,.blue-400-hover-pseudo-bg:hover:after,.blue-400-hover-pseudo-bg:hover:before{'
        );
        assertContains('.blue-400-hover-border:hover {');
        assertContains('.blue-400-hover-pseudo-bg:hover::after,');
        assertContains('.blue-400-hover-pseudo-bg:hover::before {');

        assertContains('.primary-500-text {');
        assertContains('color: var(--g-theme-primary-500) !important;');
        assertContains(
            '.primary-500-bg,.primary-500-pseudo-bg:after,.primary-500-pseudo-bg:before{'
        );
        assertContains('background-color: var(--g-theme-primary-500) !important;');
        assertContains('.primary-500-border {');
        assertContains('border-color: var(--g-theme-primary-500) !important;');
        assertContains('.primary-500-pseudo-bg:after');
        assertContains('.primary-500-pseudo-bg:before');
        assertContains('.primary-500-hover-text:hover {');
        assertContains(
            '.primary-500-hover-bg:hover,.primary-500-hover-pseudo-bg:hover:after,.primary-500-hover-pseudo-bg:hover:before{'
        );
        assertContains('.primary-500-hover-border:hover {');
        assertContains('.primary-500-hover-pseudo-bg:hover::after,');
        assertContains('.primary-500-hover-pseudo-bg:hover::before {');

        assertContains('--g-theme-primary-500: 255 0 255;');
        assertContains('--g-theme-on-primary-500: 255 255 255;');
        assertContains('--blue-400: 61.4 139 253.4;');
        assertContains('--on-blue-400: 0 0 0;');
        assertContains('--manga-red-500: 212 24 22;');
        assertContains(
            '--gradient-brand-instagram:linear-gradient(45deg,#f09433,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888);'
        );
        assertContains('.text-align-right {');
        assertContains('text-align: right !important;');

        assertContains('.mt-auto {');
        assertContains('margin-top: auto;');
        assertContains('.my-48 {');
        assertContains('margin-top: 48px;');
        assertContains('margin-bottom: 48px;');
        assertContains('.width-100 {');
        assertContains('width: 100% !important;');
        assertContains('.flex-gap-24 {');
        assertContains('gap: 24px !important;');

        assertContains('.aspect-ratio-1-1::before {');
        assertContains('padding-top: 100%;');
        assertContains('.aspect-ratio-16-9::before {');
        assertContains('padding-top: 56%;');

        assertContains(
            '@media(-ms-high-contrast:active),(-ms-high-contrast:none){'
        );
        assertContains('@supports (-ms-ime-align: auto) {');
        assertContains('@supports (-moz-appearance: none) {');

        assertContains('--color-opaque-1:rgba(33,33,33,.84);');
        assertContains('--color-opaque-2:#6f6f6f;');
        assertContains('--color-opaque-3: #ddd;');
        assertContains('--color-tint-1:#595959;');
        assertContains('--color-tint-2:#e6e6e6;');
        assertContains('--color-shade-1:#1a1a1a;');
        assertContains('--color-shade-2:#a6a6a6;');
        assertContains('--color-shift-1:#1a1a1a;');
        assertContains('--color-shift-2:#a6a6a6;');
        assertContains('--color-shift-3:#595959;');
        assertContains('--color-shift-4:#e6e6e6;');
        assertContains('--color-contrast-1: #fff;');
        assertContains('--color-contrast-2: #000;');
    });
});
