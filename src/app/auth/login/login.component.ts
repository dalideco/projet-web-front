import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials= {
    email: "",
    password: ""
  }
  loginGroup !:FormGroup;

  constructor() {
    this.loginGroup = new FormGroup({
      email: new FormControl(this.credentials.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.credentials.password, [
        Validators.required,
        Validators.minLength(4),
        
      ])
    })
  }

  ngOnInit(): void {
  }

  get email() {
    return this.loginGroup.get('email')
  }

  get password() {
    return this.loginGroup.get('password')
  }

}
