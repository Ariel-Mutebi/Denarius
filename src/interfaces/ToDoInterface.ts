import uuid from "../types/uuid";
import EditableToDoProperties from "./EditableToDoProperties";

interface ToDoInterface extends EditableToDoProperties {
  id: uuid;
  updateProperties(positionalParameters: Partial<EditableToDoProperties>): void;
  toggleCheck(): void;
  toggleCheck(): void;
  awardCompletion(): void;
  isOverDue(): boolean;
  getWorth(): number;
}

export default ToDoInterface