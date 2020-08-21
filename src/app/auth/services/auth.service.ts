import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from '../../shared/types/currentUser.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthResponseInterface} from '../types/authResponse.interface';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.result;
  }

  login(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.baseUrl + '/login';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface>{
    const url = environment.baseUrl + '/login/check';
    return this.http.get(url).pipe(map(this.getUser));
  }
}
