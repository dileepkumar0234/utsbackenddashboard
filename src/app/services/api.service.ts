import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  public baseUrl:string = environment.apiUrl;

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  options = {
    'user_id': ''
  };

  constructor(private authService: AuthService, private httpClient : HttpClient, private router : Router) { }

  postCall(url : string, data: any) : Observable<any> {

    data.user_id = this.authService.getUserId();
    return this.httpClient.post(`${this.baseUrl}/${url}`, data).pipe(
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

    this.authService.logout();
    return throwError(
      'Something bad happened; please try again later.');

  };
}
