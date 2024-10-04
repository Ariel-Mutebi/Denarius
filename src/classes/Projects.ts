import bus from "../pubsub/bus"
import Singleton from "./Singleton"
import storeProjects from "../storage/storeProjects"
import ProjectSecretary from "../interfaces/ProjectSecretary"
import uuid from "../types/uuid"

class Projects extends Singleton{
  private projects: ProjectSecretary[]
  
  constructor() {
    super()
    this.projects = []
  }

  add(project: ProjectSecretary) {
    this.projects.push(project)
  }

  getProject(id: string) {
    return this.query(p => p.id == id)
  }

  getAll() {
    // spread operator makes sure that mutations returned array do NOT mutate private projects property
    return [...this.projects]
  }

  query(q: (predicate: ProjectSecretary) => boolean) {
    const result = this.projects.find(q) 
    if(!result) throw new Error("Projects query returned undefined.");
    return result
  }

  deleteProject(id: uuid) {
    const projectIndex = this.getAll().findIndex(p => p.id = id)
    const deletedProject = this.projects.splice(projectIndex, 1)[0]
    const deletedProjectId = Object.keys(deletedProject)[0]
    bus.publish("project-deleted", deletedProjectId)
    bus.publish("category-delete-project", deletedProjectId)
    bus.publish("projects-change")
  }

  deleteAll() {
    this.projects.splice(0, this.projects.length)
  }

  save() {
    storeProjects(this.projects)
  }
}

const ProjectsInstance =  new Projects()

export default ProjectsInstance