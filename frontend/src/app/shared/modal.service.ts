import { Injectable } from '@angular/core';
import { DomService } from './dom.service';

@Injectable({providedIn: 'root'})
export class ModalService {

  constructor(private domService: DomService) { }

  private modalElementId = 'modal-container';
  private overlayElementId = 'overlay';

  init(component: any, inputs: object, outputs: object) {
    const componentConfig = {
      inputs: inputs,
      outputs: outputs
    };
    this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementsByTagName('BODY')[0].classList.add('modal-open');
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';
  }

  destroy() {
    this.domService.removeComponent();
    const modalElement = document.getElementById(this.modalElementId);
    modalElement.classList.add('hidden');
    modalElement.classList.remove('show');
    const overlayElement = document.getElementById(this.overlayElementId);
    overlayElement.classList.add('hidden');
    overlayElement.classList.remove('show');
    document.getElementsByTagName('BODY')[0].classList.remove('modal-open');
  }
}
