import PSE from "../enums/PubSubEvents";
import IDed from "./IDed";
import PS from "./PubSub";
import Singleton from "./Singleton";

describe("PubSub class", () => {
  test("inherits from Singleton", () => {
    expect(PS instanceof Singleton).toBe(true);
  });

  test("subscriber receives posted message with expected data", () => {
    const subscriber = jest.fn();
    const category = new IDed(); // it doesn't have to be a real Category.
    PS.subscribe(PSE.PostCategory, subscriber);
    PS.publish(PSE.PostCategory, category.ID);
    expect(subscriber).toHaveBeenCalledWith(category.ID);
  });
});