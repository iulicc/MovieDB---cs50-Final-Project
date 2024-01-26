import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

import { CustomHeaderComponent } from '../components/custom-header/custom-header.component';
import { CustomCardComponent } from '../components/custom-card/custom-card.component';
import { CustomDetailsPageComponent } from '../components/custom-details-page/custom-details-page.component';
import { CustomSortButtonsComponent } from '../components/custom-sort-buttons/custom-sort-buttons.component';

@NgModule({
  declarations: [
    CustomHeaderComponent,
    CustomCardComponent,
    CustomDetailsPageComponent,
    CustomSortButtonsComponent,
  ],
  imports: [CommonModule, IonicModule, RouterLink],
  exports: [
    CustomHeaderComponent,
    CustomCardComponent,
    CustomDetailsPageComponent,
    CustomSortButtonsComponent,
  ],
})
export class SharedModule {}
