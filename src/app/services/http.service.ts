import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { catchError, retry} from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService<Ty> {

  basePath = "http://localhost:3000/api/v1/usuarios";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(protected http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent)
      console.log(`An error occurred. ${ error.error.message }`);
    else console.log(`Backend returned error. ${ error.status }, body was: ${ error.error }`);

    return throwError("Something happened with request, please try again later.");
  }

  create(item: any): Observable<Ty> {
    return this.http.post<Ty>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getById(id: any): Observable<Ty> {
    return this.http.get<Ty>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAll(): Observable<Ty> {
    return this.http.get<Ty>(this.basePath, this.httpOptions).pipe(
      retry(2), catchError(this.handleError)
    );
  }

  update(id: any, item: any): Observable<Ty> {
    return this.http.put<Ty>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: any): Observable<Ty>{
    return this.http.delete<Ty>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
