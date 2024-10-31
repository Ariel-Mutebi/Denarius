import ToDoPriority from "../enums/ToDoPriority";

type formActionFunction = (title: string, details: string, dateString: string, priority: ToDoPriority) => void;

export default formActionFunction;