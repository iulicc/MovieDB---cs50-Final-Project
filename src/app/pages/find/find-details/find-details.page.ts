import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';

import { MediaDetails } from 'src/app/models/media.model';

@Component({
  selector: 'app-find-details',
  templateUrl: './find-details.page.html',
  styleUrls: ['./find-details.page.scss'],
})
export class FindDetailsPage implements OnInit {
  search: MediaDetails | null = null;

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService
  ) {}

  ngOnInit() {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.mediaService.getMediaDetails(id).subscribe((res: MediaDetails) => {
      this.search = res;
      console.log(res);
    });
  }
}
