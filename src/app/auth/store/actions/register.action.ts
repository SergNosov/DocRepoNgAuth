import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../action-types.enum';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>()
);
