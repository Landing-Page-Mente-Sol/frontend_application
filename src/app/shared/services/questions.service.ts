import { Injectable } from '@angular/core';
import { HttpService } from "./common/http.service";
import { Question } from 'src/app/models/question';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService extends HttpService<Question>{
  override basePath = "http://localhost:8080/api/v1/questions";

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

