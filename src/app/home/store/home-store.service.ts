import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CsvRecord } from 'src/app/shared/components/csv-upload/services/models/csv-record';

import { addRowsRule } from './helpers/add-row-rule.helper';

@Injectable({
  providedIn: 'root',
})
export class HomeStoreService {
  private readonly initialRecord: CsvRecord = {
    headers: [],
    rows: [],
  };
  private record = new BehaviorSubject<CsvRecord>(this.initialRecord);

  private get lastRecord(): CsvRecord {
    return this.record.getValue();
  }

  public get$(): Observable<CsvRecord> {
    return this.record.asObservable();
  }

  public set(record: CsvRecord): void {
    this.record.next({
      headers: record?.headers,
      rows: addRowsRule(this.lastRecord.rows, record?.rows),
    });
  }

  // @TODO - Should type item value
  public editItem(receivedId: number, item: any): void {
    const toEditItem = (data: any, id: number) =>
      id === receivedId
        ? {
            ...data,
            name: item?.name,
            cep: item?.cep,
            isValid: item?.isValid,
          }
        : data;

    const editedRecord = this.lastRecord?.rows.map(toEditItem);

    this.record.next({
      headers: this.lastRecord?.headers,
      rows: editedRecord,
    });
  }

  public deleteAll(): void {
    this.record.next(this.initialRecord);
  }

  public deleteItem(receivedId: number): void {
    this.record.next({
      headers: this.lastRecord?.headers,
      rows: this.lastRecord?.rows.filter((_, id) => id !== receivedId),
    });
  }
}
