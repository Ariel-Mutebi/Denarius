import Project from "../../classes/Project";
import projectNameModal from "./projectNameModal";

function addProjectForm() {
  const button = document.querySelector<HTMLButtonElement>("#add-project-button");
  if(button) projectNameModal(button, n => new Project(n));
};

export default addProjectForm;