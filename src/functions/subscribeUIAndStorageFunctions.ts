import ProjectsInstance from "../classes/Projects";
import PS from "../classes/PubSub";
import PSE from "../enums/PubSubEvents";
import putCoins from "../storage/putCoins";
import putCategory from "../ui/outputs/putCategory";
import putProject from "../ui/outputs/putProject";
import idempotentlyRenderToDo from "../ui/outputs/idempotentlyRenderToDo";
import removeProject from "../ui/outputs/removeProject";
import removeToDo from "../ui/outputs/removeToDo";
import renderMessage from "../ui/outputs/renderMessage";
import updateGroupCounter from "../ui/outputs/updateToDoCounter";

function subscribeUIAndStorageFunctions() {
  PS.subscribe(PSE.PostCategory, putCategory);
  PS.subscribe(PSE.PutProject, putProject);
  PS.subscribe(PSE.PutToDo, idempotentlyRenderToDo);
  PS.subscribe(PSE.PostGroupCount, updateGroupCounter);
  PS.subscribe(PSE.DeleteToDo, removeToDo);
  PS.subscribe(PSE.DeleteProject, removeProject);
  PS.subscribe(PSE.PostMessage, renderMessage);
  PS.subscribe(PSE.PutCoins, putCoins);
  PS.subscribe(PSE.PutProjectData, () => ProjectsInstance.save()); // closure is necessary
};

export default subscribeUIAndStorageFunctions;
