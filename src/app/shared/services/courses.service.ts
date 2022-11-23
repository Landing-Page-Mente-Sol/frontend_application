import { Injectable } from '@angular/core';
import {HttpService} from "./common/http.service";
import {Course} from "../models/course";

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends HttpService<Course>{
  override basePath = this.BASE_PATH + "/courses"
}
