import {DoctypeStateInterface, initialDoctypesState} from '../../types/doctypeStateInterface';
import {DoctypeActions, DoctypesActionTypes} from '../actions/doctypesActionTypes';

export const doctypeDialogReducers = (state = initialDoctypesState, action: DoctypeActions): DoctypeStateInterface => {
  switch (action.type) {
    case DoctypesActionTypes.CloseDialog: {
      return {
        ...state,
        selectedDoctype: null
      };
    }
    default: {
      return state;
    }
  }
};
