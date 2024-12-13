import subscribeUIAndStorageFunctions from "./functions/subscribeUIAndStorageFunctions";
import renderOnboarding from "./ui/onboarding/onboarding";
import hasVisited from "./storage/hasVisited";
import setVisitedFlag from "./storage/setVisitedFlag";
import showAllTasks from "./ui/outputs/showAllTasks";
import loadProjects from "./storage/loadProjects";
import addProjectForm from "./ui/inputs/addProjectForm";
import initializeCategories from "./functions/initializeCategories";
import initializeGames from "./functions/initializeGames";
import whatsPopping from "./ui/outputs/whatsPopping";
import setUpTourButton from "./ui/onboarding/setUpTourButton";
import getSquaredUp from "./ui/domUtilities/resizer";
import registerServiceWorker from "./sw";

getSquaredUp();
addProjectForm();
setUpTourButton();
subscribeUIAndStorageFunctions(); // must be before any object initializations
initializeCategories();
initializeGames();
showAllTasks();
whatsPopping();

if (!hasVisited()) {
  registerServiceWorker();
  renderOnboarding();
  setVisitedFlag();
} else {
  loadProjects();
};