import { Component, EventEmitter, Output } from '@angular/core';

import { CsvService } from './services/csv.service';
import { CsvRecord } from './services/models/csv-record';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.scss'],
})
export class CsvUploadComponent {
  @Output()
  public csvRecords: EventEmitter<CsvRecord> = new EventEmitter();

  public isInvalidUpload = false;

  constructor(private csv: CsvService) {}

  public getCsv($event: Event) {
    this.csv.read($event).subscribe((record) => {
      if (this.isInValid(record)) {
        this.isInvalidUpload = true;
      } else {
        this.csvRecords.emit(record);
      }
    });
  }

  private isInValid(record: CsvRecord): boolean {
    const serializedHeader = JSON.stringify(record?.headers);
    const defaultHeader = '["Nome","CEP","Score"]';

    return record?.rows?.length > 5 || serializedHeader !== defaultHeader;
  }
}
