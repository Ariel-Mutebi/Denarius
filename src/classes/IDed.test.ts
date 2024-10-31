import IDed from "./IDed"

test("IDed class constructor", () => {
  const i = new IDed();
  expect(typeof i.ID === "string" && i.ID.length === 36).toBe(true);
})