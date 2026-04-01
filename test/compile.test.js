import { describe, it } from "mocha";
import { expect } from "chai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import postcss from "postcss";
import postcssImport from "postcss-import";
import postcssNesting from "postcss-nesting";
import postcssMixins from "postcss-mixins";
import { mixins } from "../src/mixins/index.js";
import toolkitPlugin from "../index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let cssCompiled;

async function postcssCompiler() {
    const inputPath = path.join(__dirname, "./test.css");
    const source = fs.readFileSync(inputPath, "utf8");

    const result = await postcss([
        postcssImport(),
        postcssMixins({ mixins }),
        toolkitPlugin(),
        postcssNesting(),
    ]).process(source, { from: inputPath });

    return result.css;
}

describe("COMPILE", function () {
    this.timeout(10000);

    it("Should compile", async function () {
        cssCompiled = await postcssCompiler();
        fs.writeFileSync(path.join(__dirname, "compiled.css"), cssCompiled);
    });

    it("Check some rules", function () {
        expect(cssCompiled).to.contain(".blue-400-text {");
        expect(cssCompiled).to.contain("color: rgb(61.4, 139, 253.4) !important;");
        expect(cssCompiled).to.contain(".blue-400-bg {");
        expect(cssCompiled).to.contain("background-color: rgb(61.4, 139, 253.4) !important;");
        expect(cssCompiled).to.contain(".blue-400-border {");
        expect(cssCompiled).to.contain("border-color: rgb(61.4, 139, 253.4) !important;");
        expect(cssCompiled).to.contain(".blue-400-pseudo-bg::after,");
        expect(cssCompiled).to.contain(".blue-400-pseudo-bg::before {");
        expect(cssCompiled).to.contain(".blue-400-hover-text:hover {");
        expect(cssCompiled).to.contain(".blue-400-hover-bg:hover {");
        expect(cssCompiled).to.contain(".blue-400-hover-border:hover {");
        expect(cssCompiled).to.contain(".blue-400-hover-pseudo-bg:hover::after,");
        expect(cssCompiled).to.contain(".blue-400-hover-pseudo-bg:hover::before {");

        expect(cssCompiled).to.contain(".primary-500-text {");
        expect(cssCompiled).to.contain("color: var(--g-theme-primary-500) !important;");
        expect(cssCompiled).to.contain(".primary-500-bg {");
        expect(cssCompiled).to.contain("background-color: var(--g-theme-primary-500) !important;");
        expect(cssCompiled).to.contain(".primary-500-border {");
        expect(cssCompiled).to.contain("border-color: var(--g-theme-primary-500) !important;");
        expect(cssCompiled).to.contain(".primary-500-pseudo-bg::after,");
        expect(cssCompiled).to.contain(".primary-500-pseudo-bg::before {");
        expect(cssCompiled).to.contain(".primary-500-hover-text:hover {");
        expect(cssCompiled).to.contain(".primary-500-hover-bg:hover {");
        expect(cssCompiled).to.contain(".primary-500-hover-border:hover {");
        expect(cssCompiled).to.contain(".primary-500-hover-pseudo-bg:hover::after,");
        expect(cssCompiled).to.contain(".primary-500-hover-pseudo-bg:hover::before {");

        expect(cssCompiled).to.contain("--g-theme-primary-500: 255 0 255;");
        expect(cssCompiled).to.contain("--g-theme-on-primary-500: 255 255 255;");
        expect(cssCompiled).to.contain("--blue-400: 61.4 139 253.4;");
        expect(cssCompiled).to.contain("--on-blue-400: 0 0 0;");
        expect(cssCompiled).to.contain("--manga-red-500: 212 24 22;");
        expect(cssCompiled).to.contain("--gradient-brand-instagram: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);");
        expect(cssCompiled).to.contain(".text-align-right {");
        expect(cssCompiled).to.contain("text-align: right !important;");

        expect(cssCompiled).to.contain(".mt-auto {");
        expect(cssCompiled).to.contain("margin-top: auto;");
        expect(cssCompiled).to.contain(".my-48 {");
        expect(cssCompiled).to.contain("margin-top: 48px;");
        expect(cssCompiled).to.contain("margin-bottom: 48px;");
        expect(cssCompiled).to.contain(".width-100 {");
        expect(cssCompiled).to.contain("width: 100% !important;");
        expect(cssCompiled).to.contain(".flex-gap-24 {");
        expect(cssCompiled).to.contain("gap: 24px !important;");

        expect(cssCompiled).to.contain(".aspect-ratio-1-1::before {");
        expect(cssCompiled).to.contain("padding-top: 100%;");
        expect(cssCompiled).to.contain(".aspect-ratio-16-9::before {");
        expect(cssCompiled).to.contain("padding-top: 56%;");

        expect(cssCompiled).to.contain("@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {");
        expect(cssCompiled).to.contain("@supports (-ms-ime-align: auto) {");
        expect(cssCompiled).to.contain("@supports (-moz-appearance: none) {");

        expect(cssCompiled).to.contain("--color-opaque-1: rgba(33.08108108108108, 33.08108108108108, 33.08108108108108, 0.8400000000000001);");
        expect(cssCompiled).to.contain("--color-opaque-2: rgb(110.5, 110.5, 110.5);");
        expect(cssCompiled).to.contain("--color-opaque-3: #ddd;");
        expect(cssCompiled).to.contain("--color-tint-1: rgb(89.25, 89.25, 89.25);");
        expect(cssCompiled).to.contain("--color-tint-2: rgb(229.5, 229.5, 229.5);");
        expect(cssCompiled).to.contain("--color-shade-1: rgb(25.5, 25.5, 25.5);");
        expect(cssCompiled).to.contain("--color-shade-2: rgb(165.75, 165.75, 165.75);");
        expect(cssCompiled).to.contain("--color-shift-1: rgb(25.5, 25.5, 25.5);");
        expect(cssCompiled).to.contain("--color-shift-2: rgb(165.75, 165.75, 165.75);");
        expect(cssCompiled).to.contain("--color-shift-3: rgb(89.25, 89.25, 89.25);");
        expect(cssCompiled).to.contain("--color-shift-4: rgb(229.5, 229.5, 229.5);");
        expect(cssCompiled).to.contain("--color-contrast-1: #fff;");
        expect(cssCompiled).to.contain("--color-contrast-2: #000;");
    });
});
