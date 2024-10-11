import Projects from "../classes/Projects";
import bus from "../pubsub/bus";
import Group from "./Group";
import ToDoInterface from "../interfaces/ToDoInterface";
import uuid from "../types/uuid";
import ProjectInterface from "../interfaces/ProjectInterface";

class Project extends Group implements ProjectInterface {
  constructor(
    name: string,
    initialToDos?: ToDoInterface[],
    icon?: string,
  ) {
    super(name, icon)
    
    if(initialToDos) {
      initialToDos.forEach(initialToDo => this.addToDo(initialToDo))
    }

    Projects.add(this)
    bus.publish("added-project", this.id)
    bus.subscribe(`deletion-in-${this.id}`, this.deleteToDo.bind(this))
  }

  addToDo(todo: ToDoInterface, moveOperation = false) {
    todo.updateProperties({ parentId: this.id })
    this.toDos.push(todo)
    bus.publish("todo-added", [todo, true, !moveOperation])
    bus.publish("projects-change")
    bus.publish("category-add-todo", todo)
    bus.publish("todo-counted", [this.id, true])
  }

  receiveDrop(toDoData: string) {
    const toDoToReceive: ToDoInterface = JSON.parse(toDoData)
    const parent = Projects.query(project => project.id == toDoToReceive.parentId)
    if(parent) {
      const movingToDo = parent.deleteToDo(toDoToReceive.id, true)
      if(movingToDo) this.addToDo(movingToDo, true)
    }
  }

  // If not called by receiveDrop method,
  // I hope this also removes the object from memory... eventually.
  // But since JavaScript is garbage-collected,
  // I guess we'll never know.
  deleteToDo(toDoId: uuid, moveOperation = false) {
    const index = this.toDos.findIndex(t => t.id == toDoId)
    const deletion = this.toDos.splice(index, 1)[0]
    bus.publish("todo-counted", [this.id, false])
    bus.publish("category-delete-todo", toDoId)
    bus.publish("projects-change")
    bus.publish("todo-deleted", toDoId)
    if(!moveOperation) deletion.awardCompletion()
    return deletion
  }
}

export default Project