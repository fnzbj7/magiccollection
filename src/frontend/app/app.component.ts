import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from './shared/modal.service';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SideMenuService } from './shared/side-menu.service';
import { AuthenticationService } from './auth/authentication.service';
import { AuthComponent } from './auth/auth.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from './model/user.model';
import { UpdatePwaService } from './auth/update-pwa.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    title = 'Magicapp';
    opened = false;
    loggedUser: User;

    constructor(
        private modalService: ModalService,
        private updates: SwUpdate,
        private snackbar: MatSnackBar,
        private sideMenuService: SideMenuService,
        private updatePwaService: UpdatePwaService,
    ) {
        this.updates.available.subscribe(event => {
            this.updatePwaService.setNeedUpdateSubject(true);
            const snack = this.snackbar.open('Update Available', 'Reload', {
                duration: 6000,
                horizontalPosition: 'right',
            });

            snack.onAction().subscribe(() => {
                window.location.reload();
            });
        });

        this.sideMenuService.openSideMenuSub.subscribe(() => {
            this.opened = !this.opened;
        });
    }

    removeModal() {
        document.getElementById('modal-container').classList.remove('show-after');
        setTimeout(() => {
            document.getElementById('overlay').classList.remove('show-after');
        }, 150);
        setTimeout(() => {
            this.modalService.destroy();
        }, 300);
    }
}
