import { allTasksCategory } from "../../constants/categories"
import addProjectForm from "../inputs/addProjectForm"
import renderProject from "./renderProject"

function showAllTasks() {
  renderProject(allTasksCategory)
  addProjectForm()
}

export default showAllTasks