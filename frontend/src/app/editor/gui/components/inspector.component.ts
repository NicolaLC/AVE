import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-inspector",
  template: `
    <div flex>
      inspector
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspectorComponent {}
