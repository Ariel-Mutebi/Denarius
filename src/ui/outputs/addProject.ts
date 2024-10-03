import Projects from "../../classes/Projects";
import uuid from "../../types/uuid";
import renderProject from "./renderProject";
import showAllTasks from "./showAllTasks";

function addProject(projectId: uuid) {
  const project = Projects.getProject(projectId) // this does not account for categories
  const projectList = document.getElementById("project-list");
  const listElement = document.createElement("li");
  const listText = document.createElement("p")
  const toDoCounter = document.createElement("span")
  toDoCounter.classList.add("counter")

  listText.appendChild(toDoCounter)
  listText.innerText += project.name
  listElement.appendChild(listText)
  listElement.dataset.id = String(project.id)

  // move todo to this project when to-do dragged over
  listElement.addEventListener("dragover", function (e) {
    e.preventDefault()

    if(e.dataTransfer) {
      e.dataTransfer.dropEffect = "move"
    }
  })

  listElement.addEventListener("drop", function(e) {
    if(e.dataTransfer) {
      const data = e.dataTransfer.getData("text/plain")
      project.receiveDrop(data)
    }
  })

  // delete project button
  const deleteButton = document.createElement("button")
  deleteButton.innerHTML = '<i class="bi bi-trash3 fs-5"></i>';
  deleteButton.title = "delete project";
  deleteButton.addEventListener("click", () => {
    Projects.deleteProject(projectId)
    showAllTasks()
  });
  listElement.appendChild(deleteButton);

  listText.addEventListener("click", () => {
    renderProject(project)
  })

  projectList?.appendChild(listElement)
}

export default addProject