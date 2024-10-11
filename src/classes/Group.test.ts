import instancePropertyCheck from "../forTestFilesOnly/instancePropertyCheck"
import { today } from "../functions/dateGenerators"
import makeStringIndexable from "../typeCasters/makeStringIndexable"
import Group from "./Group"
import ToDo from "./ToDo"

describe("Group class:", () => {
  test("constructs object with name, id, and toDos properties.", () => {
    const name = "Testing"
    const icon = "Something no-one can see anyway."
    const toDos = [
      new ToDo("Group", "Test Group class using Jest.", today, 3)
    ]
    const group = new Group(name, icon, toDos)
    instancePropertyCheck(makeStringIndexable(group), { name, icon, toDos })
  })
})