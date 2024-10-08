import Group from "../classes/Group";
import ToDo from "./ToDoInterface";
import uuid from "../types/uuid";

interface CategoryInterface extends Group {
  name: string,
  icon: string,
  filterFunction: (todos: ToDo[]) => ToDo[],
  updateCategory(newToDo: ToDo): void,
  removeToDo(toDoToDeleteID: uuid): void,
  removeProject(deletionId: uuid): void,
  sort(): void
}

export default CategoryInterface