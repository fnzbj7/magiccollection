import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import * as jwtDecode from 'jwt-decode';
import { JwtTokenModel } from './jwt.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    CURRENT_USER = 'currentUser';
    currentUser: User;

    constructor() {
        this.getCurrentUser();
    }

    removeCurrentUser() {
        localStorage.removeItem(this.CURRENT_USER);
    }

    getCurrentUser() {
        this.currentUser = JSON.parse(localStorage.getItem(this.CURRENT_USER));
    }

    setCurrentUser(user: User) {
        localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
    }

    setAccessTokenAndSaveLocalStorage(accessToken: string) {
        const jwtToken = jwtDecode<JwtTokenModel>(accessToken);
        const expirationDate = new Date(jwtToken.exp * 1000);
        this.currentUser.expiresIn = expirationDate;
        this.currentUser.token = accessToken;
        this.setCurrentUser(this.currentUser);
    }
}
