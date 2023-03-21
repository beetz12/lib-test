import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { loadUser, loadUserSuccess, loadUserFailure } from './user.actions';
import { User as User } from './app.state';

@Injectable()
export class UserEffects {
    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUser),
            switchMap(() =>
                this.http
                    .get<User>('https://swapi.dev/api/people/1')
                    .pipe(
                        map(user => loadUserSuccess({ user })),
                        catchError(error => of(loadUserFailure({ error })))
                    )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) { }
}
