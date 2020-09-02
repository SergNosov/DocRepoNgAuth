import {DoctypesActionTypes, DoctypeActions} from '../actions/doctypesActionTypes';
import {DoctypeStateInterface, initialDoctypesState} from '../../types/doctypeStateInterface';

export const doctypeReducers = (state = initialDoctypesState, action: DoctypeActions): DoctypeStateInterface => {
  switch (action.type) {
    case DoctypesActionTypes.GetDoctypesSuccess: {
      return {
        ...state,
        doctypes: action.payload
      };
    }
    case DoctypesActionTypes.GetDoctypeSuccess: {
      return {
        ...state,
        selectedDoctype: action.payload
      };
    }
    case DoctypesActionTypes.CloseDialog: {
      return {
        ...state,
        selectedDoctype: null,
        backendErrors: null
      };
    }
    case DoctypesActionTypes.ResultDialogSuccess: {
      return {
        ...state,
        selectedDoctype: action.payload,
        backendErrors: null
      };
    }
    case DoctypesActionTypes.ResultDialogFailure: {
      return {
        ...state,
        selectedDoctype: null,
        backendErrors: action.payload
      };
    }

    default: {
      return state;
    }
  }
};
