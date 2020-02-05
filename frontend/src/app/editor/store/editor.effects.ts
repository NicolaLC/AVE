import { editorRoutes } from "./../serviceRoutes/editor.routes";
import { EditorService } from "./../editor.service";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import {
  navigate,
  getActiveTabs,
  getActiveTabsOk,
  getActiveTabsKo
} from "./editor.actions";
import { Injectable } from "@angular/core";
import { of, EMPTY } from "rxjs";
import { exhaustMap, map, catchError, switchMap } from "rxjs/operators";
import { Router } from "@angular/router";
import {
  getProjects,
  getProjectsOk,
  getProjectsKo,
  selectProject
} from "./editor.actions";
import {
  createNewProject,
  createNewProjectOk,
  createNewProjectKo
} from "./editor.actions";

@Injectable()
export class EditorEffects {
  navigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(navigate),
      exhaustMap(action => {
        this.router.navigateByUrl(`/editor/${action.url}`);
        return EMPTY;
      })
    )
  );

  getTabs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getActiveTabs),
      switchMap(action => {
        return this.service.get(editorRoutes.tabs).pipe(
          map(response => {
            if (response) {
              return getActiveTabsOk({ tabs: response });
            }
          }),
          catchError(err => of(getActiveTabsKo()))
        );
      })
    )
  );

  getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjects),
      switchMap(action => {
        return this.service.get(editorRoutes.projects).pipe(
          map(response => {
            if (response) {
              return getProjectsOk({ projects: response });
            }
          }),
          catchError(err => of(getProjectsKo()))
        );
      })
    )
  );

  createNewProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createNewProject),
      switchMap(action => {
        return this.service
          .post(editorRoutes.projects, { ...action.project })
          .pipe(
            map(response => {
              if (response) {
                return createNewProjectOk();
              }
            }),
            catchError(err => of(createNewProjectKo()))
          );
      })
    )
  );
  createNewProjectKo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createNewProjectKo),
      switchMap(action => {
        alert("An error has occurred while creating the app");
        return EMPTY;
      })
    )
  );

  createNewProjectOk$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createNewProjectOk),
      switchMap(action => {
        alert("Applcation created succesfully");
        return EMPTY;
      })
    )
  );

  selectProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectProject),
      switchMap(({ project }) => {
        return this.service
          .get(`${editorRoutes.runProject}/${project._id}`)
          .pipe(
            switchMap(response => {
              return [navigate({ url: "project-edit" })];
            }),
            catchError(err => EMPTY)
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private service: EditorService
  ) {}
}
