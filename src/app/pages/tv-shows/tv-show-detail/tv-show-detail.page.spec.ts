import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TvShowDetailPage } from './tv-show-detail.page';

describe('TvShowDetailPage', () => {
  let component: TvShowDetailPage;
  let fixture: ComponentFixture<TvShowDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TvShowDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
