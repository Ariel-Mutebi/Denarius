import ToDoInterface from "../interfaces/ToDoInterface";

const noFilter = (todos: ToDoInterface[]) => todos.filter(() => true)

export default noFilter