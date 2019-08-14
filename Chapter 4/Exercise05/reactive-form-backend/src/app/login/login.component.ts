import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { LoginService } from '../login.service';
import { PasswordValidator } from './password-validator';
import { DuplicateValidator } from './duplicate-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  loginForm: FormGroup;
  signUpForm: FormGroup;
  loggedIn: boolean;
  loginMessage: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private duplicateValidator: DuplicateValidator) { }

  ngOnInit() {
    this.buildLoginForm();
    this.buildSignUpForm();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      name: [this.user.name, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required, PasswordValidator.invalidWord]]
    });
  }

  buildSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required, this.duplicateValidator.validate.bind(this.duplicateValidator)]
    }, { updateOn: 'blur' });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
        (data) => {
          this.loggedIn = !!data;
          this.submitted = true;
        }
      );
    }
  }
}
