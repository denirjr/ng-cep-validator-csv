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

  constructor(private csv: CsvService) {}

  public getCsv($event: Event) {
    this.csv.read($event).subscribe((record) => this.csvRecords.emit(record));
  }
}
