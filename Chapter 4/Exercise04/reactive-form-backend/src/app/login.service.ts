import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(user: User) {
    return true;
  }
}

