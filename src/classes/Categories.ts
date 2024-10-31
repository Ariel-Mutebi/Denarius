import CategoryInterface from "../interfaces/CategoryInterface";
import GroupOfGroups from "./GroupOfGroups";

class Categories extends GroupOfGroups<CategoryInterface> {}

const CategoriesInstance = new Categories()

export default CategoriesInstance