function putCoins(coins: number) {
  localStorage.setItem("coins", String(coins))
}

export default putCoins