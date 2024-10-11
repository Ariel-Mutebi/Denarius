import GroupInterface from "../interfaces/GroupInterface"
import ToDo from "../interfaces/ToDoInterface"
import IDed from "./IDed"

class Group extends IDed implements GroupInterface {
  constructor(
    public name: string,
    public icon: string = "bi-calendar-fill",
    public toDos: ToDo[] = []
  ) {
    super()
  }
}

export default Group