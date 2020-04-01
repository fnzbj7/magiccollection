import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from './shared/modal.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    title = 'Magicapp';

    constructor(private modalService: ModalService, updates: SwUpdate) {
        updates.available.subscribe(event => {
            updates.activateUpdate().then(() => document.location.reload());
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
