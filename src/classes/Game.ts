import GameInterface from "../interfaces/GameInterface";
import endsWithImageFileExtension from "../regex/endsWithImageFileExtension";
import startsWithHTTPS from "../regex/startsWithHTTPS";
import hyperlink from "../types/hyperlink";
import stringWithImageFileExtension from "../types/stringWithImageFileExtension";
import Arcade from "./Arcade";
import IDed from "./IDed";

class Game extends IDed implements GameInterface {
  name: string;
  thumbnailURL: stringWithImageFileExtension;
  link: hyperlink;
  cost: number;

  constructor(
    name: string,
    thumbnailURL: stringWithImageFileExtension,
    link: hyperlink,
    cost: number
  ) {
    if(!endsWithImageFileExtension.test(thumbnailURL)) throw new Error("thumbnailURL must end with image file extension.");
    if(!startsWithHTTPS.test(link)) throw new Error("link must start with 'https://'.");
    
    super()
    this.name = name;
    this.thumbnailURL = thumbnailURL;
    this.link = link;
    this.cost = cost;

    Arcade.add(this);
  };
};

export default Game;