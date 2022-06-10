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
      { name: '', cep: '', score: '', isValid: false },
      { name: '', cep: '', score: '', isValid: false },
      { name: '', cep: '', score: '', isValid: false },
      { name: '', cep: '', score: '', isValid: false },
      { name: '', cep: '', score: '', isValid: false },
    ],
  };

  @Output()
  public onAction = new EventEmitter();

  public getTableItem(index: number, item: Row) {
    this.onAction.emit({
      id: index,
      item: item,
    });
  }
}
