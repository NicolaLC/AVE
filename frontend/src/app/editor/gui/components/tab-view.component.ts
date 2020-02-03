import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export class Tab {
    label: string;
    routerLink?: string;
    active: boolean;
    icon?:string[];
    addNewOnClick?: boolean;
}

@Component({
  selector: 'app-tab-view',
  template: `
    <div 
        grid
        [templateColumns]="templateColumns()"
        [templateRows]="'100%'"
    >
        <ng-container
            *ngFor="let tab of tabs"
        >
            <div
                flex 
                (click)="tabClick.emit(tab,$event)"
                [ngClass]="{'Tab': true, 'Active': tab.active}">
                <fa-icon *ngIf="tab.icon" [icon]="tab.icon"></fa-icon> {{tab.label}}
            </div>
        </ng-container>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabViewComponent {
    @Input() tabs: Tab[] = [];
    @Input() tabSize = '200px';
    @Output() tabClick = new EventEmitter<{tab: Tab, event: MouseEvent}>();
    templateColumns = () => (this.tabs || []).map(_ => this.tabSize).join(' ');
}
