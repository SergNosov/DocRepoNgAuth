import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {DoctypeActions, DoctypeActionTypes, GetDoctype, GetDoctypesSuccess, GetDoctypeSuccess} from '../actions/doctypeActionTypes';
import {switchMap, map, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {DoctypeInterface} from '../../types/doctype.interface';
import {DoctypeServices} from '../../services/doctype.services';
import {selectDoctypeList} from '../selectors/doctype.selector';

@Injectable()
export class DoctypeEffects {

  constructor(private doctypeService: DoctypeServices,
              private actions: Actions,
              private store: Store<AppStateInterface>) {
  }

  @Effect()
  getDoctype$ = this.actions.pipe(
    ofType<GetDoctype>(DoctypeActionTypes.GetDoctype),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectDoctypeList))),
    switchMap(([id, users]) => {
      const selectedDoctypes = users.filter(user => user.id === +id)[0];
      return of(new GetDoctypeSuccess(selectedDoctypes));
    })
  );

  @Effect()
  getDoctypes$ = this.actions.pipe(
    ofType<DoctypeActions>(DoctypeActionTypes.GetDoctypes),
    switchMap(() => this.doctypeService.getDoctypes()),
    switchMap((doctypes: DoctypeInterface[]) => of(new GetDoctypesSuccess(doctypes)))
  );
}
