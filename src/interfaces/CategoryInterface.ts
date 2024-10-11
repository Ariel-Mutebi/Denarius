import Group from "./GroupInterface";
import ToDo from "./ToDoInterface";
import uuid from "../types/uuid";

interface CategoryInterface extends Group {
  filterFunction: (todos: ToDo[]) => ToDo[],
  updateCategory(newToDos: ToDo[]): void,
  removeToDo(toDoToDeleteID: uuid): void,
  removeProject(deletionId: uuid): void,
  sort(): void
}

export default CategoryInterface