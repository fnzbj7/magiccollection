import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    CURRENT_USER = 'currentUser';
    currentUser: User | null;

    constructor() {
        this.currentUser = this.getCurrentUser();
    }

    removeCurrentUser() {
        localStorage.removeItem(this.CURRENT_USER);
    }

    getCurrentUser() {
        const storageUser = localStorage.getItem(this.CURRENT_USER);

        return storageUser !== null ? JSON.parse(storageUser) : null;
    }

    setCurrentUser(user: User | null) {
        this.currentUser = user;
        localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
    }

    setAccessTokenAndSaveLocalStorage(user: User | null) {
        this.setCurrentUser(user);
    }
}
