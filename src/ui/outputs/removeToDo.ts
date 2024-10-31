import uuid from "../../types/uuid";
import projectContainer from "../domConstants/projectContainer";

function removeToDo(toDoID: uuid) {
  const deletion = document.querySelector(`article#${toDoID}`)
  if (deletion) projectContainer.removeChild(deletion);
}

export default removeToDo