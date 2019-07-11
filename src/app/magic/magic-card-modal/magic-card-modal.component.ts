import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-magic-card-modal',
  templateUrl: './magic-card-modal.component.html',
  styleUrls: ['./magic-card-modal.component.css']
})
export class MagicCardModalComponent implements AfterViewInit {

  @Input() cardImgPng;
  @Input() cardImgWebp;


  ngAfterViewInit() {
    setTimeout(() => {
      document.getElementById('modal-container').classList.add('show-after');
      document.getElementById('overlay').classList.add('show-after');
    }, 10);
  }


}
