import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from './shared/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Magicapp';

  constructor(private modalService: ModalService) {}

  removeModal() {
    this.modalService.destroy();
  }

}
