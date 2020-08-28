import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DoctypeInterface} from '../types/doctype.interface';
import {environment} from '../../../environments/environment';

@Injectable()
export class DoctypeServices {
  constructor(private http: HttpClient) {
  }

  getDoctypes(): Observable<DoctypeInterface[]> {
    const url = environment.doctypesUrl;
    let resp: Observable<DoctypeInterface[]>;

    resp = this.http.get<DoctypeInterface[]>(url);
    return resp;
  }
}
