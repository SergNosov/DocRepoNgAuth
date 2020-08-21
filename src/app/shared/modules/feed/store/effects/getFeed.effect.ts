import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {FeedServices} from '../../services/feed.services';
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from '../actions/getFeed.action';
import {GetFeedResponseInterface} from '../../types/getFeedResponse.interface';
import {DoctypeInterface} from '../../../../types/doctype.interface';


@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({url}) => {
        return this.feedService.getFeed(url).pipe(
         // map((feed: GetFeedResponseInterface) => {
          map((feed: DoctypeInterface[]) => {
           // console.log('--- feed: ', feed.doctypes);
            return getFeedSuccessAction({feed});
          }),
          catchError(() => {
            return of(getFeedFailureAction());
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private feedService: FeedServices
  ) {
  }
}
