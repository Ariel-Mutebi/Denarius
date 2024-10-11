import IDedInterface from "../interfaces/IDedInterface";
import uuid from "../types/uuid";
import { v4 } from "uuid"; 

class IDed implements IDedInterface {
  id: uuid
  constructor() {
    this.id = v4() as uuid
  }
}

export default IDed