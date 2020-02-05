import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: "app-form",
  template: `
    <form
      [formGroup]="form"
      novalidate
      grid
      [rowGap]="'1rem'"
      [columnGap]="'1rem'"
    >
      <ng-content></ng-content>
      <app-button
        flex
        [justifyContent]="'flex-start'"
        [alignItems]="'flex-end'"
        [label]="'Save'"
        [icon]="['fas', 'save']"
        [buttonDisabled]="form.invalid"
        (buttonClick)="formSubmit.emit(form)"
      ></app-button>
    </form>
  `
})
export class FormComponent {
  @Input() form: FormGroup;
  @Output() formSubmit = new EventEmitter<NgForm>();
}
