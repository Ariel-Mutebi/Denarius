import uuid from "../../types/uuid"

function removeProject(id: uuid) {
  const deletedLI = document.querySelector(`li[data-id="${id}"]`)
  if (deletedLI) document.getElementById("project-list")?.removeChild(deletedLI)
}

export default removeProject