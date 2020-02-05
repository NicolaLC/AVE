import { ChangeDetectionStrategy, Component } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { EditorState } from "../../store/editor.reducer";
import {
  getProjects,
  selectProject,
  navigate
} from "../../store/editor.actions";
import { Project } from "../../static/interfaces/project";
import { projectTypeOptions } from "../../static/editor.conf";

@Component({
  selector: "app-project-list",
  template: `
    <div
      flex
      [width]="'100%'"
      [height]="'100%'"
      [direction]="'column'"
      *ngIf="!(state$ | async)?.projects?.length"
    >
      <fa-icon [icon]="['fas', 'exclamation-triangle']"></fa-icon>
      <h3>No projects found</h3>
      <app-button
        [label]="'Create new'"
        [icon]="['fas', 'plus']"
        (click)="navigateTo('new-project')"
      ></app-button>
    </div>
    <div grid *ngIf="(state$ | async)?.projects?.length">
      <div
        grid
        [templateRows]="'50px 1fr'"
        [class]="'Card'"
        *ngFor="let project of (state$ | async)?.projects"
      >
        <h2 flex [justifyContent]="'flex-start'">{{ project.name }}</h2>
        <div
          flex
          [direction]="'column'"
          [alignItems]="'flex-start'"
          [class]="'CardInfo'"
        >
          <p><b>Title:</b> {{ project.title || " - " }}</p>
          <p><b>Path:</b> {{ project.path || " - " }}</p>
          <p>
            <b>Type:</b>
            <fa-icon
              *ngIf="projectTypeOptions[project.type]"
              [icon]="projectTypeOptions[project.type].icon"
            ></fa-icon
            >{{ project.type || " - " }}
          </p>
          <p><b>Port:</b> {{ project.port || " - " }}</p>
          <app-button
            [label]="'Open'"
            [icon]="['fas', 'arrow-right']"
            (click)="navigateToProject(project)"
          ></app-button>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent {
  state$ = this.store.pipe(select("editor"));
  projectTypeOptions = projectTypeOptions;
  constructor(private store: Store<{ editor: EditorState }>) {
    this.store.dispatch(getProjects());
  }
  navigateToProject(project: Project) {
    this.store.dispatch(selectProject({ project }));
  }
  navigateTo(url) {
    this.store.dispatch(navigate({ url }));
  }
}
