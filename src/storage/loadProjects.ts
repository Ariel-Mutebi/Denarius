import Project from "../classes/Project"
import ToDo from "../classes/ToDo"

function loadProjects(): Project[] {
  const projectsJSON = localStorage.getItem("projects")
  const projectsData: Project[] = projectsJSON ? JSON.parse(projectsJSON) : []
  const loadedProjects: Project[] = []

  for (const project of projectsData) {
    const loadedProject = new Project(project.name, undefined, project.icon)

    if (project.initialTodos) {
      for (const initial of project.initialTodos) {
        loadedProject.addToDo(
          new ToDo(initial.title, initial.description, new Date(initial.due), initial.priorityNum)
        )
      }
    }

    for (const todo of project.todos) {
      loadedProject.addToDo(
        new ToDo(todo.title, todo.description, new Date(todo.due), todo.priorityNum)
      )
    }

    loadedProjects.push(
      loadedProject
    )
  }

  return loadedProjects
}

export default loadProjects