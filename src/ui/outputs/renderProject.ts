import Category from "../../classes/Category";
import Project from "../../classes/Project";
import projectContainer from "../domConstants/projectContainer";
import addToDoForm from "../inputs/addToDoForm";
import clearPage from "./clearPage";
import renderToDo from "./renderToDo";

function renderProject(project: Project | Category) {
  // reset
  clearPage()
  projectContainer.classList.remove("game-page")
  projectContainer.classList.add("to-do-page")

  // wallpaper
  const randomImg = Math.floor(Math.random() * 10) + 1;
  projectContainer.style.backgroundImage = `url("./bg/img-${randomImg}.jpg")`
  projectContainer.style.backgroundPosition = "center"
  projectContainer.style.backgroundSize = "cover"

  // html element creation
  const heading = document.createElement("header");
  const titleDiv = document.createElement("div");
  const title = document.createElement("h2");
  const icon = document.createElement("i");
  const addIcon = document.createElement("i")
  title.innerText = project.name;
  title.classList.add("h1")
  icon.classList.add("bi");
  addIcon.classList.add("bi")
  icon.classList.add(`${project.icon}`);
  addIcon.classList.add("bi-journal-plus")

  titleDiv.appendChild(icon)
  titleDiv.appendChild(title)
  heading.appendChild(titleDiv)

  if (project instanceof Project) {
    addIcon.addEventListener("click", () => {
      addToDoForm(project, projectContainer, heading.getBoundingClientRect())
    })
    heading.appendChild(addIcon)
  }

  projectContainer.appendChild(heading)

  document.getElementsByTagName("main")[0].appendChild(projectContainer);

  if (project instanceof Project && project.initialTodos) {
    for (const todo of project.initialTodos) {
      project.addToDo(todo)
    }
    project.deleteInitialToDos()
  } else {
    project.todos.forEach(todo => {
      renderToDo([todo, project instanceof Project, true]);
    });
  }
}

export default renderProject