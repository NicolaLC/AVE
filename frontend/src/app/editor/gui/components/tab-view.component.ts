import { Tab } from "../../static/interfaces/tab";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
@Component({
  selector: "app-tab-view",
  template: `
    <div
      grid
      [templateColumns]="templateColumns()"
      [templateRows]="templateRows()"
    >
      <ng-container *ngFor="let tab of tabs">
        <div
          flex
          (click)="tabClick.emit(tab, $event)"
          [ngClass]="{ Tab: true, Active: tab.active }"
          [title]="tab.title || tab.label || tab.routerLink"
        >
          <fa-icon *ngIf="tab.icon" [icon]="tab.icon"></fa-icon> {{ tab.label }}
        </div>
      </ng-container>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabViewComponent {
  @Input() tabs: Tab[] = [];
  @Input() tabSize = "200px";
  @Input() vertical = false;
  @Output() tabClick = new EventEmitter<{ tab: Tab; event: MouseEvent }>();
  templateColumns = () =>
    this.vertical ? "1fr" : (this.tabs || []).map(_ => this.tabSize).join(" ");
  templateRows = () =>
    this.vertical ? (this.tabs || []).map(_ => this.tabSize).join(" ") : "1fr";
}
