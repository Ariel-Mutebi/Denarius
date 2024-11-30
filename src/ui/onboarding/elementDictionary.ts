import elementDictionaryInterface from "../../interfaces/elementDictionaryInterface";

// factory function pattern for more dynamic object creation
const createElementDictionary: () => elementDictionaryInterface = () => {
  const stepElement = (get: () => HTMLElement | null, stagehand = false, changer = false) => {
    const isVisible = () => !get()?.classList.contains("d-none");
    return {get, stagehand, changer, isVisible};
  };

  const banner = stepElement(() => document.getElementsByTagName("h2")[0]);
  
  const toDoArticle1 = stepElement(() => document.getElementsByTagName("article")[0], false, true);
  const toDoArticle2 = stepElement(() => document.getElementsByTagName("article")[1], false, true);
  const toDoArticle3 = stepElement(() => document.getElementsByTagName("article")[2], false, true);
  const toDoArticle4 = stepElement(() => document.getElementsByTagName("article")[3], false, true);
  const toDoArticle5 = stepElement(() => document.getElementsByTagName("article")[4], false, true);
  const toDoArticle6 = stepElement(() => document.getElementsByTagName("article")[5], false, true);

  const menuIcon = stepElement(() => document.getElementById("menu-icon"), false, true);
  const sidebar = stepElement(() => document.getElementsByTagName("nav")[0]);
  const tourButton = stepElement(() => document.querySelector<HTMLButtonElement>("button[title='create tour']"));
  const category2 = stepElement(() => document.querySelectorAll<HTMLLIElement>("#category-list > li")[1]);
  const addProjectIcon = stepElement(() => document.getElementById("add-project-icon"));
  const projectHeader = stepElement(() => document.getElementById("project-header"));
  const projectLinkLI = stepElement(() => document.getElementById("project-list"));
  const projectLink = stepElement(() => {
    const link = document.querySelectorAll<HTMLElement>("#project-list > li > p")[0];

    sidebar.get()?.addEventListener("click", () => {
      if(menuIcon.isVisible() && sidebar.isVisible()) {
        sidebar.get()?.classList.add("d-none");
      };
    });
    
    return link;
  }, true);

  const addToDoIcon = stepElement(() => document.querySelector<HTMLElement>("i.bi-journal-plus"));
  const gameIcon = stepElement(() => document.getElementById("game-icon"), true);
  
  const gameImg = stepElement(() => document.getElementsByTagName("img")[0]);

  return {
    banner,
    toDoArticle1,
    toDoArticle2,
    toDoArticle3,
    toDoArticle4,
    toDoArticle5,
    toDoArticle6,
    menuIcon,
    sidebar,
    tourButton,
    category2,
    projectHeader,
    projectLink,
    projectLinkLI,
    addProjectIcon,
    addToDoIcon,
    gameIcon,
    gameImg
  };
};

// singleton
const elementDictionary = createElementDictionary();

export default elementDictionary;