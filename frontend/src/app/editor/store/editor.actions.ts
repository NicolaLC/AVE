import { Tab } from './../gui/components/inspector.component';
import { createAction, props } from '@ngrx/store';

export const getActiveTabs = createAction('[AVE Editor] GetActiveTabs');
export const getActiveTabsOk = createAction('[AVE Editor] GetActiveTabs-OK', props<{tabs: Tab[]}>());
export const getActiveTabsKo = createAction('[AVE Editor] GetActiveTabs-KO');
export const navigate = createAction('[AVE Editor] Navigate', props<{url: string}>());