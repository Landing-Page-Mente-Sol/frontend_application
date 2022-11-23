import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EasyBrain';
  constructor(private router: Router){

  }
  validateRoute(){
    return this.router.url !== '/sign-in' && this.router.url !== '/sign-up'
      && this.router.url !== '/forgot-password' && this.router.url !== '/change-password' && this.router.url !== '/not-found';
  }
}
