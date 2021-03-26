import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploredetailComponent } from './exploredetail.component';

describe('ExploredetailComponent', () => {
  let component: ExploredetailComponent;
  let fixture: ComponentFixture<ExploredetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploredetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
