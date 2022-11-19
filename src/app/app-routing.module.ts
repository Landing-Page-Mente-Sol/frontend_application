import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponentComponent } from './add-question.component/add-question.component.component';
import { AgregarAsignaturaComponentComponent } from './agregar-asignatura.component/agregar-asignatura.component.component';
import { AgregarRespuestaComponent } from './agregar-respuesta/agregar-respuesta.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HomeComponentComponent } from './home.component/home.component.component';
import { PerfilComponentComponent } from './perfil.component/perfil.component.component';

import { SignInComponent } from "./public/sign-in/sign-in.component";
import {SignUpComponent} from "./public/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./public/forgot-password/forgot-password.component";
import {ChangePasswordComponent} from "./users/pages/change-password/change-password.component";
import {NotFoundComponent} from "./public/not-found/not-found.component";
import {RankingComponent} from "./users/pages/ranking/ranking.component";


const routes: Routes = [

  {path:'home',component:HomeComponentComponent},
  {path: 'add_pregunta', component:AddQuestionComponentComponent},
  {path:'add-asignatura', component:AgregarAsignaturaComponentComponent},
  {path:'perfil',component:PerfilComponentComponent},
  {path:'buscar',component:BuscarComponent},
  {path:'agregar_respuesta', component:AgregarRespuestaComponent},
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  }
  ,
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'not-found'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
