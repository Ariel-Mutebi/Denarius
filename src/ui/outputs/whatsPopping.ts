import CategoriesInstance from "../../classes/Categories";
import ProjectsInstance from "../../classes/Projects";
import arcadeState from "../domConstants/arcadeState";
import renderArcade from "./renderArcade";
import renderGroup from "./renderGroup";

// Set up forward/back buttons
function whatsPopping() {
  window.addEventListener("popstate", (e) => {
    if(e.state) {
      const possiblyProject = ProjectsInstance.get(e.state);
      const possiblyCategory = CategoriesInstance.get(e.state);
      if(possiblyProject) {
        renderGroup(possiblyProject);
      } else if (possiblyCategory) {
        renderGroup(possiblyCategory);
      } else if (e.state === arcadeState) {
        renderArcade();
      };
    };
  });
};

export default whatsPopping;