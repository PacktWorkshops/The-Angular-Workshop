"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("@angular-devkit/architect/src/index");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const child_process_1 = require("child_process");
function build(options, context) {
    return new rxjs_1.Observable((observer) => {
        if (!options.files) {
            observer.error('Please include files in angular.json.');
        }
        else {
            options.files.forEach(file => {
                child_process_1.exec(`cp -R ${file.inDir} ${file.outDir}`, {}, (error, stdout, stderr) => {
                    if (error) {
                        observer.error(error);
                    }
                });
            });
            observer.next();
        }
    });
}
exports.build = build;
exports.default = index_1.createBuilder((options, context) => {
    return rxjs_1.of(context).pipe(operators_1.concatMap(result => build(options, context)), operators_1.mapTo({ success: true }), operators_1.catchError(error => {
        context.reportStatus('Error: ' + error);
        return [{ success: false }];
    }));
});
