import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private loggedIn = false;

    constructor(private http: HttpClient) {
        const currentUserJson = JSON.parse(localStorage.getItem('currentUser'));
        this.loggedIn = currentUserJson ? true : false;
        this.currentUserSubject = new BehaviorSubject<User>(currentUserJson);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    registration(email: string, username: string, password: string) {
      return this.http.post<any>(environment.mainUrl + '/api/user/registration', { email, username, password });
    }

    login(email: string, password: string) {
      return this.http.post<User>(environment.mainUrl + '/api/user/userLogin', { email, password })
        .pipe(map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.loggedIn = true;
          }

          return user;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.loggedIn = false;
    }

    isLoggedIn() {
      return this.loggedIn;
    }
}
