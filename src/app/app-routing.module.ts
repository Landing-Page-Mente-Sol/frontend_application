import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponentComponent } from './add-question.component/add-question.component.component';
import { AgregarAsignaturaComponentComponent } from './agregar-asignatura.component/agregar-asignatura.component.component';
import { AgregarRespuestaComponent } from './agregar-respuesta/agregar-respuesta.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HomeComponentComponent } from './home.component/home.component.component';
import { PerfilComponentComponent } from './perfil.component/perfil.component.component';

const routes: Routes = [
  {path:'',component:HomeComponentComponent},
  {path:'home',component:HomeComponentComponent},
  {path: 'add_pregunta', component:AddQuestionComponentComponent},
  {path:'add-asignatura', component:AgregarAsignaturaComponentComponent},
  {path:'perfil',component:PerfilComponentComponent},
  {path:'buscar',component:BuscarComponent},
  {path:'agregar_respuesta', component:AgregarRespuestaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
