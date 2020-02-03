import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export class Tab {
    label: string;
    routerLink: string;
    active: boolean;
}

@Component({
  selector: 'app-sidebar',
  template: `
    <app-input
      [label]="'Scene Name'"
      [inputValue]="'Homepage'"
    ></app-input>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
}
