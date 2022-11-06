import { Injectable } from '@angular/core';
import {HttpService} from "./common/http.service";
import {Account} from "../models/account";
import {catchError, retry} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountsService extends HttpService<Account>{
  override basePath = "http://localhost:8080/api/v1/accounts"

  createAccount(userId: string | number, item: any): Observable<Account> {
    return this.exchangeCreate(`/{userId}`, item);
  }

  getByUsername(username: string): Observable<Account> {
    return this.exchangeGet(`/search/username/${username}`) as Observable<Account>;
  }

  getByUsernameAndPassword(username: string, password: string): Observable<Account> {
    return this.exchangeGet(`/search/username/${username}/password/${password}`) as Observable<Account>;
  }

  getByUser(userId: number | string): Observable<Account> {
    return this.exchangeGet(`/search/user/${userId}`) as Observable<Account>;
  }

}