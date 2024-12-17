import { v4 } from "uuid";
import uuidRegex from "../regex/uuidRegex";
import IDed from "./IDed";

describe("IDed class", () => {
  test("ID property is UUID.", () => {
    const i = new IDed();
    expect(uuidRegex.test(i.ID)).toBe(true);
  });

  test("accept valid UUID as input and assigns it to ID property.", () => {
    const ID = v4();
    const i = new IDed(ID);
    expect(i.ID).toBe(ID);
  });

  test("does not accept NIL UUID, set its own UUID.", () => {
    const nilUUID = "00000000-0000-0000-0000-000000000000";
    const i = new IDed(nilUUID);
    expect(i.ID).not.toBe(nilUUID);
  });
});