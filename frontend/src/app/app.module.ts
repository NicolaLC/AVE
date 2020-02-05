import "../polyfills";
import "reflect-metadata";

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { EditorModule } from "./editor/editor.module";
import { EditorEffects } from "./editor/store/editor.effects";
import { editorReducer } from "./editor/store/editor.reducer";
import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";
import { NGX_MONACO_EDITOR_CONFIG } from "ngx-monaco-editor";

// NG Translate
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    EditorModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({ editor: editorReducer }),
    EffectsModule.forRoot([EditorEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [{ provide: NGX_MONACO_EDITOR_CONFIG, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule {}
