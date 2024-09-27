import Category from "../../classes/Category";
import Project from "../../classes/Project";
import renderProject from "./renderProject";
import showAllTasks from "./showAllTasks";

function addProject(project: Project | Category) {
  const type = project instanceof Project ? "project" : "category";
  const projectList = document.getElementById(`${type}-list`);
  const listElement = document.createElement("li");
  const listText = document.createElement("p")
  const toDoCounter = document.createElement("span")
  toDoCounter.classList.add("counter")

  listText.appendChild(toDoCounter)
  listText.innerHTML += project.name
  listElement.appendChild(listText)

  if (project instanceof Project) {
    listElement.dataset.index = String(project.index)

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
      project.deleteSelf()
      showAllTasks()
    });
    listElement.appendChild(deleteButton);
  }

  listText.addEventListener("click", () => {
    renderProject(project)
  })

  projectList?.appendChild(listElement)
}

export default addProject