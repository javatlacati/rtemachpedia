import { SelectItemThreeValuesImpl } from './SelectItemThreeValues';
import {SelectItemGroup} from "./SelectItemGroup.ts";

export interface SelectItemGroupThreeValues extends SelectItemGroup {
  label: string;
  value: string;
  items: SelectItemThreeValuesImpl[];
}
