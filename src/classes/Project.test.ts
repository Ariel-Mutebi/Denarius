import { today } from "../functions/dateGenerators"
import instancePropertyCheck from "../forTestFilesOnly/instancePropertyCheck"
import makeStringIndexable from "../typeCasters/makeStringIndexable"
import Project from "./Project"
import ProjectsInstance from "./Projects"
import ToDo from "./ToDo"

describe("Project class:", () => {
  const projectsAddMethod = jest.spyOn(ProjectsInstance, "add")

  const projectName = "Testing"
  const projectToDos = [
    new ToDo("Project class", "Extensively test the Project class using Jest.", today, 3)
  ]
  const project = new Project(projectName, projectToDos)

  describe("constructor:", () => {
    test("adds instance to Projects singleton as side-effect.", () => {
      expect(projectsAddMethod).toHaveBeenCalled()
    })

    test("adds .parentId property to each ToDo in .toDos.", () => {
      for (const toDo of project.toDos) {
        expect(toDo.parentId).toBe(project.id)
      }
    })
  })
})