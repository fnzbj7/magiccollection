import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from '../model/user.model';
import { VersionService } from '../../environments/version.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';

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

    constructor(
        private dialog: MatDialog,
        private authenticationService: AuthenticationService,
        private versionService: VersionService,
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
