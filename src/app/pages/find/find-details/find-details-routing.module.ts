import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindDetailsPage } from './find-details.page';

const routes: Routes = [
  {
    path: '',
    component: FindDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindDetailsPageRoutingModule {}
