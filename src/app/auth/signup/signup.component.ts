import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatching } from '../validators/password-matching.directive';
import { passwordVerif } from '../validators/password-verif.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  credentials= {
    email: "",
    password: "",
    repeatPassword:"",
  }
  signupGroup !:FormGroup;

  constructor() {
    this.signupGroup = new FormGroup({
      email: new FormControl(this.credentials.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.credentials.password, [
        Validators.required,
        Validators.minLength(8),
        passwordVerif()
      ]),
      repeatPassword: new FormControl(this.credentials.repeatPassword,[
        Validators.required,
        Validators.minLength(8),
        passwordVerif()
      ])
    },{validators: passwordMatching()})
  }

  ngOnInit(): void {
  }

  get email() {
    return this.signupGroup.get('email')
  }

  get password() {
    return this.signupGroup.get('password')
  }

}
