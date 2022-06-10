import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CsvRow } from 'src/app/shared/components/csv-upload/services/models/csv-record';
import { SearchCepService } from 'src/app/shared/services/search-cep/search-cep.service';
import { ConsultService } from '../../services/consult.service';

import { HomeStoreService } from '../../store/home-store.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnChanges {
  @Input()
  public editData: any;

  public editDataForm = new FormGroup({
    name: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
  });

  constructor(
    private homeStore$: HomeStoreService,
    private searchCep$: SearchCepService
  ) {}

  ngOnChanges(): void {
    this.editDataForm.patchValue({
      name: this.editData?.item?.name,
      cep: this.editData?.item?.cep,
    });
  }

  public delete(): void {
    this.homeStore$.deleteItem(this.editData?.id);
  }

  public save(): void {
    this.searchCep$.fetch(this.editDataForm.value.cep).subscribe((res) => {
      const editedData = {
        cep: this.editDataForm?.value?.cep,
        isValid: res?.ok,
        name: this.editDataForm?.value?.name,
      };
      this.homeStore$.editItem(this.editData?.id, editedData);
    });
  }
}
