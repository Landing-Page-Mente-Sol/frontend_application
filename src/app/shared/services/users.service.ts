import { Injectable } from '@angular/core';
import {HttpService} from "./common/http.service";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends HttpService<User>{
  override basePath = "http://localhost:8080/api/v1/users";

  getByEmail(email: String): Observable<User>{
    return this.exchangeGet(`/search/email/${email}`) as Observable<User>;
  }

  getByCycle(cycle: string | number): Observable<User[]> {
    return this.exchangeGet(`/search/cycle/${cycle}`) as Observable<User[]>;
  }

  getByPointsGreaterThanEqual(points: string | number): Observable<User[]> {
    return this.exchangeGet(`/search/points/gte/${points}`) as Observable<User[]>;
  }

  getTop100DescByPoints(): Observable<User[]> {
    return this.exchangeGet('/search/points/top/100/desc') as Observable<User[]>;
  }

  getByUserType(userType: string): Observable<User[]> {
    return this.exchangeGet(`/search/type/${userType}`) as Observable<User[]>;
  }

}
