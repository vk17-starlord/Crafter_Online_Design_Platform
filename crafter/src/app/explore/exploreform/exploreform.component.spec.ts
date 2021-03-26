import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreformComponent } from './exploreform.component';

describe('ExploreformComponent', () => {
  let component: ExploreformComponent;
  let fixture: ComponentFixture<ExploreformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
