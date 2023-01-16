import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ApplicationUser {
	accessToken: string;
	expiresIn: Date;
	username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private currentUserSubject: BehaviorSubject<ApplicationUser|null>;
	//public currentUser: Observable<ApplicationUser>;

	constructor(private readonly http: HttpClient) {
    const item=localStorage.getItem('currentUser')
		this.currentUserSubject = new BehaviorSubject<ApplicationUser|null>(
		item?JSON.parse(item):null
		);
		
	}

	public get currentUserValue(): ApplicationUser|null {
		return this.currentUserSubject.value;
	}

	login(username: string, password: string) {
		return this.http.post<any>('localhost:3000/auth/login', { username, password }).pipe(
			map(user => {
				// login successful if there's a jwt token in the response
				if (user && user.accessToken) {

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

 

}
