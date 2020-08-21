import {FeedStateInterface} from '../types/feedState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from './actions/getFeed.action';

const initialState: FeedStateInterface = {
  data: null,
  error: null,
  isLoading: false
};

const feedReduser = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false
    })
  )
);

export function redusers(state: FeedStateInterface, action: Action) {
  return feedReduser(state, action);
}

