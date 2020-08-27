import {DoctypeInterface} from './doctype.interface';

export interface DoctypeStateInterface {
  doctypes: DoctypeInterface[];
  selectedDoctype: DoctypeInterface;
}

export const initialDoctypesState: DoctypeStateInterface = {
  doctypes: null,
  selectedDoctype: null
};
