import uuid from "../../types/uuid";
import jsContainer from "../domConstants/projectContainer";

function removeToDo(toDoID: uuid) {
  const deletion = document.getElementById(toDoID);
  if (deletion) jsContainer.removeChild(deletion);
};

export default removeToDo;