import Category from "../classes/Category";
import filterImportant from "./filterImportant";
import filterThisWeek from "./filterThisWeek";
import filterToday from "./filterToday";
import noFilter from "./noFilter";

function initializeCategories() {
  new Category("All Tasks", noFilter, "bi-calendar-check-fill");
  new Category("Important", filterImportant, "bi-star-fill");
  new Category("Today", filterToday, "bi-calendar-event-fill");
  new Category("This Week", filterThisWeek, "bi-calendar-week-fill");
};

export default initializeCategories;