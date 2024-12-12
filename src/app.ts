import subscribeUIAndStorageFunctions from "./functions/subscribeUIAndStorageFunctions";
import renderOnboarding from "./ui/onboarding/onboarding";
import Projects from "./classes/Projects";
import hasVisited from "./storage/hasVisited";
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

addProjectForm();
subscribeUIAndStorageFunctions(); // must be before any object initializations
initializeCategories();
initializeGames();
showAllTasks();
whatsPopping();

if (!hasVisited()) {
  renderOnboarding();
  setVisitedFlag();
} else {
  loadProjects().forEach(Projects.add);
};