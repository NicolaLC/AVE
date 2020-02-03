import { EditorService } from './editor.service';
import { ViewsModule } from './views/welcome/views.module';
import { NgModule } from "@angular/core";
import { EditorComponent } from "./editor.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { EditorRoutingModule } from "./editor-routing.module";
import { GuiModule } from "./gui/gui.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    CommonModule, 
    SharedModule, 
    EditorRoutingModule, 
    GuiModule,
    ViewsModule,
    FontAwesomeModule
  ],
  declarations: [EditorComponent],
  providers:[EditorService]
})
export class EditorModule {}
