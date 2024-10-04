import ToDo from "../classes/ToDo";

const noFilter = (todos: ToDo[]) => todos.filter(() => true)

export default noFilter