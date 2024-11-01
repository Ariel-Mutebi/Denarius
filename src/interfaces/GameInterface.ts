import stringWithImageFileExtension from "../types/stringWithImageFileExtension";
import hyperlink from "../types/hyperlink";
import IDedInterface from "./IDedInterface";

interface GameInterface extends IDedInterface {
  name: string;
  thumbnailURL: stringWithImageFileExtension;
  link: hyperlink;
  cost: number;
};

export default GameInterface;