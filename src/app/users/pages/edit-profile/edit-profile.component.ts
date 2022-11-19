import {Component, OnInit, ViewChild} from '@angular/core';
import {FieldForm} from "../../model/field-form";
import {NgForm, Validators} from "@angular/forms";
import {AccountsService} from "../../../shared/services/accounts.service";
import {everError} from "../../../shared/util/validators";
import {User} from "../../../shared/models/user";
import {UsersService} from "../../../shared/services/users.service";
import {Account} from "../../../shared/models/account";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  formCols: number = 1;
  formFields: FieldForm[] = [
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
      field: 'upcCode',
      label: 'UPC code',
      placeholder: 'U1234E567',
      type: 'text',
      requerid: true,
      value: '',
      minLength: 0,
      maxLength: 10
    },
  ]

  successfulRoute: string = '/home'

  @ViewChild('editProfileForm', {static: false})
  editProfileForm!: NgForm;

  userData: User = {} as User;
  accountData: Account = {} as Account;

  constructor(private accountsService: AccountsService, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('username'))
    this.accountsService.getByUsername(localStorage.getItem('username')??'')
      .subscribe(response => {
        this.accountData = response;
        this.userData = response.user;
      })
  }

  onSubmit()  {
    if(this.editProfileForm.valid) {
      this.validateUpcCode();
      if(this.editProfileForm.valid){
        this.accountsService.getByUsername(this.controlValue('username')).subscribe(
          (response)=> response ? this.putError('username', 'usernameExist') : this.updateAccount()
        )
      }
    }
  }

  validateUpcCode() {
    this.editProfileForm.controls['upcCode'].addValidators(Validators.pattern('[Uu][0-9]{5}[A-z]?[0-9]?[0-9]{3}'));
    this.editProfileForm.controls['upcCode'].updateValueAndValidity();
  }

  controlValue(controlName: string, form: NgForm = this.editProfileForm): string {
    return form?.controls[controlName]?.value;
  }

  hasError(controlName: string, errorCode: string, form: NgForm = this.editProfileForm): boolean {
    return form?.controls[controlName]?.hasError(errorCode);
  }

  putError(controlName: string, errorName: string, form: NgForm = this.editProfileForm) {
    form.controls[controlName]?.addValidators(everError(errorName));
    form.controls[controlName]?.updateValueAndValidity();
  }

  updateUser() {
    this.userData.upcCode = this.controlValue('upcCode');
    this.userData.career = this.controlValue('career');
    this.userData.cycle = parseInt(this.controlValue('cycle'));
    console.log(this.userData);
    this.usersService.update(this.userData.id, this.userData).subscribe((response) => {
        this.router.navigateByUrl(this.successfulRoute).then()
    });
  }

  updateAccount() {
    this.accountData.username = this.controlValue('username');
    this.accountsService.getByUsername(localStorage.getItem('username') ?? '').subscribe(
      response =>
        this.accountsService.update(response.id, this.accountData).subscribe(
          () => {
            localStorage.removeItem('username');
            localStorage.setItem('username', this.accountData.username);
            this.updateUser();
          }, error => { console.log('account not updated because ', error.error.message) }
      ))
  }

  keyDown(field: FieldForm) {
    if(field.field === 'upcCode' || field.field === 'username'){
      this.editProfileForm?.controls[field.field].clearValidators();
      if(field.field !== 'username')
        this.editProfileForm?.controls[field.field].setValidators(Validators.required);
      this.editProfileForm?.controls[field.field].updateValueAndValidity();
    }
  }

}
