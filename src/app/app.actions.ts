import {createAction, props} from '@ngrx/store';

export const setAppTitle = createAction('[APP set title]', props<{newTitle: String}>());
