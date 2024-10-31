import { IntroStep } from "intro.js/src/core/steps"
import e from "./elementDictionary"

const projectSteps: Partial<IntroStep>[] = [
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
    intro: "Great job getting this far. Spend your hard-earned money at the arcade!",
    position: "left"
  },
]

export default projectSteps