import { Component, OnInit } from '@angular/core';
import { CsvService } from './services/csv.service';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.scss'],
})
export class CsvUploadComponent implements OnInit {
  constructor(private csv: CsvService) {}

  ngOnInit(): void {}

  public getCsv($event: any) {
    this.csv.get($event);
  }
}
