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
    if(!Array.isArray(newToDos)) newToDos = [newToDos];
    if(newToDos.some(nt => this.toDos.some(t => t.ID === nt.ID))) return; // The advantage of idempotency outweighs the disadvantage of an n ^ 2 time complexity.
    const before = this.l();
    this.toDos = this.filterFunction([...this.toDos, ...newToDos]);
    this.sort();
    this.updateCounter(before, this.l())
  };

  removeToDo(toDoToDeleteID: uuid) {
    const index = this.toDos.findIndex(t => t.ID == toDoToDeleteID);
    if(index < 0) return;
    this.toDos.splice(index, 1);
    this.updateCounter(1, 0);
  };

  removeProject(deletionId: uuid) {
    const before = this.l();
    this.toDos = this.toDos.filter(todo => todo.parentID !== deletionId);
    this.updateCounter(before, this.l());
  };

  private l() {
    return this.toDos.length; // I'm too lazy to read/type this over and over again.
  };

  private updateCounter(beforeCount: number, afterCount: number) {
    if(beforeCount !== afterCount) {
      PS.publish(PSE.PostGroupCount, {
        groupID: this.ID,
        integerToAdd: afterCount - beforeCount
      });
    }
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