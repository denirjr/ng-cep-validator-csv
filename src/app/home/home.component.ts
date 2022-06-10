import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { ModalRef } from '../shared/components/modal/models/modal-ref';
import { ModalService } from '../shared/components/modal/services/modal.service';
import { TableConfig } from '../shared/components/table/models/table-config';
import { ConsultService } from './services/consult.service';
import { HomeStoreService } from './store/home-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('upload') private modalUploadRef!: TemplateRef<any>;
  @ViewChild('edit') private modalEditRef!: TemplateRef<any>;
  @ViewChild('consult') private modalConsultRef!: TemplateRef<any>;

  public modalRef!: ModalRef;
  public modalType = ModalType;
  public tableConfig: TableConfig = {
    columns: [],
    rows: [],
  };
  // @TODO - Should have type
  public editModalData: any;

  constructor(
    private modalService: ModalService,
    private homeStore$: HomeStoreService
  ) {}

  ngOnInit(): void {
    this.homeStore$.get$().subscribe((res) => {
      this.tableConfig.columns = res?.headers;
      this.tableConfig.rows = res?.rows;
      this.modalRef?.close();
    });
  }

  public editTableData($event: any): void {
    this.showModal(ModalType.EDIT);
    this.editModalData = $event;
  }

  public showModal(type: ModalType): void {
    this.modalRef = this.modalService.open({
      templateRef: this.chooseModalProperties(type)!.templateRef,
      title: this.chooseModalProperties(type)!.title,
    });
  }

  private chooseModalProperties(type: ModalType): ModalProperty {
    switch (type) {
      case ModalType.UPLOAD:
        return {
          title: 'Upload - CSV',
          templateRef: this.modalUploadRef,
        };

      case ModalType.EDIT:
        return {
          title: 'Editar dados',
          templateRef: this.modalEditRef,
        };

      default:
        return {
          title: 'Consulta Cep',
          templateRef: this.modalConsultRef,
        };
    }
  }

  public deleteAllTableData(): void {
    this.homeStore$.deleteAll();
  }

  public disableWhenNoData(): boolean {
    return this.tableConfig?.rows?.length < 1;
  }
  
  public disableWhenReachLimit(): boolean {
    return this.tableConfig?.rows?.length === 5;
  }
}

enum ModalType {
  UPLOAD = '0',
  EDIT = '1',
  CONSULT = '2',
}

interface ModalProperty {
  title: string;
  templateRef: TemplateRef<any>;
}
