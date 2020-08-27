import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {DoctypeInterface} from '../../../types/doctype.interface';

@Injectable()
export class FeedServices {

  constructor(private http: HttpClient) {
  }

  getFeed(url: string): Observable<DoctypeInterface[]> {
    const fullUrl = environment.apiUrl + url;
    let resp: Observable<DoctypeInterface[]>;
    resp = this.http.get<DoctypeInterface[]>(fullUrl);
    return resp;
  }
}
