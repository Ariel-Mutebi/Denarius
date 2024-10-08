import ToDoInterface from "../interfaces/ToDoInterface";
import { today } from "./dateGenerators";
import timeNormalise from "./timeNormalise";

const filterToday = (todos: ToDoInterface[]) => todos.filter(todo =>  timeNormalise(todo.dueDate).getTime() == today.getTime())

export default filterToday