import { describe, it } from "mocha";
import { expect } from "chai";
import fs from "fs";
import util from "util";
import * as sass from "sass";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let cssCompiled;

function sassCompiler(){
    return util.promisify(sass.render)({
            includePaths: ['./scss'],
            file: path.join(__dirname, './test.scss'),
            // outputStyle: 'compressed'
        })
        .then(result => result?.css?.toString());
}

describe("COMPILE", function() {
    // to remove timeout error
    this.timeout(10000);

    it('Should compile', async function() {
        cssCompiled = await sassCompiler();
        // Not necessary, but let's compile the file
        fs.writeFile(path.join(__dirname, 'test.css'), cssCompiled, () => {});
    });

    it('Check some rules', function() {
        // --
        expect(cssCompiled).to.contain('.blue-400-text {');
        expect(cssCompiled).to.contain('color: #3d8bfd !important;');
        expect(cssCompiled).to.contain('.blue-400-bg {');
        expect(cssCompiled).to.contain('background: #3d8bfd !important;');
        // --
        expect(cssCompiled).to.contain('--blue-400: 61 139 253;');
        expect(cssCompiled).to.contain('--manga-red-500: 212 24 22;');
        expect(cssCompiled).to.contain('--advanced-brand-instagram: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);');
        expect(cssCompiled).to.contain('.mt-auto {');
        expect(cssCompiled).to.contain('margin-top: auto;');
        expect(cssCompiled).to.contain('.my-48 {');
        expect(cssCompiled).to.contain('margin-top: 48px;');
        expect(cssCompiled).to.contain('margin-bottom: 48px;');
        expect(cssCompiled).to.contain('.width-100 {');
        expect(cssCompiled).to.contain('width: 100% !important;');
        expect(cssCompiled).to.contain('.flex-gap-24 {');
        expect(cssCompiled).to.contain('gap: 24px !important;');
        // -
        expect(cssCompiled).to.contain('.aspect-ratio-1-1::before {');
        expect(cssCompiled).to.contain('padding-top: 100%;');
        expect(cssCompiled).to.contain('.aspect-ratio-16-9::before {');
        expect(cssCompiled).to.contain('padding-top: 56%;');
        // -
        expect(cssCompiled).to.contain('@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {');
        expect(cssCompiled).to.contain('@supports (-ms-ime-align: auto) {');
        expect(cssCompiled).to.contain('@supports (-moz-appearance: none) {');
        // --
        expect(cssCompiled).to.contain('--color-opaque-1: #111111;');
        expect(cssCompiled).to.contain('--color-opaque-2: #6f6f6f;');
        // --
        expect(cssCompiled).to.contain('--color-tint-1: #595959;');
        expect(cssCompiled).to.contain('--color-tint-2: #e6e6e6;');
        // --
        expect(cssCompiled).to.contain('--color-shade-1: #1a1a1a;');
        expect(cssCompiled).to.contain('--color-shade-2: #a6a6a6;');
        // --
        expect(cssCompiled).to.contain('--color-shift-1: #1a1a1a;');
        expect(cssCompiled).to.contain('--color-shift-2: #a6a6a6;');
        // --
        expect(cssCompiled).to.contain('--color-contrast-1: #fff;');
        expect(cssCompiled).to.contain('--color-contrast-2: #000;');
        // --
        expect(cssCompiled).to.contain('--color-brightness-1: #fff;');
        expect(cssCompiled).to.contain('--color-brightness-2: #000;');
        // --
        expect(cssCompiled).to.contain('--extract-colors-1: 34 34 34;');
        expect(cssCompiled).to.contain('--extract-colors-2: 221 221 221;');
        expect(cssCompiled).to.contain('--extract-colors-3: 0 255 0;');
        expect(cssCompiled).to.contain('--extract-colors-4: 0 255 0 / 0.5;');
        expect(cssCompiled).to.contain('--extract-colors-5: 0 255 0;');
        expect(cssCompiled).to.contain('--extract-colors-classic-1: 34, 34, 34;');
        expect(cssCompiled).to.contain('--extract-colors-classic-2: 221, 221, 221;');
        // --
        expect(cssCompiled).to.contain('--no-null-1: transparent;');
        expect(cssCompiled).to.contain('--no-null-2: blue;');
        // --
        expect(cssCompiled).to.contain('--no-trasparent-1: inherit;');
        expect(cssCompiled).to.contain('--no-trasparent-2: inherit;');
        expect(cssCompiled).to.contain('--no-trasparent-3: #123456;');
        // --
        expect(cssCompiled).to.contain('--map-deep-get: 10px;');
    });
});