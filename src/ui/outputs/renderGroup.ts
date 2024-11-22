import GroupGenders from "../../enums/GroupGenders";
import GroupInterface from "../../interfaces/GroupInterface";
import ProjectInterface from "../../interfaces/ProjectInterface";
import jsContainer from "../domConstants/projectContainer";
import addToDoForm from "../inputs/addToDoForm";
import clearPage from "./clearPage";
import putToDoInDOM from "./putToDoInDom";
import "../styles/groupPage.scss";

function renderGroup(group: GroupInterface) {
  // reset
  clearPage();
  jsContainer.classList.remove("game-page");
  jsContainer.classList.add("group-page");

  // wallpaper
  const randomImg = Math.floor(Math.random() * 10) + 1;
  jsContainer.style.backgroundImage = `url("./bg/img-${randomImg}.jpg")`;
  jsContainer.style.backgroundPosition = "center";
  jsContainer.style.backgroundSize = "cover";

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
      addToDoForm(group as ProjectInterface, jsContainer, heading.getBoundingClientRect());
    });
    heading.appendChild(addIcon);
  };

  jsContainer.appendChild(heading);

  group.toDos.forEach(toDo => putToDoInDOM(toDo, group.gender));
};

export default renderGroup;