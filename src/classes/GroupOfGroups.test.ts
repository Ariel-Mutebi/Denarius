import GroupGenders from "../enums/GroupGenders";
import Group from "./Group";
import GroupOfGroups from "./GroupOfGroups"

test("add, get and query methods of GroupOfGroups", () => {
  const gog = new GroupOfGroups();
  const groupName = "Jest";
  const group = new Group(groupName);
  gog.add(group);
  expect(gog.get(group.ID)).toEqual(group);
  expect(gog.query(g => g.name === groupName)).toEqual(group);
});