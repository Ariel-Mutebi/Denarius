import ProjectInterface from "../interfaces/ProjectInterface"

function storeProjects(projects: ProjectInterface[]) {
  localStorage.setItem("projects", JSON.stringify(projects))
}

export default storeProjects