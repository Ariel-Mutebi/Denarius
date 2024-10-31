import GamePanel from "./GamePanel"

class Game {
  constructor(
    public name: string,
    public iconFilePath: string,
    public link: string,
    public cost: number
  ) {
    GamePanel.addGame(this)
  }
}

export default Game;