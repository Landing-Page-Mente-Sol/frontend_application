import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import { throwError, Observable } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { QueryString } from "../../util/query-string";

@Injectable({
  providedIn: 'root'
})
export class HttpService<Type> {

  basePath = "http://localhost:8080/api/v1";
  httpOptions = { headers: new HttpHeaders({"Content-Type":"application/json"})};
  constructor(protected http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent)
      console.log(`An error occurred. ${ error.error.message }`); //Default Error Handling
    else {
      //Unsuccessful response Error Code returned from Backend
      console.error(`Backend returned error ${ error.status }, body was: ${ error.error }`);
    }

    //Return Observable with Error Message to Client
    return throwError("Something happened with request, please try again later");
  }

  create(item: any): Observable<Type> {
    return this.http.post<Type>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getById(id: number | string): Observable<Type> {
    return this.http.get<Type>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAll(): Observable<Type[]> {
    return this.http.get<Type[]>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id: number | string, item: any): Observable<Type> {
    return this.http.put<Type>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: number | string): Observable<Type>{
    return this.http.delete<Type>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getByField(field: string, value: any): Observable<Type[]> {
    return this.http.get<Type[]>(`${this.basePath}/?${field}=${value}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getByFields(fields: string[], values: string[]): Observable<Type[]> {
    let query = new QueryString(fields, values);

    return this.http.get<Type[]>(`${this.basePath}/${query.toQueryString()}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))

  }

  exchangeCreate(url: string, item: any): Observable<Type> {
    return this.http.post<Type>(this.basePath + url, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /*
  * url is added to base url
  * if url must be as /search-question/username/{username}
  * the consult will do as basePath + /search-question/username/{username}
  * */
  exchangeGet(url: string): Observable<Type[]> | Observable<Type>{
    return this.http.get<Type[]>(this.basePath + url, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}

