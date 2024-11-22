import jsContainer from "../domConstants/projectContainer"

function renderMessage(message: string, container = jsContainer) {
  const goodNews = message.startsWith("Yay!");
  const textBox = document.createElement("aside");
  const background = document.createElement("div");
  const text = document.createElement("p");
  text.innerText = message;

  background.classList.add(`bg-${goodNews ? "success": "danger"}-subtle`, "text-center", "py-2", "px-3", "rounded-top");
  text.classList.add("fs-5", "m-0");
  background.appendChild(text);
  textBox.appendChild(background);
  textBox.classList.add("d-flex", "justify-content-center", "position-absolute", "bottom-0");
  textBox.style.width = `calc(${container.clientWidth}px - 3rem)`;
  container.appendChild(textBox)
  setTimeout(() => {
    const pageNodes = Array.from(container.childNodes as NodeListOf<HTMLElement>)
    const pageNotChanged = pageNodes.includes(textBox)
    if(pageNotChanged) {
      container.removeChild(textBox)
    }
  }, 3000);
}

export default renderMessage