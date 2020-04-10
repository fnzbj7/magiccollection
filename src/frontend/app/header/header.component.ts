import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from '../model/user.model';
import { VersionService } from '../../environments/version.service';
import { faInfoCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { SideMenuService } from '../shared/side-menu.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    loggedUser: User;
    version: string;

    // Font-Aesome
    faInfoCircle = faInfoCircle;
    faBars = faBars;

    constructor(
        private dialog: MatDialog,
        private authenticationService: AuthenticationService,
        private versionService: VersionService,
        public sideMenuService: SideMenuService,
    ) {}

    ngOnInit() {
        this.authenticationService.currentUserSubject.subscribe(user => {
            this.loggedUser = user;
        });
        this.version = this.versionService.VERSION;
    }

    openModalWithComponent() {
        this.dialog.open(AuthComponent);
        // this.bsModalRef = this.modalService.show(AuthComponent);
    }

    onLogout() {
        this.authenticationService.logout();
    }
}
