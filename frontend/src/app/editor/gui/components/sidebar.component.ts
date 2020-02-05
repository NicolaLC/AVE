import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter
} from "@angular/core";
import { welcomeSidebarTabs } from "../../static/sidebar.conf";
import { Tab } from "../../static/interfaces/tab";

@Component({
  selector: "app-sidebar",
  template: `
    <app-tab-view
      [tabs]="welcomeSidebarTabs"
      [vertical]="true"
      [tabSize]="'50px'"
      (tabClick)="tabClick.emit($event)"
    >
    </app-tab-view>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  welcomeSidebarTabs = welcomeSidebarTabs;
  @Output() tabClick = new EventEmitter<Tab>();
}
