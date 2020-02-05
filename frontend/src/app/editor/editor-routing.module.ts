import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { EditorComponent } from "./editor.component";
import { NewProjectComponent } from "./views/new-project/new-project.component";
import { ProjectListComponent } from "./views/project-list/project-list.component";
import { WelcomeComponent } from "./views/welcome/welcome.component";
import { ProjectEditComponent } from "./views/project-edit/project-edit.component";

const routes: Routes = [
  {
    path: "editor",
    component: EditorComponent,
    children: [
      {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full"
      },
      {
        path: "welcome",
        component: WelcomeComponent
      },
      {
        path: "new-project",
        component: NewProjectComponent
      },
      {
        path: "projects-list",
        component: ProjectListComponent
      },
      {
        path: "project-edit",
        component: ProjectEditComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {}
