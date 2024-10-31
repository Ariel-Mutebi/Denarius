import renderOnboarding from "./ui/onboarding/onboarding";
import Projects from "./classes/Projects";
import hasVisited from "./storage/hasVisited";
import populateTutorialProject from "./storage/populateInitialProjects";
import setVisitedFlag from "./storage/setVisitedFlag";
import showAllTasks from "./ui/outputs/showAllTasks";
import loadProjects from "./storage/loadProjects";
import addProjectForm from "./ui/inputs/addProjectForm";
import initializeCategories from "./functions/initializeCategories";
import initializeGames from "./functions/initializeGames";
import "./ui/styles/style.scss";
import "./ui/domUtilities/resizer";
import "./sw";

initializeCategories();
initializeGames();
showAllTasks();
addProjectForm();

if (!hasVisited()) {
  populateTutorialProject();
  setTimeout(renderOnboarding, 1500);
  setVisitedFlag();
} else {
  for(const loadedProject of loadProjects()) {
    Projects.add(loadedProject);
  };
};