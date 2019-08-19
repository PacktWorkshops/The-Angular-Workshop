
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  duplicateCheck(name: string): Observable<boolean> {
    const isDuplicate = name === 'dev';
    return of(isDuplicate);
  }
}
