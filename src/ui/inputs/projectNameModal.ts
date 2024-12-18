function projectNameModal(openingButton: HTMLButtonElement, callback: (n: string) => unknown, initialName?: string) {
  const sidebar = document.getElementById("sidebar");
  const modal = document.getElementById("project-name-form-container");
  const form = document.getElementById("project-name-form");
  const nameField = document.getElementById("project-name");
  const cancelButton = document.getElementById("project-name-form-reset");

  // I know instanceof can't be used with a Typescript interface.
  // But it's for tricking intellisense. :)
  if (!(sidebar && modal instanceof HTMLDialogElement && form instanceof HTMLFormElement && nameField instanceof HTMLInputElement && cancelButton)) {
    throw new Error("projectNameModal function did not find necessary DOM elements.")
  };

  openingButton.addEventListener("click", () => {
    // position and show
    const parent = openingButton.parentElement;
    if(!parent) throw new Error("icon is an orphan");
    const iconTop = parent.getBoundingClientRect().top;

    if(window.innerWidth > 500) {
      modal.style.top = `${iconTop -40}px`;
      modal.style.left = `${sidebar?.clientWidth - 35}px`;
      modal.showModal();
    } else {
      modal.style.top = `${iconTop - 80}px`;
      modal.style.left = "1rem";
      modal.showModal();
    };

    // in case this is for renaming
    form.reset();
    if(initialName) nameField.value = initialName;

    // prepare for submission
    const cleanUp = () => {
      form.removeEventListener("submit", handleSubmission); // avoid event listeners piling up.
    };

    const handleSubmission = () => {
      callback(nameField.value);
      cleanUp();
    };

    form.addEventListener("submit", handleSubmission);
    
    cancelButton.addEventListener("click", () => {
      modal.close();
      cleanUp();
    });
  });
};

export default projectNameModal;