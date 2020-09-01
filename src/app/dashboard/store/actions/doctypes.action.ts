import {Action} from '@ngrx/store';
import {DoctypeInterface} from '../../types/doctype.interface';


export enum DoctypesAction {
  GetDoctypes = '[Doctype] Get Doctypes',
  GetDoctypesSuccess = '[Doctype] Get Doctypes success',
  GetDoctypeFailure = '[Doctype] Get Doctypes failure',
  GetDoctype = '[Doctype] Get Doctype',
  GetDoctypeSuccess = '[Doctype] Get Doctype success',
}

export class GetDoctypes implements Action {
  public readonly type = DoctypesAction.GetDoctypes;
}

export class GetDoctypesSuccess implements Action {
  public readonly type = DoctypesAction.GetDoctypesSuccess;

  constructor(public  payload: DoctypeInterface[]) {
  }
}

export class GetDoctypesFailure implements Action {
  public readonly type = DoctypesAction.GetDoctypeFailure;
}

export class GetDoctype implements Action {
  public readonly type = DoctypesAction.GetDoctype;

  constructor(public payload: number) {
  }
}

export class GetDoctypeSuccess implements Action {
  public readonly type = DoctypesAction.GetDoctypeSuccess;

  constructor(public  payload: DoctypeInterface) {
  }
}

export type DoctypeActions = GetDoctypes | GetDoctype | GetDoctypesSuccess | GetDoctypeSuccess;
