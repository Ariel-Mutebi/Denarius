import ToDo from "../classes/ToDo";
export default (todos: ToDo[]) => todos.filter(todo => todo.priorityNum === 3);