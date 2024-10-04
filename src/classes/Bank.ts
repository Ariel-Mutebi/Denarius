import bus from "../pubsub/bus"
import getCoins from "../storage/getCoins"
import Singleton from "./Singleton"

class Bank extends Singleton{
  constructor(
    private coins: number
  ) {
    super()
  }

  deposit(amount: number) {
    this.coins += amount
    this.depositMessage(amount)
    this.store()
  }

  deduct(amount: number) {
    const deductible = (this.coins - amount) >= 0

    if(deductible) {
      this.coins -= amount
      this.deductMessage(amount)
    } else {
      this.coins = 0
      this.undetuctibleMessage()
    }

    this.store()

    return deductible
  }

  showBalance() {
    return this.coins
  }

  private depositMessage(amount: number) {
    bus.publish("coin-message", 
      `Yay! You earned ${amount} coins. Total coins:  ${this.showBalance()}`
    )
  }

  private deductMessage(amount: number) {
    bus.publish("coin-message", 
      `You lost ${amount} coins. Balance: ${this.showBalance()}`
    )
  }

  private undetuctibleMessage() {
    bus.publish("coin-message", "Error! Coins to few to subtract from.")
  }

  private store() {
    bus.publish("put-coins", this.coins)
  }
}

const BankInstance = new Bank(getCoins())

export default BankInstance