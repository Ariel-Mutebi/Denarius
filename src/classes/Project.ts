import Projects from "../classes/Projects";
import bus from "../pubsub/bus";
import Group from "./Group";
import ToDo from "./ToDo";
import uuid from "../types/uuid";

class Project extends Group {
  constructor(
    public name: string,
    public initialTodos: ToDo[],
    public icon: string = "bi-calendar-fill"
  ) {
    super()
    Projects.add(this)
    this.registerToDos()
    bus.publish("added-project", this.id)
    bus.subscribe(`deletion-in-${this.id}`, this.deleteToDo.bind(this))
  }

  registerToDos() {
    if(this.initialTodos.length > 0) {
      this.initialTodos.forEach((initTodo, index) => {
        this.initialTodos.splice(index, 1)
        this.addToDo(initTodo)
      })
    }
  }

  addToDo(todo: ToDo, moveOperation = false) {
    todo.parentId = this.id
    this.todos.push(todo)
    bus.publish("todo-added", [todo, true, !moveOperation])
    bus.publish("projects-change")
    bus.publish("category-add-todo", [todo])
    bus.publish("todo-counted", [this.id, true])
  }

  receiveDrop(toDoData: string) {
    const toDoToReceive: ToDo = JSON.parse(toDoData)
    const parent = Projects.query(project => project.id == toDoToReceive.parentId)
    if(parent) {
      const movingToDo = parent.deleteToDo(toDoToReceive.id, true)
      if(movingToDo) this.addToDo(movingToDo, true)
    }
  }

  deleteToDo(toDoId: uuid, moveOperation = false) {
    const index = this.todos.findIndex(t => t.id == toDoId)
    const deletion = this.todos.splice(index, 1)[0]
    bus.publish("todo-counted", [this.id, false])
    bus.publish("category-delete-todo", deletion)
    bus.publish("projects-change")
    bus.publish("todo-deleted", toDoId)
    if(!moveOperation) deletion.awardCompletion()
    return deletion
  }
}

export default Project