import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/table/table.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { CsvUploadComponent } from './components/csv-upload/csv-upload.component';

@NgModule({
  declarations: [
    TableComponent,
    ButtonComponent,
    TextFieldComponent,
    ModalComponent,
    CsvUploadComponent,
  ],
  imports: [CommonModule],
  exports: [TableComponent, ButtonComponent, CsvUploadComponent],
})
export class SharedModule {}
