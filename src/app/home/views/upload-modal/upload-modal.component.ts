import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  CsvRecord,
  CsvRow,
} from 'src/app/shared/components/csv-upload/services/models/csv-record';

import { ConsultService } from '../../services/consult.service';
import { HomeStoreService } from '../../store/home-store.service';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss'],
})
export class UploadModalComponent {
  constructor(
    private homeStore$: HomeStoreService,
    private consult: ConsultService
  ) {}

  public receiveCSVRecord(record: CsvRecord): void {
    this.consult
      .checkCepData(record)
      .pipe(tap(console.log))
      .subscribe(
        (rowsWithCepValidation: CsvRow[]) =>
          this.homeStore$.set({
            headers: record?.headers,
            rows: rowsWithCepValidation,
          }),
        (error) => console.error('Error: ', error)
      );
  }
}
