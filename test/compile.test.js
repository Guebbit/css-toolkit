import { describe, it } from "mocha";
import { expect } from "chai";
import fs from "fs";
import * as sass from "sass";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let cssCompiled;
const writeCompiledOutput = process.env.WRITE_TEST_OUTPUT === "1";

function sassCompiler() {
  return Promise.resolve(
    sass.compile(path.join(__dirname, "./test.scss"), {
      loadPaths: ["./scss"],
      style: "expanded",
    }).css,
  );
}

describe("COMPILE", function () {
  // to remove timeout error
  this.timeout(10000);

  it("Should compile", async function () {
    cssCompiled = await sassCompiler();
    // Optional artifact generation for easier debugging
    if (writeCompiledOutput) {
      fs.writeFile(path.join(__dirname, "test.css"), cssCompiled, () => {});
    }
  });

  it("Check some rules", function () {
    // --
    expect(cssCompiled).to.contain(".blue-400-text {");
    expect(cssCompiled).to.match(
      /color:\s*rgb\(61(?:\.\d+)?,\s*139,\s*253(?:\.\d+)?\)\s*!important;/,
    );
    expect(cssCompiled).to.contain(".blue-400-bg {");
    expect(cssCompiled).to.match(
      /background-color:\s*rgb\(61(?:\.\d+)?,\s*139,\s*253(?:\.\d+)?\)\s*!important;/,
    );
    expect(cssCompiled).to.contain(".blue-400-border {");
    expect(cssCompiled).to.match(
      /border-color:\s*rgb\(61(?:\.\d+)?,\s*139,\s*253(?:\.\d+)?\)\s*!important;/,
    );
    expect(cssCompiled).to.contain(
      ".blue-400-pseudo-bg::after, .blue-400-pseudo-bg::before {",
    );
    expect(cssCompiled).to.match(
      /background-color:\s*rgb\(61(?:\.\d+)?,\s*139,\s*253(?:\.\d+)?\)\s*!important;/,
    );
    expect(cssCompiled).to.contain(".blue-400-hover-text:hover {");
    expect(cssCompiled).to.contain(".blue-400-hover-bg:hover {");
    expect(cssCompiled).to.contain(".blue-400-hover-border:hover {");
    expect(cssCompiled).to.contain(
      ".blue-400-hover-pseudo-bg:hover::after, .blue-400-hover-pseudo-bg:hover::before {",
    );
    // --
    expect(cssCompiled).to.contain(".primary-500-text {");
    expect(cssCompiled).to.contain(
      "color: var(--g-theme-primary-500) !important;",
    );
    expect(cssCompiled).to.contain(".primary-500-bg {");
    expect(cssCompiled).to.contain(
      "background-color: var(--g-theme-primary-500) !important;",
    );
    expect(cssCompiled).to.contain(".primary-500-border {");
    expect(cssCompiled).to.contain(
      "border-color: var(--g-theme-primary-500) !important;",
    );
    expect(cssCompiled).to.contain(
      ".primary-500-pseudo-bg::after, .primary-500-pseudo-bg::before {",
    );
    expect(cssCompiled).to.contain(".primary-500-hover-text:hover {");
    expect(cssCompiled).to.contain(".primary-500-hover-bg:hover {");
    expect(cssCompiled).to.contain(".primary-500-hover-border:hover {");
    expect(cssCompiled).to.contain(
      ".primary-500-hover-pseudo-bg:hover::after, .primary-500-hover-pseudo-bg:hover::before {",
    );
    // --
    expect(cssCompiled).to.contain("--g-theme-primary-500: 255 0 255;");
    expect(cssCompiled).to.contain("--g-theme-on-primary-500: 255 255 255;");
    expect(cssCompiled).to.contain("--blue-400: 61.4 139 253.4;");
    expect(cssCompiled).to.contain("--on-blue-400: 0 0 0;");
    expect(cssCompiled).to.contain("--manga-red-500: 212 24 22;");
    expect(cssCompiled).to.contain(
      "--gradient-brand-instagram: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);",
    );
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
    // -
    expect(cssCompiled).to.contain(".aspect-ratio-1-1::before {");
    expect(cssCompiled).to.contain("padding-top: 100%;");
    expect(cssCompiled).to.contain(".aspect-ratio-16-9::before {");
    expect(cssCompiled).to.contain("padding-top: 56%;");
    // -
    expect(cssCompiled).to.contain(
      "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {",
    );
    expect(cssCompiled).to.contain("@supports (-ms-ime-align: auto) {");
    expect(cssCompiled).to.contain("@supports (-moz-appearance: none) {");
    expect(cssCompiled).to.contain("@supports (-webkit-touch-callout: none) {");
    // --
    expect(cssCompiled).to.contain(".scrollbar-test::-webkit-scrollbar {");
    expect(cssCompiled).to.contain("width: 8px;");
    expect(cssCompiled).to.contain("height: 8px;");
    expect(cssCompiled).to.contain("background-color: #abcdef;");
    expect(cssCompiled).to.contain(
      ".scrollbar-test::-webkit-scrollbar-thumb {",
    );
    expect(cssCompiled).to.contain("border-radius: 4px;");
    expect(cssCompiled).to.contain("background-color: #123456;");
    expect(cssCompiled).to.contain(
      ".scrollbar-test::-webkit-scrollbar-corner {",
    );
    // --
    expect(cssCompiled).to.contain(
      "--color-opaque-1: rgba(33.0810810811, 33.0810810811, 33.0810810811, 0.84)",
    );
    expect(cssCompiled).to.contain(
      "--color-opaque-2: rgb(110.5, 110.5, 110.5)",
    );
    expect(cssCompiled).to.contain("--color-opaque-3: #dddddd;");
    // --
    expect(cssCompiled).to.contain("--color-tint-1: rgb(89.25, 89.25, 89.25);");
    expect(cssCompiled).to.contain("--color-tint-2: rgb(229.5, 229.5, 229.5);");
    // --
    expect(cssCompiled).to.contain("--color-shade-1: rgb(25.5, 25.5, 25.5);");
    expect(cssCompiled).to.contain(
      "--color-shade-2: rgb(165.75, 165.75, 165.75);",
    );
    // --
    expect(cssCompiled).to.contain("--color-shift-1: rgb(25.5, 25.5, 25.5);");
    expect(cssCompiled).to.contain(
      "--color-shift-2: rgb(165.75, 165.75, 165.75);",
    );
    expect(cssCompiled).to.contain(
      "--color-shift-3: rgb(89.25, 89.25, 89.25);",
    );
    expect(cssCompiled).to.contain(
      "--color-shift-4: rgb(229.5, 229.5, 229.5);",
    );
    // --
    expect(cssCompiled).to.contain("--color-contrast-1: #fff;");
    expect(cssCompiled).to.contain("--color-contrast-2: #000;");
    // --
    expect(cssCompiled).to.contain("--color-brightness-1: #fff;");
    expect(cssCompiled).to.contain("--color-brightness-2: #000;");
    // --
    expect(cssCompiled).to.contain("--extract-colors-1: 255 255 255;");
    expect(cssCompiled).to.contain("--extract-colors-2: 34 34 34;");
    expect(cssCompiled).to.contain("--extract-colors-3: 221 221 221;");
    expect(cssCompiled).to.contain("--extract-colors-4: 34, 34, 34;");
    expect(cssCompiled).to.contain("--extract-colors-5: 221, 221, 221;");
    expect(cssCompiled).to.contain("--extract-colors-6: 0 255 0;");
    expect(cssCompiled).to.contain("--extract-colors-7: 0 255 0 / 0.5;");
    expect(cssCompiled).to.contain("--extract-colors-8: 0, 255, 0;");
    expect(cssCompiled).to.contain("--extract-colors-9: 0, 255, 0, 0.5;");
    expect(cssCompiled).to.contain("--extract-colors-10: 0 255 0;");
    expect(cssCompiled).to.contain("--extract-colors-11: 0 255 0 / 0.5;");
    expect(cssCompiled).to.contain("--extract-colors-12: 0, 255, 0;");
    expect(cssCompiled).to.contain("--extract-colors-13: 0, 255, 0, 0.5;");
    // --
    expect(cssCompiled).to.contain("--no-null-1: transparent;");
    expect(cssCompiled).to.contain("--no-null-2: blue;");
    // --
    expect(cssCompiled).to.contain("--no-trasparent-1: inherit;");
    expect(cssCompiled).to.contain("--no-trasparent-2: inherit;");
    expect(cssCompiled).to.contain("--no-trasparent-3: #123456;");
    // --
    expect(cssCompiled).to.contain("--map-deep-get: 10px;");
    expect(cssCompiled).to.contain("--color-get: 13 110 253;");
    // --
    expect(cssCompiled).to.contain("--string-split-1: find;");
    expect(cssCompiled).to.contain("--string-split-2: this;");
    expect(cssCompiled).to.contain("--string-split-3: word;");
    expect(cssCompiled).to.contain("--string-ends-with-1: true;");
    expect(cssCompiled).to.contain("--string-ends-with-2: false;");
    // --
    expect(cssCompiled).to.contain("--color-luminance-1: 0%;");
    expect(cssCompiled).to.contain("--color-luminance-2: 100%;");
    expect(cssCompiled).to.contain("--color-luminance-3: 100;");
    // --
    expect(cssCompiled).to.contain(
      "--create-collection-100: 207.6 214.4 221.2;",
    );
    expect(cssCompiled).to.contain("--create-collection-500: 18 52 86;");
    expect(cssCompiled).to.contain("--create-collection-900: 3.6 10.4 17.2;");
    // --
    expect(cssCompiled).to.contain("@media (min-width: 768px) {");
    expect(cssCompiled).to.contain("@media (max-width: 991.98px) {");
    expect(cssCompiled).to.contain(
      "@media (min-width: 576px) and (max-width: 1199.98px) {",
    );
    expect(cssCompiled).to.contain("--breakpoint-md: 768px;");
    expect(cssCompiled).to.contain("--breakpoint-lg-max: 1199.98px;");
  });
});
