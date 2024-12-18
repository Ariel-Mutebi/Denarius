import ProjectsInstance from "../../classes/Projects";
import populateTutorialProject from "../../functions/populateInitialProjects";
import showAllTasks from "../outputs/showAllTasks";
import e from "./elementDictionary";
import stages from "./stages";

function renderOnboarding() {
  if(!ProjectsInstance.projectExists(p => p.name === "Tutorial")) populateTutorialProject();
  showAllTasks(); // must be after populateTutorialProject for the same reason explained in app.ts comments.

  setTimeout(async() => {
    let stageIndex = 0;
    // display stage one
    let currentStage = stages[stageIndex]();

    // set up stage-changers
    for (const name in e) {
      const tour = await currentStage;
      const element = e[name];
      const DOMElement = element.get();
      let action: (() => void) | null = null;
      
      if(element.stagehand) {
        action = () => currentStage = stages[++stageIndex]();
      } else if (element.changer) {
        action = () => setTimeout(() => {tour.nextStep()}, 500);
      };

      if(DOMElement && tour.isActive() && action) {
        DOMElement.addEventListener("click", action, {once: true});
      };
    };    
  }, 1500);
};

export default renderOnboarding;