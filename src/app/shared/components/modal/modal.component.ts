import { Component, HostBinding, HostListener } from '@angular/core';

import { fade } from '../../animation/fade';
import { ModalConfig } from './models/modal-config';
import { ModalRef } from './models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent {
  @HostBinding('@fade') fade = true;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.modalRef!.close();
  }

  public config!: ModalConfig;
  public modalRef!: ModalRef;
}
