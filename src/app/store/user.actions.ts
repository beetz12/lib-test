import { createAction, props } from '@ngrx/store';
import { User } from './app.state';

export const loadUser = createAction('[Item Component] Load User');

export const loadUserSuccess = createAction(
    '[Item API] Load User Success',
    props<{ user: User }>()
);

export const loadUserFailure = createAction(
    '[Item API] Load User Failure',
    props<{ error: any }>()
);