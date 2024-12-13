import GroupGenders from "../../enums/GroupGenders";
import ToDoInterface from "../../interfaces/ToDoInterface";
import jsContainer from "../domConstants/projectContainer";
import creteDdnForToDo from "./createDdnForToDo";

function putToDoInDOM(toDo: ToDoInterface, parentGender: GroupGenders = GroupGenders.Project) {
  const newRender = creteDdnForToDo({ toDo, parentGender });
  const oldRender = document.getElementById(toDo.ID);

  if (oldRender) {
    jsContainer.insertBefore(newRender, oldRender.nextElementSibling);
    jsContainer.removeChild(oldRender);
  } else {
    jsContainer.appendChild(newRender);
  };
};

export default putToDoInDOM;