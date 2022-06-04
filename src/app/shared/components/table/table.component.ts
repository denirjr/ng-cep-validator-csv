import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Row, TableConfig } from './models/table-config';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input()
  public tableConfig: TableConfig = {
    columns: ['', '', ''],
    rows: [
      { name: '', cep: '', score: '' },
      { name: '', cep: '', score: '' },
      { name: '', cep: '', score: '' },
      { name: '', cep: '', score: '' },
      { name: '', cep: '', score: '' },
    ],
  };

  @Output()
  onAction = new EventEmitter();

  public getTableItem(index: number, item: Row) {
    this.onAction.emit();
  }
}
