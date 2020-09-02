import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {MatDialog} from '@angular/material';
import {select, Store} from '@ngrx/store';
import {CloseDoctypeDialog, DoctypeDialogActionTypes, OpenDoctypeDialog, ResultDoctypeDialog} from '../actions/doctypeDialog.action';
import {flatMap, map, withLatestFrom} from 'rxjs/operators';
import {selectSelectedDoctype} from '../selectors/doctype.selector';
import {DoctypeDialogComponent} from '../../components/doctypeDialog/doctypeDialog.component';
import {DoctypeInterface} from '../../types/doctype.interface';

@Injectable()
export class DoctypeDialogEffects {

  @Effect()
  openDialog = this.actions.pipe(
    ofType<OpenDoctypeDialog>(DoctypeDialogActionTypes.OpenDialog),
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

  constructor(
    private actions: Actions,
    private store: Store<AppStateInterface>,
    private dialog: MatDialog
  ) {
  }
}
