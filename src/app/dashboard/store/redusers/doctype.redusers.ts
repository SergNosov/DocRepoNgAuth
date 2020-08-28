import {DoctypeActionTypes, DoctypeActions} from '../actions/doctypeActionTypes';
import {DoctypeStateInterface, initialDoctypesState} from '../../types/doctypeStateInterface';

export const doctypeReducers = (state = initialDoctypesState, action: DoctypeActions): DoctypeStateInterface => {
  console.log('doctypeReducers');
  switch (action.type) {
    case DoctypeActionTypes.GetDoctypesSuccess: {
      console.log('doctypeReducers1');
      return {
        ...state,
        doctypes: action.payload
      };
    }
    case DoctypeActionTypes.GetDoctypeSuccess: {
      console.log('doctypeReducers2');
      return {
        ...state,
        selectedDoctype: action.payload
      };
    }
    default: {
      console.log('doctypeReducers3');
      return state;
    }
  }
};
