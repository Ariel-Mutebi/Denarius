import Project from "../../classes/Project";
import projectNameModal from "./projectNameModal";

function addProjectForm() {
  projectNameModal("add-project-icon", (n) => new Project(n));
};

export default addProjectForm;