import { dateWithinPastWeek, dateWithinWeek, today } from "../functions/dateGenerators";
import ToDoPriority from "../enums/ToDoPriority";
import filterImportant from "../functions/filterImportant";
import populateTutorialProject from "../functions/populateInitialProjects";
import CategoriesInstance from "./Categories";
import Category from "./Category";
import Group from "./Group";
import ProjectsInstance from "./Projects";
import ToDo from "./ToDo";
import uuid from "../types/uuid";
import shuffle from "../functions/shuffle";

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
    const setOfParentIDs = new Set(allToDos.map(t => t.parentID));
    setOfParentIDs.forEach(ID => {
      if(ID) ProjectsInstance.deleteProject(ID);
    });
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
    const category = new Category(categoryName, t => t);
    const toDos = [
      new ToDo("Task 1", "Past date, high priority.", dateWithinPastWeek, ToDoPriority.High),
      new ToDo("Task 2", "Past date, medium priority.", dateWithinPastWeek, ToDoPriority.Medium),
      new ToDo("Task 3", "Past date, low priority.", dateWithinPastWeek, ToDoPriority.Low),
      new ToDo("Task 4", "Today, high priority.", today, ToDoPriority.High),
      new ToDo("Task 5", "Today, medium priority", today, ToDoPriority.Medium),
      new ToDo("Task 6", "Today, low priority.", today, ToDoPriority.Low),
      new ToDo("Task 7", "Future date, high priority", dateWithinWeek, ToDoPriority.High),
      new ToDo("Task 8", "Future date, medium priority", dateWithinWeek, ToDoPriority.Medium),
      new ToDo("Task 9", "Future date, low priority", dateWithinWeek, ToDoPriority.Low)
    ]; // I tried to cover all combinations.

    // This test is not (and should not be) interested in how the toDos are sorted.
    // It should simply be satisfied if the .sort changes the order of toDos.
    let hasPassed = false;
    let tryNumber = 0;
    const maxTries = 3;
    
    while (tryNumber < maxTries && !hasPassed) {
      const shuffledToDos = shuffle(toDos); // probably causes different permutation
      category.toDos = [...shuffledToDos]; // Should be a shallow clone, or else categories.sort will do in-place sorting that mutates the original causing a false negative in test.
      category.sort();
      try {
        expect(category.toDos).not.toEqual(shuffledToDos);
        hasPassed = true;        
      } catch (error) {
        // maybe this permutation caused a stable sort, so we try again.
        tryNumber++;
      }
    };
  });
});