import { SelectOption } from "./interfaces/select-options";
import { PROJECT_TYPE_ICONS, PROJECT_TYPE } from "./interfaces/project";
export const projectTypeOptions: SelectOption[] = [
  {
    label: PROJECT_TYPE.ANGULAR,
    value: PROJECT_TYPE.ANGULAR,
    icon: PROJECT_TYPE_ICONS[PROJECT_TYPE.ANGULAR]
  },
  {
    label: PROJECT_TYPE.CUSTOM_ELEMENT,
    value: PROJECT_TYPE.CUSTOM_ELEMENT,
    icon: PROJECT_TYPE_ICONS[PROJECT_TYPE.CUSTOM_ELEMENT]
  }
];
