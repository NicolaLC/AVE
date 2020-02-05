import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { EditorState } from "../../store/editor.reducer";

@Component({
  selector: "app-project-edit",
  template: `
    <iframe
      *ngIf="(state$ | async)?.selectedProject?.port"
      [src]="
        'http://localhost:' + (state$ | async)?.selectedProject?.port | safe
      "
    ></iframe>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectEditComponent implements OnInit {
  state$ = this.store.pipe(select("editor"));
  constructor(private store: Store<{ editor: EditorState }>) {}
  ngOnInit(): void {}
}
