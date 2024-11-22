import Project from "../../classes/Project";

function addProjectForm() {
  const navBar = document.getElementsByTagName("nav")[0];
  const icon = document.getElementById("add-project-icon");
  const modal = document.querySelector("dialog#project-form-container");
  const form = document.getElementById("add-project-form");
  const nameField = document.getElementById("project-name");

  if (icon) icon.addEventListener("click", () => {
    if (modal instanceof HTMLDialogElement) {
      // Get the position of the parent element (the header)
      const iconTop = icon.parentElement?.getBoundingClientRect().top;

      // Set the position of the dialog
      if (iconTop) {
        if(window.innerWidth > 500) {
          modal.style.top = `${iconTop - 20}px`;
          modal.style.left = `${navBar?.clientWidth - 35}px`;
          modal.show();
        } else {
          modal.style.top = `${iconTop - 80}px`;
          modal.style.left = "1rem";
          modal.showModal();
        };
      };
    };
  });

  if (form instanceof HTMLFormElement) form.addEventListener("submit", () => {
    if (nameField instanceof HTMLInputElement) new Project(nameField.value);
  });

  // close modal if user clicks away
  document.body.addEventListener("click", function (event) {
    if (modal instanceof HTMLDialogElement && event.target instanceof Node) {
      if (!(modal.contains(event.target) || icon?.contains(event.target))) {
        modal.close();
      };
    };
  });
};

export default addProjectForm;