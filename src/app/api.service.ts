import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


// const baseUrl = 'http://localhost:61953/api';
const baseUrl = "http://3.111.6.221:61953/api";
// but this does NOT work
const access_token = 'UTSTESTING#@123456';
const user_id = '';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  options = {
    'user_id': ''
  }; 

  constructor(private httpClient : HttpClient, private router : Router) { }

  postCall(url : string, data: any) : Observable<any> {

    data.user_id = localStorage.getItem('access_token');

    return this.httpClient.post(`${baseUrl}/${url}`, data).pipe(
      tap( (res : any) => {
        this.handleSuccess(res);
      }),
      catchError(this.handleError)
    )
  }

  handleSuccess(res : any)
  {
    if (res.status_smessage == 'Unauthorized access')
    {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    localStorage.setItem('access_token', "");
    return throwError(
      'Something bad happened; please try again later.');

  };
}
