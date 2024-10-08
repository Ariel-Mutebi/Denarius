import Group from "../classes/Group";
import ToDo from "./ToDoInterface";
import uuid from "../types/uuid";

// This is to prevent circular dependencies.
// If a module needs to know the shape of the Project object,
// but does not need to create a Project instance,
// it should import from here.

// One such circular dependency I had was between the Project and Projects classes.
// Because Projects has an array Project instances, it needed to know the shape of a Project instance.
// But the Project constructor needed to access the Projects instance so it add itself to the said array.
// By making the Projects class "learn" the shape of a Project instance from this interface,
// and ensuring the Project class implements this interface,
// I resolved the circular dependency.

interface ProjectInterface extends Group {
  name: string,
  initialTodos: ToDo[],
  icon: string,
  registerToDos(): void,
  addToDo(todo: ToDo, moveOperation?: boolean): void,
  receiveDrop(toDoData: string): void,
  deleteToDo(toDoId: uuid, moveOperation?: boolean): ToDo,
}

export default ProjectInterface