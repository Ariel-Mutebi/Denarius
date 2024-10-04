import ToDo from "../classes/ToDo";
import { today } from "./dateGenerators";
import timeNormalise from "./timeNormalise";

const filterThisWeek = (todos: ToDo[]) => {
  const endOfWeek = new Date(today)
  endOfWeek.setDate(endOfWeek.getDate() + 7)

  return todos.filter((todo) => {
    const todoDue = timeNormalise(todo.due)
    return todoDue >= today && todoDue <= endOfWeek
  })
}

export default filterThisWeek