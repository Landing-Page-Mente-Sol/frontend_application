import {CustomValidator} from "../directives/model/custom-validator";
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {validationError} from "../directives/model/validation-error";

export class ForbiddenValue implements CustomValidator {
  errorName: string = 'forbiddenValue';
  validateValue: boolean = false;
  value: any;
  forbiddenValue: string | string[]

  public static validateForbidden(forbiddenValues: string | string[], value: string): boolean {
    let validateValue = false;
    if(typeof forbiddenValues === 'string') {
      validateValue = new RegExp(forbiddenValues, 'i').test(value);
    }
    else {
      for(let i = 0; i < forbiddenValues.length; ++i) {
        let tester = RegExp(forbiddenValues[i], 'i');
        validateValue = tester.test(value);
      }
    }
    return validateValue;

  }

  constructor(forbiddenValue: string | string[], errorName?: string) {
    if(errorName !== undefined)
      this.errorName = errorName;

    this.forbiddenValue = forbiddenValue;
  }

  validate(): boolean {
    this.validateValue = ForbiddenValue.validateForbidden(this.forbiddenValue, this.value);
    return this.validateValue;
  }
}

export class IsEqualsTo implements CustomValidator {
  errorName: string = 'isEquals';
  validateValue: boolean = false;
  value: any;
  crossWith?: string;

  private readonly forEquals: string | string[] | number | number[];

  constructor(forEquals: string | string[] | number | number[], errorName?: string, crossWith?: string) {
    if(errorName !== undefined)
      this.errorName = errorName;
    if(crossWith !== undefined)
      this.crossWith = crossWith;

    this.forEquals = forEquals;
  }

  static validateEquals(forEquals: string | string[] | number | number[], value: any) {
    if(typeof forEquals === 'string' || typeof forEquals === 'number')
      return forEquals.toString().toLowerCase() === value.toString().toLowerCase();
    else {
      for(let item of forEquals) {
        if(item.toString().toLowerCase() === value.toString().toLowerCase())
          return true;
      }
    }

    return false;
  }

  validate(control: AbstractControl): boolean {
    if(this.crossWith !== undefined){
      const parent = control && control.parent;
      const secondControl = parent?.get(this.crossWith);
      this.validateValue = IsEqualsTo.validateEquals(secondControl?.value,this.value)
    }
    else this.validateValue = IsEqualsTo.validateEquals(this.forEquals, this.value);

    return this.validateValue;
  }

}

export class NotIsEqualsTo extends IsEqualsTo {
  override errorName = 'notIsEquals';
  constructor(forEquals: string | string[] | number | number[], errorName?: string, crossWith?: string) {
    super(forEquals, errorName, crossWith);
  }

  override validate(control: AbstractControl): boolean {
    return !super.validate(control);
  }

}

export class EverError implements CustomValidator {
  errorName: string = 'iError';
  validateValue: boolean = true;
  value: any;

  constructor(errorName?: string) { if(errorName !== undefined) this.errorName = errorName; }

  validate(control?: AbstractControl): boolean { return true; }

}


export function isEqualsTo(forEquals: string | string[] | number | number[], errorName?: string, crossWith?: string): ValidatorFn {
  return (control: AbstractControl) => {
    if(errorName === undefined)
      errorName = 'isEquals';

    if(crossWith !== undefined){
      const parent = control && control.parent;
      const secondControl = parent?.get(crossWith);
      return IsEqualsTo.validateEquals(secondControl?.value, control.value) ? validationError(errorName, control.value): null;
    }

    return IsEqualsTo.validateEquals(forEquals, control.value) ? validationError(errorName, control.value) : null;
  }
}

export function notIsEqualsTo(forEquals: string | string[] | number | number[], errorName?: string, crossWith?: string): ValidatorFn {
  return (control: AbstractControl) => {
    if(errorName === undefined)
      errorName = 'notIsEquals';

    if(crossWith !== undefined){
      const parent = control && control.parent;
      const secondControl = parent?.get(crossWith);
      return !IsEqualsTo.validateEquals(secondControl?.value, control.value) ? validationError(errorName, control.value): null;
    }

    return !IsEqualsTo.validateEquals(forEquals, control.value) ? validationError(errorName, control.value) : null;
  }
}

export function forbiddenValue(forbiddenValues: string | string[], nameError?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null =>{
    if(nameError === undefined)
      nameError = 'forbiddenValue'
    return ForbiddenValue.validateForbidden(forbiddenValues, control.value) ? validationError(nameError, control.value) : null;
  }
}

export function everError(errorName?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => { return validationError(errorName!, control.value); }
}
