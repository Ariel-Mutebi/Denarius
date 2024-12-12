import Project from "../classes/Project";
import ToDo from "../classes/ToDo";

function loadProjects(): Project[] {
  const stringifiedJSON = localStorage.getItem("projects");
  const parsedJSON: Project[] = stringifiedJSON ? JSON.parse(stringifiedJSON) : [];
  return parsedJSON.map(p => 
    new Project(
      p.name,
      p.toDos.map(t => new ToDo(t.title, t.description, new Date(t.dueDate), t.priority)),
      p.icon)
    );
};

export default loadProjects;