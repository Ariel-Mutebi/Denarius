import uuid from "../types/uuid";
import Category from "../interfaces/CategoryInterface";
import Singleton from "./Singleton";

// Because this class is similar to Projects,
// I am tempted to make them inherit from a more generic `Groupings` class.
// But such a class would violate the Interface Segregation Principle.
// (It would have the property `groups: (Category | Project)[]`, making Categories inherit the Project interface, which it does not need.)
class Categories extends Singleton {
  private categories: Category[]

  constructor() {
    super()
    this.categories = []
  }

  add(category: Category) {
    this.categories.push(category)
  }

  get(categoryId: uuid) {
    return this.query(cat => cat.id == categoryId)
  }

  query(q: (cat: Category) => boolean) {
    const result = this.categories.find(q)
    if(!result) throw new Error("Category query returned undefined.")
    return result
  }
}

const CategoriesInstance = new Categories()

export default CategoriesInstance