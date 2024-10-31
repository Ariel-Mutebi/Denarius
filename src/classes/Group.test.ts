import ToDoPriority from "../enums/ToDoPriority";
import instancePropertyCheck from "../forTestFilesOnly/instancePropertyCheck";
import { today } from "../functions/dateGenerators";
import makeStringIndexable from "../typeCasters/makeStringIndexable";
import Group from "./Group";
import IDed from "./IDed";
import ToDo from "./ToDo";

describe("Group class:", () => {
  const name = "Testing";
  const icon = "Something no-one can see anyway.";
  const toDos = [
    new ToDo("Group", "Test Group class using Jest.", today, ToDoPriority.Medium)
  ];
  const group = new Group(name, icon, toDos);

  test("inherits from IDed", () => {
    expect(group instanceof IDed).toBe(true);
  });

  test("constructs object with name, id, and toDos properties.", () => {
    instancePropertyCheck(makeStringIndexable(group), { name, icon, toDos });
  });
});