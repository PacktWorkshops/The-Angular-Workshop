
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';
import { LoginResponse } from './login-response';

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

  login(user: User): Observable<LoginResponse | boolean> {
    const body = {
      username: user.name,
      password: user.password
    };

    return this.httpClient.post<LoginResponse>('api/auth/login', body, this.httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }

  duplicateCheck(name: string): Observable<boolean> {
    const isDuplicate = name === 'dev';
    return of(isDuplicate);
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

