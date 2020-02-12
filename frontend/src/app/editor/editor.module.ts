import { EditorService } from "./editor.service";
import { ViewsModule } from "./views/views.module";
import { NgModule } from "@angular/core";
import { EditorComponent } from "./editor.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { EditorRoutingModule } from "./editor-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GuiModule } from "./gui/gui.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EditorRoutingModule,
    ViewsModule,
    GuiModule,
    FontAwesomeModule
  ],
  declarations: [EditorComponent],
  providers: [EditorService]
})
export class EditorModule {}
