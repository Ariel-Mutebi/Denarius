import renderOnboarding from "./ui/onboarding/onboarding";
import Projects from "./classes/Projects";
import hasVisited from "./storage/hasVisited";
import populateInitialProjects from "./storage/populateInitialProjects";
import setVisitedFlag from "./storage/setVisitedFlag";
import showAllTasks from "./ui/outputs/showAllTasks";
import Category from "./classes/Category";
import filterImportant from "./functions/filterImportant";
import filterThisWeek from "./functions/filterThisWeek";
import filterToday from "./functions/filterToday";
import noFilter from "./functions/noFilter";
import Game from "./classes/Game";
import loadProjects from "./storage/loadProjects";
import "./ui/styles/style.scss";
import "./ui/domUtilities/resizer";
import "./sw";

new Category("All Tasks", noFilter, "bi-calendar-check-fill")
new Category("Important", filterImportant, "bi-star-fill")
new Category("Today", filterToday, "bi-calendar-event-fill")
new Category("This Week", filterThisWeek, "bi-calendar-week-fill")

if (!hasVisited()) {
  populateInitialProjects()
  setTimeout(renderOnboarding, 1500)
  setVisitedFlag()
} else {
  Projects.deleteAll()
  for(const loadedProject of loadProjects()) {
    Projects.add(loadedProject)
  }
}

new Game("Cross Code", "./thumbnails/cross-code.jpg", "https://www.cross-code.com/en/start", 60)
new Game("Missile Game", "./thumbnails/missile-game.jpg", "https://missile-game.bwhmather.com/", 40)
new Game("Chrome Dino", "./thumbnails/chrome-dino.jpeg", "https://chromedino.com/", 20)

showAllTasks()