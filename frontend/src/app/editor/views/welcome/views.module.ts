import { NewProjectComponent } from './new-project/new-project.component';
import { WelcomeComponent } from './welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const views = [
  WelcomeComponent,
  NewProjectComponent
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...views
  ]
})
export class ViewsModule { }
