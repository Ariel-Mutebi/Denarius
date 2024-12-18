import Projects from "../../classes/Projects";
import uuid from "../../types/uuid";
import projectNameModal from "../inputs/projectNameModal";
import putGroupInSidebar from "./putGroupInSidebar";
import showAllTasks from "./showAllTasks";

function putProject(projectID: uuid) {
  const { group: project, listElement } = putGroupInSidebar(projectID, Projects, "project-list");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("d-flex", "align-items-center")

  // rename project button
  const renameButton = document.createElement("button");
  renameButton.innerHTML = '<i class="bi bi-pencil-square"></i>';
  renameButton.title = "Rename project";
  projectNameModal(renameButton, n => project.changeName(n), project.name);
  buttonContainer.appendChild(renameButton);
  
  // delete project button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="bi bi-trash3 fs-5"></i>';
  deleteButton.title = "delete project";
  deleteButton.addEventListener("click", () => {
    Projects.deleteProject(projectID);
    showAllTasks();
  });
  buttonContainer.appendChild(deleteButton);
  listElement.appendChild(buttonContainer);
};

export default putProject;