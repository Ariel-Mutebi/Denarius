import Bank from "../../classes/Bank"
import GamePanel from "../../classes/Arcade"
import projectContainer from "../domConstants/projectContainer"
import clearPage from "./clearPage"
import renderMessage from "./renderMessage"

function renderArcade() {
  clearPage()
  projectContainer.classList.replace("to-do-page", "game-page")

  // heading
  const header = document.createElement("h1")
  header.innerText = "Arcade"
  projectContainer.appendChild(header)

  // creating card for each game
  const cardContainer = document.createElement("div")
  cardContainer.classList.add("card-container")

  for(const game of GamePanel.getAll()) {
    const gameContainer = document.createElement("dialog")
    const gamePlay = document.createElement("iframe")
    const closeGame = document.createElement("button")
    const card = document.createElement("article")
    const thumbnail = document.createElement("img")
    const text = document.createElement("div")
    const title = document.createElement("h5")
    const cost = document.createElement("small")
    
    text.classList.add("card-body")
    thumbnail.classList.add("arcade-img")

    thumbnail.src = game.thumbnailURL
    thumbnail.title = "Click to play!"
    title.innerText = game.name
    cost.innerHTML = `Cost: <i class="bi bi-coin text-warning"></i> ${game.cost}`
    gamePlay.src = game.link

    closeGame.innerHTML = '<i class="bi bi-x-lg"></i>'

    thumbnail.addEventListener("click", () => {

      const userCanPay = Bank.deduct(game.cost)

      if(userCanPay) {
        projectContainer.appendChild(gameContainer)
        gameContainer.showModal()
        renderMessage(`Paid ${game.cost} coins for a 5-minute gaming session.`, gameContainer)

        setTimeout(() => {
          gameContainer.close()
          renderMessage("Session done. Pay again to play.")
        }, GamePanel.sessionMS);
      } else {
        renderMessage("Not enough coins to pay. Complete more to-dos.")
      }
    })

    closeGame.addEventListener("click", () => {
      gameContainer.close()
      projectContainer.removeChild(gameContainer)

      Bank.deposit(game.cost)
      renderMessage("Yay! Coins refunded")
    })

    text.appendChild(title)
    text.appendChild(cost)
    card.appendChild(thumbnail)
    card.appendChild(text)
    cardContainer.appendChild(card)
    gameContainer.appendChild(closeGame)
    gameContainer.appendChild(gamePlay)
  }
  
  projectContainer.appendChild(cardContainer)
}

document.getElementById("game-icon")?.addEventListener("click", renderArcade)

export default renderArcade