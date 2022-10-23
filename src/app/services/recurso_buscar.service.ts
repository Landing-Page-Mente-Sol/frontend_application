import { Recursos_Buscar } from "../models/recurso_buscar";
import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class RecursosBuscarService extends HttpService<Recursos_Buscar>{
  override basePath = "http://localhost:3000/api/v1/recursos_buscar";
}
