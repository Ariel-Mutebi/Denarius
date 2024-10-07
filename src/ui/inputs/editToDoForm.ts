import { format } from "date-fns"
import ToDo from "../../classes/ToDo"
import toDoForm from "./toDoForm"

function editToDoForm(toDo: ToDo, container: HTMLElement, coordinates: DOMRect) {
  const elements = toDoForm(container, coordinates, editDetails, true)

  // include the text of previous todo details
  if (elements) {
    elements.titleInput.value = toDo.title
    elements.detailsInput.value = toDo.description
    elements.dateInput.value = format(toDo.dueDate, "yyyy-MM-dd")
    elements.submit.innerText = "Edit"
  }

  function editDetails(title: string, details: string, dateString: string, priority: number) {
    toDo.updateProperties(title, details, new Date(dateString), priority)
  }
}

export default editToDoForm