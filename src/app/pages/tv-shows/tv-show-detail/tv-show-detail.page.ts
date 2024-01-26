import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';

import { MediaDetails } from 'src/app/models/media.model';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.page.html',
  styleUrls: ['./tv-show-detail.page.scss'],
})
export class TvShowDetailPage implements OnInit {
  show: MediaDetails | null = null;
  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService
  ) {}

  ngOnInit() {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.mediaService.getMediaDetails(id).subscribe((res: MediaDetails) => {
      this.show = res;
    });
  }
}
