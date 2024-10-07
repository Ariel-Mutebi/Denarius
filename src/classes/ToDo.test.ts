import ToDo from "./ToDo";

describe("ToDo class: ", () => {
  const title = "Test ToDo class"
  const description = "Use Jest to perform unit test on the ToDo module"
  const dueDate = new Date()
  const priorityNumber = 3
  const toDo = new ToDo(title, description, dueDate, priorityNumber)

  test("instantiates an object with all expected properties.", () => {
    expect(toDo.title).toBe(title)
    expect(toDo.description).toBe(description)
    expect(toDo.dueDate).toBe(dueDate)
    expect(toDo.priorityNum).toBe(priorityNumber)
    expect(toDo.checked).toBe(false)
  })
})