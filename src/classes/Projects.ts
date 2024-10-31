import PS from "./PubSub"
import storeProjects from "../storage/storeProjects"
import uuid from "../types/uuid"
import GroupOfGroups from "./GroupOfGroups"
import ProjectInterface from "../interfaces/ProjectInterface"
import PSE from "../enums/PubSubEvents"

class Projects extends GroupOfGroups<ProjectInterface> {
  getAllToDos() {
    return this.groups.map(project => project.toDos).flat();
  };

  projectExists(callback: (parameter: ProjectInterface) => boolean) {
    return this.groups.some(callback);
  };

  deleteProject(ID: uuid) {
    const projectIndex = this.groups.findIndex(p => p.ID === ID);
    if(projectIndex < 0) throw new Error(`There is no Project to delete with an ID of ${ID}.`);
    const deletedProject = this.groups.splice(projectIndex, 1)[0];
    PS.publish(PSE.DeleteProject, deletedProject.ID);
    PS.publish(PSE.PutProjectData);
  };

  save() {
    storeProjects(this.groups);
  };
};

const ProjectsInstance =  new Projects();

export default ProjectsInstance;