import renderOnboarding from "./ui/onboarding/onboarding";
import projects from "./constants/projects";
import hasVisited from "./storage/hasVisited";
import populateInitialProjects from "./storage/populateInitialProjects";
import setVisitedFlag from "./storage/setVisitedFlag";
import loadProjects from "./storage/loadProjects";
import showAllTasks from "./ui/outputs/showAllTasks";
import "./ui/styles/style.scss"
import "./ui/domUtilities/resizer"
import "./constants/games"
import "./sw"

if (!hasVisited()) {
  populateInitialProjects()
  setTimeout(renderOnboarding, 1500)
  setVisitedFlag()
} else {
  projects.splice(0, projects.length)
  projects.push(...loadProjects())
}

showAllTasks()