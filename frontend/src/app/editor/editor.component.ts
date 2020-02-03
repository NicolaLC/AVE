import { navigate, getActiveTabs } from './store/editor.actions';
import { Tab } from './gui/components/tab-view.component';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { EditorState } from './store/editor.reducer';
@Component({
  selector: 'app-editor',
  templateUrl: 'editor.component.html'
})
export class EditorComponent {
  state$ = this.store.pipe(select('editor'));

  constructor(private store: Store<{editor: EditorState}>) {
    this.store.dispatch(getActiveTabs());
  }

  onTabClick(tab: Tab, event: MouseEvent) {
    this.store.dispatch(navigate({url: tab.routerLink}));
  }
}
