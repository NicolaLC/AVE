import { InspectorComponent } from './components/inspector.component';
import { RouterModule } from '@angular/router';
import { TabViewComponent } from './components/tab-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridDirective } from './grid.directive';
import { FlexDirective } from './flex.directive';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEllipsisV, faJedi, faHandPaper, faPlus, faTasks, faWindowMaximize, faCog } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from './components/sidebar.component';

const components = [
  TabViewComponent,
  SidebarComponent,
  InspectorComponent
]
const directives = [
  FlexDirective,
  GridDirective
]

@NgModule({
  declarations: [
    ...directives,
    ...components
  ],
  exports: [
    ...directives,
    ...components
  ],
  imports: [CommonModule,FontAwesomeModule, RouterModule]
})
export class GuiModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faEllipsisV, faJedi, faHandPaper, faPlus, faTasks, faWindowMaximize, faCog);
  }
}
