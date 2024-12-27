import { IntroStep } from "intro.js/src/core/steps"
import e from "./elementDictionary"

const categorySteps: Partial<IntroStep>[] = [
  {
    title: "Ave, Denarius!",
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
]

export default categorySteps