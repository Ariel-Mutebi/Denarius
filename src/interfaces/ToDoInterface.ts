import EditableToDoProperties from "./EditableToDoProperties";
import ToDoProperties from "./ToDoProperties";

interface ToDoInterface extends ToDoProperties {
  updateProperties(positionalParameters: Partial<EditableToDoProperties>, publish?: boolean): void;
  toggleIsChecked(): void;
  toggleIsChecked(): void;
  awardCompletion(): void;
  isOverDue(): boolean;
  getWorth(): number;
}

export default ToDoInterface