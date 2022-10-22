import { Observable } from "rxjs";
import { ValidationError } from "./validation-error";
import { AbstractControl } from "@angular/forms";

export interface CustomAsyncValidator extends ValidationError {
  errorName: string,
  validate(control?: AbstractControl): Observable<any>;
  value: any;
  validateValue: boolean;
  crossWith?: string;
}


