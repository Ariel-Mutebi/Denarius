import { v4 as idGenerator } from "uuid";
import { today } from "../functions/dateGenerators";
import timeNormalise from "../functions/timeNormalise";
import bus from "../pubsub/bus";
import uuid from "../types/uuid";
import Bank from "./Bank";
import ToDoInterface from "../interfaces/ToDoInterface";
import EditableToDoProperties from "../interfaces/EditableToDoProperties";

class ToDo implements ToDoInterface {
  id: uuid;
  parentId: uuid | undefined;

  constructor(
    public title: string,
    public description: string,
    public dueDate: Date,
    public priorityInteger = 1,
    public isChecked = false
  ) {
    const priorityIntegerValues = [1, 2, 3]
    if(priorityIntegerValues.includes(priorityInteger)) {
      this.priorityInteger = priorityInteger
    } else {
      // I used console.error instead of throw new Error so that initialization is not interrupted.
      // I borrowed the "value error" terminology from Python (which has more descriptive error messages than JS).
      console.error("Value error: ToDo.priorityInteger must be in array: ", priorityIntegerValues)
    }

    this.id = idGenerator() as uuid
  }

  toggleCheck() {
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
    return today > timeNormalise(this.dueDate)
  }

  awardCompletion() {
    if(!this.isChecked) return
    if(this.isOverDue()) {
      Bank.deduct(this.getWorth())
      return
    }
    Bank.deposit(this.getWorth())
  }
}

export default ToDo