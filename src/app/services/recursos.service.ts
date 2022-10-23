import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import { Recursos } from '../models/recursos';

@Injectable({
  providedIn: 'root'
})
export class RecursosService extends HttpService<Recursos>{
  override basePath = "http://localhost:3000/api/v1/recursos";
}

