import { v4 as universalUniqueIdentifier } from "uuid";
import ToDoPriority from "../enums/ToDoPriority";
import { dateWithinMonth, today } from "../functions/dateGenerators";
import filterImportant from "../functions/filterImportant";
import populateTutorialProject from "../storage/populateInitialProjects";
import CategoriesInstance from "./Categories";
import Category from "./Category";
import Group from "./Group";
import ProjectsInstance from "./Projects";
import ToDo from "./ToDo";
import uuid from "../types/uuid";

describe("Category class:", () => {
  const categoryName = "Jest";
  test("Inherits from Group class.", () => {
    expect(new Category(categoryName, t => t) instanceof Group).toBe(true);
  });

  test("Gets all existing to-dos and filters them on initialization.", () => {
    populateTutorialProject();
    // To prevent side-effects of other test suites from affecting this suite,
    // I made all ToDos initialized in other suites have a medium or low priority,
    // While this one only concerns itself with ToDos with a high priority.
    const category = new Category(categoryName, filterImportant);
    const allToDos = ProjectsInstance.getAllToDos();
    const allFiltered = filterImportant(allToDos);

    // Can not use `expect(category.toDos).toEqual(allFiltered);`
    // because differing array positions cause false negative.
    // Hence this suboptimal solution.
    const allInCategory = allFiltered.every(toDo => {
      // JS interpreter compares object references when checking for equality.
      // So, the objects must be stringified to avoid a false negative.
      return category.toDos.some(ct => JSON.stringify(ct) === JSON.stringify(toDo));
    });
    expect(allInCategory).toBe(true);

    // clean-up
    const unprocessedParentIDs = allToDos.map(t => t.parentID);
    const allProjectIDs: uuid[] = [];
    for (const projectID of unprocessedParentIDs) {
      if(!projectID || (allProjectIDs.indexOf(projectID) !== -1)) continue;

      ProjectsInstance.deleteProject(projectID);
      allProjectIDs.push(projectID);
    }
  });

  test("Adds itself to Categories singleton.", () => {
    const categoriesSpy = jest.spyOn(CategoriesInstance, "add");
    new Category("Side-effect", t => t);
    expect(categoriesSpy).toHaveBeenCalled();
  });

  test("updateCategory method filters newToDos, adds them, and calls .sort", () => {
    const category = new Category(categoryName, filterImportant);
    const sortSpy = jest.spyOn(category, "sort");
    const newToDos = [
      new ToDo("Greet", "Hello, world!", today, ToDoPriority.Medium),
      new ToDo("Do job", "Test updateCategory method.", today, ToDoPriority.High)
    ];
    const filteredTodos = filterImportant(newToDos);
    category.updateCategory(newToDos);
    expect(sortSpy).toHaveBeenCalled();
    expect(category.toDos).toEqual(filteredTodos);
  });

  test("removeToDo method", () => {
    const category = new Category(categoryName, t => t);
    const toDo = new ToDo("Oh, no!", "I'm going to die...", today, ToDoPriority.High);
    category.updateCategory([toDo]);
    expect(category.toDos).toEqual([toDo]);
    category.removeToDo(toDo.ID);
    expect(category.toDos.length).toBe(0);
  });

  test("removeProject method", () => {
    populateTutorialProject();
    const projectIDs = new Set(ProjectsInstance.getAllToDos().map(t => t.parentID!));
    const category = new Category(categoryName, filterImportant);

    expect(category.toDos.length).toBeGreaterThan(0);

    for (const projectID of projectIDs) {
      category.removeProject(projectID);
    };

    expect(category.toDos.length).toBe(0);
  });

  test("sort method", () => {
    // This test is not (and should not be) interested in how the toDos are sorted.
    // It should simply be satisfied if the .sort changes the order of toDos.
    const toDoWithUniqueProperties = () => {
      return new ToDo(
        universalUniqueIdentifier(),
        universalUniqueIdentifier(),
        dateWithinMonth(),
        Math.floor(1 + Math.random() * 3 )
      );
    };
    const arbitraryNumber = 3;
    const unsortedToDos = Array.from({ length: arbitraryNumber }, toDoWithUniqueProperties);
    const category = new Category(categoryName, filterImportant);
    category.toDos = unsortedToDos;
    category.sort();
    expect(category.toDos).not.toEqual(unsortedToDos);
  });
});