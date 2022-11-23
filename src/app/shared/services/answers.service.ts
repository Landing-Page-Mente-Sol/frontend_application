import { Injectable } from '@angular/core';
import {HttpService} from "./common/http.service";
import {Answer} from "../models/answer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnswersService extends HttpService<Answer>{
  override basePath = this.BASE_PATH + "/answers";

  createAnswer(questionId: string | number, userId: string | number, item: any): Observable<Answer> {
    return this.exchangeCreate(`/${questionId}/${userId}`, item);
  }

  getByUser(userId: string | number): Observable<Answer[]> {
    return this.exchangeGet(`/search/user/${userId}`) as Observable<Answer[]>;
  }

  getByQuestion(questionId: string | number): Observable<Answer[]> {
    return this.exchangeGet(`/search/question/${questionId}`) as Observable<Answer[]>;
  }

}
