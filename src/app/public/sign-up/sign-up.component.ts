import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, Validators} from "@angular/forms";
import {FieldForm} from "../../users/model/field-form";
import {everError, notIsEqualsTo} from "../../shared/util/validators";
import {UsersService} from "../../shared/services/users.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/user";

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

  formCols: number = 1;
  formFields: FieldForm[] = [
    {
      field: 'name',
      label: 'Name',
      placeholder: 'Example Name',
      type: 'text',
      requerid: true,
      value: '',
      minLength: 0
    },
    {
      field: 'lastName',
      label: 'Last Name',
      placeholder: 'Example Lastname',
      type: 'text',
      requerid: true,
      value: '',
      minLength: 0
    },
    {
      field: 'username',
      label: 'Username',
      placeholder: 'exampledr',
      type: 'text',
      requerid: false,
      value: '',
      minLength: 0
    },
    {
      field: 'upcCode',
      label: 'UPC code',
      placeholder: 'U1234E567',
      type: 'text',
      requerid: true,
      value: '',
      minLength: 0
    },
    {
      field: 'password',
      label: 'Password',
      placeholder: '********',
      type: 'password',
      requerid: true,
      value: '',
      minLength: 8,
      hide: true
    },
    {
      field: 'confirmPassword',
      label: 'Confirm password',
      placeholder: '********',
      type: 'password',
      requerid: true,
      value: '',
      minLength: 0,
      hide: true
    }
  ]
  userData: User = {} as User;

  radioButtons: RadioButton[] = [
    {value: 'tutor', label: 'Tutor'},
    {value: 'student', label: 'Student'}
  ]
  userType: string = '';
  userEmail: string = '';

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(where: string = 'information') {
    if(where !== 'information'){
      if(this.userType !== '' && this.emailForm.valid){
        this.usersService.getByField('email', this.userEmail).subscribe(
          (response)=> response.length === 0 ? this.registerInformation = true : this.putError('email', 'existEmail', this.emailForm))
      }
    } else {
      if(this.signUpForm.valid) {
        this.confirmPassword();
        this.validateUpcCode();
        if(this.signUpForm.valid){
          this.usersService.getByField('username', this.controlValue('username')).subscribe(
            (response)=> response.length !== 0 ? this.putError('username', 'usernameExist') : this.registerUser()
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

  onChangeField(field: FieldForm) {
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
    this.userData.name = this.controlValue('name');
    this.userData.lastName = this.controlValue('lastName');
    this.userData.password = this.controlValue('password');
    this.userData.username = this.controlValue('username');
    this.userData.upcCode = this.controlValue('upcCode');
    this.userData.email = this.userEmail;
    this.userData.type = this.userType;
    this.userData.id = 0;

    this.usersService.create(this.userData).subscribe(
      (response)=> response ? this.router.navigateByUrl(this.successfulRoute) : this.userData = {} as User
    );
  }

}
