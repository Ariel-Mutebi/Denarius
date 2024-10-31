import uuid from "../types/uuid";
import GroupInterface from "./GroupInterface";

interface GroupOfGroupsInterface<T extends GroupInterface> {
  add(group: T): void;
  get(groupID: uuid): T | undefined;
  query(callback: (parameter: T) => boolean): T | undefined;
}

export default GroupOfGroupsInterface