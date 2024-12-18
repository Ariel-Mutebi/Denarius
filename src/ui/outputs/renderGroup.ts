import GroupGenders from "../../enums/GroupGenders";
import GroupInterface from "../../interfaces/GroupInterface";
import ProjectInterface from "../../interfaces/ProjectInterface";
import jsContainer from "../domConstants/projectContainer";
import addToDoForm from "../inputs/addToDoForm";
import clearPage from "./clearPage";
import idempotentlyRenderToDo from "./idempotentlyRenderToDo";

function renderGroup(group: GroupInterface) {
  // History API for more accessible navigation. (Commented out because it's inconvenient with Webpack's HMR.)
  // history.pushState(group.ID, "",  group.name.toLocaleLowerCase().replace(" ", "-"));
  // reset
  clearPage();
  jsContainer.classList.remove("arcade-page");
  jsContainer.classList.add("group-page");

  // wallpaper
  const randomImg = Math.floor(Math.random() * 10) + 1;
  jsContainer.style.background = `url("./bg/img-${randomImg}.jpg") center center / cover`;

  // html element creation
  const header = document.createElement("header");
  const titleDiv = document.createElement("div");
  const title = document.createElement("h2");
  const icon = document.createElement("i");

  // html element attributes
  header.classList.add("fs-2", "mb-3", "bg-success-subtle", "p-3", "d-flex", "justify-content-between", "rounded");
  titleDiv.classList.add("d-flex", "gap-4", "align-items-center")
  title.innerText = group.name;
  title.classList.add("h1");
  icon.classList.add("bi");
  icon.classList.add(`${group.icon}`);

  // append to DOM
  titleDiv.appendChild(icon);
  titleDiv.appendChild(title);
  header.appendChild(titleDiv);

  // users can only add to-dos to Projects
  if (group.gender === GroupGenders.Project) {
    const addIcon = document.createElement("i");
    addIcon.classList.add("bi");
    addIcon.classList.add("bi-journal-plus");
    addIcon.addEventListener("click", () => {
      addToDoForm(group as ProjectInterface, jsContainer, header.getBoundingClientRect());
    });
    header.appendChild(addIcon);
  };

  jsContainer.appendChild(header);

  group.toDos.forEach(toDo => idempotentlyRenderToDo(toDo, group.gender));
};

export default renderGroup;