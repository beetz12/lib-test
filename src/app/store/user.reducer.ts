import { createReducer, on } from '@ngrx/store';
import { loadUserSuccess } from './user.actions';
// import { AppState } from './app.state';
import { User } from './user.model';

export const initialState: User = {} as any;

export const userReducer = createReducer(
    initialState,
    on(loadUserSuccess, (state, { user }) => {
        // console.log('got user = ', user);
        return { ...state, user }
        // return newState
    })
);
