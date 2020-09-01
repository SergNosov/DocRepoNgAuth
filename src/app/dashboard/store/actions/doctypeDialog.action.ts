import {Action} from '@ngrx/store';
import {DoctypeInterface} from '../../types/doctype.interface';

export enum DoctypeDialogActionTypes {
  OpenDialog = '[Doctype Dialog] Open dialog',
  CloseDialog = '[Doctype Dialog] Close dialog',
  ResultDialog = '[Doctype Dialog] Result dialog'
}

export class OpenDoctypeDialog implements Action {
  readonly type = DoctypeDialogActionTypes.OpenDialog;

  constructor(public payload: DoctypeInterface) {
  }
}

export class CloseDoctypeDialog implements Action {
  readonly type = DoctypeDialogActionTypes.CloseDialog;
}

export class ResultDoctypeDialog implements Action {
  readonly type = DoctypeDialogActionTypes.ResultDialog;

  constructor(public payload: { data: DoctypeInterface }) {
  }
}

export type DoctypeDialogAction = OpenDoctypeDialog | CloseDoctypeDialog | ResultDoctypeDialog;
