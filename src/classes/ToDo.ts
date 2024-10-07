import { v4 as idGenerator } from "uuid";
import { today } from "../functions/dateGenerators";
import timeNormalise from "../functions/timeNormalise";
import bus from "../pubsub/bus";
import uuid from "../types/uuid";
import Bank from "./Bank";
import toDoPriorityNumber from "../types/toDoPriorityNumber";

class ToDo {
  checked: Boolean;
  id: uuid;
  parentId: uuid | null;

  constructor(
    public title: string,
    public description: string,
    public dueDate: Date,
    public priorityNum: toDoPriorityNumber
  ) {
    this.parentId = null
    this.checked = false
    this.id = idGenerator() as uuid
  }

  toggleCheck() {
    this.checked = !this.checked
    bus.publish("projects-change")
  }

  updateProperties(newTitle: string, newDetails: string, newDate: Date, newPriority: toDoPriorityNumber) {
    this.title = newTitle
    this.description = newDetails
    this.dueDate = newDate
    this.priorityNum = newPriority
    bus.publish("todo-updated", this)
    bus.publish("projects-change")
  }

  getWorth() {
    return this.priorityNum * 10
  }

  isOverDue() {
    return today > timeNormalise(this.dueDate)
  }

  awardCompletion() {
    if(!this.checked) return
    if(this.isOverDue()) {
      Bank.deduct(this.getWorth())
      return
    }
    Bank.deposit(this.getWorth())
  }
}

export default ToDo