import ToDoCounterUpdate from "../../enums/ToDoCounterUpdate";
import updateToDoCounterParameters from "../../interfaces/updateToDoCounterParams";

function updateProjectCounter(parameters: updateToDoCounterParameters) {
  const { projectID, update } = parameters;

  const counter = document.querySelector<HTMLElement>(`li#\\${projectID} .counter`);
  if (!counter) throw new Error(`counter not found for project with ID: ${projectID}`);

  const currentCount = Number(counter.innerText);

  switch (update) {
    case ToDoCounterUpdate.Increment:
      counter.innerText = `${currentCount + 1}`;
      break;
  
    case ToDoCounterUpdate.Decrement:
      counter.innerText = `${currentCount - 1}`;
      break;

    default:
      throw new Error("Value for update parameter is neither 'INCREMENT' nor 'DECREMENT'.");      
  };

  if(counter.innerHTML === "0") {
    counter.innerText = "";
  };
};

export default updateProjectCounter;