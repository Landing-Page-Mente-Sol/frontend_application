import { Injectable } from '@angular/core';
import {HttpService} from "./common/http.service";
import {Account} from "../models/account";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountsService extends HttpService<Account>{
  override basePath = this.BASE_PATH + '/accounts'

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
