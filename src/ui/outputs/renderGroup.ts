import GroupGenders from "../../enums/GroupGenders";
import GroupInterface from "../../interfaces/GroupInterface";
import ProjectInterface from "../../interfaces/ProjectInterface";
import projectContainer from "../domConstants/projectContainer";
import addToDoForm from "../inputs/addToDoForm";
import clearPage from "./clearPage";
import putToDoInDOM from "./putToDoInDom";

function renderGroup(group: GroupInterface) {
  // reset
  clearPage();
  projectContainer.classList.remove("game-page");
  projectContainer.classList.add("to-do-page");

  // wallpaper
  const randomImg = Math.floor(Math.random() * 10) + 1;
  projectContainer.style.backgroundImage = `url("./bg/img-${randomImg}.jpg")`;
  projectContainer.style.backgroundPosition = "center";
  projectContainer.style.backgroundSize = "cover";

  // html element creation
  const heading = document.createElement("header");
  const titleDiv = document.createElement("div");
  const title = document.createElement("h2");
  const icon = document.createElement("i");

  // html element attributes
  title.innerText = group.name;
  title.classList.add("h1");
  icon.classList.add("bi");
  icon.classList.add(`${group.icon}`);

  // append to DOM
  titleDiv.appendChild(icon);
  titleDiv.appendChild(title);
  heading.appendChild(titleDiv);

  // users can only add to-dos to Projects
  if (group.gender === GroupGenders.Project) {
    const addIcon = document.createElement("i");
    addIcon.classList.add("bi");
    addIcon.classList.add("bi-journal-plus");
    addIcon.addEventListener("click", () => {
      addToDoForm(group as ProjectInterface, projectContainer, heading.getBoundingClientRect());
    });
    heading.appendChild(addIcon);
  };

  projectContainer.appendChild(heading);

  group.toDos.forEach(toDo => putToDoInDOM(toDo, group.gender));
};

export default renderGroup;