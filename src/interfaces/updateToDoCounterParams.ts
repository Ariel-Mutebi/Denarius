import ToDoCounterUpdate from "../enums/ToDoCounterUpdate";
import uuid from "../types/uuid";

interface updateToDoCounterParameters {
  projectID: uuid,
  update: ToDoCounterUpdate
}

export default updateToDoCounterParameters