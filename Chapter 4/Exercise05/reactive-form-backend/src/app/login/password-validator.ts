import { FormControl } from '@angular/forms';

export class PasswordValidator {
  static invalidWord(control: FormControl): { [key: string]: boolean } {
    if (control.value && control.value.toLowerCase() === 'password') {
      return { invalidWord: true };
    }
    return null;
  }
}
