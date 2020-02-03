import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export class Tab {
    label: string;
    routerLink: string;
    active: boolean;
}

@Component({
  selector: 'app-inspector',
  template: `
    <div flex>
        inspector
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspectorComponent {
}
