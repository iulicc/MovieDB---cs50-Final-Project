import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesPageModule),
  },
  {
    path: 'tv-shows',
    loadChildren: () =>
      import('./pages/tv-shows/tv-shows.module').then(
        (m) => m.TvShowsPageModule
      ),
  },
  {
    path: 'find',
    loadChildren: () =>
      import('./pages/find/find.module').then((m) => m.FindPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
