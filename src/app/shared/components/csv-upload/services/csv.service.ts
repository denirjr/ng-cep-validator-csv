import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CsvService {
  public get($event: Event): void {
    const input = $event.target as HTMLInputElement;
    const reader = new FileReader();
    const file: File = (input.files as FileList)[0];

    if (this.isValidCSVFile(file)) {
      reader.readAsText(file);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecords = (<string>csvData).split(/\r\n|\n/);

        csvRecords.forEach((item, index) => {
          const currentRecord = (<string>csvRecords[index]).split(',');
          console.log(currentRecord);
        });
      };

      reader.onerror = function () {
        console.error('error is occured while reading file!');
      };
    }
  }

  private isValidCSVFile(file: File) {
    return file?.name?.endsWith('.csv');
  }
}
