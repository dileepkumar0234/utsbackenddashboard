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
    if (data.user_id) {
      let last_active = localStorage.getItem('last_active');
      let  present_date = new Date();
      let last_active_date = last_active ? new Date(last_active) : new Date();
      if (this.diff_minutes(last_active_date, present_date) > 30) {
        this.authService.logout();
        this.router.navigate(['login']);
      }
    }
    return this.httpClient.post(`${this.baseUrl}/${url}`, data).pipe(
      tap( (res : any) => {
        this.handleSuccess(res);
      }),
      catchError(this.handleError)
    )
  }

  diff_minutes(dt2 : any, dt1: any)
  {
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));;

  }

  handleSuccess(res : any)
  {
    if (res.status_smessage == 'Unauthorized access')
    {
      localStorage.clear();
      this.router.navigate(['/']);
    }
    var present_date = new Date();
    localStorage.setItem('last_active', ""+present_date);
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
