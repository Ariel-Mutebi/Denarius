import ToDoInterface from "../interfaces/ToDoInterface"

const filterImportant = (todos: ToDoInterface[]) => todos.filter(todo => todo.priorityInteger === 3)

export default filterImportant