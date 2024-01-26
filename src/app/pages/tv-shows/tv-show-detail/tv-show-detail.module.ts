import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvShowDetailPageRoutingModule } from './tv-show-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { TvShowDetailPage } from './tv-show-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvShowDetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [TvShowDetailPage],
})
export class TvShowDetailPageModule {}
