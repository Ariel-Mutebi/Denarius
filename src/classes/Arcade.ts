import GameInterface from "../interfaces/GameInterface";
import GroupOfGroups from "./GroupOfGroups";

class Arcade extends GroupOfGroups<GameInterface> {
  sessionMS: number; // MS as in milliseconds

  constructor(sessionMinutes: number) {
    super();
    this.sessionMS = sessionMinutes * 60 * 1000;
  };
};

const ArcadeInstance =  new Arcade(5);

export default ArcadeInstance;