import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SelectOption } from "../../static/interfaces/select-options";

@Component({
  selector: "app-select",
  template: `
    <div flex>
      <div
        grid
        [templateRows]="'auto auto'"
        [rowGap]="'.5rem'"
        [class]="'InputWrapper'"
      >
        <div
          flex
          grid
          [templateColumns]="'auto 1fr'"
          [justifyItems]="'flex-start'"
        >
          <div flex><fa-icon [icon]="icon"></fa-icon></div>
          <label [for]="inputId">{{ label }} {{ isRequired ? "*" : "" }}</label>
        </div>
        <div
          flex
          [alignItems]="'flex-start'"
          [direction]="'column'"
          [formGroup]="parentFormGroup"
        >
          <select
            [formControlName]="inputName"
            [id]="inputId"
            [required]="isRequired"
          >
            <option
              *ngFor="let option of inputOptions"
              flex
              [display]="'inline-flex'"
              [value]="option.value"
              [selected]="parentFormGroup.value[inputName] === option.value"
            >
              <fa-icon *ngIf="option.icon" [icon]="option.icon"></fa-icon>
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() icon: string[] = ["fas", "keyboard"];
  @Input() label: string = "Input component";
  @Input() inputId: string = "";
  @Input() inputName: string = "";
  @Input() inputValue: any;
  @Input() inputOptions: SelectOption[] = [];
  @Input() parentFormGroup: FormGroup;
  @Input() isRequired = false;
}
