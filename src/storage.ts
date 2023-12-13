import { Project, ToDo } from "./app";
import { pubSub } from "./pubsub";

function populateInitialProjects() {
  // date for week to-do
  const today = new Date()
  const endOfWeek = new Date(today)
  const endOfMonth = new Date(today)
  endOfWeek.setDate(endOfWeek.getDate() + 7)
  endOfMonth.setDate(endOfMonth.getDate() + 31)

  const dateWithinWeek = new Date(
    today.getTime() + Math.random() * (endOfWeek.getTime() - today.getTime())
  )

  const dateWithinPastWeek = new Date(
    today.getTime() + Math.random() * (today.getTime() - endOfWeek.getTime())
  )

  const randomDay = () => new Date(
    today.getTime() + Math.random() * (endOfMonth.getTime() - today.getTime())
  )

  new Project("Tutorial", [
    new ToDo("Important task", "This is high-priority. Notice the red border color-coding.", randomDay(), 3),
    new ToDo("Nice-to-do task", "This is medium-priority. It's color-coded orange", randomDay(), 2),
    new ToDo("Just for fun", "This is low-priority. It's flagged as green.", randomDay(), 1),
    new ToDo("Finish today", "Here is a to-do that is due today!", today, 3),
    new ToDo("Week's work", "This is something you just need to do sometime this week.", dateWithinWeek, 2),
    new ToDo("Too Late", "Overdue to-dos are color-coded this bronze hue", dateWithinPastWeek, 2)
  ], "bi-pencil-fill")
}

function setVisitedFlag() {
  localStorage.setItem('visited', 'true');
}

function hasVisited() {
  return localStorage.getItem('visited') === 'true';
}

function storeData(projects: Project[]) {
  localStorage.setItem("projects", JSON.stringify(projects))
}

function loadData(): Project[] {
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

pubSub.subscribe("data-change", storeData)

export { setVisitedFlag, hasVisited, storeData, loadData, populateInitialProjects }