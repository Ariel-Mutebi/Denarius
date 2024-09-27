import projects from "../constants/projects";
import addProject from "../ui/outputs/addProject";
import bank from "../constants/bank";
import bus from "../pubsub/bus";
import Group from "./Group";
import ToDo from "./ToDo";

class Project extends Group {
  index: Number;
  private count: number; // number of to-do being added to array (this.todos.length)

  constructor(
    public name: string,
    public initialTodos?: ToDo[],
    public icon: String = "bi-calendar-fill"
  ) {
    super()
    projects.push(this);
    this.index = projects.indexOf(this);
    addProject(this)
    
    this.count = -1
    this.registerInitialToDos()

    // handle when todo needs to be deleted
    bus.subscribe(`deletion-in-${this.name}`, this.deleteToDo.bind(this))
  }

  addToDo(todo: ToDo, moveOperation = false) {
    todo.index = ++this.count;
    todo.parent = this.name;
    this.todos.push(todo);
    bus.publish("todo-added", [todo, true, !moveOperation]);

    if (!this.initialTodos?.includes(todo)) {
      bus.publish("todo-stored", [todo])
      bus.publish("todo-counted", [this.index, true])
    }

    bus.publish("data-change", projects)
  }

  receiveDrop(toDoData: string) {
    const props: ToDo = JSON.parse(toDoData)
    const parent = projects.find(project => project.name == props.parent)
    if(parent) {
      const movingToDo = parent.deleteToDoByName(props.title)
      if(movingToDo) this.addToDo(movingToDo, true)
    }
  }

  deleteToDoByName(title: string) {
    const deletion = this.todos.find(todo => todo.title == title)
    if(deletion) this.deleteToDo(deletion, true)
    return deletion
  }

  deleteToDo(todo: ToDo, moveOperation = false) {
    const index = this.todos.indexOf(todo)
    const deletion = this.todos.splice(index, 1)[0]
    bus.publish("todo-counted", [this.index, false])
    bus.publish("todo-storage-deleted", deletion)
    bus.publish("data-change", projects)
    bus.publish("todo-deleted", todo.index)
    this.awardCoins(deletion, !moveOperation)
  }

  deleteSelf() {
    const index = projects.indexOf(this);
    const deletion = projects.splice(index, 1)[0];
    bus.publish("project-deleted", index)
    bus.publish("project-storage-deleted", deletion)
    bus.publish("data-change", projects)
  }

  deleteInitialToDos() {
    this.initialTodos = undefined
    bus.publish("data-change", projects)
  }

  private registerInitialToDos() {
    if (this.initialTodos) {
      this.initialTodos.forEach(todo => {
        todo.parent = this.name;
        bus.publish("todo-counted", [this.index, true])
      })
      bus.publish("todo-stored", this.initialTodos)
      bus.publish("data-change", projects)
    }
  }

  private awardCoins(deletion: ToDo, awardable: boolean) {
    if(deletion.checked && awardable) {
      const [reward, positive] = deletion.getWorth()

      if (positive) {
        bank.deposit(reward)  
        bus.publish("coin-message", 
          `Yay! You earned ${reward} coins. Total coins:  ${bank.showBalance()}`
        )
      } else if (bank.deduct(reward)) {
        bus.publish("coin-message", 
          `Late completion! You lost ${reward} coins. Balance: ${bank.showBalance()}`
        )
      } else {
        bus.publish("coin-message", 
          `Error! Coins to few to subtract from.`
        )
      }
    }
  }
}

export default Project