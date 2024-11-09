import GroupGenders from "../enums/GroupGenders";
import ToDoPriority from "../enums/ToDoPriority";
import instancePropertyCheck from "../functions/forTestFilesOnly/instancePropertyCheck";
import { today } from "../functions/dateGenerators";
import makeStringIndexable from "../types/typeCasters/makeStringIndexable";
import Group from "./Group";
import IDed from "./IDed";
import ToDo from "./ToDo";

describe("Group class:", () => {
  const name = "Testing";
  const gender = GroupGenders.NonBinary;
  const icon = "Something no-one can see anyway.";
  const toDos = [
    new ToDo("Group", "Test Group class using Jest.", today, ToDoPriority.Medium)
  ];
  const group = new Group(name, gender, icon, toDos);

  test("inherits from IDed", () => {
    expect(group instanceof IDed).toBe(true);
  });

  test("constructs object with expected properties.", () => {
    instancePropertyCheck(makeStringIndexable(group), { name, gender, icon, toDos });
  });
});