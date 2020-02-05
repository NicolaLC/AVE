import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
@Component({
  selector: "app-button",
  template: `
    <div
      flex
      [class]="'Button'"
      [display]="'inline-flex'"
      [id]="buttonId"
      [class.Disabled]="buttonDisabled"
      (click)="buttonClick.emit($event)"
    >
      <fa-icon flex [icon]="icon"></fa-icon>
      <label [for]="buttonId">{{ label }}</label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() icon: string[] = ["fas", "mouse"];
  @Input() label: string = "button component";
  @Input() buttonId: string = "";
  @Input() buttonPlaceholder: string = "";
  @Input() buttonDisabled = false;

  @Output() buttonClick = new EventEmitter<any>();
}
