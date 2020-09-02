import {Action} from '@ngrx/store';
import {DoctypeInterface} from '../../types/doctype.interface';

export enum DoctypeDialogActionTypes {
  OpenDialog = '[Doctype Dialog] Open dialog',
  CloseDialog = '[Doctype Dialog] Close dialog',
  ResultDialog = '[Doctype Dialog] Result dialog'
}

export class OpenDoctypeDialog implements Action {
  public readonly type = DoctypeDialogActionTypes.OpenDialog;

  constructor(public payload: DoctypeInterface) {
  }
}

export class CloseDoctypeDialog implements Action {
  public readonly type = DoctypeDialogActionTypes.CloseDialog;
}

export class ResultDoctypeDialog implements Action {
  public readonly type = DoctypeDialogActionTypes.ResultDialog;

  constructor(public payload: DoctypeInterface) {
  }
}

export type DoctypeDialogAction = OpenDoctypeDialog | CloseDoctypeDialog | ResultDoctypeDialog;
