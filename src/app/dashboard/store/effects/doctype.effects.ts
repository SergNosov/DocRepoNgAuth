import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {DoctypeActions, DoctypesAction, GetDoctype, GetDoctypesSuccess, GetDoctypeSuccess} from '../actions/doctypes.action';
import {switchMap, map, withLatestFrom, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {DoctypeInterface} from '../../types/doctype.interface';
import {DoctypeServices} from '../../services/doctype.services';
import {selectDoctypeList} from '../selectors/doctype.selector';
import {getCurrentUserFailureAction} from '../../../auth/store/actions/getCurrentUser.action';

@Injectable()
export class DoctypeEffects {

  constructor(private doctypeService: DoctypeServices,
              private actions: Actions,
              private store: Store<AppStateInterface>) {
  }

  @Effect()
  getDoctype$ = this.actions.pipe(
    ofType<GetDoctype>(DoctypesAction.GetDoctype),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectDoctypeList))),
    switchMap(([id, users]) => {
      const selectedDoctypes = users.filter(user => user.id === +id)[0];
      return of(new GetDoctypeSuccess(selectedDoctypes));
    })
  );

  @Effect()
  getDoctypes$ = this.actions.pipe(
    ofType<DoctypeActions>(DoctypesAction.GetDoctypes),
    switchMap(() => this.doctypeService.getDoctypes()),
    switchMap((doctypes: DoctypeInterface[]) => of(new GetDoctypesSuccess(doctypes))),
    catchError(() => {
      return of(getCurrentUserFailureAction());
    })
  );
}
