import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Course} from "../models/course";

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends HttpService<Course>{
  override basePath="http://localhost:3000/api/v1/asignaturas"
}
