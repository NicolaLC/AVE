import { createAction, props } from "@ngrx/store";
import { Project } from "../static/interfaces/project";
import { Tab } from "../static/interfaces/tab";

export const getActiveTabs = createAction("[AVE Editor] GetActiveTabs");
export const getActiveTabsOk = createAction(
  "[AVE Editor] GetActiveTabs-OK",
  props<{ tabs: Tab[] }>()
);
export const getActiveTabsKo = createAction("[AVE Editor] GetActiveTabs-KO");

export const getProjects = createAction("[AVE Editor] GetProjects");
export const getProjectsOk = createAction(
  "[AVE Editor] GetProjects-OK",
  props<{ projects: Project[] }>()
);
export const getProjectsKo = createAction("[AVE Editor] GetProjects-KO");

export const createNewProject = createAction(
  "[AVE Editor] CreateNewProject",
  props<{ project: Project }>()
);
export const createNewProjectOk = createAction(
  "[AVE Editor] CreateNewProject-OK"
);
export const createNewProjectKo = createAction(
  "[AVE Editor] CreateNewProject-KO"
);

export const selectProject = createAction(
  "[AVE Editor] SelectProject",
  props<{ project: Project }>()
);

export const navigate = createAction(
  "[AVE Editor] Navigate",
  props<{ url: string }>()
);
