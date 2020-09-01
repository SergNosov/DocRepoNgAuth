import {DoctypesAction, DoctypeActions} from '../actions/doctypes.action';
import {DoctypeStateInterface, initialDoctypesState} from '../../types/doctypeStateInterface';

export const doctypeReducers = (state = initialDoctypesState, action: DoctypeActions): DoctypeStateInterface => {
  switch (action.type) {
    case DoctypesAction.GetDoctypesSuccess: {
      return {
        ...state,
        doctypes: action.payload
      };
    }
    case DoctypesAction.GetDoctypeSuccess: {
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
