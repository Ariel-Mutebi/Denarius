import bus from "../pubsub/bus";
import uuid from "../types/uuid";
import { v4 as idGenerator } from "uuid"

class ToDo {
  checked: Boolean;
  id: uuid;
  parentId: uuid | null;

  constructor(
    public title: string,
    public description: string,
    public due: Date,
    public priorityNum: number
  ) {
    this.parentId = null
    this.checked = false
    this.id = idGenerator() as uuid
  }

  toggleCheck() {
    this.checked = !this.checked
    bus.publish("projects-change")
  }

  updateProperties(newTitle: string, newDetails: string, newDate: Date, newPriority: number) {
    this.title = newTitle
    this.description = newDetails
    this.due = newDate
    this.priorityNum = newPriority
    bus.publish("todo-updated", this)
    bus.publish("projects-change")
  }

  getWorth() : [worth: number, punctual: boolean] {
    const worth = this.priorityNum * 10
    const punctual = !this.isOverDue()
    return [worth, punctual]
  }

  isOverDue() {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const dueDate = new Date(this.due)
    dueDate.setHours(0, 0, 0, 0)
    return today > dueDate
  }
}

export default ToDo