import projectContainer from "../domConstants/projectContainer"

function renderMessage(message: string, container = projectContainer) {
  const goodNews = message.startsWith("Yay!")
  const textBox = document.createElement("aside")
  const background = document.createElement("div")
  const text = document.createElement("p")
  text.innerText = message

  background.classList.add(`bg-${goodNews ? "success": "danger"}-subtle`)
  textBox.classList.add("message")

  background.appendChild(text)
  textBox.appendChild(background)
  textBox.style.width = `calc(${container.clientWidth}px - 3rem)`
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