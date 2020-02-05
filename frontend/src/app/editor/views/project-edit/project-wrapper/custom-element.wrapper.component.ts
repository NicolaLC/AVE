import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input
} from "@angular/core";

import { Project } from "../../../static/interfaces/project";
import { EditorService } from "../../../editor.service";
import { editorRoutes } from "../../../serviceRoutes/editor.routes";
import { first, map, catchError } from "rxjs/operators";
import { EMPTY } from "rxjs";
import { ShortcutInput, AllowIn } from "ng-keyboard-shortcuts";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-custom-element",
  template: `
    <ng-keyboard-shortcuts [shortcuts]="shortcuts"></ng-keyboard-shortcuts>
    <div grid [templateColumns]="'50% 50%'">
      <div id="customElementCode" grid [templateRows]="'50px 1fr'">
        <div flex [alignContent]="'flex-start'" [justifyContent]="'flex-start'">
          <app-button
            label="Salva"
            [icon]="['fas', 'save']"
            (buttonClick)="save()"
          ></app-button>
        </div>
        <ngx-monaco-editor
          [options]="editorOptions"
          [(ngModel)]="code"
        ></ngx-monaco-editor>
      </div>
      <div flex [width]="'100%'" id="customElementWrapper">
        <iframe></iframe>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomElementWrapperComponent implements AfterContentInit {
  @Input() project: Project;

  editorOptions = { theme: "vs-dark", language: "javascript" };
  code: any = null;
  nestedDocument;
  nestedWindow;
  shortcuts: ShortcutInput[] = [];

  constructor(
    private elementRef: ElementRef,
    private service: EditorService,
    private toastr: ToastrService
  ) {}

  ngAfterContentInit(): void {
    this.nestedWindow = this.elementRef.nativeElement.querySelector(
      "#customElementWrapper iframe"
    ).contentWindow;
    this.nestedDocument = this.nestedWindow.document;
    this.loadScript();
    this.generateCustom();
    this.shortcuts.push({
      key: "ctrl + s",
      preventDefault: true,
      allowIn: [AllowIn.Textarea, AllowIn.Input],
      command: e => this.save()
    });
  }

  loadScript() {
    if (!this.nestedWindow.customElements.get(this.project.name)) {
      const s = this.nestedDocument.createElement("script");
      s.type = "text/javascript";
      this.code =
        this.code ||
        String.fromCharCode.apply(
          null,
          new Uint8Array(this.project.fileData.data)
        );
      s.innerHTML = this.code;
      this.nestedDocument.body.appendChild(s);
    }
  }

  updateScript() {
    const wrapper = this.elementRef.nativeElement.querySelector(
      "#customElementWrapper"
    );
    wrapper.innerHTML = "";
    const iframe = document.createElement("iframe");
    wrapper.appendChild(iframe);
    setTimeout(() => {
      this.nestedWindow = iframe.contentWindow;
      this.nestedDocument = this.nestedWindow.document;
      this.loadScript();
      this.generateCustom();
    }, 100);
  }

  generateCustom() {
    const domElement = this.nestedDocument.createElement(this.project.name);
    setTimeout(() => {
      this.nestedDocument.open();
      domElement.addEventListener(`${this.project.name}-initialized`, () => {
        this.toastr.info("received initialized message from CustomComponent");
      });
      domElement.addEventListener(`${this.project.name}-disposed`, () => {
        this.toastr.info("received disposed message from CustomComponent");
      });
      this.nestedDocument.appendChild(domElement);
      this.nestedDocument.close();
      setTimeout(() => {
        domElement.dispatchEvent(
          new CustomEvent(`${this.project.name}-update`, {
            bubbles: true,
            detail: {
              messageFromAve: `AVE ${this.project.name}!`
            }
          })
        );
      }, 1500);
    }, 100);
  }

  save() {
    this.service
      .post(editorRoutes.saveFile, {
        path: `${this.project.path}.js`,
        content: this.code
      })
      .pipe(
        first(),
        map(response => {
          this.toastr.success(response.message);
          this.updateScript();
        }),
        catchError(err => {
          this.toastr.error(err.message);
          return EMPTY;
        })
      )
      .subscribe();
  }
}
