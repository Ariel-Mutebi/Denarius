import GroupGenders from "../enums/GroupGenders";
import ToDoInterface from "./ToDoInterface";

interface createDdnForToDoParameters {
  toDo: ToDoInterface;
  parentGender: GroupGenders;
}

export default createDdnForToDoParameters