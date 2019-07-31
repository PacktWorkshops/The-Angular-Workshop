import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  loginForm: FormGroup;
  loggedIn: boolean;
  loginMessage: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      name: [this.user.name],
      password: [this.user.password]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loginService.login(this.loginForm.value).subscribe(
      (data) => {
        this.loggedIn = !!data;
      }
    );
  }
}
