import populateTutorialProject from "../functions/populateInitialProjects";
import GroupOfGroups from "./GroupOfGroups";
import ProjectsInstance from "./Projects";
import * as storeProjectsModule from "../storage/storeProjects";

describe("Projects singleton instance:", () => {
  const tutorialProject = populateTutorialProject();
  const tutorialExists = () => ProjectsInstance.projectExists(p => p.ID === tutorialProject.ID);

  test("inherits from GroupOfGroups", () => {
    expect(ProjectsInstance instanceof GroupOfGroups).toBe(true);
  });

  test("getAllToDos method", () => {
    expect(ProjectsInstance.getAllToDos()).toEqual(tutorialProject.toDos);
  });

  test("projectExists method", () => {
    expect(tutorialExists()).toBe(true);
  });

  test("save method calls storeProjects as a side-effect", () => {
    const warehouseSpy = jest.spyOn(storeProjectsModule, "default");
    ProjectsInstance.save();
    expect(warehouseSpy).toHaveBeenCalledWith([tutorialProject]);
  });

  test("deleteProject method", () => {
    ProjectsInstance.deleteProject(tutorialProject.ID);
    expect(tutorialExists()).toBe(false);
  });
});