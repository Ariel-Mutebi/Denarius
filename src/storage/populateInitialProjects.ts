import Project from "../classes/Project";
import ToDo from "../classes/ToDo";
import ToDoPriority from "../enums/ToDoPriority";
import { dateWithinMonth, today, dateWithinWeek, dateWithinPastWeek } from "../functions/dateGenerators";

function populateTutorialProject() {
  return new Project("Tutorial", [
    new ToDo("Important task", "This is high-priority. Notice the red border color-coding.", dateWithinMonth(), ToDoPriority.High),
    new ToDo("Nice-to-do task", "This is medium-priority. It's color-coded orange", dateWithinMonth(), ToDoPriority.Medium),
    new ToDo("Just for fun", "This is low-priority. It's flagged as green.", dateWithinMonth(), ToDoPriority.Low),
    new ToDo("Finish today", "Here is a to-do that is due today!", today, ToDoPriority.High),
    new ToDo("Week's work", "This is something you just need to do sometime this week.", dateWithinWeek, ToDoPriority.Medium),
    new ToDo("Too Late", "Overdue to-dos are color-coded this bronze hue", dateWithinPastWeek, ToDoPriority.High)
  ], "bi-pencil-fill");
};

export default populateTutorialProject;