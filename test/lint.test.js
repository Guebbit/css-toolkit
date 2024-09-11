import { describe, it } from 'mocha';
import { expect } from "chai";
import stylelint from "stylelint";
import path from "path";
import styleLintFormatter from "stylelint-config-standard-scss";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


describe("LINT", function() {
    // to remove timeout error
    this.timeout(10000);

    it('Generic linting', async () => {
        return stylelint.lint({
            configFile: path.join(__dirname, '../.stylelintrc.json'),
            ignorePath: path.join(__dirname, '../.stylelintignore'),
            formatter: styleLintFormatter,
            files: [
                path.join(__dirname, './test.scss'),
            ],
        })
            .then(function ({ errored, report }) {
                if(!errored)
                    return false;
                // show me errors
                const reportsArray = JSON.parse(report);
                for(let i = reportsArray.length; i--; ){
                    const reportKeys = Object.keys(reportsArray[i]);
                    for(let k = reportKeys.length; k--; ){
                        const reportsValues = reportsArray[i][reportKeys[k]];
                        if(reportsValues.length <= 0)
                            continue;
                        if(Array.isArray(reportsValues)){
                            console.log("-----------" + reportKeys[k] + "-----------");
                            for(let x = reportsValues.length; x--; )
                                console.log(reportsValues[x]);
                        }else{
                            console.log(reportKeys[k] + ": " + reportsValues);
                        }
                    }
                }
                return true;
            })
            .then(result => expect(result).to.be.false);
    });
});
