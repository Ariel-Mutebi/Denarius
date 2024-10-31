import ProjectsInstance from "../classes/Projects";
import PS from "../classes/PubSub";
import PSE from "../enums/PubSubEvents";
import putCoins from "../storage/putCoins";
import addCategory from "../ui/outputs/addCategory";
import addProject from "../ui/outputs/addProject";
import putToDoInDOM from "../ui/outputs/putToDoInDom";
import removeProject from "../ui/outputs/removeProject";
import removeToDo from "../ui/outputs/removeToDo";
import renderMessage from "../ui/outputs/renderMessage";
import updateProjectCounter from "../ui/outputs/updateToDoCounter";

function subscribeUIAndStorageFunctions() {
  PS.subscribe(PSE.PostCategory, addCategory);
  PS.subscribe(PSE.PostProject, addProject);
  PS.subscribe(PSE.PutToDo, putToDoInDOM);
  PS.subscribe(PSE.PostProjectCount, updateProjectCounter);
  PS.subscribe(PSE.DeleteToDo, removeToDo);
  PS.subscribe(PSE.DeleteProject, removeProject);
  PS.subscribe(PSE.PostMessage, renderMessage);
  PS.subscribe(PSE.PutCoins, putCoins);
  PS.subscribe(PSE.PutProjectData, ProjectsInstance.save);
};

export default subscribeUIAndStorageFunctions;
