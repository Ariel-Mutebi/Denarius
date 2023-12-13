import introJs from "intro.js";
import { IntroJs } from "intro.js/src/intro";
import { populateInitialProjects } from "./storage";
import { showAllTasks } from "./display";
import { tutorialExists } from "./app";

interface elementDictionary {
  [name: string]: {
    get: () => HTMLElement | null,
    stagehand: boolean,
    changer: boolean,
    isVisible: () => boolean
  }
}

const e: elementDictionary = (() => {
  const stepElement = (get: () => HTMLElement | null, stagehand = false, changer = false) => {
    const isVisible = () => !get()?.classList.contains("d-none")
    return {get, stagehand, changer, isVisible}
  }

  const banner = stepElement(() => document.getElementsByTagName("h2")[0])
  
  const toDoArticle1 = stepElement(() => document.getElementsByTagName("article")[0], false, true)
  const toDoArticle2 = stepElement(() => document.getElementsByTagName("article")[1], false, true)
  const toDoArticle3 = stepElement(() => document.getElementsByTagName("article")[2], false, true)
  const toDoArticle4 = stepElement(() => document.getElementsByTagName("article")[3], false, true)
  const toDoArticle5 = stepElement(() => document.getElementsByTagName("article")[4], false, true)
  const toDoArticle6 = stepElement(() => document.getElementsByTagName("article")[5], false, true)

  const menuIcon = stepElement(() => document.querySelector<HTMLElement>("i.bi-list"), false, true)
  const navBar = stepElement(() => document.getElementsByTagName("nav")[0])
  const tourButton = stepElement(() => document.querySelector<HTMLButtonElement>("button[title='create tour']"))
  const category2 = stepElement(() => document.querySelectorAll<HTMLLIElement>("#category-list > li")[1])
  const addProjectIcon = stepElement(() => document.getElementById("add-project-icon"))
  const projectHeader = stepElement(() => document.getElementById("project-header"))
  const projectLinkLI = stepElement(() => document.getElementById("project-list"))
  const projectLink = stepElement(() => {
    const link = document.querySelectorAll<HTMLElement>("#project-list > li > p")[0]

    if(menuIcon.isVisible() && navBar.isVisible()) {
      navBar.get()?.addEventListener("click", () => {
        navBar.get()?.classList.add("d-none")
      })
    }
    
    return link
  }, true)

  const addToDoIcon = stepElement(() => document.querySelector<HTMLElement>("i.bi-journal-plus"))
  const gameIcon = stepElement(() => document.getElementById("game-icon"), true)
  
  const gameImg = stepElement(() => document.getElementsByTagName("img")[0])

  return {
    banner,
    toDoArticle1,
    toDoArticle2,
    toDoArticle3,
    toDoArticle4,
    toDoArticle5,
    toDoArticle6,
    menuIcon,
    navBar,
    tourButton,
    category2,
    projectHeader,
    projectLink,
    projectLinkLI,
    addProjectIcon,
    addToDoIcon,
    gameIcon,
    gameImg
  }
})()

async function renderWalkthrough() {

  const stages: (() => Promise<IntroJs>)[] = [
    () => introJs().setOptions({
      steps: [
        {
          title: "TaskQuest Ahoy!",
          intro: "It's fun. It's simple. Meet the only to-do app you'll ever need!",
        },
        {
          element: e.banner.get(),
          title: "Define: category",
          intro: "This is a group which filters to-dos and sorts them by priority and due date. <b>'All Tasks'</b> includes everything.",
          position: "right"
        },
        {
          element: e.toDoArticle1.get(),
          title: "A To-Do Element",
          intro: "Get a glance of the title, due date, and other details. Click the checkbox to tick it off!"
        },
        {
          element: e.toDoArticle2.get(),
          title: "Importance labels",
          intro: "Notice the border color? It's because high-priority to-dos are labeled red."
        },
        {
          element: e.toDoArticle3.get(),
          title: "Overdue :(",
          intro: "The bronze background shows that this to-do's due date has passed."
        },
        {
          element: e.toDoArticle4.get(),
          title: "Labels continued",
          intro: "The orange border here shows this is a medium-priority to-do."
        },
        {
          element: e.toDoArticle5.get(),
          title: "Date sorting",
          intro: "As suggested, in a category to-dos that are of the same importance are further sorted by due date (in descending order)."
        },
        {
          element: e.toDoArticle6.get(),
          title: "Cucumber-cool",
          intro: "This green border just means this to-do is low-priority."
        },
        {
          element: e.menuIcon.isVisible() ? e.menuIcon.get() : e.navBar.get(),
          title: "The menu",
          intro: e.menuIcon.isVisible() ? "Click the icon to open the side-bar and discover more!" : "Navigate the to the other pages from this sidebar.",
        },
        {
          element: e.tourButton.get(),
          title: "A Quick Reminder",
          intro: "This tour will not show when you come back. Ever need this tour again? Just tap this button."
        },
        {
          element: e.category2.get(),
          title: "Example category",
          intro: "The <b>'Important'</b> category stores only high-priority to-dos."
        },
        {
          element: e.projectHeader.get(),
          title: "About Projects",
          intro: "These are the groups of to-dos that <i>you</i> make."
        },
        {
          element: e.addProjectIcon.get(),
          title: "Make your own!",
          intro: "After closing the tour, you can click the plus icon to add your own project!"
        },
        {
          element: e.projectLinkLI.get(),
          title: "For example...",
          intro: "Look into this project I made just for you!"
        },
        {
          element: e.projectLink.get(),
          title: "Trouble opening?",
          intro: "<small>(Select done and then you can open the page.)</small>"
        }
      ],
      showBullets: false,
      showProgress: true,
      }).start(),

    () => introJs().setOptions({
      steps: [
        {
          element: e.banner.get(),
          title: "So we continue...",
          intro: "Welcome to  <b>'Tutorial'</b> project page!",
        },
        {
          element: e.addToDoIcon.get(),
          title: "Adding to-dos",
          intro: "This button opens a form to add your new to-dos.",
          position: "left"
        },
        {
          element: e.toDoArticle1.get(),
          title: "More powerful to-dos",
          intro: "A to-do element within a product page also has buttons to edit / delete it."
        },
        {
          element: e.toDoArticle3.get(),
          title: "Want to move?",
          intro: "Just drag a to-do element and drop it on a project link in the menu. <i>Only works on wider screens.</i>"
        },
        {
          element: e.toDoArticle5.get(),
          title: "The Easter Egg",
          intro: "Check this to-do then delete it... You just earned some coins!"
        },
        {
          element: e.toDoArticle6.get(),
          title: "The Cost for Laziness",
          intro: "If you complete an overdue to-do late, you will lose the coins you could have otherwise gained."
        },
        {
          element: e.gameIcon.get(),
          title: "A little reward",
          intro: "Great job getting this far. Spend your hard-earned money at the game panel!",
          position: "left"
        },
      ],
    }).start(),

    () => introJs().setOptions({
      steps: [
        {
          element: e.toDoArticle1.get(), // both to-dos and game cards use the <article> element
          title: "Work hard! Play hard!",
          intro: "Using those coins you earn from completing to-dos, you can pay for a 5-minute game session!",
        },
        {
          element: e.gameImg.get(),
          title: "Game time.",
          intro: "Click the game's thumbnail to play. When you do, the amount of coins specified on the card will be deducted.",
          position: "right"
        },
        {
          title: "By-the-way",
          intro: "You can download this as an app with offline access. Enjoy the productivity gains!"
        },
      ],
      showBullets: false,
      showStepNumbers: true,
      }).start(),
  ]

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
  renderWalkthrough()

  if(!tutorialExists()) {
    populateInitialProjects()
    showAllTasks()
  }

  // prevent sidebar covering tutorial on mobile
  if(e.menuIcon.isVisible() && e.navBar.isVisible()) { // as in mobile screen
    e.navBar.get()?.classList.add("d-none")
  }
})

export { renderWalkthrough }