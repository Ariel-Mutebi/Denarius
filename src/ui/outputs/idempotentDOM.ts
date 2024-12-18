function idempotentDOM(container: HTMLElement, newRender: HTMLElement, id: string) {
  const possibleOldRender = document.getElementById(id);
  if(possibleOldRender) {
    const oldRender = possibleOldRender;
    container.insertBefore(newRender, oldRender);
    container.removeChild(oldRender);
  } else {
    container.appendChild(newRender);
  };
};

export default idempotentDOM;