import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { SignupService } from '../signup.service';
import { DuplicateValidator } from './duplicate-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();
  signupForm: FormGroup;
  loggedIn: boolean;
  signupMessage: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private signupService: SignupService, private duplicateValidator: DuplicateValidator) { }

  ngOnInit() {
    this.buildSignupForm();
  }

  buildSignupForm() {
    this.signupForm = this.formBuilder.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      username: [this.user.userName, Validators.required, this.duplicateValidator.validate.bind(this.duplicateValidator)],
      password: [this.user.password, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
