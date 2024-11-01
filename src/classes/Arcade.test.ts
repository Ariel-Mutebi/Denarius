import ArcadeInstance from "./Arcade"
import GroupOfGroups from "./GroupOfGroups"

describe("Arcade class", () => {
  test("inherits from GroupOfGroups.", () => {
    expect(ArcadeInstance instanceof GroupOfGroups).toBe(true);
  });

  test("has sessionMS property.", () => {
    expect(typeof ArcadeInstance.sessionMS === "number").toBe(true); // The exact value is not relevant; that's an implementation detail.
  })
});
