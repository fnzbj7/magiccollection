import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';
import { JwtTokenModel } from './model/jwt.model';
import { LocalStorageService } from './local-storage.service';
import { JwtDecodeService } from './jwt-decode.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    currentUserSubject: BehaviorSubject<User | null>;
    private loggedIn = false;

    constructor(
        private http: HttpClient,
        private localStorageService: LocalStorageService,
        private jwtDecodeService: JwtDecodeService,
    ) {
        let currentUserJson = this.localStorageService.getCurrentUser();

        this.loggedIn =
            currentUserJson &&
            this.expirationDateValidAndRefresh(currentUserJson.expiresIn as string);
        currentUserJson = this.loggedIn ? currentUserJson : null;
        this.currentUserSubject = new BehaviorSubject<User | null>(currentUserJson);
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

    public get currentUserValue(): User | null {
        return this.currentUserSubject.value;
    }

    registration(email: string, username: string, password: string) {
        return this.http.post('/api/auth/signup', {
            email,
            username,
            password,
            dci: '2121',
        });
    }

    login(email: string, password: string) {
        return this.http
            .post<{ accessToken: string }>('/api/auth/signin', {
                email,
                password,
            })
            .pipe(
                map(resp =>
                    // login successful if there's a jwt token in the response
                    this.createAndLoginUser(resp.accessToken),
                ),
            );
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

    facebookSignIn(accessToken: string): Observable<User> {
        return this.http
            .get<{ accessToken: string }>('/api/auth/facebook', {
                params: { access_token: accessToken },
            })
            .pipe(
                map(resp =>
                    // login successful if there's a jwt token in the response
                    this.createAndLoginUser(resp.accessToken),
                ),
            );
    }

    private refreshToken() {
        this.http.get<{ accessToken: string }>('/api/auth/refreshtoken').subscribe(resp => {
            this.createAndLoginUser(resp.accessToken);
        });
    }

    private createAndLoginUser(accessToken: string): User {
        const user = new User();
        if (accessToken) {
            const jwtToken = this.jwtDecodeService.decode<JwtTokenModel>(accessToken);
            user.token = accessToken;
            const expirationDate = new Date(jwtToken.exp * 1000);
            user.expiresIn = expirationDate;
            user.username = jwtToken.name;
            user.email = jwtToken.email;
            user.privileges = jwtToken.privileges || [];
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.localStorageService.setCurrentUser(user);
            this.loggedIn = true;
            this.currentUserSubject.next(user);
        }
        return user;
    }
}
