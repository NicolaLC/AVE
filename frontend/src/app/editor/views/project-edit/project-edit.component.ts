import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { EditorState } from "../../store/editor.reducer";
import { PROJECT_TYPE } from "../../static/interfaces/project";
import { navigate } from "../../store/editor.actions";

@Component({
  selector: "app-project-edit",
  template: `
    <div
      flex
      [width]="'100%'"
      [height]="'100%'"
      [direction]="'column'"
      *ngIf="!(state$ | async)?.selectedProject"
    >
      <fa-icon [icon]="['fas', 'exclamation-triangle']"></fa-icon>
      <h3>No projects selected</h3>
      <app-button
        [label]="'Select new'"
        [icon]="['fas', 'plus']"
        (click)="navigateTo('projects-list')"
      ></app-button>
    </div>
    <ng-container [ngSwitch]="(state$ | async)?.selectedProject?.type">
      <ng-container *ngSwitchDefault>
        <iframe
          *ngIf="(state$ | async)?.selectedProject?.port"
          [src]="
            'http://localhost:' + (state$ | async)?.selectedProject?.port | safe
          "
        ></iframe>
      </ng-container>
      <ng-container *ngSwitchCase="projectType.CUSTOM_ELEMENT">
        <app-custom-element
          *ngIf="(state$ | async)?.selectedProject"
          [project]="(state$ | async)?.selectedProject"
        ></app-custom-element>
      </ng-container>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectEditComponent implements OnInit {
  state$ = this.store.pipe(select("editor"));
  projectType = PROJECT_TYPE;
  constructor(private store: Store<{ editor: EditorState }>) {}
  ngOnInit(): void {}
  navigateTo(url) {
    this.store.dispatch(navigate({ url }));
  }
}
