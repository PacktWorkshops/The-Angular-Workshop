import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(`Submitting:
      user name: ${this.user.name}
      password: ${this.user.password}
      `);
  }
}
