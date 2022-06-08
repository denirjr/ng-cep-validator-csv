import { Component } from '@angular/core';
import { CsvRecord } from 'src/app/shared/components/csv-upload/services/models/csv-record';

import { HomeStoreService } from '../../store/home-store.service';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss'],
})
export class UploadModalComponent {
  constructor(private homeStore: HomeStoreService) {}

  public receiveCSVRecord(record: CsvRecord): void {
    this.homeStore.set$(record);
  }
}
