import Projects from "../classes/Projects";
import PS from "./PubSub";
import Group from "./Group";
import ToDoInterface from "../interfaces/ToDoInterface";
import uuid from "../types/uuid";
import ProjectInterface from "../interfaces/ProjectInterface";
import PSE from "../enums/PubSubEvents";
import GroupGenders from "../enums/GroupGenders";

class Project extends Group implements ProjectInterface {
  constructor(
    name: string,
    initialToDos?: ToDoInterface[],
    icon?: string,
    id?: string,
  ) {
    super(name, GroupGenders.Project, icon, [], id);

    Projects.add(this);
    
    PS.publish(PSE.PutProject, this.ID);
    PS.subscribe(PSE.DeleteToDo, this.deleteToDo.bind(this));

    if(initialToDos) {
      initialToDos.forEach(initialToDo => this.addToDo(initialToDo));
    } else {
      // this.addToDo includes publishing the PutProjectData event, which leads to the data being stored.
      // But, even if a project is empty, it still needs to be stored.
      PS.publish(PSE.PutProjectData);
    };
  };

  changeName(newName: string) {
    this.name = newName;
    PS.publish(PSE.PutProject, this.ID);
    PS.publish(PSE.PutProjectData);
  };

  addToDo(toDo: ToDoInterface, moveOperation = false) {
    if(this.toDos.some(t => t.ID === toDo.ID)) return;
    toDo.updateProperties({ parentID: this.ID }, false);
    this.toDos.push(toDo);

    if(!moveOperation) PS.publish(PSE.PutToDo, toDo);

    PS.publish(PSE.PostGroupCount, {
      groupID: this.ID,
      integerToAdd: 1
    });
 
    PS.publish(PSE.PutProjectData);    
  };

  takeToDoFromAnother(toDoToTake: ToDoInterface) {
    const { parentID } = toDoToTake;
    if(this.ID === parentID) return;
    const originalHolder = Projects.query(project => project.ID === parentID)!;
    originalHolder.deleteToDo(toDoToTake.ID, true);
    this.addToDo(toDoToTake, true);
  };

  // I think dereferencing a ToDo from this.toDos array makes it unreachable. 
  // (Unless another instance references it, of course.)
  // So the garbage collector should eventually free up the memory taken by the "deleted" ToDo.
  deleteToDo(toDoID: uuid, moveOperation = false) {
    const index = this.toDos.findIndex(t => t.ID == toDoID);
    if(index < 0) return;
    const deletion = this.toDos.splice(index, 1)[0];

    if(moveOperation){
      PS.publish(PSE.DeleteToDo, deletion.ID);
    } else {
      deletion.awardCompletion();
    };

    PS.publish(PSE.PostGroupCount, {
      groupID: this.ID,
      integerToAdd: -1
    });

    PS.publish(PSE.PutProjectData);
  };
};

export default Project;