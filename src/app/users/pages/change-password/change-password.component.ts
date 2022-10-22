import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, ValidatorFn} from "@angular/forms";
import {FieldForm} from "../../model/field-form";
import {notIsEqualsTo} from "../../../shared/util/validators";
import {UsersService} from "../../../shared/services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  @ViewChild('changeForm', {static: false})
  changeForm!: NgForm;

  formCols: number = 1;
  formFields: FieldForm[] = [
    {
      label: 'New Password',
      field: 'password',
      placeholder: 'New Password',
      type: 'password',
      value: '',
      requerid: true,
      minLength: 8,
      hide: true
    },
    {
      label: 'Confirm new password',
      field: 'confirmPassword',
      placeholder: 'Confirm new password',
      type: 'password',
      value: '',
      requerid: true,
      minLength: 0,
      hide: true
    }
  ]

  changed: boolean = false;

  notEqualPassword = notIsEqualsTo('', 'differentPassword', 'password');

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.changeForm.valid){
      this.confirmPassword();
      if(this.changeForm.valid) {
        this.changed = true;
      }
    }
  }

  keyDown(field: FieldForm) {
    if(field.field === 'confirmPassword' && this.changeForm.controls[field.field].hasValidator(this.notEqualPassword)) {
      this.changeForm?.controls[field.field]?.removeValidators(this.notEqualPassword);
      this.changeForm?.controls[field.field]?.updateValueAndValidity();
    }
  }

  hasError(controlName: string, errorCode: string):boolean {
    return this.changeForm?.controls[controlName]?.hasError(errorCode);
  }

  confirmPassword() {
    this.putValidator('confirmPassword', this.notEqualPassword);
    this.changeForm?.controls['confirmPassword'].updateValueAndValidity();
  }

  putValidator(controlName: string, validator: ValidatorFn) {
    this.changeForm?.controls[controlName]?.addValidators(validator);
  }

  passwordVisibility(field: FieldForm) {
    field.type = field.type === 'password' ? 'text' : 'password';
    field.hide = !field.hide;
  }

}
