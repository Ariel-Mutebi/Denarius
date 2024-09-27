import { IntroStep } from "intro.js/src/core/steps"
import e from "./elementDictionary"

const gameSteps: Partial<IntroStep>[] = [
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
]

export default gameSteps