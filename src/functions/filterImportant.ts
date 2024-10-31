import ToDoPriority from "../enums/ToDoPriority";
import filterFunction from "../types/filterFunction";

const filterImportant: filterFunction = todos => todos.filter(todo => todo.priority === ToDoPriority.High);

export default filterImportant;