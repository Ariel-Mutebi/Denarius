import gamePanel from "../constants/gamePanel";

class Game {
  constructor(
    public name: string,
    public iconFilePath: string,
    public link: string,
    public cost: number
  ) {
    gamePanel.addGame(this)
  }
}

export default Game;