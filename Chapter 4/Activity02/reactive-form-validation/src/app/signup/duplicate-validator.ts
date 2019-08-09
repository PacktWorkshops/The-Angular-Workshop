import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {SignupService } from '../signup.service';

@Injectable({ providedIn: 'root' })
export class DuplicateValidator implements AsyncValidator {
  constructor(private signupService: SignupService) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> |Observable<ValidationErrors | null> {
    return this.signupService.duplicateCheck(control.value).pipe(
      map(isDuplicate => (isDuplicate ? { nameTaken: true } : null)),
      catchError(() => null)
    );
  }
}
