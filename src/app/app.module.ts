import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponentComponent } from './heading.component/heading.component.component';
import { AsignaturasComponentComponent } from './asignaturas.component/asignaturas.component.component';
import { PerfilComponentComponent } from './perfil.component/perfil.component.component';
import { AddQuestionComponentComponent } from './add-question.component/add-question.component.component';
import { HomeComponentComponent } from './home.component/home.component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarAsignaturaComponentComponent } from './agregar-asignatura.component/agregar-asignatura.component.component';
import { PerfilBarraComponentComponent } from './perfil-barra.component/perfil-barra.component.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AgregarRespuestaComponent } from './agregar-respuesta/agregar-respuesta.component';

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
    AgregarRespuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
