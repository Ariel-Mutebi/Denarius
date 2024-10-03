import { v4 as uuidGenerator } from "uuid"
import ToDo from "./ToDo"
import uuid from "../types/uuid"

class Group {
  todos: ToDo[]
  id: uuid

  constructor() {
    this.todos = []
    this.id = uuidGenerator() as uuid
  }
}

export default Group