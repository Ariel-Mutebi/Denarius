import CategoriesInstance from "./Categories"
import GroupOfGroups from "./GroupOfGroups"

test("Categories class inherits from GroupOfGroups", () => {
  expect(CategoriesInstance instanceof GroupOfGroups).toBe(true);
})