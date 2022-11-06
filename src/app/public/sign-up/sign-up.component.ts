import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, Validators} from "@angular/forms";
import {FieldForm} from "../../users/model/field-form";
import {everError, notIsEqualsTo} from "../../shared/util/validators";
import {UsersService} from "../../shared/services/users.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/user";
import {Account} from "../../shared/models/account";
import {AccountsService} from "../../shared/services/accounts.service";

interface RadioButton {
  value: string,
  label: string
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('signUpForm', {static: false})
  signUpForm!: NgForm;

  @ViewChild('emailForm', {static: false})
  emailForm!: NgForm;

  successfulRoute: string = '/sign-in'
  registerInformation: boolean = false;

  formCols: number = 2;
  formFields: FieldForm[] = [
    {
      field: 'firstname',
      label: 'Name',
      placeholder: 'Example Name',
      type: 'text',
      requerid: true,
      value: '',
      minLength: 0,
      maxLength: 150
    },
    {
      field: 'lastname',
      label: 'Last Name',
      placeholder: 'Example Lastname',
      type: 'text',
      requerid: true,
      value: '',
      minLength: 0,
      maxLength: 150
    },
    {
      field: 'username',
      label: 'Username',
      placeholder: 'exampledr',
      type: 'text',
      requerid: true,
      value: '',
      minLength: 4,
      maxLength: 150
    },
    {
      field: 'upcCode',
      label: 'UPC code',
      placeholder: 'U1234E567',
      type: 'text',
      requerid: true,
      value: '',
      minLength: 0,
      maxLength: 10
    },
    {
      field: 'career',
      label: 'Career',
      placeholder: 'Ingeniería de Software',
      type: 'text',
      requerid: true,
      value: '',
      minLength: 0,
      maxLength: 150
    },
    {
      field: 'cycle',
      label: 'Career cycle',
      placeholder: '1',
      type: 'text',
      requerid: true,
      value: '',
      minLength: 1,
      maxLength: 2
    },
    {
      field: 'password',
      label: 'Password',
      placeholder: '********',
      type: 'password',
      requerid: true,
      value: '',
      minLength: 8,
      hide: true,
      maxLength: 150
    },
    {
      field: 'confirmPassword',
      label: 'Confirm password',
      placeholder: '********',
      type: 'password',
      requerid: true,
      value: '',
      minLength: 0,
      hide: true,
      maxLength: 150
    }
  ]
  userData: User = {} as User;
  accountData: Account = {} as Account;

  radioButtons: RadioButton[] = [
    {value: 'tutor', label: 'Tutor'},
    {value: 'student', label: 'Student'}
  ]
  userType: string = '';
  userEmail: string = '';

  constructor(private usersService: UsersService, private router: Router, private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  validateUserType() {
    if(this.userType === '')
      this.putError('email', 'notUserTypeSelected', this.emailForm)
  }

  onSubmit(where: string = 'information') {
    if(where !== 'information'){
      this.validateUserType();
      if(this.userType !== '' && this.emailForm.valid){
        this.usersService.getByEmail(this.userEmail).subscribe(
          (response)=> response ? this.putError('email', 'existEmail', this.emailForm): this.registerInformation = true)
      }
    } else {
      if(this.signUpForm.valid) {
        this.confirmPassword();
        this.validateUpcCode();
        if(this.signUpForm.valid){
          this.accountsService.getByUsername(this.controlValue('username')).subscribe(
            (response)=> response ? this.putError('username', 'usernameExist') : this.registerUser()
          )
        }
      }
    }
  }

  keyDown(field: FieldForm) {
    if(field.field ==='confirmPassword' || field.field === 'upcCode' || field.field === 'username'){
      this.signUpForm?.controls[field.field].clearValidators();
      if(field.field !== 'username')
        this.signUpForm?.controls[field.field].setValidators(Validators.required);
      this.signUpForm?.controls[field.field].updateValueAndValidity();
    }
  }

  emailKeyDown() {
    this.emailForm.controls['email'].clearValidators();

    this.emailForm.controls['email'].setValidators([Validators.required, Validators.email])
  }

  confirmPassword() {
    this.signUpForm?.controls['confirmPassword'].addValidators(notIsEqualsTo([], 'notCorrectPassword', 'password'));
    this.signUpForm?.controls['confirmPassword'].updateValueAndValidity();
  }

  controlValue(controlName: string, form: NgForm = this.signUpForm): string {
    return form?.controls[controlName]?.value;
  }


  hasError(controlName: string, errorCode: string, form: NgForm = this.signUpForm): boolean {
    return form?.controls[controlName]?.hasError(errorCode);
  }

  validateUpcCode() {
    this.signUpForm.controls['upcCode'].addValidators(Validators.pattern('[Uu][0-9]{5}[A-z]?[0-9]?[0-9]{3}'));
    this.signUpForm.controls['upcCode'].updateValueAndValidity();
  }

  putError(controlName: string, errorName: string, form: NgForm = this.signUpForm) {
    form.controls[controlName]?.addValidators(everError(errorName));
    form.controls[controlName]?.updateValueAndValidity();
  }

  registerUser() {
    this.userData.firstname = this.controlValue('firstname');
    this.userData.lastname = this.controlValue('lastname');

    this.userData.upcCode = this.controlValue('upcCode');
    this.userData.email = this.userEmail;
    this.userData.userType = this.userType;
    this.userData.id = 0;
    if(this.userType === 'tutor')
      this.userData.points = 0;

    //account data
    this.accountData.password = this.controlValue('password');
    this.accountData.username = this.controlValue('username');


    this.usersService.create(this.userData).subscribe(
      (response)=> response ? this.createAccount(response) : this.userData = {} as User
    );
  }

  createAccount(user: User) {
    this.accountsService.exchangeCreate("/" + user.id, this.accountData).subscribe(response => response ? this.router.navigateByUrl(this.successfulRoute) : console.log('account not created'));
  }

  selectUsertype() {
    if(this.hasError('email', 'notUserTypeSelected', this.emailForm)){
      this.emailForm.controls['email'].clearValidators();
      this.emailForm.controls['email'].updateValueAndValidity();
    }
  }
}
