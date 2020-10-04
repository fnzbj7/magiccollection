import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    CURRENT_USER = 'currentUser';
    currentUser: User;

    constructor() {
        this.currentUser = this.getCurrentUser();
    }

    removeCurrentUser() {
        localStorage.removeItem(this.CURRENT_USER);
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem(this.CURRENT_USER));
    }

    setCurrentUser(user: User) {
        this.currentUser = user;
        localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
    }

    setAccessTokenAndSaveLocalStorage(user: User) {
        this.setCurrentUser(user);
    }
}
