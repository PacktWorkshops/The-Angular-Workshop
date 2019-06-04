import { BuilderContext } from '@angular-devkit/architect/src/index';
import { Observable } from 'rxjs';
export interface FileSchema {
    inDir: string;
    outDir: string;
}
export interface BuilderSchema {
    files?: FileSchema[];
}
export declare function build(options: BuilderSchema, context: BuilderContext): Observable<{}>;
declare const _default: import("@angular-devkit/architect/src/internal").Builder<import("@angular-devkit/core").JsonObject>;
export default _default;
