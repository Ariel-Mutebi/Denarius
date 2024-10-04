import ProjectSecretary from "../../interfaces/ProjectSecretary"
import ToDo from "../../classes/ToDo"
import toDoForm from "./toDoForm"

function addToDoForm(project: ProjectSecretary, container: HTMLElement, coordinates: DOMRect) {

  // create ToDo from user input
  function createToDo(title: string, details: string, dateString: string, priority: number) {
    const newToDo = new ToDo(title, details, new Date(dateString), priority)
    project.addToDo(newToDo)
  }

  // hand over creation of form to lower-level function toDoForm()
  toDoForm(container, coordinates, createToDo)
}

export default addToDoForm