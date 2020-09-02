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
    const resp: Observable<DoctypeInterface[]> = this.http.get<DoctypeInterface[]>(url);
    return resp;
  }

  saveDoctype(doctype: DoctypeInterface): Observable<DoctypeInterface> {
    console.log('--- save doctype in service:', doctype);
    const url = environment.doctypesUrl;
    const resp: Observable<DoctypeInterface> = this.http.post<DoctypeInterface>(url, doctype);
    return resp;
  }

  updateDoctype(doctype: DoctypeInterface): Observable<DoctypeInterface> {
    console.log('--- save doctype in service:', doctype);
    const url = environment.doctypesUrl;
    const resp: Observable<DoctypeInterface> = this.http.put<DoctypeInterface>(url, doctype);
    return resp;
  }
}
