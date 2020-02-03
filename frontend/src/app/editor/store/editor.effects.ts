import { editorRoutes } from './../serviceRoutes/editor.routes';
import { EditorService } from './../editor.service';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { navigate, getActiveTabs, getActiveTabsOk, getActiveTabsKo } from './editor.actions';
import { Injectable } from '@angular/core';
import { of, EMPTY } from 'rxjs';
import { exhaustMap, map, catchError, tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class EditorEffects {
  navigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(navigate),
      exhaustMap(action =>
        {
            this.router.navigateByUrl(`/editor/${action.url}`);
            return EMPTY;
        }
      )
    )
  );
 
  getTabs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getActiveTabs),
      switchMap(action =>
        {
            return this.service.get(editorRoutes.tabs)
            .pipe(
              map((response) => {
                if(response) {
                  return getActiveTabsOk({tabs: response});
                }
              }),
              catchError(err => of(getActiveTabsKo()))
            )
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private service: EditorService
  ) {}
}