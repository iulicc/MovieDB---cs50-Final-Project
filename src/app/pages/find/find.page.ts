import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MediaService } from 'src/app/services/media.service';

import { MediaResponse, Media } from 'src/app/models/media.model';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {
  search: Media[] = [];
  searchTerm: string = '';
  noResultsFound: boolean = false;

  constructor(
    private mediaService: MediaService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async searchMovies() {
    if (this.searchTerm) {
      const loading = await this.loadingCtrl.create({
        message: 'Searching...',
        spinner: 'bubbles',
      });
      await loading.present();

      this.mediaService.getSearchResults(this.searchTerm).subscribe(
        (response: MediaResponse) => {
          loading.dismiss();
          if (response.Response === 'False') {
            this.noResultsFound = true;
            this.search = [];
          } else {
            this.noResultsFound = false;
            this.search = response.Search;
          }
        },
        (error) => {
          loading.dismiss();
          console.log(error);
        }
      );
    }
  }

  clearSearchResults() {
    this.search = [];
    this.noResultsFound = false;
  }
}
