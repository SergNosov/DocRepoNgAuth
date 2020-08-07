import {AuthStateInterface} from '../types/authState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {registerAction, registerFailureAction, registerSuccessAction} from './actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
};

const authReduser = createReducer(
  initialState,
  on(registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true
    })
  ),
  on(registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: null,
      isLoggedIn: false,
      validationErrors: action.errors
    }))
);

export function redusers(state: AuthStateInterface, action: Action) {
  return authReduser(state, action);
}
