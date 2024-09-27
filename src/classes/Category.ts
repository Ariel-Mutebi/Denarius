import addProject from "../ui/outputs/addProject"
import bus from "../pubsub/bus"
import Group from "./Group"
import Project from "./Project"
import ToDo from "./ToDo"

class Category extends Group {
  constructor(
    public name: string,
    private filterFunction: (todos: ToDo[]) => ToDo[],
    public icon: String = "bi-calendar-fill"
  ) {
    super()
    addProject(this)
    bus.subscribe("todo-stored", this.updateCategory.bind(this))
    bus.subscribe("todo-storage-deleted", this.removeFromCategory.bind(this))
    bus.subscribe("project-storage-deleted", this.removeProject.bind(this))
  }

  private updateCategory(newToDos: ToDo[]) {
    this.todos = this.filterFunction([...this.todos, ...newToDos])
    this.sort()
  }

  private removeFromCategory(deletion: ToDo) {
    this.todos = this.todos.filter(todo => todo !== deletion)
    this.sort()
  }

  private removeProject(deletion: Project) {
    this.todos = this.todos.filter(todo => todo.parent !== deletion.name)
    this.sort()
  }

  private sort() {
    this.todos = this.todos.sort((a, b) => {
      // Sort by priority (high to low)
      if (a.priorityNum !== b.priorityNum) {
        return b.priorityNum - a.priorityNum;
      }

      // If priorities are the same, sort by due date (earliest to latest)
      const dueDateA = new Date(a.due).getTime();
      const dueDateB = new Date(b.due).getTime();

      return dueDateA - dueDateB;
    });
  }
}

export default Category