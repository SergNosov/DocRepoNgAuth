import {DoctypeInterface} from './doctype.interface';
import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface';

export interface DoctypeStateInterface {
  doctypes: DoctypeInterface[];
  selectedDoctype: DoctypeInterface;
  backendErrors: BackendErrorsInterface | null;
}

export const initialDoctypesState: DoctypeStateInterface = {
  doctypes: null,
  selectedDoctype: null,
  backendErrors: null
};
