import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsListItemComponent } from './lessons-list-item.component';

describe('LessonsListItemComponent', () => {
  let component: LessonsListItemComponent;
  let fixture: ComponentFixture<LessonsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
