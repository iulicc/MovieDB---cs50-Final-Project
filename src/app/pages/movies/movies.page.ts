import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MediaService } from 'src/app/services/media.service';
import { MediaResponse, Media } from 'src/app/models/media.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  rawMovies: Media[] = [];
  sortedMovies: Media[] = [];
  displayedMovies: Media[] = this.rawMovies;
  isSortedByYearAsc: boolean = true;
  isSortedByTitleAsc: boolean = true;

  constructor(
    private mediaService: MediaService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.fetchMovies();
  }

  async fetchMovies(event?: any): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message: 'Loading',
      spinner: 'bubbles',
    });
    await loading.present();

    return new Promise<void>((resolve) => {
      this.mediaService
        .getRandomMedia('movie')
        .subscribe((res: MediaResponse) => {
          if (res.Response === 'False' && res.Error === 'Movie not found!') {
            // Retrying in case no movies were found
            this.fetchMovies();
          } else {
            loading.dismiss();
            this.rawMovies = [...this.rawMovies, ...res.Search];
            if (this.displayedMovies === this.sortedMovies) {
              // If sortedMovies was displayed, update it with new data
              this.sortByCurrentCriteria();
            } else {
              // If rawMovies was displayed, update it with new data
              this.displayedMovies = this.rawMovies;
            }
            event?.target.complete();
            resolve();
          }
        });
    });
  }

  loadMore(event: any) {
    this.fetchMovies(event);
  }

  sortByYear(): void {
    this.sortedMovies = this.rawMovies.slice().sort((a: Media, b: Media) => {
      const yearA = Number(a.Year);
      const yearB = Number(b.Year);

      if (isNaN(yearA) || isNaN(yearB)) {
        return 0;
      }

      return this.isSortedByYearAsc ? yearA - yearB : yearB - yearA;
    });
    this.isSortedByYearAsc = !this.isSortedByYearAsc;
    this.displayedMovies = this.sortedMovies;
  }

  sortByTitle(): void {
    this.sortedMovies = this.rawMovies.slice().sort((a: Media, b: Media) => {
      const titleA = a.Title.toLowerCase();
      const titleB = b.Title.toLowerCase();

      if (titleA < titleB) {
        return this.isSortedByTitleAsc ? -1 : 1;
      } else if (titleA > titleB) {
        return this.isSortedByTitleAsc ? 1 : -1;
      } else {
        return 0;
      }
    });
    this.isSortedByTitleAsc = !this.isSortedByTitleAsc;
    this.displayedMovies = this.sortedMovies;
  }

  resetSort(): void {
    this.displayedMovies = this.rawMovies;
    this.isSortedByYearAsc = true;
    this.isSortedByTitleAsc = true;
  }

  // Additional method to reapply current sorting criteria
  sortByCurrentCriteria(): void {
    if (this.displayedMovies === this.sortedMovies) {
      if (this.sortedMovies[0]?.Year) {
        this.sortByYear();
      } else {
        this.sortByTitle();
      }
    }
  }
}
