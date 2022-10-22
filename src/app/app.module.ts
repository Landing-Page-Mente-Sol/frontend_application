import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponentComponent } from './heading.component/heading.component.component';
import { AsignaturasComponentComponent } from './asignaturas.component/asignaturas.component.component';
import { PerfilComponentComponent } from './perfil.component/perfil.component.component';
import { AddQuestionComponentComponent } from './add-question.component/add-question.component.component';
import { HomeComponentComponent } from './home.component/home.component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarAsignaturaComponentComponent } from './agregar-asignatura.component/agregar-asignatura.component.component';
import { PerfilBarraComponentComponent } from './perfil-barra.component/perfil-barra.component.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AgregarRespuestaComponent } from './agregar-respuesta/agregar-respuesta.component';



import {CustomAsyncValidatorDirective} from "./shared/directives/custom-async-validator.directive";
import {CustomValidatorDirective} from "./shared/directives/custom-validator.directive";
import { SignInComponent } from './public/sign-in/sign-in.component';
import { SignUpComponent } from './public/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {ForgotPasswordComponent} from "./public/forgot-password/forgot-password.component";
import {ChangePasswordComponent} from "./users/pages/change-password/change-password.component";



@NgModule({
  declarations: [
    AppComponent,
    HeadingComponentComponent,
    AsignaturasComponentComponent,
    PerfilComponentComponent,
    AddQuestionComponentComponent,
    HomeComponentComponent,
    AgregarAsignaturaComponentComponent,
    PerfilBarraComponentComponent,
    BuscarComponent,
    AgregarRespuestaComponent,
    CustomAsyncValidatorDirective,
    CustomValidatorDirective,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
