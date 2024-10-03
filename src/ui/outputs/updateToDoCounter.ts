function updateToDoCounter(parameters: [id: number, shouldIncrement: Boolean]) {
  const [index, shouldIncrement] = parameters;
  const counter = document.querySelector(`ul#project-list > li[data-id="${index}"] .counter`)

  if (counter) {
    const currentCount = Number(counter.innerHTML)
    counter.innerHTML = String(shouldIncrement ? currentCount + 1 : currentCount - 1);
    if(counter.innerHTML === "0") counter.innerHTML = ""
  }
}

export default updateToDoCounter