import uuid from "../types/uuid";
import IDedInterface from "./IDedInterface";

interface GroupOfGroupsInterface<T extends IDedInterface> {
  add(group: T): void;
  get(groupID: uuid): T | undefined;
  query(callback: (parameter: T) => boolean): T | undefined;
}

export default GroupOfGroupsInterface