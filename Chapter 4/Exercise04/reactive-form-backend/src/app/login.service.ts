
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      ContentType: 'application/json'
      }
    )
  };

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<any> {
    const body = {
      username: user.name,
      password: user.password
    };

    return this.httpClient.post('api/auth/login', body, this.httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }

  private handleError(operation = 'operation', result?) {
    return (error: HttpErrorResponse) => {
      if (error.status === 401) {
        return of(false);
      } else {
        console.error(error);
        return throwError('An error occurred:', error.error.message);
      }
    };
  }
}

