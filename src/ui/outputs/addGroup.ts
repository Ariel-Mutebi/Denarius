import GroupInterface from "../../interfaces/GroupInterface";
import GroupOfGroupsInterface from "../../interfaces/GroupOfGroupsInterface";
import renderGroup from "./renderGroup";
import uuid from "../../types/uuid";

function addGroup<T extends GroupInterface>(groupID: uuid, GroupManager: GroupOfGroupsInterface<T>) {
  const group = GroupManager.get(groupID);
  if(!group) throw new Error(`Group of ID ${groupID} not found.`);
  
  const groupListId = `${group.gender.toLocaleLowerCase()}-list`;
  const groupList = document.getElementById(groupListId);
  if(!groupList) throw new Error(`element of id ${groupListId} not found.`);

  const listElement = document.createElement("li");
  const listText = document.createElement("p");
  const toDoCounter = document.createElement("span");
  const groupNameSpan = document.createElement("span");

  toDoCounter.classList.add("counter");
  groupNameSpan.innerText = group.name;
  listText.addEventListener("click", () => renderGroup(group));
  listElement.id = groupID;

  listText.append(toDoCounter);
  listText.append(groupNameSpan);
  listElement.append(listText);
  groupList.appendChild(listElement);

  // in case further manipulation is needed
  return { group, listElement };
};

export default addGroup;