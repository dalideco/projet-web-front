import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatching } from '../validators/password-matching.directive';
import { passwordVerif } from '../validators/password-verif.directive';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
    repeatPassword: '',
  };
  signupGroup!: FormGroup;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {
    this.signupGroup = new FormGroup(
      {
        email: new FormControl(this.credentials.email, [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl(this.credentials.password, [
          Validators.required,
          Validators.minLength(8),
          passwordVerif(),
        ]),
        repeatPassword: new FormControl(this.credentials.repeatPassword, [
          Validators.required,
          Validators.minLength(8),
          passwordVerif(),
        ]),
      },
      { validators: passwordMatching() }
    );
  }

  ngOnInit(): void {}

  get email() {
    return this.signupGroup.get('email');
  }

  get password() {
    return this.signupGroup.get('password');
  }

  get repeatPassword() {
    return this.signupGroup.get('repeatPassword');
  }

  onSubmit() {
    if (!this.signupGroup.valid) return;
    const { email, password } = this;
    this.auth.signup(email?.value, password?.value).subscribe(
      (result) => {
        console.log(result);
        Swal.fire({
          icon: 'success',
          title: 'You have been signed to G2B',
          text: 'Thank you for choosing our platform',
          confirmButtonText:'Login'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['auth', 'login']);
          }
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'An error occurred',
          text: error?.error?.message,
        });
      },
      () => {
        console.log('http request completed.');
      }
    );
  }
}
