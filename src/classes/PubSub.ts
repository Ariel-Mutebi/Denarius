import PSE from "../enums/PubSubEvents";
import ToDoInterface from "../interfaces/ToDoInterface";
import updateToDoCounterParameters from "../interfaces/updateToDoCounterParams";
import putCoins from "../storage/putCoins";
import uuid from "../types/uuid";
import addCategory from "../ui/outputs/addCategory";
import addProject from "../ui/outputs/addProject";
import removeProject from "../ui/outputs/removeProject";
import removeToDo from "../ui/outputs/removeToDo";
import renderMessage from "../ui/outputs/renderMessage";
import putToDoInDOM from "../ui/outputs/putToDoInDom";
import updateProjectCounter from "../ui/outputs/updateToDoCounter";
import Projects from "./Projects";
import Singleton from "./Singleton";

type SubscribersInterface = {
  [event in PSE]: Function[];
};

class PubSub extends Singleton {
  private subscribers: SubscribersInterface = {
    [PSE.PostMessage]: [],
    [PSE.PutCoins]: [],
    [PSE.PostCategory]: [],
    [PSE.PostProject]: [],
    [PSE.PutToDo]: [],
    [PSE.PostProjectCount]: [],
    [PSE.DeleteToDo]: [],
    [PSE.DeleteProject]: [],
    [PSE.PutProjectData]: []
  };

  subscribe(e: PSE, callback: Function) {
    this.subscribers[e].push(callback);
  };

  publish(e: PSE.PostMessage, d: string): void;
  publish(e: PSE.PutCoins, d: number): void;
  publish(e: PSE.PostCategory, d: uuid): void;
  publish(e: PSE.PostProject, d: uuid): void;
  publish(e: PSE.PutToDo, d: ToDoInterface): void;
  publish(e: PSE.PostProjectCount, d: updateToDoCounterParameters): void;
  publish(e: PSE.DeleteToDo, d: uuid): void;
  publish(e: PSE.DeleteProject, d: uuid): void;
  publish(e: PSE.PutProjectData): void;
  publish(e: PSE, d?: any): void {
    this.subscribers[e].forEach((callback) => callback(d));
  };
};

const PS = new PubSub();

// NOTE: These mostly just subscribe UI functions. 
// Many important subscriptions are in Class constructors (e.g. Category constructor).
// And all PS.publish calls are in functions like class methods.
PS.subscribe(PSE.PostCategory, addCategory);
PS.subscribe(PSE.PostProject, addProject);
PS.subscribe(PSE.PutToDo, putToDoInDOM);
PS.subscribe(PSE.PostProjectCount, updateProjectCounter);
PS.subscribe(PSE.DeleteToDo, removeToDo);
PS.subscribe(PSE.DeleteProject, removeProject);
PS.subscribe(PSE.PostMessage, renderMessage);
PS.subscribe(PSE.PutCoins, putCoins);
PS.subscribe(PSE.PutProjectData, Projects.save);

export default PS;