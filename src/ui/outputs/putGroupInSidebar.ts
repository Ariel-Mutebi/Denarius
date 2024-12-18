import GroupInterface from "../../interfaces/GroupInterface";
import GroupOfGroupsInterface from "../../interfaces/GroupOfGroupsInterface";
import renderGroup from "./renderGroup";
import uuid from "../../types/uuid";
import idempotentDOM from "./idempotentDOM";

function putGroupInSidebar<T extends GroupInterface>(groupID: uuid, GroupManager: GroupOfGroupsInterface<T>) {
  const group = GroupManager.get(groupID);
  if(!group) throw new Error(`Group of ID ${groupID} not found.`);
  
  const groupListId = `${group.gender.toLocaleLowerCase()}-list`;
  const groupList = document.getElementById(groupListId);
  if(!groupList) throw new Error(`element of id ${groupListId} not found.`);

  const listElement = document.createElement("li");
  const listText = document.createElement("p");
  const toDoCounter = document.createElement("span");
  const groupNameSpan = document.createElement("span");

  listElement.id = groupID;
  listElement.classList.add("list-group-item", "list-group-item-action", "d-flex", "justify-content-between", "align-items-center");
  groupNameSpan.innerText = group.name;

  listText.addEventListener("click", () => renderGroup(group));
  listText.classList.add("link-opacity-75", "link-opacity-100-hover", "link-underline-opacity-0", "link-secondary", "user-select-none", "m-0");
  toDoCounter.classList.add("counter", "badge", "p-1", "me-2");
  toDoCounter.innerText = String(group.toDos.length || "");
  
  listText.append(toDoCounter);
  listText.append(groupNameSpan)
  listElement.append(listText);
  idempotentDOM(groupList, listElement, groupID);

  // in case further manipulation is needed
  return { group, listElement };
};

export default putGroupInSidebar;