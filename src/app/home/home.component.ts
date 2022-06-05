import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef } from '../shared/components/modal/models/modal-ref';
import { ModalService } from '../shared/components/modal/services/modal.service';
import { TableConfig } from '../shared/components/table/models/table-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('upload') private modalUploadRef!: TemplateRef<any>;
  @ViewChild('edit') private modalEditRef!: TemplateRef<any>;

  public modalRef!: ModalRef;

  public modalType = ModalType;

  public tableConfig: TableConfig = {
    columns: ['Nome', 'CEP', 'Score'],
    rows: [
      { name: 'Hydrogen', cep: '12345', score: '1.0079' },
      { name: 'Helium', cep: '12345', score: '4.0026' },
      { name: 'Lithium', cep: '12345', score: '6.941' },
      { name: 'Beryllium', cep: '12345', score: '9.0122' },
      { name: 'Boron', cep: '12345', score: '10.811' },
    ],
  };

  constructor(private modalService: ModalService) {}

  public showModal(type: ModalType): void {
    this.modalRef = this.modalService.open({
      templateRef:
        type === ModalType.UPLOAD ? this.modalUploadRef : this.modalEditRef,
      title: type === ModalType.UPLOAD ? 'Upload - CSV' : 'Editar dados',
    });
  }
  
}
enum ModalType {
  UPLOAD = 'upload',
  EDIT = 'edit',
}
