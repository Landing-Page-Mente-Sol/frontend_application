import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {CustomValidator} from "./model/custom-validator";
import {validationError} from "./model/validation-error";

@Directive({
  selector: '[appCustomValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
})
export class CustomValidatorDirective  implements Validator {

  @Input('appCustomValidator')
  customValidator!: CustomValidator

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    this.customValidator.value = control.value;
    return this.customValidator.validate(control) ? validationError(this.customValidator.errorName, control.value) : null;
  }

}
