import { ChangeDetectionStrategy, Component } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { EditorState } from "../../store/editor.reducer";
import { getProjects, selectProject } from "../../store/editor.actions";
import { Project } from "../../static/interfaces/project";

@Component({
  selector: "app-project-list",
  template: `
    <div flex>
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
          <app-button
            [label]="'Open'"
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
  constructor(private store: Store<{ editor: EditorState }>) {
    this.store.dispatch(getProjects());
  }
  navigateToProject(project: Project) {
    this.store.dispatch(selectProject({ project }));
  }
}
