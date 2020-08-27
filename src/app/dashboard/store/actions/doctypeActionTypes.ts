import {Action} from '@ngrx/store';
import {DoctypeInterface} from '../../types/doctype.interface';


export enum DoctypeActionTypes {
  GetDoctypes = '[Doctype] Get Doctypes',
  GetDoctypesSuccess = '[Doctype] Get Doctypes Success',
  GetDoctype = '[Doctype] Get Doctype',
  GetDoctypeSuccess = '[Doctype] Get Doctype Success',
}

export class GetDoctypes implements Action {
  public readonly type = DoctypeActionTypes.GetDoctypes;
}

export class GetDoctypesSuccess implements Action {
  public readonly type = DoctypeActionTypes.GetDoctypesSuccess;

  constructor(public  payload: DoctypeInterface[]) {
  }
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
