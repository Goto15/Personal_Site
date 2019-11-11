import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicRatingsComponent } from './epic-ratings.component';

describe('EpicRatingsComponent', () => {
  let component: EpicRatingsComponent;
  let fixture: ComponentFixture<EpicRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
