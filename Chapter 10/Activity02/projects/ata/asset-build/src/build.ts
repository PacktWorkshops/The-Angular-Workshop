
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect/src/index';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, concatMap, map } from 'rxjs/operators';
import { exec } from 'child_process';

export interface FileSchema  {
  inDir: string;
  outDir: string;
}

export interface BuilderSchema {
  files?: FileSchema[]
}

export function build(
  options: BuilderSchema, 
  context: BuilderContext
 ): Observable<{}> {

   return new Observable((observer) => {
   
      if (!options.files) {
        observer.error('Please include files in angular.json.');
      } else {
       
        options.files.forEach(file => {

          exec(`cp -R ${file.inDir} ${file.outDir}`,
          {},
            (error) => {
              if (error) {
                observer.error(error);
              } 
          });
  
        })

        observer.next();

      }

    });

}

export default createBuilder((options: BuilderSchema, context: BuilderContext): Observable<BuilderOutput> => {
  return of(context).pipe(
    concatMap( result => build(options, context) ),
    mapTo({ success: true }),
    catchError(error => {
      context.reportStatus('Error: ' + error);
      return [{ success: false }];
    }),
  );
});