import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {registerAction, registerFailureAction, registerSuccessAction} from '../actions/register.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({currentUser});
          }),
          catchError((errResponce: HttpErrorResponse) => {
            console.log('errResponce.status', errResponce.status);
            console.log('errResponce.statusText', errResponce.error.statusText);
            return of(registerFailureAction({
              errors: {
                status: errResponce.error.statusText,
                message: errResponce.error.message,
                timestamp: errResponce.error.timeStamp
              }
            }));
          })
        );
      })
    ));

  constructor(private actions$: Actions,
              private authService: AuthService) {
  }
}
