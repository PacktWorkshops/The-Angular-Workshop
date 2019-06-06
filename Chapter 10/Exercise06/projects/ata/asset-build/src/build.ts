
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect/src/index';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, concatMap } from 'rxjs/operators';
import { exec } from 'child_process';

export interface BuilderSchema {}

export function build(
  options: BuilderSchema, 
  context: BuilderContext
 ): Observable<{}> {

   return new Observable((observer) => {

      context.reportProgress(0);

      exec(`cp -R src/assets dist/ata/ui/assets`,
        {},
        (error, stdout, stderr) => {
          if (error) {
            observer.error(error);
          } else {
            context.reportProgress(100);
            observer.next(stdout);
          }
        
      });
    });

}

export default createBuilder((options: BuilderSchema, context: BuilderContext): Observable<BuilderOutput> => {
  return of(context).pipe(
    concatMap( results => build(options, context) ),
    mapTo({ success: true }),
    catchError(error => {
      context.reportStatus('Error: ' + error);
      return [{ success: false }];
    }),
  );
});