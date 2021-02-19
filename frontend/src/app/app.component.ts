import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ModalService } from './shared/modal.service';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SideMenuService } from './shared/side-menu.service';
import { User } from './model/user.model';
import { UpdatePwaService } from './auth/update-pwa.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
    title = 'magiccollection';
    opened = false;
    loggedUser: User;

    constructor(
        private modalService: ModalService,
        private updates: SwUpdate,
        private snackbar: MatSnackBar,
        private sideMenuService: SideMenuService,
        private updatePwaService: UpdatePwaService,
        private router: Router,
    ) {}

    ngOnInit() {
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
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                this.opened = false;
            }
        });
    }

    removeModal() {
        const modalContainer = document.getElementById('modal-container');
        if (modalContainer) {
            modalContainer.classList.remove('show-after');
        }
        setTimeout(() => {
            const overlay = document.getElementById('overlay');
            if (overlay) {
                overlay.classList.remove('show-after');
            }
        }, 150);
        setTimeout(() => {
            this.modalService.destroy();
        }, 300);
    }
}
