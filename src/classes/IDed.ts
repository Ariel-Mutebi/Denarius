import IDedInterface from "../interfaces/IDedInterface";
import uuid from "../types/uuid";
import { v4 } from "uuid"; 

class IDed implements IDedInterface {
  ID: uuid;
  constructor() {
    this.ID = v4() as uuid;
  };
};

export default IDed;