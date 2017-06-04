import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-input-field',
  templateUrl: './form-input-field.component.html',
  styleUrls: ['./form-input-field.component.scss']
})
export class FormInputFieldComponent implements OnInit {

  @Input() fieldName: string;
  @Input() invalidMsg: string;
  @Input() labelName: string;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  isValid(){
    return this.form.controls[this.fieldName].touched && 
      !this.form.controls[this.fieldName].valid
  }

}
