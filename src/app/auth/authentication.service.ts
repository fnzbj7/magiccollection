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
        let currentUserJson: User = JSON.parse(localStorage.getItem('currentUser'));

        this.loggedIn = currentUserJson && this.expirationDateValid(<string>currentUserJson.expiresIn);
        currentUserJson = this.loggedIn ? currentUserJson : null;
        this.currentUserSubject = new BehaviorSubject<User>(currentUserJson);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    expirationDateValid(expiresIn: string) {
      const now = new Date();
      const expiresInDate = new Date(expiresIn);
      const remainTime =  expiresInDate.getTime() - now.getTime();

      if (remainTime < 0) {
        localStorage.removeItem('currentUser');
      }
      return remainTime > 0;
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    registration(email: string, username: string, password: string) {
      return this.http.post<any>(environment.mainUrl + '/api/user/registration', { email, username, password });
    }

    login(email: string, password: string) {
      return this.http.post<{user: User, expiresIn: number}>(environment.mainUrl + '/api/user/userLogin', { email, password })
        .pipe(map(resp => {
          // login successful if there's a jwt token in the response
          if (resp.user && resp.user.token) {
            const now = new Date();
            const expirationDate = new Date(now.getTime() + resp.expiresIn * 1000);
            resp.user.expiresIn = expirationDate;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(resp.user));
            this.currentUserSubject.next(resp.user);
            this.loggedIn = true;
          }

          return resp.user;
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
