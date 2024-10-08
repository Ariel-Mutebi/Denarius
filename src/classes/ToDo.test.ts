import instancePropertyCheck from "../functions/instancePropertyCheck";
import makeStringIndexable from "../typeCasters/makeStringIndexable";
import ToDo from "./ToDo";

describe("ToDo class: ", () => {
  let title = "Test ToDo class initialization"
  let description = "Use Jest to perform unit test on the ToDo module"
  let dueDate = new Date()
  let priorityInteger = 3
  const toDo = new ToDo(title, description, dueDate, priorityInteger)

  const toDoPropertiesEqualFunctionScopedVariables = () => {
    instancePropertyCheck(makeStringIndexable(toDo), { title, description, dueDate, priorityInteger })
  }

  test("initializes an object with all expected properties.", toDoPropertiesEqualFunctionScopedVariables)

  test(".updateProperties method works as expected.", () => {
    title = "Test ToDo class .updateProperties method"
    dueDate = new Date()
    toDo.updateProperties({ title, dueDate })
    toDoPropertiesEqualFunctionScopedVariables()
  })

  test(".toggleCheck() method toggles .isChecked boolean property.", () => {
    const initialIsChecked = toDo.isChecked
    toDo.toggleCheck()
    expect(toDo.isChecked).toBe(!initialIsChecked)
    toDo.toggleCheck()
    expect(toDo.isChecked).toBe(initialIsChecked)
  })
})