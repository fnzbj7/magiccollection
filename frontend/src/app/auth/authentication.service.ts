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
      return this.http.post<any>(environment.mainUrl + '/auth/signup', { email, username, password, dci: '2121' });
    }

    login(email: string, password: string) {
      return this.http.post<{accessToken}>(environment.mainUrl + '/auth/signin', { email, password })
        .pipe(map(resp => {
          // login successful if there's a jwt token in the response
          const user = new User();
          if (resp.accessToken ) {
            user.token = resp.accessToken;
            const now = new Date();
            const expirationDate = new Date(now.getTime() + 1000 * 1000);
            user.expiresIn = expirationDate;
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

    testfacebook(access_token: string): Observable<any> {
      return this.http.get(environment.mainUrl + '/auth/facebook', {params: {access_token}});
    }
}
