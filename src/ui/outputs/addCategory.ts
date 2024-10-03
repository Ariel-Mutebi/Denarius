import Categories from "../../classes/Categories";
import uuid from "../../types/uuid";
import renderProject from "./renderProject";

function addCategory(categoryId: uuid) {
  const category = Categories.get(categoryId)
  const categoryList = document.getElementById("category-list")
  const listElement = document.createElement("li")
  const listText = document.createElement("p")
  const toDoCounter = document.createElement("span")
  toDoCounter.classList.add("counter")
  listText.appendChild(toDoCounter)
  listText.innerText += category.name
  listElement.appendChild(listText)
  listElement.dataset.id = String(category.id)
  
  listText.addEventListener("click", () => {
    renderProject(category)
  })
  
  categoryList?.appendChild(listElement)
}

export default addCategory