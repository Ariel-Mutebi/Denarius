import ToDo from "../../classes/ToDo"
import projectContainer from "../domConstants/projectContainer"
import renderToDo from "./renderToDo"

function updateEditedToDo(toDo: ToDo) {
  const newRender = renderToDo([toDo, true, false])
  const oldRender = document.querySelector(`article[data-index="${toDo.id}"]`)
  const sister = document.querySelector(`article[data-index="${toDo.id + 1}"]`)

  if (newRender && oldRender) {
    projectContainer.insertBefore(newRender, sister)
    projectContainer.removeChild(oldRender)
  }
}

export default updateEditedToDo