import EditableToDoProperties from "./EditableToDoProperties";
import ToDoProperties from "./ToDoProperties";

interface ToDoInterface extends ToDoProperties {
  updateProperties(positionalParameters: Partial<EditableToDoProperties>): void;
  toggleIsChecked(): void;
  toggleIsChecked(): void;
  awardCompletion(): void;
  isOverDue(): boolean;
  getWorth(): number;
}

export default ToDoInterface