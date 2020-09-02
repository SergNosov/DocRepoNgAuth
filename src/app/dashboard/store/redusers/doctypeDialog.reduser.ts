import {DoctypeStateInterface, initialDoctypesState} from '../../types/doctypeStateInterface';
import {DoctypeActions, DoctypesAction} from '../actions/doctypes.action';
import {DoctypeDialogAction, DoctypeDialogActionTypes} from '../actions/doctypeDialog.action';

export const doctypeDialogReducers = (state = initialDoctypesState, action: DoctypeDialogAction): DoctypeStateInterface => {
  switch (action.type) {
    case DoctypeDialogActionTypes.CloseDialog: {
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
