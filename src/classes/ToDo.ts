import { today } from "../functions/dateGenerators";
import timeNormalise from "../functions/timeNormalise";
import bus from "../pubsub/bus";
import uuid from "../types/uuid";
import Bank from "./Bank";
import ToDoInterface from "../interfaces/ToDoInterface";
import EditableToDoProperties from "../interfaces/EditableToDoProperties";
import IDed from "./IDed";

class ToDo extends IDed implements ToDoInterface {
  parentId: uuid | undefined;
  awarded: boolean;

  constructor(
    public title: string,
    public description: string,
    public dueDate: Date,
    public priorityInteger = 1,
    public isChecked = false
  ) {
    super()
    const priorityIntegerValues = [1, 2, 3]
    if(priorityIntegerValues.includes(priorityInteger)) {
      this.priorityInteger = priorityInteger
    } else {
      console.error("Value error: ToDo.priorityInteger must be in array: ", priorityIntegerValues)
    }
    this.awarded = false
  }

  toggleIsChecked() {
    this.isChecked = !this.isChecked
    bus.publish("projects-change")
  }

  updateProperties(positionalParameters: Partial<EditableToDoProperties>) {
    const { title, description, dueDate, priorityInteger, parentId } = positionalParameters
    
    if(title) this.title = title
    if(description) this.description = description
    if(dueDate) this.dueDate = dueDate
    if(priorityInteger) this.priorityInteger = priorityInteger
    if(parentId) this.parentId = parentId

    bus.publish("todo-updated", this)
    bus.publish("projects-change")
  }

  getWorth() {
    return this.priorityInteger * 10
  }

  isOverDue() {
    return timeNormalise(today) > timeNormalise(this.dueDate)
  }

  awardCompletion() {
    if(this.awarded) {
      throw new Error("ToDoInstance.awardCompletion() can only be called once.");
    }

    if(!this.isChecked) return

    if(this.isOverDue()) {
      Bank.deduct(this.getWorth())
    } else {
      Bank.deposit(this.getWorth())
    }

    this.awarded = true
  }
}

export default ToDo