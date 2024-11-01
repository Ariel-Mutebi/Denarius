import instancePropertyCheck from "../forTestFilesOnly/instancePropertyCheck";
import makeStringIndexable from "../typeCasters/makeStringIndexable";
import hyperlink from "../types/hyperlink";
import stringWithImageFileExtension from "../types/stringWithImageFileExtension";
import ArcadeInstance from "./Arcade";
import Game from "./Game";
import IDed from "./IDed";

describe("Game Class", () => {
  const name = "Jest";
  const thumbnailURL = "./thumbnails/JestGame.png";
  const link = "https://jest-game.com";
  const cost = 10;
  const ArcadeSpy = jest.spyOn(ArcadeInstance, "add");
  const game = new Game(name, thumbnailURL, link, cost);

  test("inherits from IDed class", () => {
    expect(game instanceof IDed).toBe(true);
  })

  test("initializes object with all expected properties.", () => {
    instancePropertyCheck(makeStringIndexable(game), { name, thumbnailURL, link, cost });
  });

  test("adds itself to Arcade.", () => {
    expect(ArcadeSpy).toHaveBeenCalledWith(game);
  });

  test("throws error when thumbnailURL does not end with valid image file extension", () => {
    expect(() => new Game(name, "I'm not a jpg." as string as stringWithImageFileExtension, link, cost)).toThrow();
  });

  test("throws error when link does not start with https", () => {
    expect(() => new Game(name, thumbnailURL, "http://jest-game.com" as string as hyperlink, cost)).toThrow();
  });
});