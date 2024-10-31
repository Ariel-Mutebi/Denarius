import GroupInterface from "../interfaces/GroupInterface";
import GroupOfGroupsInterface from "../interfaces/GroupOfGroupsInterface";
import uuid from "../types/uuid";
import Singleton from "./Singleton";

class GroupOfGroups<T extends GroupInterface> extends Singleton implements GroupOfGroupsInterface<T> {
  protected groups: T[] = [];

  add(group: T) {
    this.groups.push(group);
  };

  get(groupID: uuid) {
    return this.query(p => p.ID === groupID);
  };

  query(callback: (parameter: T) => boolean) {
    return this.groups.find(callback);
  };
};

export default GroupOfGroups;