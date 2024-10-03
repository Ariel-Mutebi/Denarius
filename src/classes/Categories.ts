import uuid from "../types/uuid";
import Category from "./Category";
import Singleton from "./Singleton";

// Even though this looks very similar to Projects,
// I decided NOT to have them inherit from a same class.
// Simply because I didn't want to have some generic property like: 
// private groupings: (Project | Category)[]
// Because, then I would make Projects inherit the Category interface, and vice versa.
// This is against the Interface Segregation design principle (The "I" in SOLID).
// Not only that, but it would create a circular dependency.
// And that's a dragon I'm trying to slay in this codebase right now,
// while letting each class / function stay in it's own module.
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
    if(!result) throw new Error("Category query returned undefined.");
    return result
  }
}

const CategoriesInstance = new Categories()

export default CategoriesInstance