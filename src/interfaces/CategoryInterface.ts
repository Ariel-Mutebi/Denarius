import Group from "./GroupInterface";
import ToDo from "./ToDoInterface";
import uuid from "../types/uuid";
import filterFunction from "../types/filterFunction";

interface CategoryInterface extends Group {
  filterFunction: filterFunction,
  updateCategory(newToDos: ToDo[]): void,
  removeToDo(toDoToDeleteID: uuid): void,
  removeProject(deletionId: uuid): void,
  sort(): void
}

export default CategoryInterface