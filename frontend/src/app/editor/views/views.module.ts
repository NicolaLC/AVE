import { NewProjectComponent } from "./new-project/new-project.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GuiModule } from "../gui/gui.module";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectEditComponent } from "./project-edit/project-edit.component";
import { CustomElementWrapperComponent } from "./project-edit/project-wrapper/custom-element.wrapper.component";

const views = [
  WelcomeComponent,
  NewProjectComponent,
  ProjectListComponent,
  ProjectEditComponent,
  CustomElementWrapperComponent
];
@NgModule({
  imports: [CommonModule, GuiModule],
  declarations: [...views]
})
export class ViewsModule {}
