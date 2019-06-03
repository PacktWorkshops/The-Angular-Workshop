
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect/src/index';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, concatMap } from 'rxjs/operators';

export interface BuilderSchema {}

export function build(
  options: BuilderSchema, 
  context: BuilderContext
 ): Observable<{}> {

   return new Observable((observer) => {
 
      observer.next();
 
   });
};

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