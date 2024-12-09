import Bank from "../../classes/Bank";
import Arcade from "../../classes/Arcade";
import jsContainer from "../domConstants/projectContainer";
import clearPage from "./clearPage";
import renderMessage from "./renderMessage";
import "../styles/arcadePage.scss";
import arcadeState from "../domConstants/arcadeState";

function renderArcade() {
  clearPage();
  jsContainer.classList.replace("group-page", "arcade-page");
  history.pushState(arcadeState, "", "arcade")

  // heading
  const header = document.createElement("h1");
  header.innerText = "Arcade";
  jsContainer.appendChild(header);

  // creating card for each game
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  for(const game of Arcade.getAll()) {
    const gameContainer = document.createElement("dialog");
    const gamePlay = document.createElement("iframe");
    const closeGame = document.createElement("button");
    const card = document.createElement("article");
    const thumbnail = document.createElement("img");
    const text = document.createElement("div");
    const title = document.createElement("h5");
    const cost = document.createElement("small");
    
    text.classList.add("card-body");
    thumbnail.classList.add("arcade-img");

    thumbnail.src = game.thumbnailURL;
    thumbnail.title = "Click to play!";
    title.innerText = game.name;
    cost.innerHTML = `Cost: <i class="bi bi-coin text-warning"></i> ${game.cost}`;
    gamePlay.src = game.link;

    closeGame.innerHTML = '<i class="bi bi-x-lg"></i>';

    thumbnail.addEventListener("click", () => {

      const userCanPay = Bank.deduct(game.cost);

      if(userCanPay) {
        jsContainer.appendChild(gameContainer);
        gameContainer.showModal();
        renderMessage(`Paid ${game.cost} coins for a 5-minute gaming session.`, gameContainer); // migrate to PubSub

        setTimeout(() => {
          gameContainer.close();
          renderMessage("Session done. Pay again to play.");
        }, Arcade.sessionMS);
      } else {
        renderMessage("Not enough coins to pay. Complete more to-dos.");
      };
    });

    closeGame.addEventListener("click", () => {
      gameContainer.close();
      jsContainer.removeChild(gameContainer);

      Bank.deposit(game.cost);
      renderMessage("Yay! Coins refunded");
    });

    text.appendChild(title);
    text.appendChild(cost);
    card.appendChild(thumbnail);
    card.appendChild(text);
    cardContainer.appendChild(card);
    gameContainer.appendChild(closeGame);
    gameContainer.appendChild(gamePlay);
  };
  
  jsContainer.appendChild(cardContainer);
};

export default renderArcade;