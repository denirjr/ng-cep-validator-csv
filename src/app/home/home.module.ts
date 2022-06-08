import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { UploadModalComponent } from './views/upload-modal/upload-modal.component';
import { EditModalComponent } from './views/edit-modal/edit-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, UploadModalComponent, EditModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
