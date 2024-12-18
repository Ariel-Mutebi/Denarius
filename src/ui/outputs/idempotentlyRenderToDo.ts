import { format } from "date-fns";
import PS from "../../classes/PubSub";
import jsContainer from "../domConstants/projectContainer";
import editToDoForm from "../inputs/editToDoForm";
import Projects from "../../classes/Projects";
import ToDoPriority from "../../enums/ToDoPriority";
import PSE from "../../enums/PubSubEvents";
import ToDoInterface from "../../interfaces/ToDoInterface";
import idempotentDOM from "./idempotentDOM";

function idempotentlyRenderToDo(toDo: ToDoInterface) {
  console.trace();
  const toDoPriority = (
    toDo.priority === ToDoPriority.High ? "high" : 
    toDo.priority === ToDoPriority.Medium ? "medium" : 
    toDo.priority === ToDoPriority.Low ? "low" : 
    "value error with priority number");

  const { parentID } = toDo;
  if(!parentID) throw new Error("ToDo object for rendering must have parentID");
  if(!Projects.get(parentID)) throw new Error("ToDo parentID property must equal Project ID for some Project instance.");

  // HTML elements for to-do article
  const element = document.createElement("article");
  const leftDiv = document.createElement("div");
  const rightDiv = document.createElement("div");
  const checkBox = document.createElement("input");
  const toDoTitle = document.createElement("label");
  const detailsButton = document.createElement("button");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const detailsModal = document.createElement("dialog");
  const closeDetailsModal = document.createElement("button");

  // attributes
  element.id = toDo.ID;
  element.classList.add("to-do-element", `priority-${toDoPriority}`, "d-flex", "justify-content-between", "p-2", "bg-light", "rounded", "mb-3");
  leftDiv.classList.add("d-flex", "align-items-center", "gap-2", "borderless-children");
  rightDiv.classList.add("d-flex", "align-items-center", "gap-2", "borderless-children");
  
  checkBox.type = "checkbox";
  checkBox.classList.add("form-check-input");
  toDoTitle.htmlFor = "completeCheck";
  toDoTitle.classList.add("form-check-label");

  editButton.type = "button";
  deleteButton.type = "button";
  detailsButton.type = "button";
  closeDetailsModal.type = "button";

  editButton.title = "edit";
  deleteButton.title = "delete";
  detailsButton.classList.add("btn-outline-secondary");
  detailsModal.classList.add("details");
  closeDetailsModal.classList.add("close-details");

  // content
  toDoTitle.innerText = toDo.title;
  detailsButton.innerText = "Details";
  editButton.innerHTML = '<i class="bi bi-pencil-square"></i>';
  deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
  closeDetailsModal.innerHTML = '<i class="bi bi-x-square"></i>';
  detailsModal.innerHTML =
    `<h3>${toDo.title}</h3>
    <p><b>Project:</b> ${Projects.get(parentID)?.name}</p>
    <p><b>Priority:</b> ${toDoPriority}</p>
    <p><b>Description:</b> ${toDo.description}</p>
    <p><b>Due Date:</b> ${format(toDo.dueDate, "do MMMM, Y")}</p>`;

  if (toDo.isChecked) {
    checkBox.checked = true;
    element.classList.add("text-decoration-line-through");
  };

  if(toDo.isOverDue()) {
    element.classList.add("overdue");
  };

  // details button
  detailsButton.addEventListener("click", () => {
    detailsModal.showModal();

    // position modal
    const modalHeight = detailsModal.clientHeight;
    const buttonPos = detailsButton.getBoundingClientRect();
    const buttonBottom = buttonPos.bottom + window.scrollY;
    const buttonTooLow = window.innerHeight / 2 + 100 < buttonBottom;

    if(buttonTooLow) {
      detailsModal.style.top = `${Math.ceil(buttonPos.top - modalHeight - 15)}px`;
    } else {
      detailsModal.style.top = `${Math.ceil(buttonBottom) + 10}px`;
    };

    detailsModal.style.right = `${buttonPos.right}px`;
    
  });

  closeDetailsModal.addEventListener("click", () => {
    detailsModal.close();
  });

  // checkbox functionality
  checkBox.addEventListener("click", () => {
    toDo.toggleIsChecked();

    if (toDo.isChecked) {
      element.classList.add("text-decoration-line-through");
    } else {
      element.classList.remove("text-decoration-line-through");
    };
  });

  // also check off if title clicked
  toDoTitle.addEventListener("click", () => {
    toDo.toggleIsChecked();

    if (toDo.isChecked) {
      element.classList.add("text-decoration-line-through");
      checkBox.checked = true;
    } else {
      element.classList.remove("text-decoration-line-through");
      checkBox.checked = false;
    };
  });
  
  // finally, appending elements to the DOM
  detailsModal.appendChild(closeDetailsModal);

  leftDiv.appendChild(checkBox);
  leftDiv.appendChild(toDoTitle);

  rightDiv.appendChild(detailsButton);
  rightDiv.appendChild(detailsModal);

  // edit button
  editButton.addEventListener("click", () => {
    editToDoForm(toDo, element, detailsButton.getBoundingClientRect());
  });

  // delete button
  deleteButton.addEventListener("click", () => {
    PS.publish(PSE.DeleteToDo, toDo.ID);
  });

  rightDiv.appendChild(editButton);
  rightDiv.appendChild(deleteButton);

  element.appendChild(leftDiv);
  element.appendChild(rightDiv);

  idempotentDOM(jsContainer, element, toDo.ID);
};

export default idempotentlyRenderToDo;