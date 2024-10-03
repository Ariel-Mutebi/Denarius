import Categories from "../../classes/Categories"
import addProjectForm from "../inputs/addProjectForm"
import renderProject from "./renderProject"

function showAllTasks() {
  renderProject(Categories.query(cat => cat.name == "All Tasks"))
  addProjectForm()
}

export default showAllTasks