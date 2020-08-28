import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {DoctypeStateInterface} from '../../types/doctypeStateInterface';

const selectDoctypes = (state: AppStateInterface) => state.doctypes;

export const selectDoctypeList = createSelector(
  selectDoctypes,
  (state: DoctypeStateInterface) => state.doctypes
);

export const selectSelectedDoctype = createSelector(
  selectDoctypes,
  (state: DoctypeStateInterface) => state.selectedDoctype
);
