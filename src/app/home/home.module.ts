import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { UploadModalComponent } from './views/upload-modal/upload-modal.component';
import { EditModalComponent } from './views/edit-modal/edit-modal.component';



@NgModule({
  declarations: [
    HomeComponent,
    UploadModalComponent,
    EditModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
