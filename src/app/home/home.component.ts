import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef } from '../shared/components/modal/models/modal-ref';
import { ModalService } from '../shared/components/modal/services/modal.service';
import { TableConfig } from '../shared/components/table/models/table-config';
import { HomeStoreService } from './store/home-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('upload') private modalUploadRef!: TemplateRef<any>;
  @ViewChild('edit') private modalEditRef!: TemplateRef<any>;

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
    this.showModal(this.modalType.EDIT);
    this.editModalData = $event;
  }

  public showModal(type: ModalType): void {
    this.modalRef = this.modalService.open({
      templateRef:
        type === ModalType.UPLOAD ? this.modalUploadRef : this.modalEditRef,
      title: type === ModalType.UPLOAD ? 'Upload - CSV' : 'Editar dados',
    });
  }

  public deleteAllTableData(): void {
    this.homeStore$.deleteAll();
  }
}

enum ModalType {
  UPLOAD = 'upload',
  EDIT = 'edit',
}
