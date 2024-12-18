import Categories from "../../classes/Categories";
import uuid from "../../types/uuid";
import putGroupInSidebar from "./putGroupInSidebar";

function putCategory(categoryId: uuid) {
  putGroupInSidebar(categoryId, Categories, "category-list");
};

export default putCategory;