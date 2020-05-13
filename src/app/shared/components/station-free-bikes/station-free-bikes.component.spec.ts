import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationFreeBikesComponent } from './station-free-bikes.component';

describe('StationFreeBikesComponent', () => {
  let component: StationFreeBikesComponent;
  let fixture: ComponentFixture<StationFreeBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StationFreeBikesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationFreeBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
