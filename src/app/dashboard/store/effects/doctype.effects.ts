import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {
  CloseDoctypeDialog,
  DoctypeActions,
  DoctypesActionTypes,
  GetDoctype,
  GetDoctypesSuccess,
  GetDoctypeSuccess, OpenDoctypeDialog, ResultDoctypeDialog, ResultDoctypeDialogFailure, ResultDoctypeDialogSuccess,
} from '../actions/doctypesActionTypes';
import {switchMap, map, withLatestFrom, catchError, mergeMap, flatMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {DoctypeInterface} from '../../types/doctype.interface';
import {DoctypeServices} from '../../services/doctype.services';
import {selectDoctypeList, selectSelectedDoctype} from '../selectors/doctype.selector';
import {getCurrentUserFailureAction} from '../../../auth/store/actions/getCurrentUser.action';
import {DoctypeDialogComponent} from '../../components/doctypeDialog/doctypeDialog.component';
import {MatDialog} from '@angular/material';

@Injectable()
export class DoctypeEffects {

  constructor(private doctypeService: DoctypeServices,
              private actions: Actions,
              private store: Store<AppStateInterface>,
              private dialog: MatDialog) {
  }

  @Effect()
  getDoctype$ = this.actions.pipe(
    ofType<GetDoctype>(DoctypesActionTypes.GetDoctype),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectDoctypeList))),
    switchMap(([id, users]) => {
      const selectedDoctypes = users.filter(user => user.id === +id)[0];
      return of(new GetDoctypeSuccess(selectedDoctypes));
    })
  );

  @Effect()
  getDoctypes$ = this.actions.pipe(
    ofType<DoctypeActions>(DoctypesActionTypes.GetDoctypes),
    switchMap(() => this.doctypeService.getDoctypes()),
    switchMap((doctypes: DoctypeInterface[]) => of(new GetDoctypesSuccess(doctypes))),
    catchError(() => {
      return of(getCurrentUserFailureAction());
    })
  );

  @Effect()
  saveDoctype$ = this.actions.pipe(
    ofType<ResultDoctypeDialog>(DoctypesActionTypes.ResultDialog),
    mergeMap(
      (data) => this.doctypeService.saveDoctype(data.payload)
        .pipe(
          map(() => new ResultDoctypeDialogSuccess(data.payload)),
          catchError(error => of(new ResultDoctypeDialogFailure(error)))
        )
    )
  );

  @Effect()
  openDialog = this.actions.pipe(
    ofType<OpenDoctypeDialog>(DoctypesActionTypes.OpenDialog),
    withLatestFrom(this.store.pipe(select(selectSelectedDoctype))),
    flatMap(([_, doctype]) => {
      const dialogRef = this.dialog.open(DoctypeDialogComponent, {data: doctype});
      return dialogRef.afterClosed();
    }),
    map((result: DoctypeInterface) => {
      if (result === undefined) {
        return new CloseDoctypeDialog();
      }
      return new ResultDoctypeDialog(result);
    }),
  );
}
