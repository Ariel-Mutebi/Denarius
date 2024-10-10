import Project from "../classes/Project";
import ToDo from "../classes/ToDo";
import { dateWithinMonth, today, dateWithinWeek, dateWithinPastWeek } from "../functions/dateGenerators";

function populateInitialProjects() {
  new Project("Tutorial", [
    new ToDo("Important task", "This is high-priority. Notice the red border color-coding.", dateWithinMonth(), 3),
    new ToDo("Nice-to-do task", "This is medium-priority. It's color-coded orange", dateWithinMonth(), 2),
    new ToDo("Just for fun", "This is low-priority. It's flagged as green.", dateWithinMonth(), 1),
    new ToDo("Finish today", "Here is a to-do that is due today!", today, 3),
    new ToDo("Week's work", "This is something you just need to do sometime this week.", dateWithinWeek, 2),
    new ToDo("Too Late", "Overdue to-dos are color-coded this bronze hue", dateWithinPastWeek, 2)
  ], "bi-pencil-fill")
}

export default populateInitialProjects