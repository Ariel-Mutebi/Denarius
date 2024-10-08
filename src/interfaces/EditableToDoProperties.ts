import uuid from "../types/uuid";

interface EditableToDoProperties {
  isChecked: boolean;
  parentId: uuid | undefined;
  title: string;
  description: string;
  dueDate: Date;
  priorityInteger: number;
}

export default EditableToDoProperties