import ToDo from "../classes/ToDo"

const filterImportant = (todos: ToDo[]) => todos.filter(todo => todo.priorityNum === 3)

export default filterImportant