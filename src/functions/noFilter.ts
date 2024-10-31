import filterFunction from "../types/filterFunction";

const noFilter: filterFunction = (todos) => todos.filter(() => true);

export default noFilter;