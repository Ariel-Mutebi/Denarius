import ProjectSecretary from "../interfaces/ProjectSecretary"

function storeProjects(projects: ProjectSecretary[]) {
  localStorage.setItem("projects", JSON.stringify(projects))
}

export default storeProjects