import {Action} from '@ngrx/store';
import {DoctypeInterface} from '../../types/doctype.interface';


export enum DoctypeActionTypes {
  GetDoctypes = '[Doctype] Get Doctypes',
  GetDoctypesSuccess = '[Doctype] Get Doctypes success',
  GetDoctypeFailure = '[Doctype] Get Doctypes failure',
  GetDoctype = '[Doctype] Get Doctype',
  GetDoctypeSuccess = '[Doctype] Get Doctype success',
}

export class GetDoctypes implements Action {
  public readonly type = DoctypeActionTypes.GetDoctypes;
}

export class GetDoctypesSuccess implements Action {
  public readonly type = DoctypeActionTypes.GetDoctypesSuccess;

  constructor(public  payload: DoctypeInterface[]) {
  }
}

export class GetDoctypesFailure implements Action {
  public readonly type = DoctypeActionTypes.GetDoctypeFailure;
}

export class GetDoctype implements Action {
  public readonly type = DoctypeActionTypes.GetDoctype;

  constructor(public payload: number) {
  }
}

export class GetDoctypeSuccess implements Action {
  public readonly type = DoctypeActionTypes.GetDoctypeSuccess;

  constructor(public  payload: DoctypeInterface) {
  }
}

export type DoctypeActions = GetDoctypes | GetDoctype | GetDoctypesSuccess | GetDoctypeSuccess;
