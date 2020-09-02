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
  CancelDialog = '[Doctype Dialog] Cancel dialog',
  SubmitDialog = '[Doctype Dialog] Submit dialog',
  SubmitDialogSuccess = '[Doctype Dialog] Result dialog success',
  SubmitDialogFailure = '[Doctype Dialog] Result dialog failure'
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

export class CancelDoctypeDialog implements Action {
  public readonly type = DoctypesActionTypes.CancelDialog;
}

export class SubmitDoctypeDialog implements Action {
  public readonly type = DoctypesActionTypes.SubmitDialog;

  constructor(public payload: DoctypeInterface) {
  }
}

export class SubmitDoctypeDialogSuccess implements Action {
  public readonly type = DoctypesActionTypes.SubmitDialogSuccess;

  constructor(public payload: DoctypeInterface) {
  }
}

export class SubmitDoctypeDialogFailure implements Action {
  public readonly type = DoctypesActionTypes.SubmitDialogFailure;

  constructor(public payload: BackendErrorsInterface) {
  }
}

export type DoctypeActions =
  | GetDoctypes
  | GetDoctype
  | GetDoctypesSuccess
  | GetDoctypeSuccess
  | OpenDoctypeDialog
  | CancelDoctypeDialog
  | SubmitDoctypeDialog
  | SubmitDoctypeDialogSuccess
  | SubmitDoctypeDialogFailure;
