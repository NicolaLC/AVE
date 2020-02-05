import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input
} from "@angular/core";

import { Project } from "../../../static/interfaces/project";

@Component({
  selector: "app-custom-element",
  template: `
    <div grid [templateColumns]="'50% 50%'">
      <div id="customElementCode" grid [templateRows]="'1fr 50px'">
        <ngx-monaco-editor
          [options]="editorOptions"
          [(ngModel)]="code"
        ></ngx-monaco-editor>
        <div>
          <app-button
            label="Salva"
            [icon]="['fas', 'save']"
            (buttonClick)="save()"
          ></app-button>
        </div>
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
  constructor(private elementRef: ElementRef) {}

  ngAfterContentInit(): void {
    this.nestedWindow = this.elementRef.nativeElement.querySelector(
      "#customElementWrapper iframe"
    ).contentWindow;
    this.nestedDocument = this.nestedWindow.document;
    this.loadScript();
    this.generateCustom();
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
      this.nestedDocument.appendChild(domElement);
      this.nestedDocument.close();
    }, 100);
  }

  save() {
    this.updateScript();
  }
}
