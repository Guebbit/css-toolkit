import { describe, it } from 'mocha';
import util from "util";
import * as sass from "sass";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("COMPILE", function() {
    this.timeout(10000);
    it("Compiles in CSS", () => {
        const sassRender = util.promisify(sass.render);
        return sassRender({
            includePaths: ['./scss'],
            file: path.join(__dirname, '../test.scss')
        });
    });
});