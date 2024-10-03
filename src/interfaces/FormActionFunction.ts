interface FormActionFunction {
  (title: string, details: string, dateString: string, priority: number): void;
}

export default FormActionFunction