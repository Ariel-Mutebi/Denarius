import ToDoInterface from "../interfaces/ToDoInterface";

type filterFunction = (todos: ToDoInterface[]) => ToDoInterface[];

export default filterFunction;