import Categories from "../../classes/Categories";
import uuid from "../../types/uuid";
import addGroup from "./addGroup";

function addCategory(categoryId: uuid) {
  addGroup(categoryId, Categories);
};

export default addCategory;