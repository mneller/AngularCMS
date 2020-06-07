import {Action, createReducer, createSelector, on} from '@ngrx/store';
import * as AppActions from "./app.actions";

export interface AppState {
  title: string
};

export const initialAppState: AppState = {
  title: 'toBeSet',
};

const appReducer = createReducer(
  initialAppState,
  on(AppActions.setAppTitle, (state, { newTitle }) => ({title: newTitle}))
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
