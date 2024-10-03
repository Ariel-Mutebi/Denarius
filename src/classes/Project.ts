import Projects from "../classes/Projects";
import Bank from "./Bank";
import bus from "../pubsub/bus";
import Group from "./Group";
import ToDo from "./ToDo";

class Project extends Group {
  constructor(
    public name: string,
    public initialTodos?: ToDo[],
    public icon: string = "bi-calendar-fill"
  ) {
    super()
    Projects.add(this)
    
    this.initialTodos?.forEach(initTodo => {
      this.addToDo(initTodo)
    })

    this.initialTodos = undefined

    bus.publish("added-project", this.id)
    bus.subscribe(`deletion-in-${this.id}`, this.deleteToDo.bind(this))
  }

  addToDo(todo: ToDo, moveOperation = false) {
    todo.parentId = this.id
    this.todos.push(todo)
    bus.publish("todo-added", [todo, true, !moveOperation])
    bus.publish("projects-change")
    bus.publish("category-add-todo", [todo])
    bus.publish("todo-counted", [this.id, true])
  }

  receiveDrop(toDoData: string) {
    const toDoToReceive: ToDo = JSON.parse(toDoData)
    const parent = Projects.query(project => project.id == toDoToReceive.parentId)
    if(parent) {
      const movingToDo = parent.deleteToDoByName(toDoToReceive.title)
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
    bus.publish("todo-counted", [this.id, false])
    bus.publish("todo-storage-deleted", deletion)
    bus.publish("projects-change")
    bus.publish("todo-deleted", todo.id)
    this.awardCoins(deletion, !moveOperation)
  }

  deleteInitialToDos() {
    this.initialTodos = undefined
    bus.publish("projects-change")
  }

  awardCoins(deletion: ToDo, awardable: boolean) {
    if(deletion.checked && awardable) {
      const [reward, positive] = deletion.getWorth()

      if (positive) {
        Bank.deposit(reward)  
        bus.publish("coin-message", 
          `Yay! You earned ${reward} coins. Total coins:  ${Bank.showBalance()}`
        )
      } else if (Bank.deduct(reward)) {
        bus.publish("coin-message", 
          `Late completion! You lost ${reward} coins. Balance: ${Bank.showBalance()}`
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