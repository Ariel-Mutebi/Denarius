import CategorySecretary from "../interfaces/CategorySecretary"
import bus from "../pubsub/bus"
import uuid from "../types/uuid"
import Categories from "./Categories"
import Group from "./Group"
import ToDo from "./ToDo"

class Category extends Group implements CategorySecretary {
  constructor(
    public name: string,
    public filterFunction: (todos: ToDo[]) => ToDo[],
    public icon: string = "bi-calendar-fill"
  ) {
    super()
    Categories.add(this)
    bus.publish("added-category", this.id)
    bus.subscribe("category-add-todo", this.updateCategory.bind(this))
    bus.subscribe("category-delete-todo", this.removeToDo.bind(this))
    bus.subscribe("category-delete-project", this.removeProject.bind(this))
  }

  updateCategory(newToDo: ToDo) {
    this.todos = this.filterFunction([...this.todos, newToDo])
    this.sort()
  }

  removeToDo(toDoToDeleteID: uuid) {
    const index = this.todos.findIndex(t => t.id == toDoToDeleteID)
    this.todos.splice(index, 1) // no sorting needed here
  }

  removeProject(deletionId: uuid) {
    this.todos = this.todos.filter(todo => todo.parentId !== deletionId)
    this.sort()
  }

  sort() {
    this.todos = this.todos.sort((a, b) => {
      // Sort by priority (high to low)
      if (a.priorityNum !== b.priorityNum) {
        return b.priorityNum - a.priorityNum;
      }

      // If priorities are the same, sort by due date (earliest to latest)
      const dueDateA = new Date(a.dueDate).getTime();
      const dueDateB = new Date(b.dueDate).getTime();

      return dueDateA - dueDateB;
    });
  }
}

export default Category