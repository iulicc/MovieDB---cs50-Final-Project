import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-sort-buttons',
  templateUrl: './custom-sort-buttons.component.html',
  styleUrls: ['./custom-sort-buttons.component.scss'],
})
export class CustomSortButtonsComponent implements OnInit {
  @Input() isSortedByYearAsc!: boolean;
  @Input() isSortedByTitleAsc!: boolean;

  @Output() sortByYear = new EventEmitter<void>();
  @Output() sortByTitle = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onSortByYear(): void {
    this.sortByYear.emit();
  }

  onSortByTitle(): void {
    this.sortByTitle.emit();
  }
}
