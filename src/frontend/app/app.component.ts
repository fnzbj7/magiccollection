import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from './shared/modal.service';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    title = 'Magicapp';

    constructor(
        private modalService: ModalService,
        updates: SwUpdate,
        private snackbar: MatSnackBar,
    ) {
        updates.available.subscribe(event => {
            const snack = this.snackbar.open('Update Available', 'Reload', {
                duration: 6000,
                horizontalPosition: 'right',
            });

            snack.onAction().subscribe(() => {
                window.location.reload();
            });
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
