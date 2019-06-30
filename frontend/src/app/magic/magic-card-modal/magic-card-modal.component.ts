import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-magic-card-modal',
  templateUrl: './magic-card-modal.component.html',
  styleUrls: ['./magic-card-modal.component.css']
})
export class MagicCardModalComponent {

  @Input() cardImgPng;
  @Input() cardImgWebp;

}
