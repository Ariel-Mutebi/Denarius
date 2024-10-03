import { format } from "date-fns";
import ToDo from "../../classes/ToDo";
import bus from "../../pubsub/bus";
import projectContainer from "../domConstants/projectContainer";
import editToDoForm from "../inputs/editToDoForm";
import renderMessage from "./renderMessage";
import Projects from "../../classes/Projects";

function renderToDo(parameters: [toDo: ToDo, isProject: Boolean, external: Boolean]) {
  // spread parameters of tuple
  const [toDo, isProject, externalCall] = parameters,
    toDoPriority = toDo.priorityNum === 3 ? "high" : toDo.priorityNum === 2 ? "medium" : toDo.priorityNum === 1 ? "low" : "value error with priority number",

  // HTML elements for to-do article
    element = document.createElement("article"),
    leftDiv = document.createElement("div"),
    rightDiv = document.createElement("div"),
    checkBox = document.createElement("input"),
    toDoTitle = document.createElement("label"),
    dueDateT = document.createElement("time"),
    detailsButton = document.createElement("button"),
    editButton = document.createElement("button"),
    deleteButton = document.createElement("button"),
    detailsModal = document.createElement("dialog"),
    closeDetailsModal = document.createElement("button");

  // attributes
  element.classList.add(`priority-${toDoPriority}`);
  checkBox.type = "checkbox";
  checkBox.classList.add("completeCheck");
  toDoTitle.htmlFor = "completeCheck";

  editButton.type = "button";
  deleteButton.type = "button";
  detailsButton.type = "button";
  closeDetailsModal.type = "button";

  editButton.title = "edit";
  deleteButton.title = "delete";
  detailsButton.classList.add("btn-outline-secondary");
  detailsModal.classList.add("details")
  closeDetailsModal.classList.add("close-details")

  // content
  toDoTitle.innerText = toDo.title;
  dueDateT.dateTime = String(toDo.due)
  dueDateT.innerText = format(toDo.due, "d LLL");
  detailsButton.innerText = "Details";
  editButton.innerHTML = '<i class="bi bi-pencil-square"></i>';
  deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
  closeDetailsModal.innerHTML = '<i class="bi bi-x-square"></i>'
  detailsModal.innerHTML =
    `<h3>${toDo.title}</h3>
    <p><b>Project:</b> ${toDo.parentId ? Projects.getProject(toDo.parentId) : null}</p>
    <p><b>Priority:</b> ${toDoPriority}</p>
    <p><b>Description:</b> ${toDo.description}</p>
    <p><b>Due Date:</b> ${format(toDo.due, "do MMMM, Y")}</p>`;

  if (toDo.checked) {
    checkBox.checked = true;
    element.classList.add("text-decoration-line-through")
  }

  if(toDo.isOverDue()) {
    element.classList.add("overdue")
  }

  // details button
  detailsButton.addEventListener("click", () => {
    detailsModal.showModal()

    // position modal
    const modalHeight = detailsModal.clientHeight
    const buttonPos = detailsButton.getBoundingClientRect()
    const buttonBottom = buttonPos.bottom + window.scrollY
    const buttonTooLow = window.innerHeight / 2 + 100 < buttonBottom

    if(buttonTooLow) {
      detailsModal.style.top = `${Math.ceil(buttonPos.top - modalHeight - 15)}px`
    } else {
      detailsModal.style.top = `${Math.ceil(buttonBottom) + 10}px`
    }

    detailsModal.style.right = `${buttonPos.right}px`
    
  })

  closeDetailsModal.addEventListener("click", () => {
    detailsModal.close()
  })

  // checkbox functionality
  checkBox.addEventListener("click", () => {
    toDo.toggleCheck()

    if (toDo.checked) {
      element.classList.add("text-decoration-line-through")
    } else {
      element.classList.remove("text-decoration-line-through")
    }
  })

  // also check off if title clicked
  toDoTitle.addEventListener("click", () => {
    toDo.toggleCheck()

    if (toDo.checked) {
      element.classList.add("text-decoration-line-through")
      checkBox.checked = true
    } else {
      element.classList.remove("text-decoration-line-through")
      checkBox.checked = false
    }
  })
  
  // finally, appending elements to the DOM
  detailsModal.appendChild(closeDetailsModal)

  leftDiv.appendChild(checkBox)
  leftDiv.appendChild(toDoTitle)

  rightDiv.appendChild(dueDateT)
  rightDiv.appendChild(detailsButton)
  rightDiv.appendChild(detailsModal)

  if (isProject) {
    // hide date on small screens
    if (projectContainer.clientWidth < 400) {
      dueDateT.classList.add("d-none")

    } else {
      // to-dos are draggable on desktop
      element.draggable = true

      element.addEventListener("dragstart", function(e) {
        const serialized = JSON.stringify(toDo)
        if(e.dataTransfer) {
          e.dataTransfer.setData("text/plain", serialized)
          e.dataTransfer.effectAllowed = "move"
        }
      })

      // tell user what just happened
      element.addEventListener("dragend", function(e) {
        if(e.dataTransfer?.dropEffect === "move") {
          renderMessage("Yay! To-do moved!")
        } else {
          renderMessage("Move failed.")
        }
      })
    }

    // edit button
    editButton.addEventListener("click", () => {
      editToDoForm(toDo, element, detailsButton.getBoundingClientRect())
    })

    // delete button
    deleteButton.addEventListener("click", () => {
      bus.publish(`deletion-in-${toDo.parentId}`, toDo)
    })

    rightDiv.appendChild(editButton)
    rightDiv.appendChild(deleteButton)
    element.dataset.index = String(toDo.id);
  }

  element.appendChild(leftDiv);
  element.appendChild(rightDiv);

  if (externalCall) {
    projectContainer.appendChild(element);
  } else {
    return element
  }
}

export default renderToDo