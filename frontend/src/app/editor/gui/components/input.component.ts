import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-input',
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
            [justifyItems]="'flex-start'">
            <div flex> <fa-icon [icon]="icon"></fa-icon> </div>
            <label [for]="inputId">{{label}}</label>
        </div>
        <div 
          flex
          [alignItems]="'flex-start'"
          [direction]="'column'">
          <input [id]="inputId" [placeholder]="inputPlaceholder" [value]="inputValue" [type]="inputType"/>
        </div>
        </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
    @Input() icon: string[] = ['fas', 'keyboard'];
    @Input() label: string = 'Input component';
    @Input() inputId: string = ''
    @Input() inputPlaceholder: string = '';
    @Input() inputValue: any;
    @Input() inputType: string = 'text';
}
