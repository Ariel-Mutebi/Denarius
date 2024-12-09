import subscribeUIAndStorageFunctions from "./functions/subscribeUIAndStorageFunctions";
import renderOnboarding from "./ui/onboarding/onboarding";
import Projects from "./classes/Projects";
import hasVisited from "./storage/hasVisited";
import populateTutorialProject from "./functions/populateInitialProjects";
import setVisitedFlag from "./storage/setVisitedFlag";
import showAllTasks from "./ui/outputs/showAllTasks";
import loadProjects from "./storage/loadProjects";
import addProjectForm from "./ui/inputs/addProjectForm";
import initializeCategories from "./functions/initializeCategories";
import initializeGames from "./functions/initializeGames";
import "./ui/domUtilities/resizer";
import "./ui/styles/index.scss";
import "./ui/styles/global.scss";
import whatsPopping from "./ui/outputs/whatsPopping";
// import "./sw";

subscribeUIAndStorageFunctions();
initializeCategories();
initializeGames();
showAllTasks();
addProjectForm();
populateTutorialProject();
whatsPopping();

if (!hasVisited()) {
  setTimeout(renderOnboarding, 1500);
  setVisitedFlag();
} else {
  for(const loadedProject of loadProjects()) {
    Projects.add(loadedProject);
  };
};