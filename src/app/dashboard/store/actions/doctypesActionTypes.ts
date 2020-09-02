import {Action} from '@ngrx/store';
import {DoctypeInterface} from '../../types/doctype.interface';
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface';

export enum DoctypesActionTypes {
  GetDoctypes = '[Doctype] Get Doctypes',
  GetDoctypesSuccess = '[Doctype] Get Doctypes success',
  GetDoctypeFailure = '[Doctype] Get Doctypes failure',
  GetDoctype = '[Doctype] Get Doctype',
  GetDoctypeSuccess = '[Doctype] Get Doctype success',

  OpenDialog = '[Doctype Dialog] Open dialog',
  CloseDialog = '[Doctype Dialog] Close dialog',
  ResultDialog = '[Doctype Dialog] Result dialog',
  ResultDialogSuccess = '[Doctype Dialog] Result dialog success',
  ResultDialogFailure = '[Doctype Dialog] Result dialog failure'
}

export class GetDoctypes implements Action {
  public readonly type = DoctypesActionTypes.GetDoctypes;
}

export class GetDoctypesSuccess implements Action {
  public readonly type = DoctypesActionTypes.GetDoctypesSuccess;

  constructor(public  payload: DoctypeInterface[]) {
  }
}

export class GetDoctypesFailure implements Action {
  public readonly type = DoctypesActionTypes.GetDoctypeFailure;
}

export class GetDoctype implements Action {
  public readonly type = DoctypesActionTypes.GetDoctype;

  constructor(public payload: number) {
  }
}

export class GetDoctypeSuccess implements Action {
  public readonly type = DoctypesActionTypes.GetDoctypeSuccess;

  constructor(public  payload: DoctypeInterface) {
  }
}

export class OpenDoctypeDialog implements Action {
  public readonly type = DoctypesActionTypes.OpenDialog;

  constructor(public payload: DoctypeInterface) {
  }
}

export class CloseDoctypeDialog implements Action {
  public readonly type = DoctypesActionTypes.CloseDialog;
}

export class ResultDoctypeDialog implements Action {
  public readonly type = DoctypesActionTypes.ResultDialog;

  constructor(public payload: DoctypeInterface) {
  }
}

export class ResultDoctypeDialogSuccess implements Action {
  public readonly type = DoctypesActionTypes.ResultDialogSuccess;

  constructor(public payload: DoctypeInterface) {
  }
}

export class ResultDoctypeDialogFailure implements Action {
  public readonly type = DoctypesActionTypes.ResultDialogFailure;

  constructor(public payload: BackendErrorsInterface) {
  }
}

export type DoctypeActions =
  | GetDoctypes
  | GetDoctype
  | GetDoctypesSuccess
  | GetDoctypeSuccess
  | OpenDoctypeDialog
  | CloseDoctypeDialog
  | ResultDoctypeDialog
  | ResultDoctypeDialogSuccess
  | ResultDoctypeDialogFailure;
