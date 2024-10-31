import Game from "../classes/Game";

function initializeGames() {
  new Game("Cross Code", "./thumbnails/cross-code.jpg", "https://www.cross-code.com/en/start", 60);
  new Game("Missile Game", "./thumbnails/missile-game.jpg", "https://missile-game.bwhmather.com/", 40);
  new Game("Chrome Dino", "./thumbnails/chrome-dino.jpeg", "https://chromedino.com/", 20);
};

export default initializeGames;