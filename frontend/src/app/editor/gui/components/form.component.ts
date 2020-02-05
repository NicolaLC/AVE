import { NgForm, FormGroup } from "@angular/forms";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  Input
} from "@angular/core";

@Component({
  selector: "app-form",
  template: `
    <form [formGroup]="form" novalidate grid [rowGap]="'.5rem'">
      <ng-content></ng-content>
      <app-button
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
