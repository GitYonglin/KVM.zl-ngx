import { Component, OnInit, Input } from '@angular/core';
import { FieldBase } from './form-field/field-base';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html'
})

export class FormControlComponent implements OnInit {
  error: string;

  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.form.valueChanges
    .subscribe(data => {
      // console.log(this.form.controls[this.field.key].errors);
      const error = this.form.controls[this.field.key].errors;
      if (error) {
        const errors = [];
        // tslint:disable-next-line:forin
        for (const key in error) {
          errors.push(this.field.errors[key]);
        }
        this.error = errors.join(',');
      } else {
        this.error = null;
      }
    });
  }
}
