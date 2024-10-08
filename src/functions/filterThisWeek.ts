import ToDoInterface from "../interfaces/ToDoInterface";
import { today } from "./dateGenerators";
import timeNormalise from "./timeNormalise";

const filterThisWeek = (todos: ToDoInterface[]) => {
  const endOfWeek = new Date(today)
  endOfWeek.setDate(endOfWeek.getDate() + 7)

  return todos.filter((todo) => {
    const todoDue = timeNormalise(todo.dueDate)
    return todoDue >= today && todoDue <= endOfWeek
  })
}

export default filterThisWeek