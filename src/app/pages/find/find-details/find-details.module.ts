import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindDetailsPageRoutingModule } from './find-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { FindDetailsPage } from './find-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindDetailsPageRoutingModule,
    SharedModule,
  ],
  declarations: [FindDetailsPage],
})
export class FindDetailsPageModule {}
