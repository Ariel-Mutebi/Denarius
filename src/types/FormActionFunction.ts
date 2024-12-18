import ToDoPriority from "../enums/ToDoPriority";
import uuid from "./uuid";

type formActionFunction = (projectID: uuid, title: string, details: string, dateString: string, priority: ToDoPriority) => void;

export default formActionFunction;