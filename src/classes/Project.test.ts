import { today } from "../functions/dateGenerators"
import ProjectsInstance from "./Projects"
import Project from "./Project"
import ToDo from "./ToDo"
import instancePropertyCheck from "../forTestFilesOnly/instancePropertyCheck"
import makeStringIndexable from "../typeCasters/makeStringIndexable"
import Group from "./Group"
import ToDoPriority from "../enums/ToDoPriority"

describe("Project class:", () => {
  const projectsAddMethod = jest.spyOn(ProjectsInstance, "add");

  const projectName = "Testing";
  const initialToDo = new ToDo("Project class", "Extensively test the Project class using Jest.", today, ToDoPriority.Medium);
  const project = new Project(projectName, [initialToDo]);

  describe("constructor:", () => {
    test("inherits from Group class", () => {
      expect(project instanceof Group).toBe(true);
    });

    test("adds instance to Projects singleton as side-effect.", () => {
      expect(projectsAddMethod).toHaveBeenCalled();
    });

    test("adds .parentId property to each ToDo in .toDos.", () => {
      for (const toDo of project.toDos) {
        expect(toDo.parentID).toBe(project.ID);
      }
    });
  });

  test("addToDo method", () => {
    const newToDo = new ToDo("addToDo method", "Test if it appends the new ToDo instance to the .toDos array.", today, ToDoPriority.Medium);
    project.addToDo(newToDo);
    const lastToDo = project.toDos.pop();
    if(!lastToDo) throw new Error("project.toDos is empty, even after calling .addToDo method.");
    instancePropertyCheck(makeStringIndexable(lastToDo), makeStringIndexable(newToDo));
  });

  test("deleteToDo method", () => {
    const deletionID = initialToDo.ID;
    const toDoAwardMethod = jest.spyOn(initialToDo, "awardCompletion");
    project.deleteToDo(deletionID);
    expect(project.toDos.find(t => t.ID === deletionID)).toBeFalsy();  
    expect(toDoAwardMethod).toHaveBeenCalled();
  });

  test("receiveDrop method", () => {
    const leavingToDo = new ToDo("Start spreading the news", "I'm leaving today.", today, ToDoPriority.Medium); // this has no parentID
    const projectItsFrom = new Project("New York", [leavingToDo]);
    project.receiveDrop(JSON.stringify(projectItsFrom.toDos[0]));
    expect(projectItsFrom.toDos.length).toBe(0);
    instancePropertyCheck(makeStringIndexable(project.toDos.pop()!), makeStringIndexable(leavingToDo));
  });

  afterAll(() => {
    ProjectsInstance.deleteProject(project.ID)
  });
});