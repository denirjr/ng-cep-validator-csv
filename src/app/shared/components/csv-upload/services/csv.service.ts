import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { CsvRecord } from './models/csv-record';

@Injectable({
  providedIn: 'root',
})
export class CsvService {
  public read($event: Event): Observable<CsvRecord> {
    const input = $event.target as HTMLInputElement;
    const reader = new FileReader();
    const file: File = (input.files as FileList)[0];

    reader.readAsText(file);

    return new Observable((observer: Subscriber<CsvRecord>) => {
      reader.onload = () => {
        const csvData = reader?.result;
        const csvRecords = (<string>csvData)?.split(/\r\n|\n/);

        observer.next(this.parseCsvRecord(csvRecords));
        observer.complete();
      };

      reader.onerror = () =>
        observer.error('error is occurred while reading file!');
    });
  }

  private parseCsvRecord(csvRecords: string[]): CsvRecord {
    const headerPositionToSplice = 1;
    const headers = (<string>csvRecords[0])?.split(',');

    if (!csvRecords || headers?.length !== 3) {
      return {
        headers: [],
        rows: [],
      };
    }

    const rows = csvRecords
      .map((_, index) => {
        const currentRecords = (<string>csvRecords[index])?.split(',');
        return {
          name: currentRecords[0].trim(),
          cep: currentRecords[1].trim(),
          score: currentRecords[2].trim(),
          isValid: false,
        };
      })
      .splice(headerPositionToSplice);

    return {
      headers: headers,
      rows: rows,
    };
  }

  //@TODO - should implement
  private isValidCSVFile(file: File) {
    return file?.name?.endsWith('.csv');
  }
}
