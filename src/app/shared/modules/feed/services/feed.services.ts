import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {GetFeedResponseInterface} from '../types/getFeedResponse.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class FeedServices {

  constructor(private http: HttpClient) {
  }

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = environment.apiUrl + url;
    let resp: Observable<GetFeedResponseInterface>;
    resp = this.http.get<GetFeedResponseInterface>(fullUrl);

    console.log('---resp: ', resp);
    return resp;
  }
}
