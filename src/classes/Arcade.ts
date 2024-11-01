import GameInterface from "../interfaces/GameInterface";
import Singleton from "./Singleton";

class Arcade extends Singleton {
  games: GameInterface[];
  sessionMS: number; // MS as in milliseconds

  constructor(sessionMinutes: number) {
    super()
    this.games = [];
    this.sessionMS = sessionMinutes * 60 * 1000;
  };

  addGame(newGame: GameInterface) {
    this.games.push(newGame);
  };
};

const ArcadeInstance =  new Arcade(5);

export default ArcadeInstance;