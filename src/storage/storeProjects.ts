import Project from "../classes/Project"

function storeProjects(projects: Project[]) {
  localStorage.setItem("projects", JSON.stringify(projects))
}

export default storeProjects