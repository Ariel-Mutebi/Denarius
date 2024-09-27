import ToDo from "../classes/ToDo";

export default (todos: ToDo[]) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set the time part to midnight

  return todos.filter(todo => {
    const todoDue = todo.due
    todoDue.setHours(0, 0, 0, 0);

    return todoDue.getTime() == today.getTime();
  });
}