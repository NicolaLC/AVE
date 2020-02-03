import { NewProjectComponent } from '../new-project/new-project.component';
import { WelcomeComponent } from './welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiModule } from '../../gui/gui.module';

const views = [
  WelcomeComponent,
  NewProjectComponent
]
@NgModule({
  imports: [
    CommonModule,
    GuiModule
  ],
  declarations: [
    ...views
  ]
})
export class ViewsModule { }
