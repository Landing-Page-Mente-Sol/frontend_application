import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import { Question } from "../models/question";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService extends HttpService<Question>{
  override basePath = "http://localhost:3000/api/v1/preguntas";
}

