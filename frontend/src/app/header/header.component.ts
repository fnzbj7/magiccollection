import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from '../model/user.model';
import { VersionService } from '../../environments/version.service';
import { faInfoCircle, faBars, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { SideMenuService } from '../shared/side-menu.service';
import { UpdatePwaService } from '../auth/update-pwa.service';
import { Subscription } from 'rxjs';
import { MenuService } from './menu.service';
import { MenuElement } from './model/menu-element.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    loggedUser: User;
    version: string;
    needUpdate = false;
    menus: MenuElement[];

    // Font-Aesome
    faInfoCircle = faInfoCircle;
    faArrowCircleUp = faArrowCircleUp;
    faBars = faBars;

    currentUserSub: Subscription;
    needUpdateSub: Subscription;

    constructor(
        private dialog: MatDialog,
        private authenticationService: AuthenticationService,
        private versionService: VersionService,
        public sideMenuService: SideMenuService,
        private updatePwaService: UpdatePwaService,
        private menuService: MenuService,
    ) {}

    ngOnInit() {
        this.currentUserSub = this.authenticationService.currentUserSubject.subscribe(user => {
            this.loggedUser = user;
        });
        this.needUpdateSub = this.updatePwaService.getNeedUpdateSubject().subscribe(needUpdate => {
            this.needUpdate = needUpdate;
        });
        this.version = this.versionService.VERSION;
        this.menus = this.menuService.getMenus();
    }

    openModalWithComponent() {
        this.dialog.open(AuthComponent);
        // this.bsModalRef = this.modalService.show(AuthComponent);
    }

    onUpdate() {
        window.location.reload();
    }

    onLogout() {
        this.authenticationService.logout();
    }

    ngOnDestroy() {
        if (this.currentUserSub) {
            this.currentUserSub.unsubscribe();
        }
        if (this.needUpdateSub) {
            this.needUpdateSub.unsubscribe();
        }
    }
}
