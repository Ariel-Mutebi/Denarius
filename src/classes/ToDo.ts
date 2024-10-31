import { today } from "../functions/dateGenerators";
import timeNormalise from "../functions/timeNormalise";
import PS from "./PubSub";
import uuid from "../types/uuid";
import Bank from "./Bank";
import ToDoInterface from "../interfaces/ToDoInterface";
import EditableToDoProperties from "../interfaces/EditableToDoProperties";
import IDed from "./IDed";
import ToDoPriority from "../enums/ToDoPriority";
import PSE from "../enums/PubSubEvents";

class ToDo extends IDed implements ToDoInterface {
  parentID: uuid | undefined;
  awarded: boolean = false;

  constructor(
    public title: string,
    public description: string,
    public dueDate: Date,
    public priority: ToDoPriority = ToDoPriority.Low,
    public isChecked = false
  ) {
    super()
  }

  toggleIsChecked() {
    this.isChecked = !this.isChecked
    PS.publish(PSE.PutProjectData)
  }

  updateProperties(positionalParameters: Partial<EditableToDoProperties>) {
    const { title, description, dueDate, priority, parentID } = positionalParameters;
    
    if(title) this.title = title;
    if(description) this.description = description;
    if(dueDate) this.dueDate = dueDate;
    if(priority) this.priority = priority;
    if(parentID) this.parentID = parentID;

    PS.publish(PSE.PutToDo, this);
    PS.publish(PSE.PutProjectData);
  };

  getWorth() {
    return this.priority * 10;
  }

  isOverDue() {
    return this.dueDate < today;
  }

  awardCompletion() {
    if(this.awarded) {
      throw new Error("ToDoInstance.awardCompletion() can only be called once.");
    };

    if(!this.isChecked) return;

    if(this.isOverDue()) {
      Bank.deduct(this.getWorth());
    } else {
      Bank.deposit(this.getWorth());
    }

    this.awarded = true;
  };
};

export default ToDo;