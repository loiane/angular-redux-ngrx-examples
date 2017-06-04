import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonFormComponent } from './lesson-form.component';

describe('LessonFormComponent', () => {
  let component: LessonFormComponent;
  let fixture: ComponentFixture<LessonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
