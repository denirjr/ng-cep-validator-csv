import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    name: new FormControl(''),
    cep: new FormControl(''),
  });

  constructor(private homeStore$: HomeStoreService) {}

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
    this.homeStore$.editItem(this.editData?.id, this.editDataForm.value);
  }
}
