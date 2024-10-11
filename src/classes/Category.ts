import CategoryInterface from "../interfaces/CategoryInterface"
import bus from "../pubsub/bus"
import uuid from "../types/uuid"
import Categories from "./Categories"
import Group from "./Group"
import ToDo from "../interfaces/ToDoInterface"

class Category extends Group implements CategoryInterface {
  constructor(
    name: string,
    public filterFunction: (todos: ToDo[]) => ToDo[],
    icon: string = "bi-calendar-fill"
  ) {
    super(name, icon)
    Categories.add(this)
    bus.publish("added-category", this.id)
    bus.subscribe("category-add-todo", this.updateCategory.bind(this))
    bus.subscribe("category-delete-todo", this.removeToDo.bind(this))
    bus.subscribe("category-delete-project", this.removeProject.bind(this))
  }

  updateCategory(newToDo: ToDo) {
    this.toDos = this.filterFunction([...this.toDos, newToDo])
    this.sort()
  }

  removeToDo(toDoToDeleteID: uuid) {
    const index = this.toDos.findIndex(t => t.id == toDoToDeleteID)
    this.toDos.splice(index, 1) // no sorting needed here
  }

  removeProject(deletionId: uuid) {
    this.toDos = this.toDos.filter(todo => todo.parentId !== deletionId)
    this.sort()
  }

  sort() {
    this.toDos = this.toDos.sort((a, b) => {
      // Sort by priority (high to low)
      if (a.priorityInteger !== b.priorityInteger) {
        return b.priorityInteger - a.priorityInteger;
      }

      // If priorities are the same, sort by due date (earliest to latest)
      const dueDateA = new Date(a.dueDate).getTime();
      const dueDateB = new Date(b.dueDate).getTime();

      return dueDateA - dueDateB;
    });
  }
}

export default Category