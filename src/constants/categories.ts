import Category from "../classes/Category"
import filterImportant from "../functions/filterImportant"
import filterThisWeek from "../functions/filterThisWeek"
import filterToday from "../functions/filterToday"
import noFilter from "../functions/noFilter"

const allTasksCategory = new Category("All Tasks", noFilter, "bi-calendar-check-fill")
const importantCategory = new Category("Important", filterImportant, "bi-star-fill")
const todayCategory = new Category("Today", filterToday, "bi-calendar-event-fill")
const weekCategory = new Category("This Week", filterThisWeek, "bi-calendar-week-fill")

export { allTasksCategory, importantCategory, todayCategory, weekCategory }