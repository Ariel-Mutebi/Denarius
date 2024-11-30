import Game from "../classes/Game";
import renderArcade from "../ui/outputs/renderArcade";

function initializeGames() {
  new Game("Cross Code", "./thumbnails/cross-code.jpg", "https://www.cross-code.com/en/start", 60);
  new Game("Missile Game", "./thumbnails/missile-game.jpg", "https://missile-game.bwhmather.com/", 40);
  new Game("Chrome Dino", "./thumbnails/chrome-dino.jpeg", "https://chromedino.com/", 20);
  // add event listener to game icon
  const gameIcon = document.getElementById("game-icon");
  if(gameIcon) {
    gameIcon.addEventListener("click", renderArcade);
  } else {
    throw new Error("#game-icon not selected.");
  };
};

export default initializeGames;