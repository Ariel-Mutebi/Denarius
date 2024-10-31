import GroupGenders from "../enums/GroupGenders";
import IDedInterface from "./IDedInterface";
import ToDoInterface from "./ToDoInterface";

interface GroupInterface extends IDedInterface {
  name: string;
  icon: string;
  toDos: ToDoInterface[];
  gender: GroupGenders;
};

export default GroupInterface;