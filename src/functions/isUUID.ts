import uuidRegex from "../regex/uuidRegex";

function isUUID(toTest: string) {
  return uuidRegex.test(toTest);
};

export default isUUID;