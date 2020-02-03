import { cloneDeep } from 'lodash';
import { Tab } from '../gui/components/tab-view.component';
import { navigate, getActiveTabsOk } from './editor.actions';
import { createReducer, on } from '@ngrx/store';

export interface EditorState {
	activeRoute: {
		url: string;
	};
	tabs: Tab[];
	sceneMenu: Tab[];
	editorProperties: {
		headerHeight: string;
		bodySize: string;
	}
}

export const initialState: EditorState = {
	activeRoute: {url: ''},
	tabs: [],
	sceneMenu: [
		{
			label: 'FILE',
			active: false
		},
		{
			label: 'ADD',
			active: false,
		}
	],
	editorProperties: {
		headerHeight: '50px',
		bodySize: '20% 60% 20%'
	}
};

const _editorReducer = createReducer(initialState,
	on(navigate, (state, action) => {
		let tabs = cloneDeep(state.tabs);
		const activatedTab: Tab = tabs.find(t => t.routerLink === action.url);
		if(activatedTab) {
			tabs.find(t => t.active).active = false;
			activatedTab.active = true;
		}
		return {
			...state,
			activeRoute: {
				url: activatedTab.routerLink
			},
			tabs: tabs
		}
	}),
	on(getActiveTabsOk, (state, action) => {
		return {
			...state,
			tabs: action.tabs
		}
	}),
);

export function editorReducer(state, action) {
    return _editorReducer(state, action);
}