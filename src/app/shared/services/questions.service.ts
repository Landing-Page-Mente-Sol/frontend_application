import { Injectable } from '@angular/core';
import { HttpService } from "./common/http.service";
import { Question } from 'src/app/shared/models/question';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService extends HttpService<Question>{
  override basePath = this.BASE_PATH + "/questions";

  createQuestion(courseId: string | number, userId: string | number, item: any): Observable<Question> {
    return this.exchangeCreate(`/${courseId}/${userId}`, item);
  }

  getByCourse(courseId: string | number): Observable<Question[]> {
    return this.exchangeGet(`/search/course/${courseId}`) as Observable<Question[]>;
  }

  getByTitleContains(keyword: string): Observable<Question[]> {
    return this.exchangeGet(`/search/title/contains/${keyword}`) as Observable<Question[]>;
  }

  getByUser(userId: string | number): Observable<Question[]> {
    return this.exchangeGet(`/search/user/${userId}`) as Observable<Question[]>;
  }

  getByCourseAndTitleContains(courseId: string | number, keyword: string): Observable<Question[]> {
    return this.exchangeGet(`/search/course/${courseId}/title/contains/${keyword}`) as Observable<Question[]>;
  }

}

