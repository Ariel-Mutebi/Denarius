import stringWithImageFileExtension from "../types/stringWithImageFileExtension";
import hyperlink from "../types/hyperlink";

interface GameInterface {
  name: string;
  thumbnailURL: stringWithImageFileExtension;
  link: hyperlink;
  cost: number;
};

export default GameInterface;