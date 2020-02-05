import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[flex]"
})
export class FlexDirective {
  @Input() @HostBinding("style.display") display: string = "flex";
  @Input() @HostBinding("style.flex-direction") direction: string = "row";
  @Input() @HostBinding("style.alignContent") alignContent: string = "center";
  @Input() @HostBinding("style.justifyContent") justifyContent: string =
    "center";
  @Input() @HostBinding("style.alignItems") alignItems: string = "center";
  @Input() @HostBinding("style.justifyItems") justifyItems: string = "center";
  @Input() @HostBinding("style.flexWrap") wrap: string = "no-wrap";
}
