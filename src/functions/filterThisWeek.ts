import ToDo from "../classes/ToDo";

export default (todos: ToDo[]) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0)
  const endOfWeek = new Date(today);
  endOfWeek.setDate(endOfWeek.getDate() + 7);

  return todos.filter((todo) => {
    const todoDue = new Date(todo.due);
    todoDue.setHours(0, 0, 0, 0); // Set to midnight
    return todoDue >= today && todoDue <= endOfWeek;
  });
};