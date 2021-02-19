import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../auth/authentication.service';
import { User } from '../../model/user.model';
import { Subscription } from 'rxjs';
import { MenuService } from '../menu.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { MenuElement } from '../model/menu-element.model';
import { ShowMenu } from '../model/show-menu.enum';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit, OnDestroy {
    loggedUser!: User | null;
    currentUserSub!: Subscription;
    menus!: MenuElement[];

    // Font Awesome
    faSignOutAlt = faSignOutAlt;

    constructor(
        private authenticationService: AuthenticationService,
        private menuService: MenuService,
    ) {}

    ngOnInit() {
        this.currentUserSub = this.authenticationService.currentUserSubject.subscribe(user => {
            this.loggedUser = user;
        });
        this.menus = this.menuService.getMenus();
    }

    needToShow(showMenu: ShowMenu): boolean {
        switch (showMenu) {
            case ShowMenu.ALWAYS:
                return true;
            case ShowMenu.LOGIN:
                return this.loggedUser !== null;
            case ShowMenu.LOGOUT:
                return this.loggedUser === null;
            default:
                throw new Error('ShowMenu has a wrong value');
        }
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
