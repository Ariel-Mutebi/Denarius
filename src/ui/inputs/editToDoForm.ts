import { format } from "date-fns"
import ToDo from "../../interfaces/ToDoInterface"
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

  function editDetails(title: string, description: string, dateString: string, priorityInteger: number) {
    const dueDate = new Date(dateString)
    toDo.updateProperties({ title, description, dueDate, priority: priorityInteger })
  }
}

export default editToDoForm