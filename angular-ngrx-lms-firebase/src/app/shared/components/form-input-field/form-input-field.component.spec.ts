import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputFieldComponent } from './form-input-field.component';

describe('FormInputFieldComponent', () => {
  let component: FormInputFieldComponent;
  let fixture: ComponentFixture<FormInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
