import { Tab } from "./interfaces/tab";
export const welcomeSidebarTabs: Tab[] = [
  {
    active: false,
    routerLink: "project-lists",
    icon: ["fas", "th-list"],
    title: "Project list"
  },
  {
    active: false,
    routerLink: "new-project",
    icon: ["fas", "plus"],
    title: "Create nwe project"
  }
];
