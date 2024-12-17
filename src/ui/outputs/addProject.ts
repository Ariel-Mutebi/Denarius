import Projects from "../../classes/Projects";
import uuid from "../../types/uuid";
import addGroupToSidebar from "./addGroup";
import showAllTasks from "./showAllTasks";

function addProject(projectID: uuid) {
  const { group: project, listElement } = addGroupToSidebar(projectID, Projects);

  // drag to-do over project list element to move it
  listElement.addEventListener("dragover", (e) => {
    e.preventDefault();

    if(e.dataTransfer) {
      e.dataTransfer.dropEffect = "move";
    };
  });

  listElement.addEventListener("drop", (e) => {
    if(e.dataTransfer) {
      const data = e.dataTransfer.getData("text/plain");
      project.receiveDrop(data);
    };
  });

  // 

  // delete project button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="bi bi-trash3 fs-5"></i>';
  deleteButton.title = "delete project";
  deleteButton.addEventListener("click", () => {
    Projects.deleteProject(projectID);
    showAllTasks();
  });
  listElement.appendChild(deleteButton);
}

export default addProject;