import { Injectable } from '@angular/core';
import { DomService } from './dom.service';
import { ModalInterface } from './modal.interface';

@Injectable({ providedIn: 'root' })
export class ModalService {
    constructor(private domService: DomService) {}

    private modalElementId = 'modal-container';
    private overlayElementId = 'overlay';

    init(component: ModalInterface, inputs: object, outputs: object) {
        const componentConfig = {
            inputs,
            outputs,
        };
        this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
        document.getElementsByTagName('BODY')[0].classList.add('modal-open');
        const modalElement = document.getElementById(this.modalElementId);
        if (modalElement !== null) {
            modalElement.className = 'show';
        }
        const overlayElemen = document.getElementById(this.overlayElementId);
        if (overlayElemen !== null) {
            overlayElemen.className = 'show';
        }
    }

    destroy() {
        this.domService.removeComponent();
        const modalElement = document.getElementById(this.modalElementId);
        if (modalElement !== null) {
            modalElement.classList.add('hidden');
            modalElement.classList.remove('show');
        }
        const overlayElement = document.getElementById(this.overlayElementId);
        if (overlayElement !== null) {
            overlayElement.classList.add('hidden');
            overlayElement.classList.remove('show');
        }
        document.getElementsByTagName('BODY')[0].classList.remove('modal-open');
    }
}
