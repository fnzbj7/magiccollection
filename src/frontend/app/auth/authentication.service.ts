import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';
import { environment } from '../../environments/environment';
import * as jwtDecode from 'jwt-decode';
import { JwtTokenModel } from './jwt.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    currentUserSubject: BehaviorSubject<User>;
    private loggedIn = false;

    constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
        let currentUserJson = this.localStorageService.currentUser;

        this.loggedIn =
            currentUserJson &&
            this.expirationDateValidAndRefresh(<string>currentUserJson.expiresIn);
        currentUserJson = this.loggedIn ? currentUserJson : null;
        this.currentUserSubject = new BehaviorSubject<User>(currentUserJson);
    }

    expirationDateValidAndRefresh(expiresIn: string): boolean {
        const now = new Date();
        const expiresInDate = new Date(expiresIn);
        const remainTime = expiresInDate.getTime() - now.getTime();
        if (remainTime < 0) {
            this.localStorageService.removeCurrentUser();
        } else {
            // refresh
            this.refreshToken();
        }
        return remainTime > 0;
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    registration(email: string, username: string, password: string) {
        return this.http.post<any>(environment.mainUrl + '/auth/signup', {
            email,
            username,
            password,
            dci: '2121',
        });
    }

    login(email: string, password: string) {
        return this.http
            .post<{ accessToken: string }>(environment.mainUrl + '/auth/signin', {
                email,
                password,
            })
            .pipe(
                map(resp => {
                    // login successful if there's a jwt token in the response
                    return this.createAndLoginUser(resp.accessToken);
                }),
            );
    }

    private refreshToken() {
        this.http
            .get<{ accessToken: string }>(environment.mainUrl + '/auth/refreshtoken')
            .subscribe(resp => {
                if (resp.accessToken) {
                    this.localStorageService.setAccessTokenAndSaveLocalStorage(resp.accessToken);
                }
            });
    }

    private createAndLoginUser(accessToken: string): User {
        const user = new User();
        if (accessToken) {
            const jwtToken = jwtDecode<JwtTokenModel>(accessToken);
            user.token = accessToken;
            const expirationDate = new Date(jwtToken.exp * 1000);
            user.expiresIn = expirationDate;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.localStorageService.setCurrentUser(user);
            this.loggedIn = true;
            this.currentUserSubject.next(user);
        }
        return user;
    }

    logout() {
        // remove user from local storage to log user out
        this.localStorageService.removeCurrentUser();
        this.loggedIn = false;
        this.currentUserSubject.next(null);
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    facebookSignIn(access_token: string): Observable<any> {
        return this.http
            .get<{ accessToken: string }>(environment.mainUrl + '/auth/facebook', {
                params: { access_token },
            })
            .pipe(
                map(resp => {
                    // login successful if there's a jwt token in the response
                    return this.createAndLoginUser(resp.accessToken);
                }),
            );
    }
}
