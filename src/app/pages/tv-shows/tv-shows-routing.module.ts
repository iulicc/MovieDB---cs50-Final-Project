import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvShowsPage } from './tv-shows.page';

const routes: Routes = [
  {
    path: '',
    component: TvShowsPage,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./tv-show-detail/tv-show-detail.module').then(
        (m) => m.TvShowDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowsPageRoutingModule {}
