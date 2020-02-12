export enum PROJECT_TYPE {
  ANGULAR = "ANGULAR",
  ANGULAR_LIB = "ANGULAR_LIB",
  CUSTOM_ELEMENT = "CUSTOM_ELEMENT"
}
export const PROJECT_TYPE_ICONS = {
  [PROJECT_TYPE.ANGULAR]: ["fas", "window-maximize"],
  [PROJECT_TYPE.ANGULAR_LIB]: ["fas", "book"],
  [PROJECT_TYPE.CUSTOM_ELEMENT]: ["fas", "code"]
};
export class Project {
  _id: string;
  type: PROJECT_TYPE;
  name: string;
  title: string;
  port: number;
  path: string;
  fileData?: any;
}
