import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildSignupForm();
  }

  buildSignupForm() {
    this.signupForm = this.formBuilder.group({
      firstName: [this.user.firstName],
      lastName: [this.user.lastName],
      email: [this.user.email],
      userName: [this.user.userName],
      password: [this.user.password],
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
