import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import User from 'src/models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userSubject = new BehaviorSubject<User | null>(null);
  public get user(): User | null {
    return this.userSubject.value;
  }

  constructor(private readonly auth: AuthService) {
    this.getUser();
    this.auth.currentUserSubject.subscribe((value) => {
      if (value === null) {
        this.userSubject.next(null);
      } else this.getUser();
    });
  }

  getUser() {
    return this.auth.getUser().subscribe(
      (user: any) => {
        this.userSubject.next(user);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
