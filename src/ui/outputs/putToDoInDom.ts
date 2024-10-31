import GroupGenders from "../../enums/GroupGenders";
import ToDoInterface from "../../interfaces/ToDoInterface";
import projectContainer from "../domConstants/projectContainer";
import creteDdnForToDo from "./createDdnForToDo";

function putToDoInDOM(toDo: ToDoInterface, parentGender: GroupGenders = GroupGenders.Project) {
  const newRender = creteDdnForToDo({ toDo, parentGender });
  const oldRender = document.getElementById(toDo.ID);

  if (oldRender) {
    projectContainer.insertBefore(newRender, oldRender.nextElementSibling);
    projectContainer.removeChild(oldRender);
  } else {
    projectContainer.appendChild(newRender);
  };
};

export default putToDoInDOM;