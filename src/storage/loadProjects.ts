import Project from "../classes/Project"
import ToDo from "../classes/ToDo"

function loadProjects(): Project[] {
  const projectsJSON = localStorage.getItem("projects")
  const projectsData: Project[] = projectsJSON ? JSON.parse(projectsJSON) : []
  const loadedProjects: Project[] = []

  for (const project of projectsData) {
    const loadedProject = new Project(project.name, [], project.icon)

    for (const todo of project.todos) {
      loadedProject.addToDo(
        new ToDo(todo.title, todo.description, new Date(todo.dueDate), todo.priorityInteger)
      )
    }

    loadedProjects.push(loadedProject)
  }

  return loadedProjects
}

export default loadProjects