import Game from "./Game"

class GamePanel{
  games: Game[]
  minutes: number

  constructor(minutes: number) {
    this.games = []
    this.minutes = minutes * 60 * 1000
  }

  addGame(newGame: Game) {
    this.games.push(newGame)
  }
}

export default GamePanel