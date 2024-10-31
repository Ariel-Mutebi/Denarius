import populateTutorialProject from "../../functions/populateInitialProjects";
import showAllTasks from "../outputs/showAllTasks";
import Projects from "../../classes/Projects";
import e from "./elementDictionary";
import stages from "./stages";

async function renderOnboarding() {
  let stageIndex = 0

  // display stage one
  let currentStage = stages[stageIndex]()

  // set up stage-changers
  for (const name in e) {
    const tour = await currentStage
    const element = e[name]
    const DOMElement = element.get()
    let action: (() => void) | null = null;
    
    if(element.stagehand) {
      action = () => {currentStage = stages[++stageIndex]()}
    } else if (element.changer) {
      action = () => {setTimeout(() => {tour.nextStep()}, 500);}
    }

    if(DOMElement && tour.isActive() && action) {
      DOMElement.addEventListener("click", action, {once: true})
    }
  }
}

// attach this function to tour button
document.querySelector('button[title="create tour"]')?.addEventListener("click", () => {
  renderOnboarding()

  if(Projects.projectExists(project => project.name == "Tutorial")) {
    populateTutorialProject()
    showAllTasks()
  }

  // prevent sidebar covering tutorial on mobile
  if(e.menuIcon.isVisible() && e.navBar.isVisible()) { // as in mobile screen
    e.navBar.get()?.classList.add("d-none")
  }
})

export default renderOnboarding