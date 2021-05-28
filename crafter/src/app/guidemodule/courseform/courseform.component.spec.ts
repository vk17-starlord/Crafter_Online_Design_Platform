import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseformComponent } from './courseform.component';

describe('CourseformComponent', () => {
  let component: CourseformComponent;
  let fixture: ComponentFixture<CourseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
