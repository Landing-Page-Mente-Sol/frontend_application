import { HttpService } from "../services/common/http.service";
import {first, map, Observable, startWith, switchMap} from "rxjs";
import { CustomAsyncValidator } from "../directives/model/custom-async-validator";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {validationError} from "../directives/model/validation-error";

export class ExistField implements CustomAsyncValidator {
  errorName: string;
  private httpService: HttpService<any>
  private readonly fields: string | string[];
  value: string;
  validateValue: boolean = false;
  crossWith?: string;

  constructor(httpService: HttpService<any>, errorName: string, field: string | string[], crossWith?: string) {
    this.errorName = errorName; this.httpService = httpService;
    this.fields = field; this.crossWith = crossWith;
    this.value = '';
  }

  validate(control: AbstractControl): Observable<any> {
    if(typeof this.fields === 'string')
      return this.httpService.getByField(this.fields, this.value).pipe()
    else {
      if(this.crossWith !== undefined && this.fields.length === 2) {
        const parent = control && control.parent;
        const secondControl = parent?.get(this.crossWith);
        return this.httpService.getByFields(this.fields, [control.value, secondControl?.value]).pipe()
      }

      return new Observable<null>();
    }
  }

  validationError(response: any): { [p: string]: any } | null {
    if(response?.length > 0) {
      this.validateValue = true;
      return {[this.errorName]: this.value}
    }
    else {
      this.validateValue = false;
      return null
    }
  }

}

export class NotExistField extends ExistField {

  constructor(httpService: HttpService<any>, errorName: string, field: string | string[], crossWith?: string) {
    super(httpService, errorName, field, crossWith);
  }

  override validationError(response: any): { [p: string]: any } | null {
    if(response?.length === 0) {
      this.validateValue = true;
      return {[this.errorName]: this.value}
    }
    else {
      this.validateValue = false;
      return null
    }
  }
}

export function existField(httpService: HttpService<any>,  fields: string | string[], errorName?: string, controlName?:string): AsyncValidatorFn  {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if(errorName === undefined)
      errorName = 'existField'
    if(controlName !== undefined && typeof fields !== 'string') {
      const parent = control && control.parent;
      const secondControl = parent?.get(controlName);
      return httpService.getByFields(fields, [control.value, secondControl?.value]).pipe(
        map((response) => (response && response.length > 0) ? validationError(errorName!, true) : null)
      )
    }
    if(typeof fields === "string")
      return httpService.getByField(fields, control.value).pipe(map(
        (response) => (response && response.length > 0) ? validationError(errorName!, true) : null
      ))

    return new Observable<null>();
  }
}

export function notExistField(httpService: HttpService<any>,  fields: string | string[], errorName?: string, controlName?:string): AsyncValidatorFn  {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if(errorName === undefined)
      errorName = 'notExistField'
    if(controlName !== undefined && typeof fields !== 'string') {
      const parent = control && control.parent;
      const secondControl = parent?.get(controlName);
      return httpService.getByFields(fields, [control.value, secondControl?.value]).pipe(
        map((response) => (response && response.length === 0) ? validationError(errorName!, true) : null)
      ).pipe(first())
    }
    if(typeof fields === "string")
      return httpService.getByField(fields, control.value).pipe(
        map(response => (response && response.length === 0) ? validationError(errorName!, true) : null)
      )
      /*
      * return control.statusChanges.pipe(startWith(control.status), switchMap(()=>httpService.getByField(fields, control.value)),
        map((response) => (response && response.length === 0) ? validationError(errorName!, true) : null))
      * */

    return new Observable<null>();
  }
}

