import ToDo from "./ToDo"
import IDed from "./IDed"

class Group extends IDed {
  todos: ToDo[]

  constructor() {
    super()
    this.todos = []
  }
}

export default Group