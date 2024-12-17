import isUUID from "../functions/isUUID";
import IDedInterface from "../interfaces/IDedInterface";
import uuid from "../types/uuid";
import { v4 } from "uuid"; 

class IDed implements IDedInterface {
  ID: uuid;
  constructor(presetID?: string) {
    if(presetID && isUUID(presetID)) {
      this.ID = presetID as uuid;
    } else {
      this.ID = v4() as uuid;
    };
  };
};

export default IDed;