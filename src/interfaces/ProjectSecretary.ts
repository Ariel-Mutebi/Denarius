import Group from "../classes/Group";
import ToDo from "../classes/ToDo";
import uuid from "../types/uuid";

// This is to prevent circular dependencies.
// If a module needs to know the shape of the Project object,
// but does not need to create a Project instance,
// it should import from here.

interface ProjectSecretary extends Group {
  name: string,
  initialTodos: ToDo[],
  icon: string,
  registerToDos(): void,
  addToDo(todo: ToDo, moveOperation?: boolean): void,
  receiveDrop(toDoData: string): void,
  deleteToDo(toDoId: uuid, moveOperation?: boolean): ToDo,
}

export default ProjectSecretary