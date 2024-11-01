import GroupInterface from "../interfaces/GroupInterface";
import Group from "./Group";
import GroupOfGroups from "./GroupOfGroups"

test("add, get and query methods of GroupOfGroups", () => {
  const GOGs = new GroupOfGroups<GroupInterface>();
  const groupName = "Jest";
  const group = new Group(groupName);
  GOGs.add(group);
  expect(GOGs.getAll()).toEqual([group]);
  expect(GOGs.get(group.ID)).toBe(group);
  expect(GOGs.query(g => g.name === groupName)).toBe(group);
});