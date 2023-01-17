import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ApplicationUser {
  accessToken: string;
  expiresIn: Date;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSubject: BehaviorSubject<ApplicationUser | null>;
  url = 'http://localhost:3000/auth/';

  constructor(private readonly http: HttpClient) {
    const item = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<ApplicationUser | null>(
      item ? JSON.parse(item) : null
    );
  }

  public get currentUserValue(): ApplicationUser | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.url + 'login', { email, password }).pipe(
      map((user) => {
        // login successful if there's a jwt token in the response
        if (user && user.access_token) {
          user.accessToken = user.access_token;
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  signup(email: string, password: string) {
    console.log(email, password);
    return this.http.post<any>(this.url + 'signup', { email, password });
  }

  getUser() {
    return this.http.get(this.url + 'profile');
  }
}
