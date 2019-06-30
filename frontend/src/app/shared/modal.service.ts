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
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';
  }

  destroy() {
    this.domService.removeComponent();
    document.getElementById(this.modalElementId).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';
  }
}
