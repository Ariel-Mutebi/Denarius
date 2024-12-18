import ProjectsInstance from "../../classes/Projects";
import ToDoPriority from "../../enums/ToDoPriority";
import formActionFunction from "../../types/FormActionFunction";
import uuid from "../../types/uuid";

function toDoForm(container: HTMLElement, position: DOMRect, formAction: formActionFunction) {
  if (document.getElementsByClassName("to-do-form")[0]) return; // prevent duplicates

  // HTML element creation
  const modal = document.createElement("dialog");
  const form = document.createElement("form");
  const projectGroup = document.createElement("div");
  const projectText = document.createElement("label");
  const projectSelect = document.createElement("select");
  const titleGroup = document.createElement("div");
  const titleText = document.createElement("label");
  const titleInput = document.createElement("input");
  const detailsGroup = document.createElement("div");
  const detailsText = document.createElement("label");
  const detailsInput = document.createElement("input");
  const dateGroup = document.createElement("div");
  const dateText = document.createElement("label");
  const dateInput = document.createElement("input");
  const priorityGroup = document.createElement("div");
  const priorityText = document.createElement("span");
  const priorityBtn1 = document.createElement("button");
  const priorityBtn2 = document.createElement("button");
  const priorityBtn3 = document.createElement("button");
  const submitGroup = document.createElement("div");
  const submit = document.createElement("button");
  const cancel = document.createElement("button");

  // bootstrap classes
  projectGroup.classList.add("d-flex", "align-items-center", "mb-3", "gap-3");
  titleGroup.classList.add("d-flex", "align-items-center", "mb-3", "gap-3");
  detailsGroup.classList.add("d-flex", "align-items-center", "mb-3", "gap-3");
  dateGroup.classList.add("d-flex", "align-items-center", "mb-3", "gap-3");
  priorityGroup.classList.add("d-flex", "align-items-center", "mb-3");
  submitGroup.classList.add("d-flex", "align-items-center", "justify-content-center", "mb-3", "gap-3");
  titleInput.classList.add("form-control");
  detailsInput.classList.add("form-control");
  dateInput.classList.add("form-control");
  submit.classList.add("bg-success");
  cancel.classList.add("bg-danger");
  projectSelect.classList.add("form-select");
  priorityBtn1.classList.add("bg-success-subtle", "mx-1");
  priorityBtn2.classList.add("bg-warning-subtle", "mx-1");
  priorityBtn3.classList.add("bg-danger-subtle", "mx-1");

  // text content
  projectText.innerText = "Project:";
  titleText.innerText = "Title:";
  detailsText.innerText = "Details:";
  dateText.innerText = "Date:";
  priorityText.innerText = "Priority:";
  priorityBtn1.innerText = "low";
  priorityBtn2.innerText = "med";
  priorityBtn3.innerText = "high";
  submit.innerText = "Add";
  cancel.innerText = "Cancel";

  // attributes
  form.method = "dialog";

  projectSelect.id = "project-select";
  projectText.htmlFor = "project-select";

  titleInput.required = true;
  titleInput.id = "title";
  titleText.htmlFor = "title";

  detailsInput.id = "details";
  detailsText.htmlFor = "details";

  dateInput.required = true;
  dateInput.id = "date";
  dateText.htmlFor = "date";
  dateInput.type = "date";
  priorityBtn1.type = "button";
  priorityBtn2.type = "button";
  priorityBtn3.type = "button";
  priorityBtn1.title = "low priority";
  priorityBtn2.title = "medium priority";
  priorityBtn3.title = "high priority";

  submit.type = "submit";
  cancel.type = "reset";

  // priority number input
  let priority: ToDoPriority;
  priorityBtn1.addEventListener("click", () => {
    priority = ToDoPriority.Low;
  });
  priorityBtn2.addEventListener("click", () => {
    priority = ToDoPriority.Medium;
  });
  priorityBtn3.addEventListener("click", () => {
    priority = ToDoPriority.High;
  });

  // simply close form on cancel
  cancel.addEventListener("click", () => {
    container.removeChild(modal);
  });

  // run necessary action when submitted
  form.addEventListener("submit", () => {
    formAction(projectSelect.value as uuid, titleInput.value, detailsInput.value, dateInput.value, priority);
    container.removeChild(modal);
  });

  // adding to DOM
  for (const project of ProjectsInstance.getAll()) {
    const projectOption = document.createElement("option");
    projectOption.innerText = project.name;
    projectOption.value = project.ID;
    projectSelect.appendChild(projectOption);
  };
  projectGroup.appendChild(projectText);
  projectGroup.appendChild(projectSelect);

  titleGroup.appendChild(titleText);
  titleGroup.appendChild(titleInput);

  detailsGroup.appendChild(detailsText);
  detailsGroup.appendChild(detailsInput);

  dateGroup.appendChild(dateText);
  dateGroup.appendChild(dateInput);

  priorityGroup.appendChild(priorityText);
  priorityGroup.appendChild(priorityBtn1);
  priorityGroup.append(priorityBtn2);
  priorityGroup.append(priorityBtn3);

  submitGroup.appendChild(submit);
  submitGroup.appendChild(cancel);

  form.appendChild(projectGroup);
  form.appendChild(titleGroup);
  form.appendChild(detailsGroup);
  form.appendChild(dateGroup);
  form.appendChild(priorityGroup);
  form.appendChild(submitGroup);

  modal.appendChild(form);
  container.appendChild(modal);
  modal.showModal();

  // position modal
  const positionTooLow = window.innerHeight / 2 + 100 < position.bottom;

  if(positionTooLow) {
    modal.style.top = `${position.top - modal.clientHeight - 15}px`;
  } else {
    modal.style.top = `${position.bottom}px`;
  }
  modal.style.left = `${position.left}px`;
  modal.style.right = '1.5rem';
  modal.classList.add("mt-0");

  return { titleInput, detailsInput, dateInput, submit };
};

export default toDoForm;