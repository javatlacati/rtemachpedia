import {SelectItem} from "primereact/selectitem";

/**
 * Represents a group of select items.
 * @group Interface
 */
export interface SelectItemGroup {
  label: string;
  value?: any;
  items: SelectItem[];
}
