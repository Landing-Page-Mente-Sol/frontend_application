import {Component, OnInit, ViewChild} from '@angular/core';
import {FieldForm} from "../../users/model/field-form";
import {NgForm, Validators} from "@angular/forms";
import {UsersService} from "../../shared/services/users.service";
import {Router} from "@angular/router";
import {everError} from "../../shared/util/validators";
import {AccountsService} from "../../shared/services/accounts.service";
import {Account} from "../../shared/models/account";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formCols: number = 1;
  maintainSession: boolean = false;
  loginRoute: string = '/home'
  formFields: FieldForm[] = [
    {
      field: 'username',
      label: 'Username',
      placeholder: 'Username or email',
      requerid: true,
      type: 'text',
      value: ''
    },
    {
      field: 'password',
      label: 'Password',
      placeholder: 'Password',
      requerid: true,
      type: 'password',
      value: ''
    }
  ]

  @ViewChild('singInForm', {static: false})
  singInForm!: NgForm;

  constructor(private usersService: UsersService, private accountsService: AccountsService,private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.singInForm.valid){
      this.accountsService.getByUsername(this.controlValue('username'))
        .subscribe( (response) => !response ? this.putError('username', 'notExistUsername') : this.validateLogin())
    }
  }

  validateLogin() {
    this.accountsService.getByUsernameAndPassword(this.controlValue('username'), this.controlValue('password'))
      .subscribe((response) =>
        !response ? this.putError('password','incorrectPassword') : this.login(response))
  }

  login(account: Account) {
    localStorage.setItem('user', account.user.id.toString());
    this.route.navigateByUrl(this.loginRoute).then()
  }

  onChangeField(field: FieldForm) {}

  controlValue(controlName: string): string { return this.singInForm.controls[controlName].value; }

  keyDown(field: FieldForm) {
    this.singInForm.controls[field.field].clearValidators();
    this.singInForm.controls[field.field].setValidators(Validators.required);
    this.singInForm.controls[field.field].updateValueAndValidity();
  }

  putError(field: string, errorCode: string) {
    this.singInForm.controls[field].setValidators(everError(errorCode));
    this.singInForm.controls[field].updateValueAndValidity({emitEvent: false});
    this.singInForm.controls[field].validator
  }

  hasError(field: string, errorCode: string): boolean{ return this.singInForm?.controls[field]?.hasError(errorCode); }

}
