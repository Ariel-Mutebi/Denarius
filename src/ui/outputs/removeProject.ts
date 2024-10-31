import uuid from "../../types/uuid"

function removeProject(id: uuid) {
  const deletedLI = document.getElementById(id);
  if (deletedLI) document.getElementById("project-list")?.removeChild(deletedLI);
};

export default removeProject;