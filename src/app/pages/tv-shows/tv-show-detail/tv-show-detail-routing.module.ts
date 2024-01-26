import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvShowDetailPage } from './tv-show-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TvShowDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowDetailPageRoutingModule {}
