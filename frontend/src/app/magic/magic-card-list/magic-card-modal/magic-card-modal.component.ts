import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Card } from '../../../model/card.model';

@Component({
    selector: 'app-magic-card-modal',
    templateUrl: './magic-card-modal.component.html',
    styleUrls: ['./magic-card-modal.component.css'],
})
export class MagicCardModalComponent implements AfterViewInit {
    @Input() magicCard: Card;

    ngAfterViewInit() {
        setTimeout(() => {
            document.getElementById('modal-container').classList.add('show-after');
            document.getElementById('overlay').classList.add('show-after');
        }, 10);
    }
}
