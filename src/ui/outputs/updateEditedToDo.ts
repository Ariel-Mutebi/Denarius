import ToDoInterface from "../../interfaces/ToDoInterface"
import projectContainer from "../domConstants/projectContainer"
import renderToDo from "./renderToDo"

function updateEditedToDo(toDo: ToDoInterface) {
  const newRender = renderToDo([toDo, true, false])
  const oldRender = document.querySelector(`article[data-index="${toDo.id}"]`)
  const sister = document.querySelector(`article[data-index="${toDo.id + 1}"]`)

  if (newRender && oldRender) {
    projectContainer.insertBefore(newRender, sister)
    projectContainer.removeChild(oldRender)
  }
}

export default updateEditedToDo