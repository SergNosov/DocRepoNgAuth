import {DoctypeActionTypes, DoctypeActions} from '../actions/doctypeActionTypes';
import {DoctypeStateInterface, initialDoctypesState} from '../../types/doctypeStateInterface';

export const doctypeReducers = (state = initialDoctypesState, action: DoctypeActions): DoctypeStateInterface => {
  switch (action.type) {
    case DoctypeActionTypes.GetDoctypesSuccess: {
      return {
        ...state,
        doctypes: action.payload
      };
    }
    case DoctypeActionTypes.GetDoctypeSuccess: {
      return {
        ...state,
        selectedDoctype: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
