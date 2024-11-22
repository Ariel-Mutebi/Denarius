import Categories from "../../classes/Categories";
import uuid from "../../types/uuid";
import addGroupToSidebar from "./addGroup";

function addCategory(categoryId: uuid) {
  addGroupToSidebar(categoryId, Categories);
};

export default addCategory;