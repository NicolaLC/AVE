import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export class Tab {
    label: string;
    routerLink: string;
    active: boolean;
}

@Component({
  selector: 'app-sidebar',
  template: `
    <div flex>
        <div
          grid
          [templateColumns]="'auto 1fr'"
          [columnGap]="'1rem'"
        >
        <div flex> <fa-icon [icon]="['fas', 'window-maximize']"></fa-icon> </div>
        <div 
          flex
          [alignItems]="'flex-start'"
          [direction]="'column'">
          <label for="scene-name">Scene name</label>
          <input id="scene-name" placeholder="Scene name"/>
        </div>
        </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
}
