import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Card } from '../../../model/card.model';

@Component({
    selector: 'app-magic-card-modal',
    templateUrl: './magic-card-modal.component.html',
    styleUrls: ['./magic-card-modal.component.css'],
})
export class MagicCardModalComponent implements OnInit, AfterViewInit {
    @Input() magicCard!: Card;

    isLoggedIn!: boolean;

    constructor(private authenticationService: AuthenticationService) {}

    ngOnInit(): void {
        this.isLoggedIn = this.authenticationService.isLoggedIn();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            const modalContainer = document.getElementById('modal-container');
            if (modalContainer) {
                modalContainer.classList.add('show-after');
            }
            const overlay = document.getElementById('overlay');
            if (overlay) {
                overlay.classList.add('show-after');
            }
        }, 10);
    }
}
