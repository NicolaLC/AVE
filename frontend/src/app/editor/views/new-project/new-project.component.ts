import { Component } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { EditorState } from "../../store/editor.reducer";
import { Store } from "@ngrx/store";
import { createNewProject } from "../../store/editor.actions";

@Component({
  selector: "app-new-project",
  template: `
    <app-form (formSubmit)="createProject($event)" [form]="form">
      <app-input
        [label]="'Project name'"
        [inputName]="'name'"
        [parentFormGroup]="form"
        [isRequired]="true"
      ></app-input>
      <app-input
        [label]="'Project title'"
        [inputName]="'title'"
        [parentFormGroup]="form"
      ></app-input>
      <app-input
        [label]="'Project port'"
        [inputName]="'port'"
        [parentFormGroup]="form"
      ></app-input>
    </app-form>
  `
})
export class NewProjectComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<EditorState>) {
    this.form = new FormGroup({
      name: new FormControl("hello-ave"),
      title: new FormControl("Hello AVE"),
      port: new FormControl(4201)
    });
  }
  createProject(form: NgForm) {
    this.store.dispatch(createNewProject(form.value));
  }
}
