import Projects from "../classes/Projects";
import PS from "./PubSub";
import Group from "./Group";
import ToDoInterface from "../interfaces/ToDoInterface";
import uuid from "../types/uuid";
import ProjectInterface from "../interfaces/ProjectInterface";
import ToDoProperties from "../interfaces/ToDoProperties";
import ToDoCounterUpdate from "../enums/ToDoCounterUpdate";
import PSE from "../enums/PubSubEvents";
import GroupGenders from "../enums/GroupGenders";

class Project extends Group implements ProjectInterface {
  constructor(
    name: string,
    initialToDos?: ToDoInterface[],
    icon?: string,
  ) {
    super(name, GroupGenders.Project, icon);

    Projects.add(this);
    
    PS.publish(PSE.PostProject, this.ID);
    PS.subscribe(PSE.DeleteToDo, this.deleteToDo.bind(this));

    if(initialToDos) {
      initialToDos.forEach(initialToDo => this.addToDo(initialToDo));
    }
  }

  addToDo(toDo: ToDoInterface, moveOperation = false) {
    toDo.updateProperties({ parentID: this.ID });
    this.toDos.push(toDo);

    if(!moveOperation) PS.publish(PSE.PutToDo, toDo);

    PS.publish(PSE.PostProjectCount, {
      projectID: this.ID,
      update: ToDoCounterUpdate.Increment
    });
 
    PS.publish(PSE.PutProjectData);    
  }

  receiveDrop(toDoData: string) {
    const toDoToReceive: ToDoProperties = JSON.parse(toDoData);
    const parent = Projects.query(project => project.ID == toDoToReceive.parentID);
    if(parent) {
      const movingToDo = parent.deleteToDo(toDoToReceive.ID, true);
      if(movingToDo) this.addToDo(movingToDo, true);
    }
  }

  // I think dereferencing a ToDo from this.toDos array makes it unreachable. 
  // (Unless another instance references it, of course.)
  // So the garbage collector should eventually free up the memory taken by the "deleted" ToDo.
  deleteToDo(toDoID: uuid, moveOperation = false) {
    const index = this.toDos.findIndex(t => t.ID == toDoID);
    if(index < 0) return;
    const deletion = this.toDos.splice(index, 1)[0];
    if(!moveOperation) deletion.awardCompletion();

    PS.publish(PSE.PostProjectCount, {
      projectID: this.ID,
      update: ToDoCounterUpdate.Decrement
    });
    PS.publish(PSE.DeleteToDo, toDoID);
    PS.publish(PSE.PutProjectData);

    return deletion;
  }
}

export default Project;