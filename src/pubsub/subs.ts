import Projects from "../classes/Projects";
import addCategory from "../ui/outputs/addCategory";
import addProject from "../ui/outputs/addProject";
import removeProject from "../ui/outputs/removeProject";
import removeToDo from "../ui/outputs/removeToDo";
import renderMessage from "../ui/outputs/renderMessage";
import renderToDo from "../ui/outputs/renderToDo";
import updateEditedToDo from "../ui/outputs/updateEditedToDo";
import updateToDoCounter from "../ui/outputs/updateToDoCounter";
import bus from "./bus";

bus.subscribe("added-category", addCategory)
bus.subscribe("added-project", addProject)
bus.subscribe("todo-added", renderToDo)
bus.subscribe("todo-updated", updateEditedToDo)
bus.subscribe("todo-counted", updateToDoCounter)
bus.subscribe("todo-deleted", removeToDo)
bus.subscribe("project-deleted", removeProject)
bus.subscribe("coin-message", renderMessage)
bus.subscribe("projects-change", Projects.save)