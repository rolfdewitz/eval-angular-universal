import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteStationComponent } from './favourite-station.component';

describe('FavouriteStationComponent', () => {
  let component: FavouriteStationComponent;
  let fixture: ComponentFixture<FavouriteStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteStationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
