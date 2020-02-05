import { Component } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { EditorState } from "../../store/editor.reducer";
import { Store } from "@ngrx/store";
import { createNewProject } from "../../store/editor.actions";
import { projectTypeOptions } from "../../static/editor.conf";
import { PROJECT_TYPE } from "../../static/interfaces/project";

@Component({
  selector: "app-new-project",
  template: `
    <app-form
      (formSubmit)="createProject($event)"
      [form]="form"
      id="newProjectForm"
    >
      <app-input
        [label]="'Project name'"
        [inputName]="'name'"
        [parentFormGroup]="form"
        [isRequired]="true"
      ></app-input>
      <app-select
        [label]="'Project type'"
        [inputName]="'type'"
        [parentFormGroup]="form"
        [inputOptions]="typeOpts"
        [isRequired]="true"
      ></app-select>
      <app-input
        [label]="
          form.value.type === 'ANGULAR' ? 'Project title' : 'Project class name'
        "
        [inputName]="'title'"
        [parentFormGroup]="form"
        [isRequired]="true"
      ></app-input>
      <app-input
        [label]="'Project port'"
        [inputName]="'port'"
        [parentFormGroup]="form"
        [isRequired]="form.value.type === 'ANGULAR'"
      ></app-input>
      <app-input
        [label]="'Project path'"
        [inputName]="'path'"
        [parentFormGroup]="form"
        [inputPlaceholder]="'Set by server'"
      ></app-input>
    </app-form>
  `
})
export class NewProjectComponent {
  form: FormGroup;
  typeOpts = projectTypeOptions;
  constructor(private fb: FormBuilder, private store: Store<EditorState>) {
    this.form = new FormGroup({
      name: new FormControl("hello-world"),
      title: new FormControl(),
      port: new FormControl(4201),
      path: new FormControl(),
      type: new FormControl(PROJECT_TYPE.ANGULAR)
    });
  }
  createProject(form: NgForm) {
    this.store.dispatch(createNewProject({ project: form.value }));
  }
}
