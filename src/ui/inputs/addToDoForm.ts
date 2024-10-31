import ProjectInterface from "../../interfaces/ProjectInterface";
import ToDo from "../../classes/ToDo";
import toDoForm from "./toDoForm";
import ToDoPriority from "../../enums/ToDoPriority";

function addToDoForm(project: ProjectInterface, container: HTMLElement, coordinates: DOMRect) {

  // create ToDo from user input
  function createToDo(title: string, details: string, dateString: string, priority: ToDoPriority) {
    const newToDo = new ToDo(title, details, new Date(dateString), priority);
    project.addToDo(newToDo);
  };

  // hand over creation of form to lower-level function toDoForm()
  toDoForm(container, coordinates, createToDo);
}

export default addToDoForm;