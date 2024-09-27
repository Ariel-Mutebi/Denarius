import introJs from "intro.js"
import { IntroJs } from "intro.js/src/intro"
import categorySteps from "./categorySteps"
import gameSteps from "./gameSteps"
import projectSteps from "./projectSteps"
import { Options } from "intro.js/src/option"

const createStage = (options: Partial<Options>) => {
  return () => introJs().setOptions(options).start()
}

const stages: (() => Promise<IntroJs>)[] = [
  createStage({
    steps: categorySteps,
    showBullets: false,
    showProgress: true,
  }),

  createStage({ steps: projectSteps }),

  createStage({
    steps: gameSteps,
    showBullets: false,
    showStepNumbers: true,
  }),
]

export default stages