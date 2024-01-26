import { Component, OnInit, Input } from '@angular/core';
import { MediaDetails } from 'src/app/models/media.model';

@Component({
  selector: 'app-custom-details-page',
  templateUrl: './custom-details-page.component.html',
  styleUrls: ['./custom-details-page.component.scss'],
})
export class CustomDetailsPageComponent implements OnInit {
  @Input() item: MediaDetails | null = null;

  constructor() {}

  ngOnInit() {}
}
