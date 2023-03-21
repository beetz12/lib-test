import { createReducer, on } from '@ngrx/store';
import { loadUserSuccess } from './user.actions';
import { AppState, User } from './app.state';

export const initialState: User | null = null;

export const userReducer = createReducer(
    initialState,
    on(loadUserSuccess, (state, { user }) => {
        console.log('got user = ', user);
        return null
    })
);
