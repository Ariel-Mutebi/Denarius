import Categories from "../../classes/Categories";
import uuid from "../../types/uuid";
import putGroupInSidebar from "./putGroupInSidebar";

function addCategory(categoryId: uuid) {
  putGroupInSidebar(categoryId, Categories);
};

export default addCategory;