import uuid from "../types/uuid";
import Category from "../interfaces/CategorySecretary";
import Singleton from "./Singleton";

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