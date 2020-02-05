import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-input",
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
          <label [for]="inputId">{{ label }}</label>
        </div>
        <div
          flex
          [alignItems]="'flex-start'"
          [direction]="'column'"
          [formGroup]="parentFormGroup"
        >
          <input
            [formControlName]="inputName"
            [id]="inputId"
            [placeholder]="inputPlaceholder"
            [type]="inputType"
            [required]="isRequired"
          />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() icon: string[] = ["fas", "keyboard"];
  @Input() label: string = "Input component";
  @Input() inputId: string = "";
  @Input() inputName: string = "";
  @Input() inputPlaceholder: string = "";
  @Input() inputValue: any;
  @Input() inputType: string = "text";
  @Input() parentFormGroup: FormGroup;
  @Input() isRequired = false;
}
