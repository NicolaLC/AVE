import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-welcome",
  template: `
    <h1 flex>Welcome to AVE</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {}
