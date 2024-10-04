import uuid from "../../types/uuid";
import projectContainer from "../domConstants/projectContainer";

function removeToDo(id: uuid) {
  const deletion = document.querySelector(`article[data-id="${id}"]`)
  if (deletion) projectContainer.removeChild(deletion);
}

export default removeToDo