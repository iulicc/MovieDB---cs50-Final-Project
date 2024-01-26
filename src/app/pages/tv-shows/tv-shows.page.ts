import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MediaService } from 'src/app/services/media.service';
import { MediaResponse, Media } from 'src/app/models/media.model';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.page.html',
  styleUrls: ['./tv-shows.page.scss'],
})
export class TvShowsPage implements OnInit {
  rawShows: Media[] = [];
  sortedShows: Media[] = [];
  displayedShows: Media[] = this.rawShows;
  isSortedByYearAsc: boolean = true;
  isSortedByTitleAsc: boolean = true;

  constructor(
    private mediaService: MediaService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.fetchShows();
  }

  async fetchShows(event?: any): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message: 'Loading',
      spinner: 'bubbles',
    });
    await loading.present();

    return new Promise<void>((resolve) => {
      this.mediaService
        .getRandomMedia('movie')
        .subscribe((res: MediaResponse) => {
          if (res.Response === 'False' && res.Error === 'Show not found!') {
            // Retrying in case no movies were found
            this.fetchShows();
          } else {
            loading.dismiss();
            this.rawShows = [...this.rawShows, ...res.Search];
            if (this.displayedShows === this.sortedShows) {
              // If sortedMovies was displayed, update it with new data
              this.sortByCurrentCriteria();
            } else {
              // If rawMovies was displayed, update it with new data
              this.displayedShows = this.rawShows;
            }
            event?.target.complete();
            resolve();
          }
        });
    });
  }

  loadMore(event: any) {
    this.fetchShows(event);
  }

  sortByYear(): void {
    this.sortedShows = this.rawShows.slice().sort((a: Media, b: Media) => {
      const yearA = Number(a.Year);
      const yearB = Number(b.Year);

      if (isNaN(yearA) || isNaN(yearB)) {
        return 0;
      }

      return this.isSortedByYearAsc ? yearA - yearB : yearB - yearA;
    });
    this.isSortedByYearAsc = !this.isSortedByYearAsc;
    this.displayedShows = this.sortedShows;
  }

  sortByTitle(): void {
    this.sortedShows = this.rawShows.slice().sort((a: Media, b: Media) => {
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
    this.displayedShows = this.sortedShows;
  }

  resetSort(): void {
    this.displayedShows = this.rawShows;
    this.isSortedByYearAsc = true;
    this.isSortedByTitleAsc = true;
  }

  sortByCurrentCriteria(): void {
    if (this.displayedShows === this.sortedShows) {
      if (this.sortedShows[0]?.Year) {
        this.sortByYear();
      } else {
        this.sortByTitle();
      }
    }
  }
}
