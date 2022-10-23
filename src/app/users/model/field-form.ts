

import {NgForm} from "@angular/forms";
import {CustomAsyncValidator} from "../../shared/directives/model/custom-async-validator";
import {CustomValidator} from "../../shared/directives/model/custom-validator";

export interface FieldForm {
  field: string,
  label: string,
  placeholder: string,
  requerid: boolean;
  type: string,
  value: string,
  /**
  * For Async Validation, is asignable to [appCustomAsyncValidator] directive
  * */
  customAsyncValidator?: CustomAsyncValidator,
  /*
  * For normal Validation, is asignable to [appCustomValidator] directive
  * */
  customValidator?: CustomValidator

  crossWith?: FieldForm
  maxLength?: string | number;
  pattern?: string;
  minLength?: string | number;
  hide?: boolean
}

export function crossFieldWith(fields: FieldForm[], _this: number, _and: number) {
  if(fields.length > 1) {
    if((_this > 0 && _and > 0) &&
      (_this < fields.length && _and < fields.length) &&
      (_this !== _and))
      fields[_this].crossWith = fields[_and];
  }
}

export function crossFieldValidator(field: FieldForm, form: NgForm): boolean {
  let validate = false;
  if(field.customAsyncValidator !== undefined) {
    validate = form?.controls[field.field]?.hasError(field.customAsyncValidator.errorName);
  }

  return validate;
}
