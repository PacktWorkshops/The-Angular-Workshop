"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("@angular-devkit/architect/src/index");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function build(options, context) {
    return new rxjs_1.Observable((observer) => {
        observer.next();
    });
}
exports.build = build;
;
exports.default = index_1.createBuilder((options, context) => {
    return rxjs_1.of(context).pipe(operators_1.concatMap(results => build(options, context)), operators_1.mapTo({ success: true }), operators_1.catchError(error => {
        context.reportStatus('Error: ' + error);
        return [{ success: false }];
    }));
});
