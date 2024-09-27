import projects from "../constants/projects";
import bus from "../pubsub/bus";

class ToDo {
  checked: Boolean;
  index: number;
  parent: string;

  constructor(
    public title: string,
    public description: string,
    public due: Date,
    public priorityNum: number
  ) {
    this.parent = "orphan"
    this.checked = false
    this.index = -1
  }

  toggleCheck() {
    this.checked = !this.checked
    bus.publish("data-change", projects)
  }

  getPriorityWord() {
    return this.priorityNum === 3 ? "high" : this.priorityNum === 2 ? "medium" : this.priorityNum === 1 ? "low" : "";
  }

  updateProperties(newTitle: string, newDetails: string, newDate: Date, newPriority: number) {
    this.title = newTitle
    this.description = newDetails
    this.due = newDate
    this.priorityNum = newPriority
    bus.publish("todo-updated", this)
    bus.publish("data-change", projects)
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