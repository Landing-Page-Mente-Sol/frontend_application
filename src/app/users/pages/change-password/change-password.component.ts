import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, ValidatorFn} from "@angular/forms";
import {FieldForm} from "../../model/field-form";
import {notIsEqualsTo} from "../../../shared/util/validators";
import {AccountsService} from "../../../shared/services/accounts.service";
import {Account} from "../../../shared/models/account";

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
  accountData: Account = {} as Account;

  changed: boolean = false;

  notEqualPassword = notIsEqualsTo('', 'differentPassword', 'password');

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.changeForm.valid){
      this.confirmPassword();
      if(this.changeForm.valid) {
        this.accountsService.getByUsername(localStorage.getItem('username')??'')
          .subscribe(response => {
            this.accountData = response;
            this.accountData.password = this.controlValue('password');
            this.accountsService.update(response.id, this.accountData).subscribe(() => this.changed = true, error => console.log('error'))
          })
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

  controlValue(controlName: string){
    return this.changeForm?.controls[controlName].value;
  }

}
