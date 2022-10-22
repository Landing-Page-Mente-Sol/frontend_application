import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  @ViewChild('forgotForm', { static: false })
  forgotForm!: NgForm;
  formCols: number = 1;
  email: string = '';
  showMessage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.forgotForm.valid){
      this.showMessage = true;
    }
  }

  hasError(controlName: string, errorCode: string): boolean {
    return this.forgotForm?.controls[controlName]?.hasError(errorCode);
  }

}
