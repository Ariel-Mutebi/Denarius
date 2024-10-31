import CategoryInterface from "../interfaces/CategoryInterface"
import PS from "./PubSub"
import uuid from "../types/uuid"
import Categories from "./Categories"
import Group from "./Group"
import ToDoInterface from "../interfaces/ToDoInterface"
import ProjectsInstance from "./Projects"
import filterFunction from "../types/filterFunction"
import PSE from "../enums/PubSubEvents"
import GroupGenders from "../enums/GroupGenders"

class Category extends Group implements CategoryInterface {
  constructor(
    name: string,
    public filterFunction: filterFunction,
    icon?: string
  ) {
    super(name, GroupGenders.Category, icon);
    this.updateCategory(ProjectsInstance.getAllToDos());
    Categories.add(this);
    
    PS.publish(PSE.PostCategory, this.ID);
    PS.subscribe(PSE.PutToDo, this.updateCategory.bind(this));
    PS.subscribe(PSE.DeleteToDo, this.removeToDo.bind(this));
    PS.subscribe(PSE.DeleteProject, this.removeProject.bind(this));
  };

  updateCategory(newToDos: ToDoInterface[] | ToDoInterface) {
    if(Array.isArray(newToDos)) {
      this.toDos = this.filterFunction([...this.toDos, ...newToDos]);
    } else {
      this.toDos = this.filterFunction([...this.toDos, newToDos]);
    }
    this.sort();
  };

  removeToDo(toDoToDeleteID: uuid) {
    const index = this.toDos.findIndex(t => t.ID == toDoToDeleteID);
    this.toDos.splice(index, 1);
  };

  removeProject(deletionId: uuid) {
    this.toDos = this.toDos.filter(todo => todo.parentID !== deletionId);
  };

  sort() {
    this.toDos = this.toDos.sort((a, b) => {
      if (a.priority === b.priority) {
        // sort by date (earliest to latest)
        return a.dueDate.getTime() - b.dueDate.getTime();        
      };

      // sort by priority (high to low)
      return b.priority - a.priority;
    });
  };
};

export default Category