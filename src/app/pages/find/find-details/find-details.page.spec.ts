import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindDetailsPage } from './find-details.page';

describe('FindDetailsPage', () => {
  let component: FindDetailsPage;
  let fixture: ComponentFixture<FindDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FindDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
