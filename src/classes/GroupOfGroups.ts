import GroupOfGroupsInterface from "../interfaces/GroupOfGroupsInterface";
import IDedInterface from "../interfaces/IDedInterface";
import uuid from "../types/uuid";
import Singleton from "./Singleton";

class GroupOfGroups<T extends IDedInterface> extends Singleton implements GroupOfGroupsInterface<T> {
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

  getAll() {
    // I would ideally use structuredClone to make a deep clone.
    // But that is not implemented in jest-dom-environment, which I am using for tests.
    return [...this.groups];
  }
};

export default GroupOfGroups;