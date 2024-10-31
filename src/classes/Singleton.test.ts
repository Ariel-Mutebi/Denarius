import Singleton from "./Singleton";

test("Singleton class can not be instantiated more than once", () => {
  new Singleton();
  expect(() => new Singleton()).toThrow();
});