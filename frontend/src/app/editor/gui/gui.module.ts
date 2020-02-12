import { InputComponent } from "./components/input.component";
import { InspectorComponent } from "./components/inspector.component";
import { RouterModule } from "@angular/router";
import { TabViewComponent } from "./components/tab-view.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GridDirective } from "./grid.directive";
import { FlexDirective } from "./flex.directive";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import {
  faEllipsisV,
  faJedi,
  faHandPaper,
  faPlus,
  faTasks,
  faWindowMaximize,
  faCog,
  faKeyboard,
  faBroadcastTower,
  faRedo,
  faSave,
  faThList,
  faMouse,
  faCode,
  faArrowLeft,
  faArrowRight,
  faExclamation,
  faExclamationTriangle,
  faBook
} from "@fortawesome/free-solid-svg-icons";
import { SidebarComponent } from "./components/sidebar.component";
import { ButtonComponent } from "./components/button.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from "./components/form.component";
import { SafePipe } from "./safe.pipe";
import { SelectComponent } from "./components/select.component";
import { MonacoEditorModule } from "ngx-monaco-editor";
import { KeyboardShortcutsModule } from "ng-keyboard-shortcuts";
import { ToastrModule } from "ngx-toastr";
const components = [
  InputComponent,
  TabViewComponent,
  SidebarComponent,
  InspectorComponent,
  ButtonComponent,
  FormComponent,
  SelectComponent
];
const directives = [FlexDirective, GridDirective];
const pipes = [SafePipe];
@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule,
    KeyboardShortcutsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [...directives, ...components, ...pipes],
  exports: [
    ...directives,
    ...components,
    ...pipes,
    FontAwesomeModule,
    MonacoEditorModule,
    FormsModule,
    KeyboardShortcutsModule,
    BrowserAnimationsModule,
    ToastrModule
  ]
})
export class GuiModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faEllipsisV,
      faJedi,
      faHandPaper,
      faPlus,
      faTasks,
      faWindowMaximize,
      faCog,
      faKeyboard,
      faBroadcastTower,
      faRedo,
      faSave,
      faThList,
      faCode,
      faArrowLeft,
      faArrowRight,
      faExclamation,
      faExclamationTriangle,
      faBook
    );
  }
}
