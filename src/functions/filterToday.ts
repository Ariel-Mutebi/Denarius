import ToDo from "../classes/ToDo";
import { today } from "./dateGenerators";
import timeNormalise from "./timeNormalise";

const filterToday = (todos: ToDo[]) => todos.filter(todo =>  timeNormalise(todo.dueDate).getTime() == today.getTime())

export default filterToday