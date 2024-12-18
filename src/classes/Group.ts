import GroupInterface from "../interfaces/GroupInterface";
import ToDoInterface from "../interfaces/ToDoInterface";
import IDed from "./IDed";

class Group extends IDed implements GroupInterface {
  constructor(
    public name: string,
    public icon: string = "bi-calendar-fill",
    public toDos: ToDoInterface[] = [],
    id?: string,
  ) {
    super(id);
  };
};

export default Group;