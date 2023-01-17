import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginGroup!: FormGroup;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {
    this.loginGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  ngOnInit(): void {}

  get email() {
    return this.loginGroup.get('email');
  }

  get password() {
    return this.loginGroup.get('password');
  }

  onSubmit() {
    const { email, password } = this;

    this.auth.login(email?.value, password?.value).subscribe(
      (user) => {
        this.router.navigate(['']);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to login',
          text: error?.error?.message,
        });
      }
    );
  }
}
