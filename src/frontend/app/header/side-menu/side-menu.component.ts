import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthComponent } from '../../auth/auth.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../auth/authentication.service';
import { User } from '../../model/user.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit, OnDestroy {
    loggedUser: User;
    currentUserSub: Subscription;

    constructor(private dialog: MatDialog, private authenticationService: AuthenticationService) {}

    ngOnInit() {
        this.currentUserSub = this.authenticationService.currentUserSubject.subscribe(user => {
            this.loggedUser = user;
        });
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
