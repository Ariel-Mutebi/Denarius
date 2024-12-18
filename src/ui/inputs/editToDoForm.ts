import { format } from "date-fns";
import ToDo from "../../interfaces/ToDoInterface";
import toDoForm from "./toDoForm";
import uuid from "../../types/uuid";
import ProjectsInstance from "../../classes/Projects";

function editToDoForm(toDo: ToDo, container: HTMLElement, coordinates: DOMRect) {
  const editDetails = (projectID: uuid, title: string, description: string, dateString: string, priority: number) => {
    const dueDate = new Date(dateString);
    toDo.updateProperties({ title, description, dueDate, priority });
    const selectedProject = ProjectsInstance.get(projectID)!;
    selectedProject.takeToDoFromAnother(toDo);
  };
  
  const elements = toDoForm(container, coordinates, editDetails);

  // include the text of previous todo details
  if (elements) {
    elements.titleInput.value = toDo.title;
    elements.detailsInput.value = toDo.description;
    elements.dateInput.value = format(toDo.dueDate, "yyyy-MM-dd");
    elements.submit.innerText = "Edit";
  };
};

export default editToDoForm;