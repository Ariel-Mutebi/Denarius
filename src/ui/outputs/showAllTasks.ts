import Categories from "../../classes/Categories";
import renderGroup from "./renderGroup";

function showAllTasks() {
  if(window.location.pathname === "/all-tasks") return;
  const allTasksCategory = Categories.query(cat => cat.name == "All Tasks");
  if(!allTasksCategory) throw new Error("No category with name 'All Tasks' found.");
  renderGroup(allTasksCategory);
};

export default showAllTasks;