import {Directive, Input} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {map, Observable} from "rxjs";
import {CustomAsyncValidator} from "./model/custom-async-validator";

@Directive({
  selector: '[appCustomAsyncValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi: true}]
})
export class CustomAsyncValidatorDirective implements AsyncValidator {

  @Input('appCustomAsyncValidator')
  customAsyncValidator!: CustomAsyncValidator | undefined;

  constructor() { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (this.customAsyncValidator !== undefined) {
      this.customAsyncValidator.value = control.value;
      return this.customAsyncValidator.validate(control)
        .pipe(map(
          (response: any) => this.customAsyncValidator !== undefined ? this.customAsyncValidator.validationError(response): null
        ));
    }
    return new Observable<null>();
  }
}
