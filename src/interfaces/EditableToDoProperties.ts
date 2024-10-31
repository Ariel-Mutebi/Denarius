import ToDoPriority from "../enums/ToDoPriority";
import uuid from "../types/uuid";

interface EditableToDoProperties {
  isChecked: boolean;
  parentID: uuid | undefined;
  title: string;
  description: string;
  dueDate: Date;
  priority: ToDoPriority;
}

export default EditableToDoProperties