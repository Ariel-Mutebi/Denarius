import updateToDoCounterParameters from "../../interfaces/updateToDoCounterParams";

function updateGroupCounter(parameters: updateToDoCounterParameters) {
  const { groupID: projectID, integerToAdd } = parameters;
  const counter = document.querySelector<HTMLElement>(`li#${CSS.escape(projectID)} .counter`);
  if (!counter) throw new Error(`Not selected .counter descendant of list-item with ID: ${projectID}`);
  const currentCount = Number(counter.innerText);
  counter.innerText = `${currentCount + integerToAdd}`;
  if(counter.innerText === "0") counter.innerText = "";
};

export default updateGroupCounter;