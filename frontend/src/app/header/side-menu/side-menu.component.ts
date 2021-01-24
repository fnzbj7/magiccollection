import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { AuthComponent } from '../../auth/auth.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../auth/authentication.service';
import { User } from '../../model/user.model';
import { Subscription } from 'rxjs';
import { MenuService, MenuElement } from '../menu.service';
import {
    faFolder,
    faFolderOpen,
    faSignInAlt,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit, OnDestroy {
    loggedUser: User;
    currentUserSub: Subscription;
    menus: MenuElement[];

    // Font Awesome
    faSignOutAlt = faSignOutAlt;
    faSignInAlt = faSignInAlt;

    constructor(
        private dialog: MatDialog,
        private authenticationService: AuthenticationService,
        private menuService: MenuService,
    ) {}

    ngOnInit() {
        this.currentUserSub = this.authenticationService.currentUserSubject.subscribe(user => {
            this.loggedUser = user;
        });
        this.menus = this.menuService.getMenus();
    }

    openModalWithComponent() {
        this.dialog.open(AuthComponent);
    }

    onLogout() {
        this.authenticationService.logout();
    }

    ngOnDestroy() {
        if (this.currentUserSub) {
            this.currentUserSub.unsubscribe();
        }
    }
}
