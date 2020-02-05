import { createReducer, on } from "@ngrx/store";
import { cloneDeep } from "lodash";

import { Project } from "../static/interfaces/project";
import { Tab } from "../static/interfaces/tab";
import {
  getActiveTabsOk,
  getProjectsOk,
  navigate,
  selectProject
} from "./editor.actions";

export interface EditorState {
  activeRoute: {
    url: string;
  };
  tabs: Tab[];
  projects: Project[];
  selectedProject: Project;
  sceneMenu: Tab[];
  editorProperties: {
    headerHeight: string;
    bodySize: string;
  };
}

export const initialState: EditorState = {
  activeRoute: { url: "" },
  tabs: [
    {
      active: true,
      label: "Welcome",
      icon: ["fas", "jedi"],
      routerLink: "welcome"
    },
    {
      active: false,
      label: "New project",
      icon: ["fas", "plus"],
      routerLink: "new-project"
    }
  ],
  sceneMenu: [
    {
      label: "FILE",
      active: false
    },
    {
      label: "ADD",
      active: false
    }
  ],
  projects: [],
  selectedProject: null,
  editorProperties: {
    headerHeight: "25px",
    bodySize: "5rem 1fr"
  }
};

const _editorReducer = createReducer(
  initialState,
  on(navigate, (state, action) => {
    let tabs = cloneDeep(state.tabs);
    const activatedTab: Tab = tabs.find(t => t.routerLink === action.url);
    if (activatedTab) {
      tabs.find(t => t.active).active = false;
      activatedTab.active = true;
    }
    return {
      ...state,
      activeRoute: {
        url: activatedTab ? activatedTab.routerLink : "welcome"
      },
      tabs: tabs
    };
  }),
  on(getActiveTabsOk, (state, { tabs }) => {
    return {
      ...state,
      tabs: [...state.tabs, ...tabs]
    };
  }),
  on(getProjectsOk, (state, { projects }) => {
    return {
      ...state,
      projects
    };
  }),
  on(selectProject, (state, { project }) => {
    return {
      ...state,
      selectedProject: project
    };
  })
);

export function editorReducer(state, action) {
  return _editorReducer(state, action);
}
